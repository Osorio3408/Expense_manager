import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../../../context/GlobalState";

const ExpenseChart = () => {
  const { transactions } = useGlobalState();

  const total = transactions.reduce(
    (acc, transaction) => (acc += transaction.amount),
    0
  );

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensesPercentage = Math.round(
    (totalExpenses / totalIncome) * 100
  );

  const totalIncomePercentage = 100 - totalExpensesPercentage;

  console.log(totalExpensesPercentage);
  console.log(totalIncomePercentage);

  return totalExpenses == 0 && totalIncome == 0 ? (
    <div className="flex justify-center items-center h-1/2 flex-col gap-1 pb-5 md:pb-20">
      <p className="text-2xl font-bold">No hay datos</p>
      <img src="/nodata.svg" alt="noData" className="w-2/5 hidden md:block" />
    </div>
  ) : (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        {
          x: "Gastos",
          y: totalExpensesPercentage,
        },
        {
          x: "Ingresos",
          y: totalIncomePercentage,
        },
      ]}
      animate={{
        duration: 200,
      }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: "white",
          }}
        />
      }
    />
  );
};

export default ExpenseChart;
