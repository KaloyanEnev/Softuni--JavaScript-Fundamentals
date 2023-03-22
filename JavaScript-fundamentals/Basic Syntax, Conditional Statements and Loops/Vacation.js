function demo(numberOfPeople, typeOfGroup, day) {
  let price = 0;
  switch (day) {
    case "Friday":
      if (typeOfGroup === "Students") {
        if (numberOfPeople >= 30) {
          price = numberOfPeople * 8.45 * 0.85;
        } else {
          price = numberOfPeople * 8.45;
        }
      } else if (typeOfGroup === "Business") {
        if (numberOfPeople >= 100) {
          price = (numberOfPeople - 10) * 10.9;
        } else {
          price = numberOfPeople * 10.9;
        }
      } else if (typeOfGroup === "Regular") {
        if (numberOfPeople >= 10 && numberOfPeople <= 20) {
          price = numberOfPeople * 15 * 0.95;
        } else {
          price = numberOfPeople * 15;
        }
      }

      break;
    case "Saturday":
      if (typeOfGroup === "Students") {
        if (numberOfPeople >= 30) {
          price = numberOfPeople * 9.80 * 0.85;
        } else {
          price = numberOfPeople * 9.80;
        }
      } else if (typeOfGroup === "Business") {
        if (numberOfPeople >= 100) {
          price = (numberOfPeople - 10) * 15.60;
        } else {
          price = numberOfPeople * 15.60;
        }
      } else if (typeOfGroup === "Regular") {
        if (numberOfPeople >= 10 && numberOfPeople <= 20) {
          price = numberOfPeople * 20 * 0.95;
        } else {
          price = numberOfPeople * 20;
        }
      }

      break;
    case "Sunday":
      if (typeOfGroup === "Students") {
        if (numberOfPeople >= 30) {
          price = numberOfPeople * 10.46 * 0.85;
        } else {
          price = numberOfPeople * 10.46;
        }
      } else if (typeOfGroup === "Business") {
        if (numberOfPeople >= 100) {
          price = (numberOfPeople - 10) * 16;
        } else {
          price = numberOfPeople * 16;
        }
      } else if (typeOfGroup === "Regular") {
        if (numberOfPeople >= 10 && numberOfPeople <= 20) {
          price = numberOfPeople * 22.50 * 0.95;
        } else {
          price = numberOfPeople * 22.50;
        }
      }

      break;
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}
demo(40,

    "Regular",
    
    "Saturday")