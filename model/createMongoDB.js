const express = require("express");
const mongoose = require("mongoose");
const jsonFile = require("jsonfile");
const { json } = require("stream/consumers");
const {wordModel} = require("./Schema.js");

const app = express();
app.use(express.json());
const url = "mongodb://127.0.0.1:27017/dictionary";

const corpus = jsonFile.readFileSync("./corpus_v3.json");

for (let j = 0; j<35; j++) {
    for (var x in corpus[j]) {
        new wordModel({
            value: corpus[j][x],
        }).save();
    }
}

mongoose.connect(url, (err)=>{
    if (err) {
        console.log("err");
    }
})

// app.get("/words", async (req, res) => {
//     try {
//         const data = await wordModel.find({value: "абааы"});
//         res.status(200).json(data);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Something is wrong in server :(");
//     }
// });

app.listen(8080, ()=>{
    console.log("server is listening");
});