import React from "react";
import ReactDOM from "react-dom/client";
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
    <div className="container ">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1> Fast React Pizza Co.</h1>
    </header>
  );

  // const style = { color: "red", textTransform: "uppercase" };
  // return <h1 style={style}>Fast React Pizza Co.</h1>;
  //--------------------------------------------------------------
  //(
  // <h1 style={{ color: "red", textTransform: "uppercase" }}>
  //   Fast React Pizza Co.
  // </h1>
  //);
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic italian cuisine. 6 creative dishes to choose form . all
            from our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              // <Pizza name={pizza.name} photoName={pizza.photoName} />
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are working on our menu, please comeback later</p>
      )}
      {/* <ul className="pizzas">
        {pizzaData.map((pizza) => (
          // <Pizza name={pizza.name} photoName={pizza.photoName} />
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul> */}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    // <div>
    //   <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci"></img>
    //   <h3>Pizza Spinaci</h3>
    //   <p>Tomato, mozarella, spinach, and ricotta cheese </p>
    // </div>
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openhour = 12;
  const closehour = 22;
  const isopen = hour >= openhour && hour <= closehour;
  // let isopen = "";
  // if (hour >= openhour && hour <= closehour) {
  //   isopen = "open";
  // } else {
  //   isopen = "close";
  // }

  // if (hour >= openhour && hour <= closehour) alert("We are currently open");
  // else alert("Sorry we are closed");
  // if (!openhour) {
  //   <p>
  //     we are happy to welcome you between {openhour}:00 and {closehour}:00
  //   </p>;
  // }
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}.We are currently {isopen}! */}
      {isopen ? (
        <Order closehour={closehour} />
      ) : (
        <p>
          we are happy to welcome you between {openhour}:00 and {closehour}:00
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We are currently open!"); //metodo Html
}

function Order(props) {
  return (
    <div className="order">
      <p>we are open, you can order until {props.closehour}:00</p>

      <button className="btn">order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);

//react v18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
