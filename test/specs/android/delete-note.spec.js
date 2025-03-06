import deleteNoteScreen from './screenobjects/android/delete-note-screen';

describe('Add Notes', () => {
    it('Delete a note and check the note in trashcan', async () => {
        await deleteNoteScreen.skipTutorial();
        await deleteNoteScreen.addAndSaveNote(
            'Fav Anime List',
            'Oregairu\nRevue Starlight'
        );

        await deleteNoteScreen.moreBtn.click();
        await deleteNoteScreen.deleteOption.click();
        await deleteNoteScreen.okBtn.click();
        await deleteNoteScreen.naveBtn.click();
        await deleteNoteScreen.trashcanOption.click();
        await expect(deleteNoteScreen.noteTitle).toHaveText('Fav Anime List');
    })
})