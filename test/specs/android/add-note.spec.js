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
})