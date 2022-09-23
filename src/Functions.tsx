function Functions() {
  //uppgift 1
  function max(number1: number, number2: number): number {
    return number1 > number2 ? number1 : number2;
  }

  //uppgift 2
  function landscape(height: number, width: number): boolean {
    return height > width;
  }

  //uppgift 3a
  function rectangleArea(height: number, width: number): number {
    return height * width;
  }

  //uppgift 3b
  function triangleArea(width: number, height: number): number {
    return (width * height) / 2;
  }

  //uppgift 3c
  function circleArea(radius: number, pi = 3.14): number {
    return pi * radius ** 2;
  }

  //uppgift 4

  function tellFortune(
    occupation: string,
    city: string,
    partnerName: string,
    amountChildren: number | string
  ) {
    console.log(
      `Du kommer vara en ${occupation} i ${city}, gift med ${partnerName} och ha ${amountChildren} barn.`
    );
  }

  //uppgift 5a
  function calculateDogYear(humanYear: number): number {
    return humanYear * 7;
  }

  //uppgift 5b
  function calculateDogAge(humanYear: number, dogYear: number = 7): number {
    return humanYear * dogYear;
  }

  //uppgift 6
  function daysOfSupplies(
    amountOfResources: number,
    resourcesPerDay: number
  ): number {
    return amountOfResources / resourcesPerDay;
  }

  //uppgift 7a
  function toFahreinheit(celsius: number): number {
    return celsius * (9 / 5) + 32;
  }

  //uppgift 7b
  function toCelsius(fahreinheit: number): number {
    return ((fahreinheit - 32) * 5) / 9;
  }

  //uppgift 8
  function ageInSeconds(age: number): number {
    return 60 * 60 * 24 * 365;
  }

  //Extra uppgift 1
  function area(
    shape: "rectangle" | "triangle",
    width: number,
    height: number
  ): number {
    if (shape === "rectangle") return width * height;
    if (shape === "triangle") return width * height;
    return (width / 2 ** 2) * Math.PI;
  }

  //Extra uppgift 2
  const checkSpeed: number = 80;
  let points: number = (checkSpeed - 70) / 5;

  if (checkSpeed > 70) {
  }
  console.log(points);

  if (points > 12) console.log(points);

  if (points > 12) console.log(points);

  if (points > 12) {
    console.log(`Indraget Körkort! Din poäng är: ${points}`);
  } else {
    console.log(`OK! Din poäng är: ${points}`);
  }
}

export default Functions;
