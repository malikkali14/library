const myLibrary = [];

        function Book(title, author, pages, genre, desc, read){
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.genre = genre;
            this.desc = desc;
            this.read = read;
        }

        Book.prototype.toggleRead = function () {
            if(this.read == true){
                this.read = false;
            }
            else{
                this.read = true;
            }
        }
        
        function toggleRead(index) {
            myLibrary[index].toggleRead();
            renderBook();
        }

        function addBookToLibrary(book) {  
            myLibrary.push(book);
        }

        function removeBook(index) {
            myLibrary.splice(index,1);
            renderBook();
        }
        
        function renderBook() {
            let display = document.querySelector('#display');
            display.innerHTML = '';

            for(let i = 0; i < myLibrary.length; i++){
                let div = document.createElement('div');
                let hfour = document.createElement('h4');
                let hfive = document.createElement('h5');
                let hsix = document.createElement('h6');
                let p = document.createElement('p');
                let btnDiv = document.createElement('div');
                let deleteBtn = document.createElement('button');
                let updateBtn = document.createElement('button');


                div.classList.add("w-full", "max-w-sm", "p-4",  "rounded-lg", "shadow", "sm:p-8", "bg-gray-800", "border-gray-700");
                hfour.classList.add("mb-1", "text-2xl", "font-bold", "tracking-tight", "text-white");
                hfive.classList.add("mb-", "text-lg", "font-bold", "tracking-tight", "text-white");
                hsix.classList.add()
                p.classList.add("font-normal", "text-gray-400");
                btnDiv.classList.add("grid", "grid-cols-2", "gap-2", "mt-5", "text-center");
                deleteBtn.classList.add("flex", "items-center", "justify-center", "p-2", "text-base", "font-medium", "w-full", "rounded-lg", "text-white", "bg-red-500", "hover:bg-red-700", "group")
                updateBtn.classList.add("flex", "items-center", "justify-center", "p-2", "text-base", "font-medium", "w-full", "rounded-lg", "text-white", "bg-blue-500", "hover:bg-blue-700", "group")
                
                div.setAttribute('place', `${i}`)
                deleteBtn.setAttribute('id', 'deletebtn');
                updateBtn.setAttribute('id', 'updatebtn');

                display.appendChild(div);
                div.appendChild(hfour);
                div.appendChild(hfive);
                div.appendChild(p);
                div.appendChild(btnDiv);
                btnDiv.appendChild(updateBtn);
                btnDiv.appendChild(deleteBtn);

                hfour.textContent = myLibrary[i].title;
                hfive.textContent = `Written by ${myLibrary[i].author}. Contains ${myLibrary[i].pages} pages.`;
                p.textContent = myLibrary[i].desc;
                if(myLibrary[i].read == true){
                    updateBtn.textContent = "Read Book";
                }
                else{
                    updateBtn.textContent = "Not Read Book";
                }

                deleteBtn.textContent = "Delete Book";
                deleteBtn.addEventListener('click', () =>{
                    removeBook(i);
                })

                updateBtn.addEventListener('click', () => {
                    toggleRead(i);
                    if(updateBtn.textContent == "Read Book"){
                        updateBtn.textContent = "Not Read Book";
                    }
                    else{
                        updateBtn.textContent = "Read Book";
                    }
                })
            }
        }

        

        const bookFormButton = document.querySelector("#buttonsubmit");
        bookFormButton.addEventListener("click", (event) => {
            event.preventDefault();
            const title = document.querySelector("#title").value;
            const author = document.querySelector("#author").value;
            const pages = parseFloat(document.querySelector("#pages").value);
            const genre = document.querySelector("#genre").value;
            const desc = document.querySelector("#desc").value;
            const read = document.querySelector("#read").checked;

            let newBook = new Book(title, author, pages, genre, desc, read);
            addBookToLibrary(newBook);
            console.log(myLibrary);
            renderBook();
        })
