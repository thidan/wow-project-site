
let newsCards = `<h1 data-scroll data-scroll-speed="-1" id="target">Últimas Notícias & Atualizações</h1>`;

const cards = [
    { id:1,
        img:"//bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/n7/N7SM3PYCZGV71749688610041.png",
        offset:"10%",
        alt:"Imagem notícia Arathor",
        h1: "Aventure-se na atualização de conteúdo Legado de Arathor",
        p: "20/06/2025"
}, {
    id:2,
    img:"//bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/yd/YDHA2LFKTXCU1750207193182.png",
    offset:"20%",
    alt:"Imagem notícia K'aresh",
    h1:"WOWCast: Entre de cabeça na atualização de conteúdo Fantasmas de K'aresh",
    p:"20/06/2025"
}, {
    id:3,
    img: "//bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/zz/ZZ3NS5QC1Y8M1750093074862.png",
    offset:"30%",
    alt:"Imagem notícia desconto",
    h1:"Aproveite as férias e economize até 50%!",
    p: "15/06/2025"
} , {
    id:4,
    img: "//bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/az/AZ3UTLPE1ODM1536689009690.jpg",
    offset:"40%",
    alt:"Imagem notícia percursos temporais",
    h1:"Faça uma viagem pelos percursos temporais turbulhentos",
    p:"04/06/2025"
}
];

cards.forEach(card => {
    newsCards += `
        <div class="news-card" data-scroll data-scroll-class="visivel" data-scroll-id="call1" data-scroll-offset="${card.offset}" data-scroll-repeat>
            <img src="${card.img}" draggable="false" alt="${card.alt}">
            <h1>${card.h1}</h1>
            <p>${card.p}</p>
        </div>
    `
});

document.querySelector('.section-news-js').innerHTML = newsCards;



