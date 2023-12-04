const questions = document.querySelectorAll('.question-section');

questions.forEach((question) => {
      
      question.addEventListener('click', () => {
            
            const questionActive = document.querySelector('.question-section.active');
            

            if (questionActive && questionActive !== question) {
                  questionActive.classList.toggle('active');
                  questionActive.nextElementSibling.style.maxHeight = 0;
                  questionActive.children[1].style.transform = `rotate(0)`;
            }
            
            question.classList.toggle('active');
        
            const answers = question.nextElementSibling;

            if (question.classList.contains('active')) {
                  answers.style.maxHeight = 10 + 'rem';
                  question.children[1].style.transform = `rotate(180deg)`;
            } else {
                  answers.style.maxHeight = 0;
                  question.children[1].style.transform = `rotate(0)`;
            }
      })
})

