// Navegação Suave
document.querySelectorAll('.menu-list a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Validação do Formulário de Contato
document.querySelector('.contact-text button').addEventListener('click', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');

    if (nome.value.trim() === '') {
        alert('Por favor, preencha o campo Nome.');
        nome.focus();
        return;
    }
    if (email.value.trim() === '') {
        alert('Por favor, preencha o campo Email.');
        email.focus();
        return;
    }
    if (mensagem.value.trim() === '') {
        alert('Por favor, escreva uma mensagem.');
        mensagem.focus();
        return;
    }
    alert('Formulário enviado com sucesso!');
    nome.value = '';
    email.value = '';
    mensagem.value = '';
});

// Realce de Elementos ao Rolar
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
document.querySelectorAll('.skills-box, .hobbies-box, .courses-box, .experiencia-box').forEach(element => {
    observer.observe(element);
});
