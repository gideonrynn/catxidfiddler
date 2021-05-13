
function addZeroes() {

    // clear output between conversions
    document.querySelector('#output').innerHTML = "";

    // get original list submitted by user
    let originalList = document.querySelector('#input').value;
    // console.log("original user input list: " + "\n" + originalList);
    // console.log("this is the type of the user input value: " + typeof originalList);

    // trim white space and separate into array so we can evaluate each item appropriately
    let numArray = originalList.trim().split("\n");
    console.log("numarray: " + numArray);

    let tenDigitNums = "";

    // calculate number of zeroes to be created if any
    numArray.forEach(number => {

        console.log("this is the value we are evaluating: " + number + " and this is it's type: " + typeof number);
        number = parseInt(number, 10);
        console.log("This is the number: " + number + " and this is the type: " + typeof number);
        let numberOfDigits = number.toString().length;
        let numberOfZeroes = 10 - numberOfDigits;

        if(numberOfZeroes > 0 && number !== null && number !== "") {
            for(let counter = 0; counter < numberOfZeroes; counter++) {
                tenDigitNums += 0
            };
            console.log(tenDigitNums);
        } 

        tenDigitNums = tenDigitNums + number + "\n"; 
     
    })

    // console.log(typeof tenDigitNums);
    document.querySelector('#output').innerHTML = tenDigitNums;
    console.log("done")

}


function addQuotes() {

    document.querySelector('#output').textContent = "";
    let originalList = document.querySelector('#input').value;
    let quotesList = "";
    // console.log("this is the user inputted original list: " + "\n" + originalList + " and the length is: " + originalList.length);


    let numArray = originalList.trim().split("\n");
    // console.log("this is the modified list: " + "\n" + numArray + " and the length is: " + numArray.length);

      // for each block of numbers, remove whitespace and apply quotes
      numArray.forEach(number => {

        CATracksID = number.trim();
        quotesList += "'" + CATracksID + "'" + "," + " " + "\n";
     
    })

    document.querySelector('#output').textContent = quotesList;
    // document.querySelector("#copy").removeAttribute("disabled");
    document.querySelector("#clear-right").removeAttribute("disabled");
    console.log(document.querySelector('#output').innerHTML);
}

// function addCSSClass() {

// }
// function applyZeroesandQuotes {

// }

function clearOutput() {
    document.querySelector('#output').innerHTML = "";
    // console.log(document.querySelector('#output').innerHTML);
    // console.log(document.querySelector('#output').textContent);
}

function clearOutputRight() {
    document.querySelector('#output').innerHTML = "";
    // console.log(document.querySelector('#output').innerHTML);
    // console.log(document.querySelector('#output').textContent);
}

function clearOutputLeft() {
    console.log("clicked!")
    document.querySelector('#input').value = "";
    // console.log(document.querySelector('#output').innerHTML);
    // console.log(document.querySelector('#output').textContent);
}

// function copyToClipboard() {
//     let copyOutput = document.querySelector("#output");
//     copyOutput.select();
//     copyOutput.setSelectionRange(0, 99999);
//     document.execCommand("copy");
// }

// function highlightActions() {
//     console.log("highlighted");
    
// }

document.querySelector('#zero-submit').addEventListener("click", addZeroes);
document.querySelector('#quotes-submit').addEventListener("click", addQuotes);
// document.querySelector('#copy').addEventListener("click", copyToClipboard);
document.querySelector('#clear-right').addEventListener("click", clearOutputRight);
document.querySelector('#clear-left').addEventListener("click", clearOutputLeft);
// document.querySelector('#output').addEventListener("input change keyup", highlightActions);