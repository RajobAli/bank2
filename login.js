
const submitbutton = document.getElementById("submit").addEventListener('click',function(){
    const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   if(email == 'rajob' && password == 12345){
    window.location.href = 'first.html'
   }else{
   alert('please enter correct email or password')
   }
  
});