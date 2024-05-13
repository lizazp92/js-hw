// 2. Create a class hierarchy representing products in an online shop.
// Use inheritance to create a base class Product and derived classes
// like Book, Electronics, and Clothing.
// Each class should have appropriate properties and methods.
// Should have name and price and specific Add properties and methods specific
// to each type of product.Implement a method to apply a discount to the price for each type.

class Product {
  #discountPercent = 0;
  constructor(itemName, manufacturer, basePrice, isAvailable) {
    if (typeof itemName === "string" && itemName.length > 2) {
      this._itemName = itemName;
    } else {
      this._itemName = "not defined";
    }

    if (typeof manufacturer === "string" && manufacturer.length > 3) {
      this._manufacturer = manufacturer;
    } else {
      this._manufacturer = "not defined";
    }

    if (!isNaN(basePrice) && basePrice > 0) {
      this._basePrice = basePrice;
    } else {
      this._basePrice = 10;
    }

    this._discountedPrice = this.basePrice;

    if (typeof isAvailable === "boolean") {
      this._isAvailable = isAvailable;
    } else {
      this._isAvailable = false;
    }
  }

  get itemName() {
    return this._itemName;
  }

  get manufacturer() {
    return this._manufacturer;
  }

  get basePrice() {
    return this._basePrice;
  }

  get discountedPrice() {
    return this._discountedPrice;
  }
  get discountPercent() {
    return this.#discountPercent;
  }
  get isAvailable() {
    return this._isAvailable;
  }

  set itemName(value) {
    if (typeof value === "string" && value.length > 2) {
      this._itemName = value;
    } else {
      this._itemName = "not defined";
    }
  }

  set manufacturer(value) {
    if (typeof value === "string" && value.length > 3) {
      this._manufacturer = value;
    } else {
      this._manufacturer = "not defined";
    }
  }

  set basePrice(value) {
    if (!isNaN(value) && value > 0) {
      this._basePrice = value;
    } else {
      this._basePrice = 10;
    }
  }

  set isAvailable(value) {
    if (typeof value === "boolean") {
      this._isAvailable = value;
    } else {
      this._isAvailable = false;
    }
  }

  setDiscount(newDiscountPercent) {
    this.#discountPercent = newDiscountPercent;
    this._discountedPrice = (
      ((100 - newDiscountPercent) / 100) *
      this.basePrice
    ).toFixed(2);
  }
  itemDesciption() {
    console.log(`Base price is ${this.basePrice} USD. 
      Discount is ${this.#discountPercent}%.
      Discounted price is ${this.discountedPrice} USD. 
      In stock: ${this.isAvailable}.`);
  }
}

class Book extends Product {
  constructor(itemName, manufacturer, basePrice, isAvailable, author, pages) {
    super(itemName, manufacturer, basePrice, isAvailable);
    if (typeof author === "string" && author.length > 1) {
      this._author = author;
    } else {
      this._author = "not defined";
    }

    if (!isNaN(pages) && pages > 10) {
      this._pages = pages;
    } else {
      this._pages = "not defined";
    }
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }

  set author(value) {
    if (typeof value === "string" && value.length > 1) {
      this._author = value;
    } else {
      this._author = "not defined";
    }
  }

  set pages(value) {
    if (!isNaN(value) && value > 0) {
      this._pages = value;
    } else {
      this._pages = "not defined";
    }
  }

  itemDesciption() {
    console.log(`${this.itemName} by ${this.author}.
    Publishing house: ${this.manufacturer}.
    Pages: ${this.pages}.`);
    super.itemDesciption();
  }
}

class Electronics extends Product {
  constructor(
    itemName,
    manufacturer,
    basePrice,
    isAvailable,
    functionality,
    voltage
  ) {
    super(itemName, manufacturer, basePrice, isAvailable);
    if (typeof functionality === "string" && functionality.length > 2) {
      this._functionality = functionality;
    } else {
      this._functionality = "not defined";
    }

    if (voltage === 220 || voltage === 110) {
      this._voltage = voltage;
    } else {
      this._voltage = "not defined";
    }
  }

  get functionality() {
    return this._functionality;
  }

  get voltage() {
    return this._voltage;
  }

  set functionality(value) {
    if (typeof value === "string" && value.length > 2) {
      this._functionality = value;
    } else {
      this._functionality = "not defined";
    }
  }

  set voltage(value) {
    if (value === 220 || value === 110) {
      this._voltage = value;
    } else {
      this._voltage = "not defined";
    }
  }

  itemDesciption() {
    console.log(`Item: ${this.itemName}. 
    Brand: ${this.manufacturer}.
    Voltage: ${this.voltage}.
    Functionality: ${this.functionality}.`);
    super.itemDesciption();
  }
}

class Clothing extends Product {
  constructor(itemName, manufacturer, basePrice, isAvailable, section, size) {
    super(itemName, manufacturer, basePrice, isAvailable);
    if (
      section === "male" ||
      section === "female" ||
      section === "unisex" ||
      section === "children"
    ) {
      this._section = section;
    } else {
      this._section = "not defined";
    }

    if (size === "S" || size === "M" || size === "L") {
      this._size = size;
    } else {
      this._size = "not defined";
    }
  }

  get section() {
    return this._section;
  }

  get size() {
    return this._size;
  }

  set section(value) {
    if (
      value === "male" ||
      value === "female" ||
      value === "unisex" ||
      value === "children"
    ) {
      this._section = value;
    } else {
      this._section = "not defined";
    }
  }

  set size(value) {
    if (value === "S" || value === "M" || value === "L") {
      this._size = value;
    } else {
      this._size = "not defined";
    }
  }

  itemDesciption() {
    console.log(`Item: ${this.itemName}. 
      Brand: ${this.manufacturer}.
      Size: ${this.size}.
      Section: ${this.section}.`);
    super.itemDesciption();
  }
}

// BOOK
const book1 = new Book("LOTR", "LH Press", 101, true, "Tolkien", 120);
// checking setters
// book1.pages = 0;
// book1.manufacturer = 2;
book1.setDiscount(20);
book1.itemDesciption();

// ELECTRONICS
const electroitem1 = new Electronics(
  "iron",
  "Bosch",
  15.4,
  true,
  "iron clothes",
  220
);
// checking setters
// electroitem1.voltage = 110;
electroitem1.setDiscount(5);
electroitem1.itemDesciption();

// CLOTHES
const clothesItem1 = new Clothing(
  "shirt",
  "Bershka",
  15.4,
  false,
  "unisex",
  "M"
);
// checking setters
// clothesItem1.section = "child";
clothesItem1.setDiscount(90);
clothesItem1.itemDesciption();
