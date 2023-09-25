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
        //console.log(data.data)  
        data.data.forEach(element => { 
            const markup = `<li class="list__item">${element.id} : ${element.first_name} 
              ${element.last_name} - ${element.email}</li>`
            listEl.insertAdjacentHTML('beforeend',markup)
        });
      });   
    };   

function fetchData2(){
//listEl.textContent =''
//  if (buttonTextEl.textContent='Back')fetchData()
//console.log('fetch2')
}

buttonEl.addEventListener('click',function(){
   if(buttonTextEl.textContent ==='Back') {
    listEl.innerHTML = " "
    fetchData()
    return
   }
    if (dataViewEl.textContent != "data overview")
    { dataViewEl.textContent = 'data overview' 
    fetchData();
    buttonTextEl.innerHTML = 'Reset'
    } else location.reload();
})

const listClickHandler = () =>
{
  event.preventDefault()
  const clickValue = event.target
  const myArrayText = clickValue.textContent.split(" ")
  //console.log('list clicked', clickValue, myArrayText[0])
  listEl.innerHTML = `<img src="https://reqres.in/img/faces/${myArrayText[0]}-image.jpg"> <li>${myArrayText[19]}</li>`
  buttonTextEl.innerHTML = 'Back'
  dataViewEl.textContent = 'Details'
}
listEl.addEventListener('click',listClickHandler)
