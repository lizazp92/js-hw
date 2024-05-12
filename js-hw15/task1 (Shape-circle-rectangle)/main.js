// 1. Create a shape hierarchy using classes in JavaScript.
// Implement a base class called Shape and two derived classes called Circle and Rectangle.
// Each class should have appropriate constructors and methods.
// Should have methods for getting area and circumference

class Shape {
  constructor(id, color, isAnimated) {
    if (!isNaN(id) && id > 0) {
      this._id = id;
    } else {
      this._id = 1;
    }
    if (typeof color === "string" && color.length > 2) {
      this._color = color;
    } else {
      this._color = "yellow";
    }
    if (typeof isAnimated === "boolean") {
      this._isAnimated = isAnimated;
    } else {
      this._isAnimated = false;
    }
  }
  get id() {
    return this._id;
  }

  get color() {
    return this._color;
  }

  get isAnimated() {
    return this._isAnimated;
  }

  set id(value) {
    if (!isNaN(value) && value > 0) {
      this._id = value;
    } else {
      this._id = 1;
    }
  }

  set color(value) {
    if (typeof value === "string" && value.length > 2) {
      this._color = value;
    } else {
      this._color = "yellow";
    }
  }

  set isAnimated(value) {
    if (typeof value === "boolean") {
      this._isAnimated = value;
    } else {
      this._isAnimated = false;
    }
  }

  introduce() {
    console.log(
      `ID: ${this.id}. Color: ${this.color}. Animated: ${this.isAnimated}`
    );
  }
}

class Circle extends Shape {
  constructor(id, color, isAnimated, radius) {
    super(id, color, isAnimated);
    if (!isNaN(radius) && radius > 0) {
      this._radius = radius;
    } else {
      this._radius = 1;
    }
  }
  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (!isNaN(value) && value > 0) {
      this._radius = value;
    } else {
      this._radius = 1;
    }
  }

  area() {
    const area = (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
    console.log(`The area of a circle is ${area} sm sqr.`);
  }
  circumference() {
    const circumference = (2 * Math.PI * this.radius).toFixed(2);
    console.log(`The circumference of a circle is ${circumference} sm.`);
  }
}

class Rectangle extends Shape {
  constructor(id, color, isAnimated, length, width) {
    super(id, color, isAnimated);
    if (!isNaN(length) && length > 0) {
      this._length = length;
    } else {
      this._length = 5;
    }
    if (!isNaN(width) && width > 0) {
      this._width = width;
    } else {
      this._width = 6;
    }
  }
  get length() {
    return this._length;
  }
  get width() {
    return this._width;
  }

  set length(value) {
    if (!isNaN(value) && value > 0) {
      this._length = value;
    } else {
      this._length = 5;
    }
  }

  set width(value) {
    if (!isNaN(value) && value > 0) {
      this._width = value;
    } else {
      this._width = 6;
    }
  }

  perimeter() {
    const perimeter = (this.length + this.width) * 2;
    console.log(`The perimeter of a rectangle is ${perimeter} sm.`);
  }

  area() {
    const area = (this.length * this.width).toFixed(2);
    console.log(`The area of a rectangle is ${area} sm sqr.`);
  }
}

const circle = new Circle(5, "white", true, 4.5);
// checking if the condition for changing propery value works
circle.radius = "hello";

circle.introduce();
circle.area();
circle.circumference();

const rectangle = new Rectangle(10, "red", false, 1, 6);
//checking if i can change the property value
rectangle.width = 1;

rectangle.introduce();
rectangle.perimeter();
rectangle.area();
