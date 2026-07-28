let form = document.querySelector('.nhap-thong-tin');
let input = document.querySelector('.input');
let email = document.querySelector('.email');
let thongtin = document.getElementById('bao-mat');
let details = document.querySelectorAll('.detail');
let morebtns = document.querySelectorAll('.btn-warning');
let lessbtns = document.querySelectorAll('.btn-secondary');
let infos = document.querySelectorAll('.info');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value === email.textContent) {
        thongtin.classList.remove('hidden');
        form.classList.add('hidden');
    } else {
        alert('Sai thông tin!');
    }
});

for (let i = 0; i<morebtns.length; i++) {
    morebtns[i].addEventListener('click', function (){
        details[i].classList.remove('hidden');
        lessbtns[i].classList.remove('hidden');
        infos[i].classList.add('shown');
    })
    lessbtns[i].addEventListener('click', function () {
        details[i].classList.add('hidden');
        lessbtns[i].classList.add('hidden');
        infos[i].classList.remove('shown');
    })
}


