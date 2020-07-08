import HomePage from "../../Pages/HomePage";
import RegistrationPage from '../../Pages/RegistrationPage'
describe('Registration on USPS site', () => {

    it('should have the right title', () => {
        HomePage.open();

        //expect(browser.getTitle()).toEqual('Welcome | USPS')
        browser.pause(5000)
        console.log("++++++++++++++++++++", browser.getUrl())
    })

    //  it('should have the right title', () => {
    //     browser.url('https://www.usps.com');
    //     const actualTitle = browser.getTitle();
    //     const expectedTitle = 'Welcome | USPS';
    //     expect(actualTitle).toEqual(expectedTitle);
    // });

})