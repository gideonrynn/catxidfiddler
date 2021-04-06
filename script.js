
function addZeroes() {

    // clear output between conversions
    document.querySelector('#output').textContent = "";

    // get original list submitted by user
    let originalList = document.querySelector('#input').value;
    
    // separate into array so we can evaluate each item appropriately
    let numArray = originalList.split("\n");

    let tenDigitNums = "";

    /* calculate number of zeroes to be created if any
    */
    numArray.forEach(number => {

        console.log(number === "");

        let numberOfDigits = number.length;
        let numberOfZeroes = 10 - numberOfDigits;

        if(numberOfZeroes > 0 && number !== null && number !== "") {
            for(let counter = 0; counter < numberOfZeroes; counter++) {
                tenDigitNums += 0
            };

            tenDigitNums = tenDigitNums + number + "\n";
        }
    })

    document.querySelector('#output').textContent = tenDigitNums;

}

document.querySelector('#zerosubmit').addEventListener("click", addZeroes);