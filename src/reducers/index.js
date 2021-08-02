import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

const rootReducer = combineReducers({
  // Reducer는 combineReducers에 의해 연결됨 (스테이트 매핑)
  books: BooksReducer,
  activeBook: ActiveBook,
  // key는 state의 이름이며, 값은 리듀서 그 자체
  // Reducer는 state를 생성할 권리가 있음
  // ActiveBook Reducer가 반환하는 무엇이든 activeBook의 application state로 이용
});

export default rootReducer;
