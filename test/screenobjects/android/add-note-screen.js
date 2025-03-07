import { driver, $ } from '@wdio/globals';

class AddNoteScreen {
    get addNoteText() {
        return $('//*[@text="Add note"]');
    }
    get textOption() {
        return $('//*[@text="Text"]');
    }
    get textEditing() {
        return $('//*[@text="Editing"]');
    }
    get editTitle() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }
    get editNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }
    get editBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }
    get viewNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    async saveNote() {
        await driver.back();
        await driver.back();
    }
}

export default new AddNoteScreen()