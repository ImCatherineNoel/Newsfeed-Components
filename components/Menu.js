/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

const menuMaker = (array) => {
  //create Elements
  const menu = document.createElement("div");
  const list = document.createElement("ul");
  const item1 = document.createElement("li");
  const item2 = document.createElement("li");
  const item3 = document.createElement("li");
  const item4 = document.createElement("li");
  const item5 = document.createElement("li");
  const item6 = document.createElement("li");

  //add classes
  menu.classList.add("menu");

  //add content
  item1.textContent = array[0];
  item2.textContent = array[1];
  item3.textContent = array[2];
  item4.textContent = array[3];
  item5.textContent = array[4];
  item6.textContent = array[5];

  //HTML like structure
  menu.appendChild(list);
  list.appendChild(item1);
  list.appendChild(item2);
  list.appendChild(item3);
  list.appendChild(item4);
  list.appendChild(item5);
  list.appendChild(item6);

  //select menuButton
  const menuButton = document.querySelector(".menu-button");

  //event listener
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
  })


  return menu;
}

menuMaker(menuItems);