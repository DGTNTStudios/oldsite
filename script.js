function toggleMenu() {
    if (document.getElementById("links").classList.contains("links")) {
        document.getElementById("links").classList.remove("links");
        document.getElementById("links").classList.add("links-reverse");
    } else {
        document.getElementById("links").classList.remove("links-reverse");
        document.getElementById("links").classList.add("links");
    }
}