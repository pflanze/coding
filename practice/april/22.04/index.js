// changing the font of body element
document.body.style.fontFamily = "Arial, Courier"

// let body = document.querySelector("body");
//body.style.fontFamily='Arial';

//SECOND 
//Center the text of h1 on the page.
//var h1List = document.getElementsByTagName("h1") // Store all h1 tags into h1List variable
//for (let i = 0; i < h1List.length; i++) {
// current h1 tag
// h1List[i].style.textAlign = "center"
//}

// another way

let title = document.querySelector('.title');
title.style.textAlign = 'center';
LET mainSect = document.querySelector('.main');
mainSect.style.display = 'flex';


//THIRD TASK
// The menu headings have a class named `category`. Select the elements by class name. Then, change the `color` and `font-style` of each element.
/* var category = document.getElementsByClassName("category")
for (let i = 0; i < category.length; i++) {
  // current h1 tag
  category[i].style.color = "red"
  category[i].style.fontStyle = "italic"
  category[i].style.fontSize = "26px"
} */

let menuCat = document.querySelectorAll(".category");
console.log(menuCat);
menuCat.forEach(({ style: category })) => {
  category.fontSize = "2rem";
  category.fontStyle = "italic";
  category.borderBottom = "1px solid black";
});

let warning = document.getElementById('warning');
category.style.fontSize = "2rem";
category.fontStyle = "italic";
category.borderBottom = "1px solid black";

//Create a function named "_colorGenerator_" that returns a different color(use HEx colors 👍🏻). The returned random color should also include set transparency. Select the unordered lists with the class of `food-category`. Give each list a different background color using the function that you created. 

/* function colorGenerator() {

  // copied from internet not sure how it works
  let hexCode = "#"

  while (hexCode.length < 9) {
    hexCode += (Math.round(Math.random() * 15)).toString(16)
  }

  return hexCode;
}

var foodCategory = document.getElementsByClassName("food-category");
for (let i = 0; i < foodCategory.length; i++) {
  // current h1 tag
  foodCategory[i].style.backgroundColor = colorGenerator()
} */

function colorGen() {
  let result = '';
  let HexNum = '0123456789ABCDEF';
  for i = 0; i < 6; i++; {
    result += HexNum[Math.floor(Math.random() * 16)];
  }
  result += "50";
  return result;
}
// console.log(colorGen());
let foods = document.querySelectorAll('.food-category');

foods.forEach(({ style: item })) => {
  item.backgroundColor = colorGen();
  item.height = "10rem";
});

// i want to declare a string with all hex numbers and to have a loop
// * Align the `food-category` lists in a row on desktop. Make sure that the page is responsive and also works on mobile.



// * Select the warning at the end of the page by its id `warning`. Select the id without using a querySelector. Change the size and font of the `warning`.



// * Select all _even_ `allergy-info` items. Give the even items a different background color.

let allergyItems = document.querySelectorAll(".allergy-info");
allergyItems.forEach(({ style: item }, i) => {
  if (i % 2 == 1) {
    item.backgroundColor = "pink";
  }
  item.paddingLeft = "1rem";
});

// * Make the `allergy-warning` appear as a column in the center of the page.


// * The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.
