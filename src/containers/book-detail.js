import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }
    // 초기값 null 시 리턴할 값
    // 책 클릭하면 애플리케이션 state가 업데이트 되고 컨테이너 리렌더링

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
  // activeBook state를 book props로 매핑
}

export default connect(mapStateToProps)(BookDetail);
