// Font Size
const textArea = document.getElementById('text-area');
const fontSizeFiled = document.getElementById('font-size');
fontSizeFiled.addEventListener('input', function(){
    const fontSizeString = fontSizeFiled.value;
    console.log(fontSizeString);
    textArea.style.fontSize = `${fontSizeString}px`;
})


// Font Color
const fontColor = document.getElementById('font-color');
fontColor.addEventListener('input', function(){
    const fontColorValue = fontColor.value;
    textArea.style.color = `${fontColorValue}`
})