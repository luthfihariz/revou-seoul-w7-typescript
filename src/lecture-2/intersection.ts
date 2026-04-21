interface Person {
    name: string;
    age: number;    
}

interface Employee {
    name: string;
    employeeId: number | string;
    role: string;
    managersName?: string;       
}

type EmployeePerson = Employee & Person;

const peterParker: EmployeePerson = {
    name: "Peter Parker",
    age: 30,
    employeeId: "123",
    role: "Photographer",
    managersName: "John"
}

interface EWallet {
    name: string;
    code: string;
    userId: string;
    balance: number;
}

interface Bank {
    accountName: string;
    accountNumber: string;
    balance: number;
}

type AcceptedPayment = EWallet & Bank

const myPaymentAccount: AcceptedPayment = {
    // ewallet fields
    name: "GoPay",
    code: "GOPAY",
    userId: "user-abc-123",
    // Bank fields
    accountName: "Luthfi Hariz",
    accountNumber: "47456123",
    // shared
    balance: 90_000,
}

function transact(amount: number, account: AcceptedPayment): AcceptedPayment {
    if (amount > account.balance) {
        console.log(`Insufficient balance. You only have ${account.balance} IDR in your account.`)
        return account;
    }

    account.balance = account.balance - amount;
    console.log(`Paid! ${amount} IDR`)
    return account;
}

const accountA = transact(10_000, myPaymentAccount);
console.log(`Remaining balance: ${accountA.balance} IDR`);
const accountB = transact(20_000, myPaymentAccount);
console.log(`Remaining balance: ${accountB.balance} IDR`);
const accountC = transact(80_000, myPaymentAccount);
console.log(`Remaining balance: ${accountC.balance} IDR`);