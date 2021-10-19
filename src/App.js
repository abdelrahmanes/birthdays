import React, { Fragment, Component } from "react";
import "./App.css";
import Person from "./components/Person";
// import ClearBtn from "./components/clearBtn";
class App extends Component {
  state = {
    active: true,
  };
  clickHandel = () => {
    return this.setState({
      active: false,
    });
  };
  render() {
    return (
      <Fragment>
        <div className="container w-1/3 m-auto my-20 p-9 rounded-lg shadow-2xl bg-white">
          <h2 className="text-3xl tracking-wide text-gray-700 mb-8">
            {this.state.active ? 5 : 0} birthdays today
          </h2>
          {this.state.active ? <Person /> : null}
          <div className="mt-10">
            <a
              href="#"
              className="bg-pink-300 py-3 px-44 mx-auto text-white text-xl my-20"
              onClick={this.clickHandel}
            >
              Clear All
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
