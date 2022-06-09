function Books(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return this.title
        } 
    }

const hobbit = new Books('Hobbit', 'JRR tolkien', 289, 'not')
console.log(hobbit.info())