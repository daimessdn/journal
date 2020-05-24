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
    date: "28/4/2020",
    tags: "#test",
    id: "jpsyolrwa", 
    content: "<p>dear journal…</p>\n<p>I have added several physical features for you. hope you like it… :)</p>" 
  },
  { 
    id: "yqjty2eS1k",
    date: "29/4/2020",
    tags: "#journal #ml #python",
    content: "<p>dear, journal…</p>\n<p>Alhamdulillah, I've passed on IDCamp 2020 scholarship screening of Indosat Oreedoo (feat. dicoding) for machine learning dveloper learning and I've got chances for learning machine learning for basic level… :D</p>\n<p>wish me luck for the next level…</p><img src='https://lh3.google.com/u/0/d/1ZVJ5jlwz7aO7dxIMWqynQBykVBceRLbm=w1600-h535-iv2' alt='Displaying journal29042020.png' aria-hidden='true' alt='...' />"
  },
  { 
    id: "ktadtig",
    date: "30/4/2020",
    tags: "#journal #learning #finally",
    content: "<p>dear, journal…</p>\n<p>Alhamdulillah, I've done all of my certifications on Coursera. one of them is \"Data Engineering with Google Cloud Professional Certificate\". needs a lot of time to accomplish all of them. BTW, tomorrow #JuaraGCP is open for the <a href=\"https://goo.gle/JuaraGCP\">3rd time</a> and I can't wait for accomplish all of 12 quests for challenge myself and of course - <a href=\"https://twitter.com/googledevsid/status/1255671210517475328?s=20\">amazing swags</a>!!!</p>\n<p>and I also can't wait for data science class and machine learning from dicoding and accomplish data science course from IBM and also on Coursera…</p>\n<p>wish me luck~~</p>\n<p><img src=\"https://coursera-certificate-images.s3.amazonaws.com/ZZZW2UU4Z7WK\" alt=\"keep spirit\" /></p>"
  },
  {
    id: "vhftkvzl",
    date: "1/5/2020",
    tags: "#python #datascience #pandas",
    content: "<p>dear journal…</p>\n<p>it's the first day of May and the 7th (or 8th) day of Ramadan 1440 H and I've learned some basic data science about merging data from <code>pandas</code>.</p>\n<p><code>pandas</code> provides some methods that eases us to merge data: <code>join()</code>, <code>merge()</code>, and <code>concat()</code> (maybe more)…</p>\n<ul>\n<li><strong>inner join</strong> : returns rows from two tables that fulfill some conditions.</li>\n<li><strong>left outer join</strong> : return all rows on the left table.</li>\n<li><strong>left outer join without intersection</strong> : return all rows on the left table without the center (intersection).</li>\n<li><strong>right outer join</strong> : return all rows on the right table.</li>\n<li><strong>right outer join without intersection</strong> : return all rows on the right table without the center (intersection).</li>\n<li><strong>full outer join</strong> : return all rows on both table.</li>\n<li><strong>full outer join without intersection</strong> : return all rows on the both table without the center (intersection).</li>\n</ul>\n<p><img src=\"https://www.datacourses.com/wp-content/uploads/2019/11/join-types-merge-names.jpg\" alt=\"table joins\" /></p><p>as told before, we can merging two different tables with several method:</p>\n<p><strong><code>concat()</code></strong> joins two data based on certain axes.\nfor example:</p>\n<pre><code class=\"py language-py\">import pandas as pd\n\n# initialize dataframes\ndf1 = pd.DataFrame({'A': [3], 'B': [4], 'C': [7], 'D': [8]})\ndf2 = pd.DataFrame({'A': [2], 'B': [6], 'C': [1], 'D': [3]})\ndf3 = pd.DataFrame({'A': [8], 'B': [3], 'C': [5], 'D': [5]})\n\n# with .concat() method, we can concat the dataframes based on axis what we want (because they have same x and y axis\n# format: pd.concat([dataframe_list, axis=1 | 0 : `(default, 0)`)\n\n# concat with vertical axis\ndf = pd.concat([df1, df2, df3])\n# concat with horizontal axis\ndf = pd.concat([df1, df2, df3], axis=1)\n</code></pre>\n<p><strong><code>merge()</code></strong> joins two data based on relation and conditions of those tables.\nfor example:\n<pre><code class=\"py language-py\">import pandas as pd\n\n# initialize the dataframes\ndata1 = pd.DataFrame({'key': ['K0', 'K1', 'K2', 'K3'],\n                        'A': ['A0', 'A1', 'A2', 'A3'],\n                        'B': ['B0', 'B1', 'B2', 'B3']})\n\ndata2 = pd.DataFrame({'key': ['K0', 'K1', 'K4', 'K5'],\n                        'C': ['C0', 'C1', 'C2', 'C3'],\n                        'D': ['D0', 'D1', 'D2', 'D3']})\n\n# with .merge() method, we can join the tables based on their relations.\n# format : pd.merge(left_table,\n#                   right_table,\n#                   on='key',\n#                   how='inner' | 'outer' | 'left' | 'right')\n\n# if the data have completely different names\n# format : pd.merge(left_table,\n#                   right_table,\n#                   left_on='leftkey',\n#                   right_on='rightkey'\n#                   how='inner' | 'outer' | 'left' | 'right')\n\n# applying inner join\nleft_join = pd.merge(data1, data2, on='key', how='inner')\n# applying outer join\nleft_join = pd.merge(data1, data2, on='key', how='outer')\n# applying left join\nleft_join = pd.merge(data1, data2, on='key', how='left')\n# applying right join\nleft_join = pd.merge(data1, data2, on='key', how='right')\n</code></pre><p class=\"source\"><strong>source:</strong></p>\n<ul>\n<li>Penggabungan Panda 101, <a href=\"https://www.it-swarm.dev/id/python/penggabungan-panda-101/807882802/\">https://www.it-swarm.dev/id/python/penggabungan-panda-101/807882802/</a>, accessed on 1/5/2020.</li>\n<li>Santoso. Bagus Aji, 2017, Tujuh Teknik Join di MySQL, <a href=\"https://www.codepolitan.com/tujuh-teknik-join-di-sql-596c537f0deb3\">https://www.codepolitan.com/tujuh-teknik-join-di-sql-596c537f0deb3</a>, accessed on 1/5/2020.</li>\n<li>Eggermont. Alexis, 2019, Joining pandas dataframes by column names, <a href=\"https://stackoverflow.com/questions/20375561/joining-pandas-dataframes-by-column-names\">https://stackoverflow.com/questions/20375561/joining-pandas-dataframes-by-column-names</a>, accessed on 1/5/2020</li>\n<li>Lynn. Shane, Merge and Join DataFrames with Pandas in Python, <a href=\"https://www.shanelynn.ie/merge-join-dataframes-python-pandas-index-1/\">https://www.shanelynn.ie/merge-join-dataframes-python-pandas-index-1/</a>, accessed on 1/5/2020</li>\n</ul>"
  },
  {
    id: "djqezwiq",
      date: "3/5/2020",
      tags: "#journal #gcp",
      content: "<p>dear, journal…</p>\n<p>finally, I've accomplished #JuaraGCP challenge by completing 12 quests in Qwiklabs.</p>\n<p><img src=\"https://pbs.twimg.com/media/EXCRyd9VcAADeAD?format=jpg&name=large\" alt=\"image\" /></p>\n<p>you can join the challenge by <a href=\"https://goo.gle/JuaraGCP\">one click here</a>. learn some technology concepts on Google Cloud, complete the quests, and get the exclusive swags…</p>\n<p>stay safe, happy learning, and wish u luck~~~\n<strong>*the quests are pretty tough enough. it will be a lot fun...</strong></p>"
  },
  {
    "id": "bpfgyaonuu",
    "date": "16/5/2020",
    "tags": "#journal #dicoding #ml #finally",
    "content": "<p>dear, journal…</p>\n<p>it's been a long time I didn't begin to write.</p>\n<p>and finally, I've got my third certificate of dicoding: <strong>Machine Learning for Beginners</strong> after accomplished the module. there's still 2 months left for the announcement of intermediate level of scholarship…</p>\n<p>wish me luck~~</p>\n<p><img src=\"https://lh3.google.com/u/0/d/1FP42bDZ0jQyvG2peTN_IjahWK7_RMRSz=w1600-h801-iv2\" alt=\"my ml cert on dicoding\" /></p>\n<p>**<em>you can join to learn by <a href=\"https://idcamp.indosatooredoo.com/\">clicking here</a>.wish u luck~~~</em></p>"
  },
  {
    "id": "yd09ejaire",
    "date": "21/5/2020",
    "tags": "#journal",
    "content": "<p>dear, journal…</p>\n<p>seems a long time not writing again…</p>\n<p>finnaly, the bootcamp of sanbercode is done completely, but the data science career is just start to be begun. I still need to learn more about data science and machine learning and also programming skills and Alhamdulillah, there is so many chances and scholarships (I mean, free courses) that I can try to learn more and hone programming skills and I have been starting my first competition of data science and analytics from Shopee. wish us luck…</p>\n<p>*2 more days is Eid feast day. Ied Mubarak, all!~~~</p>"
  },
  {
  "id": "jysmkxmn",
  "date": "22/5/2020",
  "tags": "#journal",
  "content": "<p>dear, journal…</p>\n<p>1 more day for my chance to learn many stuffs from Datacamp and today we just started to learn all stuffs about machine learning and data science for Shopee data science competitions. it might be rough, but we sure that we can prepared it all we can…</p>\n<p>wish us luck~~</p>"
  },
  {
  "id": "knxufdurgk",
  "date": "24/5/2020",
  "tags": "#journal",
  "content": "<p>dear, journal…</p>\n<p>finnaly, I've accomplished two course in Data Science Professional Certificate on IBM Coursera: <strong>Data Analysis with Python</strong> and <strong>Databases and SQL for Data Science</strong>. there's still 4 courses left to get <strong>Certificate of Data Science Professional Certificate</strong>…</p>\n<p>wish me luck~~</p>"
  },
];