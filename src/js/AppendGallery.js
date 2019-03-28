import GALLERY from './gallery.json';

const appendGallery = e => {
    const galleryContainer = document.querySelector('[a-imgGallery]');
    GALLERY.map(o => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = new Image();

        li.classList.add('item');

        // img.onload = e => {
        //     console.log(e.target);
        // };
        // img.onerror = e => {
        //     this.src = '/img/gallery/default.jpg';
        // };

        img.src = o.path;

        a.appendChild(img);
        li.appendChild(a);
        galleryContainer.appendChild(li);
    });

    $('[a-imgGallery]').flexImages({ rowHeight: 140 });
};

export default appendGallery;
