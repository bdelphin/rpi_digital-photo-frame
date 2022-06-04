const app = {

    init: () => {
        console.log("App initialized");

        // load Photo Frame settings
        app.loadSettings();

        // load Photos from Backend & start slideshow
        app.loadPhotos();
    },

    loadSettings: () => {

    },

    loadPhotos: () => {
        app.loadPhotosFromAPI().then(photos => {
            app.photos = photos; // fetched movies
            console.log(photos);
            //app.startSlideshow();
            slideshow.init(photos);
        });
    },

    loadPhotosFromAPI: async () => {
        const response = await fetch('http://localhost:8888/backoffice/load.php');
        const photos = await response.json();
        return photos;
    }
}

document.addEventListener('DOMContentLoaded', app.init);