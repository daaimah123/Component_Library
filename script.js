/* _________CLASS BASED STYLING_________ */
const columnClass = document.getElementsByClassName("column");
const componentListClass = document.getElementsByClassName("component-list");

// Grid View Button Click Styling
function gridView() {
  for (i = 0; i < columnClass.length; i++) {
    columnClass[i].style.width = "25%";
    columnClass[i].style.float = "left";
    columnClass[i].style.marginBottom = "2px";
  }
  componentListClass[0].style.height = '350px';
}

// List  View Button Click Styling
function listView() {
  for (i = 0; i < columnClass.length; i++) {
    columnClass[i].style.width = "100%";
    columnClass[i].style.margin = "2px";
  }
  componentListClass[0].style.height = '750px';
}