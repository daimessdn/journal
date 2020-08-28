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

const character = [
  "a glass of milk",
  "spiderman",
  "superhero",
  "cute bunny",
  "journal",
  "pikachu",
  "a cup of coffee",
  "mr. gingerbread",
  "mr. hokage",
  "ms. stella"
];

const push_phrases = {
  morning: [
    "good morninig <br />OK, only that.",
    "slept well last night?",
    `${character[Math.floor(Math.random() * character.length)]} comes to play.<br />please wake up...`,
    "have you tidy up your bed and your bed clothes?",
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
    "have prepared something before going to bed?",
    `don't want to sleep alone?<br />${character[Math.floor(Math.random() * character.length)]} is here with you.`,
    "sleep is good for health.<br /> don't forget to sleep.",
  ],
};

const tag_phrases = [
  "BASED ON TAGS...",
  "TAG ME IN..."
];