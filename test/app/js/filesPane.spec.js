const expect = require('chai').expect;
const FilesPane = require('../../../app/js/filesPane');

describe('filesPane', () => {
    let filesPane, document, filesDiv;

    beforeEach(() => {
        filesDiv = { innerHTML: 'hello' }
        document = { getElementById: () => { return filesDiv } }

        filesPane = new FilesPane(document);
    })

    describe('#addFileToDiv', () => {
        it('adds the file div to the files div', () => {
            filesPane.addFileToDiv('some filename')
            expect(filesDiv.innerHTML).to.eq('hello<div class="filename">some filename</div>')
        })
    })
});
