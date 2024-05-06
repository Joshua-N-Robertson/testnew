document.addEventListener("DOMContentLoaded", function() {
    // Get the current URL path
    var path = window.location.pathname;

    // Get all links in the sidebar
    var sidebarLinks = document.querySelectorAll(".sidebar a");

    // Loop through each link
    sidebarLinks.forEach(function(link) {
        // Get the href attribute of the link
        var href = link.getAttribute("href");

        // Check if the link's href matches the current path
        if (path === href) {
            // Add a class to highlight the link
            link.classList.add("active");
        }
    });

    // Add click event listeners to all links
    sidebarLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Prevent default link behavior
            event.preventDefault();

            // Remove "active" class from all links
            sidebarLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            // Add "active" class to the clicked link
            link.classList.add("active");

            // Get the target page URL from the link's href attribute
            var targetUrl = this.getAttribute("href");

            // Load the content of the target page into the content area
            fetch(targetUrl)
                .then(response => response.text())
                .then(data => {
                    document.querySelector(".content").innerHTML = data;
                })
                .catch(error => {
                    console.error('Error fetching page:', error);
                });
        });
    });
});
