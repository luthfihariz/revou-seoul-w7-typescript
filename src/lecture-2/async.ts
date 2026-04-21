function delay(milliseconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function fetchData() {
    const promiseObject = delay(1000);
    await promiseObject;
    console.log("Fetch data success");
}

//fetchData()

// Example

interface Product {
    id: number;
    name: string;
    price: number;
}

async function getProduct(id: number) {
    await delay(2000);
    const products: Product[] = [
        {id: 1, name: "iPhone", price: 15_000_000},
        {id: 2, name: "Macbook", price: 25_000_000}
    ]

    const found = products.find((prod) => prod.id == id);
    if (!found) {
        console.log(`Product ${id} not found`)
        return;
    }
    return found;
}

async function printProductInfo(): Promise<void> {
    await delay(1000);
    const productIdOne = await getProduct(1)
    console.log(productIdOne?.name);
}

printProductInfo()