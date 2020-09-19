
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

  // ctrl + char events
  if (event.ctrlKey && String.fromCharCode(event.keyCode) === 'B') {
    formatContent("bold");
    event.preventDefault();
    event.stopPropagation();
  } else if (event.ctrlKey && String.fromCharCode(event.keyCode) === 'I') {
    formatContent("italic");
    event.preventDefault();
    event.stopPropagation();
  } else if (event.ctrlKey && event.shiftKey && event.key === '`') {
    formatContent("longcode");
    event.preventDefault();
    event.stopPropagation();
  } else if (event.ctrlKey && event.key === "`") {
    formatContent("shortcode");
    event.preventDefault();
    event.stopPropagation();
  } else if (event.ctrlKey && String.fromCharCode(event.keyCode) === 'L') {
    formatContent("link-toogle");
    event.preventDefault();
    event.stopPropagation();
  } else if (event.ctrlKey && event.key === "Enter") {
    submitNotes(document.postJournal.date.value,
      document.postJournal.tags.value,
      document.postJournal.content.value);
    
    event.preventDefault();
  }
});

postJournal.addEventListener("submit", function(event) {
  submitNotes(document.postJournal.date.value,
    document.postJournal.tags.value,
    document.postJournal.content.value);
  
  event.preventDefault();
});

linkOption.addEventListener("submit", function(event) {
  document.querySelector(`[name="linkOption"]`).style.display = "none";
  
  document.postJournal.content.value += `[${linkOption.linkDescription.value}](${linkOption.link.value})`;
  
  linkOption.link.value = "";
  linkOption.linkDescription.value = "";
  
  event.preventDefault();
});

// input trigger
document.postJournal.tags.addEventListener("input", function() {
  let initialValue = this.value;
  searchTags(initialValue, uniqueTags)
});