let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }

}
start();

let appData = {
    budget: money,
    timeData: time,
    expensive: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
    
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдётся?", "");
            
            if( (typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null) && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expensive[a] = b;
            } else {
        
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function detectLevel() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Что то пошло не так!!!');
        }
    },
    chooseOptExpenses: function chooseOptExpenses() {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Введите название необезательных расходов"),
                b = +prompt("Введите сумма статьи расхода");
            appData.optionalExpenses[a] = b;
        }
    },
    checkSaving: function checkSaving() {
        if (appData.saving == true) {
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncoome =save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncoome);
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 2; i++) {
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

            if ((typeof(items)) === "string" && items != "" && (typeof(items)) != null) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то ещё?'));
                appData.income.sort();
                appData.income.forEach(function (item, i, income) {
                    let n = i + 1;
                    console.log(n + "Способ заработка: " + item);
                });
            } else {
                i--;
            }
        }
    }
};

for (let key in appData) {
    console.log("Наша программа содержит данные: " + key + ": " + appData[key]);
}