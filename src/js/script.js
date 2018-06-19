const TRANSITION_TIME = 500 //ms
const PRODUTOS = [
    {
        name: 'MP em Mapas',
        title: 'Inovação em Estatística,<br> Geografia e Data Science',
        description: 'O MP em Mapas é uma família de plataformas de análise, diagnóstico e georreferenciamento focadas na construção e visualização de conhecimento instrumental para a atividade-fim do Ministério Público do Estado do Rio de Janeiro.',
        class: 'cadg',
        url: '#sobre',
    },
    {
        name: 'In Loco',
        title: 'In Loco',
        description: 'O In Loco é uma plataforma de mapas interativos criada pelo Ministério Público do Estado do Rio de Janeiro, permitindo ao usuário visualizar e sobrepor dados geográficos de diversos assuntos, realizar buscas e dispor de diversas informações.',
        class: 'inloco',
        url: 'http://inloco.mprj.mp.br/',
        restricted: false,
    },
    {
        name: 'Parquet Data',
        title: 'Parquet Data',
        description: 'Ferramenta que desenvolve visualizações de dados e indicadores, disseminando conhecimento e estimulando a interação entre múltiplos grupos de usuários da sociedade, colaborando no desempenho e otimização do trabalho do Promotor de Justiça. A Parquet Data tem como objetivo simplificar o acesso ao conhecimento gerado a partir de informações de dados oficiais georreferenciados, através da criação de visualizações gráficas intuitivas, permitindo a realização de análises dos principais dados do estado em diversas áreas, tais como segurança, saúde, educação e meio ambiente.',
        class: 'mpedia',
        url: 'http://apps.mprj.mp.br/sistema/parquetdata',
        restricted: false,
    },
    {
        name: 'GQP',
        title: 'GQP',
        description: 'O GQP (Gestão de Qualidade da Promotoria) é um sistema de acesso restrito aos membros e secretários do MPRJ focado no controle do acervo dos órgãos. Com visualizações de dados agrupados em dashboards e alertas para documentos em situações atípicas, esta ferramenta auxilia as promotorias a manterem seu fluxo de trabalho organizado e seu acervo de documentos sob controle.',
        class: 'gqp',
        url: 'http://apps.mprj.mp.br/sistema/gqp/',
        restricted: true,
    },
    {
        name: 'Paineis Gerenciais',
        title: 'Paineis Gerenciais',
        description: 'Os paineis gerenciais do "MP em Mapas 2.0" apresentam diversos dados agrupados sobre regiões do estado do Rio de Janeiro. Em sua visão Social são encontradas informações sobre políticos eleitos, atividades econômicas, cultura local e informações de execução orçamentárias. Já nos paineis "Institucional" e "Administrativo", de acesso excluisivo para os membros do MPRJ, são apresentadas informações sobre os do MPRJ, com detalhamentos da distribuição de sua força de trabalho e de seus gastos.',
        class: 'painel-gerencial',
        url: 'http://apps.mprj.mp.br/sistema/mpmapas/index.html',
        restricted: false,
    },
    {
        name: 'Lyra',
        title: 'Lyra',
        description: 'Família de projetos de inteligência artificial do MPRJ, batizada em homenagem a Roberto Lyra, considerado o "Príncipe dos Promotores de Justiça do Brasil". O projeto Lyra está treinando um robô para ler e interpretar documentos judiciais, tornando possíveis análises estatísticas e predileções sobre andamento de processos.',
        class: 'lyra',
    },
    {
        name: 'Zuleika',
        title: 'Zuleika',
        description: 'Nomeada em homenagem à primeira promotora do Brasil, Zuleika Sucupira Kenworthy, está ferramenta garante que o MPRJ tenha acesso a todos os andamentos de seus processos no TJ, trabalhando diariamente na importação de dados de um órgão para o outro.',
        class: 'zuleika',
    },
    {
        name: 'Diagnóstico das Promotorias',
        title: 'Diagnóstico das Promotorias',
        description: 'Ferramenta interativa que permite aos membros visualizarem a evolução de dados de seus órgãos ao longo do tempo, inclusive permitindo comparação entre diferentes órgãos, permitindo ao membro uma compreensão baseada em dados da produtividade de seu trabalho.',
        class: 'dpj',
        url: 'http://apps.mprj.mp.br/sistema/dgpj/#!/promotoriaDeJustica',
        restricted: true,
    },
    {
        name: 'Sinapse',
        title: 'Sinapse',
        description: 'Como um agregador de bases de dados e gerador de análise de vínculos, o Sinapse é a ferramenta do MPRJ que se conecta a diversas bases de dados realizando conexões outrora não possíveis entre informações distintas.',
        class: 'sinapse',
    },
    {
        name: 'Parquet Financeiro',
        title: 'Parquet Financeiro',
        description: 'Painel de visualização de dados de execução financeira do MPRJ e de seus órgãos. Nele podem ser encontradas em detalhes informações sobre diferentes linhas de custo permitindo aos gestores do <em>parquet</em> uma visão macro do fluxo orçamentário do órgão, auxiliando na implementação de uma gestão financeira pública saudável.',
        class: 'parquet-financeiro',
    },
]
let previousProductId
let currentProductId = 0

let $arrowDown = $('#arrow-down')
let $arrowUp = $('#arrow-up')

let $currentTitle = $('#current-title')
let $currentDescription = $('#current-description')
let $currentButton = $('#current-button')

