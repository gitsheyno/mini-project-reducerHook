import { useReducer } from "react";

const reducerFunction = (state, action) => {
  console.log(action);
  if (action.type === "OPENACCOUNT") {
    return {
      ...state,
      balance: 500,
      accountisOpen: true,
    };
  }
  return state;
};
function App() {
  const [state, dispatch] = useReducer(reducerFunction, {
    balance: 0,
    loan: 0,
    activeLoan: false,
    accountisOpen: false,
  });

  const openAccountHandler = () => {
    console.log("hello");
    dispatch({ type: "OPENACCOUNT" });
  };
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance : {state.balance}</p>
      <p>Loan : {state.loan}</p>
      <button onClick={openAccountHandler}>open account</button>
      <button disabled={!state.accountisOpen}>deposit 100</button>
      <button disabled={!state.accountisOpen}>withdraw 50</button>
      <button disabled={!state.accountisOpen}>Request a loan</button>
      <button disabled={!state.accountisOpen}>pay loan</button>
      <button disabled={!state.accountisOpen}>Close Account</button>
    </div>
  );
}

export default App;
