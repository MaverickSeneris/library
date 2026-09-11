import type { Book } from "@/types/book"

type BookCardProps = {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <li className="mb-4">
      <p className="text-2xl font-bold">{book.title}</p>
      <p>{book.author}</p>
      <p>{book.status}</p>
    </li>
  )
}
