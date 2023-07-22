const express=require('express')
const cors=require('cors')
const galleryRoute=require('./routes/galleryRoute')
const app=express()
app.use(cors())
app.use(express.json())
app.use('/img',express.static("public/images"))


app.use('/image',galleryRoute)

const PORT=5001
app.listen(PORT,()=>console.log(`server listen at ${PORT}`))
