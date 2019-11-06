const popupWrapper = document.querySelector('.popup-wrapper');
const button = document.querySelector('button');
const closeButton = document.querySelector('.popup-close');

button.addEventListener('click' , () => {
    popupWrapper.style.display = 'block';
    console.log('event in button event listener');
});

closeButton.addEventListener('click' , ev =>{
    popupWrapper.style.display ='none';
    console.log('event in closebutton event listener');
});
popupWrapper.addEventListener('click' , () =>{
    popupWrapper.style.display = 'none';
    console.log('event in popup-wrapper event listener');
});

