// 리듀서 요소 : state, action
// action을 통해 Reducer가 application state 변화
// dispatch될 때마다 모든 Reducer로 흘러감
export default function (state = null, action) {
  // 요소가 undefined이면, null로 세팅
  // 애플리케이션 시작 시 액티브 북의 state는 null (선택된 게 없으니까)
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
    // 선택한 책에 대한 액션의 페이로드를 반환
  }
  return state;
  // 아무 책도 선택되지 않은 상태 -> 단순히 state 반환
}
