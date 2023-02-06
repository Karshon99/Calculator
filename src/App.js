import "./App.css";
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const operations = ["=", "+", "-", "÷", "×"];
function App() {
  return (
    <div className="calculator">
      <div className="display" id="display">
        12
      </div>

      <div className="number-container">
        <button className="redish ac big-horizontal">AC</button>
        {numbers.map((num) => (
          <button
            className={`basic ${num === 0 && "big-horizontal"}`}
            key={num}
          >
            {num}
          </button>
        ))}
        <button className="redish">·</button>
      </div>
      <div className="operation-container">
        {operations.map((op, id) => (
          <button className="green" key={op}>
            <div className={`op`}>{op}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
