const container = document.getElementById('container');
const regsterBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

regsterBtn.addEventListener('click' ,()=>{
  container.classList.add("active");
})
loginBtn.addEventListener('click' ,()=>{
  container.classList.remove("active");
})

