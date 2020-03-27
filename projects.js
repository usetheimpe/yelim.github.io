var container = document.querySelector('#masonry-grid');

var msnry = new Masonry( container, {
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    percentPosition: true
}); 

imagesLoaded(container, function( instance ) {
    msnry.layout();
});