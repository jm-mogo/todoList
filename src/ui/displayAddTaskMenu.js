function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
export function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

document.getElementById("new-task-button").addEventListener('click', openNav)
document.getElementById("closebtn").addEventListener('click', closeNav)
