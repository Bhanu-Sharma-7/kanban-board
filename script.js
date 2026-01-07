const todo = document.querySelector('#todo')
const progress = document.querySelector('#progress')
const done = document.querySelector('#done')

const tasks = document.querySelectorAll('.task')

let draggedElement = null

tasks.forEach(task => {
    task.addEventListener("drag", (e) => {
        // console.log(e)
        draggedElement = task
    })
});


function addDragEventOnColumn(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over")
    })
    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over")
    })
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    column.addEventListener("drop", (e) => {
        e.preventDefault();
        console.log("dropped", draggedElement, column)
        column.appendChild(draggedElement);
        column.classList.remove("hover-over")
    })
}

addDragEventOnColumn(todo)
addDragEventOnColumn(progress)
addDragEventOnColumn(done)