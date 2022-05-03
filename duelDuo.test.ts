import { Builder, Capabilities } from "selenium-webdriver"
const {checkTitle, addDuo, removeDuo} = require("../testFunctions/duelDuoTests")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await (await driver).get('http://localhost:3000/')
})

afterAll(async () => {
   await (await driver).quit()
})


describe("Duel Duo tests", () => {
    test('Title shows up when page loads', async () => {
     await checkTitle(driver);
     await driver.sleep(2000);
    })
    test('Div with id player-duo appears when bot is added', async () => {
     await addDuo(driver);
     await driver.sleep(2000);
    })
    test('Div with id player-duo disappears when bot is removed', async () => {
     await removeDuo(driver);
     await driver.sleep(2000);
    })

})