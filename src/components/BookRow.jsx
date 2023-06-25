function BookRow({ book }) {
    const NoFree = book.isFree ? "" :
      <span style={{ color: 'grey' }}>
        На руках
      </span>;
  
  const NOFreeImage = book.isFree ? <img class="bookImg" alt={book.title} src={book.img} />:
  <img class="bookImg grayscale" alt={book.title} src={book.img} />;
  
    return (
      
      <div class="param">
            <div class="isFree">{NoFree}</div>
            <div class="bookId">{book.id}</div>
             {NOFreeImage}
            <div class="author">{book.author}</div>
            <div class="title">{book.title}</div>
      </div>
  
    );
  }

  export default BookRow;