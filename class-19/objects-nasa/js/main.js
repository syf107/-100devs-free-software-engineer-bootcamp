//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector("button").addEventListener("click", getPicture);

function getPicture() {
  const date = document.querySelector("input").value;
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + date;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const nasaName = data.title;
      const nasaDesc = data.explanation;
      const nasaPic = data.hdurl;
      document.querySelector("h2").innerText = nasaName;
      document.querySelector("img").src = nasaPic;
      document.querySelector("h3").innerText = nasaDesc;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
