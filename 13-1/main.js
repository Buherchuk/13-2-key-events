window.onload = function () {    
    document.querySelector('.press-color').addEventListener('click', function () {
        if(document.querySelector('.img-wrapper').classList.contains('display-flex')){
            document.querySelector('.img-wrapper').classList.remove('display-flex');
            document.querySelector('.colors-wrapper').classList.toggle('display-flex');
            document.body.style.background = '';                 

        }else{
            document.querySelector('.colors-wrapper').classList.toggle('display-flex');
            document.body.style.background = '';
        }
        
    })
    document.querySelector('.press-img').addEventListener('click', function () {
        if(document.querySelector('.colors-wrapper').classList.contains('display-flex')){
            document.querySelector('.colors-wrapper').classList.remove('display-flex');
            document.querySelector('.img-wrapper').classList.toggle('display-flex');
        }else{
            document.querySelector('.img-wrapper').classList.toggle('display-flex');
        }
    })
    document.querySelector('.colors-wrapper').addEventListener('click', function (event) {
        document.body.style.backgroundColor = getComputedStyle(event.target).backgroundColor;
        
    })
    document.querySelector('.img-wrapper').addEventListener('click', function (event) {
        document.body.style.background = getComputedStyle(event.target).background;
    })    
    
}