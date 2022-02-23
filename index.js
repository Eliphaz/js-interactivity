console.log('javascript loaded')

let inputFeild = document.querySelector('input')
let form = document.querySelector('form')
let message = document.getElementById('message')

const addMovie = (event) =>{
event.preventDefault()
let movie = document.createElement('li')
let movieTitle = document.createElement("SPAN")
movieTitle.textContent = inputFeild.value
movieTitle.addEventListener('click',crossOffMovie)
movie.appendChild(movieTitle)
deleteBtn = document.createElement('button')
deleteBtn.textContent = 'X'
deleteBtn.addEventListener('click', deleteMovie)
movie.appendChild(deleteBtn)
document.querySelector('ul').appendChild(movie)
inputFeild.value = ''
deleteBtn.addEventListener('click', deleteMovie)
}

const deleteMovie =(event)=>{
    event.preventDefault()
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'
}

const crossOffMovie =(event)=>{
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = "Movie Watched!"
    }else{
        message.textContent = "Movie added Back!"
    }
}

form.addEventListener('submit',addMovie)