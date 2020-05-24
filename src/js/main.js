const search_phrases = [
  "what are you looking for?",
  "search something, huh?",
  "found what you need?",
  "looking for something?",
  "found some words?",
  "searched any useful stuffs?"
];

const loading_phrases = [
  "getting your journal ready...",
  "please wait for a moment once your journal is ready...",
  "can't wait for reading, eh?",
  "relax and we will make things done for you...",
  "ready for the reads?",
  "let see what we have for you...",
  "still be patient?"
];

const textarea_phrases = [
  "Dear, journal...",
  "Once upon a time...",
  "Hello, world!",
  "Tell me.",
  "Is there any interesting thing you want to tell?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
];

let curr_date_ = new Date();

document.getElementById("loading").innerHTML = loading_phrases[Math.floor(Math.random() * loading_phrases.length)];

// init'd highlight.js and begin highlighting all code related...
document.addEventListener('DOMContentLoaded', reloadNotes());

/* Set the width of the side navigation to 250px */
const nav = document.getElementById("mySidenav");
const search_bar = document.getElementsByTagName("input")[0];
const container = document.getElementById("container");

function openNav() {
  if (window.innerWidth <= 500) { nav.style.width = "100%"; }
  else if (window.innerHeight <= 400) { nav.style.width = "100%"; }
  else { nav.style.width = "27%"; }

  search_bar.placeholder = search_phrases[Math.floor(Math.random() * search_phrases.length)];
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  nav.style.width = "0";
} 

function submitNotes(date, tags, content) {
  let preposted = {
    id : Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 11),
    date : "",
    tags : tags,
    content : ""
  };

  const currdate = new Date(date);
  preposted.date = currdate.getDate() + "/" + (currdate.getMonth() + 1) + "/" + currdate.getFullYear();

  var converter = new showdown.Converter();

  preposted.content = converter.makeHtml(content);

  console.log(preposted);

  data.push(preposted);

  document.postJournal.date.value = "";
  document.postJournal.tags.value = "";
  document.postJournal.content.value = "";

  container.innerHTML = "<p class='date' id='loading'>" + loading_phrases[Math.floor(Math.random() * loading_phrases.length)] + "</p>";

  reloadNotes();
}

function reloadNotes(event) {
  let content = "";
  let cirr_date_str;

  data.reverse().forEach(post => {
    curr_date_str = curr_date_.getDate() + "/" + (curr_date_.getMonth() + 1) + "/" + curr_date_.getFullYear()

    if (curr_date_str == post.date) {
      content += "<div class='post' id='" + post.id + "'><p class='date'>" + post.date + "</p><span class='tags'>" + post.tags + "</span>" + post.content; 
    }
  });

  setTimeout(function() {
    const formHTML = "<form name=\"postJournal\" onsubmit=\"submitNotes(document.postJournal.date.value, document.postJournal.tags.value, document.postJournal.content.value); return false\" method=\"POST\"><input type=\"date\" name=\"date\" /><input type=\"text\" name=\"tags\" placeholder=\"#tags\"/><textarea name=\"content\" placeholder=\"" + textarea_phrases[Math.floor(Math.random() * textarea_phrases.length)] + "\"></textarea><button type=\"submit\">POST</button></form>";
   
    container.innerHTML = formHTML + "<hr />" + content;
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });

  }, 3000);
}