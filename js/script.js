var splashScreen=document.querySelector('.splash');
splashScreen.addEventListener('click',()=>
                             {
    splashScreen.style.opacity=0;
    setTimeout(()=>{
        splashScreen.classList.add('hidden')
    },610)
})

var startClick = document.querySelector('.start');
startClick.addEventListener('click',()=>
                           {
    location.href = 'Survey.html';
})

setTimeout(function(){document.getElementsByClassName('splash')[0].click();},2000);
