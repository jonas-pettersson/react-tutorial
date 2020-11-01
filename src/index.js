import React from "react";
import ReactDom from "react-dom";

import "./index.css";

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "I Love You to the Moon and Back";
  const author = "Amelia Hepworth";
  return (
    <article className='w3-container w3-card w3-white'>
      <ul className='w3-ul'>
        <li>
          <img
            src='https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg'
            alt=''
          />
        </li>
        <li>
          <h2>{title}</h2>
        </li>
        <li>
          <p className='w3-text-grey'>{author}</p>
        </li>
      </ul>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
