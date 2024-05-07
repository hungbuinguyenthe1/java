document.addEventListener("DOMContentLoaded", function() {
    function changeBackgroundColor(elementId, newColor) {
        var element = document.getElementById(elementId);
        if (element) {
            element.addEventListener("mouseenter", function() {
                element.style.backgroundColor = newColor;
            });
    
            element.addEventListener("mouseleave", function() {
                // Khôi phục màu nền ban đầu khi chuột rời khỏi phần tử
                element.style.backgroundColor = "";
            });
        } else {
            console.error("Element with id " + elementId + " not found.");
        }
    }
    
    changeBackgroundColor("myElement", "blue");
    
    function toggleDropdown() {
        var dropdown = document.getElementById("myDropdown");
        dropdown.classList.toggle("show");
    }
})

