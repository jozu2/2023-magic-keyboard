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
const customLetter = document.querySelectorAll('.letters')

const modal = document.querySelector('.modal')
const modalTwo = document.querySelector('.modal-two')
const modalThree = document.querySelector('.modal-three')
const modalFour = document.querySelector('.modal-four')




const keyboard = new Keyboard(outputOne , capsLetters)


 


customize.addEventListener('click', () => {

 for(let i = 0; i<rgbKeys.length; i++){
  rgbKeys[i].style.backgroundColor = 'white'
  rgbKeys[i].style.color = 'black'
 }

    colorOne.forEach(button => {
      button.addEventListener('mouseenter', () =>{
        for(let i = 0; i<colorOne.length; i++){
          colorOne[i].style.backgroundColor = 'red'
         }
      })
      button.addEventListener('mouseleave', () => {
        for(let i = 0; i<colorOne.length; i++){
          colorOne[i].style.backgroundColor = 'white'
         }
      })

        button.addEventListener('click', () => {
          modal.style.top = '0px'
          modalTwo.style.top = '-500px'
          modalThree.style.top = '-500px'
          modalFour.style.top = '-500px'
          keyboardContainer.style.bottom = '10%'
        })
    })

    colorTwo.forEach(button => {
      button.addEventListener('mouseenter', () =>{
        for(let i = 0; i<colorTwo.length; i++){
          colorTwo[i].style.backgroundColor = 'green'
         }
      })
      button.addEventListener('mouseleave', () => {
        for(let i = 0; i<colorTwo.length; i++){
          colorTwo[i].style.backgroundColor = 'white'
         }
      })

        button.addEventListener('click', () => {
          modal.style.top = '-500px'
          modalTwo.style.top = '0px'
          modalThree.style.top = '-500px'
          modalFour.style.top = '-500px'
          keyboardContainer.style.bottom = '10%'
        })
    })

    customLetter.forEach(button => {
      button.addEventListener('mouseenter', () =>{
        for(let i = 0; i<customLetter.length; i++){
          customLetter[i].style.backgroundColor = 'yellow'
         }
      })
      button.addEventListener('mouseleave', () => {
        for(let i = 0; i<customLetter.length; i++){
          customLetter[i].style.backgroundColor = 'white'
         }
      })

        button.addEventListener('click', () => {
          modal.style.top = '-500px'
          modalTwo.style.top = '-500px'
          modalFour.style.top = '-500px'
          modalThree.style.top = '0px'
          keyboardContainer.style.bottom = '10%'
         
        })
    })
    rgbKeysSpecial.forEach(button => {
      button.addEventListener('mouseenter', () =>{
        for(let i = 0; i<rgbKeysSpecial.length; i++){
          rgbKeysSpecial[i].style.backgroundColor = 'blue'
         }
      })
      button.addEventListener('mouseleave', () => {
        for(let i = 0; i<rgbKeysSpecial.length; i++){
          rgbKeysSpecial[i].style.backgroundColor = 'white'
         }
      })

        button.addEventListener('click', () => {
          modal.style.top = '-500px'
          modalTwo.style.display = '-500px'
          modalThree.style.display = '-500px' 
          modalFour.style.display = '0px'
          keyboardContainer.style.bottom = '10%'
        })
    })
})








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


screenOn.addEventListener('click', () => {
  if(outputContainer.style.display !== 'block'){
    outputContainer.style.display = 'block'
    keyboardContainer.style.bottom ='5%'
   
  }else{
    outputContainer.style.display = 'none'
    keyboardContainer.style.bottom ='30%'
   
  }
})
let x = ['!','@','#','$','%', '^','&', '*', '(', ')', '_', '+',
 'Q','W','E','R','T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
  'A','S','D','F','G', 'H', 'J', 'K', 'L', ';', '"',
  'Z','X','C','V','B', 'N', 'M', '<', '>', '?' ]

  let d = ['1','2','3','4','5', '6','7', '8', '9', '0', '-', '=',
  'q','w','e','r','t', 'y', 'u', 'i', 'o', 'p', '[', ']', "/",
   'a','s','d','f','g', 'h', 'j', 'k', 'l', ';', "'",
    'z','x','C','v','b', 'n', 'm', ',', '.', '/' ]



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
  
  



