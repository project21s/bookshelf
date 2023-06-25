import BookRow from "./BookRow";

function BookTable({ books, filterText, inStockOnly }) {
    const rows = [];
  
    books.forEach((book) => {
      if (
        book.title.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) === -1
      ) {
        if (
          book.author.toLowerCase().indexOf(
            filterText.toLowerCase()
          ) === -1
        ) {
          return;
        }
      }
      
      if (inStockOnly && !book.isFree) {
        return;
      }
      rows.push(
        <BookRow
          book={book}
          key={book.id} />
      );
    });

    return (
        <table>
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }

    export default BookTable;