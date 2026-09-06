```javascript
document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".link-button");

    buttons.forEach((button, index) => {

        button.style.opacity = "0";
        button.style.transform = "translateY(15px)";

        setTimeout(() => {

            button.style.transition = "all 0.5s ease";

            button.style.opacity = "1";
            button.style.transform = "translateY(0)";

        }, index * 100);

    });

});
```
