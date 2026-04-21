function add(a: number, b: number): number {
    return a+b;
}

console.log(add(5, 10));

function addOptional(a: number, b: number, c?: number) : number{
    if (typeof c !== 'undefined'){
        return a + b + c;
    }

    return a + b;
}

addOptional(10,12);
console.log(addOptional(10, 20, 30));

function joinWordsArray(words: string[]): string {
    return words.join(",");
}

function joinWords(...words: string[]): string {
    return words.join(",");
}

joinWordsArray(["Typescript", "is", "wonderful", "but", "headache"]);

console.log(joinWords("Typescript", "is", "wonderful", "but", "headache", "asdasd"))