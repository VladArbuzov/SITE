function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    }

function scrollToBottom() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
    });
    }

function contactBtn() {
    window.open("../code/contact_info.html", "", "width=400,height=600")
}