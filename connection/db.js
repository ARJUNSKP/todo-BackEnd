const mongoose=require('mongoose')

mongoose.connect(process.env.BASE_URL,{
    useUniFiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log(`Mongoodb is connected`)
}).catch(()=>{
    console.log(`Mongoodb is not connected`)
})