class Keyboard{
  constructor(outputText){
    this.outputText = outputText
    this.outputLetter = ''
   

  }

  backspace(){
    this.outputLetter = this.outputLetter.toString().slice(0, -1)
  
  }
  space(){
    let space = ` `
    this.outputLetter = this.outputLetter.toString() +  space.toString()
  }




  appendLetter(keyLetter){
    this.outputLetter = this.outputLetter.toString() + keyLetter.toString()
  }



  updateDisplay(){
    this.outputText.innerText = this.outputLetter
   
  }
}
const shift = document.querySelectorAll("[data-shift-change]")
const onShift = document.getElementsByClassName('onShift')

const rgbSwitch = document.querySelector('.rgb-switch')
const customize = document.querySelector('.customize-switch')
const screenOn = document.querySelector('.screen-on')

const outputContainer = document.querySelector('.output-container')
const keyboardContainer = document.querySelector('.keyboard-container')

const logo = document.querySelector('.logo')
const rgbKeys = document.querySelectorAll('.rgb') 
const rgbKeysSpecial = document.querySelectorAll('.special-rgb')
const colorOne = document.querySelectorAll('#color-one')
const colorTwo = document.querySelectorAll('#color-two')
const capsLetters = document.getElementsByClassName('letter')
const letters = document.querySelectorAll("[data-letter]")
const outputOne = document.querySelector("[data-output-one]")
const backSpace = document.querySelector("[data-backspace]")
const capslock = document.querySelector("[data-capslock]")
const space = document.querySelector("[data-spacebar]")
const number = document.querySelectorAll('.number')
const numbers = document.querySelectorAll('.numbers')
const customLetter = document.querySelectorAll('.letters')

const modal = document.querySelector('.modal')
const modalTwo = document.querySelector('.modal-two')
const modalThree = document.querySelector('.modal-three')
const modalFour = document.querySelector('.modal-four')
const modalFive = document.querySelector('.modal-five')

const exitModal = document.querySelectorAll('.exit-modal')


const hColor = document.querySelectorAll('.recentColor-one')
const hColorTwo = document.querySelectorAll('.recentColor-two')
const hColorThree = document.querySelectorAll('.recentColor-three')
const hColorFour = document.querySelectorAll('.recentColor-four')
const hColorFive = document.querySelectorAll('.recentColor-five')

const removeColor = document.querySelector('.save-color-one')
const useColor = document.querySelectorAll('.useColor')

const fontChange = document.querySelectorAll('.fontChange')

const fontP = document.querySelectorAll('.font-pallete')
const keyP = document.querySelectorAll('.keycaps-pallete')
const pushColor = document.querySelector('.push')

const active = document.querySelectorAll('.active')

const keyboard = new Keyboard(outputOne , capsLetters)


const click0 = new Audio();
click0.src = "sounds/click0.wav"

const click1 = new Audio();
click1.src = "sounds/click1.wav"

const click2 = new Audio();
click2.src = "sounds/click2.wav"

const click3 = new Audio();
click3.src = "sounds/click3.wav"






//SOUND ON CLICK////////////////////////////////////////////////////////

rgbKeysSpecial.forEach(button => {
  button.addEventListener('click', () => {

      click3.play()
  
  })
  
})

customLetter.forEach(button => {
  button.addEventListener('click', () => {

      click0.play()
  
  })
  
})


numbers.forEach(button => {
  button.addEventListener('click', () => {

      click1.play()
  
  })
  
})

colorTwo.forEach(button => {
  button.addEventListener('click', () => {

      click1.play()
  
  })
  
})

colorOne.forEach(button => {
  button.addEventListener('click', () => {

      click2.play()
  
  })
  
})





