import { driver, expect, $ } from '@wdio/globals'

describe('Android Native Feature Test', () => {
    it('Access an Activity directy', async () => {
        // Access activity
        await driver.startActivity(
            "io.appium.android.apis",
            ".app.AlertDialogSamples");
        //Pause
        await driver.pause(3000);
        // Assertion
        await expect($('//*[@text="App/Alert Dialogs"]'))
        .toExist('App/Alert Dialogs');
    })
    
    it('Working with Dialogs boxes', async () => {
        // Access activity
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");
        // Click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]')
        .click();
        // dismiss Alert
        // await driver.acceptAlert();
        
        // dismiss Alert
        // await driver.dismissAlert();
        
        // click on OK button
        await $('//*[@resource-id="android:id/button1"]').click();

        // assertion - alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]'))
        .not.toExist();
    })

    it('Vertical scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        // scroll to the end (not stable if element gets moved)
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)'); 
        
        // scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click(); 
        
        // await $('~Secure Surfaces').click();

        // Assertion
        await expect($('~Secure Dialog')).toExist();
    })

    it('Horizontal Scrolling', async () => {
        await driver.startActivity(
            "io.appium.android.apis", 
            ".view.Gallery1");

        // Horizaontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

        await driver.pause(3000);
    })
    
    it('Changing date', async () => {
        await driver.startActivity(
            "io.appium.android.apis", 
            ".view.DateWidgets1");

        const date = await($('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]'));
        const currentDate = await date.getText();
        
        // click on change the date
        await $('~change the date').click();
        
        // Horizaontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        
        // Change date
        await $('~10 April 2025').click()
        
        // Click on OK button
        await $('//*[@resource-id="android:id/button1"]').click();
        
        await expect(await date.getText()).not.toEqual(currentDate);
    })
});