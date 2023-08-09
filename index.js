const express = require("express")

const app = express()

const PORT = 5000

app.get('/greeting', ( req, res ) => {
    res.send(`<h1> Hello stranger </h1>`)
})

app.get(`/greeting/:name`, (req, res) => {
    res.send(`<h1> Hello ${req.params.name}</h1>`)
})

app.get(`/tip/:total/:tipPercentage`,(req, res) => {
    let {total, tipPercentage} = req.params
    res.send(`<h1> Tip is ${total*tipPercentage/100}</h1>`)
})

app.get('/magic',(req,res) => {
    let magicball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

    const randomNum = (min,max) => {return min + Math.random()*(max-min)}
    res.send(`<h1>${magicaball[randomNum(0,magicball.length)]}</h1>`)
})




app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
});