const correctAnswers = [ 'A' , 'B' , 'A' , 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
// const percent = document.querySelector('.percent');

function scrollToTop() {
    if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        window.scrollBy(0, -50);
        requestAnimationFrame(scrollToTop);
    }
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