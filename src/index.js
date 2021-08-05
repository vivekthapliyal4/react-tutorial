import React from "react";
import reactDom from "react-dom";

// CSS
import "./index.css";

import {books} from './Books'

import Book from "./Book";

// import { greeting } from "./testing/testing";

// stateless functional component
// always return JSX

// JSX Rules
// return single element
// div / section / article or React fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// setup vars


function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return(
          <Book key={book.id} {...book} />
        )
        
      })}
    </section>
  );
}

// const Image = () => (
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/
// I/51tiopcLhuS._SX258_BO1,204,203,200_.jpg"
//     alt="bookimage"
//   />
// );

// const Title = () => <h1>As a man Thinketh</h1>;

// const Author = () => <h4>James Allen</h4>;

// const Greeting = () => {
//     return React.createElement('h1', {}, 'hello, world')
// }

reactDom.render(<BookList />, document.getElementById("root"));
