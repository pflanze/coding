import React from "react";
// 7. step
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions";
//import { login } from './actions'
const App = () => {
  // 8. step
  const counter = useSelector((state) => state.counter);
  //const userLog = useSelector((state) => state.userLog);
  // 9. step
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <h1>Hey, my value is {counter}</h1>
      <button onClick={() => dispatch(actions.increment())}>+</button>
      <button onClick={() => dispatch(actions.decrement())}>-</button>
    </React.Fragment>
  );
};
export default App;