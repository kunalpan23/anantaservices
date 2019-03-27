import '/style/index.scss';

const trackerElem = $('[a-tracker]'); // Navigation bar Elems
const headerElem = $('[a-header]'); //Header Elem Selector

$(window).on('load', e => {
    const wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    });
    wow.init();

    trackerElem.bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior
        const THIS = $(this);
        // const target = $(THIS.attr('a-tracker'));
        const target = THIS.attr('a-tracker');
        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body')
            .stop()
            .animate(
                {
                    scrollTop: $(`[a-${target}]`).offset().top
                },
                600,
                function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
                }
            );

        return false;
    });
});

// $(document).on('scroll', e => {
//     if ($('[a-aboutus]').offset().top - $(window).scrollTop() <= 0) {
//         headerElem
//             .addClass('active')
//             .parent()
//             .addClass('active');
//     } else {
//         headerElem
//             .removeClass('active')
//             .parent()
//             .removeClass('active');
//     }

//     trackerElem.each(function() {
//         const scrollPos = $(document).scrollTop();
//         const currLink = $(this);
//         const refElement = $(currLink.attr('a-tracker'));
//         if (
//             refElement.position().top <= scrollPos &&
//             refElement.position().top + refElement.height() > scrollPos
//         ) {
//             refElement.hasClass('active').removeClass('active');
//             currLink.addClass('active');
//         } else {
//             currLink.removeClass('active');
//         }
//     });
// });
