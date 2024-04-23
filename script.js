function startQuiz(event) {
    event.preventDefault();
    document.getElementById('studentDetailsForm').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
}

function submitQuiz(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const roll = document.getElementById('roll').value;
    const batch = document.getElementById('batch').value;
    const section = document.getElementById('section').value;

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');

    if (!q1 || !q2 || !q3 || !q4 || !q5) {
        alert('Please answer all questions!');
        return;
    }

    let score = 0;
    if (q1.value === 'a') {
        score += 1;
    }
    if (q2.value === 'a') {
        score += 1;
    }
    if (q3.value === 'a') {
        score += 1;
    }
    if (q4.value === 'a') {
        score += 1;
    }
    if (q5.value === 'a') {
        score += 1;
    }

    
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('roll', roll);
    sessionStorage.setItem('batch', batch);
    sessionStorage.setItem('section', section);
    sessionStorage.setItem('score', score);

    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Dear ${name}, your score is ${score}/5`;
    resultDiv.style.display = 'block';
}
