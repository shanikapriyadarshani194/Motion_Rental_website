document.addEventListener("DOMContentLoaded", function () {
    
    const serviceItems = document.querySelectorAll(".service-item");

    function revealServices() {
        serviceItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (itemPosition < screenPosition) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealServices);
    revealServices(); 


    const darkModeButton = document.createElement("button");
    darkModeButton.textContent = "Toggle Dark Mode";
    darkModeButton.style.position = "fixed";
    darkModeButton.style.bottom = "20px";
    darkModeButton.style.right = "20px";
    darkModeButton.style.padding = "10px 20px";
    darkModeButton.style.border = "none";
    darkModeButton.style.borderRadius = "8px";
    darkModeButton.style.backgroundColor = "#ff6b6b";
    darkModeButton.style.color = "white";
    darkModeButton.style.fontSize = "1em";
    darkModeButton.style.cursor = "pointer";
    darkModeButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    darkModeButton.style.transition = "background-color 0.3s, transform 0.2s";
    document.body.appendChild(darkModeButton);

    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeButton.textContent = "Light Mode";
            darkModeButton.style.backgroundColor = "#444";
        } else {
            darkModeButton.textContent = "Dark Mode";
            darkModeButton.style.backgroundColor = "#ff6b6b";
        }
    });

    
    const darkModeStyle = document.createElement("style");
    darkModeStyle.textContent = `
        .dark-mode { background: #222; color: white; }
        .dark-mode .service-item { background: rgba(255, 255, 255, 0.2); color: white; }
        .dark-mode .service-item h2 { color: white; }
        .dark-mode footer { background: rgba(0, 0, 0, 0.9); }
    `;
    document.head.appendChild(darkModeStyle);

    
    const backButton = document.querySelector(".back-button");
    backButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setTimeout(() => {
            window.location.href = backButton.href;
        }, 800); 
    });
});
