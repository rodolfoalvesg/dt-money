import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "./services/api"


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; // Omit os dados informados do template passado


interface TransactionsProviderProps{
    children: ReactNode;
}

interface TransactionsContextData { // 09:09
    transactions: Transaction[];
    createTransaction: (transactionInput: TransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);



export function TransactionsProvider({ children }: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([] as Transaction[]);

    useEffect(() => {
        api.get<Transaction[]>('transactions')
        .then((response) => setTransactions(response.data))
        .catch(err => console.log("Erro "+ err))
    }, [])

    async function createTransaction(transactionInput: TransactionInput){
        
        try{
            const response = await api.post<Transaction>('/transactions', {
                ...transactionInput
            });

            const transaction  = [...transactions, response.data];

            setTransactions(transaction)

        }catch (err) {
            console.log('Erro:', err);
        }
        
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}