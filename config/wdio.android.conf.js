import { config } from "./wdio.shared.conf.js";
import path from 'path';

 // ====================
// Runner Configuration
// ====================
// WebdriverIO supports running e2e tests as well as unit and component tests.
config.runner = 'local'
config.port = 4723

// ==================
// Specify Test Files
// ==================
config.specs = [
    '../test/specs/android/*.js'
]

// ============
// Capabilities
// ============
config.capabilities = [{
    // capabilities for local Appium web tests on an Android Emulator
    platformName: 'Android',
    'appium:platformVersion': '11.0',
    'appium:deviceName': 'Pixel 4',
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
    'appium:autoGrantPermissions': true
}]

export { config };