//  7. Books Object

// Define an object representing a book with properties like title and author.
const book = {
  title: "GenAI: From Beginner to Professional",
  author: "Zia Khan",
};

// 8. Display Book Details Methods

// Add a method to the book object to display its details. You can use string formatting to present the information neatly.
const book1 = {
  title: "JavaScript: From Beginner to Professional",
  author: "Zia Khan",
  displayDetails: function () {
    console.log(
      `Book Title: ${this.title}
       Author Name: ${this.author}`
    );
  },
};
book1.displayDetails();

// 9. Person object
// Create an object representing a person with properties for name, age, and address.
const person1 = {
  name: "Sarfaraz",
  age: 20,
  address: {
    street: 10,
    houseNo: 789,
    city: "Lahore",
  },
};
