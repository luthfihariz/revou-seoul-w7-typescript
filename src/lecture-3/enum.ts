
enum TransactionState {
    Pending = "Transaction is Pending",
    Processing = "We are processing your transaction.",
    Completed = "Transaction is Completed. You can click on the button below to raise complaint.",
    Failed = "Transaction is Failed. Please try again.",
}

console.log(TransactionState.Pending);

type TransactionStateUnion = "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED";

interface Transaction {
    id: string;
    amount: number;
    state: TransactionState;
}

let myTransaction: Transaction = {
    id: "TRX-001",
    amount: 100_000,
    state: TransactionState.Pending
}

function setTransactionState(transaction: Transaction, newState: TransactionState): Transaction {
    const updatedTransaction = {...transaction, state: newState};
    console.log(`Transaction updated to ${updatedTransaction.state}`);
    return updatedTransaction;
}

setTransactionState(myTransaction, TransactionState.Processing);
setTransactionState(myTransaction, TransactionState.Completed);



function displayButton(state: TransactionState) {
    if (state == TransactionState.Pending) {
        // show pay button
    } else if (state == TransactionState.Completed) {
        // show Complaint button
    }
}

function displayTransactionState(state: TransactionState) {
    console.log(state);
}