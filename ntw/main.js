function convert() {
  const num = document.getElementById('num').value;
  let msg = document.getElementById('msg');

  msg.innerHTML = "";

  if(num == "") {
    msg.innerHTML += "<small>**Enter Number</small>";
    msg.style.color = 'red';
  }
  if(num < 0 || num > 999) {
    msg.innerHTML += "<small>**Out Of Range</small>";
    msg.style.color = 'red';
  }
  if(msg.innerHTML == "") {
    let word = "";

    let unit = {
      "0" : "Zero",
      "1" : "One",
      "2" : "Two",
      "3" : "Three",
      "4" : "Four",
      "5" : "Five",
      "6" : "Six",
      "7" : "Seven",
      "8" : "Eight",
      "9" : "Nine",
    }
    

    let tens = {
      "2" : "Twenty",
      "3" : "Thirty",
      "4" : "Fourty",
      "5" : "Fifty",
      "6" : "Sixty",
      "7" : "Seventy",
      "8" : "Eighty",
      "9" : "Ninty",
    }

    let spl = {
      "0" : "Ten",
      "1" : "Eleven",
      "2" : "Twelve",
      "3" : "Thirteen",
      "4" : "Fourteen",
      "5" : "Fifteen",
      "6" : "Sixteen",
      "7" : "Seventeen",
      "8" : "Eighteen",
      "9" : "Ninteen",
    }

    let digits = num.split("");
    let numRev = digits.reverse();

    for(let i=0; i<numRev.length; i++) {
      if(i == 0 && numRev[1] != 1) {
        word = unit[numRev[0]]
      } else if(i == 1) {
        if(numRev[1] == 1) {
          word = spl[numRev[0]];
        } 
        if(numRev[1] != 1 && numRev[0] == 0) {
          word = tens[numRev[1]] + " ";
        } else {
          word = tens[numRev[1]] + " " + word;
        }
      } else if(i == 2) {
        word = unit[numRev[2]] + " hundred" + " " + word;
      }
    }

    msg.innerHTML += `<h2>${word}</h2>`;
    msg.style.color = 'green';
  }
  return false;
}