let addForm = document.querySelector('.add')
let taskList = document.querySelector('.tasks')
let clearAll = document.querySelector('.clear')
let message = document.querySelector('.message')
let searchForm = document.querySelector('.search')

let count = taskList.childElementCount
message.innerText = `you hav ${count} tasks pending`


addForm.addEventListener('submit', (event) =>{

    event.preventDefault()
    const task = addForm.task.value.trim()

    if(task.length != 0){
        count++
        message.innerText = `you hav ${count} tasks pending`

        addForm.reset();
        taskList.innerHTML += `<li> <span> ${task}</span><i class="bi bi-trash"></i></li>`
    }

})

taskList.addEventListener('click', (event)=> {
 
    if(event.target.classList.contains('bi-trash')){
        event.target.parentElement.remove()
        count--
        message.innerText = `you hav ${count} tasks pending`
    }
}) 


clearAll.addEventListener('click', (event) => {
    let tasks = taskList.querySelectorAll('li')

    tasks.forEach(task => {
        task.remove();
    })

    count = 0
    message.innerText = `you hav ${count} tasks pending`

})

function filter(searchInput){
    let arr = Array.from(taskList.children).filter(task => {
        return !task.textContent.toLocaleLowerCase().includes(searchInput)
    })

    arr.forEach(child => {
        child.classList.add('hide')
    })

    let arr2 = Array.from(taskList.children).filter(task => {
        return  task.textContent.toLocaleLowerCase().includes(searchInput)
    })

    arr2.forEach(child => {
        child.classList.remove('hide')
    })
    
}


searchForm.addEventListener('keyup', (event) => {
    let searchInput = searchForm.task.value.trim().toLowerCase();
    filter(searchInput)
    
})


searchForm.addEventListener('click', event => {
    if(event.target.classList.contains('reset')) {
        searchForm.reset()
    }

    filter('')
})