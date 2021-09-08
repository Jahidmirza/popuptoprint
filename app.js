const btnMain = document.querySelector(".mainBtn");
const close = document.querySelector('.popUpX');

btnMain.addEventListener('click', function(){
     const popupBox = document.querySelector('.popUp');
     popupBox.classList.add('show');
});

close.addEventListener('click', function(){
     const popupBox = document.querySelector('.popUp');
     popupBox.classList.remove('show');
});

/* bubling.html/css page js*/



