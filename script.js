/* =========================================================
   JAVASCRIPT E DOM
   ========================================================= */

/*
    Este arquivo contém o JavaScript da página.

    JavaScript é a linguagem responsável pelo comportamento
    e pela interatividade da aplicação.

    Neste projeto, ele será usado principalmente para:

    - detectar o envio do formulário;
    - ler os valores digitados pelo usuário;
    - criar novos elementos HTML;
    - inserir esses elementos na página;
    - atualizar textos e contadores;
    - remover participantes cadastrados.

    Para fazer isso, utilizaremos o DOM.

    DOM significa:
    Document Object Model

    O DOM é uma representação da página HTML que permite
    que o JavaScript localize, leia, altere, crie ou remova
    elementos enquanto a página está aberta.
*/


/* =========================================================
   LOCALIZANDO ELEMENTOS DO HTML
   ========================================================= */

/*
    Aqui criamos VARIÁVEIS.

    Uma variável é um espaço usado para armazenar um valor
    para que possamos utilizá-lo posteriormente no código.

    Neste caso, as variáveis abaixo não armazenam textos
    ou números.

    Elas armazenam REFERÊNCIAS para elementos que já existem
    no HTML.

    Utilizamos CONST porque essas referências não serão
    substituídas por outros valores durante a execução.

    CONST significa que a variável não poderá receber
    posteriormente um novo valor.
*/


/*
    A variável "formulario" recebe o elemento HTML que possui:

    id="formInscricao"

    document representa o documento HTML atual.

    getElementById significa:

    "procure no documento o elemento que possui este ID".
*/

const formulario =
    document.getElementById("formInscricao");


/*
    A variável "listaParticipantes" guarda uma referência
    para o elemento:

    id="listaParticipantes"

    É dentro desse elemento que os cartões dos participantes
    serão inseridos posteriormente.
*/

const listaParticipantes =
    document.getElementById("listaParticipantes");


/*
    A variável "contador" guarda uma referência
    para o elemento:

    id="contador"

    Esse elemento começa mostrando o número 0.

    O JavaScript modificará esse número cada vez que
    um participante for cadastrado ou excluído.
*/

const contador =
    document.getElementById("contador");


/*
    A variável "mensagemSucesso" guarda uma referência
    para o elemento:

    id="mensagemSucesso"

    Esse elemento começa vazio.

    Depois de uma inscrição, o JavaScript colocará
    uma mensagem dentro dele.
*/

const mensagemSucesso =
    document.getElementById("mensagemSucesso");


/* =========================================================
   VARIÁVEL CONTADORA
   ========================================================= */

/*
    Aqui criamos outra variável.

    Diferentemente das anteriores, esta variável
    armazena um NÚMERO.

    Ela começa com o valor 0 porque inicialmente
    não existe nenhum participante cadastrado.

    Utilizamos LET em vez de CONST porque esse valor
    será alterado durante a execução do programa.

    Por exemplo:

    0 participantes
    1 participante
    2 participantes
    3 participantes...

    LET é usado quando sabemos que a variável
    poderá receber novos valores.
*/

let totalParticipantes = 0;


/* =========================================================
   EVENTO DE ENVIO DO FORMULÁRIO
   ========================================================= */

/*
    addEventListener permite que o JavaScript fique
    "escutando" alguma ação realizada na página.

    Neste caso:

    formulario.addEventListener(...)

    significa:

    "observe o formulário e espere determinado evento".

    O evento escolhido é:

    "submit"

    SUBMIT acontece quando o formulário é enviado,
    normalmente quando o usuário clica no botão:

    Realizar inscrição
*/

