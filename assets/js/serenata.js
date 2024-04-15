let intro = document.querySelector('.intro');
let logoSerenata = document.querySelector('.logo-serenata');
let tituloSpan = document.querySelectorAll('.titulo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{
        
        tituloSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active')
            }, (idx + 1) * 400)
        });
    
    setTimeout(()=>{
        tituloSpan.forEach((span, idx)=>{

            setTimeout(()=>{
                span.classList.remove('active')
                span.classList.add('fade')
            }, (idx +1) *50)
        })
    },2000);

    setTimeout(()=>{
        intro.style.top = '-100vh';
    }, 2300)
    
    })


})