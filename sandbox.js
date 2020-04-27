// const para = document.querySelector('body > h1');

// console.log(para);

// const paras = document.querySelectorAll('p');
// const errores = document.querySelectorAll('.error');
// // paras.forEach(para => {
// //     console.log(para)
// // })
// console.log(errores);

// -- Get an element by ID
// const title = document.getElementById('Page-title');
// console.log(title);

// -- Get elements by theis class name
// const  errores = document.getElementsByClassName('error');
// console.log(errores);
// console.log(errores[0]);

// --Get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

const para = document.querySelector('p');
//console.log(para.innerText);
//para.innerText = 'Sheila Elizabeth Vazquez Chimay'

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += 'new text';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML); 
// content.innerHTML += '<h2> THIS IS A NEW H2 </h2>'

// const people = ['Armando', 'Adrian', 'Jesus'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.youtube.com')
// link.innerText = "Youtube Website";

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'suceess')
// mssg.setAttribute('style', 'color: red');

// const title = document.querySelector('h2');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'blue'
// title.style.fontSize ='60px';
// title.style.margin = '';

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('sucess');

const para = document.querySelectorAll('p');

para.forEach(element => {
    if(element.textContent.includes('error')){
        element.classList.add('error')
    }
    if(element.innerText.includes('sucess')){
        element.classList.add('sucess');
    }
});

const title = document.querySelector('.title');

title.classList.toggle('example');
title.classList.toggle('example');