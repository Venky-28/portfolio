//Hamburger

const mainMenu=document.querySelector('.mainMenu');
const closeMenu=document.querySelector('.closeMenu');
const openMenu=document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
}

// about


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}






// contact


  const scriptURL = 'https://script.google.com/macros/s/AKfycbwAalJyl3dwdUrwCXEmuq5cRz-gaxhTMuxC-FiNmUXV0TRrS1rIEZ9yRn02f9j1fL7EhA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent Successfully!!!"
        setTimeout(function(){
            msg.innerHTML = ""

        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
