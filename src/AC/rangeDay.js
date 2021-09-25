/*
* 求两个日期中间的有效日期，如：2021-02-26 到 2021-03-03
* 返回：['2021-2-26', '2021-2-27', '2021-2-28', '2021-3-1', '2021-3-2', '2021-3-3']
*
* */

function rangeDay(day1, day2){
    const startDay = new Date(day1).getTime();
    const endDay = new Date(day2).getTime();
    const range =  endDay - startDay;
    const dayTimes = 24 * 60 * 60 * 1000;
    let total = 0;
    const result = [];
    while (total <= range && range >= 0){
        result.push(new Date(startDay + total).toLocaleDateString().replace(/\//g,'-'));
        total += dayTimes;
    }
    return result;
}

console.log(rangeDay('2021-02-26', '2021-03-03'));
