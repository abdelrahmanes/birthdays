import React from "react";
import { Component } from "react";
import { Fragment } from "react";
import one from "../imgs/Bertie.jpg";
import two from "../imgs/hester.jpg";
import three from "../imgs/larry.jpg";
import four from "../imgs/sean.jpg";
import five from "../imgs/lola.jpg";
export default class Person extends Component {
  state = {
    items: [
      { id: 1, image: one, name: "Bertie Yates", age: 29 },
      { id: 2, image: two, name: "Hester Hogan", age: 32 },
      { id: 3, image: three, name: "Larry Little", age: 36 },
      { id: 4, image: four, name: "Sean Walsh", age: 34 },
      { id: 5, image: five, name: "Lola Gardner", age: 29 },
    ],
  };
  render() {
    return (
      <Fragment>
        {this.state.items.map((item) => {
          return (
            <div
              key={item.id}
              className="person-container flex items-center my-10 gap-4"
            >
              <div className="person-img  flex items-center justify-start">
                <img
                  src={item.image}
                  className="rounded-full h-20 w-20 object-cover"
                />
              </div>
              <div className="person-data">
                <h3 className="person-name font-bold tracking-wide text-gray-800 text-lg">
                  {item.name}
                </h3>
                <span className="person-age text-gray-500 text-lg">
                  {item.age} years
                </span>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}
