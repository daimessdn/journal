// get current date
let curr_date_ = new Date();
let hour = curr_date_.getHours();

// init'd random phrases
const search = search_phrases[Math.floor(Math.random() * search_phrases.length)];
const tag_search = tag_phrases[
                   Math.floor(Math.random() * tag_phrases.length)
                 ];
const loading = loading_phrases[Math.floor(Math.random() * loading_phrases.length)];
const textarea = textarea_phrases[
                   Math.floor(Math.random() * textarea_phrases.length)
                 ];

const morning = push_phrases.morning[
                  Math.floor(Math.random() * push_phrases.morning.length)
                ];
const afternoon = push_phrases.afternoon[
                  Math.floor(Math.random() * push_phrases.afternoon.length)
                ];
const evening = push_phrases.evening[
                  Math.floor(Math.random() * push_phrases.evening.length)
                ];

// get date format
//// DD/MM/YYYY
const get_date_str = (date) => {
  let str_date;
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day >= 10 && month < 10) {
    str_date =  `${day}/0${month}/${year}`;
  } else if (day < 10 && month >= 10) {
    str_date = `0${day}/${month}/${year}`;
  } else if (day < 10 && month < 10) {
    str_date = `0${day}/0${month}/${year}`;
  } else {
    str_date = `${day}/${month}/${year}`;
  }

  return str_date;
}

// init'd empty array
//// for storing unique tags
let uniqueTags = [];

// get unique tags only
//// in every notes
data.forEach((post) => {
  post.tags.forEach((tag) => {
    // fill the tag
    //// if it is not in uniqueTags
    if (uniqueTags.includes(tag) !== true) {
      uniqueTags.push(tag);
    }
  })
})

// display unique tags results function
const getTagSearch = (tags) => {
  let tagresults = "";
  tags.sort().forEach((tag) => {
    tagresults += `<span class="tag-search"
                         onclick="reloadNotesBasedOnTags(this.textContent);"
                         >${tag}</span>`
  });
  return tagresults;
};

// loading interfaces
document.getElementById("loading").innerHTML = loading;

// get random push message
//// based on hours
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

// function trigger
//// for submit notes
const submitNotes = (date, tags, content) => {
  let preposted = {
    id : Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 11),
    date : "",
    tags : tags.split(" "),
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

// reload notes function
function reloadNotes(event) {
  let content = "";

  data.reverse().forEach(post => {
    curr_date_str = get_date_str(curr_date_);

    if (curr_date_str == post.date) {
      content += `<div class="post" id="${post.id}">
                    <p style="margin: 7px 0 0 0; font-size: 12px;">
                      <span class="date-section">${post.date}</span>
                    </p>

                    <p class="tag-results" style="margin: 0; font-size: 12px;">
                      ${getTagSearch(post.tags)}
                    </p>
                    ${post.content}
                  </div>`;
    }
  });

  setTimeout(getNotes(content), 3000);
}

function getNotes(content) {
  let formHTML = `
                    <form name="postJournal"
                          onsubmit="submitNotes(document.postJournal.date.value,
                                                document.postJournal.tags.value,
                                                document.postJournal.content.value);"
                          method="POST">
                            <p>
                              <label for="date">date</label>
                            </p>
                            <input type="date" name="date" />

                            <p>
                              <label for="tags">tags (use spaces and then <span class="tag-search">#anothertags</span> for add another tags)</label>
                            </p>
                            <input type="text" name="tags" placeholder="#tags"/>

                            <p>
                              <label for="content">text to be written</label>
                            </p>
                            <textarea name="content"
                                      placeholder="${textarea}"></textarea>
                            <button type="submit">POST</button>
                    </form>`;
  
  const container = document.getElementById("container");

  if (content.length > 0) {
    content = `<p class='date'>${got_notes_phrases[Math.floor(Math.random() * got_notes_phrases.length)]}</p>${content}`;
  } else {
    content = `<p class='date'>${not_found_phrases[Math.floor(Math.random() * not_found_phrases.length)]}</p>`;
  }

  container.innerHTML = `${formHTML}
                         <p class="date">based on tags</p>
                         <div class="tag-results">
                           ${getTagSearch(uniqueTags)}
                         </div>
                         <hr />
                         ${content}`;

  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
}

// previous notes function
function previousNotes() {
  curr_date_.setDate(curr_date_.getDate() - 1);
  curr_date_str = get_date_str(curr_date_);

  if (curr_date_str != get_date_str(new Date)) {
    pushTriggerUp();
  } else {
    pushTriggerDown();
  }

  date_ribbon.innerHTML = curr_date_str;
  reloadNotes(curr_date_str);
}

// next notes function
function nextNotes() {
  curr_date_.setDate(curr_date_.getDate() + 1);
  curr_date_str = get_date_str(curr_date_);

  if (curr_date_str != get_date_str(new Date)) {
    pushTriggerUp();
  } else {
    pushTriggerDown();
  }

  date_ribbon.innerHTML = curr_date_str;
  reloadNotes(curr_date_str);
}

// back to today function
function toToday() {
  curr_date_ = new Date();
  curr_date_str = get_date_str(curr_date_);

  pushTriggerDown();

  date_ribbon.innerHTML = curr_date_str;
  reloadNotes(curr_date_str);

  document.getElementById("next").style.width = 0;
}

function pushTriggerUp() {
  document.getElementById("back-trigger").style.bottom = "40px";
  document.getElementById("push-trigger").style.bottom = "68px";
  document.getElementById("back-trigger").style.opacity = "1";
}

function pushTriggerDown() {
  document.getElementById("back-trigger").style.bottom = "8px";
  document.getElementById("push-trigger").style.bottom = "40px";
  document.getElementById("back-trigger").style.opacity = "0";
}

const navbar = document.getElementById('navbar');

function closePushTrigger() {
  const push_trigger = document.getElementById("push-trigger").style;

  push_trigger.bottom = "8px";
  push_trigger.opacity = 0;
}

function reloadNotesBasedOnTags(tag) {
  let tagcontent = "";

  data.reverse().forEach(post => {
    if (post.tags.includes(tag) === true) {
      tagcontent += `
        <div class="post" id="${post.id}">
          <p style="margin: 7px 0 0 0; font-size: 12px;">
            <span class="date-section">${post.date}</span>
          </p>

          <p class="tag-results" style="margin: 0; font-size: 12px;">
            ${getTagSearch(post.tags)}
          </p>
          ${post.content}
        </div>
      `;
    }
  });

  pushTriggerUp();
  setTimeout(getNotes(tagcontent), 3000);
}
