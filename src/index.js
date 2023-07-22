// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector("header");
const logoTitle = document.querySelector("#logoTitle");
const firstCard = document.querySelector(".card");
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector("img");
const titleFirstCard = firstCard.querySelector(".card-title");
const subtitleFirstCard = firstCard.querySelector(".card-subtitle");
const textFirstCard = firstCard.querySelector(".card-text");
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;

// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll("nav a");
// B- Loop over the links and console.log their text content
links.forEach((link) => console.log(link.textContent)); // higher order function => function that takes another function as an argument
// C- Turn the collection of links into a real array
const linksArr = Array.from(links);
// D- Use .filter to find the anchor tag with the textContent of "Home"
linksArr.find((link) => link.textContent === "Home");

// find => returns the first element which passes the CSSConditionRule, meets the criteria
// filter => returns all elements which pass the condition
// map => make some update to all elements of the Array
// reduce => reduce the array to a smaller value

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText
logoTitle.textContent = "Bloomtech Dogs";
titleFirstCard.textContent = "I am a dog";
subtitleFirstCard.textContent = "A story in three parts";
textFirstCard.textContent = "lorem ipsum or whateva";
link2FirstCard.textContent = "Dog ipsum";
// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
logoTitle.className = "logo heading banana";
link2FirstCard.href = "https://doggoipsum.com";
imageFirstCard.src = "https://dogpictures.com";
//  B- Using .setAttribute to change a few attributes
link1FirstCard.setAttribute("href", "https://pexels.com/search/dog");

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add("sky");
header.classList.remove("sky");
//  B- By manipulating inline styles on the element
header.style.fontSize = "2em";
// setInterval(() => header.classList.toggle("sky"), 1000);

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement("a"); // THIS HAS TO BE A DOM TAG NAME
blogLink.textContent = "Blog";
blogLink.href = "#";
document.querySelector("nav").appendChild(blogLink);
blogLink.classList.add("menu-item");

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]

// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
