const phoneNum = document.getElementById('phoneNum');
const email = document.getElementById('email');
const github = document.getElementById('github-link');
const word1 = document.getElementById('word1');
const word2 = document.getElementById('word2');
const word3 = document.getElementById('word3');
const word4 = document.getElementById('word4');
const word5 = document.getElementById('word5');

const words = [word1, word2, word3, word4, word5, phoneNum, email, github];

decreaseOpacity = () => {
    for (let i = 0; i < words.length; i++) {
        words[i].style.opacity = 0.2;
    }
}

increaseOpacity = () => {
    for (let i = 0; i < words.length; i++) {
        words[i].style.opacity = 1;
    }
}

hoverPhoneNum = () => {
    decreaseOpacity();
    phoneNum.style.opacity = 1;
    }

hoverEmail = () => {
    decreaseOpacity();
    email.style.opacity = 1;
    }

hoverGithub = () => {
    decreaseOpacity();
    github.style.opacity = 1;
    }

phoneNum.addEventListener('mouseover', hoverPhoneNum);
email.addEventListener('mouseover', hoverEmail);
github.addEventListener('mouseover', hoverGithub);

phoneNum.addEventListener('mouseout', increaseOpacity);
email.addEventListener('mouseout', increaseOpacity);
github.addEventListener('mouseout', increaseOpacity);
