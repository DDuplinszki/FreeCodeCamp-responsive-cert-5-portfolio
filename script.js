const fccImages = {
    "Tribute Page": {
        image:
        "https://dand16.github.io/CDN/FCC%20responsive%20tribute.png"
    },
    "Landing Page": {
        image:
        "https://dand16.github.io/CDN/FCC%20responsive%20landing%20page.png"
    },
    "Technical Documentation": {
        image:
        "https://dand16.github.io/CDN/FCC%20responsive%20documentation.png"
    },
    "Survey Form": {
        image:
        "https://dand16.github.io/CDN/FCC%20responsive%20survey.png"
    }
};

const links = document.querySelectorAll(".fcc-anchors");
const image = document.querySelector(".preview-pictures");

links.forEach((link) => {
    link.addEventListener("pointerenter", ({ target }) => {
      const { textContent } = target;
      image.src = fccImages[textContent].image;
      image.classList.toggle("preview-animation")
    });
    link.addEventListener("pointerout", () => {
        image.classList.toggle("preview-animation")
    })
});