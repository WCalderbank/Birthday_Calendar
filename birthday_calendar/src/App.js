import React, { useState } from "react";
import "./App.css";
import List from "./Components/List";
import Birthday_data from "./Components/Birthday_data";

function App() {
  const [birthdays, setbirthdays] = useState(Birthday_data);
  return (
    <main>
      <section className="bday-container">
        <h3> {birthdays.length} Birthdays Today</h3>
        <List birthdays={birthdays} />
        <button onClick={() => setbirthdays([])}> CLEAR </button>
      </section>
    </main>
  );
}

export default App;
