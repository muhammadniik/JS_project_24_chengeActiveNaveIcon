const a = document.getElementsByClassName("btnA");
Array.from(a).forEach(element => {
    element.onclick = () => {
        Array.from(a).forEach((e) => e.classList.remove("active"));
        element.classList.add("active");

    }

})