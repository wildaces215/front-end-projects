var numbers=[];
function clearValue(array){
   $("#text").html("0");
   array.length=0;
 }
//Adds the number to the overall array.
function addNumber(value,array){
  array.push(value);
  $("#text").html(array);
   checkArray(array);
}
//Add the various operators to the array as a char
function addingOperator(value,array){
  array.push(value);
  $("#text").html(array);
  checkArray(array);
}
function calculate(array){
$("#text").html(eval(array.join('')));
array.length=0;
}
function percentage(array){
  var lastItem=array.pop()/100;
  array.push(lastItem);
 $("#text").html(array);
}
function checkArray(array){
  if(array.length>10){
    $("#text").html("Error");
  }
}