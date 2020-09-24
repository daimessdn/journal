const search_phrases = [
  "What are you looking for?",
  "Search something, huh?",
  "Found what you need?",
  "Looking for something?",
  "Found some words?",
  "Searched any useful stuffs?"
];

const loading_phrases = [
  "Getting your journal ready...",
  "Please wait for a moment once your journal is ready...",
  "Can't wait for reading, eh?",
  "Relax and we will make things done for you...",
  "Ready for the reads?",
  "Let see what we have for you...",
  "Still be patient?"
];

const not_found_phrases = [
  "Uh oh. It seems you are lost, little bro. Let me get you into the right direction.",
  "One more arrow button to find your little story...",
  "Did I say that you've got the little treasure?",
  "One more arrow button or create one. There's nothing here.",
  "Nothing...",
  "Have tried the search button yet? Just look at the magnifying glass icon and type something you look for there. It should be worked. good luck... :)",
  "Nothing's here. any place, maybe?",
  "Right or left?"
];

const got_notes_phrases = [
  "I've got your notes!",
  "Here are some notes you recorded!",
  "Once upon a time...",
  "Since that date,",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  "Breaking News!!!"
];

const character = [
  "Spiderman",
  "Superhero",
  "Cute bunny",
  "Pikachu",
  "Avatar Aang",
  "Mr. Bean",
  "Superman",
  "Mr. Gingerbread",
  "Mr. Hokage",
  "Ms. Stella"
];

const push_phrases = {
  morning: [
    "Good morninig <br />OK, only that.",
    "Slept well last night?",
    `${character[Math.floor(Math.random() * character.length)]} comes to play.<br />Please wake up...`,
    "Have you tidy up your bed and your bed clothes?",
    "Have something to write?<br/>We have a writing space top there.",
    "Got your breakfast and your coffee ready yet?",
    "Rise and shine...",
    data.length + " stories were written by you so far.<br />What's your another fresh story?"
  ],
  afternoon: [
    "Have prepared your sunblock already?",
    "Wait. Is it still morning?<br />Why the people said it's afternoon?",
    "Don't forget to have some few rest.<br />It's lunch time I think.",
    "Lunch time, honey...",
    "How was your nap?",
    "Don't forget to eat",
    "Have you taken a nap?",
    data.length + " stories were written by you so far.<br />What's your another fresh story?"
  ],
  evening: [
    "Already have dinner?",
    "Good night...",
    "ZzZ...",
    "Can't sleep?",
    "Need a bedtime story?",
    "Have prepared your lotion?",
    "Have prepared something before going to bed?",
    `Don't want to sleep alone?<br />${character[Math.floor(Math.random() * character.length)]} is here with you.`,
    "Sleep is good for health.<br /> Don't forget to sleep.",
    data.length + " stories were written by you so far.<br />What's your another fresh story?"
  ],
};

const tag_phrases = [
  "BASED ON TAGS...",
  "TAG ME IN..."
];