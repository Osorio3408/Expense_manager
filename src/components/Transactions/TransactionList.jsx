import React from "react";
import { useGlobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions } = useGlobalState();

  return (
    <>
      <h2 className="text-slate-300 text-2xl font-bold block w-full text-center md:text-left">
        Transacciones:
      </h2>
      {transactions.length === 0 ? (
        <p className="text-center">No hay transacciones</p>
      ) : (
        <ul className="h-20 md:h-80 w-full overflow-scroll pb-2 md:pb-0 md:overflow-auto md:px-2">
          {transactions.map((transaction) => {
            return (
              <TransactionItem transaction={transaction} key={transaction.id} />
            );
          })}
        </ul>
      )}
    </>
  );
}

export default TransactionList;
