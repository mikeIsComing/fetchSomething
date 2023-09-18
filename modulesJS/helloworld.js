const Menu = {
  breakfest: [
    "boiled eggs",
    "bread with butter",
    "cake with cream",
    "fruits bowl",
  ],
  lunch: [
    { meal: "Pizza", price: 7 },
    { meal: "Curry Chicken", price: 10 },
    { meal: "Salmon with veggies", price: 20 },
    { meal: "Sushi", price: 30 },
  ],
};

const choseMeal = (obj) => {
  return new Promise((resolve) => {
    const randomBreakfast = Math.floor(Math.random() * obj.breakfest.length);
    const randomLunch = Math.floor(Math.random() * obj.lunch.length);
    const lunchOrNot = Math.random();

    setTimeout(() => {
      if (lunchOrNot > 0.5) {
        resolve(obj.lunch[randomLunch].meal);
      } else {
        resolve(obj.breakfest[randomBreakfast]);
      }
    }, 3000);
  });
};

const myDecision = async () => {
  const lineOne = document.createElement("p");
  const lineTwo = document.createElement("p");
  document.body.appendChild(lineOne);
  document.body.appendChild(lineTwo);
  lineOne.textContent = "What I should order?...";
  document.body.style.textAlign = "center";
  const secondResponse = await choseMeal(Menu);
  lineTwo.textContent = `I will eat ${secondResponse}.`;
};

export default Menu;
export { myDecision, choseMeal };
