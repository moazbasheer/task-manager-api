const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT
const taskRouter = require('./routers/task');
const userRouter = require('./routers/user');
app.use(express.json())
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const multer = require('multer');
const upload = multer({
    dest: 'images'
});
app.post('/upload', upload.single('upload'),(req, res) => {
    res.send()
});