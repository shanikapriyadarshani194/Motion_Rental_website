document.addEventListener("DOMContentLoaded", function () {

    const backToTop = document.createElement("button");
    backToTop.innerText = "↑ Top";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });


    function showToast(message, type = "success") {
        const toast = document.createElement("div");
        toast.classList.add("toast", type);
        toast.innerText = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }


    const contactForm = document.querySelector(".contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            const name = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const message = this.querySelector("textarea").value.trim();

            if (!name || !email || !message) {
                showToast("Please fill out all fields!", "error");
                event.preventDefault();
            } else {
                showToast("Message sent successfully!", "success");
            }
        });
    }


    

    
    const buttons = document.querySelectorAll("button, .back-button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    
    const searchBar = document.getElementById("search-bar");
    const searchResults = document.getElementById("search-results");

    const vehicles = [
        { name: "MotorBikes", description: "Fast and efficient for city rides.", sectionId: "motorbikes", link: "MotorBikes.html#motorbikes" },
        { name: "TukTuk", description: "Affordable three-wheeler transport.", sectionId: "tuktuk", link: "TukTuk.html#tuktuk" },
        { name: "Cars", description: "Luxury and economy car rentals available.", sectionId: "cars", link: "Cars.html#cars" }
    ];

    if (searchBar) {
        searchBar.addEventListener("input", function () {
            const query = searchBar.value.toLowerCase();
            searchResults.innerHTML = "";

            if (query) {
                const filteredResults = vehicles.filter(vehicle =>
                    vehicle.name.toLowerCase().includes(query) || vehicle.description.toLowerCase().includes(query)
                );

                if (filteredResults.length > 0) {
                    searchResults.style.display = "block";
                    filteredResults.forEach(vehicle => {
                        const resultItem = document.createElement("div");
                        resultItem.innerHTML = `<strong>${vehicle.name}</strong><br><small>${vehicle.description}</small>`;
                        resultItem.addEventListener("click", () => {
                            const targetSection = document.getElementById(vehicle.sectionId);
                            if (targetSection) {
                                window.scrollTo({ top: targetSection.offsetTop - 50, behavior: "smooth" });
                            } else {
                                window.location.href = vehicle.link;
                            }
                        });
                        searchResults.appendChild(resultItem);
                    });
                } else {
                    searchResults.style.display = "none";
                }
            } else {
                searchResults.style.display = "none";
            }
        });

        document.addEventListener("click", function (event) {
            if (!searchBar.contains(event.target) && !searchResults.contains(event.target)) {
                searchResults.style.display = "none";
            }
        });
    }

    
    const style = document.createElement("style");
    style.innerHTML = `
        .back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #ff4c6c;
            color: white;
            border: none;
            padding: 10px 15px;
            font-size: 1.2em;
            cursor: pointer;
            border-radius: 50%;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            display: none;
            transition: all 0.3s ease-in-out;
        }
        .back-to-top:hover {
            background-color: #dc0c62;
            transform: scale(1.2);
        }
        .toast {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #28a745;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            z-index: 1000;
            opacity: 1;
            transition: opacity 0.5s ease-in-out;
        }
        .toast.error { background-color: #dc3545; }
        .toast.info { background-color: #007bff; }
        .dark-mode { background-color: #121212; color: white; }
        .live-clock { position: fixed; top: 20px; right: 50%; transform: translateX(50%); font-size: 16px; background: #222; color: white; padding: 5px 10px; border-radius: 5px; }
        .chat-button {
            position: fixed;
            bottom: 20px;
            left: 20px;
            background-color: #007bff;
            color: white;
            padding: 10px 15px;
            font-size: 1.2em;
            cursor: pointer;
            border-radius: 50px;
        }
        .dark-mode-toggle {
            position: fixed;
            top: 20px;
            left: 20px;
            background-color: #333;
            color: white;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 50px;
            font-size: 1.1em;
        }
        .dark-mode-toggle:hover {
            background-color: #555;
        }
        .scrolling-banner {
            position: fixed;
            bottom: 60px;
            left: 0;
            right: 0;
            background-color:rgb(107, 104, 104);
            color: white;
            padding: 10px;
            text-align: center;
            z-index: 999;
            animation: scrollBanner 10s linear infinite;
        }
        @keyframes scrollBanner {
            0% { transform: translateY(100%); }
            100% { transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);

    
    const banner = document.createElement("div");
    banner.classList.add("scrolling-banner");
    banner.innerText = "Welcome to our Vehicle Rental Service! Check out the amazing deals!";
    document.body.appendChild(banner);
});