//////COLORONEMODAL///////////////////////////////////////////////////////////////////////
     keyP[0].addEventListener('input', function(){
        for(let i = 0; i<colorOne.length; i++){
          colorOne[i].style.backgroundColor = this.value
         }
       })
       fontP[0].addEventListener('input', function(){
        for(let i = 0; i<colorOne.length; i++){
          colorOne[i].style.color = this.value
         }
       })

      useColor[0].addEventListener('click', () => {
        if( hColor[0].style.border == ''){

          for(let i = 0; i<hColor.length; i++){
           
            hColor[i].style.border = '.125em solid green'
            useColor[0].textContent = 'ok'
            hColor[i].classList.add('onColorH')
           }
        }else{
          for(let i = 0; i<hColor.length; i++){
            useColor[0].textContent = 'save'
            hColor[i].style.border = ''
            hColor[i].classList.remove('onColorH')   }
        }
        
      })
      for(let i =0; i<hColor.length; i++){
        hColor[i].addEventListener('click', () => {
          if( hColor[i].classList.contains('onColorH') == true){
           
             hColor[i].style.backgroundColor = keyP[0].value
            }
            })
      }
      hColor.forEach(button => {
        if(button.style.backgroundColor != 'white'){
          button.addEventListener('click', () => {
            for(let i = 0; i<colorOne.length; i++){
              colorOne[i].style.backgroundColor = button.style.backgroundColor
             }
            })
        }
      })   
      fontChange[0].addEventListener('click', ()=>{
        console.log(fontChange.value)
        for(let i = 0; i<colorOne.length; i++){
          colorOne[i].style.fontFamily = fontChange[0].value
         }
       
      })

    
//COLORTWO///////////////////////////////////////////////////////////////////////////



keyP[1].addEventListener('input', function(){
  for(let i = 0; i<colorTwo.length; i++){
    colorTwo[i].style.backgroundColor = this.value
   }
 })
 fontP[1].addEventListener('input', function(){
  for(let i = 0; i<colorTwo.length; i++){
    colorTwo[i].style.color = this.value
   }
 })

useColor[1].addEventListener('click', () => {
  if( hColorTwo[1].style.border == ''){

    for(let i = 0; i<hColorTwo.length; i++){
      hColorTwo[i].style.border = '.125em solid green'
      useColor[1].textContent = 'ok'
      hColorTwo[i].classList.add('onColorH')
     }
  }else{
    for(let i = 0; i<hColorTwo.length; i++){
      useColor[1].textContent = 'save'
      hColorTwo[i].style.border = ''
      hColorTwo[i].classList.remove('onColorH')   }
  }
  
})
for(let i =0; i<hColorTwo.length; i++){
  hColorTwo[i].addEventListener('click', () => {
    if( hColorTwo[i].classList.contains('onColorH') == true){
     
       hColorTwo[i].style.backgroundColor = keyP[1].value
      }
      })
}
hColorTwo.forEach(button => {
  if(button.style.backgroundColor != 'white'){
    button.addEventListener('click', () => {
      for(let i = 0; i<colorTwo.length; i++){
        colorTwo[i].style.backgroundColor = button.style.backgroundColor
       }
      })
  }
})   
fontChange[1].addEventListener('click', ()=>{
  console.log(fontChange[1].value)
  for(let i = 0; i<colorTwo.length; i++){
    colorTwo[i].style.fontFamily = fontChange[1].value
   }
 
})


//COLORTHREE///////////////////////////////////////////////////////////////////////////



keyP[2].addEventListener('input', function(){
  for(let i = 0; i<customLetter.length; i++){
    customLetter[i].style.backgroundColor = this.value
   }
 })
 fontP[2].addEventListener('input', function(){
  for(let i = 0; i<customLetter.length; i++){
    customLetter[i].style.color = this.value
   }
 })

