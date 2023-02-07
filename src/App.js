import "./App.css";
import React from "react";
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const operations = ["=", "+", "-", "/", "*"];
class App extends React.Component {
  state = {
    currentNumber: "0",
    calc: undefined,
    operation: undefined,
  };
  handleClick = (e) => {
    const { currentNumber, calc, operation } = this.state;
    const { innerText } = e.target;

    if (!Number.isNaN(Number(innerText))) {
      if (currentNumber === "0") {
        this.setState({
          currentNumber: innerText,
        });
      } else {
        this.setState({
          currentNumber: currentNumber + innerText,
        });
      }
      return;
    }
    switch (innerText) {
      case "AC": {
        this.setState({
          currentNumber: "0",
          calc: undefined,
          operation: undefined,
        });
        break;
      }
      case ".": {
        if (!currentNumber.includes(".")) {
          this.setState({
            currentNumber: currentNumber + innerText,
          });
        }
        break;
      }
      default: {
        if (!operation) {
          this.setState({
            operation: innerText,
            calc: currentNumber,
            currentNumber: "0",
          });
        } else if (innerText === "=") {
          const evaluated = eval(`${calc} ${operation} ${currentNumber}`);
          this.setState({
            operation: undefined,
            calc: evaluated,
            currentNumber: evaluated,
          });
        } else {
          const evaluated = eval(`${calc} ${operation} ${currentNumber}`);
          this.setState({
            operation: innerText,
            calc: evaluated,
            currentNumber: evaluated,
          });
        }
      }
    }
  };

  render() {
    const { currentNumber, calc, operation } = this.state;
    return (
      <div className="calculator">
        <p className="pStyle">{JSON.stringify(this.state)}</p>
        <div className="display" id="display">
          <small>
            {calc} {operation}
          </small>
          {currentNumber}
        </div>

        <div className="number-container">
          <button
            className="redish ac big-horizontal"
            onClick={this.handleClick}
          >
            AC
          </button>
          {numbers.map((num) => (
            <button
              className={`basic ${num === 0 && "big-horizontal"}`}
              key={num}
              onClick={this.handleClick}
            >
              {num}
            </button>
          ))}
          <button className="redish positioning" onClick={this.handleClick}>
            .
          </button>
        </div>
        <div className="operation-container">
          {operations.map((op, id) => (
            <button className="green" key={op} onClick={this.handleClick}>
              <div className={`op`}>{op}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
