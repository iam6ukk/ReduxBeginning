import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";
// 액션 생성자 -> 생성된 액션이 모든 리듀서에 흘러가는 지 확인

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      // 책 리스트를 this.props로 연결
      // 배열에 map 함수 사용
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          // 클릭될 때마다 props 부분 호출되고 book 전달
          className="list-group-item"
        >
          {book.title}
        </li>
        // 책 제목 작성
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
    // 함수 호출 해 리스트 생성
  }
}

function mapStateToProps(state) {
  // 애플리케이션의 state를 요소로 가짐
  // state -> 책 배열과 Active Book을 가짐
  // 반환되는 것 무엇이든지 booklist안의 props 형태로 보여짐
  return {
    books: state.books,
    // 리덕스와 컨테이너의 컴포넌트 연결
    // state.books -> books 리듀서가 books 프로퍼티로 반환됨 (객체 배열)
  };
}

// 이 함수로 반환받은 것이 BookList 컨테이너의 props로 연결됨
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
  // selectBook이 호출될 때마다, 결과는 리듀서로 전달되어야 함
  // mapStateToprops와 같은 방식으로 이를 반환, 컨테이너의 props로 연결
  // 이 함수로 반환받는 것은 첫번째 요소로 전달되는 무엇이든 컨테이너의 props로 이용 가능
  // this.props.selectBook
}

// 컴포넌트에서 컨테이너로 BookList를 바꿔야하는데,
// 이는 새로운 disaptch 메소드인 selectBook을 알아야 하며, props로 이용 가능
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// connect 함수는 이 컴포넌트와 함수를 가져와 컨테이너 반환
