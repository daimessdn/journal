const search_phrases = ["what are you looking for?", "search something, huh?", "found what you need?", "looking for something?", "found some words?", "searched any useful stuffs?"]

const loading_phrases = ["getting your journal ready...", "please wait for a moment once your journal is ready...", "can't wait for reading, eh?", "relax and we will make things done for you...", "rasdy for the reads?", "let see what we have for you...", "still be patient?"]

document.getElementById("loading").innerHTML = loading_phrases[Math.floor(Math.random() * loading_phrases.length)]

let content = "";

data.forEach(post => {
  console.log(post.id);

  content += "<div class='post' id='" + post.id + "'><p class='date'>" + post.date + "</p><span class='tags'>" + post.tags + "</span>" + post.content; 
});

document.getElementById("container").innerHTML = content;

// init'd highlight.js and begin highlighting all code related...
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});

/* Set the width of the side navigation to 250px */
function openNav() {
  if (window.innerWidth <= 500) {
    document.getElementById("mySidenav").style.width = "100%" ;
  } else if (window.innerHeight <= 400) {
    document.getElementById("mySidenav").style.width = "100%" ;
  }

  else {
    document.getElementById("mySidenav").style.width = "30%";
  }

  document.getElementsByTagName("input")[0].placeholder = search_phrases[Math.floor(Math.random() * search_phrases.length)]
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 