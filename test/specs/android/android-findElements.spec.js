import { $ } from '@wdio/globals';

describe('Android Elements Test', () => {
    it('Find element by accessibility id', async () => {
        // find element by accessibility id
        const appOption = await $('~App');

        // click element
        await appOption.click();
        // assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })

    it('Find element by class name', async () => {
        // find element by class name
        const className = await $('android.widget.TextView');
        // assertion
        await expect(className).toHaveText("API Demos");
    })

    it('Find element by xpath', async () => {
        // find element by xpath - //tagname[@attribute=value]
        await $('//android.widget.TextView[@content-desc="App"]').click();


        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]')
        .click();
        // Find by resource id
        await $('//android.widget.Button[@resource-id=\
        // "io.appium.android.apis:id/select_button"]').click();
    
        // Find by resource text
        await $('//android.widget.TextView[@text="Command two"]').click();

        // assertion
        const dialog = await $('//android.widget.TextView[@resource-id=\
        // "android:id/message"]')
        await expect(dialog).toHaveText('You selected: 1 , Command two');
    })

    it('Find element by UIAutomator', async () => {
        // find element by contains
        await $('android=new UiSelector().text("Content")').click();
        await $('android=new UiSelector().textContains("Packages")').click();
    })

    it('Find mitiple elements', async () => {
        const expectedList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content',
            'Graphics', 'Media',
            'NFC', 'OS',
            'Preference', 'Text',
            'Views'
        ]
        const actualList = []
        // find multiple elements
        const textList = await $$('android.widget.TextView');

        // loop through them
        for (const element of textList) {
            actualList.push(await element.getText());
        }
        // assert list
        await expect(actualList).toEqual(expectedList);
    })

    it.only('Text field', async () => {
        await $('~Views').click();
        await $('~Auto Complete').click();
        await $('~1. Screen Top').click();
        
        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await textField.setValue('Mexico');

        // Verify the country name
        await expect(textField).toHaveText('Mexico');
    })
});