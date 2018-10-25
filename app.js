var fs = require('fs');

// //challenge 1

fs.readFile("./challenge1/info.txt", "utf8" , (err, data)=> {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// let file =
// fs.readFileSync(".challenge1/info.txt", "utf8");
// console.log(file)

//challenge 2

let names = ['Harrison', 'Nick', 'Marcus']

fs.appendFile("./challenge2/info.txt", names, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

// //challenge 3

fs.rename('./challenge3/binfo.txt', './challenge3/info.txt', (data , err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('change complete');
    } 
});

//challenge 4

fs.mkdir('./challenge4/copyfolder', (err, data)=>{
    if (err) {
        console.log(err);
    } else {
        fs.copyFile('./challenge4/info.txt',
        './challenge4/copyfolder/info.txt',(err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('I did it');
                }
            }
        )
    }
});

// challenge 5

let data =
fs.readFileSync("./challenge5/info.txt", "utf8")
let newData = ''
for (let i = 0; i < data.length; i++){
    if (data[i] === '-'){
        newData += ' '
    } else {
        newData += data[i]
    }
}

fs.writeFileSync("./challenge5/info.txt", newData)

// challenge 6

fs.readdir("./challenge6/", (err, data)=>{
    if (err){
        console.log(err)
    } else {
        files = data;
        let txtFiles = [];
        for(let i = 0; i < files.length; i++){
            if (files[i].endsWith('.txt')) {
                txtFiles.push(files[i])
            }
        }
        console.log(txtFiles)
    }         
})