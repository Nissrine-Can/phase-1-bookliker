

document.addEventListener("DOMContentLoaded", function() {
  
const BASE_URL =  'http://localhost:3000';
const bookUl = document.getElementById('list');
const showPanel = document.getElementById('show-panel');



function renderBook(book) {
    const bookLi = document.createElement('li');

    bookLi.textContent = book.title;
    bookLi.addEventListener('click', showDetails(book))

    bookUl.append(bookLi)

}


function showDetails(book) {
    const thumbnail = document.createElement('img');
    const description = document.createElement('p');
    const users = document.createElement('ul');
    const likeBtn = document.createElement('button')

    thumbnail.src = book.img_url;
    thumbnail.alt = `${book.title} image`;

    description.textContent = book.description;

    users.textContent = book.users

    likeBtn.textContent = "LIKE"
    //likeBtn.addEventListener('click', patchUser(book))

showPanel.append(thumbnail, description, users, likeBtn);
}
        
 function loadBooks() {
     fetch(BASE_URL + '/books')
     .then(resp => resp.json())
     .then(books => books.forEach(renderBook))
 }   
 loadBooks();

 function patchUser(book){
     fetch(BASE_URL + `books/${book.id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(book)
     })
     .then(resp => resp.json())
     .catch(error => console.error('Error:', error))
     .then(updatedUsers => { 
        console.log(updatedUsers);
        
        
       
    });
 } 
});
