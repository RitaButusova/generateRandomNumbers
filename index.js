//Функція-генератор, яка генерує випадкові числа. 
//Функція приймає параметрами максимальне значення рандомного числа та кількість рандомних чисел які функція повертає:

function* generateRandomNumbers(max, quantity) {
    let counter = 0;
    while (counter < quantity) {
        yield Math.floor(Math.random() * max);
        counter++;
    }
}

const randomNumbers = generateRandomNumbers(311, 13);
for (n of randomNumbers) {
    console.log(n);
}