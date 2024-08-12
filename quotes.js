function genQuote(){
    const quote = document.getElementById('quote-text')
    const authorName = document.getElementById('author-name')
    fetch("https://type.fit/api/quotes")
    .then((x)=>{
        return x.json()
    })
    .then((y)=>{
        // console.log(y)
        // console.log(y[Math.floor(Math.random()*y.length) ].author)
        authorName.innerHTML=y[Math.floor(Math.random()*y.length) ].author
        quote.innerHTML=y[Math.floor(Math.random()*y.length) ].text
        // console.log(y[Math.floor(Math.random()*y.length) ].text)
    })
}