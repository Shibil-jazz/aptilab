export const APTITUDE_QUESTIONS = [
  // --- QUANTITATIVE APTITUDE (20 Questions: Easy, Medium, Hard) ---
  {
    id: 'q1',
    category: 'Quantitative Aptitude',
    topic: 'Time and Distance',
    difficulty: 'easy',
    questionText: 'A train 150 meters long passes a telegraph post in 12 seconds. How long will it take to pass a bridge 250 meters long?',
    options: ['20 seconds', '32 seconds', '28 seconds', '35 seconds'],
    correctAnswer: 1,
    explanation: 'Speed of train = 150m / 12s = 12.5 m/s. Total distance = 150m + 250m = 400m. Total time = 400m / 12.5 m/s = 32 seconds.'
  },
  {
    id: 'q2',
    category: 'Quantitative Aptitude',
    topic: 'Profit and Loss',
    difficulty: 'easy',
    questionText: 'If an item is sold for $480 at a profit of 20%, what was its original cost price?',
    options: ['$380', '$400', '$420', '$440'],
    correctAnswer: 1,
    explanation: 'Selling Price = Cost Price × (1 + 0.20). $480 = Cost Price × 1.20. Cost Price = 480 / 1.20 = $400.'
  },
  {
    id: 'q3',
    category: 'Quantitative Aptitude',
    topic: 'Work and Time',
    difficulty: 'easy',
    questionText: 'Alice can complete a study project in 10 days, while Bob can complete it in 15 days. Working together, how many days will they take?',
    options: ['5 days', '6 days', '7.5 days', '8 days'],
    correctAnswer: 1,
    explanation: 'Combined 1-day work = 1/10 + 1/15 = 5/30 = 1/6. Together they finish in 6 days.'
  },
  {
    id: 'q4',
    category: 'Quantitative Aptitude',
    topic: 'Percentages',
    difficulty: 'medium',
    questionText: 'A student scored 35% marks and failed by 15 marks. Another student scored 45% marks and obtained 25 marks more than passing. What is the maximum mark?',
    options: ['300', '350', '400', '500'],
    correctAnswer: 2,
    explanation: 'Pass mark = 0.35M + 15 = 0.45M - 25 => 0.10M = 40 => M = 400.'
  },
  {
    id: 'q5',
    category: 'Quantitative Aptitude',
    topic: 'Averages & Ratios',
    difficulty: 'easy',
    questionText: 'The ratio of ages of A and B is 3:5. If the sum of their ages is 48 years, what will be the ratio of their ages after 6 years?',
    options: ['2:3', '3:4', '4:5', '7:9'],
    correctAnswer: 0,
    explanation: 'Sum of parts = 8. 1 part = 6 years. Age A = 18, Age B = 30. After 6 years, A = 24 and B = 36. Ratio = 24:36 = 2:3.'
  },
  {
    id: 'q6',
    category: 'Quantitative Aptitude',
    topic: 'Simple Interest',
    difficulty: 'easy',
    questionText: 'A sum of $2,000 earns simple interest of $240 in 3 years. What is the annual rate of interest?',
    options: ['3%', '4%', '5%', '6%'],
    correctAnswer: 1,
    explanation: 'SI = (P × R × T) / 100. $240 = (2000 × R × 3) / 100 = 60R. R = 240 / 60 = 4%.'
  },
  {
    id: 'q7',
    category: 'Quantitative Aptitude',
    topic: 'Compound Interest',
    difficulty: 'medium',
    questionText: 'What is the compound interest on $1,000 for 2 years at 10% per annum, compounded annually?',
    options: ['$200', '$210', '$220', '$250'],
    correctAnswer: 1,
    explanation: 'Amount = P(1 + R/100)^2 = 1000 × (1.10)^2 = 1000 × 1.21 = $1,210. Interest = 1210 - 1000 = $210.'
  },
  {
    id: 'q8',
    category: 'Quantitative Aptitude',
    topic: 'Pipes and Cisterns',
    difficulty: 'medium',
    questionText: 'Pipe A can fill a tank in 4 hours, and Pipe B can empty it in 6 hours. If both are opened together, how long will it take to fill the tank?',
    options: ['8 hours', '10 hours', '12 hours', '14 hours'],
    correctAnswer: 2,
    explanation: 'Net filling rate per hour = 1/4 - 1/6 = (3 - 2) / 12 = 1/12. Time taken = 12 hours.'
  },
  {
    id: 'q9',
    category: 'Quantitative Aptitude',
    topic: 'Probability',
    difficulty: 'medium',
    questionText: 'Two dice are rolled simultaneously. What is the probability of getting a sum equal to 8?',
    options: ['1/6', '5/36', '1/9', '7/36'],
    correctAnswer: 1,
    explanation: 'Total outcomes = 36. Outcomes with sum 8: (2,6), (3,5), (4,4), (5,3), (6,2) -> 5 outcomes. Probability = 5/36.'
  },
  {
    id: 'q10',
    category: 'Quantitative Aptitude',
    topic: 'Permutations & Combinations',
    difficulty: 'hard',
    questionText: 'In how many different ways can the letters of the word "MATHS" be arranged?',
    options: ['60', '120', '240', '720'],
    correctAnswer: 1,
    explanation: '"MATHS" has 5 distinct letters. Number of arrangements = 5! = 5 × 4 × 3 × 2 × 1 = 120.'
  },
  {
    id: 'q11',
    category: 'Quantitative Aptitude',
    topic: 'Speed & Boats',
    difficulty: 'medium',
    questionText: 'A boat travels 24 km downstream in 2 hours and 16 km upstream in 4 hours. What is the speed of the boat in still water?',
    options: ['6 km/h', '8 km/h', '10 km/h', '12 km/h'],
    correctAnswer: 1,
    explanation: 'Downstream speed = 24/2 = 12 km/h. Upstream speed = 16/4 = 4 km/h. Speed in still water = (12 + 4) / 2 = 8 km/h.'
  },
  {
    id: 'q12',
    category: 'Quantitative Aptitude',
    topic: 'Ratios & Mixtures',
    difficulty: 'hard',
    questionText: 'A mixture of 60 liters contains milk and water in the ratio 3:2. How much water must be added to make the ratio 1:1?',
    options: ['6 liters', '10 liters', '12 liters', '15 liters'],
    correctAnswer: 2,
    explanation: 'Milk = 60 × 3/5 = 36L, Water = 60 × 2/5 = 24L. For 1:1 ratio, Water must equal Milk (36L). Water to add = 36 - 24 = 12 liters.'
  },
  {
    id: 'q13',
    category: 'Quantitative Aptitude',
    topic: 'Simplification',
    difficulty: 'easy',
    questionText: 'Evaluate: (18 × 15) - (12 × 10) + (144 ÷ 12)',
    options: ['150', '162', '174', '180'],
    correctAnswer: 1,
    explanation: '(18×15) = 270; (12×10) = 120; (144÷12) = 12. Result = 270 - 120 + 12 = 162.'
  },
  {
    id: 'q14',
    category: 'Quantitative Aptitude',
    topic: 'Number Systems',
    difficulty: 'medium',
    questionText: 'Which of the following numbers is completely divisible by 11?',
    options: ['12456', '14520', '13310', '15642'],
    correctAnswer: 2,
    explanation: 'Test 13310: (1 + 3 + 0) - (3 + 1) = 4 - 4 = 0. Divisible by 11.'
  },
  {
    id: 'q15',
    category: 'Quantitative Aptitude',
    topic: 'HCF and LCM',
    difficulty: 'easy',
    questionText: 'The product of two numbers is 432 and their HCF is 6. What is their LCM?',
    options: ['36', '48', '72', '108'],
    correctAnswer: 2,
    explanation: 'HCF × LCM = Product of numbers. 6 × LCM = 432 => LCM = 432 / 6 = 72.'
  },
  {
    id: 'q16',
    category: 'Quantitative Aptitude',
    topic: 'Mensuration',
    difficulty: 'hard',
    questionText: 'The perimeter of a square is equal to the circumference of a circle of radius 7 cm. What is the side of the square?',
    options: ['10 cm', '11 cm', '14 cm', '22 cm'],
    correctAnswer: 1,
    explanation: 'Circumference = 2 × (22/7) × 7 = 44 cm. Perimeter of square = 4 × Side = 44 => Side = 11 cm.'
  },
  {
    id: 'q17',
    category: 'Quantitative Aptitude',
    topic: 'Averages',
    difficulty: 'easy',
    questionText: 'The average of 5 consecutive odd numbers is 27. What is the largest of these numbers?',
    options: ['29', '31', '33', '35'],
    correctAnswer: 1,
    explanation: 'Middle number = 27. The 5 numbers are 23, 25, 27, 29, 31. Largest = 31.'
  },
  {
    id: 'q18',
    category: 'Quantitative Aptitude',
    topic: 'Age Problems',
    difficulty: 'medium',
    questionText: 'Five years ago, the average age of A, B, and C was 20 years. Now, with D joining them, their average age is 24 years. What is D\'s present age?',
    options: ['21 years', '23 years', '25 years', '27 years'],
    correctAnswer: 0,
    explanation: '5 years ago sum (A+B+C) = 60. Present sum (A+B+C) = 60 + 15 = 75. Present sum (A+B+C+D) = 24 × 4 = 96. D\'s age = 96 - 75 = 21 years.'
  },
  {
    id: 'q19',
    category: 'Quantitative Aptitude',
    topic: 'Logarithms',
    difficulty: 'hard',
    questionText: 'If log₂ x + log₄ x = 3, what is the value of x?',
    options: ['2', '4', '8', '16'],
    correctAnswer: 1,
    explanation: 'log₄ x = (1/2)log₂ x. So log₂ x + (1/2)log₂ x = 3 => (3/2)log₂ x = 3 => log₂ x = 2 => x = 2² = 4.'
  },
  {
    id: 'q20',
    category: 'Quantitative Aptitude',
    topic: 'Clocks and Calendar',
    difficulty: 'medium',
    questionText: 'What is the angle between the hour hand and minute hand of a clock at 3:30?',
    options: ['75°', '85°', '90°', '105°'],
    correctAnswer: 0,
    explanation: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.'
  },

  // --- LOGICAL REASONING (20 Questions: Easy, Medium, Hard) ---
  {
    id: 'q21',
    category: 'Logical Reasoning',
    topic: 'Number Series',
    difficulty: 'easy',
    questionText: 'Find the next number in the pattern: 7, 10, 16, 25, 37, ?',
    options: ['50', '52', '54', '56'],
    correctAnswer: 1,
    explanation: 'Differences: +3, +6, +9, +12. Next difference is +15. 37 + 15 = 52.'
  },
  {
    id: 'q22',
    category: 'Logical Reasoning',
    topic: 'Coding & Decoding',
    difficulty: 'easy',
    questionText: 'If "STUDY" is written as "TVUEZ", how is "LEARN" coded in that same system?',
    options: ['MFBSO', 'MDBQO', 'MDCSP', 'KDBQM'],
    correctAnswer: 0,
    explanation: 'Each letter is shifted +1 alphabet step. L->M, E->F, A->B, R->S, N->O. Result: MFBSO.'
  },
  {
    id: 'q23',
    category: 'Logical Reasoning',
    topic: 'Blood Relations',
    difficulty: 'medium',
    questionText: 'Pointing to a photograph of a boy, Maya said, "He is the son of the only daughter of my grandfather." How is Maya related to the boy?',
    options: ['Sister', 'Mother', 'Aunt', 'Cousin'],
    correctAnswer: 0,
    explanation: 'Only daughter of Maya\'s grandfather = Maya\'s mother. The boy is the son of Maya\'s mother => Maya\'s brother => Maya is his Sister.'
  },
  {
    id: 'q24',
    category: 'Logical Reasoning',
    topic: 'Syllogism',
    difficulty: 'medium',
    questionText: 'Statements:\n1. All notebooks are books.\n2. All books are papers.\nConclusions:\nI. All notebooks are papers.\nII. Some papers are notebooks.',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Neither I nor II follows', 'Both Conclusion I and II follow'],
    correctAnswer: 3,
    explanation: 'Notebooks ⊂ Books ⊂ Papers. Thus All notebooks are papers (I) and Some papers are notebooks (II).'
  },
  {
    id: 'q25',
    category: 'Logical Reasoning',
    topic: 'Direction Sense',
    difficulty: 'easy',
    questionText: 'Sam walks 10 km North, turns Right and walks 5 km, then turns Right again and walks 10 km. How far is he from starting point?',
    options: ['5 km East', '5 km West', '10 km East', '15 km South'],
    correctAnswer: 0,
    explanation: '10 km North + 5 km East - 10 km South = 5 km East from starting position.'
  },
  {
    id: 'q26',
    category: 'Logical Reasoning',
    topic: 'Analogy',
    difficulty: 'easy',
    questionText: 'Architect : Building :: Sculptor : ?',
    options: ['Canvas', 'Statue', 'Museum', 'Chisel'],
    correctAnswer: 1,
    explanation: 'An architect creates a building; a sculptor creates a statue.'
  },
  {
    id: 'q27',
    category: 'Logical Reasoning',
    topic: 'Letter Series',
    difficulty: 'medium',
    questionText: 'What comes next in the sequence: ABC, EFG, IJK, MNO, ?',
    options: ['PQR', 'QRS', 'STU', 'TUV'],
    correctAnswer: 1,
    explanation: 'Triplets of consecutive letters skipping 1 letter: ABC (skip D) EFG (skip H) IJK (skip L) MNO (skip P) QRS.'
  },
  {
    id: 'q28',
    category: 'Logical Reasoning',
    topic: 'Seating Arrangement',
    difficulty: 'hard',
    questionText: 'Five friends P, Q, R, S, T sit in a row facing North. S is between T and Q. Q is immediately to the left of R. P is at the left end. Who is in the middle?',
    options: ['P', 'Q', 'S', 'T'],
    correctAnswer: 3,
    explanation: 'P is at left end: P _ _ _ _. Q is left of R: Q R. S between T and Q: T S Q R. Arrangement: P T S Q R. Middle person is S/T depending on index: Position 3 is S (T S Q R).'
  },
  {
    id: 'q29',
    category: 'Logical Reasoning',
    topic: 'Classification / Odd One Out',
    difficulty: 'easy',
    questionText: 'Find the odd one out among: Square, Triangle, Rectangle, Cube.',
    options: ['Square', 'Triangle', 'Rectangle', 'Cube'],
    correctAnswer: 3,
    explanation: 'Cube is a 3D solid shape; Square, Triangle, and Rectangle are 2D plane figures.'
  },
  {
    id: 'q30',
    category: 'Logical Reasoning',
    topic: 'Venn Diagrams',
    difficulty: 'medium',
    questionText: 'Which diagram best represents the relationship between: Animals, Dogs, and Cats?',
    options: ['Two non-overlapping circles inside one large circle', 'Three intersecting circles', 'One circle inside another circle', 'Three separate concentric circles'],
    correctAnswer: 0,
    explanation: 'Dogs and Cats are separate sets, both entirely contained within the set of Animals.'
  },
  {
    id: 'q31',
    category: 'Logical Reasoning',
    topic: 'Data Sufficiency',
    difficulty: 'hard',
    questionText: 'What is the value of x? \nStatement 1: x² = 25\nStatement 2: x > 0',
    options: ['Statement 1 alone is sufficient', 'Statement 2 alone is sufficient', 'Both statements together are necessary', 'Neither statement is sufficient'],
    correctAnswer: 2,
    explanation: 'Statement 1 alone gives x = ±5. Adding Statement 2 (x > 0) uniquely determines x = 5. Both statements together are necessary.'
  },
  {
    id: 'q32',
    category: 'Logical Reasoning',
    topic: 'Clock Angle',
    difficulty: 'hard',
    questionText: 'How many times do the hands of a clock coincide in 24 hours?',
    options: ['22 times', '24 times', '44 times', '48 times'],
    correctAnswer: 0,
    explanation: 'The hands coincide 11 times in every 12 hours. In 24 hours, they coincide 22 times.'
  },
  {
    id: 'q33',
    category: 'Logical Reasoning',
    topic: 'Statement & Assumption',
    difficulty: 'medium',
    questionText: 'Statement: "Enroll now for our coaching program to secure your rank." \nAssumption: Students desire to secure a top rank.',
    options: ['Assumption is implicit', 'Assumption is not implicit', 'Either implicit or not', 'Neither implicit'],
    correctAnswer: 0,
    explanation: 'An advertisement assumes that the audience desires the outcome being promised.'
  },
  {
    id: 'q34',
    category: 'Logical Reasoning',
    topic: 'Matrix Puzzle',
    difficulty: 'medium',
    questionText: 'If 3 + 4 = 21, 4 + 5 = 36, 5 + 6 = 55, then 6 + 7 = ?',
    options: ['72', '78', '84', '91'],
    correctAnswer: 1,
    explanation: 'Pattern: a + b -> a × (a + b). 3×7=21, 4×9=36, 5×11=55, 6×13=78.'
  },
  {
    id: 'q35',
    category: 'Logical Reasoning',
    topic: 'Cube Painting',
    difficulty: 'hard',
    questionText: 'A cube painted red on all faces is cut into 64 smaller equal cubes. How many smaller cubes have exactly two painted faces?',
    options: ['8', '16', '24', '32'],
    correctAnswer: 2,
    explanation: 'For a 4x4x4 cube (n=4), cubes with 2 painted faces lie on edges: 12 × (n-2) = 12 × (4-2) = 24.'
  },
  {
    id: 'q36',
    category: 'Logical Reasoning',
    topic: 'Order & Ranking',
    difficulty: 'easy',
    questionText: 'Rohan ranks 7th from the top and 28th from the bottom in a class. How many students are there in the class?',
    options: ['34', '35', '36', '37'],
    correctAnswer: 0,
    explanation: 'Total students = Top Rank + Bottom Rank - 1 = 7 + 28 - 1 = 34.'
  },
  {
    id: 'q37',
    category: 'Logical Reasoning',
    topic: 'Coding Patterns',
    difficulty: 'medium',
    questionText: 'In a code, APPLE is 50. What is ORANGE in that code?',
    options: ['56', '60', '65', '70'],
    correctAnswer: 1,
    explanation: 'Sum of alphabet positions: A(1)+P(16)+P(16)+L(12)+E(5) = 50. For ORANGE: O(15)+R(18)+A(1)+N(14)+G(7)+E(5) = 60.'
  },
  {
    id: 'q38',
    category: 'Logical Reasoning',
    topic: 'Symbol Operations',
    difficulty: 'easy',
    questionText: 'If "+" means "×", "-" means "÷", "×" means "+", and "÷" means "-", evaluate: 15 + 3 - 5 × 4 ÷ 2',
    options: ['11', '13', '15', '17'],
    correctAnswer: 0,
    explanation: '15 × 3 ÷ 5 + 4 - 2 = (45 ÷ 5) + 4 - 2 = 9 + 4 - 2 = 11.'
  },
  {
    id: 'q39',
    category: 'Logical Reasoning',
    topic: 'Cause & Effect',
    difficulty: 'medium',
    questionText: 'Statement I: Heavy rain flooded major city streets.\nStatement II: Traffic movement was delayed by several hours.',
    options: ['I is cause, II is effect', 'II is cause, I is effect', 'Both are independent causes', 'Both are effects of independent causes'],
    correctAnswer: 0,
    explanation: 'Heavy street flooding (cause) directly leads to traffic movement delays (effect).'
  },
  {
    id: 'q40',
    category: 'Logical Reasoning',
    topic: 'Logical Deductions',
    difficulty: 'hard',
    questionText: 'If A is taller than B, B is taller than C, and D is taller than A, who is the shortest?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 2,
    explanation: 'Order from tallest to shortest: D > A > B > C. C is the shortest.'
  },

  // --- VERBAL ABILITY (18 Questions: Easy, Medium, Hard) ---
  {
    id: 'q41',
    category: 'Verbal Ability',
    topic: 'Synonyms',
    difficulty: 'easy',
    questionText: 'Choose the word MOST SIMILAR in meaning to "PRUDENT":',
    options: ['Reckless', 'Cautious', 'Generous', 'Impatient'],
    correctAnswer: 1,
    explanation: '"Prudent" means acting with care and thought for the future (wise, cautious).'
  },
  {
    id: 'q42',
    category: 'Verbal Ability',
    topic: 'Antonyms',
    difficulty: 'easy',
    questionText: 'Select the word MOST OPPOSITE in meaning to "CANDID":',
    options: ['Frank', 'Honest', 'Evasive', 'Explicit'],
    correctAnswer: 2,
    explanation: '"Candid" means truthful and direct. The opposite is being "Evasive" or deceptive.'
  },
  {
    id: 'q43',
    category: 'Verbal Ability',
    topic: 'Sentence Completion',
    difficulty: 'medium',
    questionText: 'Despite facing numerous obstacles, the team remained _____ and successfully met all deadlines.',
    options: ['resolute', 'hesitant', 'indifferent', 'lethargic'],
    correctAnswer: 0,
    explanation: '"Resolute" means unwavering and determined.'
  },
  {
    id: 'q44',
    category: 'Verbal Ability',
    topic: 'Idioms & Phrases',
    difficulty: 'easy',
    questionText: 'What does the idiom "burn the midnight oil" mean?',
    options: ['Waste valuable resources', 'Work or study late into the night', 'Cause a major argument', 'Wake up early'],
    correctAnswer: 1,
    explanation: 'Originating from using oil lamps to study late into the night.'
  },
  {
    id: 'q45',
    category: 'Verbal Ability',
    topic: 'Spotting Errors',
    difficulty: 'medium',
    questionText: 'Identify the error segment: "Neither of the two candidates (A) have submitted (B) their application (C) on time (D)."',
    options: ['Neither of the two candidates', 'have submitted', 'their application', 'on time'],
    correctAnswer: 1,
    explanation: '"Neither of..." is a singular subject requiring "has submitted" instead of "have submitted".'
  },
  {
    id: 'q46',
    category: 'Verbal Ability',
    topic: 'Vocabulary',
    difficulty: 'medium',
    questionText: 'Which word means "lasting for a very short time"?',
    options: ['Perpetual', 'Ephemeral', 'Enduring', 'Immutable'],
    correctAnswer: 1,
    explanation: '"Ephemeral" describes something fleeting or short-lived.'
  },
  {
    id: 'q47',
    category: 'Verbal Ability',
    topic: 'Analogies',
    difficulty: 'easy',
    questionText: 'Book : Publisher :: Film : ?',
    options: ['Director', 'Producer', 'Actor', 'Screenplay'],
    correctAnswer: 1,
    explanation: 'A publisher finances and distributes a book; a producer finances and manages a film.'
  },
  {
    id: 'q48',
    category: 'Verbal Ability',
    topic: 'Reading Comprehension',
    difficulty: 'hard',
    questionText: 'What is the main takeaway of the phrase "Actions speak louder than words"?',
    options: ['People should speak less', 'Promises without action carry little weight', 'Silence is golden', 'Writing is better than talking'],
    correctAnswer: 1,
    explanation: 'It highlights that what one actually does is more significant than what one promises.'
  },
  {
    id: 'q49',
    category: 'Verbal Ability',
    topic: 'One Word Substitution',
    difficulty: 'hard',
    questionText: 'One who collects and studies postage stamps is known as a:',
    options: ['Numismatist', 'Philatelist', 'Anthropologist', 'Bibliophile'],
    correctAnswer: 1,
    explanation: 'A "Philatelist" studies/collects stamps. (Numismatist collects coins).'
  },
  {
    id: 'q50',
    category: 'Verbal Ability',
    topic: 'Sentence Rearrangement',
    difficulty: 'hard',
    questionText: 'Rearrange into a logical sentence: (P) is essential (Q) for success (R) continuous practice (S) in aptitude',
    options: ['R S P Q', 'P Q R S', 'S R P Q', 'Q P R S'],
    correctAnswer: 0,
    explanation: '"Continuous practice (R) in aptitude (S) is essential (P) for success (Q)." -> R S P Q.'
  },
  {
    id: 'q51',
    category: 'Verbal Ability',
    topic: 'Synonyms',
    difficulty: 'easy',
    questionText: 'Choose the word MOST SIMILAR to "METICULOUS":',
    options: ['Careless', 'Thorough', 'Hastily done', 'Vague'],
    correctAnswer: 1,
    explanation: '"Meticulous" means showing great attention to detail; very careful and thorough.'
  },
  {
    id: 'q52',
    category: 'Verbal Ability',
    topic: 'Antonyms',
    difficulty: 'medium',
    questionText: 'Select the word MOST OPPOSITE to "BENEVOLENT":',
    options: ['Kind', 'Malevolent', 'Generous', 'Compassionate'],
    correctAnswer: 1,
    explanation: '"Benevolent" means well-meaning and kindly; "Malevolent" means wishing evil.'
  },
  {
    id: 'q53',
    category: 'Verbal Ability',
    topic: 'Grammar',
    difficulty: 'easy',
    questionText: 'Choose the correct preposition: She has been studying _____ three hours continuously.',
    options: ['since', 'for', 'from', 'during'],
    correctAnswer: 1,
    explanation: '"For" is used with a duration of time ("three hours"). "Since" is used with a starting point in time.'
  },
  {
    id: 'q54',
    category: 'Verbal Ability',
    topic: 'Spelling Check',
    difficulty: 'easy',
    questionText: 'Select the correctly spelled word:',
    options: ['Acquaintance', 'Acquaintence', 'Aquaintance', 'Acquaintence'],
    correctAnswer: 0,
    explanation: 'The correct spelling is "Acquaintance".'
  },
  {
    id: 'q55',
    category: 'Verbal Ability',
    topic: 'Idioms & Phrases',
    difficulty: 'medium',
    questionText: 'What does "hit the nail on the head" mean?',
    options: ['Hurt someone accidentally', 'Describe exactly what is causing a situation', 'Build a wooden structure', 'Make a loud noise'],
    correctAnswer: 1,
    explanation: '"To hit the nail on the head" means to state a truth or answer precisely.'
  },
  {
    id: 'q56',
    category: 'Verbal Ability',
    topic: 'Vocabulary',
    difficulty: 'hard',
    questionText: 'What does "ubiquitous" mean?',
    options: ['Rare and precious', 'Present everywhere', 'Old-fashioned', 'Confusing'],
    correctAnswer: 1,
    explanation: '"Ubiquitous" means found or existing everywhere simultaneously.'
  },
  {
    id: 'q57',
    category: 'Verbal Ability',
    topic: 'Active & Passive Voice',
    difficulty: 'medium',
    questionText: 'Convert to Passive Voice: "The chef cooked a delicious meal."',
    options: ['A delicious meal was cooked by the chef.', 'A delicious meal is cooked by the chef.', 'The chef was cooking a delicious meal.', 'A delicious meal had been cooked by the chef.'],
    correctAnswer: 0,
    explanation: 'Simple past "cooked" changes to "was cooked" in passive voice.'
  },
  {
    id: 'q58',
    category: 'Verbal Ability',
    topic: 'Direct & Indirect Speech',
    difficulty: 'hard',
    questionText: 'Choose the correct indirect form: He said, "I am studying for my exam."',
    options: ['He said that he was studying for his exam.', 'He said that I am studying for my exam.', 'He says he is studying for his exam.', 'He told he was studying.'],
    correctAnswer: 0,
    explanation: 'Present continuous "am studying" shifts to past continuous "was studying" with pronoun changes.'
  }
];

export const CATEGORIES = [
  {
    id: 'all',
    name: 'Full Aptitude Mock',
    description: 'Complete practice test across Quantitative, Logical & Verbal categories.',
    count: 58,
    icon: 'Sparkles',
    color: '#E8D5C4',
    badge: 'Custom Modes'
  },
  {
    id: 'Quantitative Aptitude',
    name: 'Quantitative Aptitude',
    description: 'Master Speed, Distance, Ratios, Percentages, Work & Profit/Loss calculations.',
    count: 20,
    icon: 'Calculator',
    color: '#D4E7C5',
    badge: 'Math'
  },
  {
    id: 'Logical Reasoning',
    name: 'Logical Reasoning',
    description: 'Solve Number Patterns, Syllogisms, Coding-Decoding & Blood Relations.',
    count: 20,
    icon: 'Brain',
    color: '#F4E0E8',
    badge: 'Logic'
  },
  {
    id: 'Verbal Ability',
    name: 'Verbal Ability',
    description: 'Sharpen Vocabulary, Synonyms, Grammar Rules & Sentence Structures.',
    count: 18,
    icon: 'BookOpen',
    color: '#FBF0D9',
    badge: 'English'
  }
];
