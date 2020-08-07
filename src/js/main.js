// get current date
let curr_date_ = new Date();
let hour = curr_date_.getHours();

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

const not_found_phrases = [
  "uh oh. seems you are lost, little bro. let me get you into the right direction.",
  "one more arrow button to find your little story...",
  "did I say that you've got the little treasure?",
  "one more arrow button or create one. there's nothing here.",
  "nothing...",
  "have tried the search button yet? just look at the magnifying glass icon and type something you look for there. it should be worked. good luck... :)",
  "nothing's here. any place, maybe?",
  "right or left?"
];

const got_notes_phrases = [
  "I've got your notes!",
  "Here are some notes you recorded!",
  "Once upon a time...",
  "Since that date,",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  "Breaking News!!!"
];

const push_phrases = {
  morning: [
    "good morninig <br />OK, only that.",
    "slept well last night?",
    "have something to write?<br/>we have a writing space top there.",
    "got your breakfast and your coffee ready yet?",
    "rise and shine...",
  ],
  afternoon: [
    "have prepared your sunblock already?",
    "wait. is it still morning?<br />why the people said it's afternoon?",
    "don't forget to have some few rest.<br />it's lunch time I think.",
    "lunch time, honey...",
    "how was your nap?",
    "don't forget to eat",
    "have you taken a nap?",
  ],
  evening: [
    "already have dinner?",
    "good night...",
    "zzz...",
    "can't sleep?",
    "need a bedtime story?",
    "have prepared your lotion?",
    "sleep is good for health.<br /> don't forget to sleep.",
  ],
}

const search = search_phrases[Math.floor(Math.random() * search_phrases.length)];
const loading = loading_phrases[Math.floor(Math.random() * loading_phrases.length)];

const morning = push_phrases.morning[
                  Math.floor(Math.random() * push_phrases.morning.length)
                ];
const afternoon = push_phrases.afternoon[
                  Math.floor(Math.random() * push_phrases.afternoon.length)
                ];
const evening = push_phrases.evening[
                  Math.floor(Math.random() * push_phrases.evening.length)
                ];

document.getElementById("loading").innerHTML = loading;

if (hour >= 6 && hour < 12) {
  document.getElementById("push-message").innerHTML = morning;
} else if (hour >= 12 && hour < 19) {
  document.getElementById("push-message").innerHTML = afternoon;
} else {
  document.getElementById("push-message").innerHTML = evening;
}

// init'd highlight.js and begin highlighting all code related...
document.addEventListener('DOMContentLoaded', reloadNotes());

/* Set the width of the side navigation to 250px */
const nav = document.getElementById("mySidenav");
const search_bar = document.getElementsByTagName("input")[0];
const container = document.getElementById("container");
const date_ribbon = document.getElementById("date_ribbon");
date_ribbon.innerHTML = get_date_str(curr_date_);

function openNav() {
  if (window.innerWidth <= 500) { nav.style.width = "100%"; }
  else if (window.innerHeight <= 400) { nav.style.width = "100%"; }
  else { nav.style.width = "27%"; }

  search_bar.placeholder = search;
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
  preposted.date = get_date_str(currdate);

  const converter = new showdown.Converter();
  preposted.content = converter.makeHtml(content);

  console.log(preposted);
  data.push(preposted);

  document.postJournal.date.value = "";
  document.postJournal.tags.value = "";
  document.postJournal.content.value = "";

  container.innerHTML = `<p class="date" id="loading">${loading}</p>`;;

  reloadNotes();
}

function reloadNotes(event) {
  let content = "";

  data.reverse().forEach(post => {
    curr_date_str = get_date_str(curr_date_);

    if (curr_date_str == post.date) {
      content += `<div class="post" id="${post.id}">
                    <p class="date">${post.date}</p>
                    <span class="tags">${post.tags}</span>
                    ${post.content}
                  </div>`;
    }
  });

  setTimeout(getNotes(content), 3000);
}

