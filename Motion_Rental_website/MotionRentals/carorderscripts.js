document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const itemSelect = document.getElementById("item");
    const submitButton = document.querySelector("button");
    const addressInput = document.getElementById("address");

    
    const daysInput = document.createElement("input");
    daysInput.type = "number";
    daysInput.id = "days";
    daysInput.name = "days";
    daysInput.min = "1";
    daysInput.value = "1";
    daysInput.placeholder = "Number of days";
    daysInput.style.width = "100%";
    daysInput.style.padding = "10px";
    daysInput.style.marginBottom = "15px";
    daysInput.style.border = "1px solid #ccc";
    daysInput.style.borderRadius = "8px";
    daysInput.style.fontSize = "1em";
    itemSelect.insertAdjacentElement("afterend", daysInput);

    
    const totalPriceDisplay = document.createElement("p");
    totalPriceDisplay.style.fontSize = "1.2em";
    totalPriceDisplay.style.fontWeight = "bold";
    totalPriceDisplay.style.color = "#cc4047";
    totalPriceDisplay.style.marginTop = "10px";
    daysInput.insertAdjacentElement("afterend", totalPriceDisplay);

    
    function updatePrice() {
        let selectedText = itemSelect.options[itemSelect.selectedIndex].text;
        let priceMatch = selectedText.match(/Rs\.(\d+)/);
        let days = parseInt(daysInput.value) || 1;

        if (priceMatch) {
            let pricePerDay = parseInt(priceMatch[1]);
            let totalPrice = pricePerDay * days;
            totalPriceDisplay.textContent = `Total Price: Rs.${totalPrice}`;
        } else {
            totalPriceDisplay.textContent = "";
        }
    }

    itemSelect.addEventListener("change", updatePrice);
    daysInput.addEventListener("input", updatePrice);

    
    const charCounter = document.createElement("p");
    charCounter.style.fontSize = "0.9em";
    charCounter.style.color = "#666";
    charCounter.style.marginTop = "-10px";
    addressInput.insertAdjacentElement("afterend", charCounter);

    addressInput.addEventListener("input", function () {
        charCounter.textContent = `Characters: ${addressInput.value.length} / 100`;
        if (addressInput.value.length > 100) {
            charCounter.style.color = "red";
        } else {
            charCounter.style.color = "#666";
        }
    });

    
    const phoneLabel = document.createElement("label");
    phoneLabel.textContent = "Phone Number:";
    phoneLabel.style.fontWeight = "bold";
    phoneLabel.style.color = "#ff758c";
    const phoneInput = document.createElement("input");
    phoneInput.type = "tel";
    phoneInput.id = "phone";
    phoneInput.name = "phone";
    phoneInput.placeholder = "Enter your phone number";
    phoneInput.style.width = "100%";
    phoneInput.style.padding = "10px";
    phoneInput.style.marginBottom = "15px";
    phoneInput.style.border = "1px solid #ccc";
    phoneInput.style.borderRadius = "8px";
    phoneInput.style.fontSize = "1em";
    addressInput.insertAdjacentElement("afterend", phoneInput);
    addressInput.insertAdjacentElement("afterend", phoneLabel);

    
    form.addEventListener("submit", function (event) {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = phoneInput.value.trim();
        let address = addressInput.value.trim();
        let days = parseInt(daysInput.value) || 1;

        if (name === "" || email === "" || address === "" || phone === "") {
            alert("All fields are required!");
            event.preventDefault();
            return;
        }

        if (!/^[a-zA-Z\s]+$/.test(name)) {
            alert("Name should contain only letters and spaces.");
            document.getElementById("name").focus();
            event.preventDefault();
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Please enter a valid email address.");
            document.getElementById("email").focus();
            event.preventDefault();
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            alert("Phone number must be exactly 10 digits.");
            phoneInput.focus();
            event.preventDefault();
            return;
        }

        if (address.length < 10 || address.length > 100) {
            alert("Address must be between 10 and 100 characters.");
            addressInput.focus();
            event.preventDefault();
            return;
        }

        if (days < 1) {
            alert("Rental duration must be at least 1 day.");
            daysInput.focus();
            event.preventDefault();
            return;
        }

    
        if (!confirm(`Are you sure you want to place this order for ${days} day(s)?`)) {
            event.preventDefault();
        }
    });
});
