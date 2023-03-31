// function reverseWords() {
//     const stringInput = document.getElementById("string-input");
//     const reversedString = document.getElementById("reversed-string");
  
//     const words = stringInput.value.split(' ');
//     words.reverse();
//     reversedString.innerText = words.join(' ');
//   }
  
// function reverseString() {
//     // Get the input string
//     const inputString = document.getElementById('input-string').value;
  
//     // Split the input string into an array of words
//     const words = inputString.split(' ');
  
//     // Reverse the order of the words in the array
//     words.reverse();
  
//     // Join the reversed words into a string
//     const reversedString = words.join(' ');
  
//     // Display the reversed string
//     document.getElementById('output-string').textContent = reversedString;
//   }
  
//   // Attach the reverseString function to the button click event
//   document.getElementById('reverse-button').addEventListener('click', reverseString);
  
// function test(text) {
//     if (text.length === 0) 
//      {
//      return 'String should not be empty!'
//       }
//     if (typeof text !== 'string')
//       {
//         return 'It must be a string.'
//       }
//     var words = [];
//    words = text.match(/\S+/g);
//    var reverse_word = "";
//    for (var i = 0; i < words.length; i++) {
//       reverse_word += words[i].split('').reverse().join('') + " ";
//    }
//    return reverse_word
//  }
//  alert(test("abc"))
//  console.log(test("JavaScript Exercises"))
//  console.log(test(1234))
 
// const form = document.getElementById("form");

// const user_input = document.getElementById("words");
// const reverse_btn = document.getElementById("reverse_btn");
// const output = document.getElementById("output");

// // Handle form event
// function handleForm(event) {
//   event.preventDefault();
// }
// form.addEventListener("submit", handleForm);

// // click event
// reverse_btn.addEventListener("click", reverseWord);

// // reverse function that will be implemented when button is clicked
// function reverseWord() {
//   let value = user_input.value;
//   let reversed = value.split("").reverse().join("");
//   output.innerHTML = reversed;
// }

// // get year
// var date = new Date();
// let year = date.getFullYear();
// document.getElementById('year').innerHTML = year;