formulario.addEventListener("submit", function(evento) {

    /*
        Quando o evento "submit" acontece,
        esta FUNÇÃO é executada.

        Uma função é um bloco de código que realiza
        determinada tarefa.

        Tudo o que está dentro destas chaves:

        {
            ...
        }

        será executado quando o formulário for enviado.


        A palavra "evento" é um PARÂMETRO da função.

        Ela representa o próprio evento que aconteceu.

        Poderíamos escolher outro nome para essa variável,
        mas "evento" deixa claro o que ela representa.
    */


    /* =====================================================
       IMPEDINDO O COMPORTAMENTO PADRÃO DO FORMULÁRIO
       ===================================================== */

    /*
        Por padrão, quando um formulário HTML é enviado,
        o navegador tenta enviar os dados e recarregar
        a página.

        preventDefault() significa:

        "impeça o comportamento padrão".

        Assim, a página NÃO será recarregada.

        Isso permite que o JavaScript controle
        o que acontecerá com os dados.
    */

    evento.preventDefault();


    /* =====================================================
       LENDO OS VALORES DIGITADOS
       ===================================================== */

    /*
        Agora criaremos novas VARIÁVEIS.

        Cada uma armazenará o conteúdo digitado
        ou selecionado pelo usuário no formulário.

        Novamente utilizamos CONST porque, durante
        esta execução da função, esses valores
        não serão substituídos.
    */


    /*
        Primeiro:

        document.getElementById("nome")

        encontra o elemento HTML que possui:

        id="nome"

        Depois usamos:

        .value

        VALUE significa "valor".

        Portanto:

        document.getElementById("nome").value

        significa:

        "encontre o campo nome e descubra
        qual valor foi digitado nele".

        Esse valor será armazenado na variável "nome".
    */

    const nome =
        document.getElementById("nome").value;


    /*
        A variável "email" recebe o conteúdo
        digitado no campo que possui id="email".
    */

    const email =
        document.getElementById("email").value;


    /*
        A variável "curso" recebe o conteúdo
        digitado no campo que possui id="curso".
    */

    const curso =
        document.getElementById("curso").value;


    /*
        A variável "area" recebe o valor da opção
        escolhida no elemento SELECT.

        Neste caso, poderá receber valores como:

        HTML
        CSS
        JavaScript
        UX/UI
    */

    const area =
        document.getElementById("area").value;


    /*
        A variável "mensagem" recebe o texto
        digitado dentro do TEXTAREA.
    */

    const mensagem =
        document.getElementById("mensagem").value;


    /* =====================================================
       VALIDAÇÃO DO NOME
       ===================================================== */

    /*
        Agora verificamos se o usuário realmente
        digitou alguma coisa no campo nome.

        trim() remove espaços vazios existentes
        no começo e no final de um texto.

        Exemplo:

        "     Maria     "

        torna-se:

        "Maria"


        Isso também permite identificar alguém
        que tente preencher o campo apenas com espaços.

        Exemplo:

        "          "

        depois de trim()

        torna-se:

        ""
    */

    /*
        IF significa "SE".

        Portanto podemos ler:

        SE o nome, depois de remover os espaços,
        for igual a uma string vazia...

        execute o código dentro das chaves.
    */

    if (nome.trim() === "") {

        /*
            alert() exibe uma pequena janela
            de aviso no navegador.
        */

        alert("Digite um nome válido.");


        /*
            return encerra a execução da função.

            Isso significa que, se o nome for inválido,
            nenhum participante será criado.
        */

        return;
    }


    /* =====================================================
       MOSTRANDO OS VALORES NO CONSOLE
       ===================================================== */

    /*
        console.log() escreve informações
        no Console do navegador.

        O Console é muito utilizado durante
        o desenvolvimento para verificar valores,
        acompanhar o funcionamento do programa
        e localizar erros.

        Abra o DevTools e acesse a aba Console
        para visualizar essas informações.
    */

    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Curso:", curso);
    console.log("Área:", area);
    console.log("Mensagem:", mensagem);


    /* =====================================================
       CRIANDO UM NOVO ELEMENTO HTML
       ===================================================== */

    /*
        Aqui criamos outra VARIÁVEL:

        participante

        Ela armazenará um elemento HTML criado
        pelo próprio JavaScript.


        document.createElement("div")

        significa:

        "crie um novo elemento DIV".
    */

    const participante =
        document.createElement("div");


    /*
        Neste momento, a DIV já existe,
        mas ainda NÃO está visível na página.

        Ela existe apenas na memória do navegador.

        Mais adiante iremos inseri-la no HTML.
    */


    /* =====================================================
       ADICIONANDO UMA CLASSE AO ELEMENTO
       ===================================================== */

    /*
        classList representa a lista de classes
        de um elemento HTML.

        .add("card")

        adiciona a classe:

        card

        ao elemento participante.

        O resultado equivale a:

        <div class="card">

        A classe "card" já possui regras no CSS.
        Portanto, quando ela é adicionada,
        o novo elemento recebe automaticamente
        aquela aparência.
    */

    participante.classList.add("card");


    /* =====================================================
       INSERINDO CONTEÚDO NO CARTÃO
       ===================================================== */

    /*
        innerHTML permite inserir conteúdo HTML
        dentro de um elemento.

        Aqui estamos colocando dentro da DIV participante:

        - um título H3;
        - vários parágrafos;
        - elementos STRONG;
        - os dados digitados no formulário.


        Estamos usando crases:

        ` ... `

        Esse tipo de texto é chamado de:

        TEMPLATE STRING.


        Template strings permitem inserir valores
        de variáveis dentro de um texto utilizando:

        ${variavel}
    */

    /*
        Por exemplo:

        ${nome}

        será substituído pelo conteúdo armazenado
        na variável "nome".

        Se o usuário digitou:

        Maria

        então:

        <h3>${nome}</h3>

        produzirá:

        <h3>Maria</h3>
    */


    /*
        IMPORTANTE SOBRE SEGURANÇA:

        Neste exercício utilizamos innerHTML porque
        ele torna muito fácil visualizar a relação
        entre JavaScript e HTML.

        Em aplicações reais, porém, não devemos inserir
        diretamente textos fornecidos pelos usuários
        em innerHTML sem tratamento.

        Isso pode permitir a inserção de código malicioso.

        Mais adiante vocês conhecerão formas mais seguras
        de criar elementos e adicionar textos ao DOM.
    */

    participante.innerHTML = `

        <h3>${nome}</h3>

        <p>
            <strong>E-mail:</strong>
            ${email}
        </p>

        <p>
            <strong>Curso:</strong>
            ${curso}
        </p>

        <p>
            <strong>País de residência:</strong>
            ${pais}
        </p>

        <p>
            <strong>Área de interesse:</strong>
            ${area}
        </p>


        <p>
            <strong>Gostaria de aprender:</strong>
            ${mensagem || "Não informado"}
        </p>

    `;


    /*
        Observe esta parte:

        ${mensagem || "Não informado"}

        O símbolo:

        ||

        significa OU.

        Nesse caso, se a variável "mensagem"
        possuir algum conteúdo, esse conteúdo
        será mostrado.

        Caso esteja vazia, será mostrado:

        "Não informado"
    */


    /* =====================================================
       CRIANDO O BOTÃO EXCLUIR
       ===================================================== */

    /*
        Criamos uma nova VARIÁVEL chamada:

        botaoExcluir

        Ela armazenará um elemento BUTTON
        criado pelo JavaScript.
    */

    const botaoExcluir =
        document.createElement("button");


    /*
        textContent altera ou define
        o conteúdo textual de um elemento.

        Portanto o botão exibirá o texto:

        Excluir participante
    */

    botaoExcluir.textContent =
        "Excluir participante";


    /*
        Adicionamos ao botão a classe CSS:

        botao-excluir

        Dessa forma ele receberá as regras visuais
        dessa classe no arquivo style.css.
    */

    botaoExcluir.classList.add("botao-excluir");


    /* =====================================================
       EVENTO DO BOTÃO EXCLUIR
       ===================================================== */

    /*
        Agora adicionamos outro EVENT LISTENER.

        Antes escutamos o evento:

        submit

        no formulário.

        Agora escutaremos:

        click

        no botão Excluir.

        Isso significa:

        "quando alguém clicar neste botão,
        execute a função abaixo".
    */

    botaoExcluir.addEventListener("click", function() {


        /* =================================================
           REMOVENDO O PARTICIPANTE
           ================================================= */

        /*
            remove() remove um elemento do DOM.

            Aqui removemos a DIV armazenada
            na variável "participante".

            Como essa DIV representa o cartão inteiro,
            o cartão desaparece da página.
        */

        participante.remove();


        /* =================================================
           DIMINUINDO O CONTADOR
           ================================================= */

        /*
            O operador:

            --

            diminui o valor de uma variável em 1.

            Portanto:

            totalParticipantes--;

            equivale aproximadamente a:

            totalParticipantes =
                totalParticipantes - 1;
        */

        totalParticipantes--;


        /*
            Depois de alterar a variável,
            precisamos atualizar também o texto
            que aparece na página.

            textContent modifica o conteúdo textual
            de um elemento HTML.

            Assim, o número mostrado no contador
            passa a ser igual ao novo valor
            da variável totalParticipantes.
        */

        contador.textContent =
            totalParticipantes;
    });


    /* =====================================================
       INSERINDO O BOTÃO DENTRO DO CARTÃO
       ===================================================== */

    /*
        appendChild() significa:

        "adicione este elemento como filho
        de outro elemento".

        Aqui estamos dizendo:

        adicione botaoExcluir
        dentro de participante.

        Visualmente teremos algo semelhante a:

        <div class="card">

            informações do participante

            <button>
                Excluir participante
            </button>

        </div>
    */

    participante.appendChild(botaoExcluir);


    /* =====================================================
       INSERINDO O CARTÃO NA PÁGINA
       ===================================================== */

    /*
        Até este momento o cartão já existe
        e possui conteúdo e botão.

        Porém ele ainda precisa ser colocado
        dentro da página.

        listaParticipantes representa a DIV:

        id="listaParticipantes"

        appendChild(participante)

        adiciona o novo cartão dentro dela.
    */

    listaParticipantes.appendChild(participante);


    /*
        É neste momento que o participante
        finalmente aparece visualmente na página.
    */


    /* =====================================================
       ATUALIZANDO O CONTADOR
       ===================================================== */

    /*
        O operador:

        ++

        aumenta o valor da variável em 1.

        Portanto:

        totalParticipantes++;

        equivale aproximadamente a:

        totalParticipantes =
            totalParticipantes + 1;
    */

    totalParticipantes++;


    /*
        Agora atualizamos o elemento HTML
        responsável por mostrar a quantidade
        de participantes.

        A variável "contador" aponta para o elemento:

        id="contador"

        textContent substitui seu texto pelo
        valor atual de totalParticipantes.
    */

    contador.textContent =
        totalParticipantes;


    /* =====================================================
       MENSAGEM DE SUCESSO
       ===================================================== */

    /*
        A variável mensagemSucesso aponta
        para um elemento vazio existente no HTML.

        Com textContent colocamos uma mensagem
        dentro desse elemento.
    */

    mensagemSucesso.textContent =
        "Inscrição realizada com sucesso!";


    /* =====================================================
       LIMPANDO O FORMULÁRIO
       ===================================================== */

    /*
        reset() é um método dos formulários HTML.

        Ele retorna os campos para seus valores iniciais.

        Neste caso, depois de cadastrar alguém,
        os campos são limpos para permitir
        uma nova inscrição.
    */

    formulario.reset();


    /* =====================================================
       COLOCANDO NOVAMENTE O CURSOR NO CAMPO NOME
       ===================================================== */

    /*
        Depois de limpar o formulário,
        localizamos novamente o campo:

        id="nome"

        e utilizamos:

        focus()

        focus() coloca o cursor automaticamente
        naquele campo.

        Assim o formulário já fica pronto
        para cadastrar outra pessoa.
    */

    document.getElementById("nome").focus();


});