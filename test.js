var webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

new chrome.ServiceBuilder(chromedriver.path).build();

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


(async () =>{
    //ke halaman google
    await driver.get('https://google.com')

    //cari elemen yang search input google
    const searchInput = await driver.findElement(webdriver.By.name('q'))
    //isi inputan dengan tulisan 'syifa'
    await searchInput.sendKeys('kamu cantik')

    //cari tombol search pada laman google
    const buttons = await driver.findElements(webdriver.By.name('btnK'))
    const searchButton = buttons[1]

    // tekan button untuk cari
    await searchButton.click()

    //delay agar bisa lihat hasilnya
    await driver.sleep(2000)

    //tutup browser
    driver.quit()
})()