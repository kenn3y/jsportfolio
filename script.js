const dataViewEl = document.querySelector('.dataView');
const buttonEl =document.querySelector('.counter__reset-button');
const listEl = document.querySelector('.list');
const buttonTextEl = document.querySelector('.buttonText');
const inputEl = document.querySelector('.input')

function fetchData(){
   fetch('https://reqres.in/api/users')
    .then(res => {
        return res.json();
    })
    .then(data =>  {
        console.log(data.data)  
        data.data.forEach(element => { 
            const markup = `<li class="list__item">${element.id} : ${element.first_name} 
              ${element.last_name} - ${element.email}</li>`
            listEl.insertAdjacentHTML('beforeend',markup)
        });
      });   
    };   

buttonEl.addEventListener('click',function(){
    if (dataViewEl.textContent != "data overview")
    { dataViewEl.textContent = 'data overview' 
    fetchData();
    buttonTextEl.innerHTML = 'Reset'
    } else location.reload();
})


