// my script

console.log(document);
// var newDiv = document.createElement('div');
// newDiv.className = 'grid-item';
// console.log(document.getElementsByClassName('grid-container'));
var gridContainer = document.getElementsByClassName('grid-container')[0];
// gridContainer.appendChild(newDiv);
// gridContainer.appendChild(newDiv);

function makeRows(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for (var i = 0; i < (rows * cols); i++) {
    var newDiv = document.createElement("div");
    gridContainer.appendChild(newDiv).className = "grid-item";
  };
};

makeRows(16, 16);

function mouseOver(e){
    // console.log(e);
    e.srcElement.style.backgroundColor = 'lightgrey';
}
var x = document.getElementsByClassName('grid-item');
console.log(document.getElementsByClassName('grid-item'));
var y = document.querySelectorAll('.grid-item');


[].forEach.call(y, function(e){
    e.addEventListener('mouseover', mouseOver);
});
