import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <header className="header">
        <h1>Fast React Pizza Company</h1>
      </header>
    </>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>

        {pizzas.length > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious.
            </p>
            <ul className="pizzas">
              {pizzaData.map((pizza) => (
                <Pizza pizzaObject={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        ) : (
          <h1> Sory we don't have pizza for now</h1>
        )}
      </main>
    </>
  );
}

function Pizza({ pizzaObject }) {
  return (
    <>
      <li className={pizzaObject.soldOut ? "pizza sold-out" : "pizza"}>
        <img src={pizzaObject.photoName} alt={pizzaObject.name} />
        <div>
          <h3>{pizzaObject.name}</h3>
          <p> {pizzaObject.ingredients} </p>
          <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
        </div>
      </li>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="order">
          <p>We're open until 22:00 come visit us or order online</p>
          <button className="btn">Order now</button>
        </div>
      </footer>
    </>
  );
}

export default App;
