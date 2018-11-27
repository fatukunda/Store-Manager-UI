import image from '../img/logo.png'
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
    let response = await fetch(url, fetchData)
    return response.json();
}

const login = () => {
    loginInfo()
        .then((data) => {
            setCookie(data.access_token)
            const user_type = data.user_type
            if(user_type === 'admin'){
                window.location = './admin.html'
            }
            else if(user_type === 'user'){
                window.location =`./attendant.html?searchId =${data.user_id}`
               
            }
        })
        .catch(error => console.log(error))
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

