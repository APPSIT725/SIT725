var express = require("express")
const path = require('path'); 
var app = express()
var port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, 'public')));
// app.get('/add', (req, res) => {
//   const a = parseFloat(req.query.a);
//   const b = parseFloat(req.query.b);
  
//   if (isNaN(a) || isNaN(b)) {
//     return res.status(400).send("Invalid input");
//   }
  
//   const sum = a + b ;
//   res.send(`The sum of ${a} and ${b} is: ${sum}`);
// });


app.get('/evenodd', (req, res) => {
  const num = parseInt(req.query.x, 10);

  if (isNaN(num)) {
    return res.status(400).json({ error: "Invalid number" });
  }
  const type = (num % 2 === 0) ? "even" : "odd";
  res.json({ number: num, type });
});


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});