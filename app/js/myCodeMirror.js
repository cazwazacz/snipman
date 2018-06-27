class MyCodeMirror {
    constructor(document) {
        this.codeMirrorInstance = CodeMirror(document.getElementById('editor'), {
            mode: "javascript",
            theme: "monokai"
        });;
    }

    getValue() {
        return this.codeMirrorInstance.getValue();
    }

    setValue(data) {
        this.codeMirrorInstance.setValue(data);
    }
}

module.exports = MyCodeMirror;