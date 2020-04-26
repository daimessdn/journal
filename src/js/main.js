// init'd highlight.js and begin highlighting all code related...
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});

/* Set the width of the side navigation to 250px */
function openNav() {
  if (window.innerWidth <= 500 or window.innerHeight <= 400) {
    document.getElementById("mySidenav").style.width = "100%";
  } else {
    document.getElementById("mySidenav").style.width = "30%";
  }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 