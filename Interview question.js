let car = {
  carName: "",
  carModel: "",
  getData: function (data) {
    var setData = function (data) {
      // setData is inside getData fn. So "this" is undefined inside setData() fn
      let arr = data.split(" ");
      this.carName = arr[0]; // change "this" to "car". Here "this" is undefined
      this.carModel = arr[1];
    };
    setData(data);
  },
};

car.getData("hyundai Asta");

console.log("first", this.carName); // undefined
console.log("second", car.carName); // hyundai

// ------------------------------------------------

let car = {
  carName: "",
  carModel: "",
  getData: function (data) {
    let arr = data.split(" ");
    this.carName = arr[0];
    this.carModel = arr[1];
  },
};

car.getData("Audi R8");
console.log("second", car.carName); // R8

// In the 1st code, see that setData() fn is inside getData() fn. So inside setData, "this" will
// be undefined. In second code, getData() has no fn inside it. So, "this" is availble inside
// getData() fn which refers to the car object.
