const adviceContent = document.querySelector(".advice-content");
const adviceNum = document.querySelector(".advice-num");
const generateAdvice = document.querySelector(".btn");

const getAdvice = async function () {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const advice = await res.json();
    adviceNum.innerHTML = advice.slip.id;
    adviceContent.innerHTML = `“${advice.slip.advice}”`;
  } catch (error) {
    console.log(error);
  }
};
generateAdvice.addEventListener("click", getAdvice);

window.onload = () => {
  getAdvice();
};
