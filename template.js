function booksTemplate(book, index){
    let bookElement = document.createElement("div");
    bookElement.classList.add("book-item");

    bookElement.innerHTML = `
      <h2>${book.name}</h2>
      <div>
        <img src="img/book-438935_640.png" alt="Book"/>
      </div>
      <div class="first-content">
        <p>${book.price}€</p>
        <p>
            <span>${book.likes} 
            <input type="checkbox" id="heart-${index}" ${book.liked ? 'checked' : ''} onclick="toggleLike(${index})">
            <label for="heart-${index}"></label>
          </span>
        </p>
      </div>
      <br>
      <div class:"secend-content">
        <p>Author: <span class="create-content">${book.author}</span></p>
        <p>Published: <span class="create-content"> ${book.publishedYear}</span></p>
        <p>Genre: <span class="create-content">${book.genre}</span></p>
      </div>
      <div class="comment-section">
        <h3>Kommentare:</h3>
        <ul>
          ${book.comments.map(comment => `<li><strong>${comment.name}:</strong> ${comment.comment}</li>`).join('')}
        </ul>
      </div>
      <textarea id="new-comment-${index}" class="comment-input" placeholder="Add new comment..."></textarea>
      <button class="comment-button" onclick="addComment(${index})">Add comment</button>
    `;

    return bookElement;
}