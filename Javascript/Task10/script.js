function performArrayOperations() {
    // Get the input values from the user
    var inputArray1 = [];
    var inputArray2 = [];

    for (var i = 1; i <= 5; i++) {
        var element1 = parseFloat(document.getElementById("array1Element" + i).value);
        inputArray1.push(element1);

        var element2 = parseFloat(document.getElementById("array2Element" + i).value);
        inputArray2.push(element2);
    }

    // Perform array operations
    var concatArray = inputArray1.concat(inputArray2);
    var reversedArray = inputArray1.reverse();
    var sortedArray = inputArray2.sort();
    var filteredArray = inputArray1.filter(function (element) {
        return element > 5;
    });
    var mappedArray = inputArray2.map(function (element) {
        return element * 2;
    });

    // Display the results
    document.getElementById("concatResult").textContent = concatArray;
    document.getElementById("reverseResult").textContent = reversedArray;
    document.getElementById("sortResult").textContent = sortedArray;
    document.getElementById("filterResult").textContent = filteredArray;
    document.getElementById("mapResult").textContent = mappedArray;
}