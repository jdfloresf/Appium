import { driver, $, expect } from '@wdio/globals'

describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
        .click();

        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    })

    it('Add a note, save changes and verify note', async () =>{
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        // Add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
        .addValue('Fav Anime List');
        
        // Add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
        .addValue('Oregairu\nRevue Starlight');

        // save changes
        await driver.back();
        await driver.back();

        // assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'))
        .toBeDisplayed();
        
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
        .toHaveText('Oregairu\nRevue Starlight');
    })

    it('Delete a note and check the note in trashcan', async () => {
        await $('~More').click();
        await $('//*[@text="Delete"]').click();
        await $('//*[@resource-id="android:id/button1"]').click();
        
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
        
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
        .click();
        await $('//*[@text="Trash Can"]').click();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'))
        .toHaveText('Fav Anime List');
    })
})