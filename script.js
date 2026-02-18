const cars = {
  1: {
    name: "Tesla Model S",
    price: "Price: PKR 2.5 Crore",
    speed: "Top Speed: 200 mph",
    year: "Model Year: 2023",
    engine: "Engine: Dual Motor Electric",
    fuel: "Fuel Type: Electric",
    transmission: "Transmission: Automatic",
    horsepower: "Horsepower: 670 HP",
    acceleration: "0-100 km/h: 3.1 sec",
    color: "Color: Pearl White",
    origin: "Origin: USA",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399"
  },
  2: {
    name: "BMW M4",
    price: "Price: PKR 2.1 Crore",
    speed: "Top Speed: 180 mph",
    year: "Model Year: 2022",
    engine: "Engine: 3.0L Twin Turbo",
    fuel: "Fuel Type: Petrol",
    transmission: "Transmission: Automatic",
    horsepower: "Horsepower: 503 HP",
    acceleration: "0-100 km/h: 3.8 sec",
    color: "Color: Black",
    origin: "Origin: Germany",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e"
  },
  3: {
    name: "Audi R8",
    price: "Price: PKR 4.5 Crore",
    speed: "Top Speed: 205 mph",
    year: "Model Year: 2023",
    engine: "Engine: 5.2L V10",
    fuel: "Fuel Type: Petrol",
    transmission: "Transmission: Automatic",
    horsepower: "Horsepower: 602 HP",
    acceleration: "0-100 km/h: 3.2 sec",
    color: "Color: Red",
    origin: "Origin: Germany",
    image: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b"
  },
  4: {
    name: "Ford Mustang",
    price: "Price: PKR 1.6 Crore",
    speed: "Top Speed: 170 mph",
    year: "Model Year: 2021",
    engine: "Engine: 5.0L V8",
    fuel: "Fuel Type: Petrol",
    transmission: "Transmission: Manual",
    horsepower: "Horsepower: 450 HP",
    acceleration: "0-100 km/h: 4.3 sec",
    color: "Color: Blue",
    origin: "Origin: USA",
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

  document.getElementById("carYear").innerText = car.year;
  document.getElementById("carEngine").innerText = car.engine;
  document.getElementById("carFuel").innerText = car.fuel;
  document.getElementById("carTransmission").innerText = car.transmission;
  document.getElementById("carHP").innerText = car.horsepower;
  document.getElementById("carAcceleration").innerText = car.acceleration;
  document.getElementById("carColor").innerText = car.color;
  document.getElementById("carOrigin").innerText = car.origin;
}

function goBack() {
  document.getElementById("detail").style.display = "none";
  document.getElementById("home").style.display = "block";
}
