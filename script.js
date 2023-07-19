const submit = document.querySelector('.create-account');
let error = document.querySelector('.error');
const login = document.querySelector('.link');

submit.addEventListener('click',()=>{
    let password = document.getElementById('password').value;
    let conf = document.getElementById('confirm').value;

    if( password === ''){
        error.style.display = "block";
        error.textContent = 'MUST ENTER PASSWORD';
    }else if(password !== conf){
        error.style.display = "block";
        error.textContent = 'PASSWORDS DO NOT MATCH';
    }else{
        error.style.display = "none";
    }
})
login.addEventListener('click',()=>{
    error.textContent = "DONT LIE TO ME" 
    error.style.display = 'block';
})

