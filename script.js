
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


function addQuotes() {

    document.querySelector('#output').textContent = "";
    let originalList = document.querySelector('#input').value;
    let quotesList = "";

    /* during each loop remove get 10 digit id, apply quotes and spacing
    and remove that string from the list so loop will format next id*/
    for(let counter = 0; counter < originalList.length; counter++) {

        CATracksID = originalList.substr(0, 10);
        // console.log(CATracksID);
        quotesList += "'" + CATracksID + "'" + "," + " ";
        originalList = originalList.slice(11);
        // console.log(originalList);
        
    };

    document.querySelector('#output').textContent = quotesList;

}

document.querySelector('#zerosubmit').addEventListener("click", addZeroes);
document.querySelector('#quotessubmit').addEventListener("click", addQuotes);