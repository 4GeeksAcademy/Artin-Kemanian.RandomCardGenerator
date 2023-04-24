/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(randomSuit());
  document.querySelector(".card").innerHTML = randomNumber();
};

let randomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numbersIndex = Math.floor(Math.random() * numbers.length);

  return numbers[numbersIndex];
};

let randomSuit = () => {
  let suits = ["spade", "club", "heart", "diamond"];
  let suitIndex = Math.floor(Math.random() * suits.length);

  return suits[suitIndex];
};
