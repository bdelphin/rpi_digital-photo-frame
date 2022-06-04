const slideshow = {

    currentIndex: 0,

    init: (photos) => {
        slideshow.photos = photos;

        slideshow.frame = document.querySelector('body');

        // load first photo
        slideshow.loadNextPhoto();
        // then load next photo every 5s
        setInterval(slideshow.loadNextPhoto, 5000);
    },

    loadNextPhoto: () => {
        slideshow.frame.style.backgroundImage = "url('http://localhost:8888/backoffice/images/" + slideshow.photos[slideshow.currentIndex] + "')";

        if(slideshow.currentIndex < slideshow.photos.length - 1) {
            slideshow.currentIndex++;
        } else {
            slideshow.currentIndex = 0;
        }
        
    }
}