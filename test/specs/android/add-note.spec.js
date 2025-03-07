import addNoteScreen from '../../screenobjects/android/add-note-screen';
import tutorialScreen from '../../screenobjects/android/tutorial-screen';
import { expect } from '@wdio/globals';

describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await tutorialScreen.skipBtn.click();

        await expect(addNoteScreen.addNoteText).toBeDisplayed();
    })

    it('Add a note, save changes and verify note', async () =>{
        await addNoteScreen.addNoteText.click();
        await addNoteScreen.textOption.click();
        await expect(addNoteScreen.textEditing).toBeDisplayed();

        // Add note title
        await addNoteScreen.editTitle.addValue('Fav Anime List');
        
        // Add note body
        await 
        addNoteScreen.editNote.addValue('Oregairu\nRevue Starlight');

        // save changes
        await addNoteScreen.saveNote();
        
        // assertion
        await expect(addNoteScreen.editBtn).toBeDisplayed();
        
        await expect(addNoteScreen.viewNote)
        .toHaveText('Oregairu\nRevue Starlight');
    })
})