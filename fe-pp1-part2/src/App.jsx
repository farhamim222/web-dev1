import "./App.css";
import CreditCard from "./CreditCard/CreditCard";  // Ensure correct path
import BoxColor from "./BoxColor/BoxColor";        // Ensure correct path

function App() {
  return (
    <div className="App">
      <h1>LAB | React Training</h1>

      {/* Part 3: CreditCard Component */}
      <CreditCard
        type="Visa"
        number="0123456789018875"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010993"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016982"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />

      
    </div>
  );
}

export default App;
