# React Project

This is a React project that includes two components: ListComparison and PomodoroClock.

## ListComparison

The ListComparison component allows you to compare two lists and find the differences between them. It takes two input fields where you can enter comma-separated items for List A and List B. When you click the "Compute" button, it calculates and displays the following results:

- Items present only in List A.
- Items present only in List B.
- Items present in both List A and List B.
- Combined items from List A and List B (without duplicates).

## PomodoroClock

The PomodoroClock component is a timer for the Pomodoro technique. It has the following features:

- You can set the work time, break time, and cycle limit as props when using this component.
- The timer starts with the specified work time in minutes.
- When the timer reaches 0, it automatically switches to the break time.
- After completing a cycle (work time + break time), it increments the cycle count.
- You can start, pause, and reset the timer using the provided buttons.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/the-iconic-rihan/InnerHour-Assignment.git`
2. Navigate to the project directory: `cd InnerHour-Assignment`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to see the application.

## Dependencies

This project has the following dependencies:

- React: `version`
- ReactDOM: `version`

Make sure you have these dependencies installed in your project directory before running the application.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.


