document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded');
    fetch('http://localhost:7006/api/hero')
        .then(response => response.json())
        .then(data => {
            console.log('API Response:', data);
            if (data.success && data.banners && data.banners.length > 0) {
                console.log('First banner:', data.banners[0]);

                const heroDetails = document.getElementById('pxp-hero-props-carousel-1');

                if (data.banners) {
                    const { heading1, heading2, heading3, heading4, image1, image2, image3, image4, price1, price2, price3, price4, subheading1, subheading2, subheading3, subheading4, subimage1, subimage2, subimage3, subimage4 } = data.banners[0];
                    console.log(data, 'fetchhero');
                    console.log(price1, price2, price3, price4);

                    heroDetails.innerHTML = `
                     <ol class="carousel-indicators container">
                    <li data-target="#pxp-hero-props-carousel-1" data-slide-to="0" class="pxp-cover active"
                        style="background-image: url(${subimage1});"></li>
                    <li data-target="#pxp-hero-props-carousel-1" data-slide-to="1" class="pxp-cover"
                        style="background-image: url(${subimage2});"></li>
                    <li data-target="#pxp-hero-props-carousel-1" data-slide-to="2" class="pxp-cover"
                        style="background-image: url(${subimage3});"></li>
                    <li data-target="#pxp-hero-props-carousel-1" data-slide-to="3" class="pxp-cover"
                        style="background-image: url(${subimage4});"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-slide="0">
                        <div class="pxp-hero-bg pxp-cover" style="background-image: url(${image1});"></div>
                        <div class="pxp-caption">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-12 col-md-8 col-lg-6">
                                        <div class="pxp-caption-prop-title">${heading1}</div>
                                    </div>
                                </div>
                                <div class="pxp-caption-prop-features mt-4">${subheading1}</div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-slide="1">
                        <div class="pxp-hero-bg pxp-cover"
                            style="background-image: url(${image2}); background-position: 50% 70%;"></div>
                        <div class="pxp-caption">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-12 col-md-8 col-lg-6">
                                        <div class="pxp-caption-prop-title">${heading2}</div>
                                    </div>
                                </div>
                                <div class="pxp-caption-prop-features mt-4">${subheading2}</div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-slide="2">
                        <div class="pxp-hero-bg pxp-cover" style="background-image: url(${image3});"></div>
                        <div class="pxp-caption">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-12 col-md-8 col-lg-6">
                                        <div class="pxp-caption-prop-title">${heading3}</div>
                                    </div>
                                </div>
                                <div class="pxp-caption-prop-features mt-4">${subheading3}</div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-slide="3">
                        <div class="pxp-hero-bg pxp-cover"
                            style="background-image: url(${image4});"></div>
                        <div class="pxp-caption">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-12 col-md-8 col-lg-6">
                                        <div class="pxp-caption-prop-title">${heading4}</div>
                                    </div>
                                </div>
                                <div class="pxp-caption-prop-features mt-4">${subheading4}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pxp-carousel-controls">
                    <a class="pxp-carousel-control-prev" role="button" data-slide="prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828"
                            viewBox="0 0 32.414 20.828">
                            <g id="Group_30" data-name="Group 30" transform="translate(-1845.086 -1586.086)">
                                <line id="Line_2" data-name="Line 2" x1="30" transform="translate(1846.5 1596.5)"
                                    fill="none" stroke="#333" stroke-linecap="round" stroke-width="2" />
                                <line id="Line_3" data-name="Line 3" x1="9" y2="9" transform="translate(1846.5 1587.5)"
                                    fill="none" stroke="#333" stroke-linecap="round" stroke-width="2" />
                                <line id="Line_4" data-name="Line 4" x1="9" y1="9" transform="translate(1846.5 1596.5)"
                                    fill="none" stroke="#333" stroke-linecap="round" stroke-width="2" />
                            </g>
                        </svg>
                    </a>
                    <a class="pxp-carousel-control-next" role="button" data-slide="next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828"
                            viewBox="0 0 32.414 20.828">
                            <g id="Symbol_1_1" data-name="Symbol 1 – 1" transform="translate(-1847.5 -1589.086)">
                                <line id="Line_5" data-name="Line 2" x2="30" transform="translate(1848.5 1599.5)"
                                    fill="none" stroke="#333" stroke-linecap="round" stroke-width="2" />
                                <line id="Line_6" data-name="Line 3" x2="9" y2="9" transform="translate(1869.5 1590.5)"
                                    fill="none" stroke="#333" stroke-linecap="round" stroke-width="2" />
                                <line id="Line_7" data-name="Line 4" y1="9" x2="9" transform="translate(1869.5 1599.5)"
                                    fill="none" stroke="#333" stroke-linecap="round" stroke-width="2" />
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="carousel slide pxp-hero-props-carousel-1-prices" data-ride="carousel" data-pause="false"
                data-interval="false">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-slide="0" style="background-color: #141A1F;">
                        <div class="pxp-progress"></div>
                        <div class="pxp-price"><span>${price1}</span></div>
                        <a href="single-property.html" class="pxp-cta text-uppercase pxp-animate">View Details</a>
                    </div>
                    <div class="carousel-item" data-slide="1" style="background-color: #6C553B;">
                        <div class="pxp-progress"></div>
                        <div class="pxp-price"><span>${price2}</span></div>
                        <a href="single-property.html" class="pxp-cta text-uppercase pxp-animate">View Details</a>
                    </div>
                    <div class="carousel-item" data-slide="2" style="background-color: #2f2e2c;">
                        <div class="pxp-progress"></div>
                        <div class="pxp-price"><span>$${price3}</span></div>
                        <a href="single-property.html" class="pxp-cta text-uppercase pxp-animate">View Details</a>
                    </div>
                    <div class="carousel-item" data-slide="3" style="background-color: #3b4254;">
                        <div class="pxp-progress"></div>
                        <div class="pxp-price"><span>$${price4}</span></div>
                        <a href="single-property.html" class="pxp-cta text-uppercase pxp-animate">View Details</a>
                    </div>
                </div>
                <div class="pxp-carousel-ticker">
                    <div class="pxp-carousel-ticker-counter"></div>
                    <div class="pxp-carousel-ticker-divider">&nbsp;&nbsp;/&nbsp;&nbsp;</div>
                    <div class="pxp-carousel-ticker-total"></div>
                </div>
            </div>
                    `;



                } else {
                    console.error('hero content is missing in the data');
                }
            } else {
                console.log('No hero found or API request unsuccessful');
            }
        })
        .catch(error => console.error('Error:', error));
});

