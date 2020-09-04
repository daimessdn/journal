
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

postJournal.addEventListener("submit", function(event) {
  submitNotes(document.postJournal.date.value,
    document.postJournal.tags.value,
    document.postJournal.content.value);
  
  event.preventDefault();
});

linkOption.addEventListener("submit", function(event) {
  
  
  event.preventDefault();
});