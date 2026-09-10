import { books } from "@/data/book";

export default function BooksPage() {
  return (
  <main>
    <h1 className="font-bold text-4xl mb-4">Books</h1>
    <ul>
        {books.map((book) => (
          <li key={book.id} className="mb-4">
            <p className="text-2xl font-bold">{book.title}</p>
            <p>{book.author}</p>
            <p>{book.status}</p>
          </li>
        ))}
    </ul>
  </main>
  )
}
