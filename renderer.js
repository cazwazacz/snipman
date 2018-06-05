// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const fs = require('fs');
const saveButton = document.getElementById('saveButton');

var myCodeMirror = CodeMirror(document.body, {
    value: "function myScript() {return 100;}\n",
    mode: "javascript",
    theme: "darcula"
  });

  
saveButton.addEventListener('click', () => {
    let codeBody = document.getElementsByClassName('cm-s-darcula')[0].innerText;
    
    fs.writeFile('hello.js', codeBody, (err) => {
        if(err) { return console.log("Could not save file!"); }

        console.log("File saved successfully!");
    })
})
