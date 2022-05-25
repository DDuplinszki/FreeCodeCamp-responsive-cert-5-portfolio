// project presentation freeCodeCamp part
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

// project presentation GitHub part
const gitImages = {
    "Where is the ISS?": {
        image:
        "https://dand16.github.io/CDN/react%20iss.png"
    },
    "Castillo Construction": {
        image:
        "https://dand16.github.io/CDN/frontend%20castillo.png"
    },
    "Number guessing game": {
        image:
        "https://dand16.github.io/CDN/number%20guessing%20game.png"
    },
    "Crypto price info API": {
        image:
        "https://dand16.github.io/CDN/crypto%20api.png"
    }
};

const gitLinks = document.querySelectorAll(".git-anchors");

gitLinks.forEach((link) => {
    link.addEventListener("pointerenter", ({ target }) => {
      const { textContent } = target;
      image.src = gitImages[textContent].image;
      image.classList.toggle("preview-animation-git")
    });
    link.addEventListener("pointerout", () => {
        image.classList.toggle("preview-animation-git")
    })
});

// switching between github and fcc presentation
const gitSwitch = document.querySelector("#git-presentation");
const fccSwitch = document.querySelector("#fcc-presentation");
const fccTile = document.querySelectorAll(".project-tile");
const gitTile = document.querySelectorAll(".project-tile-git");
const fccTitle = document.querySelectorAll(".fcc-title");
const gitTitle = document.querySelector("#github-title");
const projectContainer = document.querySelector("#project-presentation");

gitSwitch.addEventListener("click", () => {
    fccTile.forEach((div) => {
        div.style.display = "none";
    })
    gitTile.forEach((div) => {
        div.style.display = "block";
    })
    fccTitle.forEach((text) => {
        text.style.display = "none";
    })
    gitTitle.style.display = "block";
    projectContainer.style.flexDirection = "row-reverse";
});

fccSwitch.addEventListener("click", () => {
    fccTile.forEach((div) => {
        div.style.display = "block";
    })
    gitTile.forEach((div) =>{
        div.style.display = "none";
    })
    fccTitle.forEach((text) => {
        text.style.display = "block";
    })
    gitTitle.style.display = "none";
    projectContainer.style.flexDirection = "row";
})