import image from '../img/logo.png'
const errorMessage = document.getElementById('error')
const loader = document.getElementById('loader')
const homeLogo = document.getElementById('logo');
if(homeLogo != null){
    homeLogo.src = image
}
const form = document.getElementById('form-login');

async function loginInfo (){
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const url = 'https://store-manager-api-heroku.herokuapp.com/api/v1/auth/login';
    const data = {
        username: username.value,
        password: password.value
    }
    let fetchData = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    loader.style.display = 'block'
    let response = await fetch(url, fetchData)
    if(response.status === 403){
        errorHandler("Invalid username or password")
        loader.style.display = 'none'
    }else{
        return response.json();
    }
    
}

const login = () => {
    loginInfo()
        .then((data) => {
            if(data !== undefined){
                setCookie(data.access_token)
                const user_type = data.user_type
                if(user_type === 'admin'){
                    window.location = './admin.html'
                }
                else if(user_type === 'user'){
                    window.location =`./attendant.html?searchId =${data.user_id}`
                   
                } 
            }
            
        })
        .catch((error) => {
            console.log(error)
        })
    }

const errorHandler = (error) => {
    errorMessage.innerHTML = error
    errorMessage.style.display = 'block'
}
  

const setCookie = (token) => {
    window.sessionStorage.setItem('token', token)
}
if (form !== null) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        login()
    });
}
window.addEventListener('load', (event) => {
    event.preventDefault();
    errorMessage.style.display = 'none'
    loader.style.display = 'none'
})

