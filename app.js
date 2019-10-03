$( document ).ready(function() {
    console.log( "ready!" );
    let expensesAry = [];
    let income;
    let totalExpense = 0;
    $('.button').click(function (e) { 
        e.preventDefault();
        let expenseName = $('.name').val();
        let expenseVal = parseInt($('.expense').val());
        let expense = {
            name: expenseName,
            cost: expenseVal
        }
        expensesAry.push(expense);
        console.log(expensesAry);
    });
    $('.moneyBtn').click(function (e) {
        e.preventDefault();
        income = parseInt($('.income').val());
        console.log(income);
    })
    $('.calc').click(function (e) {
        for (let i = 0; i < expensesAry.length; i++){
            totalExpense += expensesAry[i].cost;
            $('.expensesBox').append(<p>{totalExpense}</p>)
        }
        console.log(totalExpense);
    })
});