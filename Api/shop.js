document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = 'http://localhost:7006/api/shope';

    async function fetchShopData() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            console.log(data, 'Fetched data'); 

            if (data.success && Array.isArray(data.shope) && data.shope.length > 0) {
                const firstItem = data.shope[0]; 

                document.getElementById('shop-title').textContent = firstItem.heading || 'Default Heading'; 
                const breadcrumbMenu = document.getElementById('breadcrumb-menu');

                breadcrumbMenu.innerHTML = `
                    <li><a href="index.html">${firstItem?.text1 || 'Default Text 1'}</a></li>
                    <li><span>${firstItem?.text2 || 'Default Text 2'}</span></li>
                `;
            } else {
                console.error('No data available or wrong data structure');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    fetchShopData();
});
