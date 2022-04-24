const booksTable = document.getElementById("books-table");
const booksTableBody = booksTable.querySelector("tbody");

const wishlist = [];

function addToWishlist(id) {
  wishlist.push(id);
  //console.log(wishlist);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

// Daten fetchen - alle Bücher

const books = fetch("https://bookmonkey-api.jgreg.uber.space/books")
  .then((response) => response.json())
  .then((booksData) => {
    //console.log(booksData);
    booksTableBody.innerHTML = "";

    for (book of booksData) {
      //console.log(book);
      const tr = document.createElement("tr");

      const titleTd = document.createElement("td");
      titleTd.textContent = book.title;

      const isbnTd = document.createElement("td");
      isbnTd.textContent = book.isbn;

      const buttonTd = document.createElement("td");
      const button = document.createElement("button");
      button.textContent = "Add";

      console.log(book.id);

      const id = book.id;
      button.addEventListener("click", () => {
        addToWishlist(id);
      });

      buttonTd.appendChild(button);

      tr.appendChild(titleTd);
      tr.appendChild(isbnTd);
      tr.appendChild(buttonTd);

      booksTableBody.appendChild(tr);
    }
  });
