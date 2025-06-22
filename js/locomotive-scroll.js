const scroll = new LocomotiveScroll({
    el:document.querySelector('[data-scroll-container]'),
    smooth:true,
});

const noticias = document.querySelector('#noticias');
        const target = document.querySelector('#target');

        noticias.addEventListener('click', () => {
            scroll.scrollTo(target);
        });

        