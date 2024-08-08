



    document.addEventListener('DOMContentLoaded', function() {
            fetch('http://localhost:7006/api/category')
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        const carousel = document.getElementById('categoryCarousel');
                        data.category.forEach(category => {
                            const categoryHtml = `
                                <div>
                                    <a href="single-property.html" class="pxp-prop-card-1 rounded-lg" >
                                        <div class="pxp-prop-card-1-fig pxp-cover"
                                            style="background-image: url(${category.image});"></div>
                                        <div class="pxp-prop-card-1-gradient pxp-animate"></div>
                                        <div class="pxp-prop-card-1-details">
                                            <div class="pxp-prop-card-1-details-price" ">${category.name}</div>
                                        </div>
                                        <div class="pxp-prop-card-1-details-cta text-uppercase">View Details</div>
                                    </a>
                                </div>
                            `;
                            carousel.innerHTML += categoryHtml;
                        });

                        $('.owl-carousel').owlCarousel({
                            // loop: true,
                            // margin: 10,
                            // nav: true,
                            // responsive: {
                            //     0: {
                            //         items: 1
                            //     },
                            //     600: {
                            //         items: 3
                            //     },
                            //     1000: {
                            //         items: 5
                            //     },
                            // },
                        });
                    } else {
                        console.error('Failed to fetch categories');
                    }
                })
                .catch(error => console.error('Error:', error));
        });



   