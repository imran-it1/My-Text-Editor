    // Font Bold
    const textAreaElement = document.getElementById('text-area');
    const fontBoldButton = document.getElementById('font-bold');


    let isBold = false;

    fontBoldButton.addEventListener('click', function() {
      if (isBold) {
        textAreaElement.style.fontWeight = 'normal';
      } else {
        textAreaElement.style.fontWeight = 'bold';
      }
      isBold = !isBold;
    });



    // Font Italic


    const fontItalicButton = document.getElementById('font-italic');


    let isItalic = true;
    fontItalicButton.addEventListener('click', function(){
        if(isItalic){
            textAreaElement.style.fontStyle = 'italic';
        }
        else{
            textAreaElement.style.fontStyle = 'normal'
        }

        isItalic = !isItalic;
    })

    // Font Underline


    const fontUnderlineButton = document.getElementById('font-underline');


    let isUnderline = true;
    fontUnderlineButton.addEventListener('click', function(){
        if(isUnderline){
            textAreaElement.style.textDecoration = 'underline';
        }
        else{
            textAreaElement.style.textDecoration = 'none'
        }
        isUnderline = !isUnderline;
    })

    // Align left
    const alignLeftButton = document.getElementById('align-left');


    let isAlignLeft = true;
    alignLeftButton.addEventListener('click', function(){
        if(isAlignLeft){
            textAreaElement.style.textAlign = 'left';
        }
        else{
            textAreaElement.style.textAlign = 'left'
        }
        isAlignLeft = !isAlignLeft;
    })

    // Align Center
    const alignTextCenter = document.getElementById('align-center');


    let isAlignCenter = true;
    alignTextCenter.addEventListener('click', function(){
        if(isAlignCenter){
            textAreaElement.style.textAlign = 'center';
        }
        else{
            textAreaElement.style.textAlign = 'left'
        }
        isAlignCenter = !isAlignCenter;
    })

    // Align Justify
    const alignTextJustify = document.getElementById('text-justify');


    let isAlignJustify = true;

    alignTextJustify.addEventListener('click', function(){
        if(isAlignJustify){
            textAreaElement.style.textAlign = 'justify';
        }
        else{
            textAreaElement.style.textAlign = 'left'
        }
        isAlignJustify = !isAlignJustify;
    })


    // Align right
    const alignRightButton = document.getElementById('align-right');


    let isAlignRight = true;
    alignRightButton.addEventListener('click', function(){
        if(isAlignRight){
            textAreaElement.style.textAlign = 'right';
        }
        else{
            textAreaElement.style.textAlign = 'left'
        }
        isAlignRight = !isAlignRight;
    })