document.querySelector("div").innerHTML = `<p>Найбільше число: ${max};</p>
                                                        <p>Найменше число: ${min};</p>
                                                        <p>Сумма усіх цін: ${sum};</p>
                                                        <p>Сумма з округленням до меншого: ${sumFloor};</p>
                                                        <p>Округленя до сотень: ${summTo100};</p>
                                                        <p>Парне число чи не парне: ${answer};</p>
                                                        <p class="rest">Решта якщо заплатити 500(без округленя): ${rest};</p>
                                                        <p class="rest">Решта якщо заплатити 500 за socks(без округленя): ${restForSocks};</p>
                                                        <p class="rest">Решта якщо заплатити 500 за key(без округленя): ${restForKey};</p>
                                                        <p class="rest">Решта якщо заплатити 500 за bottle(без округленя): ${restForBottle};</p>
                                                        <p>Середнє значення з округленням до другого знаку: ${averageValueToFixed};</p>
                                                        <p>Чистий прибуток, якщо заплатили зі знижкою: ${newSumWithDiscount}.</p>`;