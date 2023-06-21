function sortString(event) {
    event.preventDefault();

    var inputString = document.getElementById("inputString").value;
    var sortedString = sortAlphabetically(inputString);

    document.getElementById("sortedString").textContent = sortedString;
    document.getElementById("inputString").value="";
  }

  function sortAlphabetically(inputString) {
    var sortedArray = inputString.split('').sort();
    return sortedArray.join('');
  }