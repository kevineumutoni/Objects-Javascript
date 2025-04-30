//QUESTION 1
function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  
  const employees = [
    new Employee("Kevine", "developer", 60000),
    new Employee("Bob", "designer", 50000),
    new Employee("Umutoni", "developer", 70000),
    new Employee("David", "manager", 80000),
    new Employee("Cee", "developer", 65000),
  ];
  
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].position === "developer") {
      employees[i].salary *= 1.1;
    }
  }
  
  for (let i = 0; i < employees.length; i++) {
      console.log(employees[i])
  }

  //QUESTION 2

  function getAvailableProductsSortedByPrice(products) {
    const availableProducts = products.filter(product => product.inStock);
    availableProducts.sort((a, b) => a.price - b.price);
    return availableProducts;
  }

  let products = [
    { name: "Laptop", price: 800, inStock: true },
    { name: "Phone", price: 400, inStock: false },
    { name: "Tablet", price: 300, inStock: true },
    { name: "Remote", price: 200, inStock: true }
];

console.log(getAvailableProductsSortedByPrice(products));

//QUESTION 3

const grades = {
    John: [80, 90, 75, 60],
    Jacky: [95, 85, 92, 88],
    Hector: [70, 65, 80, 72],
    Hitler: [60, 55, 70, 65],
  };
  
  function calculateAndPrintAverage(gradesObject) {
    for (const student in gradesObject) {
      const scores = gradesObject[student];
      const sum = scores.reduce((acc, score) => acc + score, 0);
      const average = sum / scores.length;
      const result = average > 70 ? "Pass" : "Fail";
      console.log(`${student}: Average - ${average.toFixed(2)}, ${result}`);
    }
  }
  
  calculateAndPrintAverage(grades);

  //QUESTION 3
//   let gradess = {
//     Alice: [80, 90, 85],
//     Bob: [60, 65, 58],
//     Charlie: [75, 70, 72]
// };
// function checkGrades(gradess) {
//     for (let student in gradess) {
//         let scores = gradess[student];
//         let total = 0;
//         for (let i = 0; i < scores.length; i++) {
//             total += scores[i];
//         }
//         let average = total / scores.length;
//         if (average > 70) {
//             console.log(student + ": Pass (" + average.toFixed(2) + ")");
//         } else {
//             console.log(student + ": Fail (" + average.toFixed(2) + ")");
//         }
//     }
// }
// checkGrades(gradess);

//QUESTION 4


// let users = [
//     { username: "user1", email: "user1@example.com", isActive: true },
//     { username: "user2", email: "user2@example.com", isActive: true },
//     { username: "user3", email: "user3@example.com", isActive: true }
// ];
// // Simulate deactivation randomly
// function simulate(users){


// for (let i = 0; i < users.length; i++) {
//     if (Math.random() < 0.5) { 
//         users[i].isActive = false;
//     }
// }
// // Print active users
// console.log("Active users:");
// for (let i = 0; i < users.length; i++) {
//     if (users[i].isActive) {
//         console.log(users[i].username);
//     }
// }
// }
// simulate(users)

function User(username, email, isActive) {
  this.username = username;
  this.email = email;
  this.isActive = isActive;
}

const users = [
  new User("Alice", "alice@mail.com", true),
  new User("Bob", "bob@mail.com", false),
  new User("Charlie", "charlie@mail.com", true),
  new User("Diana", "diana@mail.com", false),
  new User("Eve", "eve@mail.com", true),
];

console.log("Active Users:");
for (let user of users) {
  if (user.isActive) {
    console.log(user.username);
  }
}



//QUESTION 5

let destinations = [
    { name: "Beach", distance: 100, budgetRequired: 300 },
    { name: "Mountain", distance: 250, budgetRequired: 400 },
    { name: "City", distance: 50, budgetRequired: 150 },
    { name: "Village", distance: 200, budgetRequired: 200 }
];
function findDestinations(maxDistance, maxBudget) {
    let available = [];
    for (let i = 0; i < destinations.length; i++) {
        let dest = destinations[i];
        if (dest.distance <= maxDistance && dest.budgetRequired <= maxBudget) {
            available.push(dest);
        }
    }
    if (available.length > 0) {
        return available;
    } else {
        return "No destinations available under your budget and distance";
    }
}

console.log(findDestinations(150, 300));


