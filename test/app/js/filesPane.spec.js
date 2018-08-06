const expect = require('chai').expect;
const FilesPane = require('../../../app/js/filesPane');

describe('filesPane', () => {
    let filesPane, document, filesDiv, unorderedList;

    beforeEach(() => {
        unorderedList = { innerHTML: '<li class="filename">first item</li>' }
        filesDiv = { appendChild: () => {}, querySelector: () => { return unorderedList } }
        document = { getElementById: () => { return filesDiv }, createElement: () => {} }

        filesPane = new FilesPane(document);
    })

    describe('#addFileToDiv', () => {
        it('adds the file div to the files div', () => {
            filesPane.addFileToDiv('second filename')
            expect(unorderedList.innerHTML).to.eq('<li class="filename">first item</li><li class="filename">second filename</li>')
        })
    })
});