useColor[2].addEventListener('click', () => {
  if( hColorThree[2].style.border == ''){

    for(let i = 0; i<hColorThree.length; i++){
      hColorThree[i].style.border = '.125em solid green'
      useColor[2].textContent = 'ok'
      hColorThree[i].classList.add('onColorH')
     }
  }else{
    for(let i = 0; i<hColorThree.length; i++){
      useColor[2].textContent = 'save'
      hColorThree[i].style.border = ''
      hColorThree[i].classList.remove('onColorH')   }
  }
  
})
for(let i =0; i<hColorThree.length; i++){
  hColorThree[i].addEventListener('click', () => {
    if( hColorThree[i].classList.contains('onColorH') == true){
     
       hColorThree[i].style.backgroundColor = keyP[2].value
      }
      })
}
hColorThree.forEach(button => {
  if(button.style.backgroundColor != 'white'){
    button.addEventListener('click', () => {
      for(let i = 0; i<customLetter.length; i++){
        customLetter[i].style.backgroundColor = button.style.backgroundColor
       }
      })
  }
})   
fontChange[2].addEventListener('click', ()=>{
  console.log(fontChange[2].value)
  for(let i = 0; i<customLetter.length; i++){
    customLetter[i].style.fontFamily = fontChange[2].value
   }
 
})



//COLORFOUR///////////////////////////////////////////////////////////////////////////



keyP[3].addEventListener('input', function(){
  for(let i = 0; i<rgbKeysSpecial.length; i++){
    rgbKeysSpecial[i].style.backgroundColor = this.value
   }
 })
 fontP[3].addEventListener('input', function(){
  for(let i = 0; i<rgbKeysSpecial.length; i++){
    rgbKeysSpecial[i].style.color = this.value
   }
 })

useColor[3].addEventListener('click', () => {
  if( hColorFour[3].style.border == ''){

    for(let i = 0; i<hColorFour.length; i++){
      hColorFour[i].style.border = '.125em solid green'
      useColor[3].textContent = 'ok'
      hColorFour[i].classList.add('onColorH')
     }
  }else{
    for(let i = 0; i<hColorFour.length; i++){
      useColor[3].textContent = 'save'
      hColorFour[i].style.border = ''
      hColorFour[i].classList.remove('onColorH')   }
  }
  
})
for(let i =0; i<hColorFour.length; i++){
  hColorFour[i].addEventListener('click', () => {
    if( hColorFour[i].classList.contains('onColorH') == true){
     
       hColorFour[i].style.backgroundColor = keyP[3].value
      }
      })
}
hColorFour.forEach(button => {
  if(button.style.backgroundColor != 'white'){
    button.addEventListener('click', () => {
      for(let i = 0; i<rgbKeysSpecial.length; i++){
        rgbKeysSpecial[i].style.backgroundColor = button.style.backgroundColor
       }
      })
  }
})   
fontChange[3].addEventListener('click', ()=>{
  console.log(fontChange[3].value)
  for(let i = 0; i<rgbKeysSpecial.length; i++){
    rgbKeysSpecial[i].style.fontFamily = fontChange[3].value
   }
 
})



//COLORFIVE///////////////////////////////////////////////////////////////////////////


keyP[4].addEventListener('input', function(){
  for(let i = 0; i<numbers.length; i++){
    numbers[i].style.backgroundColor = this.value
   }
 })
 fontP[4].addEventListener('input', function(){
  for(let i = 0; i<numbers.length; i++){
    numbers[i].style.color = this.value
   }
 })

useColor[4].addEventListener('click', () => {
  if(hColorFive[0].style.border == ''){

    for(let i = 0; i<hColorFive.length; i++){
      hColorFive[i].style.border = '.125em solid green'
      useColor[4].textContent = 'ok'
      hColorFive[i].classList.add('onColorH')
     }
  }else{
    for(let i = 0; i<hColorFive.length; i++){
      useColor[4].textContent = 'save'
      hColorFive[i].style.border = ''
      hColorFive[i].classList.remove('onColorH')   }
  }
  
})
for(let i =0; i<hColorFive.length; i++){
  hColorFive[i].addEventListener('click', () => {
    if( hColorFive[i].classList.contains('onColorH') == true){
     
       hColorFive[i].style.backgroundColor = keyP[4].value
      }
      })
}
hColorFive.forEach(button => {
  if(button.style.backgroundColor != 'white'){
    button.addEventListener('click', () => {
      for(let i = 0; i<numbers.length; i++){
        numbers[i].style.backgroundColor = button.style.backgroundColor
       }
      })
  }
})   
fontChange[4].addEventListener('click', ()=>{
  console.log(fontChange[4].value)
  for(let i = 0; i<numbers.length; i++){
    numbers[i].style.fontFamily = fontChange[4].value
   }
 
})







