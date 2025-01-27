// script.js
const calendarDates = document.getElementById("calendar-dates");
const monthYear = document.getElementById("month-year");
const prevMonthButton = document.getElementById("prev-month");
const nextMonthButton = document.getElementById("next-month");
const clearButton = document.getElementById("clear-selection");

let selectedDate = null;
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const renderCalendar = () => {
  calendarDates.innerHTML = "";

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  // Update month-year header
  const options = { year: "numeric", month: "long" };
  monthYear.textContent = new Date(currentYear, currentMonth).toLocaleDateString("en-US", options);

  // Fill in dates from previous month
  for (let i = firstDay - 1; i >= 0; i--) {
    const dateElem = document.createElement("div");
    dateElem.className = "date inactive";
    dateElem.textContent = daysInPrevMonth - i;
    calendarDates.appendChild(dateElem);
  }

  // Fill in dates for the current month
  for (let i = 1; i <= daysInMonth; i++) {
    const dateElem = document.createElement("div");
    dateElem.className = "date";
    dateElem.textContent = i;

    // Highlight today's date
    if (i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
      dateElem.classList.add("selected");
    }

    // Add click event to select the date
    dateElem.addEventListener("click", () => {
      if (selectedDate) {
        selectedDate.classList.remove("selected");
      }
      dateElem.classList.add("selected");
      selectedDate = dateElem;
    });

    calendarDates.appendChild(dateElem);
  }

  // Fill in dates from next month
  const remainingSlots = 42 - calendarDates.childNodes.length;
  for (let i = 1; i <= remainingSlots; i++) {
    const dateElem = document.createElement("div");
    dateElem.className = "date inactive";
    dateElem.textContent = i;
    calendarDates.appendChild(dateElem);
  }
};

// Navigate to the previous month
prevMonthButton.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

// Navigate to the next month
nextMonthButton.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

// Clear the selected date
clearButton.addEventListener("click", () => {
  if (selectedDate) {
    selectedDate.classList.remove("selected");
    selectedDate = null;
  }
});

// Render the initial calendar
renderCalendar();
