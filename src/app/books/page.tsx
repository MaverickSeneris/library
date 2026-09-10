import { books } from "@/data/book";

export default function BooksPage() {
  return (
  <main>
    <h1 className="font-bold text-4xl mb-4">Books</h1>
    <ul>
      {books.map((book) => (
        <li key={book.id} className="mb-4">
          <h2 className="font-bold mb-1">{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.status}</p>
        </li>
      ))}
    </ul>
  </main>
  )
}
