import { books } from "@/data/book";

export default function BooksPage() {
  return (
  <main>
    <h1>Books</h1>
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.status}</p>
        </li>
      ))}
    </ul>
  </main>
  )
}
