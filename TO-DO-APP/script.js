document.addEventListener('DOMContentLoaded', () => {
    let add = document.querySelector('.to-do:first-child');
    let checkbox1 = document.getElementById('check:first-child');
    let todo = document.getElementsByClassName('to-do');

    
    //add new todo
    checkbox1.addEventListener('click', (e) => {
        e.preventDefault();
        const value = add.value;
        const p = document.createElement('p')
        const span = document.createElement('span')
        p.textContent = value;
        
        span.classList.add('check');

        todo.appendChild(p);
        todo.appendChild(span);


    })
})