const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {wordModel} = require("./model/Schema.js");
const fs = require("fs");

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.static("./views"));
const url = "mongodb://127.0.0.1:27017/dictionary";

mongoose.connect(url, (err)=>{
    if (err) {
        console.log("err");
    }
});

app.get("/audio/aqan_seri.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/aqan_seri.mp3").size
    })
    fs.createReadStream("./library/aqan_seri.mp3").pipe(res);
});
app.get("/audio/al-farabi.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/al-farabi.mp3").size
    })
    fs.createReadStream("./library/al-farabi.mp3").pipe(res);
});
app.get("/audio/balasagun.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/balasagun.mp3").size
    })
    fs.createReadStream("./library/balasagun.mp3").pipe(res);
});
app.get("/audio/qashqari.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/qashqari.mp3").size
    })
    fs.createReadStream("./library/qashqari.mp3").pipe(res);
});
app.get("/audio/qorqyt_ata.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/qorqyt_ata.mp3").size
    })
    fs.createReadStream("./library/qorqyt_ata.mp3").pipe(res);
});
app.get("/audio/yassawi.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/yassawi.mp3").size
    })
    fs.createReadStream("./library/yassawi.mp3").pipe(res);
});
app.get("/audio/aiteke_bi.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/aiteke_bi.mp3").size
    })
    fs.createReadStream("./library/aiteke_bi.mp3").pipe(res);
});
app.get("/audio/aqtamberdy.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/aqtamberdy.mp3").size
    })
    fs.createReadStream("./library/aqtamberdy.mp3").pipe(res);
});
app.get("/audio/asan_qaighy.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/asan_qaighy.mp3").size
    })
    fs.createReadStream("./library/asan_qaighy.mp3").pipe(res);
});
app.get("/audio/buqar_zhyrau.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/buqar_zhyrau.mp3").size
    })
    fs.createReadStream("./library/buqar_zhyrau.mp3").pipe(res);
});
app.get("/audio/dulat_babatayuly.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/dulat_babatayuly.mp3").size
    })
    fs.createReadStream("./library/dulat_babatayuly.mp3").pipe(res);
});
app.get("/audio/jugineki.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/jugineki.mp3").size
    })
    fs.createReadStream("./library/jugineki.mp3").pipe(res);
});
app.get("/audio/naqyl_soz.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/naqyl_soz.mp3").size
    })
    fs.createReadStream("./library/naqyl_soz.mp3").pipe(res);
});
app.get("/audio/qutyp.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/qutyp.mp3").size
    })
    fs.createReadStream("./library/qutyp.mp3").pipe(res);
});
app.get("/audio/saraii.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/saraii.mp3").size
    })
    fs.createReadStream("./library/saraii.mp3").pipe(res);
});
app.get("/audio/shal_qulekeuly.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/shal_qulekeuly.mp3").size
    })
    fs.createReadStream("./library/shal_qulekeuly.mp3").pipe(res);
});
app.get("/audio/syrym_datuly.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/syrym_datuly.mp3").size
    })
    fs.createReadStream("./library/syrym_datuly.mp3").pipe(res);
});
app.get("/audio/tole_bi.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/tole_bi.mp3").size
    })
    fs.createReadStream("./library/tole_bi.mp3").pipe(res);
});
app.get("/audio/umbetei.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/umbetei.mp3").size
    })
    fs.createReadStream("./library/umbetei.mp3").pipe(res);
});
app.get("/audio/zhanaq.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/zhanaq.mp3").size
    })
    fs.createReadStream("./library/zhanaq.mp3").pipe(res);
});
app.get("/audio/zhirenshe.mp3", (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fs.statSync("./library/zhirenshe.mp3").size
    })
    fs.createReadStream("./library/zhirenshe.mp3").pipe(res);
});

app.post("/check", async (req,res)=>{
    const target = req.body.word;
    const data = await wordModel.find({value: target});
    if (data.length>0)
        res.send(true);
    else res.send(false);
});

app.post("/useraddword", async (req,res)=>{
    const newWord = req.body.word;
    const data = await wordModel.find({value: newWord});
    if (data.length>0)
        res.send(false);
    else {
        new wordModel({
            value: newWord,
        }).save();
        res.send(true);
    };
});

app.post("/userdeleteword", async (req,res)=>{
    const target = req.body.word;
    const data = await wordModel.find({value: target});
    if (data.length>0) {
        await wordModel.deleteOne({value: target});
        res.send(true);
    } else {
        res.send(false);
    };
});

const alphabet = [
    'а','ә','б','в','г','ғ','д',
    'е','ё','ж','з','и','й','к',
    'қ','л','м','н','ң','о','ө',
    'п','р','с','т','у','ұ','ү',
    'ф','х','һ','ц','ч','ш','щ',
    'ъ','ы','і','ь','э','ю','я'
];

function canConstruct(target, maga) {
    const letters = new Array(42).fill(0);
    const arr = target.split("");
    for (i in arr) {
        const index = maga.indexOf(arr[i], letters[alphabet.indexOf(arr[i])]);
        if (index<0) {
            return false;
        }
        letters[alphabet.indexOf(arr[i])]=index+1;
    }

    return true;
}

app.post("/possible", async (req,res)=>{
    const maga = req.body.magazine;
    const data = await wordModel.find();
    const output = [];
    for (let i=0; i<data.length; i++) {
        if (canConstruct(data[i].value,maga)&&
        output.indexOf(data[i].value.substring(0,data[i].value.length-1))<0)
            output.push(data[i].value);
    }
    output.sort((a,b)=>b.length-a.length);
    res.send(output.slice(0,10));
});

app.post("/possible8", async (req,res)=>{
    const maga = req.body.magazine;
    const special = maga[7];
    const data = await wordModel.find();
    const output = [];
    for (let i=0; i<data.length; i++) {
        if (data[i].value.indexOf(special)>=0&&
        canConstruct(data[i].value,maga)&&
        output.indexOf(data[i].value.substring(0,data[i].value.length-1))<0)
            output.push(data[i].value);
    }
    output.sort((a,b)=>b.length-a.length);
    res.send(output.slice(0,10));
});

app.listen(8000,()=>{
    console.log("app is listening");
});