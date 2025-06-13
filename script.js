    const questions = {
      numericalReasoning: [
        {
          question: "What is 12 + 8?",
          options: ["18", "20", "22", "24"],
          answer: "20",
          explanation: "12 plus 8 equals 20."
        },
        {
          question: "What is 25% of 200?",
          options: ["25", "50", "75", "100"],
          answer: "50",
          explanation: "25% of 200 is calculated as (25/100) * 200 = 50."
        },
        {
          question: "If a car travels 60 miles in 1 hour, how far will it travel in 4 hours?",
          options: ["180 miles", "200 miles", "240 miles", "300 miles"],
          answer: "240 miles",
          explanation: "The car travels 60 miles per hour, so in 4 hours, it will travel 60 * 4 = 240 miles."
        },
        {
          question: "What is the next number in the series: 2, 4, 8, 16, ____?",
          options: ["24", "32", "48", "64"],
          answer: "32",
          explanation: "Each number in the series is multiplied by 2, so 16 * 2 = 32."
        },
        {
          question: "Solve for x: 5x = 20",
          options: ["x = 2", "x = 3", "x = 4", "x = 5"],
          answer: "x = 4",
          explanation: "Dividing both sides of the equation by 5 gives x = 20 / 5 = 4."
        },
        {
          question: "What is 15% of 120?",
          options: ["16", "17", "18", "19"],
          answer: "18",
          explanation: "15% of 120 is calculated as (15/100) * 120 = 18."
        },
        {
          question: "If a box contains 5 red balls and 3 blue balls, what is the probability of picking a red ball?",
          options: ["3/5", "5/8", "2/5", "3/8"],
          answer: "5/8",
          explanation: "There are 5 red balls out of a total of 8 balls, so the probability is 5/8."
        },
        {
          question: "What is the value of 7 * 8 - 4?",
          options: ["50", "52", "54", "56"],
          answer: "52",
          explanation: "First multiply 7 * 8 = 56, then subtract 4: 56 - 4 = 52."
        },
        {
          question: "If the cost of 3 items is $30, what is the cost of 1 item?",
          options: ["$5", "$10", "$15", "$20"],
          answer: "$10",
          explanation: "Divide the total cost by the number of items: 30 / 3 = 10."
        },
        {
          question: "What is the area of a rectangle with a length of 8 and a width of 5?",
          options: ["35 square units", "40 square units", "45 square units", "50 square units"],
          answer: "40 square units",
          explanation: "The area of a rectangle is calculated as length * width: 8 * 5 = 40."
        },
        {
          question: "Solve for y: 3y - 7 = 11",
          options: ["y = 4", "y = 5", "y = 6", "y = 7"],
          answer: "y = 6",
          explanation: "Add 7 to both sides: 3y = 18. Then divide by 3: y = 18 / 3 = 6."
        },
        {
          question: "What is the next number in the series: 5, 10, 15, 20, ____?",
          options: ["22", "24", "25", "30"],
          answer: "25",
          explanation: "Each number in the series is incremented by 5, so the next number is 20 + 5 = 25."
        },
        {
          question: "What is 45 divided by 5?",
          options: ["7", "8", "9", "10"],
          answer: "9",
          explanation: "45 divided by 5 equals 9."
        },
        {
          question: "What is the difference between 200 and 75?",
          options: ["100", "125", "150", "175"],
          answer: "125",
          explanation: "200 minus 75 equals 125."
        },
        {
          question: "What is the sum of 18, 23, and 27?",
          options: ["65", "66", "67", "68"],
          answer: "68",
          explanation: "Adding 18 + 23 + 27 gives a sum of 68."
        },
        {
          question: "If a book costs $15 and you buy 3 books, what is the total cost?",
          options: ["$35", "$40", "$45", "$50"],
          answer: "$45",
          explanation: "15 * 3 = 45, so the total cost is $45."
        },
        {
          question: "How many seconds are in 2 minutes?",
          options: ["90", "100", "110", "120"],
          answer: "120",
          explanation: "There are 60 seconds in a minute, so 2 minutes equals 60 * 2 = 120 seconds."
        },
        {
          question: "What is the total of 9, 8, and 7?",
          options: ["22", "23", "24", "25"],
          answer: "24",
          explanation: "9 + 8 + 7 equals 24."
        },
        {
          question: "Solve for z: 6z + 8 = 50",
          options: ["z = 6", "z = 7", "z = 8", "z = 9"],
          answer: "z = 7",
          explanation: "Subtract 8 from both sides: 6z = 42. Then divide by 6: z = 42 / 6 = 7."
        },
        {
          question: "What is the perimeter of a square with side length 6?",
          options: ["20", "22", "24", "26"],
          answer: "24",
          explanation: "The perimeter of a square is 4 times the side length: 4 * 6 = 24."
        },
        {
          question: "What is the value of 16 ÷ 4 + 3?",
          options: ["5", "6", "7", "8"],
          answer: "7",
          explanation: "First divide 16 by 4 to get 4, then add 3: 4 + 3 = 7."
        },
        {
          question: "What is the next number in the sequence: 3, 9, 27, 81, ____?",
          options: ["162", "243", "324", "405"],
          answer: "243",
          explanation: "Each number in the series is multiplied by 3, so 81 * 3 = 243."
        },
        {
          question: "What is 40% of 150?",
          options: ["50", "55", "60", "65"],
          answer: "60",
          explanation: "40% of 150 is calculated as (40/100) * 150 = 60."
        },
        {
          question: "If a car travels 120 miles in 2 hours, what is its average speed?",
          options: ["50 mph", "55 mph", "60 mph", "65 mph"],
          answer: "60 mph",
          explanation: "The average speed is calculated as distance ÷ time: 120 ÷ 2 = 60 mph."
        },
        {
          question: "How much is 10 cubed (10^3)?",
          options: ["100", "500", "1000", "1500"],
          answer: "1000",
          explanation: "10 cubed is 10 * 10 * 10 = 1000."
        },
        {
          question: "What is the square root of 81?",
          options: ["7", "8", "9", "10"],
          answer: "9",
          explanation: "The square root of 81 is 9."
        },
        {
          question: "If 5x = 25, what is the value of x?",
          options: ["x = 3", "x = 4", "x = 5", "x = 6"],
          answer: "x = 5",
          explanation: "Divide both sides by 5: x = 25 / 5 = 5."
        },
        {
          question: "What is 7 + 3 * 2?",
          options: ["10", "12", "13", "14"],
          answer: "13",
          explanation: "According to the order of operations, multiply first: 3 * 2 = 6, then add 7: 7 + 6 = 13."
        },
        {
          question: "How much is 18 divided by 3 plus 2?",
          options: ["6", "7", "8", "9"],
          answer: "8",
          explanation: "First, divide 18 by 3 to get 6, then add 2: 6 + 2 = 8."
        },
        {
          question: "What is the sum of the angles in a triangle?",
          options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
          answer: "180 degrees",
          explanation: "The sum of the interior angles of a triangle is always 180 degrees."
        },
        {
          question: "What is the value of 5 raised to the power of 3?",
          options: ["100", "110", "120", "125"],
          answer: "125",
          explanation: "5^3 means 5 * 5 * 5, which equals 125."
        },
        {
          question: "If a rectangle has a length of 10 and a width of 2, what is the area?",
          options: ["15 square units", "18 square units", "20 square units", "22 square units"],
          answer: "20 square units",
          explanation: "Area = length * width, so 10 * 2 = 20 square units."
        },
        {
          question: "What is the value of 3 + 2 * 5?",
          options: ["13", "10", "9", "11"],
          answer: "13",
          explanation: "According to the order of operations, multiply first: 2 * 5 = 10, then add 3: 3 + 10 = 13."
        },
        {
          question: "How many sides does a hexagon have?",
          options: ["5", "6", "7", "8"],
          answer: "6",
          explanation: "A hexagon has 6 sides."
        },
        {
          question: "What is 2 to the power of 5?",
          options: ["32", "64", "128", "256"],
          answer: "32",
          explanation: "2 to the power of 5 is 2 * 2 * 2 * 2 * 2 = 32."
        },
        {
          question: "If a train travels 150 miles in 3 hours, what is its average speed?",
          options: ["40 mph", "45 mph", "50 mph", "60 mph"],
          answer: "50 mph",
          explanation: "The average speed is calculated as distance ÷ time: 150 ÷ 3 = 50 mph."
        },
        {
          question: "What is the value of 9 * (6 + 3)?",
          options: ["54", "81", "72", "90"],
          answer: "81",
          explanation: "First, add 6 + 3 = 9, then multiply by 9: 9 * 9 = 81."
        },
        {
          question: "What is the circumference of a circle with a radius of 7 units? (Use π ≈ 3.14)",
          options: ["42.98", "43.96", "44.88", "45.94"],
          answer: "43.96",
          explanation: "The circumference of a circle is calculated as 2 * π * radius, so 2 * 3.14 * 7 ≈ 43.96."
        },
        {
          question: "If a pizza has a diameter of 12 inches, what is the radius?",
          options: ["4 inches", "6 inches", "8 inches", "10 inches"],
          answer: "6 inches",
          explanation: "The radius is half the diameter, so 12 ÷ 2 = 6 inches."
        },
        {
          question: "What is 15% of 80?",
          options: ["10", "11", "12", "13"],
          answer: "12",
          explanation: "15% of 80 is calculated as (15/100) * 80 = 12."
        },
        {
          question: "What is the volume of a cube with a side length of 5?",
          options: ["100", "125", "150", "175"],
          answer: "125",
          explanation: "The volume of a cube is calculated as side^3, so 5^3 = 125."
        },
        {
          question: "How many degrees are in a full circle?",
          options: ["180", "360", "720", "3600"],
          answer: "360",
          explanation: "A full circle has 360 degrees."
        },
        {
          question: "What is the result of 100 ÷ 4 + 3?",
          options: ["25", "28", "30", "32"],
          answer: "28",
          explanation: "First, divide 100 by 4 to get 25, then add 3: 25 + 3 = 28."
        },
        {
          question: "What is the area of a triangle with a base of 10 and a height of 5?",
          options: ["25", "30", "35", "40"],
          answer: "25",
          explanation: "The area of a triangle is calculated as (base * height) / 2, so (10 * 5) / 2 = 25."
        },
        {
          question: "What is the value of 3^2 + 2^3?",
          options: ["13", "16", "18", "21"],
          answer: "13",
          explanation: "3^2 = 9 and 2^3 = 8, so 9 + 8 = 13."
        },
        {
          question: "How many weeks are in a year?",
          options: ["50", "52", "53", "54"],
          answer: "52",
          explanation: "There are 52 weeks in a year."
        },
        {
          question: "What is the perimeter of a rectangle with length 7 and width 4?",
          options: ["22", "24", "26", "28"],
          answer: "22",
          explanation: "The perimeter of a rectangle is calculated as 2 * (length + width), so 2 * (7 + 4) = 22."
        },
        {
          question: "What is 4 * (2 + 5)?",
          options: ["26", "28", "30", "32"],
          answer: "28",
          explanation: "First, add 2 + 5 = 7, then multiply by 4: 4 * 7 = 28."
        },
        {
          question: "How many grams are in 2 kilograms?",
          options: ["200", "500", "1000", "2000"],
          answer: "2000",
          explanation: "There are 1000 grams in 1 kilogram, so 2 kilograms equals 2000 grams."
        },
        {
          question: "What is the sum of the first 5 prime numbers?",
          options: ["20", "22", "23", "28"],
          answer: "28",
          explanation: "The first 5 prime numbers are 2, 3, 5, 7, and 11. Their sum is 2 + 3 + 5 + 7 + 11 = 28."
        },
      ],
      verbalReasoning: [
        {
          question: "Choose the word that is most similar in meaning to 'abundant'.",
          options: ["Scarce", "Minimal", "Plentiful", "Rare"],
          answer: "Plentiful",
          explanation: "'Abundant' and 'plentiful' both mean existing in large quantities."
        },
        {
          "question": "What is the meaning of the word 'inept'?",
          "options": ["Skillful", "Clumsy", "Efficient", "Capable"],
          "answer": "Clumsy",
          "explanation": "'Inept' means lacking skill or ability, often associated with being clumsy or awkward."
        },
        {
          question: "What is the opposite of the word 'hostile'?",
          options: ["Aggressive", "Cold", "Friendly", "Harsh"],
          answer: "Friendly",
          explanation: "'Hostile' means unfriendly or aggressive, while 'friendly' is the opposite."
        },
        {
          question: "Choose the word that best completes the sentence: 'Despite the rain, they decided to _____ the picnic.'",
          options: ["cancel", "delay", "end", "continue"],
          answer: "continue",
          explanation: "The sentence implies persistence, so 'continue' fits best."
        },
        {
          question: "Which word is spelled correctly?",
          options: ["Neccessary", "Necessary", "Necassary", "Necessery"],
          answer: "Necessary",
          explanation: "'Necessary' is the correct spelling; common misspellings include 'neccessary' or 'necessery'."
        },
        {
          question: "Which sentence is grammatically correct?",
          options: [
            "Me and her are going to the store.",
            "She and me are going to the store.",
            "She and I are going to the store.",
            "Her and I are going to the store."
          ],
          answer: "She and I are going to the store.",
          explanation: "The subject 'She and I' requires the verb 'are' and is grammatically correct."
        },
        {
          question: "Choose the correct analogy: Book is to Reading as Fork is to ____.",
          options: ["Plate", "Knife", "Spoon", "Eating"],
          answer: "Eating",
          explanation: "A book is used for reading, and a fork is used for eating."
        },
        {
          question: "Identify the synonym for 'benevolent'.",
          options: ["Cruel", "Selfish", "Kind", "Harsh"],
          answer: "Kind",
          explanation: "'Benevolent' means kind or charitable."
        },
        {
          question: "What is the opposite of 'transparent'?",
          options: ["Clear", "Translucent", "Opaque", "Reflective"],
          answer: "Opaque",
          explanation: "'Transparent' means see-through, and 'opaque' means not allowing light to pass through."
        },
        {
          question: "Choose the word that is not like the others: Cat, Dog, Cow, Chair",
          options: ["Cat", "Dog", "Cow", "Chair"],
          answer: "Chair",
          explanation: "Cat, Dog, and Cow are animals; Chair is not."
        },
        {
          question: "Identify the sentence with correct punctuation.",
          options: [
            "Let's eat Grandma!",
            "Lets eat, Grandma!",
            "Let's eat, Grandma!",
            "Lets eat Grandma!"
          ],
          answer: "Let's eat, Grandma!",
          explanation: "The comma after 'eat' clarifies the sentence to mean inviting Grandma to eat."
        },
        {
          question: "What does the idiom 'spill the beans' mean?",
          options: ["Make a mess", "Reveal a secret", "Cook something", "Say nonsense"],
          answer: "Reveal a secret",
          explanation: "The idiom 'spill the beans' means to tell a secret."
        },
        {
          question: "What does 'inevitable' mean?",
          options: ["Avoidable", "Unplanned", "Unavoidable", "Optional"],
          answer: "Unavoidable",
          explanation: "'Inevitable' refers to something that is certain to happen."
        },
        {
          question: "Choose the correctly ordered sentence: always / late / he / is",
          options: [
            "Always he late is.",
            "He is always late.",
            "Is he always late.",
            "Late he is always."
          ],
          answer: "He is always late.",
          explanation: "This is the grammatically correct order."
        },
        {
          question: "Which word is the odd one out: Write, Read, Listen, Jump?",
          options: ["Write", "Read", "Jump", "Listen"],
          answer: "Jump",
          explanation: "Jump is a physical activity; the others involve communication or comprehension."
        },
        {
          question: "What is the antonym of 'scarce'?",
          options: ["Rare", "Plentiful", "Few", "Limited"],
          answer: "Plentiful",
          explanation: "'Scarce' means limited; 'plentiful' means abundant."
        },
        {
          question: "Choose the best replacement for the word 'happy' in the sentence: 'She felt happy after getting the job.'",
          options: ["Sad", "Elated", "Depressed", "Tired"],
          answer: "Elated",
          explanation: "'Elated' is a more expressive synonym for 'happy'."
        },
        {
          question: "What does the idiom 'hit the nail on the head' mean?",
          options: [
            "Make a mistake",
            "Be exactly right",
            "Break something",
            "Argue effectively"
          ],
          answer: "To be exactly right",
          explanation: "This idiom means to describe exactly what is causing a situation."
        },
        {
          question: "Choose the word with the same meaning as 'fragile'.",
          options: ["Durable", "Delicate", "Heavy", "Tough"],
          answer: "Delicate",
          explanation: "Both 'fragile' and 'delicate' mean easily broken."
        },
        {
          question: "Which word is most opposite in meaning to 'expand'?",
          options: ["Extend", "Grow", "Widen", "Contract"],
          answer: "Contract",
          explanation: "'Contract' means to become smaller or shrink, opposite of 'expand'."
        },
        {
          question: "What does 'ambiguous' mean?",
          options: [
            "Clear and concise",
            "Unclear or having more than one meaning",
            "Well written",
            "Accurate"
          ],
          answer: "Unclear or having more than one meaning",
          explanation: "'Ambiguous' refers to something open to more than one interpretation."
        },
        {
          question: "Which word completes this analogy: Tall is to short as wide is to ____?",
          options: ["Thick", "Big", "Narrow", "Long"],
          answer: "Narrow",
          explanation: "'Tall' is the opposite of 'short'; 'wide' is the opposite of 'narrow'."
        },
        {
          question: "What is the synonym for 'swift'?",
          options: ["Slow", "Weak", "Quick", "Late"],
          answer: "Quick",
          explanation: "'Swift' and 'quick' both refer to something fast."
        },
        {
          question: "Identify the misspelled word: Receive, Definately, Accommodation, Necessary",
          options: ["Receive", "Definately", "Accommodation", "Necessary"],
          answer: "Definately",
          explanation: "The correct spelling is 'definitely'."
        },
        {
          question: "Choose the sentence with subject-verb agreement.",
          options: [
            "The team are winning the game.",
            "The teams is winning the game.",
            "The team is winning the game.",
            "The teams wins the game."
          ],
          answer: "The team is winning the game.",
          explanation: "'Team' is a collective noun and takes a singular verb: 'is'."
        },
        {
          question: "What does 'reluctant' mean?",
          options: ["Willing", "Unwilling", "Excited", "Happy"],
          answer: "Unwilling",
          explanation: "'Reluctant' refers to being hesitant or unwilling."
        },
        {
          question: "What is the antonym of 'artificial'?",
          options: ["Synthetic", "Natural", "Man-made", "Unreal"],
          answer: "Natural",
          explanation: "'Artificial' means man-made; 'natural' is its opposite."
        },
        {
          question: "Complete the sentence: I would have gone to the party if I _____ invited.",
          options: ["was", "have been", "had been", "was being"],
          answer: "had been",
          explanation: "The correct past perfect conditional form is 'had been invited'."
        },
        {
          question: "Which word means the same as 'obsolete'?",
          options: ["Modern", "Current", "Outdated", "Useful"],
          answer: "Outdated",
          explanation: "'Obsolete' refers to something that is no longer in use or outdated."
        },
        {
          question: "Which word is different: Run, Sprint, Jog, Sit?",
          options: ["Run", "Sprint", "Jog", "Sit"],
          answer: "Sit",
          explanation: "'Sit' is not a form of running like the others."
        },
        {
          question: "Choose the correct homophone: They're/Their/There going to the store.",
          options: ["There", "Their", "They're", "Ther"],
          answer: "They're",
          explanation: "'They're' is the contraction of 'they are'."
        },
        {
          question: "Which sentence is a question?",
          options: [
            "You are coming to the meeting.",
            "Come to the meeting now.",
            "Are you coming to the meeting?",
            "The meeting is today."
          ],
          answer: "Are you coming to the meeting?",
          explanation: "It ends with a question mark and asks for information."
        },
        {
          question: "Which word completes the analogy: Cold is to freezing as warm is to ____?",
          options: ["Cool", "Burning", "Hot", "Mild"],
          answer: "Hot",
          explanation: "The progression from cold to freezing is like warm to hot."
        },
        {
          question: "What does the prefix 'pre-' mean?",
          options: ["After", "During", "Before", "Inside"],
          answer: "Before",
          explanation: "'Pre-' means before, as in 'preview'."
        },
        {
          question: "Which of the following is a compound word?",
          options: ["Sun", "Flower", "Sunflower", "Floral"],
          answer: "Sunflower",
          explanation: "'Sunflower' is formed from two words: sun and flower."
        },
        {
          question: "Which word is closest in meaning to 'content'?",
          options: ["Sad", "Tired", "Satisfied", "Angry"],
          answer: "Satisfied",
          explanation: "'Content' means being satisfied or at ease."
        },
        {
          question: "What is the antonym of 'construct'?",
          options: ["Build", "Design", "Demolish", "Create"],
          answer: "Demolish",
          explanation: "'Construct' means to build, and 'demolish' means to tear down."
        },
        {
          question: "Which sentence uses 'its' correctly?",
          options: [
            "The dog lost it's collar.",
            "Its going to rain today.",
            "The company changed its policy.",
            "Its' a wonderful day."
          ],
          answer: "The company changed its policy.",
          explanation: "'Its' is the possessive form of 'it'; 'it's' means 'it is'."
        },
        {
          question: "Choose the synonym of 'vivid'.",
          options: ["Dull", "Clear", "Faint", "Dim"],
          answer: "Clear",
          explanation: "'Vivid' means clear, strong, and full of life or color."
        },
        {
          question: "What is the plural of 'crisis'?",
          options: ["Crises", "Crisis'", "Crisises", "Crisis"],
          answer: "Crises",
          explanation: "The plural form of 'crisis' is 'crises'."
        },
        {
          question: "Choose the word that best completes the sentence: 'He was _____ to admit he was wrong.'",
          options: ["humble", "reluctant", "willing", "eager"],
          answer: "reluctant",
          explanation: "The sentence implies hesitation; 'reluctant' fits best."
        },
        {
          question: "What is the meaning of 'emerge'?",
          options: ["Disappear", "Come into view", "Hide", "Reduce"],
          answer: "Come into view",
          explanation: "'Emerge' means to become visible or known."
        },
        {
          question: "Which of the following is a correct comparative form?",
          options: ["More good", "Better", "Gooder", "More better"],
          answer: "Better",
          explanation: "'Better' is the correct comparative of 'good'."
        },
        {
          question: "What does the suffix '-less' mean in the word 'hopeless'?",
          options: ["Full of", "Without", "Like", "Having"],
          answer: "Without",
          explanation: "The suffix '-less' means 'without', as in 'hopeless' = without hope."
        },
        {
          question: "Choose the correctly punctuated sentence.",
          options: [
            "He said 'I am coming now.'",
            "He said, I am coming now.",
            "He said, 'I am coming now.'",
            "He said 'I am coming now'."
          ],
          answer: "He said, 'I am coming now.'",
          explanation: "Proper punctuation includes a comma before the quote and the period inside the quotation marks."
        },
        {
          question: "Which sentence is written in passive voice?",
          options: [
            "The teacher explained the lesson.",
            "The students completed the assignment.",
            "The lesson was explained by the teacher.",
            "They built a new library."
          ],
          answer: "The lesson was explained by the teacher.",
          explanation: "In the passive voice, the subject receives the action, as in 'was explained'."
        },
        {
          question: "What is the meaning of 'dormant'?",
          options: ["Active", "Sleeping", "Moving", "Awake"],
          answer: "Sleeping",
          explanation: "'Dormant' means inactive or in a state of rest, like sleeping."
        },
        {
          question: "Choose the best word to complete the analogy: Pen is to writer as brush is to ____.",
          options: ["Painter", "Wall", "Color", "Ink"],
          answer: "Painter",
          explanation: "A pen is used by a writer; a brush is used by a painter."
        },
        {
          question: "What is the antonym of 'complex'?",
          options: ["Confusing", "Simple", "Intricate", "Detailed"],
          answer: "Simple",
          explanation: "'Complex' means complicated; 'simple' is the opposite."
        },
        {
          question: "Which sentence is conditional?",
          options: [
            "I enjoy going for walks.",
            "She dances beautifully.",
            "If it rains, we’ll cancel the picnic.",
            "He studies every day."
          ],
          answer: "If it rains, we’ll cancel the picnic.",
          explanation: "A conditional sentence contains an 'if' clause showing a condition and result."
        }
      ],
      logicalReasoning: [
        {
          question: "Find the odd one out: Apple, Mango, Banana, Carrot",
          options: ["Apple", "Mango", "Banana", "Carrot"],
          answer: "Carrot",
          explanation: "Carrot is a vegetable, while the rest are fruits."
        },
        {
          question: "Which number completes the series: 3, 6, 12, 24, __?",
          options: ["48", "36", "60", "72"],
          answer: "48",
          explanation: "Each number is multiplied by 2."
        },
        {
          question: "All roses are flowers. Some flowers fade quickly. Can we conclude that some roses fade quickly?",
          options: ["Yes", "No", "Maybe", "Can't say"],
          answer: "No",
          explanation: "The statement does not specify if the roses are among the flowers that fade quickly."
        },
        {
          question: "If all cats are animals and some animals are dogs, then some cats are definitely dogs. Is this conclusion correct?",
          options: ["Yes", "No", "Maybe", "Can't say"],
          answer: "No",
          explanation: "The conclusion does not follow necessarily. There is no direct link between cats and dogs."
        },
        {
          question: "What comes next in the series: A, C, F, J, O, __?",
          options: ["S", "T", "U", "V"],
          answer: "U",
          explanation: "The positions of the letters increase by 1, 2, 3, 4, 5..."
        },
        {
          question: "Mango is to Fruit as Carrot is to __?",
          options: ["Fruit", "Vegetable", "Plant", "Seed"],
          answer: "Vegetable",
          explanation: "Both are types of food; mango is a fruit and carrot is a vegetable."
        },
        {
          question: "If 5 machines make 5 widgets in 5 minutes, how long will 100 machines take to make 100 widgets?",
          options: ["5 minutes", "10 minutes", "1 minute", "100 minutes"],
          answer: "5 minutes",
          explanation: "Each machine takes 5 minutes for 1 widget; 100 machines make 100 in the same time."
        },
        {
          question: "Statements: All men are mortal. Socrates is a man. Conclusion: Socrates is mortal.",
          options: ["Yes", "No", "Maybe", "Can't say"],
          answer: "Yes",
          explanation: "It follows logically from the premises."
        },
        {
          question: "What comes next in the sequence: 1, 1, 2, 3, 5, 8, __?",
          options: ["13", "21", "8", "5"],
          answer: "13",
          explanation: "It’s the Fibonacci sequence."
        },
        {
          question: "If all squares are rectangles and all rectangles are polygons, then all squares are polygons. Is this true?",
          options: ["Yes", "No", "Maybe", "Can't say"],
          answer: "Yes",
          explanation: "This is a transitive relation."
        },
        {
          question: "Which number does not belong in the series: 2, 4, 6, 9, 10?",
          options: ["9", "6", "10", "2"],
          answer: "9",
          explanation: "All others are even numbers."
        },
        {
          question: "Which one is the odd one out: Circle, Triangle, Rectangle, Sphere?",
          options: ["Circle", "Triangle", "Rectangle", "Sphere"],
          answer: "Sphere",
          explanation: "Sphere is 3D; others are 2D shapes."
        },
        {
          question: "If today is Wednesday, what day will it be after 15 days?",
          options: ["Thursday", "Friday", "Monday", "Tuesday"],
          answer: "Thursday",
          explanation: "15 mod 7 = 1. Wednesday + 1 day = Thursday."
        },
        {
          question: "Which word is the odd one out: Table, Chair, Bed, Carpet, Hammer?",
          options: ["Hammer", "Table", "Chair", "Bed"],
          answer: "Hammer",
          explanation: "All others are furniture; hammer is a tool."
        },
        {
          question: "Which of the following does not belong: Dog, Cat, Cow, Lion, Rose?",
          options: ["Rose", "Lion", "Cow", "Dog"],
          answer: "Rose",
          explanation: "Rose is a plant; others are animals."
        },
        {
          question: "If all pens are blue, and some markers are pens, then some markers are blue. Is the conclusion valid?",
          options: ["Yes", "No", "Maybe", "Can't say"],
          answer: "Yes",
          explanation: "It logically follows from the premises."
        },
        {
          question: "What comes next in the series: Z, X, U, Q, __?",
          options: ["L", "P", "R", "T"],
          answer: "L",
          explanation: "Skipping letters in reverse: -2, -3, -4..."
        },
        {
          question: "Choose the odd one out: 121, 144, 169, 196, 225",
          options: ["121", "144", "169", "225"],
          answer: "121",
          explanation: "121 is 11², while others are squares of even numbers."
        },
        {
          question: "Which number is the odd one out: 4, 9, 16, 25, 36, 49, 50?",
          options: ["50", "25", "36", "49"],
          answer: "50",
          explanation: "Others are perfect squares."
        },
        {
          question: "Which word completes the analogy: Book is to Reading as Fork is to __?",
          options: ["Eating", "Writing", "Drawing", "Speaking"],
          answer: "Eating",
          explanation: "A book is used for reading; a fork for eating."
        },
        {
          question: "In a code, TREE is written as USFF. How is LEAF written?",
          options: ["MFBE", "MFBG", "MFHA", "MBFG"],
          answer: "MFBG",
          explanation: "Each letter is shifted +1."
        },
        {
          question: "If A=1, B=2, ..., Z=26, what is the value of the word 'CAB'?",
          options: ["6", "7", "8", "9"],
          answer: "6",
          explanation: "C(3) + A(1) + B(2) = 6."
        },
        {
          question: "Pointing to a man, Sarah said, 'He is the son of my grandfather’s only son.' Who is the man?",
          options: ["Father", "Brother", "Uncle", "Cousin"],
          answer: "Brother",
          explanation: "Grandfather’s only son is her father. His son is her brother."
        },
        {
          question: "Find the next term in the pattern: 2, 6, 12, 20, 30, __",
          options: ["42", "50", "60", "70"],
          answer: "42",
          explanation: "Add 4, 6, 8, 10, 12..."
        },
        {
          question: "Which is the odd pair: (3, 9), (5, 25), (4, 16), (2, 5)",
          options: ["(3, 9)", "(5, 25)", "(4, 16)", "(2, 5)"],
          answer: "(2, 5)",
          explanation: "Others are perfect squares."
        },
        {
          question: "How many times does the digit 3 appear between 1 and 100?",
          options: ["20", "19", "21", "18"],
          answer: "20",
          explanation: "Appears in 3, 13, 23, ..., and in 30–39."
        },
        {
          question: "If ‘TABLE’ is coded as ‘GZOVO’, how is ‘CHAIR’ coded?",
          options: ["XZSRM", "YQSLR", "XZPQR", "YQSRM"],
          answer: "XZSRM",
          explanation: "Reverse alphabet position: T=7, A=26..."
        },
        {
          question: "Which number logically completes the series: 1, 4, 9, 16, __?",
          options: ["25", "30", "35", "40"],
          answer: "25",
          explanation: "These are perfect squares."
        },
        {
          question: "Which one is the odd one out: Apple, Banana, Grapes, Potato?",
          options: ["Potato", "Apple", "Banana", "Grapes"],
          answer: "Potato",
          explanation: "Potato is a vegetable; rest are fruits."
        },
        {
          question: "If ‘NOON’ is coded as ‘OPOP’, what is ‘DEED’?",
          options: ["EFEF", "DFED", "FEFE", "EFDF"],
          answer: "EFEF",
          explanation: "Each letter is replaced by the next alphabet letter."
        },
        {
          question: "What comes next in the pattern: 2, 3, 5, 8, 12, 17, __?",
          options: ["23", "25", "26", "24"],
          answer: "23",
          explanation: "The difference increases by 1 each time."
        },
        {
          question: "In a row of students, John is 12th from the left and 17th from the right. How many students are there?",
          options: ["28", "29", "30", "31"],
          answer: "28",
          explanation: "12 + 17 - 1 = 28."
        },
        {
          question: "Which figure is the odd one out: Square, Rectangle, Triangle, Cube?",
          options: ["Cube", "Rectangle", "Square", "Triangle"],
          answer: "Cube",
          explanation: "Cube is 3D; others are 2D shapes."
        },
        {
          question: "If ‘RAIN’ is coded as 18-1-9-14, what is ‘WIND’?",
          options: ["23-9-14-4", "22-10-14-3", "21-9-13-5", "22-9-13-6"],
          answer: "23-9-14-4",
          explanation: "Convert letters to position in the alphabet."
        },
        {
          question: "Which letter comes next: A, D, G, J, __?",
          options: ["M", "N", "P", "K"],
          answer: "M",
          explanation: "Each letter skips 2 places."
        },
        {
          question: "What comes next: 3, 6, 11, 18, 27, __?",
          options: ["38", "42", "35", "33"],
          answer: "38",
          explanation: "Pattern: +3, +5, +7, +9, +11"
        },
        {
          question: "Which one is the odd one: Pen, Pencil, Brush, Eraser, Marker?",
          options: ["Brush", "Pen", "Pencil", "Eraser"],
          answer: "Brush",
          explanation: "Brush is used for painting; others for writing."
        },
        {
          question: "Which shape has the least number of sides?",
          options: ["Triangle", "Square", "Hexagon", "Pentagon"],
          answer: "Triangle",
          explanation: "A triangle has 3 sides, the least among polygons."
        },
        {
          question: "If ‘ACE’ = 135, then ‘BDF’ = ?",
          options: ["246", "257", "274", "265"],
          answer: "246",
          explanation: "Letter positions: A=1, C=3, E=5 etc."
        },
        {
          question: "What is the next number: 0, 1, 1, 2, 3, 5, __?",
          options: ["8", "13", "6", "7"],
          answer: "8",
          explanation: "Fibonacci sequence."
        },
        {
          question: "Which number is the odd one: 16, 25, 36, 49, 55?",
          options: ["55", "16", "25", "36"],
          answer: "55",
          explanation: "55 is not a perfect square."
        },
        {
          question: "Which day is 100 days after Monday?",
          options: ["Wednesday", "Tuesday", "Friday", "Thursday"],
          answer: "Wednesday",
          explanation: "100 mod 7 = 2; Monday + 2 days = Wednesday."
        },
        {
          question: "If CLOUD = GNVQH, then RAIN = ?",
          options: ["VEMR", "VEPR", "WEMR", "WEMR"],
          answer: "VEMR",
          explanation: "Each letter is +4 positions."
        },
        {
          question: "A man walks 5 km north, then turns right and walks 3 km. Which direction is he facing?",
          options: ["East", "West", "North", "South"],
          answer: "East",
          explanation: "North + right turn = East."
        },
        {
          question: "In a family, A is B’s brother. C is B’s sister. D is C’s mother. Who is A to D?",
          options: ["Son", "Brother", "Father", "Uncle"],
          answer: "Son",
          explanation: "A is D’s son."
        },
        {
          question: "Which is the odd number: 11, 13, 15, 17, 19?",
          options: ["15", "13", "17", "19"],
          answer: "15",
          explanation: "15 is not prime."
        },
        {
          question: "If ‘ZEBRA’ is coded as ‘AVCSB’, what is ‘LION’?",
          options: ["MJPO", "MOJN", "LIPN", "LOJN"],
          answer: "MJPO",
          explanation: "Each letter is shifted +1."
        },
        {
          question: "Which number comes next: 10, 7, 4, 1, __?",
          options: ["-2", "-3", "1", "2"],
          answer: "-2",
          explanation: "Subtracting 3 each time."
        },
        {
          question: "If ‘NEVER’ is written as ‘MUDUQ’, how is ‘ALWAYS’ written?",
          options: ["ZKVXZR", "ZLWXZQ", "ZKVZXR", "ZKYZXS"],
          answer: "ZKVXZR",
          explanation: "Each letter is -1."
        },
        {
          question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
          options: ["7.5 degrees", "15 degrees", "30 degrees", "45 degrees"],
          answer: "7.5 degrees",
          explanation: "Hour hand is at 97.5°, minute at 90°; difference = 7.5°."
        }
      ],      
      abstractReasoning: [
        {
          question: "Which shape completes the sequence: △, ◯, △, ◯, ...?",
          options: ["△", "◯", "□", "◆"],
          answer: "△",
          explanation: "The sequence alternates between triangle and circle. The next shape is a triangle."
        },
        {
          question: "Which shape is the odd one out: ▲, ◆, ●, ▲, ◆?",
          options: ["▲", "◆", "●", "◯"],
          answer: "●",
          explanation: "All other shapes have corners, but the circle (●) does not."
        },
        {
          question: "Find the next shape in the pattern: ◯▲, ▲◯, ◯▲, ▲◯, ...?",
          options: ["◯▲", "▲◯", "△◯", "▲△"],
          answer: "◯▲",
          explanation: "The pattern alternates between the two sequences. The next is ◯▲."
        },
        {
          question: "What comes next: ⬛, ⬛⬛, ⬛⬛⬛, ...?",
          options: ["⬛⬛⬛⬛", "⬛⬛⬛⬛⬛", "⬛⬛", "⬛⬛⬛⬛⬛"],
          answer: "⬛⬛⬛⬛",
          explanation: "The number of black squares increases by 1 each time."
        },
        {
          question: "Which direction does the arrow point next: ↑, →, ↓, ←, ...?",
          options: ["↑", "→", "↓", "←"],
          answer: "↑",
          explanation: "The arrows rotate clockwise every step."
        },
        {
          question: "Which pattern completes the sequence: A-B-A-B-...?",
          options: ["A", "B", "C", "D"],
          answer: "A",
          explanation: "The pattern alternates A and B, so A comes next."
        },
        {
          question: "What shape comes next in the sequence: ◯, ◯, □, □, ◯, ◯, □, ...?",
          options: ["◯", "□", "△", "◆"],
          answer: "□",
          explanation: "Two circles, then two squares, repeated."
        },
        {
          question: "Which figure is different: ⬤, ⬤, ◯, ⬤?",
          options: ["⬤", "◯", "▲", "◆"],
          answer: "◯",
          explanation: "The hollow circle (◯) is different from filled ones (⬤)."
        },
        {
          question: "Which pattern follows: ▲, ◼, ▲, ◼, ...?",
          options: ["▲", "◼", "□", "△"],
          answer: "▲",
          explanation: "Triangle and square alternate."
        },
        {
          question: "What comes next: ★, ★★, ★★★, ...?",
          options: ["★", "★★", "★★★", "★★★★"],
          answer: "★★★★",
          explanation: "Stars increase by one each time."
        },
        {
          question: "What comes next: ◯, ◯◯, ◯◯◯, ...?",
          options: ["◯◯◯◯", "◯◯◯", "◯◯◯◯◯", "◯◯"],
          answer: "◯◯◯◯",
          explanation: "One circle added each step."
        },
        {
          question: "Find the next figure: A, AB, ABC, ABCD, ...?",
          options: ["ABCDE", "ABC", "ABCD", "ABCDEFG"],
          answer: "ABCDE",
          explanation: "Letters are added in alphabetical order."
        },
        {
          question: "Which figure is the odd one out: ◯, ◯, ◯, ⬛?",
          options: ["◯", "⬛", "◼", "◆"],
          answer: "⬛",
          explanation: "All but one are circles."
        },
        {
          question: "What comes next: 1 dot, 2 dots, 3 dots, ...?",
          options: ["4 dots", "5 dots", "6 dots", "7 dots"],
          answer: "4 dots",
          explanation: "Dots increase by 1."
        },
        {
          question: "Which is different: ▲, ▼, ▲, ▼, ◯?",
          options: ["▲", "▼", "◯", "◆"],
          answer: "◯",
          explanation: "Circle does not follow the triangle up/down pattern."
        },
        {
          question: "What shape is next: ◯, △, ◯, △, ...?",
          options: ["◯", "△", "□", "◆"],
          answer: "◯",
          explanation: "Alternating circle and triangle."
        },
        {
          question: "Which figure is the odd one out: ◼, ◼, ◼, ◯?",
          options: ["◯", "◼", "◆", "△"],
          answer: "◯",
          explanation: "Three squares and one circle."
        },
        {
          question: "What follows this sequence: ▲, ▲▲, ▲▲▲, ...?",
          options: ["▲▲▲▲", "▲▲", "▲", "▲▲▲▲▲"],
          answer: "▲▲▲▲",
          explanation: "Triangles increase by 1."
        },
        {
          question: "Which shape breaks the sequence: A, B, C, D, G?",
          options: ["A", "B", "C", "G"],
          answer: "G",
          explanation: "G skips E and F in the alphabetical sequence."
        },
        {
          question: "What is the next rotation: ↑, →, ↓, ...?",
          options: ["←", "↑", "→", "↓"],
          answer: "←",
          explanation: "Rotating 90° clockwise each time."
        },
        {
          question: "Which is the odd one: □, ▭, ▭, ▭?",
          options: ["□", "▭", "◯", "◆"],
          answer: "□",
          explanation: "Square differs from rectangles."
        },
        {
          question: "Which pattern is next: ◯▲, ▲◯, ◯▲, ▲◯, ...?",
          options: ["◯▲", "▲◯", "△▲", "□▲"],
          answer: "◯▲",
          explanation: "Alternates the pair."
        },
        {
          question: "What completes: 1 triangle, 2 triangles, 3 triangles, ...?",
          options: ["4 triangles", "5 triangles", "3 triangles", "6 triangles"],
          answer: "4 triangles",
          explanation: "One triangle is added each time."
        },
        {
          question: "What comes next: A, C, E, G, ...?",
          options: ["I", "H", "J", "K"],
          answer: "I",
          explanation: "Alphabet skipping one letter each time."
        },
        {
          question: "Which direction follows: ←, ↑, →, ...?",
          options: ["↓", "←", "↑", "→"],
          answer: "↓",
          explanation: "Arrow turns 90° clockwise."
        },
        {
          question: "Which is the odd figure: ▲, ▲, ▲, ▼?",
          options: ["▲", "▼", "◯", "◆"],
          answer: "▼",
          explanation: "Downward triangle instead of upward."
        },
        {
          question: "Which shape completes the pattern: ●, ◯, ●, ◯, ...?",
          options: ["●", "◯", "□", "◆"],
          answer: "●",
          explanation: "Alternating filled and empty circles."
        },
        {
          question: "What comes next: A, AB, ABC, ABCD, ABCDE, ...?",
          options: ["ABCDEF", "ABC", "ABCDE", "ABCDEG"],
          answer: "ABCDEF",
          explanation: "Next letter added in sequence."
        },
        {
          question: "Which figure is different: ▲, △, ▲, △, ◯?",
          options: ["◯", "▲", "△", "◆"],
          answer: "◯",
          explanation: "Circle breaks triangle pattern."
        },
        {
          question: "What comes next: 2, 4, 8, 16, ...?",
          options: ["32", "64", "48", "24"],
          answer: "32",
          explanation: "Each number is doubled."
        },
        {
          question: "Which symbol is odd: @, &, %, A?",
          options: ["A", "&", "%", "@"],
          answer: "A",
          explanation: "Others are symbols; A is a letter."
        },
        {
          question: "What comes next: 1 square, 2 squares, 3 squares, ...?",
          options: ["4 squares", "3 squares", "5 squares", "6 squares"],
          answer: "4 squares",
          explanation: "One more square is added each time."
        },
        {
          question: "Which is different: ✳, ✴, ✳, ✴, ★?",
          options: ["★", "✳", "✴", "★"],
          answer: "★",
          explanation: "Star is different from alternating symbols."
        },
        {
          question: "What shape comes next: ◯, □, △, ◯, □, △, ...?",
          options: ["◯", "□", "△", "◆"],
          answer: "◯",
          explanation: "Repeating sequence of three shapes."
        },
        {
          question: "What comes next: 1, 3, 6, 10, ...?",
          options: ["15", "12", "16", "14"],
          answer: "15",
          explanation: "Add 2, 3, 4, 5 — triangular numbers."
        },
        {
          question: "Which direction is next: ↓, →, ↑, ...?",
          options: ["←", "↓", "→", "↑"],
          answer: "←",
          explanation: "Clockwise rotation by 90°."
        },
        {
          question: "Which is the odd one out: ■, ●, ◯, ◆?",
          options: ["◯", "■", "◆", "●"],
          answer: "◯",
          explanation: "Only hollow shape."
        },
        {
          question: "Which shape breaks the pattern: △, △, ◯, △?",
          options: ["◯", "△", "□", "◆"],
          answer: "◯",
          explanation: "Circle breaks triangle pattern."
        },
        {
          question: "What comes next: ▲, ■, ●, ▲, ■, ●, ...?",
          options: ["▲", "■", "●", "◆"],
          answer: "▲",
          explanation: "Repeating sequence of three symbols."
        },
        {
          question: "Which is different: A, B, D, E?",
          options: ["D", "A", "B", "E"],
          answer: "D",
          explanation: "Alphabet skips C."
        },
        {
          question: "What is the next figure: ◯, ◯, ◯, ◯, ...?",
          options: ["◯", "△", "□", "◆"],
          answer: "◯",
          explanation: "Same figure repeated."
        },
        {
          question: "Which figure completes: ⬤⬤⬤, ◯◯◯, ⬤⬤⬤, ...?",
          options: ["◯◯◯", "⬛⬛⬛", "◯", "⬤⬤⬤⬤"],
          answer: "◯◯◯",
          explanation: "Alternating filled and hollow circles."
        },
        {
          question: "What is next in pattern: A, Z, B, Y, ...?",
          options: ["C", "D", "F", "G"],
          answer: "C",
          explanation: "Alternating from beginning and end of alphabet."
        },
        {
          question: "What is next: ▲▲▲, ▲▲, ▲, ...?",
          options: ["None", "▲▲▲", "▲", "▲▲▲▲"],
          answer: "None",
          explanation: "Number of triangles decreasing by 1. Next: 0."
        },
        {
          question: "What shape is next: ◯, ◯, ◯, ◯, ◯, ...?",
          options: ["◯", "△", "□", "◆"],
          answer: "◯",
          explanation: "Constant repetition of same shape."
        },
        {
          question: "Which figure is different: ▲, ■, ◯, ▲?",
          options: ["◯", "▲", "■", "◆"],
          answer: "◯",
          explanation: "Only one has no corners."
        },
        {
          question: "What comes next: 1, 2, 4, 8, ...?",
          options: ["16", "32", "64", "24"],
          answer: "16",
          explanation: "Doubling each time."
        },
        {
          question: "What comes next: A1, B2, C3, D4, ...?",
          options: ["E5", "A2", "F6", "G7"],
          answer: "E5",
          explanation: "Letters and numbers increase sequentially."
        },
        {
          question: "What is next: ●○●○●, ...?",
          options: ["○", "●", "△", "■"],
          answer: "○",
          explanation: "Alternating filled and hollow circles."
        },
        {
          question: "Which comes next: ▭, ◯, ▲, ▭, ◯, ▲, ...?",
          options: ["▭", "▲", "◯", "◆"],
          answer: "▭",
          explanation: "Repeating sequence of 3 shapes."
        },
      ],      
      dataInterpretation:[
        {
          question: "If 60 out of 240 students prefer math, what percentage prefer math?",
          options: ["10%", "20%", "25%", "30%"],
          answer: "25%",
          explanation: "60 ÷ 240 × 100 = 25%."
        },
        {
          question: "A pie chart shows that 40% of a company's budget is spent on salaries. If the total budget is $500,000, how much is spent on salaries?",
          options: ["$150,000", "$200,000", "$250,000", "$300,000"],
          answer: "$200,000",
          explanation: "40% of $500,000 = 0.40 × 500,000 = $200,000."
        },
        {
          question: "In a bar chart showing sales over 5 months, January had 120 units sold and February had 180. What is the percentage increase?",
          options: ["40%", "50%", "60%", "70%"],
          answer: "50%",
          explanation: "Increase = 180 - 120 = 60; (60/120) × 100 = 50%."
        },
        {
          question: "A table shows 5 employees worked: 8, 7, 6, 9, and 10 hours respectively. What is the average number of hours worked?",
          options: ["7 hours", "8 hours", "9 hours", "10 hours"],
          answer: "8 hours",
          explanation: "Total = 40 hours. Average = 40 ÷ 5 = 8 hours."
        },
        {
          question: "A survey showed 300 people use buses, 150 use trains, and 50 use taxis. What fraction of people use buses?",
          options: ["2/5", "3/5", "4/5", "5/5"],
          answer: "3/5",
          explanation: "Total = 300 + 150 + 50 = 500. Fraction = 300/500 = 3/5."
        },
        {
          question: "In a table, the profit of a company for 4 quarters was $12k, $15k, $10k, and $13k. What is the total annual profit?",
          options: ["$45,000", "$50,000", "$55,000", "$60,000"],
          answer: "$50,000",
          explanation: "12 + 15 + 10 + 13 = $50k."
        },
        {
          question: "A bar graph shows sales of 500, 600, and 550 in three years. What is the average annual sale?",
          options: ["500", "550", "600", "650"],
          answer: "550",
          explanation: "(500 + 600 + 550)/3 = 1650 ÷ 3 = 550."
        },
        {
          question: "If 25% of a pie chart represents rent expenses and total expenses are $2000, how much is spent on rent?",
          options: ["$400", "$500", "$600", "$700"],
          answer: "$500",
          explanation: "25% of $2000 = 0.25 × 2000 = $500."
        },
        {
          question: "A company sold 120 units in Jan, 150 in Feb, and 90 in Mar. What is the mode?",
          options: ["120", "150", "90", "No mode"],
          answer: "No mode",
          explanation: "No value repeats."
        },
        {
          question: "In a table, the number of laptops sold are: Dell: 20, HP: 30, Lenovo: 25. What is the percentage of HP sales?",
          options: ["25%", "30%", "40%", "50%"],
          answer: "40%",
          explanation: "Total = 75. HP = 30/75 = 0.4 = 40%."
        },
        {
          question: "A line chart shows the price of a stock: $10, $12, $15, $18 over 4 months. What’s the total increase?",
          options: ["$6", "$7", "$8", "$9"],
          answer: "$8",
          explanation: "$18 - $10 = $8."
        },
        {
          question: "A pie chart shows 60% for marketing. If $12,000 is for marketing, what’s the total budget?",
          options: ["$18,000", "$20,000", "$22,000", "$24,000"],
          answer: "$20,000",
          explanation: "$12,000 ÷ 0.6 = $20,000."
        },
        {
          question: "If the rainfall in five months is 5cm, 6cm, 8cm, 4cm, and 7cm, what is the median rainfall?",
          options: ["5 cm", "6 cm", "7 cm", "8 cm"],
          answer: "6 cm",
          explanation: "Arranged: 4, 5, 6, 7, 8 → median = 6."
        },
        {
          question: "A company’s sales are $100k. If product A makes up 35%, how much is from product A?",
          options: ["$30,000", "$35,000", "$40,000", "$45,000"],
          answer: "$35,000",
          explanation: "35% of 100k = 0.35 × 100,000."
        },
        {
          question: "In a bar chart, sales were 400 in 2020 and 600 in 2021. What’s the percent change?",
          options: ["40%", "50%", "60%", "70%"],
          answer: "50%",
          explanation: "(600 - 400)/400 × 100 = 50%."
        },
        {
          question: "What is the average of 18, 22, 25, 20, and 15?",
          options: ["18", "20", "22", "25"],
          answer: "20",
          explanation: "Sum = 100, Average = 100 ÷ 5 = 20."
        },
        {
          question: "If 70 out of 200 respondents liked a product, what percentage liked it?",
          options: ["30%", "35%", "40%", "45%"],
          answer: "35%",
          explanation: "70/200 = 0.35 = 35%."
        },
        {
          question: "If 150 units were sold in Q1 and 200 in Q2, what is the unit increase?",
          options: ["30", "40", "50", "60"],
          answer: "50",
          explanation: "200 - 150 = 50 units."
        },
        {
          question: "A line chart shows temperatures of 22°C, 24°C, 20°C, 26°C, 28°C. What is the highest temperature?",
          options: ["24°C", "26°C", "28°C", "30°C"],
          answer: "28°C",
          explanation: "Max value = 28°C."
        },
        {
          question: "In a class of 40 students, 12 scored above 90. What fraction is this?",
          options: ["3/10", "4/10", "5/10", "6/10"],
          answer: "3/10",
          explanation: "12/40 = 3/10."
        },
        {
          question: "A bar chart shows expenditures: Rent $500, Food $300, Misc $200. What’s the total?",
          options: ["$900", "$1000", "$1100", "$1200"],
          answer: "$1000",
          explanation: "500 + 300 + 200 = $1000."
        },
        {
          question: "Pie chart: 20% transportation. Total expenses = $4000. Transport = ?",
          options: ["$600", "$700", "$800", "$900"],
          answer: "$800",
          explanation: "20% of $4000 = $800."
        },
        {
          question: "A graph shows a population increase from 1,000 to 1,250. What is the percentage increase?",
          options: ["20%", "25%", "30%", "35%"],
          answer: "25%",
          explanation: "250/1000 = 25%."
        },
        {
          question: "A dataset: 10, 20, 30, 40, 50. What’s the mean?",
          options: ["25", "30", "35", "40"],
          answer: "30",
          explanation: "Sum = 150 ÷ 5 = 30."
        },
        {
          question: "Bar chart: Sales = Jan 200, Feb 250, Mar 300. Mode = ?",
          options: ["200", "250", "300", "No mode"],
          answer: "No mode",
          explanation: "All values unique."
        },
        {
          question: "If 3 out of 10 employees are female, what is the percentage?",
          options: ["20%", "30%", "40%", "50%"],
          answer: "30%",
          explanation: "3 ÷ 10 × 100 = 30%."
        },
        {
          question: "If a graph shows daily profit as $100, $150, $100, $200, what is the mode?",
          options: ["$100", "$150", "$200", "No mode"],
          answer: "$100",
          explanation: "$100 appears twice."
        },
        {
          question: "If 5% of 800 people use bicycles, how many is that?",
          options: ["30", "35", "40", "45"],
          answer: "40",
          explanation: "800 × 0.05 = 40."
        },
        {
          question: "If 120 students are split into 3 classes equally, how many per class?",
          options: ["30", "35", "40", "45"],
          answer: "40",
          explanation: "120 ÷ 3 = 40."
        },
        {
          question: "If a company spends $10,000 on salaries out of $25,000 budget, what % is that?",
          options: ["30%", "35%", "40%", "45%"],
          answer: "40%",
          explanation: "10000/25000 × 100 = 40%."
        },
        {
          question: "Pie chart: 10% on utilities. Budget = $8000. Utilities cost?",
          options: ["$700", "$750", "$800", "$850"],
          answer: "$800",
          explanation: "10% × 8000 = $800."
        },
        {
          question: "A graph shows values: 12, 18, 18, 24. What is the mode?",
          options: ["12", "18", "24", "No mode"],
          answer: "18",
          explanation: "18 is most frequent."
        },
        {
          question: "Line chart: Revenue over 4 quarters: 30k, 25k, 35k, 40k. Highest revenue?",
          options: ["$30,000", "$35,000", "$40,000", "$45,000"],
          answer: "$40,000",
          explanation: "Highest value = $40,000."
        },
        {
          question: "A box plot shows the following: minimum = 10, Q1 = 20, median = 30, Q3 = 40, maximum = 50. What is the interquartile range?",
          options: ["10", "15", "20", "25"],
          answer: "20",
          explanation: "Interquartile range = Q3 - Q1 = 40 - 20 = 20."
        },
        {
          question: "If a survey shows that 120 out of 300 people prefer tea, what percentage prefer tea?",
          options: ["35%", "40%", "45%", "50%"],
          answer: "40%",
          explanation: "120 ÷ 300 × 100 = 40%."
        },
        {
          question: "A line graph shows yearly profits for a company: 500, 600, 700, 800. What is the total profit over 4 years?",
          options: ["$2600", "$2700", "$2800", "$2900"],
          answer: "$2700",
          explanation: "500 + 600 + 700 + 800 = $2700."
        },
        {
          question: "If the price of a product increases from $20 to $25, what is the percentage increase?",
          options: ["20%", "25%", "30%", "35%"],
          answer: "25%",
          explanation: "(25 - 20) ÷ 20 × 100 = 25%."
        },
        {
          question: "In a bar chart, the number of books sold in each month is: Jan 200, Feb 250, Mar 300. What is the average number of books sold?",
          options: ["200", "225", "250", "275"],
          answer: "250",
          explanation: "(200 + 250 + 300) ÷ 3 = 750 ÷ 3 = 250."
        },
        {
          question: "A frequency table shows the following data: 3 students got 90%, 4 got 80%, and 2 got 70%. What is the mode?",
          options: ["70%", "80%", "90%", "No mode"],
          answer: "80%",
          explanation: "The most frequent value is 80%."
        },
        {
          question: "In a survey of 100 people, 60 said they like apples, 20 said they like oranges, and 20 said they like bananas. What percentage likes apples?",
          options: ["50%", "60%", "70%", "80%"],
          answer: "60%",
          explanation: "60 ÷ 100 × 100 = 60%."
        },
        {
          question: "If the range of a data set is 10, and the minimum value is 5, what is the maximum value?",
          options: ["12", "15", "17", "20"],
          answer: "15",
          explanation: "Range = maximum - minimum; maximum = 10 + 5 = 15."
        },
        {
          question: "A line graph shows sales in different months: Jan 100, Feb 150, Mar 200, Apr 250. What is the overall increase in sales from Jan to Apr?",
          options: ["$150", "$200", "$250", "$300"],
          answer: "$150",
          explanation: "250 - 100 = 150."
        },
        {
          question: "In a pie chart, 30% represents rent, 40% represents utilities, and 30% represents groceries. What percentage is spent on groceries?",
          options: ["20%", "30%", "40%", "50%"],
          answer: "30%",
          explanation: "30% is labeled for groceries."
        },
        {
          question: "A bar chart shows the sales of 4 different products: A - 500, B - 400, C - 300, D - 200. What is the mode?",
          options: ["200", "300", "400", "500"],
          answer: "No mode",
          explanation: "All values are unique."
        },
        {
          question: "If a company's profit was $200,000 in Year 1, $300,000 in Year 2, and $400,000 in Year 3, what is the total profit over 3 years?",
          options: ["$800,000", "$900,000", "$1,000,000", "$1,100,000"],
          answer: "$900,000",
          explanation: "200,000 + 300,000 + 400,000 = 900,000."
        },
        {
          question: "A set of numbers is: 4, 5, 7, 10, 12. What is the median?",
          options: ["5", "6", "7", "8"],
          answer: "7",
          explanation: "The middle value is 7."
        },
        {
          question: "In a class of 50 students, 25 passed the exam, 15 failed, and 10 are absent. What percentage passed?",
          options: ["40%", "45%", "50%", "55%"],
          answer: "50%",
          explanation: "25 ÷ 50 × 100 = 50%."
        },
        {
          question: "A pie chart shows that 50% of a budget is for food, 30% for rent, and 20% for utilities. If the total budget is $10,000, how much is allocated for rent?",
          options: ["$1,500", "$2,000", "$2,500", "$3,000"],
          answer: "$3,000",
          explanation: "30% of $10,000 = $3,000."
        },
        {
          question: "A frequency distribution table shows the following: 10 students scored between 50-60, 15 scored between 60-70, and 20 scored between 70-80. What is the mode?",
          options: ["50-60", "60-70", "70-80", "No mode"],
          answer: "70-80",
          explanation: "The class with the highest frequency is 70-80."
        },
        {
          question: "If the temperature in January is 5°C, February is 10°C, March is 15°C, and April is 20°C, what is the range?",
          options: ["10°C", "15°C", "20°C", "25°C"],
          answer: "15°C",
          explanation: "Range = 20 - 5 = 15°C."
        },       
      ],
      spatialReasoning: [
        {
          question: "Which shape comes next in the pattern: ▲, ▼, ▲, ▼, ...?",
          options: ["▲", "▼", "■", "●"],
          answer: "▲",
          explanation: "The pattern alternates between up and down triangles. Next is ▲."
        },
        {
          question: "If a cube has 6 faces, how many faces do 3 cubes stacked together have (not glued)?",
          options: ["12", "18", "24", "6"],
          answer: "18",
          explanation: "Each cube has 6 faces. 3 cubes not glued together = 3 × 6 = 18 faces."
        },
        {
          question: "What is the mirror image of the letter 'L'?",
          options: ["It faces right", "It becomes upside down", "It stays the same", "It rotates 90°"],
          answer: "It faces right",
          explanation: "The vertical bar stays, but the foot flips to the right."
        },
        {
          question: "Which 3D shape has a circular base and one vertex?",
          options: ["Cylinder", "Sphere", "Cone", "Cube"],
          answer: "Cone",
          explanation: "A cone has one circular base and tapers to a single point."
        },
        {
          question: "A shape is rotated 90° clockwise. What was a top-facing triangle now faces?",
          options: ["Left", "Right", "Bottom", "Same direction"],
          answer: "Right",
          explanation: "A 90° clockwise rotation turns the top side to the right."
        },
        {
          question: "Which number is missing in the pattern: 2, 4, 8, 16, __?",
          options: ["18", "20", "24", "32"],
          answer: "32",
          explanation: "Each number is multiplied by 2. 16 × 2 = 32."
        },
        {
          question: "What comes next: A, C, E, G, __?",
          options: ["I", "H", "J", "K"],
          answer: "I",
          explanation: "The pattern skips one letter each time (A, C, E...). After G comes I."
        },
        {
          question: "A shape has 4 equal sides and 4 right angles. What is it?",
          options: ["Rectangle", "Square", "Rhombus", "Parallelogram"],
          answer: "Square",
          explanation: "A square has all equal sides and 4 right angles."
        },
        {
          question: "Which of these is different: Cat, Dog, Tiger, Table?",
          options: ["Cat", "Dog", "Tiger", "Table"],
          answer: "Table",
          explanation: "Table is a non-living thing; the rest are animals."
        },
        {
          question: "Which direction is opposite to northwest?",
          options: ["Northeast", "Southeast", "Southwest", "South"],
          answer: "Southeast",
          explanation: "Southeast is diagonally opposite to northwest."
        },
        {
          question: "If 5 + 3 = 28 and 4 + 2 = 20, what is 3 + 1?",
          options: ["12", "14", "16", "10"],
          answer: "12",
          explanation: "Pattern: (a + b) × 2 = answer. So (3 + 1) × 2 = 8, but since it's +4, it's (a + b) × 2 + 4."
        },
        {
          question: "Which shape does not belong: Cube, Sphere, Cone, Circle?",
          options: ["Cube", "Sphere", "Cone", "Circle"],
          answer: "Circle",
          explanation: "Circle is 2D; the others are 3D shapes."
        },
        {
          question: "Which number comes next: 1, 4, 9, 16, __?",
          options: ["25", "30", "36", "20"],
          answer: "25",
          explanation: "The numbers are squares: 1², 2², 3², 4² → next is 5² = 25."
        },
        {
          question: "If a square is folded into a cube, how many faces will it have?",
          options: ["4", "5", "6", "8"],
          answer: "6",
          explanation: "A cube has 6 faces."
        },
        {
          question: "What comes next in the sequence: Red, Blue, Red, Blue, __?",
          options: ["Green", "Red", "Blue", "Yellow"],
          answer: "Red",
          explanation: "Alternating colors: Red, Blue, Red, Blue... Next is Red."
        },
        {
          question: "Find the odd one out: Pen, Pencil, Eraser, Book.",
          options: ["Pen", "Pencil", "Eraser", "Book"],
          answer: "Book",
          explanation: "The others are writing instruments. Book is not."
        },
        {
          question: "If all sides of a triangle are equal, what kind is it?",
          options: ["Right-angled", "Scalene", "Isosceles", "Equilateral"],
          answer: "Equilateral",
          explanation: "Equilateral triangles have all three sides equal."
        },
        {
          question: "What is the next letter: Z, X, V, T, __?",
          options: ["Q", "S", "R", "P"],
          answer: "R",
          explanation: "The letters skip one each time in reverse order: Z, X, V, T → next is R."
        },
        {
          question: "Which of the following is a line of symmetry?",
          options: ["Curved line", "Dotted line", "Mirror line", "Wavy line"],
          answer: "Mirror line",
          explanation: "A mirror line divides a shape into two equal halves."
        },
        {
          question: "Which pair is different: Hot-Cold, Big-Small, Day-Night, Pen-Pencil?",
          options: ["Hot-Cold", "Big-Small", "Day-Night", "Pen-Pencil"],
          answer: "Pen-Pencil",
          explanation: "Others are opposites; Pen and Pencil are similar items."
        },
        {
          question: "How many sides does a hexagon have?",
          options: ["5", "6", "7", "8"],
          answer: "6",
          explanation: "Hexa means 6. A hexagon has six sides."
        },
        {
          question: "What do you get by rotating the letter ‘N’ 180 degrees?",
          options: ["Z", "N", "U", "It looks the same"],
          answer: "It looks the same",
          explanation: "The letter N looks the same when rotated 180°."
        },
        {
          question: "Which comes next in the pattern: 2, 4, 6, 8, __?",
          options: ["10", "12", "9", "11"],
          answer: "10",
          explanation: "Even number pattern. Next after 8 is 10."
        },
        {
          question: "Which shape can roll?",
          options: ["Cube", "Cone", "Cuboid", "Pyramid"],
          answer: "Cone",
          explanation: "Cone has a curved surface that allows rolling."
        },
        {
          question: "What is the shape of a stop sign?",
          options: ["Octagon", "Hexagon", "Pentagon", "Circle"],
          answer: "Octagon",
          explanation: "A stop sign is an 8-sided polygon – an octagon."
        },
        {
          question: "What comes next in the series: 3, 6, 9, 12, ?",
          options: ["14", "15", "16", "18"],
          answer: "15",
          explanation: "The pattern increases by 3 each time: 3 + 3 = 6, 6 + 3 = 9, 9 + 3 = 12, 12 + 3 = 15."
        },
        {
          question: "If in a certain code, DOG is written as EPH, how is CAT written?",
          options: ["DBU", "DBV", "DBW", "DCU"],
          answer: "DBV",
          explanation: "Each letter is shifted by +1: C→D, A→B, T→V."
        },
        {
          question: "Statements: All pens are books. Some books are papers. Conclusion I: Some pens are papers. Conclusion II: All pens are papers.",
          options: ["Only I follows", "Only II follows", "Neither I nor II follows", "Both I and II follow"],
          answer: "Neither I nor II follows",
          explanation: "The relationship between pens and papers is not directly established."
        },
        {
          question: "Find the odd one out: 64, 125, 216, 343, 500",
          options: ["125", "216", "343", "500"],
          answer: "500",
          explanation: "All are perfect cubes except 500."
        },
        {
          question: "If ‘APPLE’ is coded as ‘ELPPA’, how is ‘ORANGE’ coded?",
          options: ["EGNARO", "EGARNO", "ENARGO", "EGRANO"],
          answer: "EGNARO",
          explanation: "The word is reversed."
        },
        {
          question: "What is the next number in the series: 2, 4, 8, 16, ?",
          options: ["30", "32", "36", "24"],
          answer: "32",
          explanation: "Each number is multiplied by 2."
        },
        {
          question: "In a certain code, ‘123’ means ‘bright little boy’; ‘145’ means ‘tall little girl’; what is the code for ‘little’?",
          options: ["1", "2", "3", "4"],
          answer: "1",
          explanation: "‘Little’ is the common word in both and so is code '1'."
        },
        {
          question: "If A = 1, B = 2, ..., Z = 26, what is the sum of the letters in the word ‘DOG’?",
          options: ["26", "30", "24", "28"],
          answer: "30",
          explanation: "D=4, O=15, G=7; 4+15+7 = 26."
        },
        {
          question: "Which word does not belong to the group?",
          options: ["Apple", "Banana", "Mango", "Carrot"],
          answer: "Carrot",
          explanation: "All others are fruits; carrot is a vegetable."
        },
        {
          question: "If 'NIGHT' is written as 'MLHGS', how is 'DARK' written?",
          options: ["CZQJ", "CBQJ", "CBQK", "CZRK"],
          answer: "CBQJ",
          explanation: "Each letter is one less in the alphabet."
        },
        {
          question: "Which number should come next: 1, 4, 9, 16, 25, ?",
          options: ["30", "35", "36", "40"],
          answer: "36",
          explanation: "They are perfect squares: 1², 2², 3², etc."
        },
        {
          question: "Complete the analogy: Book is to Reading as Fork is to?",
          options: ["Drawing", "Writing", "Stirring", "Eating"],
          answer: "Eating",
          explanation: "A book is used for reading; a fork is used for eating."
        },
        {
          question: "Find the odd one out: 2, 3, 5, 7, 11, 14, 17",
          options: ["3", "11", "14", "17"],
          answer: "14",
          explanation: "All except 14 are prime numbers."
        },
        {
          question: "If RED is coded as 729, what is the code for BLUE? (R=18, E=5, D=4 etc.)",
          options: ["2128", "2170", "2040", "2110"],
          answer: "2040",
          explanation: "B=2, L=12, U=21, E=5; sum = 2+12+21+5 = 40 → 40*51 = 2040."
        },
        {
          question: "What comes next: Z, X, V, T, ?",
          options: ["R", "S", "Q", "U"],
          answer: "R",
          explanation: "Reverse alphabet decreasing by 2: Z (26), X (24), V (22), T (20), R (18)."
        },
        {
          question: "If TRAIN is coded as RTANI, how is PLANE coded?",
          options: ["LPANE", "LAPNE", "LPNAE", "LNAEP"],
          answer: "LPANE",
          explanation: "Swap first two letters, rest same: T-R, P-L."
        },
        {
          question: "Which number is different: 121, 144, 169, 196, 225",
          options: ["144", "169", "196", "121"],
          answer: "196",
          explanation: "196 is 14², all others are odd squares."
        },
        {
          question: "Which is the odd one out: Cow, Goat, Deer, Tiger",
          options: ["Cow", "Goat", "Deer", "Tiger"],
          answer: "Tiger",
          explanation: "All are herbivores except Tiger."
        },
        {
          question: "Find the missing number: 3, 6, 11, 18, 27, ?",
          options: ["36", "38", "40", "44"],
          answer: "38",
          explanation: "Difference pattern: +3, +5, +7, +9, next +11."
        },
        {
          question: "If 5 men can do a job in 12 days, how many days will 10 men take?",
          options: ["6", "7", "5", "10"],
          answer: "6",
          explanation: "Work is constant. More men → less time. 5×12 = 10×x ⇒ x = 6."
        },
        {
          question: "If MONDAY is coded as 123456, how is SUNDAY coded?",
          options: ["563456", "789456", "983456", "723456"],
          answer: "723456",
          explanation: "Assign numbers: M=1, O=2, N=3, D=4, A=5, Y=6, S=7, U=8. So SUNDAY = 7 8 3 4 5 6."
        },
        {
          question: "What comes next: 2, 3, 5, 8, 12, 17, ?",
          options: ["23", "24", "25", "26"],
          answer: "23",
          explanation: "Pattern: +1, +2, +3, +4, +5, +6"
        },
        {
          question: "Which number is missing? 7, 14, __, 56, 112",
          options: ["21", "28", "35", "42"],
          answer: "28",
          explanation: "Each number is multiplied by 2: 7×2=14, 14×2=28, etc."
        },
        {
          question: "Pointing to a person, Ravi says, 'He is the son of my grandfather's only son.' Who is the person?",
          options: ["Uncle", "Cousin", "Brother", "Father"],
          answer: "Brother",
          explanation: "Grandfather’s only son is Ravi’s father. The person is his brother."
        },
        {
          question: "How many 9s are there in the following series which are preceded by 3 but not followed by 6? 3 9 6 3 9 2 3 9 5 3 9 6",
          options: ["1", "2", "3", "4"],
          answer: "2",
          explanation: "3 9 not followed by 6 occurs twice: (3 9 2) and (3 9 5)."
        }
      ],      
      mechanicalReasoning: [
        {
          question: "Which simple machine consists of a wheel with a rope or chain around it?",
          options: ["Pulley", "Lever", "Inclined plane", "Screw"],
          answer: "Pulley",
          explanation: "A pulley helps lift loads by changing the direction of the applied force."
        },
        {
          question: "What does a lever with the fulcrum in the middle classify as?",
          options: ["First-class lever", "Second-class lever", "Third-class lever", "Compound lever"],
          answer: "First-class lever",
          explanation: "In a first-class lever, the fulcrum is between the effort and the load."
        },
        {
          question: "Which simple machine is a sloped surface used to raise objects?",
          options: ["Inclined plane", "Screw", "Wheel and axle", "Lever"],
          answer: "Inclined plane",
          explanation: "An inclined plane allows objects to be lifted with less effort."
        },
        {
          question: "What does a gear system do?",
          options: ["Increases speed", "Decreases speed", "Transfers motion and force", "All of the above"],  
          answer: "Transfers motion and force",
          explanation: "Gears are used to transmit rotational motion and change speed or direction."
        },
        {
          question: "What is mechanical advantage?",
          options: ["The ratio of output force to input force", "The distance moved by the effort", "The speed of the machine", "The weight of the load"],  
          answer: "The factor by which a machine multiplies force",
          explanation: "It indicates how much easier a machine makes a task."
        },
        {
          question: "What will happen if a small gear drives a larger gear?",
          options: ["Speed increases, torque decreases", "Speed decreases, torque increases", "No change in speed or torque", "None of the above"],
          answer: "Speed decreases, torque increases",
          explanation: "A smaller gear driving a larger one increases torque but reduces speed."
        },
        {
          question: "How is work calculated in physics?",
          options: ["Force × Time", "Force × Distance", "Mass × Acceleration", "Power × Time"], 
          answer: "Force × Distance",
          explanation: "Work equals the force applied times the distance moved in the direction of the force."
        },
        {
          question: "What kind of energy is stored in a stretched spring?",
          options: ["Kinetic energy", "Potential energy", "Thermal energy", "Chemical energy"], 
          answer: "Potential energy",
          explanation: "A stretched spring stores mechanical potential energy."
        },
        {
          question: "What happens to pressure when force increases on the same area?",
          options: ["Pressure decreases", "Pressure increases", "Pressure remains the same", "Pressure becomes zero"],  
          answer: "Pressure increases",
          explanation: "Pressure = Force / Area, so increasing force increases pressure."
        },
        {
          question: "What is the function of a flywheel?",
          options: ["Stores rotational energy", "Converts linear to rotational motion", "Increases speed", "Decreases speed"],
          answer: "Stores rotational energy",
          explanation: "Flywheels maintain steady rotational motion by storing energy."
        },
        {
          question: "What is torque?",
          options: ["A measure of rotational force", "A measure of linear force", "A type of energy", "A type of power"],
          answer: "A measure of rotational force",
          explanation: "Torque determines how much rotational force is applied."
        },
        {
          question: "What happens to mechanical advantage when using a longer lever arm?",
          options: ["It decreases", "It increases", "It remains the same", "It becomes zero"],
          answer: "It increases",
          explanation: "Longer lever arms provide greater mechanical advantage."
        },
        {
          question: "What is friction?",
          options: ["A force that aids motion", "A force that resists motion", "A type of energy", "A type of power"],
          answer: "A force that resists motion between surfaces",
          explanation: "Friction opposes the movement of objects in contact."
        },
        {
          question: "Why do machines lose efficiency?",
          options: ["Due to friction and heat", "Due to air resistance", "Due to gravity", "Due to inertia"],
          answer: "Due to friction and heat",
          explanation: "Friction causes energy loss as heat, reducing efficiency."
        },
        {
          question: "Which gear rotates faster: the driver or driven gear when the driven is larger?",
          options: ["Driver gear", "Driven gear", "Both rotate at the same speed", "None of the above"],
          answer: "Driver gear",
          explanation: "A smaller gear turns faster than a larger one it drives."
        },
        {
          question: "What does a screw convert rotational motion into?",
          options: ["Linear motion", "Rotational motion", "Centrifugal force", "Centripetal force"],
          answer: "Linear motion",
          explanation: "Turning a screw moves it linearly due to its threads."
        },
        {
          question: "What is the function of a camshaft in an engine?",
          options: ["Regulates fuel flow", "Opens and closes valves", "Controls ignition timing", "Pumps oil"],
          answer: "Opens and closes valves",
          explanation: "The camshaft regulates intake and exhaust valves in an engine."
        },
        {
          question: "Which has higher torque: high or low gear?",
          options: ["High gear", "Low gear", "Both are equal", "None of the above"],
          answer: "Low gear",
          explanation: "Low gear increases torque for easier movement of heavy loads."
        },
        {
          question: "What type of energy transformation occurs in an electric motor?",
          options: ["Mechanical to electrical", "Electrical to mechanical", "Chemical to electrical", "Thermal to mechanical"],
          answer: "Electrical to mechanical",
          explanation: "Motors convert electrical energy into mechanical work."
        },
        {
          question: "What is the unit of force?",
          options: ["Newton", "Joule", "Pascal", "Watt"],
          answer: "Newton",
          explanation: "Force is measured in newtons (N) in the SI system."
        },
        {
          question: "How is power calculated?",
          options: ["Work ÷ Time", "Force × Distance", "Mass × Acceleration", "Energy ÷ Time"],
          answer: "Work ÷ Time",
          explanation: "Power is the rate of doing work."
        },
        {
          question: "What’s the function of bearings in machinery?",
          options: ["Support rotating shafts", "Reduce friction", "Align moving parts", "All of the above"],
          answer: "Reduce friction between moving parts",
          explanation: "Bearings allow smooth rotation by minimizing friction."
        },
        {
          question: "What type of pulley provides mechanical advantage?",
          options: ["Fixed pulley", "Movable pulley", "Compound pulley", "All of the above"],
          answer: "Movable pulley",
          explanation: "Movable pulleys reduce effort required to lift a load."
        },
        {
          question: "What is inertia?",
          options: ["Resistance to change in motion", "Force acting on an object", "Energy of motion", "Mass of an object"],
          answer: "Resistance to change in motion",
          explanation: "Inertia keeps objects at rest or in motion unless acted on."
        },
        {
          question: "Which machine is used to hold things tightly together?",
          options: ["Lever", "Pulley", "Screw", "Inclined plane"],
          answer: "Screw",
          explanation: "Screws are used to hold objects with firm grip using threads."
        },
        {
          question: "Why are inclined planes used in ramps?",
          options: ["To increase speed", "To reduce effort", "To change direction", "To lift heavy loads vertically"],
          answer: "Reduce the force needed to lift objects",
          explanation: "Ramps spread the required lifting force over a longer distance."
        },
        {
          question: "Which tool uses a wedge?",
          options: ["Hammer", "Chisel", "Screwdriver", "Pliers"],
          answer: "A chisel",
          explanation: "Chisels cut material using the wedge principle."
        },
        {
          question: "How does pressure affect hydraulic systems?",
          options: ["Pressure increases with depth", "Pressure decreases with depth", "Pressure is constant", "Pressure is irrelevant"],
          answer: "It is transmitted equally in all directions",
          explanation: "Pascal’s law governs pressure in hydraulic fluids."
        },
        {
          question: "Which lever class has effort in the middle?",
          options: ["First-class lever", "Second-class lever", "Third-class lever", "Compound lever"],
          answer: "Third-class lever",
          explanation: "In third-class levers, effort lies between fulcrum and load."
        },
        {
          question: "What do gears with unequal sizes change?",
          options: ["Speed and direction", "Torque and direction", "Speed and torque", "None of the above"],
          answer: "Speed and torque",
          explanation: "Changing gear sizes affects mechanical advantage and motion speed."
        },
        {
          question: "What is a dead weight tester used for?",
          options: ["Testing electrical circuits", "Calibrating pressure gauges", "Measuring temperature", "Testing fluid viscosity"],
          answer: "Calibrating pressure gauges",
          explanation: "It applies known pressure to test instruments."
        },
        {
          question: "What is the unit of torque?",
          options: ["Newton", "Joule", "Pascal", "Newton-meter"],
          answer: "Newton-meter",
          explanation: "Torque is measured in Newton-meters (Nm)."
        },
        {
          question: "What’s the purpose of a clutch in a vehicle?",
          options: ["To change gears", "To engage/disengage power", "To increase speed", "To reduce friction"],
          answer: "Engages and disengages power transmission",
          explanation: "Clutches control power flow from engine to transmission."
        },
        {
          question: "Which gear setup maintains the same direction of rotation?",
          options: ["Meshed gears", "Belt and pulley system", "Chain drive", "All of the above"],
          answer: "Belt and pulley system",
          explanation: "Unlike meshed gears, belts can maintain rotation direction."
        },
        {
          question: "What does a differential in a car do?",
          options: ["Increases speed", "Distributes power to wheels", "Reduces friction", "Changes direction"],
          answer: "Allows wheels to rotate at different speeds",
          explanation: "It helps in turning without skidding."
        },
        {
          question: "Which principle makes hydraulic brakes effective?",
          options: ["Bernoulli's principle", "Archimedes' principle", "Pascal's law", "Newton's law"],
          answer: "Pascal’s Law",
          explanation: "Equal pressure distribution ensures strong braking force."
        },
        {
          question: "What is efficiency in machines?",
          options: ["Output energy ÷ input energy", "Input energy ÷ output energy", "Output work ÷ input work", "Input work ÷ output work"],
          answer: "Useful output ÷ input energy",
          explanation: "Efficiency measures how effectively input is converted to output."
        },
        {
          question: "What kind of lever is a pair of tweezers?",
          options: ["First-class lever", "Second-class lever", "Third-class lever", "Compound lever"],
          answer: "Third-class lever",
          explanation: "Effort is applied between the fulcrum and load in tweezers."
        },
        {
          question: "Which simple machine helps change direction of a force?",
          options: ["Lever", "Inclined plane", "Pulley", "Screw"],
          answer: "Pulley",
          explanation: "Pulleys redirect force to make lifting easier."
        },
        {
          question: "What does increasing the thread pitch of a screw do?",
          options: ["Increases speed", "Decreases speed", "Increases mechanical advantage", "Decreases mechanical advantage"],
          answer: "Increases speed, reduces mechanical advantage",
          explanation: "Larger pitch means more movement but less force advantage."
        },
        {
          question: "What is the main function of a gear train?",
          options: ["To increase speed", "To decrease speed", "To transmit motion", "To change direction"],
          answer: "Transmit motion and modify speed/torque",
          explanation: "Gear trains connect gears for complex motion control."
        },
        {
          question: "What is a winch used for?",
          options: ["Lifting or pulling loads", "Cutting materials", "Measuring pressure", "Cooling engines"],
          answer: "Lifting or pulling loads",
          explanation: "Winches use rotating drums to move heavy objects."
        },
        {
          question: "What effect does lubrication have on machines?",
          options: ["Increases friction", "Reduces friction", "Increases wear", "Decreases efficiency"],
          answer: "Reduces friction and wear",
          explanation: "Lubricants enhance machine efficiency and lifespan."
        },
        {
          question: "Which component converts reciprocating motion into rotary motion?",
          options: ["Cam", "Crankshaft", "Piston", "Flywheel"],
          answer: "Crankshaft",
          explanation: "Used in engines to convert piston motion to rotation."
        },
        {
          question: "How does a larger gear affect torque?",
          options: ["Increases speed", "Decreases speed", "Increases torque", "Decreases torque"],
          answer: "Increases torque",
          explanation: "Larger gears offer higher turning force but slower speed."
        },
        {
          question: "What is centripetal force?",
          options: ["Force acting outward", "Force acting inward", "Force acting tangentially", "None of the above"],
          answer: "Force directed toward the center of a circular path",
          explanation: "Centripetal force keeps objects in circular motion."
        },
        {
          question: "What does a ratchet mechanism do?",
          options: ["Allows motion in both directions", "Allows motion in one direction only", "Locks in place", "None of the above"],
          answer: "Allows motion in one direction only",
          explanation: "Prevents reverse movement while allowing forward motion."
        },
        {
          question: "Which force causes objects to resist sliding?",
          options: ["Gravity", "Friction", "Inertia", "Centrifugal force"],
          answer: "Friction",
          explanation: "Friction opposes relative motion between surfaces."
        },
        {
          question: "What happens when you increase the length of a ramp?",
          options: ["Effort needed to lift a load increases", "Effort needed to lift a load decreases", "No change in effort", "Load becomes heavier"],
          answer: "Effort needed to lift a load decreases",
          explanation: "A longer inclined plane reduces the slope and required force."
        },
        {
          question: "Why are gears often lubricated?",
          options: ["To increase friction", "To reduce wear and friction", "To increase speed", "To decrease speed"],
          answer: "To reduce wear and friction",
          explanation: "Lubrication ensures smoother gear motion and longevity."
        }
      ],      
      clericalAptitude: [
        {
          question: "Which of the following is the next number in the series: 2, 4, 8, 16, ...?",
          options: ["20", "24", "30", "32"],
          answer: "32",
          explanation: "The numbers in the series are doubling each time. Therefore, the next number is 16 × 2 = 32."
        },
        {
          question: "What is the value of (3 + 5) × 2?",
          options: ["10", "12", "16", "20"],
          answer: "16",
          explanation: "First, calculate the sum inside the parentheses: 3 + 5 = 8. Then multiply: 8 × 2 = 16."
      },
      {
          question: "If a shirt costs $45 and is on sale for 30% off, what is the sale price?",
          options: ["$31.50", "$33.00", "$35.00", "$36.50"],
          answer: "$31.50",
          explanation: "The discount is 30% of $45, which is $45 × 0.30 = $13.50. The sale price is $45 - $13.50 = $31.50."
      },
      {
          question: "Which of the following is the odd one out: 2, 4, 6, 8, 9, 10?",
          options: ["2", "4", "6", "8"],
          answer: "9",
          explanation: "All the numbers except 9 are even, while 9 is odd."
      },
      {
          question: "If a person runs 8 kilometers every day, how far will they run in 12 days?",
          options: ["80 kilometers", "88 kilometers", "96 kilometers", "100 kilometers"],
          answer: "96 kilometers",
          explanation: "The total distance run is 8 kilometers × 12 days = 96 kilometers."
      },
      {
          question: "What is 7 times 8 minus 10?",
          options: ["42", "46", "50", "54"],
          answer: "46",
          explanation: "First, calculate 7 × 8 = 56. Then subtract 10: 56 - 10 = 46."
      },
      {
          question: "What is the next number in the series: 1, 4, 9, 16, 25, ?",
          options: ["30", "32", "34", "36"],
          answer: "36",
          explanation: "The pattern follows the squares of consecutive integers: 1², 2², 3², 4², 5², 6²."
      },
      {
          question: "If a person buys 4 apples at $0.50 each, how much will they spend?",
          options: ["$1", "$1.50", "$2", "$2.50"],
          answer: "$2",
          explanation: "The total cost is 4 × $0.50 = $2."
      },
      {
          question: "What is the area of a triangle with a base of 6 cm and a height of 8 cm?",
          options: ["24 cm²", "30 cm²", "36 cm²", "48 cm²"],
          answer: "24 cm²",
          explanation: "The area of a triangle is calculated as (base × height) ÷ 2. So, (6 × 8) ÷ 2 = 24 cm²."
      },
      {
          question: "How many 12-minute intervals are there in 3 hours?",
          options: ["10", "12", "15", "18"],
          answer: "15",
          explanation: "There are 60 minutes in an hour, so 3 hours is 180 minutes. Dividing 180 by 12 gives 15 intervals."
      },
        {
          question: "What is the next letter in the series: A, C, E, G, ...?",
          options: ["H", "I", "J", "K"],
          answer: "I",
          explanation: "The pattern follows the alternating letters of the alphabet: A, C, E, G, I."
        },
        {
          question: "Which number should replace the question mark: 3, 6, 12, 24, ?",
          options: ["36", "48", "60", "72"],
          answer: "48",
          explanation: "Each number in the series is multiplied by 2. 24 × 2 = 48."
        },
        {
          question: "If a train travels 60 miles in 1 hour, how long will it take to travel 180 miles?",
          options: ["2 hours", "3 hours", "4 hours", "5 hours"],
          answer: "3 hours",
          explanation: "Since the train travels 60 miles in 1 hour, to travel 180 miles, it will take 180 ÷ 60 = 3 hours."
        },
        {
          question: "What is the missing number in the series: 1, 4, 9, 16, ?",
          options: ["20", "21", "22", "25"],
          answer: "25",
          explanation: "The pattern follows the squares of consecutive integers: 1², 2², 3², 4², 5²."
        },
        {
          question: "Which of the following is the odd one out: Apple, Orange, Banana, Carrot?",
          options: ["Apple", "Orange", "Banana", "Carrot"],
          answer: "Carrot",
          explanation: "All the options except carrot are fruits, while carrot is a vegetable."
        },
        {
          question: "If a pencil costs 20 cents, how much would 5 pencils cost?",
          options: ["50 cents", "75 cents", "1 dollar", "1.25 dollars"],
          answer: "1 dollar",
          explanation: "The total cost is 20 cents × 5 = 100 cents = 1 dollar."
        },
        {
          question: "What is the next number in the series: 1, 3, 6, 10, 15, ...?",
          options: ["20", "21", "22", "23"],
          answer: "21",
          explanation: "The pattern increases by consecutive integers: +2, +3, +4, +5, so the next number is 15 + 6 = 21."
        },
        {
          question: "What is the missing number in the series: 2, 5, 10, 17, ?",
          options: ["24", "25", "26", "27"],
          answer: "26",
          explanation: "The numbers in the series increase by consecutive odd numbers: +3, +5, +7, so the next number is 17 + 9 = 26."
        },
        {
          question: "What is the total of 3/4 and 5/6?",
          options: ["1/2", "7/12", "19/12", "1"],
          answer: "19/12",
          explanation: "To add fractions, find the common denominator. 3/4 = 9/12 and 5/6 = 10/12. Adding them gives 9/12 + 10/12 = 19/12."
        },
        {
          question: "Which number is next in the series: 1, 3, 9, 27, ...?",
          options: ["54", "81", "100", "121"],
          answer: "81",
          explanation: "The numbers in the series are multiplied by 3 each time. 27 × 3 = 81."
        },
        {
          question: "How many days are there in 4 weeks?",
          options: ["24", "26", "28", "30"],
          answer: "28",
          explanation: "There are 7 days in a week, so 4 weeks will have 4 × 7 = 28 days."
        },
        {
          question: "If a book costs $15 and there is a 10% discount, how much will the book cost after the discount?",
          options: ["$12.50", "$13.50", "$14.00", "$15.50"],
          answer: "$13.50",
          explanation: "A 10% discount on $15 is $1.50. The discounted price is $15 - $1.50 = $13.50."
        },
        {
          question: "What is the missing number in the series: 1, 8, 27, 64, ?",
          options: ["100", "125", "150", "175"],
          answer: "125",
          explanation: "The numbers are the cubes of consecutive integers: 1³, 2³, 3³, 4³, so the next number is 5³ = 125."
        },
        {
          question: "What is the sum of 75, 124, and 65?",
          options: ["264", "265", "266", "267"],
          answer: "264",
          explanation: "The sum of the numbers is 75 + 124 + 65 = 264."
        },
        {
          question: "Which is the next number in the series: 2, 5, 10, 17, 26, ?",
          options: ["35", "36", "37", "38"],
          answer: "37",
          explanation: "The pattern increases by consecutive odd numbers: +3, +5, +7, +9, so the next number is 26 + 11 = 37."
        },
        {
          question: "What is 25% of 200?",
          options: ["25", "50", "75", "100"],
          answer: "50",
          explanation: "25% of 200 is 200 × 0.25 = 50."
        },
        {
          question: "Which letter comes next in the series: A, C, E, G, ?",
          options: ["H", "I", "J", "K"],
          answer: "I",
          explanation: "The letters are following a pattern of skipping one letter in the alphabet: A, C, E, G, I."
        },
        {
          question: "What is the area of a rectangle with length 8 cm and width 5 cm?",
          options: ["30 cm²", "35 cm²", "40 cm²", "45 cm²"],
          answer: "40 cm²",
          explanation: "The area of a rectangle is calculated by multiplying the length by the width: 8 × 5 = 40 cm²."
        },
        {
          question: "How many 15-minute intervals are there in 2 hours?",
          options: ["6", "8", "10", "12"],
          answer: "8",
          explanation: "There are 60 minutes in an hour, so 2 hours is 120 minutes. Dividing 120 by 15 gives 8 intervals."
        },
        {
          question: "What is the next number in the series: 1, 4, 9, 16, ?",
          options: ["20", "21", "22", "25"],
          answer: "25",
          explanation: "The numbers in the series are the squares of consecutive integers: 1², 2², 3², 4², 5²."
        },
        {
          question: "If 5 books cost $60, what is the cost of 8 books?",
          options: ["$72", "$80", "$90", "$96"],
          answer: "$96",
          explanation: "The cost of 1 book is $60 ÷ 5 = $12. So, the cost of 8 books is $12 × 8 = $96."
        },
        {
          question: "Which number comes next in the series: 1, 4, 9, 16, 25, ?",
          options: ["30", "32", "34", "36"],
          answer: "36",
          explanation: "The pattern follows the squares of consecutive integers: 1², 2², 3², 4², 5², 6²."
        },
        {
          question: "What is the next number in the series: 5, 10, 20, 40, ?",
          options: ["50", "60", "70", "80"],
          answer: "80",
          explanation: "The numbers in the series are doubling each time. 40 × 2 = 80."
        },
        {
          question: "If a shop sells an item for $30 after giving a 25% discount, what was the original price?",
          options: ["$35", "$37.50", "$40", "$42.50"],
          answer: "$40",
          explanation: "Let the original price be x. 75% of x = $30, so x = $30 ÷ 0.75 = $40."
        },
        {
          question: "If a box contains 12 red balls and 8 blue balls, what fraction of the balls are red?",
          options: ["1/2", "2/5", "3/5", "4/5"],
          answer: "3/5",
          explanation: "The total number of balls is 12 + 8 = 20. The fraction of red balls is 12/20 = 3/5."
        },
        {
          question: "What is the next number in the series: 2, 5, 10, 17, ?",
          options: ["24", "25", "26", "27"],
          answer: "26",
          explanation: "The pattern increases by consecutive odd numbers: +3, +5, +7, +9, so the next number is 17 + 9 = 26."
        },
        {
          question: "Which number is next in the series: 1, 2, 6, 24, ?",
          options: ["60", "120", "180", "240"],
          answer: "120",
          explanation: "The numbers are factorials: 1!, 2!, 3!, 4!, so the next number is 5! = 120."
        },
        {
          question: "If a person earns $50 per day, how much will they earn in 25 days?",
          options: ["$1000", "$1100", "$1200", "$1250"],
          answer: "$1250",
          explanation: "The total earnings are $50 × 25 = $1250."
        },
        {
          question: "If a book has 320 pages and a person reads 20 pages every day, how many days will it take to finish the book?",
          options: ["10 days", "12 days", "14 days", "16 days"],
          answer: "16 days",
          explanation: "The total number of days is 320 ÷ 20 = 16 days."
        },
        {
          question: "What is the value of (5 × 6) + (8 × 2)?",
          options: ["30", "32", "38", "46"],
          answer: "46",
          explanation: "First, calculate 5 × 6 = 30 and 8 × 2 = 16. Then add them together: 30 + 16 = 46."
        },
        {
          question: "What is the total cost of 5 pens if each pen costs $2.50?",
          options: ["$10.00", "$12.50", "$15.00", "$20.00"],
          answer: "$12.50",
          explanation: "The total cost is 5 × $2.50 = $12.50."
        },
        {
          question: "What is the sum of 35 and 45?",
          options: ["70", "75", "80", "85"],
          answer: "80",
          explanation: "The sum is 35 + 45 = 80."
        },
        {
          question: "What is the next number in the series: 1, 3, 7, 15, ?",
          options: ["25", "27", "31", "33"],
          answer: "31",
          explanation: "The numbers in the series double and add 1: (1 × 2) + 1 = 3, (3 × 2) + 1 = 7, (7 × 2) + 1 = 15, (15 × 2) + 1 = 31."
        },
        {
          question: "Which is the odd one out: Cat, Dog, Fish, Bird?",
          options: ["Cat", "Dog", "Fish", "Bird"],
          answer: "Fish",
          explanation: "All the animals except fish are land animals, while fish is aquatic."
        },
        {
          question: "How much is 12% of 250?",
          options: ["20", "25", "30", "35"],
          answer: "30",
          explanation: "12% of 250 is 250 × 0.12 = 30."
        },
        {
          question: "How many seconds are there in 2 hours?",
          options: ["3600", "5400", "7200", "8400"],
          answer: "7200",
          explanation: "There are 60 seconds in a minute, and 60 minutes in an hour. So, 60 × 60 × 2 = 7200 seconds."
        },
        {
          question: "If a train travels at a speed of 72 km/h, how long will it take to travel 360 km?",
          options: ["4 hours", "5 hours", "6 hours", "7 hours"],
          answer: "5 hours",
          explanation: "Time is calculated by distance ÷ speed. 360 ÷ 72 = 5 hours."
        },
        {
          question: "What is the area of a square with a side length of 6 cm?",
          options: ["24 cm²", "30 cm²", "36 cm²", "42 cm²"],
          answer: "36 cm²",
          explanation: "The area of a square is side², so 6 × 6 = 36 cm²."
        },
        {
          question: "What is the result of 4² + 3²?",
          options: ["16", "20", "21", "25"],
          answer: "25",
          explanation: "4² = 16 and 3² = 9. Adding them gives 16 + 9 = 25."
        },
        {
          question: "What is the total of 98 and 103?",
          options: ["198", "199", "200", "201"],
          answer: "201",
          explanation: "The sum of the numbers is 98 + 103 = 201."
        }
      ],
      criticalThinking: [
        {
          question: "Which of the following statements is most logical?",
          options: ["All birds can fly.", "Some birds cannot fly.", "All animals can swim.", "Some animals cannot swim."],
          answer: "The sun rises in the east.",
          explanation: "This statement is a universally accepted truth based on daily experience and scientific evidence."
        },
        {
          question: "If all cats are animals and some animals are dogs, can we conclude that some cats are dogs?",
          options: ["Yes", "No", "Maybe", "Not enough information"],
          answer: "No",
          explanation: "Cats and dogs are distinct species, so even though they both belong to the animal kingdom, no cats can be dogs."
        },
        {
          question: "Which of the following would be an example of inductive reasoning?",
          options: ["All swans are white.", "Some swans are not white.", "This swan is white, so all swans must be white.", "This swan is black, so all swans must be black."],
          answer: "Every time I eat pizza, I feel happy. Therefore, pizza makes me happy.",
          explanation: "Inductive reasoning involves making generalizations based on repeated observations."
        },
        {
          question: "If a person who is always late promises to be on time for an event, should you trust their promise?",
          options: ["Yes", "No", "Maybe", "It depends"],
          answer: "No",
          explanation: "Since the person has a history of being late, their promise is less likely to be trustworthy."
        },
        {
          question: "Which of the following conclusions is most valid based on the statement 'All fish swim, and a goldfish is a fish'?",
          options: ["All fish can fly.", "Goldfish cannot swim.", "Goldfish are a type of fish.", "Goldfish are not animals."],
          answer: "A goldfish swims.",
          explanation: "This is a logical deduction based on the general rule that all fish swim."
        },
        {
          question: "If the sun rises in the east, and you observe the sun rising in the east every day, what can you conclude?",
          options: ["The sun rises in the west.", "The sun rises in the east every day.", "The sun does not rise.", "The sun rises at different times."],
          answer: "The sun always rises in the east.",
          explanation: "The pattern of observation supports the conclusion that the sun rises in the east every day."
        },
        {
          question: "Which of the following arguments is an example of a false dilemma?",
          options: ["You can either be rich or poor.", "You can be both rich and poor.", "You can be neither rich nor poor.", "You can be rich, poor, or middle class."],
          answer: "You are either with us or against us.",
          explanation: "A false dilemma presents only two extreme choices when there could be other alternatives."
        },
        {
          question: "If you know that all roses are flowers and all flowers are plants, can you conclude that all roses are plants?",
          options: ["Yes", "No", "Maybe", "Not enough information"],
          answer: "Yes",
          explanation: "This is a valid logical conclusion because roses are included in both categories: flowers and plants."
        },
        {
          question: "Which of the following is an example of a hasty generalization?",
          options: ["I met two people from New York, and they were rude. Therefore, everyone from New York is rude.", "I met two people from California, and they were nice. Therefore, everyone from California is nice.", "I met one person from Texas, and they were friendly. Therefore, everyone from Texas is friendly.", "I met three people from Florida, and they were all polite. Therefore, everyone from Florida is polite."],
          answer: "I met two people from New York, and they were rude. Therefore, everyone from New York is rude.",
          explanation: "This is a hasty generalization because it draws a broad conclusion based on a limited sample size."
        },
        {
          question: "If a person always wears a blue shirt on Mondays, can you predict they will wear a blue shirt next Monday?",
          options: ["Yes", "No", "Maybe", "Not enough information"],
          answer: "Yes, based on the pattern.",
          explanation: "Inductive reasoning allows us to make a prediction based on observed patterns, though it's not certain."
        },
        {
          question: "Which of the following is a sound argument?",
          options: ["All humans need oxygen to live. John is a human. Therefore, John needs oxygen to live.", "If it rains, the ground will be wet. It is not raining. Therefore, the ground is not wet.", "If all cats are mammals, and some mammals are dogs, then all cats are dogs.", "If you eat too much sugar, you will get sick. John eats sugar. Therefore, John will get sick."],
          answer: "All humans need oxygen to live, and John is a human. Therefore, John needs oxygen to live.",
          explanation: "This argument is both valid (follows logical structure) and sound (based on true premises)."
        },
        {
          question: "If you know that all squares are rectangles, can you conclude that all rectangles are squares?",
          options: ["Yes", "No", "Maybe", "Not enough information"],
          answer: "No",
          explanation: "This is a logical fallacy. While all squares are rectangles, not all rectangles are squares."
        },
        {
          question: "If a study finds that 90% of people who exercise regularly have lower stress levels, what can you conclude?",
          options: ["Exercise reduces stress for everyone.", "Exercise may help reduce stress for most people.", "Exercise has no effect on stress levels.", "Stress levels are unrelated to exercise."],
          answer: "Exercise may help reduce stress, but it is not guaranteed for everyone.",
          explanation: "This conclusion is based on statistical evidence but does not guarantee the same result for every individual."
        },
        {
          question: "Which of the following is a valid assumption for the statement 'If it rains, the ground will be wet'?",
          options: ["The ground is always wet.", "Rain is the only cause of wet ground.", "If it doesn't rain, the ground will not be wet.", "Rain can make the ground wet."],
          answer: "The ground is wet because it rained.",
          explanation: "This is a reasonable assumption because the statement suggests that rain causes the ground to become wet."
        },
        {
          question: "Which is a counterexample to the statement 'All birds can fly'?",
          options: ["Eagles", "Sparrows", "Penguins", "Parrots"],
          answer: "Penguins cannot fly.",
          explanation: "Penguins are birds that cannot fly, which contradicts the statement that all birds can fly."
        },
        {
          question: "If an experiment shows that a new drug is effective in reducing symptoms in 80% of patients, what can be concluded?",
          options: ["The drug is effective for all patients.", "The drug is effective for most patients.", "The drug is ineffective.", "The drug is harmful."],
          answer: "The drug is effective for most patients, but not for everyone.",
          explanation: "This conclusion is based on the statistical results of the experiment, acknowledging that not all patients benefit equally."
        },
        {
          question: "Which of the following is an example of a logical contradiction?",
          options: ["It is raining and it is not raining at the same time.", "The sky is blue.", "All dogs are friendly.", "Some cats are not pets."],
          answer: "The sky is both blue and green at the same time in the same place.",
          explanation: "This is a contradiction because the sky cannot be both blue and green simultaneously under normal conditions."
        },
        {
          question: "Which of the following is an assumption made by the statement 'If it’s snowing, the temperature must be below freezing'?",
          options: ["Snow can only occur at freezing temperatures.", "Snow can occur at any temperature.", "The temperature is always below freezing when it snows.", "Snow is a sign of cold weather."],
          answer: "Snow can only occur when the temperature is below freezing.",
          explanation: "This is an assumption because, in reality, snow can occur at slightly above-freezing temperatures under certain conditions."
        },
        {
          question: "What is the flaw in the argument: 'Everyone who has ever tried this diet has lost weight. Therefore, this diet works for everyone.'?",
          options: ["This is a false cause fallacy.", "This is an appeal to authority.", "This is a hasty generalization.", "This is a slippery slope."],
          answer: "This argument is based on a hasty generalization.",
          explanation: "The argument assumes the diet works for everyone based on a small sample and ignores individual differences."
        },
        {
          question: "If the statement 'All birds have wings' is true, and a penguin is a bird, can we conclude that penguins have wings?",
          options: ["Yes", "No", "Maybe", "Not enough information"],
          answer: "Yes",
          explanation: "The statement is about the presence of wings, not the ability to fly. Penguins are an example of birds with wings."
        },
        {
          question: "Which of the following would be the best conclusion if 'most students in a class enjoy reading'?",
          options: ["All students in the class enjoy reading.", "Some students in the class do not enjoy reading.", "Most students in the class dislike reading.", "None of the students in the class enjoy reading."],
          answer: "It’s likely that many students in the class enjoy reading.",
          explanation: "This conclusion follows from the observation that most students enjoy reading, but it acknowledges that some students may not."
        },
        {
          question: "What is the problem with the argument: 'Eating too much sugar leads to obesity. John eats a lot of sugar, so he will become obese.'?",
          options: ["This is a false cause fallacy.", "This is an appeal to authority.", "This is a hasty generalization.", "This is a slippery slope."],
          answer: "This is a cause-and-effect fallacy.",
          explanation: "While sugar can contribute to obesity, it is not the only factor, and the argument overlooks other potential causes."
        },
        {
          question: "If two people are arguing and one says 'You're wrong because I said so,' what is the flaw in their reasoning?",
          options: ["This is a false cause fallacy.", "This is an appeal to authority.", "This is a hasty generalization.", "This is a slippery slope."],
          answer: "This is an example of an appeal to authority.",
          explanation: "The person is using their own statement as evidence, without providing logical reasoning or supporting evidence."
        },
        {
          question: "Which of the following is an example of a slippery slope fallacy?",
          options: ["If we allow students to retake tests, soon they will expect to retake all their assignments.", "If it rains, the ground will be wet.", "If you eat too much sugar, you will get sick.", "If you study hard, you will pass the exam."],
          answer: "If we allow students to retake tests, soon they will expect to retake all their assignments.",
          explanation: "This is a slippery slope fallacy because it assumes that one event will inevitably lead to extreme consequences without supporting evidence."
        },
        {
          question: "Which of the following is an assumption in the statement 'All dogs are friendly'?",
          options: ["All dogs are the same.", "Some dogs are not friendly.", "All animals are friendly.", "Dogs are not dangerous."],
          answer: "All dogs exhibit friendly behavior.",
          explanation: "The statement assumes that all dogs are friendly, but this may not be true for every individual dog."
        },
        {
          question: "What is the conclusion in the argument: 'If a person eats unhealthy foods regularly, they may develop health problems. John eats unhealthy foods regularly. Therefore, John may develop health problems.'?",
          options: ["John eats unhealthy foods.", "John is healthy.", "John may develop health problems.", "Eating unhealthy foods is bad."],
          answer: "John may develop health problems.",
          explanation: "The conclusion logically follows from the premises that eating unhealthy foods regularly can lead to health problems."
        },
        {
          question: "Which of the following is an example of a strong argument?",
          options: ["Exercise is good for you because it makes you feel good.", "Exercise improves physical health, and studies show it can also boost mental health.", "Exercise is important because everyone says so.", "Exercise is bad for you."],
          answer: "Exercise improves physical health, and studies show it can also boost mental health.",
          explanation: "This argument is strong because it is supported by evidence from studies and includes multiple benefits."
        },
        {
          question: "Which of the following is an example of reasoning by analogy?",
          options: ["Learning a new language is like learning to play an instrument.", "If it rains, the ground will be wet.", "Eating vegetables is healthy, so people who eat vegetables are healthy.", "This medicine is effective because it’s approved by doctors."],
          answer: "Learning a new language is like learning to play an instrument. Both require practice and repetition.",
          explanation: "This argument compares two different things (language and playing an instrument) based on shared characteristics."
        },
        {
          question: "Which of the following conclusions is most valid based on the statement 'If it rains, the ground will be wet'?",
          options: ["The ground is always wet.", "The ground is wet because it rained.", "If it doesn't rain, the ground will not be wet.", "Rain can make the ground wet."],
          answer: "The ground is wet because it rained.",
          explanation: "This is a reasonable conclusion based on the cause-and-effect relationship provided in the statement."
        },
        {
          question: "Which of the following is an assumption made by the statement 'Eating vegetables is healthy, so people who eat vegetables are healthy'?",
          options: ["Eating vegetables is the only factor that determines a person's health.", "Eating vegetables is not healthy.", "People who eat vegetables are unhealthy.", "Eating vegetables is bad for you."],
          answer: "Eating vegetables is the only factor that determines a person's health.",
          explanation: "This assumption overlooks other factors like exercise, sleep, and genetics that contribute to a person's health."
        },
        {
          question: "What is the flaw in the argument: 'This medicine is effective because it’s approved by doctors'?",
          options: ["This is a false cause fallacy.", "This is an appeal to authority.", "This is a hasty generalization.", "This is a slippery slope."],
          answer: "This is an appeal to authority fallacy.",
          explanation: "Just because a doctor approves something does not automatically make it effective. Evidence and reasoning are needed."
        },
        {
          question: "What is the best conclusion if 'Most people who sleep 8 hours a night report feeling rested'?",
          options: ["Sleeping 8 hours a night is the only way to feel rested.", "Sleeping 8 hours a night is likely to make people feel rested.", "Most people need more than 8 hours of sleep.", "Sleeping less than 8 hours is unhealthy."],
          answer: "Sleeping 8 hours a night is likely to make people feel rested, but individual differences exist.",
          explanation: "This conclusion is based on the fact that most people report feeling rested with 8 hours of sleep, though there may be exceptions."
        },
        {
          question: "Which of the following is an example of an ad hominem fallacy?",
          options: ["You can't trust his argument about climate change because he's not a scientist.", "The sky is blue because it is daytime.", "If you don't support this policy, you must hate the environment.", "Everyone should exercise because it's good for your health."],
          answer: "You can't trust his argument about climate change because he's not a scientist.",
          explanation: "An ad hominem fallacy attacks the person making the argument rather than addressing the argument itself."
        },
        {
          question: "Which of the following is an example of an appeal to emotion?",
          options: ["You should donate to this charity because children are starving.", "This product is the best because it has the most features.", "If you don't buy this car, you'll regret it.", "Everyone is buying this phone."],
          answer: "You should donate to this charity because children are starving.",
          explanation: "This is an appeal to emotion because it tries to persuade the audience by evoking feelings of sympathy, rather than providing logical reasons."
        },
        {
          question: "If two events are correlated, does that mean one causes the other?",
          options: ["Yes", "No", "Maybe", "Not enough information"],
          answer: "No",
          explanation: "Correlation does not imply causation. Two events being related does not mean one caused the other."
        },
        {
          question: "Which of the following is an example of circular reasoning?",
          options: ["The Bible is true because it says it is true.", "If you don't believe in God, you will go to hell.", "Everyone should exercise because it's good for your health.", "If it rains, the ground will be wet."],
          answer: "The Bible is true because it says it is true.",
          explanation: "Circular reasoning uses its own premise as its conclusion without any external support."
        },
        {
          question: "If someone says 'There is no proof that aliens exist, so they don’t exist,' what type of reasoning are they using?",
          options: ["Inductive reasoning", "Deductive reasoning", "Argument from ignorance", "False cause"],
          answer: "Argument from ignorance",
          explanation: "This is an argument from ignorance because it assumes something is false simply because it hasn’t been proven true."
        },
        {
          question: "Which of the following is an example of the sunk cost fallacy?",
          options: ["I’ve already spent $100 on this concert ticket, so I should go even though I don’t feel like it.", "I’ve already spent $100 on this concert ticket, so I should sell it.", "I’ve already spent $100 on this concert ticket, so I should give it away.", "I’ve already spent $100 on this concert ticket, so I should buy another one."],
          answer: "I’ve already spent $100 on this concert ticket, so I should go even though I don’t feel like it.",
          explanation: "The sunk cost fallacy occurs when past investments are used to justify continuing a course of action, even if it’s not beneficial."
        },
        {
          question: "Which of the following best describes a false cause fallacy?",
          options: ["Assuming that because two things are correlated, one must cause the other.", "Assuming that because something is popular, it must be true.", "Assuming that because something is old, it must be true.", "Assuming that because something is new, it must be better."],
          answer: "I wore my lucky socks and won the game, so my socks must have caused my win.",
          explanation: "This is a false cause fallacy because it falsely attributes a causal relationship between two events without evidence."
        },
        {
          question: "If a company releases a product that has a major flaw, but only 10% of users are affected, should the company recall the product?",
          options: ["Yes", "No", "Maybe", "Not enough information"],
          answer: "Yes",
          explanation: "While only 10% of users are affected, it is better for the company to address the issue before it escalates."
        },
        {
          question: "Which of the following conclusions can you draw from the statement: 'Most people who exercise regularly live longer than those who don’t'?",
          options: ["Exercise is the only factor that contributes to a longer life.", "Exercise likely contributes to a longer life, but it is not the only factor.", "Living longer is solely due to exercise.", "Exercise has no effect on lifespan."],
          answer: "Exercise likely contributes to a longer life, but it is not the only factor.",
          explanation: "This conclusion follows logically from the correlation between exercise and longer lifespan, though other factors may also be at play."
        },
        {
          question: "What type of logical error occurs in the argument: 'You should believe me because I’m an expert'?",
          options: ["This is a false cause fallacy.", "This is an appeal to authority.", "This is a hasty generalization.", "This is a slippery slope."],
          answer: "Appeal to authority",
          explanation: "This is an appeal to authority fallacy, where the argument relies on the status of the speaker rather than on the merits of the evidence."
        },
        {
          question: "If two politicians argue that they both care about the environment, but one’s actions contradict their words, which is the stronger indicator of their commitment?",
          options: ["Their words", "Their actions", "Both are equally important", "Neither is important"],
          answer: "Their actions",
          explanation: "Actions speak louder than words. If the politician’s actions contradict their claims, it undermines their argument."
        },
        {
          question: "Which of the following is an example of confirmation bias?",
          options: ["Only looking for news articles that support your views on climate change and ignoring others.", "Reading all news articles equally.", "Listening to both sides of an argument.", "Considering evidence from multiple sources."],
          answer: "Only looking for news articles that support your views on climate change and ignoring others.",
          explanation: "Confirmation bias occurs when people selectively search for or interpret information that confirms their pre-existing beliefs."
        },
        {
          question: "What is the main flaw in the argument: 'I’ve never been robbed, so crime must not be a problem in our city'?",
          options: ["This is a false cause fallacy.", "This is an appeal to authority.", "This is a hasty generalization.", "This is an anecdotal fallacy."],
          answer: "Anecdotal evidence",
          explanation: "This argument uses personal experience as evidence, which is a form of anecdotal reasoning that ignores broader data."
        },
        {
          question: "If someone argues that 'My grandfather smoked a pack of cigarettes every day and lived to be 90, so smoking can’t be bad for you,' what kind of logical fallacy is this?",
          options: ["This is a false cause fallacy.", "This is an appeal to authority.", "This is a hasty generalization.", "This is an anecdotal fallacy."],
          answer: "Anecdotal fallacy",
          explanation: "This argument relies on a single personal example to dismiss the general health risks of smoking, which is a form of anecdotal fallacy."
        },
        {
          question: "What would be a more logical approach if you want to prove that a new diet is effective in weight loss?",
          options: ["Conduct a survey of people who have tried the diet.", "Conduct a controlled experiment with a large, random sample.", "Ask a nutritionist for their opinion.", "Read testimonials from people who have lost weight."],
          answer: "Conduct a controlled experiment with a large, random sample to compare the diet with other methods.",
          explanation: "This approach would provide statistically valid results to support the effectiveness of the diet."
        },
        {
          question: "Which of the following would be the most logical conclusion based on the observation that 'Many successful companies are led by women'?",
          options: ["Women are always better leaders than men.","Being a woman does not preclude someone from being a successful leader.","All companies led by women are successful.","Only women can run successful companies."],
          answer: "Being a woman does not preclude someone from being a successful leader.",
          explanation: "This conclusion follows from the observation but does not imply that being a woman directly leads to success."
        },
        {
          question: "What is the flaw in the argument: 'Either we ban all cars to reduce pollution, or our planet will be destroyed'?",
          options: ["This is a false cause fallacy.", "This is an appeal to authority.", "This is a hasty generalization.", "This is a false dilemma."],
          answer: "False dilemma",
          explanation: "This argument presents two extreme options, ignoring the possibility of other solutions to pollution."
        },
        {
          question: "What is the problem with the argument: 'I don’t believe in global warming because I don’t see it happening'?",
          options: ["This is a false cause fallacy.", "This is an appeal to authority.", "This is a hasty generalization.", "This is an argument from ignorance."],
          answer: "Argument from ignorance",
          explanation: "This is an argument from ignorance fallacy, assuming something is false because it hasn't been personally observed."
        }
      ],
      generalKnowledge: [
        {
          question: "Who was the first President of the United States?",
          options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
          answer: "George Washington",
          explanation: "George Washington served as the first President of the United States from 1789 to 1797."
        },
        {
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Rome"],
          answer: "Paris",
          explanation: "Paris is the capital city and the most populous city of France."
        },
        {
          question: "In which year did World War II end?",
          options: ["1940", "1945", "1950", "1960"],
          answer: "1945",
          explanation: "World War II ended in 1945 with the unconditional surrender of Nazi Germany in May and Japan in September."
        },
        {
          question: "What is the largest continent by area?",
          options: ["Africa", "Asia", "Europe", "North America"],
          answer: "Asia",
          explanation: "Asia is the largest continent, covering approximately 30% of Earth's total land area."
        },
        {
          question: "Who wrote the play 'Romeo and Juliet'?",
          options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
          answer: "William Shakespeare",
          explanation: "William Shakespeare wrote the play 'Romeo and Juliet', which is one of his most famous works."
        },
        {
          question: "What is the smallest country in the world by land area?",
          options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
          answer: "Vatican City",
          explanation: "Vatican City is the smallest independent state in the world by land area, measuring just 44 hectares."
        },
        {
          question: "What is the longest river in the world?",
          options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
          answer: "The Nile River",
          explanation: "The Nile River, stretching over 6,650 kilometers, is the longest river in the world."
        },
        {
          question: "What is the capital of Japan?",
          options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
          answer: "Tokyo",
          explanation: "Tokyo is the capital and largest city of Japan, known for its modernity and rich cultural heritage."
        },
        {
          question: "What is the largest ocean on Earth?",
          options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          answer: "Pacific Ocean",
          explanation: "The Pacific Ocean is the largest ocean, covering more than 63 million square miles."
        },
        {
          question: "Who discovered electricity?",
          options: ["Isaac Newton", "Albert Einstein", "Benjamin Franklin", "Nikola Tesla"],
          answer: "Benjamin Franklin",
          explanation: "Benjamin Franklin is credited with discovering electricity through his famous kite experiment in 1752."
        },
        {
          question: "What is the most spoken language in the world?",
          options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
          answer: "Mandarin Chinese",
          explanation: "Mandarin Chinese is the most spoken language in the world, with over 1 billion native speakers."
        },
        {
          question: "Which planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Venus"],
          answer: "Mars",
          explanation: "Mars is often called the Red Planet due to its reddish appearance caused by iron oxide (rust) on its surface."
        },
        {
          question: "In which year did the Titanic sink?",
          options: ["1905", "1910", "1912", "1915"],
          answer: "1912",
          explanation: "The Titanic sank on April 15, 1912, after hitting an iceberg in the North Atlantic Ocean."
        },
        {
          question: "What is the national currency of the United States?",
          options: ["Euro", "Pound Sterling", "US Dollar", "Yen"],
          answer: "US Dollar",
          explanation: "The United States uses the US Dollar (USD) as its official currency."
        },
        {
          question: "Who painted the Mona Lisa?",
          options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
          answer: "Leonardo da Vinci",
          explanation: "The Mona Lisa is a famous painting created by the Italian artist Leonardo da Vinci."
        },
        {
          question: "What is the capital of Australia?",
          options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
          answer: "Canberra",
          explanation: "Canberra is the capital city of Australia, chosen to be the capital in 1908."
        },
        {
          question: "What is the largest desert in the world?",
          options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
          answer: "The Sahara Desert",
          explanation: "The Sahara Desert, located in North Africa, is the largest hot desert in the world."
        },
        {
          question: "What is the name of the first manned mission to land on the moon?",
          options: ["Apollo 10", "Apollo 11", "Apollo 12", "Apollo 13"],
          answer: "Apollo 11",
          explanation: "Apollo 11 was the first successful mission to land humans on the moon on July 20, 1969."
        },
        {
          question: "Which country is known as the Land of the Rising Sun?",
          options: ["China", "Japan", "South Korea", "Thailand"],
          answer: "Japan",
          explanation: "Japan is often called the 'Land of the Rising Sun' because it lies to the east of China and the sunrise is visible there first."
        },
        {
          question: "What is the largest island in the world?",
          options: ["Australia", "Greenland", "New Guinea", "Borneo"],
          answer: "Greenland",
          explanation: "Greenland is the largest island in the world by land area, though it is an autonomous territory of Denmark."
        },
        {
          question: "What is the capital of Canada?",
          options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
          answer: "Ottawa",
          explanation: "Ottawa is the capital city of Canada, located in the province of Ontario."
        },
        {
          question: "What is the chemical symbol for gold?",
          options: ["Ag", "Au", "Pb", "Fe"],
          answer: "Au",
          explanation: "The chemical symbol for gold is 'Au', derived from the Latin word 'aurum'."
        },
        {
          question: "Who was the first woman to fly solo across the Atlantic Ocean?",
          options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"],
          answer: "Amelia Earhart",
          explanation: "Amelia Earhart became the first woman to fly solo across the Atlantic Ocean in 1932."
        },
        {
          question: "What is the longest mountain range in the world?",
          options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
          answer: "The Andes",
          explanation: "The Andes is the longest mountain range in the world, stretching over 7,000 kilometers along the western edge of South America."
        },
        {
          question: "Which country invented the pizza?",
          options: ["Italy", "Greece", "United States", "Mexico"],
          answer: "Italy",
          explanation: "Italy is credited with inventing pizza, particularly the modern version of pizza in Naples in the 18th century."
        },
        {
          question: "Which country has the highest population in the world?",
          options: ["India", "China", "United States", "Indonesia"],
          answer: "China",
          explanation: "China has the largest population in the world, with over 1.4 billion people."
        },
        {
          question: "What is the most widely used programming language?",
          options: ["Python", "Java", "C++", "JavaScript"],
          answer: "JavaScript",
          explanation: "JavaScript is the most widely used programming language, particularly for web development."
        },
        {
          question: "What is the capital city of India?",
          options: ["Mumbai", "New Delhi", "Kolkata", "Bangalore"],
          answer: "New Delhi",
          explanation: "New Delhi is the capital city of India and serves as the seat of the Indian government."
        },
        {
          question: "Who is known as the Father of Modern Physics?",
          options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
          answer: "Albert Einstein",
          explanation: "Albert Einstein is known as the Father of Modern Physics for his groundbreaking work, including the theory of relativity."
        },
        {
          question: "What is the official language of Brazil?",
          options: ["Spanish", "Portuguese", "English", "French"],
          answer: "Portuguese",
          explanation: "Portuguese is the official language of Brazil, a result of its colonial history under Portugal."
        },
        {
          question: "What is the tallest building in the world?",
          options: ["Shanghai Tower", "Burj Khalifa", "One World Trade Center", "Taipei 101"],
          answer: "Burj Khalifa",
          explanation: "Burj Khalifa, located in Dubai, United Arab Emirates, is the tallest building in the world, standing at 828 meters."
        },
        {
          question: "Who developed the theory of evolution by natural selection?",
          options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Albert Einstein"],
          answer: "Charles Darwin",
          explanation: "Charles Darwin developed the theory of evolution by natural selection, which he published in his book 'On the Origin of Species' in 1859."
        },
        {
          question: "What is the currency of Japan?",
          options: ["Yen", "Won", "Dollar", "Euro"],
          answer: "Yen",
          explanation: "The currency of Japan is the Yen (JPY), which is abbreviated as ¥."
        },
        {
          question: "Which city is known as the Big Apple?",
          options: ["Los Angeles", "Chicago", "New York City", "Miami"],
          answer: "New York City",
          explanation: "New York City is known as the 'Big Apple', a nickname that became popular in the 1920s and has stuck ever since."
        },
        {
          question: "What is the hardest natural substance on Earth?",
          options: ["Gold", "Diamond", "Iron", "Quartz"],
          answer: "Diamond",
          explanation: "Diamond is the hardest known natural material on Earth, and it ranks 10 on the Mohs scale of hardness."
        },
        {
          question: "What is the speed of light?",
          options: ["300,000 km/s", "150,000 km/s", "299,792 km/s", "1,000,000 km/s"],
          answer: "299,792,458 meters per second",
          explanation: "The speed of light in a vacuum is approximately 299,792,458 meters per second."
        },
        {
          question: "What is the capital of Italy?",
          options: ["Florence", "Venice", "Rome", "Milan"],
          answer: "Rome",
          explanation: "Rome is the capital and largest city of Italy, known for its ancient history and cultural landmarks."
        },
        {
          question: "Who was the first man to walk on the moon?",
          options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
          answer: "Neil Armstrong",
          explanation: "Neil Armstrong was the first person to walk on the moon during the Apollo 11 mission in 1969."
        },
        {
          question: "Which country is the largest producer of coffee?",
          options: ["Colombia", "Brazil", "Vietnam", "Ethiopia"],
          answer: "Brazil",
          explanation: "Brazil is the largest producer of coffee in the world, accounting for about a third of the global supply."
        },
        {
          question: "What is the smallest bone in the human body?",
          options: ["Stapes", "Incus", "Malleus", "Coccyx"],
          answer: "The stapes",
          explanation: "The stapes bone, located in the middle ear, is the smallest bone in the human body."
        },
        {
          question: "Which ocean is the largest?",
          options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          answer: "Pacific Ocean",
          explanation: "The Pacific Ocean is the largest ocean on Earth, covering more than 63 million square miles."
        },
        {
          question: "What is the chemical symbol for oxygen?",
          options: ["O", "O2", "Ox", "O3"],
          answer: "O",
          explanation: "The chemical symbol for oxygen is 'O', and it is a vital element for life on Earth."
        },
        {
          question: "Which scientist developed the laws of motion?",
          options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
          answer: "Isaac Newton",
          explanation: "Isaac Newton developed the three laws of motion, which form the foundation of classical mechanics."
        },
        {
          question: "Who invented the telephone?",
          options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
          answer: "Alexander Graham Bell",
          explanation: "Alexander Graham Bell is credited with inventing the telephone in 1876, revolutionizing communication."
        },
        {
          question: "What is the largest animal on Earth?",
          options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
          answer: "Blue Whale",
          explanation: "The blue whale is the largest animal on Earth, reaching lengths of up to 100 feet and weighing as much as 200 tons."
        },
        {
          question: "What is the capital of Germany?",
          options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
          answer: "Berlin",
          explanation: "Berlin is the capital and largest city of Germany, known for its rich history and culture."
        },
        {
          question: "Which element has the chemical symbol 'O'?",
          options: ["Osmium", "Oxygen", "Oganesson", "Ozone"],
          answer: "Oxygen",
          explanation: "Oxygen is a chemical element with the symbol 'O' and is essential for respiration in most life forms on Earth."
        },
        {
          question: "Which famous scientist developed the theory of general relativity?",
          options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
          answer: "Albert Einstein",
          explanation: "Albert Einstein developed the theory of general relativity, which describes the gravitational forces in terms of spacetime curvature."
        },
        {
          question: "What is the longest river in South America?",
          options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
          answer: "Amazon River",
          explanation: "The Amazon River is the longest river in South America and the second longest in the world, flowing through the Amazon Rainforest."
        },
        {
          question: "Who is the author of the Harry Potter series?",
          options: ["J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis", "Stephen King"],
          answer: "J.K. Rowling",
          explanation: "J.K. Rowling is the British author who wrote the famous Harry Potter series, which has become a global phenomenon."
        }
      ],      
    };
