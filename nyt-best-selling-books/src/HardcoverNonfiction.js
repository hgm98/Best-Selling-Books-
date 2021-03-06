import React, { useState, useEffect } from "react";
import Book from "./Book";

function HardcoverNonfiction() {
  useEffect(() => {
    fetchHF();
  }, []);

  const [items, setItems] = useState([]);

  const fetchHF = async () => {
    const response = await fetch(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=zV2AxAY7HNuX4QQaPsOsTik531GiFbjS"
    );
    const data = await response.json();
    console.log(data);
    setItems(data.results.books);
  };

  return (
    <div>
      <h1>Hardcover Nonfiction</h1>

      {items.map((item) => (
        <Book
          title={item.title}
          author={item.author}
          description={item.description}
          amazon_link={item.amazon_product_url}
          image={item.book_image}
        />
      ))}
    </div>
  );
}

export default HardcoverNonfiction;
