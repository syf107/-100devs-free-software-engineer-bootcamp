document.querySelector(".submit").addEventListener("click", giveTheHoroscope);
const resultDOM = document.querySelector("#result");

function giveTheHoroscope() {
  const userDate = Number(document.querySelector("#date").value);
  const userMonth = document.querySelector("#month").value.toLowerCase();

  let horoscope;
  if (
    (userMonth === "march" && userDate >= 21 && userDate <= 31) ||
    (userMonth === "april" && userDate >= 1 && userDate <= 19)
  ) {
    horoscope = "Aries";
  } else if (
    (userMonth === "april" && userDate >= 20 && userDate <= 30) ||
    (userMonth === "may" && userDate >= 1 && userDate <= 20)
  ) {
    horoscope = "Taurus";
  } else if (
    (userMonth === "may" && userDate >= 21 && userDate <= 31) ||
    (userMonth === "june" && userDate >= 1 && userDate <= 21)
  ) {
    horoscope = "Gemini";
  } else if (
    (userMonth === "june" && userDate >= 20 && userDate <= 30) ||
    (userMonth === "july" && userDate >= 1 && userDate <= 22)
  ) {
    horoscope = "Cancer";
  } else if (
    (userMonth === "july" && userDate >= 23 && userDate <= 31) ||
    (userMonth === "august" && userDate >= 1 && userDate <= 22)
  ) {
    horoscope = "Leo";
  } else if (
    (userMonth === "august" && userDate >= 23 && userDate <= 31) ||
    (userMonth === "september" && userDate >= 1 && userDate <= 22)
  ) {
    horoscope = "Virgo";
  } else if (
    (userMonth === "september" && userDate >= 23 && userDate <= 30) ||
    (userMonth === "october" && userDate >= 1 && userDate <= 23)
  ) {
    horoscope = "Libra";
  } else if (
    (userMonth === "october" && userDate >= 24 && userDate <= 31) ||
    (userMonth === "november" && userDate >= 1 && userDate <= 21)
  ) {
    horoscope = "Scorpius";
  } else if (
    (userMonth === "november" && userDate >= 22 && userDate <= 30) ||
    (userMonth === "december" && userDate >= 1 && userDate <= 21)
  ) {
    horoscope = "Sagittarius";
  } else if (
    (userMonth === "december" && userDate >= 22 && userDate <= 31) ||
    (userMonth === "january" && userDate >= 1 && userDate <= 19)
  ) {
    horoscope = "Capricorn";
  } else if (
    (userMonth === "january" && userDate >= 20 && userDate <= 31) ||
    (userMonth === "february" && userDate >= 1 && userDate <= 18)
  ) {
    horoscope = "Aquarius";
  } else if (
    (userMonth === "february" && userDate >= 19 && userDate <= 29) ||
    (userMonth === "march" && userDate >= 1 && userDate <= 20)
  ) {
    horoscope = "Pisces";
  }

  if (horoscope === undefined) {
    resultDOM.innerHTML = "You might put the wrong month or date.";
  } else {
    resultDOM.innerHTML = `Your horoscope is ${horoscope}. Congratulations!`;
  }
}
