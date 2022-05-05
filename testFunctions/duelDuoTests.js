const { By } = require("selenium-webdriver")

const checkTitle = async (driver) => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBeTruthy()
}

const addDuo = async (driver) => {
    await driver.findElement(By.id("draw")).click();
    await driver.sleep(2000)
    await driver.findElement(By.css(".bot-btn")).click();
    await driver.sleep(2000)
    const duoDiv = await driver.findElement(By.id("player-duo"))
    expect(duoDiv.isDisplayed()).toBeTruthy()
}
const removeDuo = async (driver) => {
    await driver.findElement(By.id("draw")).click();
    await driver.sleep(2000)
    await driver.findElement(By.css(".bot-btn")).click();
    await driver.sleep(2000)
    const duoDiv = await driver.findElement(By.id("player-duo"))
    expect(duoDiv.hasChildren).toBeFalsy()
}

module.exports = {
    checkTitle,
    addDuo,
    removeDuo
}