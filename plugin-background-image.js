(function ($) {
    $.fn.scrollImageChange = function (options) { // Atualizado o nome da função
        var settings = $.extend({
            images: [
                    "./images/moon.jpg",
                    "./images/nebulous.jpg",
                    "./images/space.jpg",
                    "./images/sky.jpg",
                    "./images/aurora.jpg",
                    "./images/earth.jpg",
            ],
            initialImage: "./images/earth.jpg", // Adiciona uma nova opção para a imagem inicial
        }, options);

        // Encontrar o índice da imagem inicial
        var initialImageIndex = settings.images.indexOf(settings.initialImage);

        // Inicia com a imagem inicial ou, se não for encontrada, com a primeira imagem
        var currentImageIndex = (initialImageIndex !== -1) ? initialImageIndex : 0;

        function changeImage() {
            currentImageIndex = (currentImageIndex + 1) % settings.images.length;
            updateImage();
        }

        function updateImage() {
            var selectedImage = settings.images[currentImageIndex];
            $("#backgroundImageContainer").css("background-image", "url('" + selectedImage + "')");
        }

        return this.each(function () {
            var $this = $(this);

            $this.css({
                fontSize: "12px",
                margin: "3px",
                cursor: "pointer",
                backgroundColor: "rgb(69, 55, 55);",
                color: "white",
                border: "none",
                borderRadius: "5px",
                transition: "background-image 0.3s, transform 0.3s",
            });

            $this.on("click", function () {
                changeImage();
            });

            $(document).keydown(function (e) {
                if (e.which === 40) {
                    changeImage();
                }
            });

            // Inicia com a imagem inicial
            updateImage();
        });
    };
})(jQuery);
