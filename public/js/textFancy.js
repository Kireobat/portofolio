const enchance = id => {
    const element = document.getElementById(id);
        text = element.innerHTML.split('');
    
    element.innerHTML = '';

    text.forEach(letter => {
        const span = document.createElement('span');

        span.className = 'letter';

        span.innerHTML = letter;

        element.appendChild(span);
    });
}

enchance('phoneNum');
enchance('email');
enchance('github-link');

