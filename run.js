const fs = require('fs');


fs.readFile('./output.js', "utf8", (err,data) => {
    if(err) 
        throw err;
    const content = data;
    run(content);
    
});

function run(content) {
    eval(content);
}