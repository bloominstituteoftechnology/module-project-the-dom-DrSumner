function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll("div")
  widgets.forEach( widget => widget.classList.add("widget"))
  
  
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  
  const quoter = document.createElement("div")
  const author = document.createElement("div")
  const genQuote = quotes[Math.floor(Math.random() * 10)]
 
  quoter.textContent = genQuote.quote
  author.textContent = `${genQuote.author} in ${ genQuote.date == null ? "an unknown date":genQuote.date}`
  //console.log(quoter.outerHTML)
  //console.log(author.outerHTML)
  const quoteWidget = document.querySelector(".quoteoftheday")
  quoteWidget.appendChild(quoter)
  quoteWidget.appendChild(author)
  //console.log(quoteWidget.outerHTML)
  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  
  const adverb = adverbs[Math.floor(Math.random() * 10)]
  const noun = nouns[Math.floor(Math.random() * 10)]
  const verb = verbs[Math.floor(Math.random() * 10)]
  const adverb2 = adverbs[Math.floor(Math.random() * 10)]
  const noun2 = nouns[Math.floor(Math.random() * 10)]
  const verb2 = verbs[Math.floor(Math.random() * 10)]

  const corp = document.createElement("p")
  corp.textContent = `We need to ${verb} our ${noun} ${adverb} in order to ${verb2} our ${noun2} ${adverb2}.`
  
  const corpQuote = document.querySelector(".corporatespeak")
  corpQuote.appendChild(corp)
  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdown = document.createElement("p")
  countdownWid = document.querySelector(".countdown")
  countdownWid.appendChild(countdown)
  let counter = 5
  countdown.textContent = counter <= 0 ? "Liftoff! 🚀": `T-minus ${counter}...`    
  const countdownn = setInterval(function() { counter--, countdown.textContent = counter <= 0 ? "Liftoff! 🚀": `T-minus ${counter}...`}, 1000)
  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
 // console.log(people)?
  const rando = people[Math.floor(Math.random() * 15)]
  //console.log(rando.fname)
 // console.log(rando.lname)
  //console.log(rando.dateOfBirth)
  //console.log(rando.friends)
  let friends = []
 
    
  rando.friends.forEach( id => {
     for(let i = 0; i < people.length; i++){
    if( people[i].id == id){
    friends.push(people[i])
  }}})

console.log(friends)
let friendList = ''
for(let i = 0; i < friends.length; i++){
  
  if(friends.length === 1){
 friendList += friends[i].fname + ' ' + friends[i].lname
} 

else if (friends.length === 2){
  if(i === 0){
  friendList += friends[i].fname + ' ' + friends[i].lname + " and "
}   else if(i === 1) {
  friendList += friends[i].fname + ' ' + friends[i].lname
} 
}

else if (friends.length >=3){
  if(friends.length - i === 1){
    friendList += friends[i].fname + ' ' + friends[i].lname
  } else if (friends.length - i === 2){
    friendList += friends[i].fname + ' ' + friends[i].lname + " and "
  } else{
    friendList += friends[i].fname + ' ' + friends[i].lname + ", "
  }
}
}
 let year = rando.dateOfBirth
 //console.log(year)
 year = year.slice(0,4)
friendQuote = document.createElement("p")
friendQuote.textContent = `${rando.fname} ${rando.lname} was born in ${year} and
 ${friends <= 0 ? "has no friends.": `is friends with ${friendList}.`}  `
 friendWid = document.querySelector(".friends")
 friendWid.appendChild(friendQuote)


  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
console.log(widgets)
let counter2 = 1
//while(counter2 <= widgets.length )
widgets.forEach(widget => widget.setAttribute("tabindex",counter2++))
  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
 