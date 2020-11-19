import React, { useState, useEffect } from "react";
import { getTransactionHistory } from "../asset/data/service";
import RoundedRectangle from "../components/RoundedRectangle";

function TransactionList(props) {
  const [transactions, setTransactions] = useState([]);
  // useEffect(() => {
  //   getTransactionHistory(setTransactions);
  // }, []);
  useEffect(() => {
    fetch(
      "https://464c6c8c-682a-40cf-a704-268cf332525d.mock.pstmn.io/transactionHistory"
    )
      .then((res) => res.json())
      .then((result) => {
        setTransactions(result);
      });
  }, []);
  return (
    <div className="TransactionList">
      {transactions.map((x) => getDateTransactions(x))}
    </div>
  );
}

function getDateTransactions(x) {
  console.log(x);
  return (
    <div>
      <h6>{x.date}</h6>
      {x.transactionList.map((transaction) => getTransaction(transaction))}
    </div>
  );
}

function getTransaction(transaction) {
  return (
    <React.Fragment>
      <div className="icon">
        <i
          class={transaction.type === "credit" ? "fas fa-plus" : "fas fa-minus"}
        ></i>
      </div>
      <RoundedRectangle>
        <p>{transaction.type}</p>
        <p>{transaction.to}</p>
        <p>{transaction.for}</p>
        <p>{transaction.currency}</p>
        <p>{transaction.amount}</p>
      </RoundedRectangle>
    </React.Fragment>
  );
}
export default TransactionList;
