



   var cells = document.getElementsByClassName("cell");

console.log(cells);
var buttons  = [[ cells[0] , cells[1],cells[2]],
[cells[3], cells[4], cells[4],cells[5]],
[cells[7],cells[8]]]


 function show_index( x, y){
  alert( x + ""+ y)
  buttons[x][y].style.backgrouncolor = "red";
}