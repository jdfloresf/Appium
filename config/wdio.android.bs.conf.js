import { config } from "./wdio.shared.conf.js";
import 'dotenv/config.js'

 // ====================
// BrowserStack Credentials
// ====================
config.user = process.env.BROWSERSTACK_USERNAME,
config.key = process.env.BROWSERSTACK_ACCESS_KEY

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
    'appium:platformVersion': '15.0',
    'appium:deviceName': 'Google Pixel 9',
    'appium:automationName': 'UiAutomator2',
    'appium:app': 'bs://87591c29b711403aa0d9af32a4e0af4a296fbbd0',
    'appium:autoGrantPermissions': true
}]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

export { config };