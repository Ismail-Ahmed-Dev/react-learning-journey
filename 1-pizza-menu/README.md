🍕 Fast React Pizza Company

A simple React application that displays a pizza menu for a fictional restaurant. The project demonstrates component-based architecture, props usage, conditional rendering, and basic styling in React.

🚀 Features

Display a list of pizzas from a data source.

Show pizza details (name, ingredients, price, image).

Handle "Sold Out" state dynamically.

Conditional rendering for an empty menu state.

Component-based structure (Header, Menu, Pizza, Footer).

Simple and clean UI with CSS styling.

🧱 Project Structure

src/
│
├── App.jsx
├── index.css
├── main.jsx
└── assets/
    └── pizzas/
        ├── focaccia.jpg
        ├── margherita.jpg
        ├── spinaci.jpg
        ├── funghi.jpg
        ├── salamino.jpg
        └── prosciutto.jpg


🧠 How It Works

The pizzaData array contains all the pizza information.

The Menu component maps over the data and renders a Pizza component for each item.

If no pizzas exist, a fallback message is shown.

The Pizza component checks if a pizza is sold out and updates the UI accordingly.

⚙️ Technologies Used

React (Functional Components)

JSX

CSS

JavaScript (ES6+)

📦 Installation & Setup

Clone the repository:

git clone https://github.com/your-username/fast-react-pizza.git


Navigate to the project folder:

cd 1-pizza-menu


Install dependencies:

npm install


Run the project:

npm run start


🎯 Learning Goals

Component composition in React

Props passing

Conditional rendering

Array mapping in JSX

Basic project structuring

📸 Preview

<img width="960" height="479" alt="image" src="https://github.com/user-attachments/assets/1a679700-6480-49ba-a619-ad1808fcd849" />

<img width="960" height="479" alt="image" src="https://github.com/user-attachments/assets/1e70fae5-d2ed-4f50-ae7a-1e5f4a059792" />



👨‍💻 Author

Built with Ismail Ahmed❤️ while learning React.
