const name= document.querySelector('#name');
const form= document.querySelector('#upForm');
const laetname= document.querySelector('#laetname');
const mabile= document.querySelector('#mabile');
const email= document.querySelector('#email');
const passvord= document.querySelector('#passvord');
const confirm= document.querySelector('#confirm');
const abel1= document.querySelector('#abel1');
const button= document.querySelector('#button');
const vrapper= document.querySelector('#vrapper');
const table= document.querySelector('table');
const tbody= document.querySelector('tbody');
const tr= document.querySelector('tr');

// console.log(tbody)
function validater(){
   if(name.value.length<3){
    alert('ism uch belgidan kam bo`lmasin');
    name.focus();
    name.style.outlineColor ='red';
    return false;
   }
   if(laetname.value.length<3){
    alert('familya uch belgidan kam bo`lmasin');
    laetname.focus();
    laetname.style.outlineColor ='red';
    return false;
   }
   if(mabile.value>14 && mabile.value<7){
    alert('nomer xato');
    mabile.focus();
    mabile.style.outlineColor ='red';
    return false;
   }
   if(email.value.length<3){
    alert('bunday email qabul qilinmaydi');
    email.focus();
    email.style.outlineColor ='red';
    return false;
   }
   if(passvord.value.length>3 && passvord.value.length<5){
    alert('4 xonali son kiriting');
    passvord.focus();
    passvord.style.outlineColor ='red';
    return false;
   }
   if(passvord.value.length>3 && passvord.value.length<5){
    alert('oldingi kodni takrorlang');
    passvord.focus();
    passvord.style.outlineColor ='red';
    return false;
   }
    return true;
}
function newCard(user){
    let car = document.createElement('tr');
    car.setAttribute('class','card');

   
    let nameElement = document.createElement('td');
    nameElement.innerHTML=user.name;
    car.appendChild(nameElement);

    let lastnameElement = document.createElement('td');
    lastnameElement.innerHTML=user.lastname;
    car.appendChild(lastnameElement);

    let mabileElement = document.createElement('td');
    mabileElement.innerHTML=user.mabile;
    car.appendChild(mabileElement);

    let emailElement = document.createElement('td');
    emailElement.innerHTML=user.email;
    car.appendChild(emailElement);

    let pessvordElement = document.createElement('td');
    pessvordElement.innerHTML=user.passvord;
    car.appendChild(pessvordElement);

    let confirmElement = document.createElement('td');
    confirmElement.innerHTML=user.confirm;
    car.appendChild(confirmElement);

return car;
   
}
form && form.addEventListener('submit', function(event){
    event.preventDefault();
    const isVolid= validater();
    if (!isVolid){
        return;
    };
console.log('bajarildi');
const user= {
    name:name.value,
    lastname:laetname.value,
    mabile:mabile.value,
    email:email.value,
    passvord:passvord.value,
    confirm:confirm.value
}
let car= newCard(user);
tbody.appendChild(car)

});