function getNotes(content) {
  let formHTML = `<form name="postJournal"
                        onsubmit="submitNotes(document.postJournal.date.value,
                                              document.postJournal.tags.value,
                                              document.postJournal.content.value);"
                        method="POST">
                          <input type="date" name="date" />
                          <input type="text" name="tags" placeholder="#tags"/>
                          <textarea name="content"
                                    placeholder="${textarea_phrases[
                                                    Math.floor(Math.random() * textarea_phrases.length)]
                                                  }"></textarea>
                          <button type="submit">POST</button>
                      </form>`;
  
  const container = document.getElementById("container");

  if (content.length > 0) {
    content = "<p class='date'>" + got_notes_phrases[Math.floor(Math.random() * got_notes_phrases.length)] + "</p>" + content;
  } else {
    content = "<p class='date'>" + not_found_phrases[Math.floor(Math.random() * not_found_phrases.length)] + "</p>"
  }

  container.innerHTML = formHTML + "<hr />" + content;

  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
}

function previousNotes() {
  curr_date_.setDate(curr_date_.getDate() - 1);
  curr_date_str = get_date_str(curr_date_);

  if (curr_date_str != get_date_str(new Date)) {
    document.getElementById("back-trigger").style.bottom = "40px";
    document.getElementById("push-trigger").style.bottom = "68px";
    document.getElementById("back-trigger").style.opacity = "1";
  } else {
    document.getElementById("back-trigger").style.bottom = "8px";
    document.getElementById("push-trigger").style.bottom = "40px";
    document.getElementById("back-trigger").style.opacity = "0";
  }

  date_ribbon.innerHTML = curr_date_str;
  reloadNotes(curr_date_str);
}

function nextNotes() {
  curr_date_.setDate(curr_date_.getDate() + 1);
  curr_date_str = get_date_str(curr_date_);

  if (curr_date_str != get_date_str(new Date)) {
    document.getElementById("back-trigger").style.bottom = "40px";
    document.getElementById("push-trigger").style.bottom = "68px";
    document.getElementById("back-trigger").style.opacity = "1";
  } else {
    document.getElementById("back-trigger").style.bottom = "8px";
    document.getElementById("push-trigger").style.bottom = "40px";
    document.getElementById("back-trigger").style.opacity = "0";
  }

  date_ribbon.innerHTML = curr_date_str;
  reloadNotes(curr_date_str);
}

function toToday() {
  curr_date_ = new Date();
  curr_date_str = get_date_str(curr_date_);

  document.getElementById("back-trigger").style.bottom = "8px";
  document.getElementById("push-trigger").style.bottom = "40px";
  document.getElementById("back-trigger").style.opacity = "0";

  date_ribbon.innerHTML = curr_date_str;
  reloadNotes(curr_date_str);

  document.getElementById("next").style.width = 0;
}

function get_date_str(date) {
  let str_date;
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  console.log(day, month);

  if (day >= 10 && month < 10) {
    str_date =  `${day}/0${month}/${year}`;
  }
  else if (day < 10 && month >= 10) {
    str_date = `0${day}/${month}/${year}`;
  }
  else if (day < 10 && month < 10) {
    str_date = `0${day}/0${month}/${year}`;
  }
  else {
    str_date = `${day}/${month} /${year}`;
  }

  return str_date;
}

const navbar = document.getElementById('navbar');

document.addEventListener("keydown", function(event) {
  if (event.key == "ArrowRight") {
    event.preventDefault();
    navbar.children[2].click();
    // console.log('next clicked');
  } else if (event.key == "ArrowLeft") {
    event.preventDefault();
    navbar.children[1].click();
    // console.log('prev clicked');
  }
});

function closePushTrigger() {
  const push_trigger = document.getElementById("push-trigger").style;

  push_trigger.bottom = "8px";
  push_trigger.opacity = 0;

  // setTimeout(push_trigger.display = "none", 1000);
}