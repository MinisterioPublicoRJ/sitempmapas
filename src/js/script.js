const TRANSITION_TIME = 500 //ms
const PRODUTOS = [
    {
        name: 'Sinapse',
        title: 'Lorem ipsum Sinapse',
        description: 'Another description Sinapse',
        class: 'sinapse',
        url: '#',
    },
    {
        name: 'DPJ',
        title: 'Lorem ipsum DPJ',
        description: 'Description DPJ',
        class: 'dpj',
        url: '#',
    },
    {
        name: 'MP em Mapas',
        title: 'Inovação em Estatística, Geografia e em Data Science',
        description: 'O MP em Mapas é uma plataforma múltipla de diagnóstico, análise e georreferenciamento voltada para construção e visualização de conhecimento instrumental para a atividade-fim do Ministério Público do Estado do Rio de Janeiro.',
        class: 'cadg',
        url: '#sobre',
    },
    {
        name: 'InLoco',
        title: 'Lorem ipsum InLoco',
        description: 'Another description InLoco',
        class: 'inloco',
        url: '#',
    },
    {
        name: 'MPédia',
        title: 'Lorem ipsum MPédia',
        description: 'Another description MPédia',
        class: 'mpedia',
        url: '#',
    },
    {
        name: 'Parquet Financeiro',
        title: 'Lorem ipsum Parquet Financeiro',
        description: 'Another description Parquet Financeiro',
        class: 'parquet-financeiro',
        url: '#',
    },
    {
        name: 'GQP',
        title: 'Lorem ipsum GQP',
        description: 'Another description GQP',
        class: 'gqp',
        url: '#',
    },
    {
        name: 'Painel Gerencial',
        title: 'Lorem ipsum Painel Gerencial',
        description: 'Another description Painel Gerencial',
        class: 'painel-gerencial',
        url: '#',
    },
    {
        name: 'Zuleika',
        title: 'Lorem ipsum Zuleika',
        description: 'Another description Zuleika',
        class: 'zuleika',
        url: '#',
    },
    {
        name: 'Lyra',
        title: 'Lorem ipsum Lyra',
        description: 'Another description Lyra',
        class: 'lyra',
        url: '#',
    },
    {
        name: 'Everardo',
        title: 'Lorem ipsum Everardo',
        description: 'Another description Everardo',
        class: 'everardo',
        url: '#',
    },
    {
        name: 'API',
        title: 'Lorem ipsum API',
        description: 'Another description API',
        class: 'api',
        url: '#',
    },
]
let previousProductId
let currentProductId = 2
let $seletorPreviousHidden = $('#selector-previous-hidden')
let $seletorPrevious = $('#selector-previous')
let $seletorCurrent = $('#selector-current')
let $seletorNext = $('#selector-next')
let $seletorNextHidden = $('#selector-next-hidden')
let $currentTitle = $('#current-title')
let $currentDescription = $('#current-description')
let $currentButton = $('#current-button')

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

        $currentTitle.text(currentProduct.title)
        $currentDescription.text(currentProduct.description)
        $currentButton.attr('href', currentProduct.url)
    }, TRANSITION_TIME)

    previousProductId = productId
}

$(document).ready(() => {
    selectProduct(currentProductId)
    $('#arrow-up').on('click', () => {
        currentProductId--
        if (currentProductId <= 0) {
            currentProductId = PRODUTOS.length - 1
        }
        selectProduct(currentProductId)
    })
    $('#arrow-down').on('click', () => {
        currentProductId++
        if (currentProductId >= PRODUTOS.length) {
            currentProductId = 0
        }
        selectProduct(currentProductId)
    })
    $('.lista-produtos .produto-icone').on('click', function(){
        selectProduct($(this).data('product-id'))
    })
})