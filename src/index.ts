require('dotenv').config()

import Express from "express"

const app = Express()
const port = process.env.PORT || 3000;

app.get ('/', (req, res) => {
    res.status(200).send({message: '1234'})
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
})