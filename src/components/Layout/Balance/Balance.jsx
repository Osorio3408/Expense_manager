// import React, { useContext } from "react";
import { useGlobalState } from "../../../context/GlobalState";

export const Balance = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex justify-between">
      <h2 className="font-bold">Tú Balance</h2>
      <h3 className="text-lg font-bold">${total}</h3>
    </div>
  );
};
