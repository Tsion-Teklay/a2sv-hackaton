// Display the menu options
function displayMenu() {
    console.log("Welcome to the Unique Calculator!");
    console.log("\nMenu Options:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Rectangle Area");
    console.log("6. Rectangle Perimeter");
    console.log("7. Circle Area");
    console.log("8. Circle Perimeter");
    console.log("9. Triangle Area");
    console.log("10. Triangle Perimeter");
  }
  
  // Handle user input and perform the selected calculation
  function performCalculation() {
    const userChoice = prompt("Enter your choice (1-10): ");
  
    switch (userChoice) {
      case "1":
        const num1 = parseFloat(prompt("Enter the first number: "));
        const num2 = parseFloat(prompt("Enter the second number: "));
        console.log(`The result of addition is: ${num1 + num2}`);
        break;
  
      case "2":
        const subtrahend = parseFloat(prompt("Enter the subtrahend: "));
        const minuend = parseFloat(prompt("Enter the minuend: "));
        console.log(`The result of subtraction is: ${minuend - subtrahend}`);
        break;
  
      case "3":
        const factor1 = parseFloat(prompt("Enter the first factor: "));
        const factor2 = parseFloat(prompt("Enter the second factor: "));
        console.log(`The result of multiplication is: ${factor1 * factor2}`);
        break;
  
      case "4":
        const dividend = parseFloat(prompt("Enter the dividend: "));
        const divisor = parseFloat(prompt("Enter the divisor: "));
        console.log(`The result of division is: ${dividend / divisor}`);
        break;
  
      case "5":
        const rectangleLength = parseFloat(prompt("Enter the length of the rectangle: "));
        const rectangleWidth = parseFloat(prompt("Enter the width of the rectangle: "));
        console.log(`The area of the rectangle is: ${rectangleLength * rectangleWidth}`);
        break;
  
      case "6":
        const rectLength = parseFloat(prompt("Enter the length of the rectangle: "));
        const rectWidth = parseFloat(prompt("Enter the width of the rectangle: "));
        console.log(`The perimeter of the rectangle is: ${2 * (rectLength + rectWidth)}`);
        break;
  
      case "7":
        const circleRadius = parseFloat(prompt("Enter the radius of the circle: "));
        console.log(`The area of the circle is: ${Math.PI * circleRadius ** 2}`);
        break;
  
      case "8":
        const circleRadius2 = parseFloat(prompt("Enter the radius of the circle: "));
        console.log(`The perimeter of the circle is: ${2 * Math.PI * circleRadius2}`);
        break;
  
      case "9":
        const triangleBase = parseFloat(prompt("Enter the base of the triangle: "));
        const triangleHeight = parseFloat(prompt("Enter the height of the triangle: "));
        console.log(`The area of the triangle is: ${0.5 * triangleBase * triangleHeight}`);
        break;
  
      case "10":
        const side1 = parseFloat(prompt("Enter the first side of the triangle: "));
        const side2 = parseFloat(prompt("Enter the second side of the triangle: "));
        const side3 = parseFloat(prompt("Enter the third side of the triangle: "));
        console.log(`The perimeter of the triangle is: ${side1 + side2 + side3}`);
        break;
  
      default:
        console.log("Invalid choice. Please try again.");
        break;
    }
  }
  
  // Run the calculator
  displayMenu();
  performCalculation();