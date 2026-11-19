        // ===== QUIZ DATA =====
        const quizData = {
            javascript: {
                name: "JavaScript",
                icon: "⚡",
                color: "#F0DB4F",
                bgColor: "rgba(240, 219, 79, 0.15)",
                questions: {
                    easy: [
                        { q: "What keyword is used to declare a variable in JavaScript?", options: ["var", "int", "string", "dim"], answer: 0 },
                        { q: "Which method converts a string to a number?", options: ["Number()", "String()", "Boolean()", "Array()"], answer: 0 },
                        { q: "What does 'typeof null' return in JavaScript?", options: ["null", "undefined", "object", "number"], answer: 2 },
                        { q: "Which symbol is used for single-line comments?", options: ["//", "/* */", "#", "--"], answer: 0 },
                        { q: "How do you write 'Hello World' in an alert box?", options: ["alert('Hello World')", "msg('Hello World')", "alertBox('Hello World')", "prompt('Hello World')"], answer: 0 },
                        { q: "Which operator is used for strict equality?", options: ["==", "===", "!=", "="], answer: 1 },
                        { q: "What is the output of 2 + '2' in JavaScript?", options: ["4", "22", "NaN", "undefined"], answer: 1 },
                        { q: "Which method adds an element to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: 0 },
                        { q: "What does DOM stand for?", options: ["Document Object Model", "Data Object Manager", "Digital Ordinance Map", "Document Orientation Mode"], answer: 0 },
                        { q: "Which is NOT a JavaScript data type?", options: ["String", "Boolean", "Float", "Symbol"], answer: 2 },
                    ],
                    medium: [
                        { q: "What is a closure in JavaScript?", options: ["A function with access to its outer scope", "A way to close the browser", "A design pattern only", "An error handling mechanism"], answer: 0 },
                        { q: "What does the 'this' keyword refer to in an arrow function?", options: ["The function itself", "The global object always", "The enclosing lexical context", "undefined"], answer: 2 },
                        { q: "Which method creates a new array from calling a function on every element?", options: ["forEach()", "map()", "filter()", "reduce()"], answer: 1 },
                        { q: "What is event bubbling?", options: ["Events propagate from child to parent", "Events propagate from parent to child", "Events don't propagate", "Events propagate randomly"], answer: 0 },
                        { q: "What does Promise.all() do?", options: ["Resolves when ALL promises resolve", "Resolves when ANY promise resolves", "Rejects all promises", "Creates a single promise"], answer: 0 },
                        { q: "What is the purpose of 'use strict'?", options: ["Enables strict mode parsing", "Makes variables global", "Disables error reporting", "Speeds up execution"], answer: 0 },
                        { q: "Which ES6 feature is used for template literals?", options: ["Single quotes", "Double quotes", "Backticks", "Forward slashes"], answer: 2 },
                        { q: "What does the spread operator (...) do?", options: ["Expands an iterable into elements", "Creates a new variable", "Deletes an element", "Compresses data"], answer: 0 },
                        { q: "What is the output of [1,2,3].map(x => x * 2)?", options: ["[1,2,3]", "[2,4,6]", "[3,6,9]", "6"], answer: 1 },
                        { q: "What is hoisting in JavaScript?", options: ["Declarations moved to top of scope", "Moving code to the cloud", "Importing modules", "Creating global variables"], answer: 0 },
                    ],
                    hard: [
                        { q: "What is the output of: typeof typeof 1?", options: ["number", "string", "undefined", "object"], answer: 1 },
                        { q: "What pattern does the 'new' keyword follow internally?", options: ["Create object, set prototype, execute constructor, return", "Execute function, create scope, return undefined", "Create class, inherit methods, compile", "Parse code, optimize, execute"], answer: 0 },
                        { q: "What is the event loop responsible for?", options: ["Managing the call stack and callback queue", "Rendering the DOM", "Compiling JavaScript", "Managing memory allocation"], answer: 0 },
                        { q: "What does Object.freeze() do?", options: ["Makes object completely immutable (shallow)", "Deletes the object", "Copies the object", "Converts object to array"], answer: 0 },
                        { q: "What is a WeakMap used for?", options: ["Key-value pairs where keys are weakly referenced objects", "Storing primitive values only", "Creating immutable maps", "Sorting data structures"], answer: 0 },
                        { q: "What is the Temporal Dead Zone (TDZ)?", options: ["Period between entering scope and let/const declaration", "Time when garbage collection runs", "Browser idle time", "Network latency period"], answer: 0 },
                        { q: "What is the output of: 0.1 + 0.2 === 0.3?", options: ["true", "false", "undefined", "NaN"], answer: 1 },
                        { q: "Which is true about JavaScript generators?", options: ["Functions that can be paused and resumed", "Auto-generated code", "Template engines", "Random number generators only"], answer: 0 },
                        { q: "What is the purpose of Symbol.iterator?", options: ["Makes an object iterable", "Creates unique IDs", "Encrypts data", "Defines comparison logic"], answer: 0 },
                        { q: "What is tail call optimization?", options: ["Optimizing the last function call in recursion", "Removing unused variables", "Caching DOM elements", "Minimizing file size"], answer: 0 },
                    ]
                }
            },
            python: {
                name: "Python",
                icon: "🐍",
                color: "#3776AB",
                bgColor: "rgba(55, 118, 171, 0.15)",
                questions: {
                    easy: [
                        { q: "Which function is used to print output in Python?", options: ["print()", "echo()", "console.log()", "write()"], answer: 0 },
                        { q: "What is the correct file extension for Python files?", options: [".py", ".python", ".pt", ".pyt"], answer: 0 },
                        { q: "Which keyword is used to define a function?", options: ["function", "def", "func", "define"], answer: 1 },
                        { q: "What type is the value True in Python?", options: ["String", "Integer", "Boolean", "Float"], answer: 2 },
                        { q: "How do you create a list in Python?", options: ["[]", "{}", "()", "<>"], answer: 0 },
                        { q: "Which method adds an item to a list?", options: ["append()", "add()", "push()", "insert_end()"], answer: 0 },
                        { q: "What does len() function return?", options: ["Length of an object", "Last element", "Data type", "Memory size"], answer: 0 },
                        { q: "Which keyword is used for conditional statements?", options: ["if", "when", "case", "switch"], answer: 0 },
                        { q: "How do you start a comment in Python?", options: ["//", "#", "/*", "--"], answer: 1 },
                        { q: "What is the output of 10 // 3?", options: ["3.33", "3", "4", "1"], answer: 1 },
                    ],
                    medium: [
                        { q: "What is a list comprehension?", options: ["Concise way to create lists", "A debugging tool", "A testing framework", "Memory management"], answer: 0 },
                        { q: "What does the 'self' parameter represent?", options: ["The instance of the class", "The class itself", "A global variable", "A static method"], answer: 0 },
                        { q: "Which is used for error handling in Python?", options: ["try/except", "try/catch", "if/else", "handle/error"], answer: 0 },
                        { q: "What is a decorator in Python?", options: ["A function that modifies another function", "A design element", "A variable type", "A loop structure"], answer: 0 },
                        { q: "What does *args do in a function?", options: ["Accepts variable positional arguments", "Creates a pointer", "Multiplies arguments", "Deletes arguments"], answer: 0 },
                        { q: "Which data structure uses key-value pairs?", options: ["Dictionary", "List", "Tuple", "Set"], answer: 0 },
                        { q: "What is the difference between a tuple and a list?", options: ["Tuples are immutable", "Lists are immutable", "No difference", "Tuples are faster only"], answer: 0 },
                        { q: "What does the 'yield' keyword do?", options: ["Creates a generator function", "Stops the program", "Returns and exits", "Creates a variable"], answer: 0 },
                        { q: "What is PEP 8?", options: ["Python style guide", "Python version", "A Python library", "An IDE for Python"], answer: 0 },
                        { q: "What does pip stand for?", options: ["Pip Installs Packages", "Python Install Program", "Package In Python", "Program Index Python"], answer: 0 },
                    ],
                    hard: [
                        { q: "What is the GIL in Python?", options: ["Global Interpreter Lock", "General Input Library", "Graphics Integration Layer", "Generic Interface Loader"], answer: 0 },
                        { q: "What is a metaclass?", options: ["A class of a class", "A superclass", "An abstract class", "A static class"], answer: 0 },
                        { q: "What is the MRO in Python?", options: ["Method Resolution Order", "Multiple Return Objects", "Main Runtime Operation", "Module Registry Order"], answer: 0 },
                        { q: "What does __slots__ do?", options: ["Restricts instance attributes for memory optimization", "Creates time slots", "Defines available methods", "Limits function calls"], answer: 0 },
                        { q: "What is a context manager?", options: ["Manages resource allocation with 'with' statement", "A project management tool", "A memory debugger", "A file system handler"], answer: 0 },
                        { q: "What is monkey patching?", options: ["Dynamic modification of a class at runtime", "Debugging technique", "Testing methodology", "Code obfuscation"], answer: 0 },
                        { q: "What is the purpose of __new__?", options: ["Controls instance creation before __init__", "Creates a new file", "Defines a constructor", "Imports a module"], answer: 0 },
                        { q: "What are descriptors in Python?", options: ["Objects with __get__, __set__, or __delete__", "Documentation strings", "Type annotations", "Variable names"], answer: 0 },
                        { q: "What is the difference between deepcopy and copy?", options: ["deepcopy copies nested objects recursively", "No difference", "copy is recursive", "deepcopy is faster"], answer: 0 },
                        { q: "What does asyncio.gather() do?", options: ["Runs multiple coroutines concurrently", "Collects garbage", "Gathers user input", "Groups similar data"], answer: 0 },
                    ]
                }
            },
            html_css: {
                name: "HTML & CSS",
                icon: "🎨",
                color: "#E44D26",
                bgColor: "rgba(228, 77, 38, 0.15)",
                questions: {
                    easy: [
                        { q: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language", "None of the above"], answer: 0 },
                        { q: "Which tag is used for the largest heading?", options: ["<h6>", "<h1>", "<heading>", "<head>"], answer: 1 },
                        { q: "Which property changes the text color in CSS?", options: ["color", "text-color", "font-color", "foreground"], answer: 0 },
                        { q: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"], answer: 0 },
                        { q: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: 1 },
                        { q: "Which CSS property controls font size?", options: ["font-size", "text-size", "font-style", "text-font"], answer: 0 },
                        { q: "What tag is used for images?", options: ["<img>", "<image>", "<pic>", "<photo>"], answer: 0 },
                        { q: "Which property adds space inside an element?", options: ["margin", "padding", "spacing", "border"], answer: 1 },
                        { q: "What is the correct HTML for a line break?", options: ["<br>", "<break>", "<lb>", "<newline>"], answer: 0 },
                        { q: "Which attribute specifies an image URL?", options: ["href", "src", "link", "url"], answer: 1 },
                    ],
                    medium: [
                        { q: "What is the CSS Box Model?", options: ["Content, padding, border, margin", "Header, body, footer", "Inline, block, flex", "Color, font, size, position"], answer: 0 },
                        { q: "Which CSS display value hides an element but keeps space?", options: ["display: none", "visibility: hidden", "opacity: 0", "Both B and C"], answer: 3 },
                        { q: "What is CSS Flexbox primarily used for?", options: ["One-dimensional layouts", "Two-dimensional layouts", "Animations only", "Typography"], answer: 0 },
                        { q: "Which pseudo-class targets the first child element?", options: [":first-child", ":first", ":initial", ":start"], answer: 0 },
                        { q: "What does 'position: sticky' do?", options: ["Toggles between relative and fixed based on scroll", "Makes element always fixed", "Sticks to parent only", "Removes from flow"], answer: 0 },
                        { q: "What is a CSS media query used for?", options: ["Responsive design for different screen sizes", "Querying databases", "Fetching API data", "Creating animations"], answer: 0 },
                        { q: "Which property creates CSS Grid layouts?", options: ["display: grid", "display: table", "display: flex", "display: block"], answer: 0 },
                        { q: "What is semantic HTML?", options: ["Using meaningful tags like <article>, <nav>", "Using only div tags", "Writing inline styles", "Minifying HTML code"], answer: 0 },
                        { q: "Which CSS unit is relative to the viewport width?", options: ["px", "em", "vw", "rem"], answer: 2 },
                        { q: "What does z-index control?", options: ["Stacking order of elements", "Zoom level", "Element size", "Font weight"], answer: 0 },
                    ],
                    hard: [
                        { q: "What is CSS specificity order (lowest to highest)?", options: ["Element, Class, ID, Inline", "ID, Class, Element, Inline", "Inline, ID, Class, Element", "Class, Element, ID, Inline"], answer: 0 },
                        { q: "What does 'contain: layout' do in CSS?", options: ["Isolates element's layout from the rest of the page", "Contains text within borders", "Creates a container query", "Limits overflow"], answer: 0 },
                        { q: "What is the CSS 'will-change' property for?", options: ["Hints browser about upcoming changes for optimization", "Changes willingly", "Future CSS syntax", "JavaScript bridge"], answer: 0 },
                        { q: "What is a CSS custom property (variable) syntax?", options: ["--variable-name", "$variable-name", "@variable-name", "%variable-name"], answer: 0 },
                        { q: "Which CSS feature allows container-based responsive design?", options: ["Container Queries", "Media Queries", "Feature Queries", "Import Queries"], answer: 0 },
                        { q: "What is the Shadow DOM used for?", options: ["Encapsulating styles and markup", "Creating shadows", "Dark mode styling", "Performance optimization"], answer: 0 },
                        { q: "What does 'content-visibility: auto' optimize?", options: ["Rendering performance by skipping off-screen content", "Content security", "Visibility animations", "SEO indexing"], answer: 0 },
                        { q: "What is the CSS cascade layer feature (@layer)?", options: ["Controls the order of cascade precedence", "Creates visual layers", "Z-index alternative", "Animation layers"], answer: 0 },
                        { q: "What is the :has() selector in CSS?", options: ["Parent selector based on children", "Checks attribute existence", "Validates form inputs", "Tests browser support"], answer: 0 },
                        { q: "What does subgrid in CSS Grid do?", options: ["Child grid inherits parent grid tracks", "Creates sub-layouts", "Enables nested flexbox", "Auto-generates grid areas"], answer: 0 },
                    ]
                }
            },
            science: {
                name: "Science",
                icon: "🔬",
                color: "#00B894",
                bgColor: "rgba(0, 184, 148, 0.15)",
                questions: {
                    easy: [
                        { q: "What planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1 },
                        { q: "What is H₂O commonly known as?", options: ["Hydrogen", "Oxygen", "Water", "Carbon Dioxide"], answer: 2 },
                        { q: "What gas do plants produce during photosynthesis?", options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"], answer: 2 },
                        { q: "How many bones are in the adult human body?", options: ["106", "206", "306", "186"], answer: 1 },
                        { q: "What is the largest organ in the human body?", options: ["Heart", "Brain", "Liver", "Skin"], answer: 3 },
                        { q: "What force keeps us on the ground?", options: ["Magnetism", "Friction", "Gravity", "Inertia"], answer: 2 },
                        { q: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], answer: 2 },
                        { q: "What is the speed of light approximately?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"], answer: 0 },
                        { q: "Which vitamin is produced when skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: 3 },
                        { q: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: 2 },
                    ],
                    medium: [
                        { q: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"], answer: 2 },
                        { q: "What is Newton's Third Law of Motion?", options: ["Every action has an equal and opposite reaction", "Force equals mass times acceleration", "An object in motion stays in motion", "Energy cannot be created or destroyed"], answer: 0 },
                        { q: "What type of bond involves sharing electrons?", options: ["Ionic", "Covalent", "Metallic", "Hydrogen"], answer: 1 },
                        { q: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: 2 },
                        { q: "What is the pH of pure water?", options: ["0", "7", "14", "1"], answer: 1 },
                        { q: "Which particle has a negative charge?", options: ["Proton", "Neutron", "Electron", "Photon"], answer: 2 },
                        { q: "What is the study of fungi called?", options: ["Botany", "Mycology", "Zoology", "Ecology"], answer: 1 },
                        { q: "What is absolute zero in Celsius?", options: ["-273.15°C", "-100°C", "0°C", "-459.67°C"], answer: 0 },
                        { q: "What type of rock is formed from cooled magma?", options: ["Sedimentary", "Metamorphic", "Igneous", "Mineral"], answer: 2 },
                        { q: "Which organ produces insulin?", options: ["Liver", "Kidney", "Pancreas", "Stomach"], answer: 2 },
                    ],
                    hard: [
                        { q: "What is the Heisenberg Uncertainty Principle?", options: ["Cannot precisely measure both position and momentum simultaneously", "Energy is always conserved", "Matter can be created from energy", "Time flows in one direction"], answer: 0 },
                        { q: "What is CRISPR-Cas9 used for?", options: ["Gene editing", "Space exploration", "Nuclear fission", "Drug synthesis"], answer: 0 },
                        { q: "What is the Chandrasekhar limit?", options: ["Maximum mass of a white dwarf star (~1.4 solar masses)", "Speed of light boundary", "Edge of the observable universe", "Minimum black hole size"], answer: 0 },
                        { q: "What is quantum entanglement?", options: ["Particles are correlated regardless of distance", "Atoms splitting apart", "Wave function measurement", "Light bending around gravity"], answer: 0 },
                        { q: "What does the Krebs cycle produce?", options: ["ATP, NADH, FADH2, CO2", "Glucose only", "Oxygen only", "Proteins only"], answer: 0 },
                        { q: "What is a Bose-Einstein condensate?", options: ["A state of matter near absolute zero", "A type of chemical bond", "A nuclear reaction", "A biological compound"], answer: 0 },
                        { q: "What is the Drake Equation used to estimate?", options: ["Number of communicative civilizations in the galaxy", "Speed of universal expansion", "Age of the Earth", "Distance between stars"], answer: 0 },
                        { q: "What causes auroras (Northern/Southern Lights)?", options: ["Solar wind interacting with Earth's magnetosphere", "Light refraction in clouds", "Volcanic activity", "Ocean currents"], answer: 0 },
                        { q: "What is the anthropic principle?", options: ["Universe's constants appear fine-tuned for life", "Humans evolved from apes", "Earth is the center of the universe", "All matter is conscious"], answer: 0 },
                        { q: "What is dark energy?", options: ["Unknown energy driving universe's accelerating expansion", "Energy from black holes", "Nuclear energy in stars", "Gravitational potential energy"], answer: 0 },
                    ]
                }
            },
            general: {
                name: "General Knowledge",
                icon: "🌍",
                color: "#6C5CE7",
                bgColor: "rgba(108, 92, 231, 0.15)",
                questions: {
                    easy: [
                        { q: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], answer: 2 },
                        { q: "How many continents are there?", options: ["5", "6", "7", "8"], answer: 2 },
                        { q: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3 },
                        { q: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"], answer: 2 },
                        { q: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], answer: 2 },
                        { q: "How many days are in a leap year?", options: ["364", "365", "366", "367"], answer: 2 },
                        { q: "What is the tallest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"], answer: 2 },
                        { q: "Which animal is known as the King of the Jungle?", options: ["Tiger", "Elephant", "Lion", "Bear"], answer: 2 },
                        { q: "What language has the most native speakers?", options: ["English", "Spanish", "Mandarin Chinese", "Hindi"], answer: 2 },
                        { q: "How many colors are in a rainbow?", options: ["5", "6", "7", "8"], answer: 2 },
                    ],
                    medium: [
                        { q: "Which country has the longest coastline?", options: ["Australia", "Russia", "Canada", "Indonesia"], answer: 2 },
                        { q: "What year did the Berlin Wall fall?", options: ["1987", "1989", "1991", "1993"], answer: 1 },
                        { q: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], answer: 1 },
                        { q: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], answer: 1 },
                        { q: "What is the most spoken language worldwide (total speakers)?", options: ["Mandarin", "Spanish", "English", "Hindi"], answer: 2 },
                        { q: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: 1 },
                        { q: "What is the largest desert in the world?", options: ["Sahara", "Arabian", "Antarctic", "Gobi"], answer: 2 },
                        { q: "Who discovered penicillin?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Joseph Lister"], answer: 1 },
                        { q: "What is the national sport of Canada?", options: ["Hockey", "Lacrosse", "Baseball", "Curling"], answer: 1 },
                        { q: "In which year did World War I begin?", options: ["1912", "1914", "1916", "1918"], answer: 1 },
                    ],
                    hard: [
                        { q: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: 1 },
                        { q: "Who was the first person to circumnavigate the globe?", options: ["Christopher Columbus", "Ferdinand Magellan's expedition", "Vasco da Gama", "James Cook"], answer: 1 },
                        { q: "What is the Fibonacci sequence starting numbers?", options: ["0, 1, 1, 2, 3, 5", "1, 2, 3, 4, 5, 6", "1, 1, 2, 4, 8, 16", "0, 2, 4, 6, 8, 10"], answer: 0 },
                        { q: "Which element has the atomic number 79?", options: ["Silver", "Gold", "Platinum", "Copper"], answer: 1 },
                        { q: "What ancient civilization built Machu Picchu?", options: ["Aztec", "Maya", "Inca", "Olmec"], answer: 2 },
                        { q: "What is the Rosetta Stone?", options: ["A decree in three scripts helping decode hieroglyphics", "A type of meteor", "An ancient computer", "A musical instrument"], answer: 0 },
                        { q: "Who formulated the theory of general relativity?", options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Max Planck"], answer: 1 },
                        { q: "What is the most common blood type worldwide?", options: ["A+", "B+", "O+", "AB+"], answer: 2 },
                        { q: "Which treaty ended World War I?", options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Ghent", "Treaty of Tordesillas"], answer: 1 },
                        { q: "What does GDP stand for?", options: ["Gross Domestic Product", "General Domestic Price", "Global Development Plan", "Growth Development Program"], answer: 0 },
                    ]
                }
            }
        };

        // ===== APP STATE =====
        let state = {
            currentSection: 'hero',
            selectedCategory: null,
            selectedDifficulty: null,
            playerName: '',
            currentQuestionIndex: 0,
            questions: [],
            answers: [],
            score: 0,
            streak: 0,
            bestStreak: 0,
            timePerQuestion: 30,
            timer: null,
            timeLeft: 30,
            quizStartTime: null,
            quizEndTime: null,
            totalTimeSpent: 0,
            isQuizActive: false
        };

        // ===== INITIALIZATION =====
        document.addEventListener('DOMContentLoaded', () => {
            initApp();
        });

        function initApp() {
            loadTheme();
            renderCategories();
            updateLeaderboard();
            updatePlayerCount();

            // Preloader
            setTimeout(() => {
                const preloader = document.getElementById('preloader');
                preloader.classList.add('hidden');
                document.body.classList.remove('no-scroll');
            }, 2200);

            // Enter key for name input
            document.getElementById('playerName').addEventListener('keypress', (e) => {
                if (e.key === 'Enter') startQuiz();
            });
        }

        // ===== THEME =====
        function toggleTheme() {
            const html = document.documentElement;
            const current = html.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', next);
            document.getElementById('themeIcon').textContent = next === 'dark' ? '☀️' : '🌙';
            localStorage.setItem('quizTheme', next);
        }

        function loadTheme() {
            const saved = localStorage.getItem('quizTheme');
            if (saved) {
                document.documentElement.setAttribute('data-theme', saved);
                document.getElementById('themeIcon').textContent = saved === 'dark' ? '☀️' : '🌙';
            }
        }

        // ===== NAVIGATION =====
        function showSection(sectionName) {
            const sectionMap = {
                'hero': 'heroSection',
                'categories': 'categoriesSection',
                'difficulty': 'difficultySection',
                'user': 'userSection',
                'quiz': 'quizSection',
                'results': 'resultsSection',
                'leaderboard': 'leaderboardSection'
            };

            // Hide all sections
            Object.values(sectionMap).forEach(id => {
                document.getElementById(id).classList.add('section-hidden');
            });

            // Show target section
            const targetId = sectionMap[sectionName];
            if (targetId) {
                const el = document.getElementById(targetId);
                el.classList.remove('section-hidden');
                el.style.animation = 'none';
                el.offsetHeight; // Trigger reflow
                el.style.animation = 'sectionFadeIn 0.5s ease forwards';
            }

            state.currentSection = sectionName;

            // Update nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.dataset.section === sectionName) link.classList.add('active');
            });

            // Special section handling
            if (sectionName === 'leaderboard') updateLeaderboard();
            if (sectionName === 'hero') updatePlayerCount();

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function toggleMobileMenu() {
            const btn = document.getElementById('mobileMenuBtn');
            const nav = document.getElementById('mobileNav');
            btn.classList.toggle('active');
            nav.classList.toggle('show');
        }

        // ===== CATEGORIES =====
        function renderCategories() {
            const grid = document.getElementById('categoryGrid');
            grid.innerHTML = '';

            Object.entries(quizData).forEach(([key, cat]) => {
                const card = document.createElement('div');
                card.className = 'category-card';
                card.dataset.category = key;
                card.onclick = () => selectCategory(key);

                const totalQ = Object.values(cat.questions).reduce((acc, arr) => acc + arr.length, 0);

                card.innerHTML = `
                    <div class="category-icon" style="background: ${cat.bgColor}; color: ${cat.color};">
                        ${cat.icon}
                    </div>
                    <div class="category-name">${cat.name}</div>
                    <div class="category-count">${totalQ} questions</div>
                `;
                grid.appendChild(card);
            });
        }

        function selectCategory(key) {
            state.selectedCategory = key;
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('selected'));
            document.querySelector(`[data-category="${key}"]`).classList.add('selected');
            document.getElementById('categoryNextBtn').disabled = false;
        }

        function proceedToDifficulty() {
            if (!state.selectedCategory) {
                showToast('Please select a category', 'warning');
                return;
            }
            showSection('difficulty');
        }

        // ===== DIFFICULTY =====
        function selectDifficulty(level) {
            state.selectedDifficulty = level;
            document.querySelectorAll('.difficulty-card').forEach(c => c.classList.remove('selected'));
            document.querySelector(`[data-difficulty="${level}"]`).classList.add('selected');
            document.getElementById('difficultyNextBtn').disabled = false;
        }

        function proceedToUser() {
            if (!state.selectedDifficulty) {
                showToast('Please select a difficulty', 'warning');
                return;
            }
            // Update summary
            const cat = quizData[state.selectedCategory];
            const qCount = cat.questions[state.selectedDifficulty].length;
            document.getElementById('summaryCategory').textContent = cat.icon + ' ' + cat.name;
            document.getElementById('summaryDifficulty').textContent = state.selectedDifficulty.charAt(0).toUpperCase() + state.selectedDifficulty.slice(1);
            document.getElementById('summaryQuestions').textContent = qCount;
            showSection('user');
        }

        // ===== START QUIZ =====
        function startQuiz() {
            const name = document.getElementById('playerName').value.trim();
            if (!name) {
                showToast('Please enter your name', 'warning');
                document.getElementById('playerName').focus();
                return;
            }

            state.playerName = name;
            state.questions = shuffleArray([...quizData[state.selectedCategory].questions[state.selectedDifficulty]]);
            state.answers = new Array(state.questions.length).fill(null);
            state.currentQuestionIndex = 0;
            state.score = 0;
            state.streak = 0;
            state.bestStreak = 0;
            state.isQuizActive = true;
            state.quizStartTime = Date.now();

            // Set time per question based on difficulty
            const timeMap = { easy: 30, medium: 25, hard: 20 };
            state.timePerQuestion = timeMap[state.selectedDifficulty];
            state.timeLeft = state.timePerQuestion;

            document.getElementById('totalQ').textContent = state.questions.length;

            showSection('quiz');
            renderQuestionNav();
            loadQuestion();
            startTimer();

            showToast(`Good luck, ${name}! 🍀`, 'info');
        }

        // ===== TIMER =====
        function startTimer() {
            clearInterval(state.timer);
            state.timeLeft = state.timePerQuestion;
            updateTimerDisplay();

            state.timer = setInterval(() => {
                state.timeLeft--;
                updateTimerDisplay();

                if (state.timeLeft <= 0) {
                    clearInterval(state.timer);
                    autoSubmitAnswer();
                }
            }, 1000);
        }

        function updateTimerDisplay() {
            const display = document.getElementById('timerDisplay');
            display.textContent = state.timeLeft;

            if (state.timeLeft <= 10) {
                display.classList.add('timer-warning');
            } else {
                display.classList.remove('timer-warning');
            }
        }

        function autoSubmitAnswer() {
            if (state.answers[state.currentQuestionIndex] === null) {
                state.answers[state.currentQuestionIndex] = -1; // Skipped/timed out
                highlightCorrectAnswer();
                showToast("⏰ Time's up!", 'warning');
                updateQuestionNavDot();

                setTimeout(() => {
                    if (state.currentQuestionIndex < state.questions.length - 1) {
                        nextQuestion();
                    } else {
                        finishQuiz();
                    }
                }, 1500);
            }
        }

        // ===== QUESTIONS =====
        function loadQuestion() {
            const q = state.questions[state.currentQuestionIndex];
            const idx = state.currentQuestionIndex;

            document.getElementById('questionLabel').textContent = `Question ${idx + 1} of ${state.questions.length}`;
            document.getElementById('questionText').textContent = q.q;
            document.getElementById('currentQ').textContent = idx + 1;
            document.getElementById('currentScore').textContent = state.score;

            // Progress
            const percent = Math.round(((idx) / state.questions.length) * 100);
            document.getElementById('progressFill').style.width = percent + '%';
            document.getElementById('progressText').textContent = `Question ${idx + 1} of ${state.questions.length}`;
            document.getElementById('progressPercent').textContent = percent + '%';

            // Streak
            if (state.streak >= 2) {
                document.getElementById('streakContainer').style.display = 'block';
                document.getElementById('streakCount').textContent = state.streak;
            } else {
                document.getElementById('streakContainer').style.display = 'none';
            }

            // Options
            const grid = document.getElementById('optionsGrid');
            grid.innerHTML = '';
            const letters = ['A', 'B', 'C', 'D'];

            q.options.forEach((opt, i) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.innerHTML = `
                    <span class="option-letter">${letters[i]}</span>
                    <span class="option-text">${opt}</span>
                    <span class="option-feedback"></span>
                `;

                // If already answered
                if (state.answers[idx] !== null) {
                    btn.classList.add('disabled');
                    if (i === q.answer) {
                        btn.classList.add('correct');
                        btn.querySelector('.option-feedback').textContent = '✓';
                    }
                    if (state.answers[idx] === i && i !== q.answer) {
                        btn.classList.add('wrong');
                        btn.querySelector('.option-feedback').textContent = '✗';
                    }
                } else {
                    btn.onclick = () => selectAnswer(i);
                }

                grid.appendChild(btn);
            });

            // Navigation buttons
            document.getElementById('prevBtn').disabled = idx === 0;
            document.getElementById('nextBtn').textContent = idx === state.questions.length - 1 ? 'Finish ✓' : 'Next →';

            // Update nav dots
            document.querySelectorAll('.q-dot').forEach((dot, i) => {
                dot.classList.remove('current');
                if (i === idx) dot.classList.add('current');
            });

            // Animate card
            const card = document.getElementById('questionCard');
            card.style.animation = 'none';
            card.offsetHeight;
            card.style.animation = 'cardSlideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

            // Reset and start timer
            if (state.answers[idx] === null) {
                startTimer();
            } else {
                clearInterval(state.timer);
                state.timeLeft = 0;
                updateTimerDisplay();
            }
        }

        function selectAnswer(optionIndex) {
            const q = state.questions[state.currentQuestionIndex];
            state.answers[state.currentQuestionIndex] = optionIndex;

            clearInterval(state.timer);

            const options = document.querySelectorAll('.option-btn');
            const isCorrect = optionIndex === q.answer;

            options.forEach((btn, i) => {
                btn.classList.add('disabled');
                if (i === q.answer) {
                    btn.classList.add('correct');
                    btn.querySelector('.option-feedback').textContent = '✓';
                }
                if (i === optionIndex && !isCorrect) {
                    btn.classList.add('wrong');
                    btn.querySelector('.option-feedback').textContent = '✗';
                }
            });

            if (isCorrect) {
                state.score++;
                state.streak++;
                if (state.streak > state.bestStreak) state.bestStreak = state.streak;
                document.getElementById('currentScore').textContent = state.score;
                document.getElementById('currentScore').classList.add('score-pop');
                setTimeout(() => document.getElementById('currentScore').classList.remove('score-pop'), 500);
                showToast('✅ Correct! +1 point', 'success');

                if (state.streak >= 2) {
                    document.getElementById('streakContainer').style.display = 'block';
                    document.getElementById('streakCount').textContent = state.streak;
                }
            } else {
                state.streak = 0;
                document.getElementById('streakContainer').style.display = 'none';
                showToast(`❌ Wrong! Correct: ${q.options[q.answer]}`, 'error');
            }

            updateQuestionNavDot();
        }

        function highlightCorrectAnswer() {
            const q = state.questions[state.currentQuestionIndex];
            const options = document.querySelectorAll('.option-btn');
            options.forEach((btn, i) => {
                btn.classList.add('disabled');
                if (i === q.answer) {
                    btn.classList.add('correct');
                    btn.querySelector('.option-feedback').textContent = '✓';
                }
            });
            state.streak = 0;
            document.getElementById('streakContainer').style.display = 'none';
        }

        function nextQuestion() {
            if (state.currentQuestionIndex < state.questions.length - 1) {
                state.currentQuestionIndex++;
                loadQuestion();
            } else {
                finishQuiz();
            }
        }

        function prevQuestion() {
            if (state.currentQuestionIndex > 0) {
                state.currentQuestionIndex--;
                loadQuestion();
            }
        }

        function jumpToQuestion(index) {
            state.currentQuestionIndex = index;
            loadQuestion();
        }

        function renderQuestionNav() {
            const nav = document.getElementById('questionNav');
            nav.innerHTML = '';

            state.questions.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.className = 'q-dot';
                if (i === 0) dot.classList.add('current');
                dot.textContent = i + 1;
                dot.onclick = () => jumpToQuestion(i);
                dot.setAttribute('aria-label', `Question ${i + 1}`);
                nav.appendChild(dot);
            });
        }

        function updateQuestionNavDot() {
            const dots = document.querySelectorAll('.q-dot');
            const idx = state.currentQuestionIndex;
            const q = state.questions[idx];
            const answer = state.answers[idx];

            if (answer !== null && answer !== -1) {
                dots[idx].classList.remove('current');
                if (answer === q.answer) {
                    dots[idx].classList.add('answered-correct');
                } else {
                    dots[idx].classList.add('answered-wrong');
                }
            } else if (answer === -1) {
                dots[idx].classList.remove('current');
                dots[idx].classList.add('answered-wrong');
            }
        }

        // ===== FINISH QUIZ =====
        function finishQuiz() {
            clearInterval(state.timer);
            state.isQuizActive = false;
            state.quizEndTime = Date.now();
            state.totalTimeSpent = Math.round((state.quizEndTime - state.quizStartTime) / 1000);

            const total = state.questions.length;
            const correct = state.score;
            const wrong = state.answers.filter((a, i) => a !== null && a !== -1 && a !== state.questions[i].answer).length;
            const skipped = state.answers.filter(a => a === null || a === -1).length;
            const percentage = Math.round((correct / total) * 100);

            // Points calculation
            const diffMultiplier = { easy: 1, medium: 1.5, hard: 2 };
            const points = Math.round(correct * 100 * diffMultiplier[state.selectedDifficulty] + (state.bestStreak * 50));

            // Save to leaderboard
            saveToLeaderboard({
                name: state.playerName,
                score: correct,
                total: total,
                percentage: percentage,
                points: points,
                time: state.totalTimeSpent,
                category: quizData[state.selectedCategory].name,
                difficulty: state.selectedDifficulty,
                date: new Date().toLocaleDateString()
            });

            showSection('results');

            // Animate results
            setTimeout(() => {
                document.getElementById('resultsPercent').textContent = percentage + '%';
                document.getElementById('correctCount').textContent = correct;
                document.getElementById('wrongCount').textContent = wrong;
                document.getElementById('skippedCount').textContent = skipped;
                document.getElementById('timeTaken').textContent = formatTime(state.totalTimeSpent);
                document.getElementById('bestStreak').textContent = state.bestStreak;
                document.getElementById('totalPoints').textContent = points;

                // Grade
                let grade, message, circleClass;
                if (percentage >= 90) {
                    grade = '🏆 Outstanding!';
                    message = "You're a true Quiz Master! Exceptional performance!";
                    circleClass = 'excellent';
                } else if (percentage >= 70) {
                    grade = '⭐ Great Job!';
                    message = 'Excellent knowledge! Keep pushing for perfection!';
                    circleClass = 'good';
                } else if (percentage >= 50) {
                    grade = '👍 Good Effort!';
                    message = 'Nice try! A bit more study and you\'ll ace it!';
                    circleClass = 'average';
                } else {
                    grade = '📚 Keep Learning!';
                    message = "Don't worry! Every quiz is a learning opportunity!";
                    circleClass = 'poor';
                }

                document.getElementById('resultsGrade').textContent = grade;
                document.getElementById('resultsMessage').textContent = message;

                const circle = document.getElementById('resultsCircle');
                circle.className = 'results-circle ' + circleClass;

                // Animate circle
                const circumference = 2 * Math.PI * 84; // ~527.79
                const offset = circumference - (percentage / 100) * circumference;
                document.getElementById('resultsProgress').style.strokeDashoffset = offset;

                // Performance chart
                renderPerformanceChart();

                // Answer review
                renderReview();

                // Confetti for good scores
                if (percentage >= 70) {
                    launchConfetti();
                }

            }, 300);
        }

        function renderPerformanceChart() {
            const chart = document.getElementById('performanceChart');
            chart.innerHTML = '';

            state.questions.forEach((q, i) => {
                const bar = document.createElement('div');
                bar.className = 'chart-bar';

                const answer = state.answers[i];
                const isCorrect = answer === q.answer;
                const isSkipped = answer === null || answer === -1;

                let height, color;
                if (isCorrect) {
                    height = '100%';
                    color = 'var(--success)';
                } else if (isSkipped) {
                    height = '30%';
                    color = 'var(--text-tertiary)';
                } else {
                    height = '50%';
                    color = 'var(--danger)';
                }

                bar.style.background = color;
                bar.style.height = height;
                bar.title = `Q${i+1}: ${isCorrect ? 'Correct' : isSkipped ? 'Skipped' : 'Wrong'}`;
                bar.innerHTML = `<span class="chart-bar-label">Q${i+1}</span>`;

                chart.appendChild(bar);
            });
        }

        function renderReview() {
            const container = document.getElementById('reviewContainer');
            container.innerHTML = '';

            state.questions.forEach((q, i) => {
                const userAnswer = state.answers[i];
                const isCorrect = userAnswer === q.answer;
                const isSkipped = userAnswer === null || userAnswer === -1;

                const card = document.createElement('div');
                card.className = 'review-card';

                let statusHtml;
                if (isCorrect) {
                    statusHtml = '<span class="review-status correct">✓ Correct</span>';
                } else if (isSkipped) {
                    statusHtml = '<span class="review-status wrong">⏭ Skipped</span>';
                } else {
                    statusHtml = '<span class="review-status wrong">✗ Incorrect</span>';
                }

                let answersHtml = '';
                q.options.forEach((opt, j) => {
                    let cls = 'neutral';
                    let icon = '';
                    if (j === q.answer && isCorrect) {
                        cls = 'user-correct';
                        icon = '✓ ';
                    } else if (j === q.answer && !isCorrect) {
                        cls = 'correct-answer';
                        icon = '✓ ';
                    } else if (j === userAnswer && !isCorrect) {
                        cls = 'user-wrong';
                        icon = '✗ ';
                    }
                    answersHtml += `<div class="review-answer ${cls}">${icon}${String.fromCharCode(65 + j)}. ${opt}</div>`;
                });

                card.innerHTML = `
                    <div class="review-header">
                        <span style="font-size:0.8rem; color:var(--text-tertiary);">Question ${i + 1}</span>
                        ${statusHtml}
                    </div>
                    <div class="review-question">${q.q}</div>
                    <div class="review-answers">${answersHtml}</div>
                `;

                container.appendChild(card);
            });
        }

        // ===== LEADERBOARD =====
        function saveToLeaderboard(entry) {
            let leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard') || '[]');
            leaderboard.push(entry);
            leaderboard.sort((a, b) => b.points - a.points);
            leaderboard = leaderboard.slice(0, 50); // Keep top 50
            localStorage.setItem('quizLeaderboard', JSON.stringify(leaderboard));
        }

        function updateLeaderboard() {
            const leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard') || '[]');
            const body = document.getElementById('leaderboardBody');

            if (leaderboard.length === 0) {
                body.innerHTML = `
                    <div class="leaderboard-empty">
                        <div class="leaderboard-empty-icon">🏆</div>
                        <p>No scores yet. Be the first to play!</p>
                    </div>
                `;
                return;
            }

            body.innerHTML = leaderboard.map((entry, i) => {
                const rankClass = i < 3 ? `rank-${i + 1}` : 'rank-default';
                const initial = entry.name.charAt(0).toUpperCase();
                return `
                    <div class="leaderboard-row">
                        <div><span class="rank-badge ${rankClass}">${i + 1}</span></div>
                        <div class="player-info">
                            <span class="player-avatar">${initial}</span>
                            <span class="player-name">${escapeHtml(entry.name)}</span>
                        </div>
                        <div><strong>${entry.score}/${entry.total}</strong></div>
                        <div>${formatTime(entry.time)}</div>
                        <div>${entry.category || '-'}</div>
                    </div>
                `;
            }).join('');
        }

        function updatePlayerCount() {
            const leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard') || '[]');
            const uniquePlayers = new Set(leaderboard.map(e => e.name)).size;
            document.getElementById('totalPlayers').textContent = uniquePlayers;
        }

        function confirmClearLeaderboard() {
            showModal(
                '🗑️',
                'Clear Leaderboard?',
                'This will permanently delete all scores. This action cannot be undone.',
                () => {
                    localStorage.removeItem('quizLeaderboard');
                    updateLeaderboard();
                    showToast('Leaderboard cleared!', 'success');
                    closeModal();
                }
            );
        }

        // ===== RESTART =====
        function restartQuiz() {
            state.currentQuestionIndex = 0;
            state.answers = new Array(state.questions.length).fill(null);
            state.score = 0;
            state.streak = 0;
            state.bestStreak = 0;
            state.isQuizActive = true;
            state.quizStartTime = Date.now();
            state.timeLeft = state.timePerQuestion;

            showSection('quiz');
            renderQuestionNav();
            loadQuestion();
            startTimer();

            showToast('Quiz restarted! Good luck! 🍀', 'info');
        }

        function confirmQuit() {
            showModal(
                '⚠️',
                'Quit Quiz?',
                'Your progress will be lost. Are you sure you want to quit?',
                () => {
                    clearInterval(state.timer);
                    state.isQuizActive = false;
                    closeModal();
                    showSection('hero');
                    showToast('Quiz ended. Come back anytime!', 'info');
                }
            );
        }

        // ===== MODAL =====
        function showModal(icon, title, message, onConfirm) {
            document.getElementById('modalIcon').textContent = icon;
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalMessage').textContent = message;
            document.getElementById('modalOverlay').classList.add('show');

            const confirmBtn = document.getElementById('modalConfirm');
            confirmBtn.onclick = onConfirm;
        }

        function closeModal() {
            document.getElementById('modalOverlay').classList.remove('show');
        }

        // Close modal on overlay click
        document.getElementById('modalOverlay').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) closeModal();
        });

        // ===== TOAST NOTIFICATIONS =====
        function showToast(message, type = 'info') {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;

            const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };

            toast.innerHTML = `
                <span class="toast-icon">${icons[type]}</span>
                <span>${message}</span>
            `;

            container.appendChild(toast);

            setTimeout(() => {
                toast.classList.add('hiding');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // ===== CONFETTI =====
        function launchConfetti() {
            const container = document.getElementById('confettiContainer');
            const colors = ['#6C5CE7', '#FD79A8', '#00CEC9', '#FDCB6E', '#FF6B6B', '#00B894', '#A29BFE'];

            for (let i = 0; i < 80; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = (Math.random() * 8 + 5) + 'px';
                confetti.style.height = (Math.random() * 8 + 5) + 'px';
                confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                confetti.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
                confetti.style.animationDelay = (Math.random() * 1.5) + 's';
                container.appendChild(confetti);
            }

            setTimeout(() => {
                container.innerHTML = '';
            }, 4000);
        }

        // ===== UTILITY FUNCTIONS =====
        function shuffleArray(array) {
            const arr = [...array];
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }

        function formatTime(seconds) {
            if (seconds < 60) return seconds + 's';
            const m = Math.floor(seconds / 60);
            const s = seconds % 60;
            return `${m}m ${s}s`;
        }

        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        // ===== KEYBOARD SHORTCUTS =====
        document.addEventListener('keydown', (e) => {
            if (!state.isQuizActive || state.currentSection !== 'quiz') return;

            const currentAnswer = state.answers[state.currentQuestionIndex];

            // Option selection with 1-4 or A-D
            if (currentAnswer === null) {
                const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
                const key = e.key.toLowerCase();
                if (key in keyMap) {
                    selectAnswer(keyMap[key]);
                }
            }

            // Navigation
            if (e.key === 'ArrowRight' || e.key === 'Enter') {
                if (currentAnswer !== null) nextQuestion();
            }
            if (e.key === 'ArrowLeft') {
                prevQuestion();
            }
        });

        // ===== 3D TILT EFFECT =====
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.category-card:hover');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });
        });

        document.addEventListener('mouseleave', () => {
            document.querySelectorAll('.category-card').forEach(card => {
                card.style.transform = '';
            });
        }, true);

        // Reset card transform on mouse leave
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });

        // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.result-stat-card, .review-card').forEach(el => {
            observer.observe(el);
        });
