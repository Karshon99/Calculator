import "./App.css";
import React from "react";
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const operations = [, "+", "-", "/", "*"];
const ids = {
  7: "seven",
  8: "eight",
  9: "nine",
  4: "four",
  5: "five",
  6: "six",
  1: "one",
  2: "two",
  3: "three",
  0: "zero",
  "+": "add",
  "-": "subtract",
  "/": "divide",
  "*": "multiply",
};
class App extends React.Component {
  state = {
    lastPressed: undefined,
    calc: "0",
    operation: undefined,
  };
  handleClick = (e) => {
    const { calc, lastPressed } = this.state;
    const { innerText } = e.target;
    switch (innerText) {
      case "AC": {
        this.setState({
          calc: "0",
        });
        break;
      }
      case "=": {
        const evaluated = eval(calc);
        this.setState({
          calc: evaluated.toString(),
        });
        break;
      }
      case ".": {
        const splitted = calc.split(/[+\-\*\/]/);
        const last = splitted.slice(-1)[0];

        if (!last.includes(".")) {
          this.setState({
            calc: calc + ".",
          });
        }
        break;
      }
      default:
        {
          let ex = undefined;
          if (operations.includes(innerText)) {
            if (operations.includes(lastPressed) && innerText !== "-") {
              ex = calc.slice(0, -3) + ` ${innerText} `;
            } else {
              ex = `${calc} ${innerText} `;
            }
          } else {
            ex = calc === "0" ? innerText : calc + innerText;
          }

          this.setState({
            calc: ex,
          });
        }
        this.setState({
          lastPressed: innerText,
        });
    }
  };

  render() {
    const { calc } = this.state;
    return (
      <div className="calculator">
        <p className="pStyle">{JSON.stringify(this.state)}</p>
        <div className="display" id="display">
          {calc}
        </div>

        <div className="number-container">
          <button
            className="redish ac big-horizontal"
            onClick={this.handleClick}
            id="clear"
          >
            AC
          </button>
          {numbers.map((num) => (
            <button
              className={`basic ${num === 0 && "big-horizontal"}`}
              key={num}
              onClick={this.handleClick}
              id={ids[num]}
            >
              {num}
            </button>
          ))}
          <button
            className="redish positioning"
            onClick={this.handleClick}
            id="decimal"
          >
            .
          </button>
        </div>
        <div className="operation-container">
          {operations.map((op, id) => (
            <button
              className="green"
              key={op}
              onClick={this.handleClick}
              id={ids[op]}
            >
              <div className={`op`}>{op}</div>
            </button>
          ))}
          <button className="green" onClick={this.handleClick} id="equals">
            =
          </button>
        </div>
      </div>
    );
  }
}
export default App;
