// HTML Elements
const no_habits_el = document.getElementById("no-habits");
const add_habits1_el = document.getElementById("add-habits1");

const habits_el = document.getElementById("habits");
const quote_el = document.getElementById("quote");
const habits_div_el = document.getElementById("habits-div");

let input_el = document.getElementById("input");

// Adding a habit from no habits
function changePage() {
    no_habits_el.style.display = "none";
    habits_el.style.display = "flex";
}

// Quote Generation
const quotes = [
    "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on. Sheryl Sandberg",
    "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end. Aristotle",
    "If the wind will not serve, take to the oars. Latin Proverb",
    // Add more quotes as needed
];

let random_quote = Math.floor(Math.random() * quotes.length);
let quote = quotes[random_quote];
quote_el.innerHTML = quote;


// Function for adding a habit
function addHabit() {
    const input = input_el.value;
    const new_habit = `
        <div class="habit" id="habit-${habit_num}">
            <h3>${input}</h3>
            <h3>Count: </h3>
            <h3 id="count-${habit_num}">0</h3>
            <br>
            <button onclick="incrementCount(${habit_num})"><img src="/media/check-bold.svg"></button>
        </div>`;
    habitDivArray.push(new_habit);
    habits_div_el.innerHTML = habitDivArray.join(''); // Join the array elements to display them correctly
    habitArray.push([habit_num, input, 0]); // Initialize the habit in the array
    habit_num++;
    saveToLocalStorage(); // Save to localStorage
}

// Function to increment the count for a specific habit
function incrementCount(habitIndex) {
    habitArray[habitIndex][2]++; // Increment the count in the array
    let counter = document.getElementById(`count-${habitIndex}`);
    counter.innerHTML = habitArray[habitIndex][2]; // Update the display
    console.log(habitArray); // Log the updated array
    saveToLocalStorage(); // Save to localStorage
}

