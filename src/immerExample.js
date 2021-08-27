import { produce } from "immer";

let book = {
  name: "old path white clouds",
  address: { city: "abc", state: "qwerty" },
};
let publishBook = (book) => {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
    draftBook.address.city = "xyz";
  });
};
let updatedBook = publishBook(book);
console.log(book);
console.log(updatedBook);
