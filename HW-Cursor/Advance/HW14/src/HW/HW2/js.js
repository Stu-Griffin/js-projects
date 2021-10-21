function HW2() {    
    // просим число и проверяем на цельность, если не целое тогда просим еще раз это делает while(в jsbin такое не работает)
    let firstNumber = Number(prompt("Введіть перше число"));
    while(!Number.isInteger(firstNumber)) { // или (yourAge !== Math.floor(yourAge))
        firstNumber = Number(prompt("Введіть перше ЦІЛЕ число")); 
    }

    // просим число и проверяем на цельность, если не целое тогда просим еще раз это делает while(в jsbin такое не работает)
    let secondNumber = Number(prompt(`Введіть друге число, воно має бути більшим ніж перше: ${firstNumber}`));
    while((!Number.isInteger(secondNumber)) || (secondNumber < firstNumber)) {
        secondNumber = Number(prompt(`Введіть друге ЦІЛЕ число, воно має бути більшим ніж перше: ${firstNumber}`));
    }

    //просим проверку пропускать или не пропускать парные числа
    const skipPairedNumbers = confirm("Пропускати парні числа?");

    //задаем переменную суммы всех чисел
    let sumOfNumbers = 0;

    //если (skipPairedNumbers === true||skipPairedNumbers)- это одно и тоже, тогда ищем парные числа
    if (skipPairedNumbers) { //то же самое что и skipPairedNumbers === true
        //если да тогда делаем цікл, который выводит все числа от firstNumber и до secondNumber включно. И говорим если i%2 !== 0(остаток от деления i на 2 не равно строго 0, то это не парное), то єто i  мы прибовляеи к sumOfNumbers
        for (let i = firstNumber; i <= secondNumber; i++) {
            if (i%2 !== 0) { // можно еще так (i/2!==Math.floor(i/2))
                sumOfNumbers += i; //то же самое что и sumOfNumbers = sumOfNumbers + i;
            }
        }
    } else {
        //если нет, тогда делаем цыкл, который выводит все числа от firstNumber и до secondNumber включно. И говорим, что sumOfNumbers = sumOfNumbers + i(тоесть: sumOfNumbers = 0 + firstNumber, sumOfNumbers = firstNumber + i++ и так далее, кратко говоря самма алгеброическоц прогресии)
        for (let i = firstNumber; i <= secondNumber; i++) {
            sumOfNumbers += i; //то же самое что и sumOfNumbers = sumOfNumbers + i;
        }
    } 
    return(sumOfNumbers);
}
export default HW2()