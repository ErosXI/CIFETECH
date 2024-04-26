const call = document.querySelector(".whatsapp");
const call2 = document.querySelector(".whatsapp2");
const call3 = document.querySelector(".whatsapp3");
const call4 = document.querySelector(".whatsapp4");
const call5 = document.querySelector(".whatsapp5");
const call6 = document.querySelector(".whatsapp6");
var card1 = document.querySelector(".card1");
var card2 = document.querySelector(".card2");
var card3 = document.querySelector(".card3");
var card4 = document.querySelector(".card4");
var card5 = document.querySelector(".card5");
var card6 = document.querySelector(".card6");

card1.addEventListener("click", function () {
  var card1data2 = document.querySelector(".card1-data2");
  card1data2.classList.toggle("show");
});

card2.addEventListener("click", function () {
  var card2data2 = document.querySelector(".card2-data2");
  card2data2.classList.toggle("show");
});

card3.addEventListener("click", function () {
  var card3data2 = document.querySelector(".card3-data2");
  card3data2.classList.toggle("show");
});

card4.addEventListener("click", function () {
  var card4data2 = document.querySelector(".card4-data2");
  card4data2.classList.toggle("show");
});

card5.addEventListener("click", function () {
  var card5data2 = document.querySelector(".card5-data2");
  card5data2.classList.toggle("show");
});

card6.addEventListener("click", function () {
  var card6data2 = document.querySelector(".card6-data2");
  card6data2.classList.toggle("show");
});

call.addEventListener("click", function () {
  window.open("https://web.whatsapp.com/", "_blank");
});

call2.addEventListener("click", function () {
  window.open("https://web.whatsapp.com/", "_blank");
});

call3.addEventListener("click", function () {
  window.open("https://web.whatsapp.com/", "_blank");
});

call4.addEventListener("click", function () {
  window.open("https://web.whatsapp.com/", "_blank");
});

call5.addEventListener("click", function () {
  window.open("https://web.whatsapp.com/", "_blank");
});

call6.addEventListener("click", function () {
  window.open("https://web.whatsapp.com/", "_blank");
});