//X BUTTON ///////////////////////////////////////////////////////////////////

function hideModal(){
modal.style.top = '-500px'
modalTwo.style.top = '-500px'
modalThree.style.top = '-500px'
modalFour.style.top = '-500px'
modalFive.style.top = '-500px'
keyboardContainer.style.bottom = '30%'
customize.disabled = false
for(let i= 0;i<colorOne.length; i++){
  colorOne[i].classList.remove('active')
}

for(let i= 0;i<colorTwo.length; i++){
  colorTwo[i].classList.remove('active-two')
}

for(let i= 0;i<customLetter.length; i++){
  customLetter[i].classList.remove('active-three')
}

for(let i= 0;i<rgbKeysSpecial.length; i++){
  rgbKeysSpecial[i].classList.remove('active-four')
}

for(let i= 0;i<numbers.length; i++){
  numbers[i].classList.remove('active-five')
}



customize.classList.remove('turn-white')
}
exitModal.forEach(button => {
  button.addEventListener('click', hideModal)
})


//OPEN MODAL WHEN CLICK THE DESIRED BUTTON///////////////////////////////////////
colorOne.forEach(button => {
  button.addEventListener('click',  modalOneOpen)
})
function modalOneOpen(){
  for(let i= 0;i<colorOne.length; i++){
    if(colorOne[i].classList.contains('active') === true){
            modal.style.top = '0px'
            modalTwo.style.top = '-500px'
            modalThree.style.top = '-500px'
            modalFour.style.top = '-500px'
            modalFive.style.top = '-500px'
            keyboardContainer.style.bottom = '10%'
           
          }else{
           
            return
          }          
  }
}

colorTwo.forEach(button => {
  button.addEventListener('click',  modalTwoOpen)
})
function modalTwoOpen(){
  for(let i= 0;i<colorOne.length; i++){
    if(colorTwo[i].classList.contains('active-two') === true){
            modal.style.top = '-500px'
            modalTwo.style.top = '0px'
            modalThree.style.top = '-500px'
            modalFour.style.top = '-500px'
            modalFive.style.top = '-500px'
            keyboardContainer.style.bottom = '10%'
           
          }else{
           
            return
          }          
  }
}


customLetter.forEach(button => {
  button.addEventListener('click',  modalThreeOpen)
})
function modalThreeOpen(){
  for(let i= 0;i<colorOne.length; i++){
    if(customLetter[i].classList.contains('active-three') === true){
            modal.style.top = '-500px'
            modalTwo.style.top = '-500px'
            modalThree.style.top = '0px'
            modalFour.style.top = '-500px'
            modalFive.style.top = '-500px'
            keyboardContainer.style.bottom = '10%'
           
          }else{
           
            return
          }          
  }
}


rgbKeysSpecial.forEach(button => {
  button.addEventListener('click',  modalFourOpen)
})
function modalFourOpen(){
  for(let i= 0;i<rgbKeysSpecial.length; i++){
    if(rgbKeysSpecial[i].classList.contains('active-four') === true){
            modal.style.top = '-500px'
            modalTwo.style.top = '-500px'
            modalThree.style.top = '-500px'
            modalFour.style.top = '0px'
            modalFive.style.top = '-500px'
            keyboardContainer.style.bottom = '10%'
           
          }else{
           
            return
          }          
  }
}

numbers.forEach(button => {
  button.addEventListener('click',  modalFiveOpen)
})
function modalFiveOpen(){
  for(let i= 0;i<numbers.length; i++){
    if(numbers[i].classList.contains('active-five') === true){
            modal.style.top = '-500px'
            modalTwo.style.top = '-500px'
            modalThree.style.top = '-500px'
            modalFour.style.top = '-500px'
            modalFive.style.top = '0px'
            keyboardContainer.style.bottom = '10%'
           
          }else{
           
            return
          }          
  }
}





