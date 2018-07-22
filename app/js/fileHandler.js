const fs = require('fs');

class FileHandler {
    constructor(windowInstance) {
        this.windowInstance = windowInstance;
    }

    setUp(filenames) {
        this._getFiles();
        this._readFile('hello.js');
        this._addEditorPaneListeners();
        this._addFilesPaneListeners(filenames);
    }
    
    _saveCode(filename) {
        let codeBody = this.windowInstance.code.getValue();
        
        fs.writeFile(`files/${filename}`, codeBody, (err) => {
            if(err) { return console.log("Could not save file!"); }
            
            console.log("File saved successfully!");
        })
    }
    
    _getFiles() {
        fs.readdirSync(__dirname + '/../../files/').forEach(filename => {
            this.windowInstance.addFileToDiv(filename);
        })
    }
    
    _addFilesPaneListeners(buttons) {
        for(let i = 0; i <= buttons.length - 1; i++) {
            buttons[i].addEventListener('click', (e) => {
                for(let i = 0; i <= buttons.length - 1; i++) {
                    buttons[i].id = '';
                }
                
                e.target.id = 'selected-file';
                
                let filename = e.target.innerText;
                
                this._readFile(filename);
            })
        }
    }
    
    _readFile(filename) {
        fs.readFile(this._filePath(filename), 'utf-8', (err, data) => {
            if (err) {throw err};
    
            this.windowInstance.editorPane.dataset.filename = filename;
            this.windowInstance.code.setValue(data);
        })
    }

    _addEditorPaneListeners() {
        this.windowInstance.editorPane.addEventListener('keyup', (e) => {
            let filename = this.windowInstance.editorPane.dataset.filename;

            this._saveCode(filename);
        })
    }

    _filePath(filename) { return `files/${filename}`; };
}

module.exports = FileHandler;