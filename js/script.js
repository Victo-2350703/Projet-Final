const iconeReveal = document.querySelector('.icone-reveal');
const iconeReveal2 = document.querySelector('.icone-reveal2');
const inputPassword1 = document.querySelector('#password');
const inputPassword2 = document.querySelector('#Password');
function afficher()
{
    iconeReveal.classList.toggle('fa-eye');
    iconeReveal.classList.toggle('fa-eye-slash');
    if(inputPassword1.type == "password") 
    {
        inputPassword1.type="text";
    }
    else 
    {
        inputPassword1.type = "password";
    }
}

function afficher2()
{
    iconeReveal2.classList.toggle('fa-eye');
    iconeReveal2.classList.toggle('fa-eye-slash');
    if(inputPassword2.type == "password") 
    {
        inputPassword2.type="text";
    }
    else 
    {
        inputPassword2.type = "password";
    }
}

