const tocLinks = document.querySelectorAll(".wiki-toc a");
const sections = document.querySelectorAll(".wiki-section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const id = entry.target.getAttribute("id");

            tocLinks.forEach((link) => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${id}`
                );
            });
        });
    },
    {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0
    }
);

sections.forEach((section) => observer.observe(section));
