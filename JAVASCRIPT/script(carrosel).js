const Technicians = [
  {
    id: 1,
    name: "Rosa",
    location: "Localização: Rua ********, ******** ",
    img: "./IMG/person-1.jpeg",
    phone: "(88)88888-8888",
    specialization: "Especialização: ****************** "
  },
  {
    id: 2,
    name: "Jill",
    location: "Localização: Rua ********, ******** ",
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "(88)88888-8888",
    specialization: "Especialização: ****************** "
  },
  {
    id: 3,
    name: "Joshua",
    location: "Localização: Rua ********, ******** ",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "(88)88888-8888",
    specialization: "Especialização: ****************** "
  },
  {
    id: 4,
    name: "Erik",
    location: "Localização: Rua ********, ********",
    img: "https://images.unsplash.com/photo-1615567964485-0ee76b5b3410?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "(88)88888-8888",
    specialization: "Especialização: ****************** "
  },
  {
    id: 5,
    name: "Anna",
    location: "Localização: Rua ********, ********",
    img: "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "(88)88888-8888",
    specialization: "Especialização: ****************** "
  },
  {
    id: 6,
    name: "Carlos",
    location: "Localização: Rua ********, ********",
    img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "(88)88888-8888",
    specialization: "Especialização: ****************** "
  }
];

const img = document.getElementById("photo");
const char_name = document.getElementById("name");
const adress = document.getElementById("location");
const number = document.getElementById("phone-number");
const special = document.getElementById("specialization");

const prevBtn = document.querySelector(".left-button");
const nextBtn = document.querySelector(".right-button");
const call = document.querySelector(".card-button");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  const item = Technicians[currentItem];
  img.src = item.img;
  char_name.textContent = item.name;
  adress.textContent = item.location;
  number.textContent = item.phone;
  special.textContent = item.specialization;
});

function showPerson(person) {
  const item = Technicians[person];
  img.src = item.img;
  char_name.textContent = item.name;
  adress.textContent = item.location;
  number.textContent = item.phone;
  special.textContent = item.specialization;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > Technicians.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = Technicians.length - 1;
  }
  showPerson(currentItem);
});

call.addEventListener("click", function () {
  window.open("https://web.whatsapp.com/", "_blank");
});
