const formuCadastro = document.querySelector('.formuCadastro')


function cadastro (event) {
    event.preventDefault();



    const cadastroUsuario = document.querySelector('#cadastro-usuario').value;
    const cadastroSenha = document.querySelector('#cadastro-senha').value;
    const cadastroNome = document.querySelector('#cadastro-nome').value;
    const cadastroEmail = document.querySelector('#cadastro-email').value;
    const sucessCadastro = document.querySelector('.cadastro-sucess');

    if (cadastroUsuario === '' || cadastroSenha === '' || cadastroNome === '' || cadastroEmail === '' ) {
        sucessCadastro.classList.add('erro-login');
        sucessCadastro.innerHTML = `Preencha todos os campos por favor !`
        return ;
    }


    sucessCadastro.classList.remove('erro-login')
    sucessCadastro.classList.add('sucesso-cadastro')
    sucessCadastro.innerHTML = 'Cadastro realizado com sucesso, redirecionando você !!';

    localStorage.setItem('cadastroUsuario', cadastroUsuario);
    localStorage.setItem('cadastroSenha', cadastroSenha);

    setTimeout (function () {
        window.location.href ='index.html';
    }, 2000);


}
formuCadastro.addEventListener('submit', cadastro);
