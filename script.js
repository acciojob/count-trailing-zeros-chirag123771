function trailingZeros(n) {
  //your JS code here. If required.

	if (typeof n !== 'number' || n < 0 || n > 10000) {
        alert("Please enter a non-negative integer up to 10000.");
        return;
    }

    // Calculate the factorial of the input number
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }

    // Count the trailing zeros
    let countZeros = 0;
    while (factorial % 10 === 0) {
        countZeros++;
        factorial /= 10;
    }

    // Display the result
    alert("The number of trailing zeros in the factorial of " + inputNumber + " is: " + countZeros);
}
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
