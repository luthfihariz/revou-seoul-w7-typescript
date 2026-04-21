interface Person {
    name: string;
    age: number;
    title: string | string[];
    numberOfKids?: number;
}

const john: Person = {
    name: "John",
    age: 28,
    title: "Data Analyst",
    numberOfKids: 2,
}

const clara: Person = {
    name: "Clara",
    age: 30,
    title: ["Data Analyst", "SM"]
}

const luthfi: Person = {
    name: "Luthfi",
    age: 10,
    title: "Engineer"
}

function greetPerson(person: Person) {
    console.log(person.name);
}

// greetPerson(luthfi);
// greetPerson(clara);
// greetPerson(john);


interface EWallet {
    name: string;
    code: string;
    userId: string;
    balance: number;
}

function printEWallet(ewallet: EWallet) {
    console.log(`E-Wallet Name: ${ewallet.name}`);
    console.log(`E-Wallet Code: ${ewallet.code}`);
    console.log(`E-Wallet Balance: ${ewallet.balance}`);
}

const myGopay: EWallet = {
    name: "GoPay",
    code: "GOPAY",
    userId: "user-abc-123",
    balance: 90_000
}

const myOvo: EWallet = {
    name: "Ovo",
    code: "OVO",
    userId: "user-abc-123",
    balance: 150_000
}

printEWallet(myGopay);
printEWallet(myOvo);

export {}