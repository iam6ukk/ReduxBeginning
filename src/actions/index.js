export function selectBook(book) {
  // selectBook은 액션 생성자이고 액션 반환이 필요함, 타입은 프로퍼티 오브젝트
  // 액션 생성자는 리덕스에 연결되어야 함
  return {
    type: "BOOK_SELECTED",
    payload: book,
  };
}
