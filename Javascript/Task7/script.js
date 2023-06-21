function multiplyNumbers() {
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    
    var result = number1 * number2;
    
    document.getElementById("result").textContent =  result;
  }
  
  function divideNumbers() {
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    
    var result = number1 / number2;
    
    document.getElementById("result").textContent =  result;
  }