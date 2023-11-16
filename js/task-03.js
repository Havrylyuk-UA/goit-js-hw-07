const inName = document.querySelector('#name-input'),
        outName = document.querySelector('#name-output');

inName.addEventListener("input", (e) => {

    const input = e.currentTarget.value.trim();

    if (input === "") {
        outName.textContent = "Anonymous"
    } else {
        outName.textContent = input;
    }
})