//Hover button color////////////////////////////////////////////////////
colorOne.forEach(button => {
  button.addEventListener('mouseenter', () =>{
    if(button.classList.contains('active') === true){
            for(let i = 0; i<colorOne.length; i++){
              colorOne[i].style.border = '.2em solid red'
        
             }}
          })
          button.addEventListener('mouseleave', () => {
            for(let i = 0; i<colorOne.length; i++){
              colorOne[i].style.border = 'none'
             }
            })
})


colorTwo.forEach(button => {
  button.addEventListener('mouseenter', () =>{
    if(button.classList.contains('active-two') === true){
            for(let i = 0; i<colorTwo.length; i++){
              colorTwo[i].style.border = '.2em solid red'
        
             }}
          })
          button.addEventListener('mouseleave', () => {
            for(let i = 0; i<colorTwo.length; i++){
              colorTwo[i].style.border = 'none'
             }
            })
})

customLetter.forEach(button => {
  button.addEventListener('mouseenter', () =>{
    if(button.classList.contains('active-three') === true){
            for(let i = 0; i<customLetter.length; i++){
              customLetter[i].style.border = '.2em solid red'
        
             }}
          })
          button.addEventListener('mouseleave', () => {
            for(let i = 0; i<customLetter.length; i++){
              customLetter[i].style.border = 'none'
             }
            })
})


rgbKeysSpecial.forEach(button => {
  button.addEventListener('mouseenter', () =>{
    if(button.classList.contains('active-four') === true){
            for(let i = 0; i<rgbKeysSpecial.length; i++){
              rgbKeysSpecial[i].style.border = '.2em solid red'
        
             }}
          })
          button.addEventListener('mouseleave', () => {
            for(let i = 0; i<rgbKeysSpecial.length; i++){
              rgbKeysSpecial[i].style.border = 'none'
             }
            })
})


numbers.forEach(button => {
  button.addEventListener('mouseenter', () =>{
    if(button.classList.contains('active-five') === true){
            for(let i = 0; i<numbers.length; i++){
              numbers[i].style.border = '.2em solid red'
        
             }}
          })
          button.addEventListener('mouseleave', () => {
            for(let i = 0; i<numbers.length; i++){
              numbers[i].style.border = 'none'
             }
            })
})






//CUSTOMIZE BUTTON/////////////////////////////////////////////////////
customize.classList.add('turn-white')
customize.addEventListener('click', ()=> {
  customize.disabled = true


  for(let i= 0;i<colorOne.length; i++){
    colorOne[i].classList.add('active')
}

for(let i= 0;i<colorTwo.length; i++){
  colorTwo[i].classList.add('active-two')
}

for(let i= 0;i<customLetter.length; i++){
  customLetter[i].classList.add('active-three')
}

for(let i= 0;i<rgbKeysSpecial.length; i++){
  rgbKeysSpecial[i].classList.add('active-four')
}

for(let i= 0;i<numbers.length; i++){
  numbers[i].classList.add('active-five')
}




if(customize.classList.contains('turn-white') === true){
for(let i= 0;i<rgbKeys.length; i++){
  rgbKeys[i].style.backgroundColor = 'white'
}
for(let i= 0;i<rgbKeys.length; i++){
  rgbKeys[i].style.color = 'white'
}
}
});


//RGB SWITCH/////////////////////////////////////////////////////////////////////////


