import React, { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
    setAmount(0);
    setDescription("");
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="md:my-5">
      <form
        className="border border-slate-400 p-5 rounded-lg flex flex-col gap-1"
        action=""
        onSubmit={handleSubmit}>
        <input
          onChange={handleChangeDescription}
          type="text"
          placeholder="Ingresa una descripción..."
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full  focus:outline-none focus:border focus:border-slate-400"
          value={description}
        />
        <input
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full appearance-none focus:outline-none focus:border focus:border-slate-400"
          onChange={handleChangeAmount}
          type="number"
          placeholder="Ingresa un monto..."
          step={0.01}
          value={amount}
        />
        <span className="text-sm">
          <strong className="text-red-500">NOTA:</strong> Ingresa los gastos con
          un signo negativo (-) delante del valor.
        </span>
        <button className="bg-indigo-600 hover:bg-indigo-950 text-white px-3 py-2 rounded-lg block mb-2 w-full font-bold">
          Agregar Transacción
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
