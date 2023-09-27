import React, { Component } from "react";
import Like from "./comman/Like";
import Table from "./comman/table";

class MoviesTable extends Component {
  // raiseSort = (path) => {
  //   const sortColumn = {...this.props.sortColumn };
  //   if (sortColumn.path === path)
  //     sortColumn.order = sortColumn.order === "asc" ?"desc":"asc";
  //   else {
  //     sortColumn.path = path;
  //     sortColumn.order = "asc";
  //   }
  //   this.props.onSort(sortColumn );
  // };
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stok" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onLiked={() => this.props.onLiked(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onSort, sortColumns } = this.props;
    return (
     <Table data={movies} columns={this.columns } sortColumns={sortColumns} onSort={onSort} />
    //  <table className="table">
    //      <thead>
    //       <tr>
    //         <th onClick={() => this.raiseSort("title")}>Title</th>
    //         <th onClick={() => this.raiseSort("genre.name")}>Genres</th>
    //         <th onClick={() => this.raiseSort("numberInStoke")}>Stoke</th>
    //         <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
    //         <th />
    //         <th />
    //       </tr> 
    //     </thead> */}
    //     <TableHeader
    //       columns={this.columns}
    //       sortColumns={sortColumns}
    //       onSort={onSort}
    //     />
    //     <TableBody data={movies} columns={this.columns} /> */}
    //     {/* <tbody>
    //       {/* becouse movies ab loacaly hogaya h */}
    //     {/* this.state.Movies.map((movie) */}
    //     {/* {movies.map((movie) => (
    //         <tr key={movie._id}>
    //           <td>{movie.title}</td>
    //           <td>{movie.genre.name}</td>
    //           <td>{movie.numberInStock}</td>
    //           <td>{movie.dailyRentalRate}</td>
    //           <td>
    //             <Like liked={movie.liked} onLiked={() => onLiked(movie)} />
    //           </td>
    //           <td>
    //             <button
    //               onClick={() => onDelete(movie)}
    //               className="btn btn-danger btn-sm"
    //             >
    //               Delete
    //             </button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody> 
    // </table> 

    );
  }
}

// const MoviesTable = (prpos) => {
//there is an tiny issue in this implimentation bcz whenevere we raise an event in other component then then we have to dublicate this logic in that component also isi liye cc banaya

// };

export default MoviesTable;