let $seletorPreviousHidden = $('#selector-previous-hidden')
let $seletorPrevious = $('#selector-previous')
let $seletorCurrent = $('#selector-current')
let $seletorNext = $('#selector-next')
let $seletorNextHidden = $('#selector-next-hidden')

const plusOne = productId => {
    let nextId = productId + 1
    if (nextId >= PRODUTOS.length) {
        nextId = 0
    }
    return nextId
}

const minusOne = productId => {
    let prevId = productId - 1
    if (prevId < 0) {
        prevId = PRODUTOS.length - 1
    }
    return prevId
}

const selectProduct = productId => {
    let prevId = minusOne(productId)
    let nextId = plusOne(productId)
    let prevHiddenId = minusOne(prevId)
    let nextHiddenId = plusOne(nextId)

    if (previousProductId === prevId) {
        // previous-hidden disappears
        $seletorPreviousHidden.remove()
        // previous -> previous-hidden
        $seletorPrevious.addClass('previous-hidden').removeClass('previous').attr('id', 'selector-previous-hidden')
        // current -> previous
        $seletorCurrent.addClass('previous').removeClass('current').attr('id', 'selector-previous')
        // next -> current
        $seletorNext.addClass('current').removeClass('next').attr('id', 'selector-current')
        // next-hidden -> next
        $seletorNextHidden.addClass('next').removeClass('next-hidden').attr('id', 'selector-next')
            .after(`<div id="selector-next-hidden" class="container-icone next-hidden"></div>`)
    }
    if (previousProductId === nextId) {
        // previous-hidden -> previous
        $seletorPreviousHidden.addClass('previous').removeClass('previous-hidden').attr('id', 'selector-previous')
            .before(`<div id="selector-previous-hidden" class="container-icone previous-hidden"></div>`)
        // previous -> current
        $seletorPrevious.addClass('current').removeClass('previous').attr('id', 'selector-current')
        // current -> next
        $seletorCurrent.addClass('next').removeClass('current').attr('id', 'selector-next')
        // next -> next-hidden
        $seletorNext.addClass('next-hidden').removeClass('next').attr('id', 'selector-next-hidden')
        // next-hidden disappears
        $seletorNextHidden.remove()
    }

    // disable events on previous/next icons
    $seletorPrevious.off('click')
    $seletorNext.off('click')

    // disable arrow events
    $arrowDown.off('click')
    $arrowUp.off('click')
    
    window.setTimeout(() => {
        let currentProduct = PRODUTOS[productId]
        let previousHiddenProduct = PRODUTOS[prevHiddenId]
        let previousProduct = PRODUTOS[prevId]
        let nextProduct = PRODUTOS[nextId]
        let nextHiddenProduct = PRODUTOS[nextHiddenId]

        $seletorPreviousHidden = $('#selector-previous-hidden')
        $seletorPrevious = $('#selector-previous')
        $seletorCurrent = $('#selector-current')
        $seletorNext = $('#selector-next')
        $seletorNextHidden = $('#selector-next-hidden')
        $currentTitle = $('#current-title')
        $currentDescription = $('#current-description')
        $currentButton = $('#current-button')

        $seletorPreviousHidden.html(`<div class="produto-icone ${previousHiddenProduct.class}"></div>`)
        $seletorPrevious.html(`<div class="produto-icone ${previousProduct.class}"></div>`)
        $seletorNext.html(`<div class="produto-icone ${nextProduct.class}"></div>`)
        $seletorNextHidden.html(`<div class="produto-icone ${nextHiddenProduct.class}"></div>`)
        $seletorCurrent.html(`<div class="produto-icone ${currentProduct.class}"><span>${currentProduct.name}</span></div>`)

        $currentTitle.html(currentProduct.title)
        $currentDescription.html(currentProduct.description)
        $currentButton.attr('href', currentProduct.url)

        // re-enable events on previous/next icons
        $seletorPrevious.on('click', scrollUp)
        $seletorNext.on('click', scrollDown)

        // re-enable arrows
        $arrowUp.off('click').on('click', scrollUp)
        $arrowDown.off('click').on('click', scrollDown)

        $('#touch-selector').off('touchend').on('touchend', e => {
            let metadeDaTela = window.innerWidth / 2
            let posicaoDragX = e.changedTouches[0].clientX
            if (posicaoDragX > metadeDaTela) {
                scrollUp()
            }
            if (posicaoDragX < metadeDaTela) {
                scrollDown()
            }
            e.preventDefault()
        })
    }, TRANSITION_TIME)

    // highlight selected icon
    $('.lista-produtos .produto-icone').removeClass('selected')
    $(`.lista-produtos .produto-icone[data-product-id=${productId}]`).addClass('selected')

    previousProductId = productId
}

const scrollUp = () => {
    currentProductId = minusOne(currentProductId)
    selectProduct(currentProductId)
}

const scrollDown = () => {
    currentProductId = plusOne(currentProductId)
    selectProduct(currentProductId)
}

// when page is loaded
$(document).ready(() => {
    // refresh current product
    selectProduct(currentProductId)

    // enable arrows
    $arrowUp.off('click').on('click', scrollUp)
    $arrowDown.off('click').on('click', scrollDown)

    // enable icons row click
    $('.lista-produtos .produto-icone').on('click', function(){
        selectProduct($(this).data('product-id'))
    })
})