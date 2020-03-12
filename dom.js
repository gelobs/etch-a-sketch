// my script

// Make grid 16x16
makeRows(16, 16);

// Button click event listener
var bt = document.getElementById("bt");
bt.addEventListener("click", buttonClick);

// Create grid-container and grid items dynamically
function makeRows(rows, cols) {
  var containerDiv = document.createElement('div');
  containerDiv.classList.add('grid-container');
  document.body.insertBefore(containerDiv, document.body.children[3]);
  var gridContainer = document.getElementsByClassName('grid-container')[0];
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for (var i = 0; i < (rows * cols); i++) {
    var newDiv = document.createElement("div");
    gridContainer.appendChild(newDiv).className = "grid-item";
  };
};

// Use jQuery to make colorization work even after grid-container replacement
$(document).on('mouseover','.grid-item',function(e){
  // console.log(e);  
  e.currentTarget.style.backgroundColor = 'lightgrey';
});

// // Button
function buttonClick(){
  // Remove grid-items
  var htmlCollection = document.getElementsByClassName('grid-item');
  for (var i=htmlCollection.length-1; i>0; i--){
    htmlCollection[i].remove();
  }
  htmlCollection[0].remove();
  // Remove grid container
  document.getElementsByClassName('grid-container')[0].remove();
  var input = prompt('Clearing the grid. How many squares per side to make the new grid?');
  while(input == '' || input == null){
    input = prompt('Give a proper integer input!');
  }
  // Cast to int
  var numInput = parseInt(input); 
  // Make new grid
  makeRows(numInput, numInput);
};

