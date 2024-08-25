let mainBody = document.getElementById("mainBody")
let contextMenu = document.getElementById("contextMenu")

function contextMenuHandler(event) {
    event.preventDefault()
    contextMenu.style.display = "block"
    contextMenu.style.left = `${event.pageX}px`;
    contextMenu.style.top = `${event.pageY}px`;
}

function contextMenuClick() {
    contextMenu.style.display = "none"
}

function contextMenuKey(event) {
    if (event.key === "Escape")
    contextMenu.style.display = "none"
}

mainBody.addEventListener("contextmenu", contextMenuHandler)
mainBody.addEventListener("click",contextMenuClick)
mainBody.addEventListener("keydown",contextMenuKey)

