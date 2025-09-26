<<<<<<< HEAD
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const clear = document.getElementById('clear');
const counter = document.getElementById('counter');
const error = document.getElementById('error')

let count = 1
counter.textContent = count;

increment.addEventListener('click', () => {
    count++;
    counter.textContent = count;
    error.style.display = 'none'
    clear.style.display = 'block';
    decrement.disabled = false;
})

function clearFn() {
    count = 0;
    counter.textContent = count;
    error.style.display = 'block'
    clear.style.display = 'none';
    decrement.disabled = true;
}


decrement.addEventListener('click', () => {
    if (count === 1 || count === 0) {
        clearFn()
    }

    if(count > 1){
        count--;
        counter.textContent = count;
    }
})

clear.addEventListener('click', () => {
    clearFn()
})
=======
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const clear = document.getElementById('clear');
const counter = document.getElementById('counter');
const error = document.getElementById('error')

let count = 1
counter.textContent = count;

increment.addEventListener('click', () => {
    count++;
    counter.textContent = count;
    error.style.display = 'none'
    clear.style.display = 'block';
    decrement.disabled = false;
})

function clearFn() {
    count = 0;
    counter.textContent = count;
    error.style.display = 'block'
    clear.style.display = 'none';
    decrement.disabled = true;
}


decrement.addEventListener('click', () => {
    if (count === 1 || count === 0) {
        clearFn()
    }

    if(count > 1){
        count--;
        counter.textContent = count;
    }
})

clear.addEventListener('click', () => {
    clearFn()
})
>>>>>>> af53874f3c00af957cc055f7d3395a974528cb39
