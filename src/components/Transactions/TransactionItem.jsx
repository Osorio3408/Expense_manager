import { useGlobalState } from "../../context/GlobalState";

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalState();
  const amountClass =
    transaction.amount >= 0 ? "text-green-500" : "text-red-500";

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-lg font-bold">{transaction.description}</p>
      <div className="flex gap-6 items-center">
        <span className={`font-semibold ${amountClass} flex gap-1`}>
          <strong className="text-white font-medium"> $</strong>
          {transaction.amount}
        </span>
        <button
          className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
          onClick={() => {
            deleteTransaction(transaction.id);
          }}>
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
