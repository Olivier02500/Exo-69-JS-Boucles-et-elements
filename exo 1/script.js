/*
variable
 */
let liste = document.getElementById('liste-commissions');
let text = document.getElementById('text');
let submit = document.getElementById('button');


submit.addEventListener('click', function() {
    let creatLi = document.createElement('li');
    creatLi.innerHTML = text.value;
    liste.appendChild(creatLi);
})


