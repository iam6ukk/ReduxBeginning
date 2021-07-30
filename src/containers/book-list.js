import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books,
  };
}

//  이 함수로 반환받은 것이 BookList 컨테이너의 props로 연결됨
function mapDispatchToProps(dispatch) {
  // selectBook이 호출될 때마다, 결과는 리듀서로 전달되어야 함
  return bindActionCreators({ selectBook: selectBook }, dispatch);
  // mapStateToprops와 같은 방식으로 이를 반환, 컨테이너의 props로 연결
  // 이 함수로 반환받는 것은 첫번째 요소로 전달되는 무엇이든 컨테이너의 props로 이용 가능
  // this.props.selectBook
}

// 컴포넌트에서 컨테이너로 BookList를 바꿔야하는데,
// 이는 새로운 disaptch 메소드인 selectBook을 알아야 하며, props로 이용 가능
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
