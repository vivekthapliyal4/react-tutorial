import React from 'react'

const Book = ({img, title, author}) => {
    // const { img, title, author } = props.book; 
  
    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = (e) =>{
      console.log(e);
      console.log(e.target)
      alert('button clicked')
    }
  
    const complexExample = (author) =>{
      console.log(author)
    }
    return (
      <article className="book" 
      onMouseOver={() => {
        console.log(title)
      }}>
        <img src={img} alt="bookimage" />
        <h1 onClick={()=> console.log(title)}>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>click me</button>
        <button type="button" onClick={() => complexExample(author)}>click me</button>
        {/* {console.log(props)} */}
        {/* {<p>{let x = 6} </p>} */}
      </article>
    );
  };

export default Book




