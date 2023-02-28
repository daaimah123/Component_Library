/* _________CLASS BASED STYLING_________ */
const columnClass = document.getElementsByClassName("column");
const componentContainerClass = document.getElementsByClassName("component-container");

// Grid View Button Click Styling
function gridView() {
  for (i = 0; i < columnClass.length; i++) {
    columnClass[i].style.width = "15%";
    columnClass[i].style.float = "left";
    columnClass[i].style.marginBottom = "2px";
  }
  componentContainerClass[0].style.marginLeft = '45px';
}

// List  View Button Click Styling
function listView() {
  for (i = 0; i < columnClass.length; i++) {
    columnClass[i].style.width = "100%";
    columnClass[i].style.margin = "2px";
  }
  componentContainerClass[0].style.marginRight = '45px';
}

// TO-DO: When button clicked, show content from component-container class
// document.getElementsByClassName('listBtn').onclick=function(){
//   componentContainerClass[0].style.display = " ";
//   console.log('Daaimah');
// };