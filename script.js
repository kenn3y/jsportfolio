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


buttonEl.addEventListener('click',function(){
   if(buttonTextEl.textContent ==='Back') {
    listEl.innerHTML = " "
    fetchData()
    dataViewEl.textContent = 'data overview'
    buttonTextEl.innerHTML = 'Reset'
    return
   }
    if (dataViewEl.textContent != "data overview")
    { dataViewEl.textContent = 'data overview' 
    listEl.innerHTML = " "
    fetchData();
    buttonTextEl.innerHTML = 'Reset'
    } else location.reload();
})

const listClickHandler = () =>
{
  event.preventDefault()
  const clickValue = event.target
  const myArrayText = clickValue.textContent.split(" ")
  console.log(myArrayText[19], myArrayText[0])
  if(myArrayText[0]=== ''|| myArrayText[0].includes('reqres.in')){
    listEl.innerHTML = " "
    fetchData()
    buttonTextEl.innerHTML = 'Reset'
    dataViewEl.textContent = 'data overview'
    return
  }
  listEl.innerHTML = ` <img class="pic" src="https://reqres.in/img/faces/${myArrayText[0]}-image.jpg"> <li class="red">${myArrayText[19]}</li>`
  buttonTextEl.innerHTML = 'Back'
  dataViewEl.textContent = 'Details'
}
listEl.addEventListener('click',listClickHandler)




