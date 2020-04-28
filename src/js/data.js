const data = [
	{
		date : "24/4/2020",
		tags : "#rosetta #js #freecodecamp",
		id : "d93Of2Qs2d",
		content : "<p>dear Rosetta,</p><p>I've done your first homework of 100 doors challenge. Here's my work.</p><pre><code class=\"js\">function getFinalOpenedDoors(numDoors) {\n  // initialize all closed doors\n  let doors = []\n  for (let i = 1; i <= numDoors; i++)\n    doors.push\"closed\");\n\n  /*\n    note that every closed door is stated as false\n    and every opened door is stated as true in doors array\n  */\n\n  // initialize pass = 1\n  let num_pass = 1;\n\n  /*\n    from this, we will toogle the doors.\n    the rules is close the door if the door is opened\n    and open the doors if the door is closed\n  */\n  while (num_pass <= numDoors) {\n    or (let i = 1; i <= numDoors; i++) {\n      if (i % num_pass == 0) {\n        if (doors[i-1] == \"open\")\n          doors[i-1] = \"closed\";\n        else\n          doors[i-1] = \"open\";\n      }\n    }\n    // console.log(doors);\n    num_pass += 1;\n  }\n\n  /*\n    after toogle-ing the doors, we will show only the the door numbers which is open\n  */\n  let openedDoors = [];\n  for (let i = 0; i < numDoors; i++) {\n    if (doors[i] == \"open\")\n      openedDoors.push(i+1);\n  }\n\n  // console.log(doors);\n  // console.log(openedDoors);\n  return openedDoors;\n}\n\ngetFinalOpenedDoors(100);</code></pre></div>"
	},
	{
		date : "25/4/2020",
		tags : "#rosetta #js #freecodecamp",
		id : "Nr3cC7D31x",
		content : "<p>dear Rosetta again...</p><p>I have accomplished another quest again about mean root square</p><pre><code class=\"js\">function rms(arr) {\n  let sq_sum = 0;\n\n  arr.forEach (i => sq_sum += i * i);\n\n  sq_sum /= arr.length;\n\n  return Math.sqrt(sq_sum);\n}\n\nconsole.log(rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); </code></pre><p>and I almost got one perfect point for DPA classification if the complicated machine error ruins my code. ah, man. that one penny should be mine... >:v</p><pre><code class=\"js\">\nfunction getDPA(num) {\n  // Good luck!\n  let numstep = 1;\n  let DPA_array = [0, 0, 0];\n\n  while (numstep <= num) {\n    let numset = [];\n\n    for (let i = 1; i < numstep; i++) {\n      if (numstep % i == 0) {\n        numset.push(i);\n      }\n    }\n\n    let sum = function(arr) {\n      return arr.reduce(function(a,b) {\n        return a + b\n      }, 0);\n    };\n\n    sum_result = sum(numset);\n    // console.log(sum(numset));\n\n    if (sum_result < num)\n      DPA_array[0] += 1;\n    else if (sum_result === num)\n      DPA_array[1] += 1;\n    else\n      DPA_array[2] += 1;]\n\n    // console.log(numset, sum)\n\n    numstep++;\n  }\n\n  return DPA_array;\n}</code></pre></div>"
	},
	{
		date : "25/4/2020",
		tags : "#web #journal",
		id : "GSo3d9cpw1",
		content : "<p>it's been the 2nd day of Ramadan since I've created this journal web for my code progress and experiences.</p><p>I see that it looks perfect in mobile, but still need some aesthetical and functional stuffs in PC interfaces that I need to improve. but, I'm so satisfied to made this website and these improvements so far. :)</p></div>"
	},
	{
		date : "25/4/2020",
		tags : "#rosetta #js #freecodecamp",
		id : "24hDOr941z",
		content : "<p>dear again, Rosetta...</p><p>I've completed another of your challenge (sum of squares). I see that not all your challenges are complicately difficult enough. Let's celebrate this accomplishment by a piece of cake. <i class=\"fa fa-birthday-cake\"></i></p><pre><code class=\"js\">function sumsq(array) {\n  let sum = 0;\n\n  for (let i = 0; i < array.length; i++)\n    sum += array[i] * array[i];\n\n  return sum;\n}</code></pre></div>"
	},
	{
		date : "26/4/2020",
		tags : "#journal",
		id : "3Sw4D9a8dL",
		content : "<p>dear, journal...</p><p>nice to meet you since two days ago. in the 3rd of Ramadan, there are many things I wanna do:<br /><ul><li>digitalize a worship house website (at least, a template)</li><li>improve this journal</li><li>create my voice blog on Github</li><li>learn data science and many things</li><li>continue my project of <strong>stricode</strong>, a code learning platform that I will make for helping my next generation of petroleum students who learn to code</li></ul></p><p>wish me luck~~~</p></div>"
	},
	{
		date : "26/4/2020",
		tags : "#python #learning",
		id : "Mr2s5dyDe2",
		content : "<p>dear, journal...</p><p>I've re-learned some <code>random</code> library on Python. Here is less thing about what kind of <code>random</code> is.</p><pre><code class=\"py\"># using random library\n# firstly, import 'random' module\nimport random\n\n# print some random number in range()\nprint(random.randint(0, 5))\n\n# print some random number in range, but in interval chance.\nprint(random.randrange(0,101,10))\n\n# multiply the random number to get larger value\nprint(random.random() * 100)</code></pre><p>for the list value, we can use <code>.choice(list)</code> method to select the value of list randomly.</p><pre><code class=\"py\"># select list value randomly\n# same, import 'random' module again first\nimport random\n\n# init'd list\ncolor = ['red', 'yellow', 'green', 'blue', 'teal', 'magenta']\n\n# use .choice() method to get the random value of color\nprint(random.choice(color))\n\n# re-shuffle the color list orders\nrandom.shuffle(color)\nprint(color)</code></pre>    <p>maybe that's several of codes I've learned and more. I hope this is enough for my mini project. wish me luck~~~<p class=\"source\"><strong>source:</strong><br /><ul><li><a href=\"https://www.pythonforbeginners.com/random/how-to-use-the-random-module-in-python\">https://www.pythonforbeginners.com/random/how-to-use-the-random-module-in-python</a>. Accessed in 2020, April 26th</li><li><a href=\"https://www.tutorialsteacher.com/python/random-module\">https://www.tutorialsteacher.com/python/random-module</a>. Accessed in 2020, April 26th</li></ul></p></div>"
	},
	{
		date: "28/3/2020",
		tags: "#test",
		id: "jpsyolrwa", 
		content: "<p>dear journal…</p>\n<p>I have added several physical features for you. hope you like it… :)</p>" 
	}
];