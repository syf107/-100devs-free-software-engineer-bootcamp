//Create a mouse object that has four properties and three methods
const mouse = {};
mouse.brand = "Robot";
mouse.ergo = true;
mouse.wireless = true;
mouse.color = "black";
mouse.leftClick = function () {
  alert("Left clicked.");
};
mouse.rightClick = function () {
  alert("Right clicked.");
};

mouse["scroll wheel"] = function () {
  alert("The wheel scrolled.");
};
``;
