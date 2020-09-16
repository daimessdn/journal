const data = [
  {
    "date": "24/04/2020",
    "tags": [
      "#algorithm",
      "#js",
      "#freecodecamp"
    ],
    "id": "d93Of2Qs2d",
    "content": "<p>Dear Rosetta,</p><p>I've done your first homework of 100 doors challenge. Here's my work.</p><pre><code class=\"js\">function getFinalOpenedDoors(numDoors) {\n  // initialize all closed doors\n  let doors = []\n  for (let i = 1; i <= numDoors; i++)\n    doors.push\"closed\");\n\n  /*\n    note that every closed door is stated as false\n    and every opened door is stated as true in doors array\n  */\n\n  // initialize pass = 1\n  let num_pass = 1;\n\n  /*\n    from this, we will toogle the doors.\n    the rules is close the door if the door is opened\n    and open the doors if the door is closed\n  */\n  while (num_pass <= numDoors) {\n    or (let i = 1; i <= numDoors; i++) {\n      if (i % num_pass == 0) {\n        if (doors[i-1] == \"open\")\n          doors[i-1] = \"closed\";\n        else\n          doors[i-1] = \"open\";\n      }\n    }\n    // console.log(doors);\n    num_pass += 1;\n  }\n\n  /*\n    after toogle-ing the doors, we will show only the the door numbers which is open\n  */\n  let openedDoors = [];\n  for (let i = 0; i < numDoors; i++) {\n    if (doors[i] == \"open\")\n      openedDoors.push(i+1);\n  }\n\n  // console.log(doors);\n  // console.log(openedDoors);\n  return openedDoors;\n}\n\ngetFinalOpenedDoors(100);</code></pre></div>"
  },
  {
    "date": "25/04/2020",
    "tags": [
      "#algorithm",
      "#js",
      "#freecodecamp"
    ],
    "id": "Nr3cC7D31x",
    "content": "<p>Dear Rosetta again...</p><p>I have accomplished another quest again about mean root square</p><pre><code class=\"js\">function rms(arr) {\n  let sq_sum = 0;\n\n  arr.forEach (i => sq_sum += i * i);\n\n  sq_sum /= arr.length;\n\n  return Math.sqrt(sq_sum);\n}\n\nconsole.log(rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); </code></pre><p>And I almost got one perfect point for DPA classification if the complicated machine error ruins my code. Ah, man. That one penny should be mine... >:v</p><pre><code class=\"js\">\nfunction getDPA(num) {\n  // Good luck!\n  let numstep = 1;\n  let DPA_array = [0, 0, 0];\n\n  while (numstep <= num) {\n    let numset = [];\n\n    for (let i = 1; i < numstep; i++) {\n      if (numstep % i == 0) {\n        numset.push(i);\n      }\n    }\n\n    let sum = function(arr) {\n      return arr.reduce(function(a,b) {\n        return a + b\n      }, 0);\n    };\n\n    sum_result = sum(numset);\n    // console.log(sum(numset));\n\n    if (sum_result < num)\n      DPA_array[0] += 1;\n    else if (sum_result === num)\n      DPA_array[1] += 1;\n    else\n      DPA_array[2] += 1;]\n\n    // console.log(numset, sum)\n\n    numstep++;\n  }\n\n  return DPA_array;\n}</code></pre></div>"
  },
  {
    "date": "25/04/2020",
    "tags": [
      "#journal"
    ],
    "id": "GSo3d9cpw1",
    "content": "<p>It's been the 2nd day of Ramadan since I've created this journal web for my code progress and experiences.</p><p>I see that it looks perfect in mobile, but still need some aesthetical and functional stuffs in PC interfaces that I need to improve. but, I'm so satisfied to made this website and these improvements so far. :)</p></div>"
  },
  {
    "date": "25/04/2020",
    "tags": [
      "#algorithm",
      "#js",
      "#freecodecamp"
    ],
    "id": "24hDOr941z",
    "content": "<p>Dear again, Rosetta...</p><p>I've completed another of your challenge (sum of squares). I see that not all your challenges are complicately difficult enough. Let's celebrate this accomplishment by a piece of cake. <i class=\"fa fa-birthday-cake\"></i></p><pre><code class=\"js\">function sumsq(array) {\n  let sum = 0;\n\n  for (let i = 0; i < array.length; i++)\n    sum += array[i] * array[i];\n\n  return sum;\n}</code></pre></div>"
  },
  {
    "date": "26/04/2020",
    "tags": [
      "#journal"
    ],
    "id": "3Sw4D9a8dL",
    "content": "<p>Dear, journal...</p><p>Nice to meet you since two days ago. In the 3rd of Ramadan, there are many things I wanna do:<br /><ul><li>digitalize a worship house website (at least, a template)</li><li>improve this journal</li><li>create my voice blog on Github</li><li>learn data science and many things</li><li>continue my project of <strong>stricode</strong>, a code learning platform that I will make for helping my next generation of petroleum students who learn to code</li></ul></p><p>Wish me luck~~~</p></div>"
  },
  {
    "date": "26/04/2020",
    "tags": [
      "#python",
      "#learning"
    ],
    "id": "Mr2s5dyDe2",
    "content": "<p>Dear, journal...</p><p>I've re-learned some <code>random</code> library on Python. Here is less thing about what kind of <code>random</code> is.</p><pre><code class=\"py\"># using random library\n# firstly, import 'random' module\nimport random\n\n# print some random number in range()\nprint(random.randint(0, 5))\n\n# print some random number in range, but in interval chance.\nprint(random.randrange(0,101,10))\n\n# multiply the random number to get larger value\nprint(random.random() * 100)</code></pre><p>for the list value, we can use <code>.choice(list)</code> method to select the value of list randomly.</p><pre><code class=\"py\"># select list value randomly\n# same, import 'random' module again first\nimport random\n\n# init'd list\ncolor = ['red', 'yellow', 'green', 'blue', 'teal', 'magenta']\n\n# use .choice() method to get the random value of color\nprint(random.choice(color))\n\n# re-shuffle the color list orders\nrandom.shuffle(color)\nprint(color)</code></pre>    <p>maybe that's several of codes I've learned and more. I hope this is enough for my mini project. Wish me luck~~~<p class=\"source\"><strong>source:</strong><br /><ul><li><a href=\"https://www.pythonforbeginners.com/random/how-to-use-the-random-module-in-python\">https://www.pythonforbeginners.com/random/how-to-use-the-random-module-in-python</a>. Accessed in 2020, April 26th</li><li><a href=\"https://www.tutorialsteacher.com/python/random-module\">https://www.tutorialsteacher.com/python/random-module</a>. Accessed in 2020, April 26th</li></ul></p></div>"
  },
  {
    "date": "28/04/2020",
    "tags": [
      "#test"
    ],
    "id": "jpsyolrwa",
    "content": "<p>Dear journal…</p>\n<p>I have added several physical features for you. Hope you like it… :)</p>"
  },
  {
    "id": "yqjty2eS1k",
    "date": "29/04/2020",
    "tags": [
      "#journal",
      "#ml",
      "#python"
    ],
    "content": "<p>Dear, journal…</p>\n<p>Alhamdulillah, I've passed on IDCamp 2020 scholarship screening of Indosat Oreedoo (feat. dicoding) for machine learning dveloper learning and I've got chances for learning machine learning for basic level… :D</p>\n<p>Wish me luck for the next level…</p><img src='https://lh3.google.com/u/0/d/1ZVJ5jlwz7aO7dxIMWqynQBykVBceRLbm=w1600-h535-iv2' alt='Displaying journal29042020.png' aria-hidden='true' alt='...' />"
  },
  {
    "id": "ktadtig",
    "date": "30/04/2020",
    "tags": [
      "#journal",
      "#learning",
    ],
    "content": "<p>Dear, journal…</p>\n<p>Alhamdulillah, I've done all of my certifications on Coursera. One of them is \"Data Engineering with Google Cloud Professional Certificate\". Needs a lot of time to accomplish all of them. BTW, tomorrow #JuaraGCP is open for the <a href=\"https://goo.gle/JuaraGCP\">3rd time</a> and I can't wait for accomplish all of 12 quests for challenge myself and of course - <a href=\"https://twitter.com/googledevsid/status/1255671210517475328?s=20\">amazing swags</a>!!!</p>\n<p>and I also can't wait for data science class and machine learning from dicoding and accomplish data science course from IBM and also on Coursera…</p>\n<p>Wish me luck~~</p>\n<p><img src=\"https://coursera-certificate-images.s3.amazonaws.com/ZZZW2UU4Z7WK\" alt=\"keep spirit\" /></p>"
  },
  {
    "id": "vhftkvzl",
    "date": "01/05/2020",
    "tags": [
      "#python",
      "#datascience",
      "#pandas"
    ],
    "content": "<p>Dear journal…</p>\n<p>It's the first day of May and the 7th (or 8th) day of Ramadan 1440 H and I've learned some basic data science about merging data from <code>pandas</code>.</p>\n<p><code>pandas</code> provides some methods that eases us to merge data: <code>join()</code>, <code>merge()</code>, and <code>concat()</code> (maybe more)…</p>\n<ul>\n<li><strong>inner join</strong> : returns rows from two tables that fulfill some conditions.</li>\n<li><strong>left outer join</strong> : return all rows on the left table.</li>\n<li><strong>left outer join without intersection</strong> : return all rows on the left table without the center (intersection).</li>\n<li><strong>right outer join</strong> : return all rows on the right table.</li>\n<li><strong>right outer join without intersection</strong> : return all rows on the right table without the center (intersection).</li>\n<li><strong>full outer join</strong> : return all rows on both table.</li>\n<li><strong>full outer join without intersection</strong> : return all rows on the both table without the center (intersection).</li>\n</ul>\n<p><img src=\"https://www.datacourses.com/wp-content/uploads/2019/11/join-types-merge-names.jpg\" alt=\"table joins\" /></p><p>As told before, we can merging two different tables with several method:</p>\n<p><strong><code>concat()</code></strong> joins two data based on certain axes.\nfor example:</p>\n<pre><code class=\"py language-py\">import pandas as pd\n\n# initialize dataframes\ndf1 = pd.DataFrame({'A': [3], 'B': [4], 'C': [7], 'D': [8]})\ndf2 = pd.DataFrame({'A': [2], 'B': [6], 'C': [1], 'D': [3]})\ndf3 = pd.DataFrame({'A': [8], 'B': [3], 'C': [5], 'D': [5]})\n\n# with .concat() method, we can concat the dataframes based on axis what we want (because they have same x and y axis\n# format: pd.concat([dataframe_list, axis=1 | 0 : `(default, 0)`)\n\n# concat with vertical axis\ndf = pd.concat([df1, df2, df3])\n# concat with horizontal axis\ndf = pd.concat([df1, df2, df3], axis=1)\n</code></pre>\n<p><strong><code>merge()</code></strong> joins two data based on relation and conditions of those tables.\nfor example:\n<pre><code class=\"py language-py\">import pandas as pd\n\n# initialize the dataframes\ndata1 = pd.DataFrame({'key': ['K0', 'K1', 'K2', 'K3'],\n                        'A': ['A0', 'A1', 'A2', 'A3'],\n                        'B': ['B0', 'B1', 'B2', 'B3']})\n\ndata2 = pd.DataFrame({'key': ['K0', 'K1', 'K4', 'K5'],\n                        'C': ['C0', 'C1', 'C2', 'C3'],\n                        'D': ['D0', 'D1', 'D2', 'D3']})\n\n# with .merge() method, we can join the tables based on their relations.\n# format : pd.merge(left_table,\n#                   right_table,\n#                   on='key',\n#                   how='inner' | 'outer' | 'left' | 'right')\n\n# if the data have completely different names\n# format : pd.merge(left_table,\n#                   right_table,\n#                   left_on='leftkey',\n#                   right_on='rightkey'\n#                   how='inner' | 'outer' | 'left' | 'right')\n\n# applying inner join\nleft_join = pd.merge(data1, data2, on='key', how='inner')\n# applying outer join\nleft_join = pd.merge(data1, data2, on='key', how='outer')\n# applying left join\nleft_join = pd.merge(data1, data2, on='key', how='left')\n# applying right join\nleft_join = pd.merge(data1, data2, on='key', how='right')\n</code></pre><p class=\"source\"><strong>source:</strong></p>\n<ul>\n<li>Penggabungan Panda 101, <a href=\"https://www.it-swarm.dev/id/python/penggabungan-panda-101/807882802/\">https://www.it-swarm.dev/id/python/penggabungan-panda-101/807882802/</a>, accessed on 1/5/2020.</li>\n<li>Santoso. Bagus Aji, 2017, Tujuh Teknik Join di MySQL, <a href=\"https://www.codepolitan.com/tujuh-teknik-join-di-sql-596c537f0deb3\">https://www.codepolitan.com/tujuh-teknik-join-di-sql-596c537f0deb3</a>, accessed on 1/5/2020.</li>\n<li>Eggermont. Alexis, 2019, Joining pandas dataframes by column names, <a href=\"https://stackoverflow.com/questions/20375561/joining-pandas-dataframes-by-column-names\">https://stackoverflow.com/questions/20375561/joining-pandas-dataframes-by-column-names</a>, accessed on 1/5/2020</li>\n<li>Lynn. Shane, Merge and Join DataFrames with Pandas in Python, <a href=\"https://www.shanelynn.ie/merge-join-dataframes-python-pandas-index-1/\">https://www.shanelynn.ie/merge-join-dataframes-python-pandas-index-1/</a>, accessed on 1/5/2020</li>\n</ul>"
  },
  {
    "id": "djqezwiq",
    "date": "03/05/2020",
    "tags": [
      "#journal",
      "#googlecloud"
    ],
    "content": "<p>Dear, journal…</p>\n<p>Finally, I've accomplished #JuaraGCP challenge by completing 12 quests in Qwiklabs.</p>\n<p><img src=\"https://pbs.twimg.com/media/EXCRyd9VcAADeAD?format=jpg&name=large\" alt=\"image\" /></p>\n<p>You can join the challenge by <a href=\"https://goo.gle/JuaraGCP\">one click here</a>. Learn some technology concepts on Google Cloud, complete the quests, and get the exclusive swags…</p>\n<p>Stay safe, happy learning, and wish u luck~~~\n<strong>*the quests are pretty tough enough. It will be a lot fun...</strong></p>"
  },
  {
    "id": "bpfgyaonuu",
    "date": "16/05/2020",
    "tags": [
      "#journal",
      "#dicoding",
      "#ml",
    ],
    "content": "<p>Dear, journal…</p>\n<p>It's been a long time I didn't begin to write.</p>\n<p>And finally, I've got my third certificate of dicoding: <strong>Machine Learning for Beginners</strong> after accomplished the module. There's still 2 months left for the announcement of intermediate level of scholarship…</p>\n<p>Wish me luck~~</p>\n<p><img src=\"https://lh3.google.com/u/0/d/1FP42bDZ0jQyvG2peTN_IjahWK7_RMRSz=w1600-h801-iv2\" alt=\"my ml cert on dicoding\" /></p>\n<p>**<em>You can join to learn by <a href=\"https://idcamp.indosatooredoo.com/\">clicking here</a>.Wish u luck~~~</em></p>"
  },
  {
    "id": "yd09ejaire",
    "date": "21/05/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>Seems a long time not writing again…</p>\n<p>Finnaly, the bootcamp of sanbercode is done completely, but the data science career is just start to be begun. I still need to learn more about data science and machine learning and also programming skills and Alhamdulillah, there is so many chances and scholarships (I mean, free courses) that I can try to learn more and hone programming skills and I have been starting my first competition of data science and analytics from Shopee. Wish us luck…</p>\n<p>*2 more days is Eid feast day. Ied Mubarak, all!~~~</p>"
  },
  {
    "id": "jysmkxmn",
    "date": "22/05/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>1 more day for my chance to learn many stuffs from Datacamp and today we just started to learn all stuffs about machine learning and data science for Shopee data science competitions. It might be rough, but we sure that we can prepared it all we can…</p>\n<p>Wish us luck~~</p>"
  },
  {
    "id": "knxufdurgk",
    "date": "24/05/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>Finnaly, I've accomplished two course in Data Science Professional Certificate on IBM Coursera: <strong>Data Analysis with Python</strong> and <strong>Databases and SQL for Data Science</strong>. There's still 4 courses left to get <strong>Certificate of Data Science Professional Certificate</strong>…</p>\n<p>Wish me luck~~</p>"
  },
  {
    "id": "pxigoxp",
    "date": "25/05/2020",
    "tags": [
      "#journal",
      "#learning",
      "#aws",
      "#ml"
    ],
    "content": "<p>Dear, journal…</p>\n<p>Alhamdulliah, several days ago (maybe a week ago), I've got free course of <strong>AWS Machine Learning Fundamentals</strong> as a first step to get a <strong>AWS Machine Learning Nanodegree Scholarships Program</strong> and today is the beginning of the course I've started. You can join too via <a href=\"https://www.udacity.com/scholarships/aws-machine-learning-scholarship-program\">this url</a>. According to the AWS <strong>Google-hosted website</strong>, there will be a second step (I mean, advanced course such as dicoding has maybe). Wish me luck for get it and learn a lot…</p>\n<p>*tommorow is Syawal 3rd and ready for the second fasting… Wish me luck~~~</p>\n<p><img src=\"https://lh3.google.com/u/0/d/1xduKERO_RJx-TIJpE2uxvrxxAbAzMMij=w1600-h801-iv1\" alt=\"aws scholarship image\" />\n<img src=\"https://lh3.google.com/u/0/d/1b9T5CyPsHt4XoazAHku4sI08uV7GX330=w1600-h547-iv1\" alt=\"first step on AWS ML\" /></p>"
  },
  {
    "id": "srojqtgxa",
    "date": "29/05/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>Alhamdulillah, when I was arrived into the boarding house (<strong>indo: <em>indekos</em>/<em>kos-kosan</em></strong>), I was surprised when there is a black big package in the basement and it was for me. I was so happy when I opened that package, there are #JuaraGCP swags containing bag, hat, and unique bottle. Thanks for #JuaraGCP, Google Cloud, and Qwiklabs for bringing me the best learning experiences during Ramadhan and COVID-19. I can't wait for wear them after pandemics and learn more about technology in the next Google Cloud sessions…</p>\n<p><img src=\"https://lh3.google.com/u/0/d/1Af7Vt_3_9a1oFXrAJhlar5NE9GXk0TXb=w1600-h899-iv1\" alt=\"swag juaragcp season 3\" /></p>\n<p>And I've got followed by Google Cloud Platform on <a href=\"https://twitter.com/daimessdn/status/1266343777012076544\">Twitter</a>. So happy… :D</p>\n<p>And thanks for #JuaraGCP for helping me learn more about GCP and spending time during this Ramadan. I can't wait for the next learning season on GCP and many platforms…</p>\n<p><strong>*I always want the Google kevlar (millet). It looks cute..</strong></p>\n<p><img src='https://your.googlemerchandisestore.com/Images/Products/Large/GGL1591_gilet_4454.jpg' /></p>"
  },
  {
    "id": "wbiwygk",
    "date": "01/06/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>Finally, I've got email from <strong>sanbercode</strong> staff about my completion certification of <em>data science</em> course.</p>\n<p>Thank you for <strong>sanbercode</strong> for the best learning experiences of data science with <em>relaxed</em>, but <em>qualified</em> way (in indo: <strong>san</strong>tai dan <strong>ber</strong>kualitas). I've learned so many concepts and codings about <strong>basic Python</strong>, <strong>using Pandas with Python</strong>, using matplotlib for <strong>data visualiation</strong>, and basic <strong>machine learning</strong>.</p>\n<p><strong>What's next?</strong> learning is still not stopped until here. There so many things I need to learn to really understand the concepts about data science and machine learning. I don't know where the learning leads to the end, but I've got reminded by these two quote which I've got from <strong>freecodecamp</strong> website…</p>\n<blockquote>\n  <p><em>\"Do not go where the path may lead, go instead where there is no path and leave a trail.\"</em><br />\n-<strong>Ralph Waldo Emerson</strong></p></blockquote><blockquote><p><em>\"If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.\"</em><br />\n  -<strong>Martin Luther King Jr.</strong></p>\n</blockquote>"
  },
  {
    "id": "qxxdxh",
    "date": "04/06/2020",
    "tags": [
      "#journal",
      "#alibabacloud",
      "#learning"
    ],
    "content": "<p>Dear, journal…</p>\n<p>I watched Alibaba Cloud Indonesia Cloud Native Day 2020 webinar and learned many things about DevOps, Monoloth and Microservices, and more there. Thanks for Alibaba Cloud for the webinar. I learned a lot.</p>\n<p>And I also accomplished 8 clouder certifications from this webinar. The test was hard so much, but finally I accomplished it…</p>\n<p><img src=\"https://lh3.google.com/u/0/d/1v-u0WNtvQ6zaY-vzTft6_d23c9GeP57V=w1600-h547-iv1\" alt=\"8 certificates\" /></p>\n<p>After this webinar, there are many interesting thing from Alibaba Cloud…</p>\n<p>Coming soon~~~</p>\n<p><img src=\"https://lh3.google.com/u/0/d/1Ci10mzLaS2ejWWbbKykwro7ojvP_IwlL=w1600-h547-iv1\" alt=\"coming soon\" /></p>"
  },
  {
    "id": "wcbzbsjbon",
    "date": "05/06/2020",
    "tags": [
      "#journal",
      "#blender3d",
      "#learning"
    ],
    "content": "<p>Dear, journal…</p>\n<p>I've created virus model with Blender 2.82. Thanks for <a href=\"https://www.youtube.com/watch?v=s1NEEM8FPZ0\">CGI DEAL</a> for the YouTube video which helps me create this amazing (but still ugly) virus model. Maybe I can create better than I was made today.</p>\n<p><img src=\"https://lh3.google.com/u/0/d/196-4GunuRTJDJYKErMLDrKa5-KFKHLJs=w1600-h547-iv1\" alt=\"virus model\" /></p>\n<p>Unfortunately, I can't export whole model along with color modelling for my Augmented Reality testing on the web (<a href=\"https://ar-js-org.github.io\">AR.js</a> and <a href=\"https://a-frame.io\">A-FRAME</a>). I will find out how to solve this and make my model visible in AR.js…</p>\n<p>Wish me luck~~~</p>"
  },
  {
    "id": "tlrcxwk",
    "date": "18/06/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>I was so excited to attend the <a href=\"https://www.youtube.com/watch?v=Fcf0-VrGzig\">Virtual Graduation Day 2019</a> from Indosat Ooredoo Digital Camp (IDCamp) and meet the <em>cum laude</em> fresh graduate of IDCamp 2019 Awardee. I was also excited to hear the motivated messages and materials from speakers there. Thanks for this webinar. Hope will be the next fresh graduates…</p>\n<p>Wish me luck~~~</p>\n<p>*wish u a happy birthday for my elder brother…</p>"
  },
  {
    "id": "tcydnouqmxe",
    "date": "18/06/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>Since 4 days ago, I've accepted Awla's little commitment job for creating website forum for college major and I'm still being stuck on how to make the scrollable behavior on each columns. This challenge is so stressful by today so I need to do so one-hour-rest for today before I begin to continue again…</p>\n<p><em>Bismillah…</em></p>"
  },
  {
    "id": "hpxiaece",
    "date": "16/06/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>It's been 2 day ago since I've joined Mongga project by Awla and friends and I've made a big improvements of web template made. You can see what it's like by <a href=\"https://daimessdn.github.io/mongga-template\">clicking here</a>.</p>\n<p>OK, maybe that's all until I begin to continue this project tomorrow…</p>\n<p>Wish me luck~~~</p>"
  },
  {
    "id": "nmonh",
    "date": "19/06/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>I didn't know what I want to do so that I decided to write this random note. I also have done several homeworks on Udemy about Python hands-on, which I got it free.</p>\n<p>okay,that's all~~</p>\n<p>*by the way, I've got chat with Kak Laura, one of Google Indonesia Staff and she will send me something outside of #JuaraGCP swags, which I will know what kind of something she will give me. Can't wait!!!</p>"
  },
  {
    "id": "cqrrewb",
    "date": "20/06/2020",
    "tags": [
      "#journal",
      "#shopeecodeleague",
      "#competition"
    ],
    "content": "<p>Dear, journal…</p>\n<p>The second competition of Shopee Code League was just begun. In this competition, our team are asked to classify (or categorized) so huge of product image of data!!! can't be easy, but it must be wonderful to solve…</p>\n<p>Unfortunately, for this time, we cannot download the data since there are so many participants who had downloaded the data. We just focus on algorithm strategy how to detect an image and classify them.</p>\n<p>Luckily, I've learned a little about image recognition from <strong>dicoding</strong> 'Machine Learning for Beginners' class. And thanks for our leader, Ronny Fahrudin for another material he shared to us. We shared our notebooks each other for our learning.</p>\n<p>Good luck for us (<em>Bismillah</em>)~~~</p>"
  },
  {
    "id": "ryyaqrt",
    "date": "21/06/2020",
    "tags": [
      "#journal",
    ],
    "content": "<p>Dear, journal…</p>\n<p>2 days ago, Kak Laura Vieloma chatted me about something that she will give to me, and today, she chatted me again and also emailed me about the same thing~~~</p>\n<p>thanks, Kak Laura for the email. And I know why I and several people of #JuaraGCP received that email. It was great to join with #JuaraGCP and learning together~</p>\n<img src='https://lh3.google.com/u/0/d/1wJZHvdn2oa3rZ0D7VNdn4352OaJkk1Ge=w1600-h801-iv1'>\n<p>OK, what's next then?</p>"
  },
  {
    "id": "tkhlayivo",
    "date": "21/06/2020",
    "tags": [
      "#journal",
      "#googlecloud"
    ],
    "content": "<p>Dear, journal…</p>\n<p>Since last night (actually 11 PM), I watch the webinar about how to prepare the Google Cloud Certification Exam with the special speaker, Mr. Dan Sullivan on <a href='https://www.youtube.com/watch?v=QOJGZqZdRS8&amp;feature=youtu.be'>Youtube</a>. Unfortunately, I cannot join the webinar on Google Meet since my laptop don't have qualified connection and specs enough 😅 to join.</p>\n<p>Thanks for Google Developers Groups (GDG) Capital Region and other GDG communities for the webinar. I've learned a lot and got refreshed about GCP I've learned before…</p>"
  },
  {
    "id": "vicnddteue",
    "date": "21/06/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>the 'small gift' that Kak Laura told to me has finally arrive on my boarding house (<strong><em>indekos</em></strong>) and I can't believe that the gift was a bluetooth speaker. So cute!!!</p>\n<p><img src=\"https://lh3.google.com/u/0/d/1nVdDcKn5ND8IvceSi2QvN_f6anBmnLMi=w1600-h801-iv1\" alt=\"small gift from Google Cloud\" /></p>"
  },
  {
    "id": "nnfgsd",
    "date": "26/06/2020",
    "tags": [
      "#python",
      "#algorithm"
    ],
    "content": "<h3 id=\"jadoovskobahttpswwwhackerearthcompracticepythongettingstartedinputandoutputpracticeproblemsgolfjadoovskobadescription\"><a href=\"https://www.hackerearth.com/practice/python/getting-started/input-and-output/practice-problems/golf/jadoo-vs-koba/description/\">Jadoo vs Koba</a></h3>\n<ul>\n<li>Not using integer in the program</li>\n<li>Program doesn't exceed 100 characters</li>\n</ul>\n<pre><code class=\"py language-py\"># Prints the value in interval 70 - 80\n## Using *ord('char')* method to get the integer value\n## based on Unicode character\nfor i in range(ord('F'), ord('Q')):\n    print(i)\n</code></pre>"
  },
  {
    "id": "eylpamf",
    "date": "26/06/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>I want to post my algorithm code somewhere to get everything get organized. But I don't know where. Should I put it on this journal, or let me just put them on one repository? hmm, so confused &gt;o&lt;…</p>"
  },
  {
    "id": "lopxc",
    "date": "27/06/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear journal…</p>\n<p>we joined the 3rd (I guess…) Shopee Code League competition about the mini programming contest. Unfortunately, we've only be able to solve 2 of 5 challenges out there. The challenges was very hard &gt;.&lt;, but that was fun.</p>\n<p>hmm… I we should get more exercise, then…</p>"
  },
  {
    "id": "pobuccvq",
    "date": "28/06/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>last night, I have been learning <strong>Swift</strong> courses from dicoding.</p>\n<p>still 20% of my progress recorded today, but I think I can complete it if I have no busy of any webinar and another courses…</p>\n<p>keep fighting ✊✊✊</p>"
  },
  {
    "id": "jgotpzmo",
    "date": "27/07/2020",
    "tags": [
      "#mongodb",
      "#learning"
    ],
    "content": "<p>Dear journal…</p>\n<p>I've been learning some basic <code>MongoDB</code> after several times failed to install it and finally succeeded. Here are some basic syntaxes did I learned so far.</p>\n<ul>\n<li>Let's see what <strong>database do we use</strong> currently: <br /></li>\n</ul>\n<pre><code>&gt; db\ntest\n</code></pre>\n<ul>\n<li>Let's <strong>show</strong> our databases there: <br /></li>\n</ul>\n<pre><code>&gt; show dbs\nadmin     0.000GB\nconfig    0.000GB\nlocal     0.000GB\ntokobuku  0.000GB\n</code></pre>\n<ul>\n<li>Let's <strong>switch</strong> the currently database:<br />\nfor example, <strong>tokobuku</strong><br />\nwhen we <code>use tokobuku</code>, the database will be switched from <code>test</code> to <code>tokobuku</code> when we typed <code>db</code> again.</li>\n</ul>\n<pre><code>&gt; use tokobuku\nswitched to db tokobuku\n&gt; db\ntokobuku\n</code></pre>\n<ul>\n<li>creating a <code>collection</code>, a same thing as a table.<br />\nfor example, we want to create <code>buku</code> collection.</li>\n</ul>\n<pre><code>&gt; db.createCollections(\"buku\")\n</code></pre>\n<ul>\n<li>or, we can create a collection and also <strong>insert the data into it</strong></li>\n</ul>\n<pre><code>&gt; db.buku.insert({\n...    judul: \"Belajar MongoDB\",\n...    sinopsis: \"Panduan MongoDB untuk Pemula\",\n...    pengarang: \"Petani Kode\"\n... })\nWriteResult({ \"nInserted\" : 1 })\n</code></pre>\n<ul>\n<li>Let's try <strong>add another data</strong></li>\n</ul>\n<pre><code>&gt; db.buku.insert({\n    judul: \"Pemrograman Javascript dan MongoDB\",\n    sinopsis: \"Panduan Pemrograman JS dan MongoDB\",\n    pengarang: \"Petani Kode\",\n    harga: 90000\n})\nWriteResult({ \"nInserted\" : 1 })\n</code></pre>\n<ul>\n<li>Let's see <code>how many</code> books out there</li>\n</ul>\n<pre><code>&gt; db.buku.count()\n4\n</code></pre>\n<ul>\n<li>Let's see what kind of stuffs <code>inside</code> buku collection</li>\n</ul>\n<pre><code>&gt; db.buku.find()\n{ \"_id\" : ObjectId(\"5f168b1d2fe6122097d1de0b\"), \"judul\" : \"Belajar MongoDB\", \"sinopsis\" : \"Panduan MongoDB untuk Pemula\", \"pengarang\" : \"Petani Kode\" }\n{ \"_id\" : ObjectId(\"5f1f7740defe759c168d661f\"), \"judul\" : \"Pemrograman Javascript dan MongoDB\", \"sinopsis\" : \"Panduan Pemrograman JS dan MongoDB\", \"pengarang\" : \"Petani Kode\", \"harga\" : 90000 }\n</code></pre>\n<ul>\n<li>Let's see the books where <code>price = 90000</code></li>\n</ul>\n<pre><code>&gt; db.buku.find({ harga: 90000 })\n{ \"_id\" : ObjectId(\"5f1f78c6f31044ce6a46719b\"), \"judul\" : \"Pemrograman Javascript dan MongoDB\", \"sinopsis\" : \"Panduan Pemrograman JS dan MongoDB\", \"pengarang\" : \"Petani Kode\", \"harga\" : 90000 }\n</code></pre>\n<ul>\n<li>Let's <strong>update the data</strong></li>\n</ul>\n<pre><code>&gt; db.buku.update(\n...     {\n...         judul: \"Pemrograman Javascript dan MongoDB\"\n...     },\n...     {\n...         judul: \"Pemrograman Javascript dan MongoDB\",\n...         sinopsis: \"Panduan Pemrograman Js dan MongoDB\",\n...         pengarang: \"Petani Kode\",\n...         harga: 75000\n...     }\n... )\nWriteResult({ \"nMatched\" : 1, \"nUpserted\" : 0, \"nModified\" : 1 })\n</code></pre>\n<ul>\n<li>Let's <strong>delete some</strong> data</li>\n</ul>\n<pre><code>&gt; db.buku.remove({judul: \"Belajar MongoDB\"})\nWriteResult({ \"nRemoved\" : 1 })\n</code></pre>\n<ul>\n<li>Let's delete <strong>all</strong> of our data</li>\n</ul>\n<pre><code>&gt; db.buku.remove({})\nWriteResult({ \"nRemoved\" : 1 })\n</code></pre>\n<ul>\n<li>Let's drop the collection and also delete the database</li>\n</ul>\n<pre><code>&gt; db.buku.drop()\ntrue\n</code></pre>\n<pre><code>&gt; db.dropDatabase()\n{ \"dropped\" : \"tokobuku\", \"ok\" : 1 }\n</code></pre>"
  },
  {
    "id": "vvrhvgut",
    "date": "06/08/2020",
    "tags": [
      "#glintsacademy",
      "#learning"
    ],
    "content": "<p>Dear, journal…</p>\n<p>I just started to join <strong>Career Exploration Program batch 5</strong> from <strong>Glints Academy</strong>. The welcome session was great with introduction of <strong>Progate</strong> and <strong>Piazza</strong>. Thanks, Wanda for the funny introduction, Kak Jefri Divanli and Kak Jeffry Vincent for the nice and fun introduction.</p>\n<p>OK, to be continued once I have get rid with terrible toothache…</p>"
  },
  {
    "id": "qnsdihlj",
    "date": "08/08/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>this terrible toothache are getting worse and worse and I have been feeling hurt and chubby on my right cheek. Feels that my tooth is being drilled and will be blown out.</p>\n<p>😖😖🦷</p>"
  },
  {
    "id": "pghottvc",
    "date": "09/08/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear journal…</p>\n<p>approximately since 6 days ago I've got terrible toothache and I can't do anything except sleeping. Now, I don't feel my tooth hurts so bad (now it still) and I'm hungry in the midnight. Luckily I have bread I've bought yesterday. Hope it will hold the hunger for hours until the dawn.</p>\n<p>hmm…</p>"
  },
  {
    "id": "xjvrwtws",
    "date": "10/08/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>my tooth still feel bad (although it's feels not too bad). After finishing several online course, I'm currently confused about what kind of college lessons I will take meanwhile, online college will start 2 weeks from now.</p>\n  <p>&gt;o&lt;~~~</p>"
  },
  {
    "id": "mhuytmd",
    "date": "25/08/2020",
    "tags": ["#journal"], 
    "content": "<p>Dear, journal…</p><p>today is the second day of my college learning about <strong>well testing</strong> and <strong>unconventional hydrocarbon</strong>. Mr. Doddy taught us well in those two lessons. I've got slept at 1 pm and joined to unconventional hydrocarbon class 1 hour since the class have just started 1 hour ago (Alhamdulillah, I still have time for taking an absence online). ^_^\"</p>"
  },
  {
    "id": "qahfopzweh",
    "date": "22/08/2020",
    "tags": [
      "#ar"
    ],
    "content": "<p>Dear, journal…</p>\n<p>Since a long time ago I didn't have written some notes because of my not fit health (and Alhamdulillah I'm good for now) - until now then - I've got some email for learning <strong>Augmented Reality</strong> from <strong>dicoding</strong> and <strong>DTS bank</strong>. I will learn it well for the competition of AR Instagram filter while I continue finishing web class and my college.</p>\n<p>Wish me luck~~</p>"
  },
  {
    "id": "ifuejsoefd",
    "date": "23/08/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>There was an Indonesia Independence Day festival in Cisitu Lama, where there were so many snacks to sell. I bought so many snacks such as lontong, gehu, and many sosis bakar (baked sausages). So delicious!!!</p>\n<p>OK, time for money saving, then~~</p>"
  },
  {
    "id": "omettnpc",
    "date": "24/08/2020",
    "tags": [
      "#journal"
    ],
    "content":  "<p>Dear, journal…</p><p>This is the first day for my online college about reservoir characterization. Since a long day ago I didn't review for petroleum class, I feel so stressful to learn for this first class for 2 hours (when it should be 3 hours). And tomorrow I have 2 petroleum class: well testing and unconventional hydrocarbon. I hope there will be interesting things.</p><p>Wish me luck~~</p>"
  },
  {
    "id": "ycbib",
    "date": "26/08/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p><p>This is my third day of my college learning <strong>reservoir data acquisition</strong>. There are so many homework and projects during this college.</p><p>OK, reviewing material, then…</p>"
  },
  {
    "id": "ystwbxstajd",
    "date": "27/08/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p><p>This is my fourth day and also last of my college in this week learning <strong>petroleum production engineering</strong>. I went outside of my boarding house because of blackout there and I need elecricity for this online college. I wonder why there are no homework in this college.</p><p>OK, finishing online courses and cleaning up house, then…</p>"
  },
  {
    "id": "lemphj",
    "date": "28/08/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p><p>It's friday and I didn't have college scheduled for today. It's time for finishing online courses, web projects, and get clean up the room after the mess…</p><p>~~~</p>"
  },
  {
    "id": "owmiivdka",
    "date": "31/08/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>It's been 2 days ago since I have a problem with my laptop and I need to reinstall it. And finally Alhamdulillah, I can use my laptop again after got confused with complicated installation since I didn't have reinstalled my laptop for a long time (approx. 3 years perhaps). Now, it's time for re-finishing the projects and deal with homework deadlines.</p>\n<p>… Ready for the first September, eh? ~~~</p>"
  },
  {
    "id": "tprnimhz",
    "date": "01/09/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>Welcome to the first September. I've got my laptop small error again and have to fix it for moments. I felt so confused for fixing laptop for days. just need a little break, then…</p><p>Hmm... Feels that I didn't ready for today...</p>"
  },
  {
    "id": "fqhlnjhss",
    "date": "02/09/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>It's been 8036 days walking and exploring this glorious earth.</p>\n<p>That means It's been 22 years when I was born (c'mon guys, that's not special at all).</p>\n<p>Alhamdulillah, thanks to God for the 22 years given to me, although the pandemic of Coronavirus is not the right time to celebrate anything, especially this moment.</p>\n<p>I just hope my friends and my family will be stay healthy and stay happy. I also hope we can struggle against pandemic and the pandemic will be end soon…</p>\n<p>Nice to meet you, world (with a laptop on my table and glass of ice chocolate for small celebration)\nThanks for Twitter for the small reminder (although you don't need remind me to)…</p><img src=\"src/Screenshot_2020-09-02-17-56-42-894_com.twitter.android.png\" alt=\"small reminder of today\" />"
  },
  {
    "id": "pdhxhphsyo",
    "date": "04/09/2020",
    "tags": [
      "#test"
    ],
    "content": "<p><strong>Hello,</strong> <em>world</em></p>"
  },
  {
    "id": "yrvqlacje",
    "date": "04/09/2020",
    "tags": [
      "#journal",
      "#test"
    ],
    "content": "<p>Dear, journal…</p>\n<p>I've created a small feature for formatting this journal content (bold and italic first). Let me show you how…  </p>\n<p>Let say I want to type the character…</p>\n<pre><code>Hello, world!\n</code></pre>\n<ul>\n<li>By using the \"Bold\" button, I can make the selected text bold (let say \"Hello\") from \"Hello, world!\" to \"<strong>Hello</strong>, world!\"<br />\nIn markdown, it will be written as <code>**Hello**, world</code>.</li>\n<li>By using the \"Italic\" button, I can make the selected text italic (let say \"world!\") from \"Hello, world!\" to \"Hello, <em>world!</em>\"<br />\nIn markdown, it will be written as <code>Hello, *world!*</code>.</li>\n</ul>\n<p>Try to use the button as you can. Wish u luck~~~</p>"
  },
  {
    "id": "awzexcwn",
    "date": "04/09/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>Still adding some featues for the journal.</p>\n<p>Just wait…</p>"
  },
  {
    "id": "nadgnbxxs",
    "date": "05/09/2020",
    "tags": [
      "#journal",
      "#petroleum"
    ],
    "content": "<p>Dear, journal…</p>\n<p>In this weekend time, I've spent my time to learn well-testing - according to Amanat U. Chaudry (2004) is a branch of petroleum reservoir engineering, discussing about measuring oil and gas well performance based on pressure drop and several pysical properties of oil and gas (please correct me if I'm wrong). Now, I'm get lost in calculating oil and gas properties in <em>steady-state</em>, <em>pseudo-steady state</em>, and (finally) <em>unsteady-state</em>.</p>\n<p>So many mathematics out there. Need to have some materials of recent petroleum class review until I can understand this.</p>\n<p>Wish me luck~~~</p>"
  },
  {
    "id": "soiaoyq",
    "date": "05/09/2020",
    "tags": [
      "#journal",
      "#test"
    ],
    "content": "<p>Dear, journal</p>\n<p>I've added some keyboard shortcuts in notes text formatting for my typing comfort.</p>\n<p>Here's the shortcut</p>\n<ul>\n<li><kbd>Ctrl + B</kbd> - bold text.</li>\n<li><kbd>Ctrl + I</kbd> - italic text.</li>\n<li><kbd>Ctrl + Shift + `</kbd> - long code.</li>\n<li><kbd>Ctrl + `</kbd> - short code.</li>\n<li><kbd>Ctrl + L</kbd> - link.</li>\n</ul>"
  },
  {
    "id": "hpuhq",
    "date": "06/09/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>I've cooked my own fried rice from fried rice instant ingredients (indo: <em>bumbu racik nasi goreng</em>). I'm so proud to have a cook by myself. Money saved and have some full in my tummy (although it was so spicy that my tummy hurt anyway)</p>\n<p>What should I cooked again, then? :D~~~</p>"
  },
  {
    "id": "dbaabe",
    "date": "07/09/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, Pikachu…</p>\n<p>Thanks for coming to play for me, but I have to finish my job first…</p>\n<p>Cheers~~~<br />@dimaswehhh…</p>"
  },
  {
    "id": "vpoenxnj",
    "date": "09/09/2020",
    "tags": [
      "#journal",
      "#juaragcp"
    ],
    "content": "<p>Dear, journal…</p>\n<p>I'm so happy that there are <strong>#JuaraGCP season 4</strong> on next 2 days for another one month. There are so many labs that I have to accomplish to get at least 8 quests and 15 quests at maximum.</p>\n<p>Hmm… Another chance to learn again about GCP and also few materials reviews…</p>\n<p>*You can register and join this awesome GCP learning by <a href=\"https://goo.gle/JuaraGCP\">clicking here</a>…</p>"
  },
  {
    "id": "whuqzg",
    "date": "09/09/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, Pikachu…</p>\n<p>Thanks for accompanying me to sleep. Honestly, I'm so happy you're here with me…</p>"
  },
  {
    "id": "zpzoeki",
    "date": "10/09/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>I had cooked sardines using rice cooker since I felt bored with home-made fried rice and egg omelette. Because it tasted so good, I've been cooking sardines again for daily meal…</p>\n<p>Bon appetite~~~</p>"
  },
  {
    "id": "kwubmzaf",
    "date": "11/09/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>It's the day for #JuaraGCP season 4. but I didn't started yet because of so many deadlines…</p>\n<p>OK, deadline…</p>"
  },
  {
    "id": "qhdhfpl",
    "date": "13/09/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>After re-installed my laptop yesterday, I've got the same problem again so I need to re'install it again. Now, it's re-installed again and expect no upcoming problem in this laptop…</p>\n<p>Hmm… seems don't ready to go to college again since this… 😫</p>"
  },
  {
    "id": "zqhmadcui",
    "date": "12/09/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>It's been a day I've tried to re-install my laptop again after unable to display welcome screen. I hope today will be my last time I re-installed this laptop…</p>\n<p>OK, resting first due to Sunday, then…</p>"
  },
  {
    "id": "eaizlla",
    "date": "15/09/2020",
    "tags": [
      "#journal"
    ],
    "content": "<p>Dear, journal…</p>\n<p>Today I don't feel so well today, seems like my learning spirit is gonna be faded away. Yesterday was a electricity blackout on my boarding house (indo: <em>indekos</em>). So I need to go outside for the electricity (and also WiFi connection :D).</p>\n<p>Hmm… What should I do?</p>"
  },
  {
    "id": "wkzeunvn",
    "date": "16/09/2020",
    "tags": [
      "#journal",
      "#linux",
      "#tips"
    ],
    "content": "<p>Dear, readers…</p>\n<p>I've successfully executed code externally with just <code>gedit</code>, Ubuntu standard text editor. By using external tools plugin, I have successfully executed <strong>JavaScript</strong> and <strong>Python</strong> externally.</p>\n<p>You can find it how on <a href=\"https://dev.to/daimessdn/testing-gedit-external-tools-for-executing-codes-50ca\">my article</a>…</p>\n<p>Hope it useful…</p>"
  },
  {
    "id": "fldwg",
    "date": "16/09/2020",
    "tags": [
      "#googlecloud",
      "#journal",
      "#learning",
      "dataanalytics"
    ],
    "content": "<p>Dear, readers…</p>\n<p>I've done some labs in <a href=\"https://google.qwiklabs.com/quests/123\"><strong>Insights from Data with Bigquery</strong></a> quests on Qwiklabs. In these labs, I've learned something and also reviewing some labs there.</p>\n<ul>\n<li><a href=\"https://google.qwiklabs.com/focuses/2802?parent=catalog\"><strong>Introduction to SQL for BigQuery and Cloud SQL</strong></a><br /> learns some SQL code. SQL code (Structured Query Language) is a code used for managed structured data such as tables. SQL codes can be used in both <strong>Cloud SQL</strong> and <strong>BigQuery</strong>.</li>\n<li><a href=\"https://google.qwiklabs.com/focuses/1145?parent=catalog\">BigQuery: Qwik Start</a> <br /> learns how to use BigQuery on <strong>console</strong>. BigQuery can also be used by using <a href=\"https://google.qwiklabs.com/focuses/577?parent=catalog\">command line</a>.</li>\n<li><a href=\"https://google.qwiklabs.com/focuses/3642?parent=catalog\">Troubleshooting Common SQL Errors with BigQuery</a> <br /> learns some common errors in executing SQL codes.</li>\n<li><a href=\"https://google.qwiklabs.com/focuses/3565?parent=catalog\">Big Data Analysis to a Slide Presentation</a><br /> learn how to serving BigQuery in <strong>Google Spreadsheet</strong> and also <strong>Google Slides</strong> using <strong>Google App Script</strong>.</li>\n<li><a href=\"https://google.qwiklabs.com/focuses/3614?parent=catalog\">Explore and Create Reports with Data Studio</a> <br /> learn how to <strong>visualize</strong> the BigQuery data and also create the data report.</li>\n<li><a href=\"https://google.qwiklabs.com/focuses/11988?parent=catalog`\"> Insights from Data with BigQuery: Challenge Lab</a> <br /> which I will accomplish it later on.</li>\n</ul>\n<p>OK, continue to the next quest and skip the challenge lab first…</p>"
  },
  {
    "id": "grvcabh",
    "date": "16/09/2020",
    "tags": [
      "#googlecloud",
      "#journal",
      "#learning"
    ],
    "content": "<p>Dear, readers…</p>\n<p>I've learned many web lessons in <a href=\"https://google.qwiklabs.com/quests/115\">Build a Website on Google Cloud</a> quest on Qwiklabs. Here are some things I've learned.</p>\n<ul>\n<li><a href=\"https://google.qwiklabs.com/video/15131\">Hosting a Static Web App on Google Cloud using Cloud Storage</a><br />\nlearns how to deploy our static websites (HTML, CSS, and JavaScript) using <strong>Google Cloud Storage</strong>, some <em>Google Drive-like</em> GCP services that stores some file and metadata. It sounds like using Amazon S3 to deploy the same things.</li>\n<li><a href=\"https://google.qwiklabs.com/focuses/10445?parent=catalog\">Deploy Your Website on Cloud Run</a><br />\nlearns how to deploy websites using <strong>Cloud Run</strong>, some GCP services which interacts with <strong>Docker</strong> web project to build and also deploy the web. We can also update some changes and revisions by uploading the updates and <strong>Cloud Run</strong> will update the Docker web.</li>\n<li><a href=\"https://google.qwiklabs.com/focuses/11952?parent=catalog\">Hosting a Web App on Google Cloud Using Compute Engine</a><br />\nlearns how to deploy websites using <strong>Google Compute Engine</strong> and also learn about load balancer, health-checking, firewall, and more for satisfying our web performance.</li>\n<li><a href=\"https://google.qwiklabs.com/focuses/10470?parent=catalog\">Deploy, Scale, and Update Your Website on Google Kubernetes Engine</a><br />\nlearns how to create deployment using Kubernetes, by firstly creating Kubernetes cluster, Dockerize-ing, and deploying Docker into Kubernetes.</li>\n<li><a href=\"https://google.qwiklabs.com/focuses/11953?parent=catalog\">Migrating a Monolithic Website to Microservices on Google Kubernetes Engine</a><br />\nlearn how to de-centralized monolitic web apps into microservices and also deploy microservices web apps into Kubernetes.</li>\n<li><a href=\"https://google.qwiklabs.com/video/15133\">Case Study: Hosting Scalable web apps on Google Cloud</a><br />\nreviewing how to use GCP services in cases of deployment.</li>\n<li><a href=\"https://google.qwiklabs.com/focuses/11765?parent=catalog\">Build a Website on Google Cloud: Challenge Lab</a><br />\nwhich I will accomplish it later on…</li>\n</ul>"
  }
]

