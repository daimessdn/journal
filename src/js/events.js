
// keyboard press action
document.addEventListener("keydown", function(event) {
  if (event.key == "PageUp") {
    event.preventDefault();
    navbar.children[2].click();
    // console.log('next clicked');
  } else if (event.key == "PageDown") {
    event.preventDefault();
    navbar.children[1].click();
    // console.log('prev clicked');
  }
});