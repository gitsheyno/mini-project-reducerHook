import { useReducer } from "react";

const reducerFunction = (state, action) => {
  console.log(action);
  if (action.type === "OPENACCOUNT") {
    return {
      ...state,
      balance: +500,
      accountisOpen: true,
    };
  } else if (action.type === "DEPOSIT") {
    return {
      ...state,
      balance: state.balance + 100,
    };
  } else if (action.type === "WITHDRAW") {
    return {
      ...state,
      balance: state.balance - 50,
    };
  } else if (action.type === "REQLOAN") {
    return {
      ...state,
      balance: state.balance + 5000,
      activeLoan: true,
      loan: +5000,
    };
  } else if (action.type === "PAYLOAN") {
    return {
      ...state,
      balance: state.balance - state.loan,
      loan: 0,
      activeLoan: false,
    };
  } else if (action.type === "CLOSE") {
    return {
      ...state,
      accountisOpen: false,
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

  const despositHandler = () => {
    dispatch({ type: "DEPOSIT" });
  };

  const withdrawHandler = () => {
    dispatch({ type: "WITHDRAW" });
  };

  const reqLoanHandler = () => {
    !state.activeLoan && dispatch({ type: "REQLOAN" });
  };

  const payLoanHandler = () => {
    state.balance > state.loan && dispatch({ type: "PAYLOAN" });
  };
  const closeHandler = () => {
    !state.loan && !state.balance && dispatch({ type: "CLOSE" });
  };
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance : {state.balance}</p>
      <p>Loan : {state.loan}</p>
      <button disabled={state.accountisOpen} onClick={openAccountHandler}>
        open account
      </button>
      <button disabled={!state.accountisOpen} onClick={despositHandler}>
        deposit 100
      </button>
      <button
        disabled={!state.accountisOpen || state.balance === 0}
        onClick={withdrawHandler}
      >
        withdraw 50
      </button>
      <button
        disabled={!state.accountisOpen || state.activeLoan}
        onClick={reqLoanHandler}
      >
        Request a loan
      </button>
      <button disabled={!state.accountisOpen} onClick={payLoanHandler}>
        pay loan
      </button>
      <button disabled={!state.accountisOpen} onClick={closeHandler}>
        Close Account
      </button>
    </div>
  );
}

export default App;
