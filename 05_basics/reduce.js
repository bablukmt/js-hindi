const shoppingCart = [
  {
    courseName: "Javascript Course",
    coursePrice: 1,
  },
  {
    courseName: "Phyhon Course",
    coursePrice: 2,
  },
  {
    courseName: "Java Course",
    coursePrice: 3,
  },
  {
    courseName: "Ruby Course",
    coursePrice: 4,
  },
  {
    courseName: "Node Course",
    coursePrice: 5,
  },
];

const totalPrice = shoppingCart.reduce((acc, val) => acc + val.coursePrice,0)
console.log(totalPrice);