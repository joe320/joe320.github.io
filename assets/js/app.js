const copyButtons = document.querySelectorAll("[data-copy]");

copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
        const text = button.dataset.copy;
        const originalText = button.textContent;

        try {
            await navigator.clipboard.writeText(text);
            button.textContent = "Copied!";
        } catch (error) {
            button.textContent = "Copy failed";
            console.error("Copy failed:", error);
        }

        setTimeout(() => {
            button.textContent = originalText;
        }, 1800);
    });
});

const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
