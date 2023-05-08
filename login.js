// Insert your code here


document.querySelector('#register').addEventListener('click', function(){

    const name = document.querySelector('#registerName').textContent;
    const email = document.querySelector('#registerEmail').textContent;
    const password = document.querySelector('#registerPassword').textContent;

    const data = {
        name : name,
        email: email,
        password: password,
    }

    fetch('http://localhost:3000/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)

})
 .then(response => response.json())
 .then(data => {
   console.log(data);
   if(data){
    window.location.assign('index.html');
   }
   
    
  
})
 });

 // Insert your code here


document.querySelector('#connection').addEventListener('click', function(){

    const email = document.querySelector('#connectionEmail').textContent;
    const password = document.querySelector('#connectionPassword').textContent;

    const data = {
        email: email,
        password: password,
    }

    fetch('http://localhost:3000/users/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)

})
 .then(response => response.json())
 .then(data => {
   console.log(data);
   if(data){
    window.location.assign('index.html');
   }
   
    
  
})
 });



 


 