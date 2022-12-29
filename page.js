do{
    var a = +prompt("Введите число!");
    var b = +prompt("Введите степень!");
    var m = 1;
}while(isNaN(a) || isNaN(b)|| a == ""|| b == "") {
 for( var i = 0; i < b;i++){
    m *= a;
 }
 alert(m); 
}
