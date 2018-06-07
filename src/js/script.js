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
        name: 'CADG',
        title: 'Inovação em Estatística, Geografia e em Data Science',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
let currentProductId = 2
const $seletorPrevious = $('#selector-previous')
const $seletorCurrent = $('#selector-current')
const $seletorNext = $('#selector-next')
const $currentTitle = $('#current-title')
const $currentDescription = $('#current-description')

const selectProduct = productId => {
    let prevId = productId - 1
    if (prevId < 0) {
        prevId = PRODUTOS.length - 1
    }
    let nextId = productId + 1
    if (nextId === PRODUTOS.length) {
        nextId = 0
    }

    let currentProduct = PRODUTOS[productId]
    let previousProduct = PRODUTOS[prevId]
    let nextProduct = PRODUTOS[nextId]

    $seletorPrevious.html(`<div class="produto-icone ${previousProduct.class}"></div>`)
    $seletorNext.html(`<div class="produto-icone ${nextProduct.class}"></div>`)
    $seletorCurrent.html(`<div class="produto-icone ${currentProduct.class}"><span>${currentProduct.name}</span></div>`)
    $currentTitle.text(currentProduct.title)
    $currentDescription.text(currentProduct.description)
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