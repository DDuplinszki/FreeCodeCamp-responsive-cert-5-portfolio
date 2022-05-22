let previewTribute = document.getElementById('preview-tribute');
let previewLanding = document.getElementById('preview-landing');
let previewDoc = document.getElementById('preview-doc');
let previewSurvey = document.getElementById('preview-survey');
let anchorTribute = document.getElementById('anchor-tribute');
let anchorLanding = document.getElementById('anchor-landing');
let anchorDoc = document.getElementById('anchor-doc');
let anchorSurvey = document.getElementById('anchor-survey');

const previewArr = [previewTribute, previewLanding, previewDoc, previewSurvey];
const anchorArr = [anchorTribute, anchorLanding, anchorDoc, anchorSurvey]

// anchorTribute.addEventListener('mouseover', () => {
//     previewTribute.style.display = 'block';
// })
// anchorTribute.addEventListener('mouseout', function handleMouseOut() {
//     previewTribute.style.display = 'none';

// });

// anchorTribute.addEventListener('mouseover', () => {
//     previewTribute.classList.toggle('preview-animation');
// })
// anchorTribute.addEventListener('mouseout', () => {
//     previewTribute.classList.toggle('preview-animation');
// });


anchorArr.forEach((element) => {
    element.addEventListener('mouseover', () => {
        console.log(anchorArr.indexOf(element));
        previewArr.forEach((styling) => {  
            console.log(anchorArr.indexOf(element));
            let styleArr = [];
            styleArr.push(anchorArr.indexOf(element));
            console.log(styleArr);
            // anchorArr.indexOf(element).classList.toggle('preview-animation');
            styleArr.classList.toggle('preview-animation');
        })
    });
    element.addEventListener('mouseout', () => {
        previewArr.forEach((styling) => {
            styling.classList.toggle('preview-animation');
        })
    });
});
