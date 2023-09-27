import React, { Component } from 'react'
import TableBody from './tableBody';
import TableHeader from './tableHeader';
class Table extends Component {
 
    render() {  
        const {columns ,sortColumns ,onSort ,data} =this.props
        return (
          <table className="table">
            <TableHeader
              columns={columns}
              sortColumns={sortColumns}
              onSort={onSort}
            />
            <TableBody data={data} columns={columns} />
          </table>
        );
    }
}
 
export default Table;