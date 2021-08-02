import React from "react";
import reactDom from "react-dom";

// CSS
import "./index.css";

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

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51tiopcLhuS._SX258_BO1,204,203,200_.jpg",
  title: "As a man thinketh",
  author: "James Allen",
};

const secondBook = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/41xME4JDBFS._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "Metamorphosis",
  author: "Franz Kafka",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus autem laboriosam dolorum odio similique quasi quisquam
          doloribus repudiandae minima iste?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book />
      <Book />
    </section>
  );
}

const Book = (props) => {
  const {img, title, author} = props;
  return (
    <article className="book">
      <img src={img} alt="bookimage" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}

      {/* {console.log(props)} */}
      {/* {<p>{let x = 6} </p>} */}
    </article>
  );
};

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
