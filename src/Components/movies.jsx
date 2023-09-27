import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./comman/pagination";
import { Paginate } from "../utills/paginate";
import ListGroup from "./comman/listGroup";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    Movies: [], // reason why we initial the emplty array bcz it takes some time to take data from the server during this time u make sure movies and genres are not unkdefined otherwise u get run time error
    genres: [],
    PageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "AllGenres" }, ...getGenres()];
    this.setState({ Movies: getMovies(), genres: genres });
  }

  HandleitemSellect = (genres) => {
    this.setState({ sellectedGenre: genres, currentPage: 1 });
  };

  HandleDelete = (movie) => {
    const movies = this.state.Movies.filter((m) => m._id !== movie._id);
    //this.setState({Movies }) // if both name same hota to aise kar sakte h
    this.setState({ Movies: movies });
  };
  HandleLiked = (movie) => {
    const movies = [...this.state.Movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ Movies: movies });
  };
  HandlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  HandleSort = (sortColumn) => {
    // const sortColumn ={...this.state.sortColumn};
    //   if (sortColumn.path === path)
    //     sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
    //   else {
    //     sortColumn.path = path;
    //     sortColumn.order = 'asc'
    //   }
    this.setState({ sortColumn });
  };
  getPageData = () => {
    const {
      currentPage,
      PageSize,
      sellectedGenre,
      Movies: allmovies,
      sortColumn,
    } = this.state;
    const filtered =
      sellectedGenre && sellectedGenre._id
        ? allmovies.filter((m) => m.genre._id === sellectedGenre._id)
        : allmovies;
    // miane kiya h filter>sort >paginate
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    // const Movies = Paginate(filtered, currentPage, PageSize);
    const Movies = Paginate(sorted, currentPage, PageSize);
    return { totalCount: filtered.length, data: Movies };
  };

  render() {
    //const { length } = this.state.Movies;
    const { length: count } = this.state.Movies;
    const {
      currentPage,
      PageSize,
      // sellectedGenre,
      // Movies: allmovies,
      sortColumn,
    } = this.state;

    if (count === 0) return <h4>There is no Movie in the database </h4>;
    const { totalCount, data: Movies } = this.getPageData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            sellectedItem={this.state.sellectedGenre}
            onitemSellect={this.HandleitemSellect}
            // textProperty="name"
            // valueProperty="_id" // after passing the default props no need to pass these two props
          />
        </div>
        <div className="col">
          <p> Showing {totalCount} movies in the database</p>
          <MoviesTable
            movies={Movies}
            onLiked={this.HandleLiked}
            sortColumn={sortColumn}
            onDelete={this.HandleDelete}
            onSort={this.HandleSort}
          />
          {/* <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genres</th>
                <th>Stoke</th>
                <th>Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {Movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onLiked={() => this.HandleClick(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.HandleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
      </table>  */}

          {/*There is a problem in this implimentation bcz user must have pass these prpos ->what if they forgot to pass these any one props or pass wrong props */}
          <Pagination
            itemCount={totalCount}
            PageSize={PageSize}
            currentPage={currentPage}
            onPageChange={this.HandlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
