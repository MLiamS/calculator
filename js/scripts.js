var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
};

var multiply = function(number1, number2){
  return number1 * number2;
};

var divide = function(number1, number2){
  return number1 / number2;
};

$(function(){
  $("form#addForm").submit(function(){
    event.preventDefault();
    var num1 = parseInt($("#add1").val());
    var num2 = parseInt($("#add2").val());
    var answer = add(num1,num2);
    $(".output").text(answer);
  });
  $("form#subtractForm").submit(function(){
    event.preventDefault();
    var num1 = parseInt($("#subtract1").val());
    var num2 = parseInt($("#subtract2").val());
    var answer = subtract(num1,num2);
    $(".output").text(answer);
  });
  $("form#multiplyForm").submit(function(){
    event.preventDefault();
    var num1 = parseInt($("#multiply1").val());
    var num2 = parseInt($("#multiply2").val());
    var answer = multiply(num1,num2);
    $(".output").text(answer);
  });
  $("form#divideForm").submit(function(){
    event.preventDefault();
    var num1 = parseInt($("#divide1").val());
    var num2 = parseInt($("#divide2").val());
    var answer = divide(num1,num2);
    $(".output").text(answer);
  });
});
