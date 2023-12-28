const formuCadastro = document.querySelector('.formuCadastro')


function cadastro (event) {
    event.preventDefault();



    const cadastroUsuario = document.querySelector('#cadastro-usuario').value;
    const cadastroSenha = document.querySelector('#cadastro-senha').value;
    const sucessCadastro = document.querySelector('.cadastro-sucess');


    sucessCadastro.classList.add('sucesso-cadastro')
    sucessCadastro.innerHTML = 'Cadastro realizado com sucesso';

    sessionStorage.setItem('cadastroUsuario', cadastroUsuario);
    sessionStorage.setItem('cadastroSenha', cadastroSenha);

    setTimeout (function () {
        window.location.href ='index.html';
    }, 3000);


}
formuCadastro.addEventListener('submit', cadastro);
