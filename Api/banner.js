

document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:7006/api/pagecontent')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const bannerDetails = document.getElementById('banner-details');

                if (data.pageContent) {
                    const { heading, text, button } = data.pageContent[0];

                    console.log(data, 'Fetched Data');

                    bannerDetails.innerHTML = `
                        <h3>${heading}</h3>
                        <p>${text}</p>
                        <span class="shop-button">${button}</span>
                    `;
                } else {
                    console.error('Page content is missing in the data');
                }
            } else {
                console.error('Failed to fetch page content');
            }
        })
        .catch(error => console.error('Error:', error));
});
 