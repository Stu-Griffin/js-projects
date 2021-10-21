const socks = 15.678;
const key = 123.965;
const bottle = 90.2345;

const max = Math.max(socks, key, bottle);
// document.writeln(max + " - найбільше число |");

const min = Math.min(socks, key, bottle);
//document.writeln(min + " - найменше число |");

const sum = socks + key + bottle;
//document.writeln(sum + " - сумма усіх констант |");

const socksFloor = Math.floor(socks);
const keyFloor = Math.floor(key);
const bottleFloor = Math.floor(bottle);
const sumFloor = socksFloor + keyFloor + bottleFloor;
//document.writeln(sumFloor + " - сумма з округленням до меншого |");

const summTo100 = Math.round(Math.round(sum)/100) * 100;
//document.writeln(summTo100 + " - округлення до сотень |");

const pairing = Math.floor(sumFloor / 2);
//(sumFloor / 2) == pairing ? answer = true + " парна" : answer = false + " непарна";
const answer = (sumFloor / 2) == pairing ? true + " парна" : false + " непарна";

const money = 500;
const rest = money - sum;
const restForSocks = money - socks;
const restForKey = money - key;
const restForBottle = money - bottle;
//document.writeln(rest + " - решта, якщо заплатити 500(без окрунлення) |");

const averageValue = (socks + key + bottle) / 3;
const averageValueToFixed = averageValue.toFixed(2);
//document.writeln(averageValueToFixed + " - середнє значення з округленням до другого знаку |"); 

const getRandomNumber = (x) => {
    return(Math.floor(Math.random() * Math.floor(x)));
}
const test = sum / 2;
const discount = (sum / 100) * getRandomNumber(50);
const newSumWithDiscount = (test - discount).toFixed(2);
//document.writeln(newSumWithDiscount + " - чистий прибуток, якщо заплатили зі знижкою |");
const result = [max, min, sum, sumFloor, summTo100, answer, rest, restForSocks, restForKey, restForBottle, averageValueToFixed, newSumWithDiscount];
export default result