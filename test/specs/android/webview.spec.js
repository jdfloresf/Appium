import tutorialScreen from '../../screenobjects/android/tutorial-screen';
import { driver, expect, $ } from '@wdio/globals';

describe('Add Notes', () => {
    before(async () => {
        await tutorialScreen.skipBtn.click();
    })

    it('Access external link and verify content in the browser', async () =>{
        // click on the nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
        .click();

        // click on the fb link
        await $('//*[@text="Like us on Facebook"]').click();

        await driver.pause(2000);

        // get current context
        // await driver.getContext()
        
        // get all the contexts
        await driver.getContexts()
        
        // switch to webview chrome context
        await driver.switchContext('WEBVIEW_chrome');

        // assert the cover image
        const coverImg = $('.x5yr21d.x4l50q0');
        await expect(coverImg).toBeDisplayed();
    })
})