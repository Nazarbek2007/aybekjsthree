do {
    var one = +prompt('Введите колличество строк!');
    var two = prompt('Введите символ отступов!(Не число)');
    var three = prompt('Введите конечный символ!Не число');
    var end = '';
} while (isNaN(one)|| !isNaN(two,three)) {
    for(var i = 0; i < one; i++) {
        console.log(end + three);
        end += two;
    }
    
}