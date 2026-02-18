const cars = {
  1: {
    name: "Tesla Model S",
    price: "Price: PKR 2.5 Crore",
    speed: "Top Speed: 200 mph",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399"
  },
  2: {
    name: "BMW M4",
    price: "Price: PKR 2.1 Crore",
    speed: "Top Speed: 180 mph",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e"
  },
  3: {
    name: "Audi R8",
    price: "Price: PKR 4.5 Crore",
    speed: "Top Speed: 205 mph",
    image: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b"
  },
  4: {
    name: "Ford Mustang",
    price: "Price: PKR 1.6 Crore",
    speed: "Top Speed: 170 mph",
    image: "https://i.pinimg.com/736x/18/a0/9d/18a09d91270e871c523ef674c0eba934.jpg"
  }
};

function showDetail(id) {
  document.getElementById("home").style.display = "none";
  document.getElementById("detail").style.display = "block";

  const car = cars[id];

  document.getElementById("carName").innerText = car.name;
  document.getElementById("carPrice").innerText = car.price;
  document.getElementById("carSpeed").innerText = car.speed;
  document.getElementById("carImage").src = car.image;
}

function goBack() {
  document.getElementById("detail").style.display = "none";
  document.getElementById("home").style.display = "block";
}
