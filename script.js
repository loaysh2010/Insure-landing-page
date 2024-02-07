const burger_button = document.querySelector("header .container .burger-menue");
const burger_icon = document.querySelector("header .container .burger-menue .burger i");

burger_button.addEventListener('click',function (){
    burger_button.classList.toggle('active');
    if (burger_button.classList.contains('active')){
        burger_icon.classList.remove('bx-menu');
        burger_icon.classList.add('bx-x');
    }
    else{
        burger_icon.classList.remove('bx-x');
        burger_icon.classList.add('bx-menu');
    }
    
});