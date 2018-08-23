const MyCodeMirror = require('./myCodeMirror');
const FilesPane = require('./filesPane');

class Window {
    constructor(document) {
        this.code = new MyCodeMirror(document);
        this.filesPane = new FilesPane(document);
        this.editorPane = document.getElementById('editor');
    }

    filenames() {
        return this.filesPane.filenames();
    }

    newButton() {
        return this.filesPane.newButton();
    }

    addFileToDiv(filename) {
        this.filesPane.addFileToDiv(filename);
    }

    clearList() {
        this.filesPane.clearDiv();
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