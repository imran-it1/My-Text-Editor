const textArea = document.getElementById('text-area');
const fontSizeFiled = document.getElementById('font-size');
fontSizeFiled.addEventListener('click', function(){
    const fontSizeString = fontSizeFiled.value;
    console.log(fontSizeString);
    textArea.style.fontSize = `${fontSizeString}px`;
})



const fontColor = document.getElementById('font-color');
fontColor.addEventListener('input', function(){
    const fontColorValue = fontColor.value;
    textArea.style.color = `${fontColorValue}`
})