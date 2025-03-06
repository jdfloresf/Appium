import addNoteScreen from "./add-note-screen";

class DeleteNoteScreen {
    async skipTutorial() {
        await addNoteScreen.skipBtn.click();
    }

    async addAndSaveNote(heading, content) {
        await addNoteScreen.addNoteText.click();
        await addNoteScreen.textOption.click();

        // Add note title
        await addNoteScreen.editTitle.addValue(heading);
        
        // Add note body
        await 
        addNoteScreen.editNote.addValue(content);

        // save changes
        await addNoteScreen.saveNote();
    }

    get moreBtn() {
        return $('~More');
    }
    get deleteOption() {
        return $('//*[@text="Delete"]');
    }
    get okBtn() {
        return $('//*[@resource-id="android:id/button1"]');
    }
    get addNoteTxt() {
        $('//*[@text="Add note"]')
    }
    get naveBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }
    get trashcanOption() {
        return $('//*[@text="Trash Can"]');
    }
    get noteTitle() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }
}

export default new DeleteNoteScreen();