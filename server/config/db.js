let mongoose = require('mongoose')
const dbPath = 'mongodb+srv://user:preet123@cluster0.rnx9hye.mongodb.net/kizaTexttiles'
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(dbPath, options).then(res => {
    console.log("Db Connected")
}).catch(err => {
    console.log("Db Connect Err", err)
})
