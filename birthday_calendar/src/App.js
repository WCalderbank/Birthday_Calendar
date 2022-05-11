import "./App.css";
import List from "./Components/List";

function App() {
  return (
    <main>
      <section className="bday-container">
        <h3> (num) Birthdays Today</h3>
        <List />
        <button onClick={() => console.log("Deleted List")}> CLEAR </button>
      </section>
    </main>
  );
}

export default App;
