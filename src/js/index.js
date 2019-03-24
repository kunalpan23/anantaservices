import '/style/index.scss';

$(window).on('load', e => {
    const wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    });
    wow.init();
});

$(window).on('scroll', e => {});
