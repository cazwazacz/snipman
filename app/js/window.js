const MyCodeMirror = require('./myCodeMirror');
const FilesPane = require('./filesPane');

class Window {
    constructor(document) {
        this.code = new MyCodeMirror(document);
        this.filesPane = new FilesPane(document);
        this.editorPane = document.getElementById('editor');
    }

    addFileToDiv(filename) {
        this.filesPane.addFileToDiv(filename);
    }

    getCode() {
        return this.code.getValue();
    }

    setCode(data) {
        this.code.setValue(data);
    }

    setEditorPaneFilename(filename) {
        this.editorPane.dataset.filename = filename;
    }

    getEditorPaneFilename() {
        return this.editorPane.dataset.filename;
    }
}

module.exports = Window;