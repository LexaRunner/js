let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expensive: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце"),
    a2 = prompt("Во сколько обойдётся?");

appData.expensive.a1 = a2;
alert(appData.budget / 30);
