export function selectBook(book) {
  //선택한 책은 액션 생성자이고 액션 반환이 필요함, 타입은 프로퍼티 오브젝트
  return {
    type: "BOOK_SELECTED",
    payload: book,
  };
}