// Function to display questions based on selected category
function showCategoryQuestions(category) {
  const content = document.getElementById('content');
  const categoryQuestions = questions[category];
  content.innerHTML = '';  // Clear any existing content

  if (categoryQuestions && categoryQuestions.length > 0) {
      categoryQuestions.forEach((q, index) => {
          const questionElement = document.createElement('div');
          questionElement.classList.add('question');
          questionElement.innerHTML = `
              <h3>Question ${index + 1}: ${q.question}</h3>
              <p><strong>Answer:</strong> ${q.answer}</p>
              <em>Explanation:</em>
              <p>${q.explanation}</p>
          `;
          content.appendChild(questionElement);
      });
  } else {
      content.innerHTML = '<p>No questions available for this category.</p>';
  }

  // Add Start Test button specific to the category
  const startTestButton = document.createElement('button');
  startTestButton.classList.add('start-test-btn');
  startTestButton.textContent = `Start Test`;
  startTestButton.onclick = function() {
      startTest(category);
  };
  content.appendChild(startTestButton);

  // ✅ Scroll the content container to the top
  content.scrollTop = 0;
  window.scrollTo({
      top: content.offsetTop,
      behavior: 'smooth'
  });
}

// Function to handle the Start Test button click
function startTest(category) {
  sessionStorage.setItem("selectedCategory", category);
  localStorage.setItem("questions", JSON.stringify(questions));
  location.href = "test.html";
}

function toggleCategory() {
    const category = document.getElementById('categoryContainer');
    const mainContainer = document.querySelector('.main-container');

    category.classList.toggle('hidden');
    mainContainer.classList.toggle('full-width');
}
