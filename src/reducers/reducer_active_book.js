// state argument is not application state
// only the state this reducer is responsible for

export default function (state = null, action) {
  // action을 통해 Reducer가 application state 변화
  // dispatch될 때마다 모든 Reducer로 흘러감
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
    // 선택한 책에 대한 액션의 페이로드를 반환
  }
  return state;
}
