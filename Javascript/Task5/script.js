function reverseNumber(event) {
    event.preventDefault();

    var numberInput = document.getElementById("number");
    var number = numberInput.value;

    var reversedNumber = reverse(number);

    document.getElementById("reversedNumber").textContent = reversedNumber;
    document.getElementById("number").value = "";
  }

  function reverse(number) {
    var reversed = 0;
    while (number !== 0) {
      reversed = (reversed * 10) + (number % 10);
      number = Math.floor(number / 10);
    }
    return reversed;
  }