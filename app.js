const correctAnswers = [ 'A' , 'B' , 'A' , 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
// const percent = document.querySelector('.percent');

function scrollToTop() {
    var position = document.body.scrollTop || document.documentElement.scrollTop;
    if (position){
        window.scrollBy(0,-Math.max(10, Math.floor(position / 10)));
        scrollAnimation=setTimeout('scrollToTop()',10);
    }
    else clearTimeout(scrollAnimation);
}


form.addEventListener('submit', e=> {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value , form.q2.value , form.q3.value , form.q4.value];
    //checking answers

    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    //scrollTo(0,0);

   
    scrollToTop();

    let output = 0;

    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    }, 10)


    
    result.classList.remove('d-none');
    // percent.textContent = `${score}%`;
    // console.log(score);
})