let goalAchieved = confirm("did you make it to top 10?");

let willIGetMyNewCar = new Promise(myNewCarProm);
function myNewCarProm(resolve, reject) {
  if (goalAchieved) {
    car = {
      brand: "ferrari",
      model: "488 GTB",
      color: "red"
    };
    resolve(car);
  } else {
    reject("You got nothing! John Esnou");
  }
}

let askParent = function() {
  willIGetMyNewCar
    .then(function(myNewCar) {
      console.log(myNewCar);
      document.body.innerHTML = `Congratulations, here is your car!
      <li>${myNewCar.brand}</li>
      <li>${myNewCar.model}</li>
      <li>${myNewCar.color}</li>
      `;
    })
    .catch(function(err) {
      console.log(err);
      document.body.innerHTML = `You got nothing John Esnow`;
    });
};

askParent();
