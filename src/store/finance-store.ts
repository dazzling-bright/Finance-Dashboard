import { create } from "zustand";

type Transaction = {
  id: number;
  description: string;
  amount: number;
  date: string;
  type: "income" | "expense";
};

type FinanceState = {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
};

export const useFinanceStore = create<FinanceState>((set) => ({
  transactions: [],
  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [...state.transactions, transaction],
    })),
}));