rgbSwitch.addEventListener('click',() => {
  if(rgbKeys[0].style.backgroundColor != 'black'){
   
    logo.style.color = 'green'
    logo.style.textShadow = '0 0 0.125em currentColor'
   
    for(let i = 0; i<rgbKeys.length; i++){
      
      rgbKeys[i].style.backgroundColor = 'black'
      rgbKeys[i].style.boxShadow = `0 0 0.8em 0 green`
      rgbKeys[i].style.animation = 'animate 10s linear infinite'
      rgbKeys[i].style.color = `green`
     
    } 
  }else{

  
    for(let i = 0; i<rgbKeys.length; i++){
      rgbKeys[i].style.animation = 'none'
     
     
    } 
    for(let i = 0; i<letters.length; i++){
      letters[i].style.backgroundColor = 'bisque'
      letters[i].style.color = 'rgb(196, 29, 29)'
      letters[i].style.boxShadow = `none`;

  for(let i = 0; i<rgbKeysSpecial.length; i++){
    rgbKeysSpecial[i].style.backgroundColor = 'rgba(121, 181, 228, 0.8)'
    rgbKeysSpecial[i].style.color = 'rgb(255, 255, 255, .8)'
    rgbKeysSpecial[i].style.boxShadow = `none`;
  } 
  for(let i = 0; i<number.length; i++){
    number[i].style.backgroundColor = 'bisque'
    number[i].style.color = 'rgb(196, 29, 29)'
    number[i].style.boxShadow = `none`;
  } 
  for(let i = 0; i<colorOne.length; i++){
    colorOne[i].style.backgroundColor = 'rgba(236, 62, 91, 0.8)'
    colorOne[i].style.color = 'rgb(255, 255, 255, .8)'
    colorOne[i].style.boxShadow = `none`;
  } 
  for(let i = 0; i<colorTwo.length; i++){
    colorTwo[i].style.backgroundColor = 'rgba(224, 99, 67, 0.973)'
    colorTwo[i].style.color = 'rgb(255, 255, 255, .8)'
    colorTwo[i].style.boxShadow = `none`;
  } 

    logo.style.color = 'bisque'
 


  }
        }
});
//// SCREEN MODAL ON////////////////////////////////////////////////////////

screenOn.addEventListener('click', () => {
  if(outputContainer.style.display !== 'block'){
    outputContainer.style.display = 'block'
    keyboardContainer.style.bottom ='5%'
   
  }else{
    outputContainer.style.display = 'none'
    keyboardContainer.style.bottom ='30%'
   
  }
})

///SHIFT KEY///////////////////////////////////////////////////////////////////////
let x = ['!','@','#','$','%', '^','&', '*', '(', ')', '_', '+',
 'Q','W','E','R','T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
  'A','S','D','F','G', 'H', 'J', 'K', 'L', ';', '"',
  'Z','X','C','V','B', 'N', 'M', '<', '>', '?' ]

  let d = ['1','2','3','4','5', '6','7', '8', '9', '0', '-', '=',
  'q','w','e','r','t', 'y', 'u', 'i', 'o', 'p', '[', ']', "/",
   'a','s','d','f','g', 'h', 'j', 'k', 'l', ';', "'",
    'z','x','c','v','b', 'n', 'm', ',', '.', '/' ]



shift.forEach(button => {
  button.addEventListener('click', () => {
    if(capsLetters[1].textContent === 'w'){
      for(let i = 0; i<onShift.length; i++){
        onShift[i].textContent = x[i]
      }
    }else{
      for(let i = 0; i<onShift.length; i++){
        onShift[i].textContent = d[i]
        
      }
    }
    
  })
})


////APPEND LETTERS/////////////////////////////////////////////////////////////////////////////////



letters.forEach(button => {
  button.addEventListener('click', () => {
    keyboard.appendLetter(button.innerText)
    keyboard.updateDisplay()
  })
})

backSpace.addEventListener('click', () =>{
  keyboard.backspace()
  keyboard.updateDisplay()
})


space.addEventListener('click', () =>{
  keyboard.space()
  keyboard.updateDisplay()
})



//CAPSLOCK////////////////////////////////////////////////////////////////////////////////
capslock.addEventListener('click', () => {
  if(capsLetters[1].textContent === 'w'){
   
    for(let i = 0; i<capsLetters.length; i++){
      capsLetters[i].innerText = capsLetters[i].textContent.toLocaleUpperCase() 
    }
  }else{
    for(let i = 0; i<capsLetters.length; i++){
    
      capsLetters[i].innerText = capsLetters[i].textContent.toLocaleLowerCase() 
    }
  }
  
  })
  
  



