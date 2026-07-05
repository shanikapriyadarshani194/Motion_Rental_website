
document.addEventListener("DOMContentLoaded", function () {
    
    
    if (typeof Swal !== "undefined") {
        Swal.fire({
            title: "Order Confirmed!",
            text: "Thank you for choosing MotionRentals. Your order has been successfully submitted.",
            icon: "success",
            confirmButtonText: "OK",
            timer: 5000 
        });
    }

    
    const confirmationBox = document.querySelector(".confirmation-box");
    if (confirmationBox) {
        confirmationBox.style.opacity = "0";
        confirmationBox.style.transform = "scale(0.9)";
        setTimeout(() => {
            confirmationBox.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            confirmationBox.style.opacity = "1";
            confirmationBox.style.transform = "scale(1)";
        }, 300);
    }

    
    setTimeout(function () {
        window.location.href = "home.html"; 
    }, 7000);
});
