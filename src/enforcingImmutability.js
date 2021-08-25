/* 
// Mutable Object
let book = { name: "old path white clouds" }
let publishBook = (book) => {
  book.published = true
}
publishBook(book)
console.log(book); // {name: "old path white clouds", published: true}
 */

// Immutable Object
import { Map } from "immutable"
let book = Map({ name: "old path white clouds" })
let publishBook = (book) => {
  return book.set("isPublished", true) // does not change the original object
  
}
const newBook = publishBook(book)
console.log(book.get("name")); // old path white clouds
console.log(book.toJS()); // {name: "old path white clouds"}
console.log("newbook: ", newBook.toJS()); // {name: "old path white clouds", isPublished: true}