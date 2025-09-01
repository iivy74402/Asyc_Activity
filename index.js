// console.log("First message");

// setTimeout(() => {
//   console.log("Second message");
// }, 2000);

// console.log("Third message");

// //Part 2
// fetch("https://api.adviceslip.com/advice")
//   .then(response => response.json())
//   .then(data => {
//     console.log("Here's your advice:", data.slip.advice);
//   })
//   .catch(errora => console.error("Error:", error));


//  //Part 3
//  async function getAdvice() {
//   try {
//     const response = await fetch("https://api.adviceslip.com/advice");
//     const data = await response.json();
//     console.log("Here's your advice:", data.slip.advice);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// getAdvice();

// fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });