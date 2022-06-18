document.querySelector('.submitemail').onclick = () => {
    document.querySelector('.password-prompt').classList.add('password-prompt-show');
}

document.querySelector('.create').onclick = () => {
    document.querySelector('.password-prompt').classList.remove('password-prompt-show');
}