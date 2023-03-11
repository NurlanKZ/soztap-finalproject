const fs = require("fs");
const jsonFile = require("jsonfile");
const { json } = require("stream/consumers");

const text = fs.readFileSync("./content/corpus.txt", "utf-8");
const lowered = text.toLowerCase();
const arr = lowered.split("\n");
const alphabet = [
    'а','ә','б','в','г','ғ','д',
    'е','ж','з','и','й','к','қ',
    'л','м','н','о','ө','п','р',
    'с','т','у','ұ','ү','ф','х',
    'ц','ш','ы','і','э','ю','я'
];

const letterFreq = [
    50968,  2591, 10428,   848,  4513,
    4796, 12820, 23281,  5499,  6752,
    8948,  6992, 12789, 18289, 23177,
    11056, 16688, 10411,  2858,  5791,
    21887, 15560, 26815, 18724,  4164,
    3635,  1301,   804,   710, 10514,
    26604, 14954,   552,   772,  2181
];

// const startInd = [
//     0,6215,7273,13852,14017,14671,14779,
//     16694,17866,21482,21840,22327,22333,
//     25979,31427,31851,34353,35009,35908,
//     36526,37429,38631,41151,46424,46675,
//     47249,47884,48370,48620,48694,48712,
//     51786,52273,52609,53041,53055,53079
// ];

// const corpus = [];

// const slarr = arr.slice(41851,45380);
// console.log(slarr[slarr.length-1]);

// slarr.forEach((el)=>{
//     let index = el.length;
//     let res = 0;

//     res= el.search(' ');
//     if (res>0)
//         index=Math.min(index,res);
//     res= el.search(',');
//     if (res>0)
//         index=Math.min(index,res);
//     res= el.search(':');
//     if (res>0)
//         index=Math.min(index,res);

//     el=el.substring(0,index);

//     // now filter out һ - ( .
//     if (el.startsWith("("))
//         el="";

//     if (el.startsWith("."))
//         el="";
    
//     if (el.search("һ")>0)
//         el="";
    
//     if (el.search("ъ")>0)
//         el="";
        
        
//     if (el.search("-")>-1)
//         el="";

//     if (el.length>1)
//         corpus.push(el);
// });

// jsonFile.writeFileSync("./corpus_c.json",corpus);

// const recorp = [];
// let last = 0;

// for (let j=0; j<alphabet.length; j++) {
//     const part = [];
//     for (let i=startInd[j]; i<startInd[j+1]; i++) {
//         if (corpus[i].startsWith(alphabet[j])&&(i===0||corpus[i]!==corpus[i-1])) {
//             part.push(corpus[i]);
//         }
//     }
//     recorp.push(part);
// }

// jsonFile.writeFileSync("./corpus_v3.json",recorp);

// const t1 = Date.now();
// const corpus = jsonFile.readFileSync("./maincorpus.json");
// const target = "яки";
// let isWord = false;
// for (var x in corpus) {
//     if (corpus[x]===target) {
//         isWord = true;
//         break;
//     }
// }
// const t2 = Date.now();

// console.log(isWord + " in " + (t2-t1)/1000 + " seconds");

// const t1 = Date.now();
// const corpusv2 = jsonFile.readFileSync("./corpus_v2.json");
// const target = "ююю";
// const index = alphabet.indexOf(target[0]);
// let isWord = false;
// for (var x in corpusv2[index]) {
//     if (corpusv2[index][x]===target) {
//         isWord = true;
//         break;
//     }
// }

// const t2 = Date.now();

// console.log(isWord + " in " + (t2-t1)/1000 + " seconds");

// const corpusv2 = jsonFile.readFileSync("./corpus_v3.json");

// for (let f = 0; f<alphabet.length; f++) {
//     let count = 0;
//     for (let j = 0; j<alphabet.length; j++) {
//         for (var x in corpusv2[j]) {
//             for (let l=0; l<corpusv2[j][x].length; l++) {
//                 if (corpusv2[j][x][l]===alphabet[f]) {
//                     count++;
//                 }
//             }
            
//         }
//     }
//     letterFreq[f]=count;
// }

// console.log(letterFreq);

// let total = 0;
// for (let i=0; i<letterFreq.length; i++) {
//     total+=letterFreq[i];
// }

// console.log(total);

const fraction = [];
let total = 388672;
for (let i =0; i<letterFreq.length; i++) {
    let data = [];
    data.push(i);
    data.push((letterFreq[i]/total*100).toFixed(2)*14);
    fraction[i]=data;
}

fraction.sort((a,b)=>(a[1]-b[1]));

let what = 0;
for (let i =0; i<letterFreq.length; i++) {
    console.log(alphabet[fraction[i][0]] + ": " + fraction[i][1]);
    what+=fraction[i][1];
}

console.log(what);