'use strict';
//elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // when we have multiple elements 

//open modal events
const open = function() {
    console.log('button clicked');
    modal.classList.remove('hidden'); //removing a class from an element
    overlay.classList.remove('hidden');
};

//open modal event
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', open);
}

// close modal function
const close = function() {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
}

// close modal events 
btnCloseModal.addEventListener('click', close);

overlay.addEventListener('click', close);

//keyboard event 

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !(modal.classList.contains('hidden'))) {
        close();
    }
})