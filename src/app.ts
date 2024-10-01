import express from 'express';
const app = express();

//routes
    //http methods: GET,POST,DELETE
app.get('/',(req,res,next) => {
    res.json({
        message : "welcome to elbis apis"
    })
})

 export default app;