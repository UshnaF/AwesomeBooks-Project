var title = document.getElementById("title");
var author = document.getElementById("author");
var bookLst = document.getElementById("lst");
var existingBooks = JSON.parse(localStorage.getItem('books')) || [];


function ADD() {
    if (title.value == "" && author.value == "") {
        alert("Input fields are Empty");
    } else if (title.value == "") {
        alert("Enter Book Title");
    } else if (author.value == "") {
        alert("Enter Author Name");
    } else {
        console.log("btn clicked");

        var newBook = {
            title: title.value,
            author: author.value
        };
        existingBooks.push(newBook);

        localStorage.setItem('books', JSON.stringify(existingBooks));

        title.value = "";
        author.value = "";

    }
}

function loadBooks() {
    console.log('load books called');
    var bookLst = document.getElementById("lst");

    var books = JSON.parse(localStorage.getItem('books')) || [];

    books.forEach(function (book) {
        var li = document.createElement('li');
        li.setAttribute('class', 'Blist');
        var div = document.createElement('div');
        div.setAttribute('class', 'books');
        var div2 = document.createElement('div');
        var h4 = document.createElement('h3');
        var p = document.createElement('p');
        var btn = document.createElement('button');
        btn.innerHTML = "Remove";
        btn.setAttribute('class', 'removebtn');
        btn.onclick = () => {
            li.style.display = "none";
            existingBooks.splice(this, 1);
            localStorage.setItem('books', JSON.stringify(existingBooks));
        };
        h4.innerHTML = book.title;
        p.innerHTML = book.author;

        bookLst.appendChild(li);
        li.appendChild(div2);
        li.appendChild(div);
        div2.appendChild(h4);
        div2.appendChild(p);
        div.appendChild(btn);

    });
}


loadBooks();