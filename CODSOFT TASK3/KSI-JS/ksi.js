
function insert(Number) 
{
document.myform.textview.value = document.myform.textview.value + Number;
}
function equal()
{
var expresion = document.myform.textview.value;
if(expresion)
{
document.myform.textview.value = eval(expresion)
}
}
function backspace()
{
var expresion = document.myform.textview.value;
document.myform.textview.value = expresion.substring(0, expresion.length - 1);
}
