//utilities
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function toggleSideBar() {
    let closeClass = "w-0";
    let openClass = "w-72";
    let element = document.getElementById("sidebar");
    let content = element.childNodes[1];
    //Open the sidebar
    if (element.classList.contains(closeClass)) {
        element.classList.remove(closeClass);
        element.classList.add(openClass);
        sleep(100).then(() => {
            content.classList.remove("opacity-0");
        });
        return;
    }

    //Close the sidebar
    if (element.classList.contains(openClass)) {
        content.classList.add("opacity-0");
        // await sleep(100);
        element.classList.remove(openClass);
        element.classList.add(closeClass);
        return;
    }
}
