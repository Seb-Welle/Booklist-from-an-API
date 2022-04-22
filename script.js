const booksTable = document.getElementById("books-table");

// Daten fetchen - alle Bücher

const books = fetch("https://bookmonkey-api.jgreg.uber.space/books")
  .then((response) => response.json())
  .then((booksData) => {
    console.log(booksData);
  });
