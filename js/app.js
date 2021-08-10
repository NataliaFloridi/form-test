let validObj = {
    nome: true,
    cpf:true,
    celular:true,
    endereço:true,
}

function validarForm() {
    let btnSubmit = document.querySelector('.btn-custom')

    let validArray = Object.values(validObj)
    for (let i = 0; i < validArray.length; i++) {
        if (validArray[i] == false) {
            btnSubmit.setAttribute('disabled', true)
            break
        } else {
            btnSubmit.removeAttribute('disabled')
        }
    }  
}


// Validação input Nome
let inputNome = document.querySelector('#inputNome')
inputNome.addEventListener('blur', function() {
    let regexTexto = /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/ //aceita letras maiúsculas, minúsculas e acentos

    if (regexTexto.test(this.value.trim())) {
        validObj.nome = true
        document.querySelector('.erro-nome').style.display = 'none'
        document.querySelector('.sucesso-nome').style.display = 'block'
    } else {
        validObj.nome = false
        document.querySelector('.sucesso-nome').style.display = 'none'
        document.querySelector('.erro-nome').style.display = 'block'
    }
    validarForm()
})

// Validação CPF
let inputCpf = document.querySelector('#inputCpf')
inputCpf.addEventListener('blur', function() {
    let regexTexto = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/ //aceita CPF e CNPJ com pontuação

    if (regexTexto.test(this.value.trim())) {
        validObj.cpf = true
        document.querySelector('.erro-cpf').style.display = 'none'
        document.querySelector('.sucesso-cpf').style.display = 'block'
    } else {
        validObj.cpf = false
        document.querySelector('.sucesso-cpf').style.display = 'none'
        document.querySelector('.erro-cpf').style.display = 'block'
    }
    validarForm()
})

// Validação Data Nascimento
let inputDataNascimento = document.querySelector('#inputDataNascimento')
inputDataNascimento.addEventListener('blur', function() {
    let regexTexto = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/ //validação data nascimento dd/mm/aaaa

    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-data').style.display = 'none'
        document.querySelector('.sucesso-data').style.display = 'block'
    } else {
        document.querySelector('.sucesso-cpf').style.display = 'none'
        document.querySelector('.erro-data').style.display = 'block'
    }
})

// Validação Endereço
let inputEndereco = document.querySelector('#inputEndereco')
inputEndereco.addEventListener('blur', function() {
    let regexTexto =/(\b[A-Za-z](?!\s))/ //Aceita Letras números e pontuação.

    if (regexTexto.test(this.value.trim())) {
        validObj.endereco = true
        document.querySelector('.erro-endereco').style.display = 'none'
        document.querySelector('.sucesso-endereco').style.display = 'block'
    } else {
        validObj.endereco = false
        document.querySelector('.sucesso-endereco').style.display = 'none'
        document.querySelector('.erro-endereco').style.display = 'block'
    }
    validarForm()
})

// Validação Bairro
let inputBairro = document.querySelector('#inputBairro')
inputBairro.addEventListener('blur', function() {
    let regexTexto = /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/ //aceita letras maiúsculas, minúsculas e acentos

    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-bairro').style.display = 'none'
        document.querySelector('.sucesso-bairro').style.display = 'block'
    } else {
        document.querySelector('.sucesso-bairro').style.display = 'none'
        document.querySelector('.erro-bairro').style.display = 'block'
    }
})

// // Validação CEP
let inputCep = document.querySelector('#inputCep')
inputCep.addEventListener('blur', function() {
    let regexTexto = /[0-9]{5}-[\d]{3}/ // valida CEP com traço

    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-cep').style.display = 'none'
        document.querySelector('.sucesso-cep').style.display = 'block'
    } else {
        document.querySelector('.sucesso-cep').style.display = 'none'
        document.querySelector('.erro-cep').style.display = 'block'
    }
})

// Validação data de cadastro
let inputDataCadastro = document.querySelector('#inputDataCadastro')
inputDataCadastro.addEventListener('blur', function() {
    let regexTexto = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/ //validação data dd/mm/aaaa

    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-data-cadastro').style.display = 'none'
        document.querySelector('.sucesso-data-cadastro').style.display = 'block'
    } else {
        document.querySelector('.sucesso-data-cadastro').style.display = 'none'
        document.querySelector('.erro-data-cadastro').style.display = 'block'
    }
})

// Validação município
let inputMunicipio = document.querySelector('#inputMunicipio')
inputMunicipio.addEventListener('blur', function() {
    let regexTexto = /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/ //Aceita Letras números e pontuação.

    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-municipio').style.display = 'none'
        document.querySelector('.sucesso-municipio').style.display = 'block'
    } else {
        document.querySelector('.sucesso-municipio').style.display = 'none'
        document.querySelector('.erro-municipio').style.display = 'block'
    }
})

// Validação Celular
let inputCelular = document.querySelector('#inputCelular')
inputCelular.addEventListener('blur', function() {
    let regexTexto = /(\(\d{2}\)\s)(\d{4,5}\-\d{4})/ //Validação com DDD

    if (regexTexto.test(this.value.trim())) {
        validObj.celular = true
        document.querySelector('.erro-celular').style.display = 'none'
        document.querySelector('.sucesso-celular').style.display = 'block'
    } else {
        validObj.celular = false
        document.querySelector('.sucesso-celular').style.display = 'none'
        document.querySelector('.erro-celular').style.display = 'block'
    }
    validarForm()
})

// Validação Telefone
let inputTelefone = document.querySelector('#inputTelefone')
inputTelefone.addEventListener('blur', function() {
    let regexTexto = /(\(\d{2}\)\s)(\d{4,5}\-\d{4})/ //Validação com DDD

    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-telefone').style.display = 'none'
        document.querySelector('.sucesso-telefone').style.display = 'block'
    } else {
        document.querySelector('.sucesso-telefone').style.display = 'none'
        document.querySelector('.erro-telefone').style.display = 'block'
    }
})

// Validação Inscrição Estadual
let inputInscricaoEstadual = document.querySelector('#inputInscricaoEstadual')
inputInscricaoEstadual.addEventListener('blur', function() {
    let regexTexto = /("\d{4}.\d{4}.\d{4}.\d{4}")/

    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-inscricao').style.display = 'none'
        document.querySelector('.sucesso-inscricao').style.display = 'block'
    } else {
        document.querySelector('.sucesso-inscricao').style.display = 'none'
        document.querySelector('.erro-inscricao').style.display = 'block'
    }
})

// Mudança UF
let selectEstado = document.querySelector('.select-estado')
selectEstado.addEventListener('change', function() {
    let selectedIndex = selectEstado.selectedIndex
    let itemSelected = selectEstado.options[selectedIndex]

    if(itemSelected != ""){
        document.querySelector('.erro-uf').style.display = 'none'
        document.querySelector('.sucesso-uf').style.display = 'block'
    } else {
        document.querySelector('.sucesso-uf').style.display = 'none'
        document.querySelector('.erro-uf').style.display = 'block'
    }
})