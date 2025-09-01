// console.log("First message");

// setTimeout(() => {
//   console.log("Second message");
// }, 2000);

// console.log("Third message");

//Part 2
fetch("https://api.adviceslip.com/advice")
  .then(response => response.json())
  .then(data => {
    console.log("Advice:", data.slip.advice);
  })
  .catch(error => console.error("Error:", error));

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then(response => response.json())
//   .then(data => {
//     console.log("Random Dog Image:", data.message);
//   })
//   .catch(error => console.error("Error:", error));


 //Part 3
//   async function getAdvice() {
//   try {
//     const response = await fetch("https://api.adviceslip.com/advice");
//     const data = await response.json();
//     console.log("Advice:", data.slip.advice);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// getAdvice();
// async function getDogImage() {
//   try {
//     const response = await fetch("https://dog.ceo/api/breeds/image/random");
//     const data = await response.json();
//     console.log("Random Dog Image:", data.message);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// getDogImage();
