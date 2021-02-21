const load = () =>{
    let top = document.querySelector('.btnTop')
    console.log("click")
    top.addEventListener('click', function(){
        document.body.scrollTop = 0 // For Safari
        document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    })
}

const toggleTop = () => {
    let top = document.querySelector('.btnTop')
    const currentScroll = window.pageYOffset;
    if(currentScroll>100){
        top.classList.remove('d-none')
        top.classList.remove('oculto')
    }else{
        top.classList.add('oculto')
    }
}


window.addEventListener("scroll", toggleTop);

document.addEventListener("DOMContentLoaded", load);