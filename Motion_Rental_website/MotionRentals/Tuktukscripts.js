document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle Button
    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "Dark Mode";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.top = "20px";
    darkModeToggle.style.right = "20px";
    darkModeToggle.style.padding = "10px 15px";
    darkModeToggle.style.background = "#333";
    darkModeToggle.style.color = "white";
    darkModeToggle.style.border = "none";
    darkModeToggle.style.cursor = "pointer";
    darkModeToggle.style.borderRadius = "5px";
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.querySelector("header").classList.toggle("dark-mode");
        document.querySelector("footer").classList.toggle("dark-mode");
    });

    // Dark Mode Styles
    const style = document.createElement("style");
    style.innerHTML = `
        .dark-mode {
            background-color: #222 !important;
            color: #ddd !important;
        }
        .dark-mode .Tuktuk-item {
            background: rgba(255, 255, 255, 0.1) !important;
        }
    `;
    document.head.appendChild(style);

    // Order Confirmation and Total Cost Calculation
    document.querySelectorAll(".order-button").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            let tukTukName = this.parentElement.querySelector("h3").textContent;
            let pricePerDay = parseInt(this.parentElement.querySelector("p").textContent.match(/\d+/)[0]);
            let rentalDays = prompt(`How many days do you want to rent the ${tukTukName}?`);
            
            if (rentalDays && !isNaN(rentalDays) && rentalDays > 0) {
                let totalCost = rentalDays * pricePerDay;
                if (confirm(`Total cost: Rs.${totalCost}. Proceed with the rental?`)) {
                    window.location.href = this.href;
                }
            } else {
                alert("Please enter a valid number of days.");
            }
        });
    });

    // Image Modal Preview
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100vw";
    modal.style.height = "100vh";
    modal.style.background = "rgba(0, 0, 0, 0.8)";
    modal.style.display = "none";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "1000";

    const modalImg = document.createElement("img");
    modalImg.style.maxWidth = "80%";
    modalImg.style.borderRadius = "10px";
    modal.appendChild(modalImg);

    document.body.appendChild(modal);

    document.querySelectorAll(".Tuktuk-item img").forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", function () {
            modalImg.src = this.src;
            modal.style.display = "flex";
        });
    });

    modal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Smooth Scrolling for Internal Links
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                let target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});
