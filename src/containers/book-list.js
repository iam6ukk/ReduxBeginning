import React, {Component} from 'react';

export default class Booklist extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return(
                <li key={book.title} className="List-group-item">{book.title}</li>
            );
        });
    }

    
    render(){
        return(
            <ul className="List-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}