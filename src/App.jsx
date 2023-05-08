import React from "react";
import { IncomeExpenses } from "./components/Layout/IncomeExpenses/IncomeExpenses";
import { Header } from "./components/Layout/Header/Header";
import { Balance } from "./components/Layout/Balance/Balance";
import { GlobalProvider } from "./context/GlobalState";
import TransactionForm from "./components/Transactions/TransactionForm";
import TransactionList from "./components/Transactions/TransactionList";
import ExpenseChart from "./components/Layout/ExpenseChart/ExpenseChart";

export const App = () => {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container w-11/12 md:w-3/6 h-screen md:h-auto">
          <div className="bg-zinc-800 p-3 md:p-10 rounded-lg flex gap-x-20 overflow-scroll md:overflow-hidden flex-col md:flex-row h-screen md:h-auto">
            <div className="md:w-1/2 flex flex-col justify-center gap-1">
              <Header />
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col flex-1 justify-center h-full">
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};
