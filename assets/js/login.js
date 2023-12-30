const formuCadastro = document.querySelector('.formuLogin');
const loginSucess = document.querySelector('.login-sucess');

function login(event) {
    event.preventDefault();
    
    const loginUsuario = localStorage.getItem('cadastroUsuario');
    const loginSenha = localStorage.getItem('cadastroSenha');
    const usuario = document.querySelector('#usuario').value;
    const senha = document.querySelector('#senha').value;

    if (usuario === '' || senha === '') {
        loginSucess.classList.add('erro-login');
        loginSucess.innerHTML = `Preencha todos os campos por favor !`;
        return ;
    }

    if (usuario === loginUsuario && senha === loginSenha) {
        loginSucess.classList.remove('erro-login');
        loginSucess.classList.add('sucesso-login');
        loginSucess.innerHTML = 'Seja bem-vindo. Entrando ...';
    }else {
        loginSucess.classList.add('erro-login')
        loginSucess.innerHTML =  'Usuário ou Senha Invalidos';
    }



}

formuCadastro.addEventListener('submit', login);