// my script
var containerDiv = document.createElement('div');
containerDiv.classList.add('grid-container');
document.body.appendChild(containerDiv);
function makeRows(rows, cols) {
  var gridContainer = document.getElementsByClassName('grid-container')[0];
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for (var i = 0; i < (rows * cols); i++) {
    var newDiv = document.createElement("div");
    gridContainer.appendChild(newDiv).className = "grid-item";
  };
};

makeRows(16, 16);

function mouseOver(e){
    console.log(e);
    e.srcElement.style.backgroundColor = 'lightgrey';
};
// var x = document.getElementsByClassName('grid-item');
// console.log(document.getElementsByClassName('grid-item'));
var y = document.querySelectorAll('.grid-item');

[].forEach.call(y, function(e){
    e.addEventListener('mouseover', mouseOver);
});

// // Button
function buttonClick(){
  var htmlCollection = document.getElementsByClassName('grid-item');
  for (var i=htmlCollection.length-1; i=0; i--){
    htmlCollection[i].remove();
  }
  
  var input = prompt('Clearing the grid. How many squares per side to make the new grid?');
  var numInput = parseInt(input);
  // var newGrid = document.createElement('div');
  // newGrid.classList.add('grid-container');
  // document.body.insertBefore(newGrid, document.body.children[3]);
  makeRows(numInput, numInput);
};
var bt = document.getElementById("bt");
bt.addEventListener("click", buttonClick);
