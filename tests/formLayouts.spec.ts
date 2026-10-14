import {expect, test} from '@playwright/test'
import { PageObjectManager } from '../pages/pageObjectManager';
import { FormlLayoutsPage } from '../pages/formLayoutsPage';
import { faker } from '@faker-js/faker';

/**
 * Access the site and then get into the specific menu feature
 */
test.beforeEach(async ({page}) => {
    await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');
    const pom = new PageObjectManager(page)
    await pom.navigationPage.formSubMenuItem('Form Layouts')
})

test('Fill and submit the Inline form', async({page}) => {
    const pom = new PageObjectManager(page)

    const fullNameFaker = faker.person.fullName()
    const emailFaker = faker.internet.email()

    await pom.formlLayoutsPage.fillAndSubmitInlineForm(fullNameFaker, emailFaker)

    await expect(pom.formlLayoutsPage.inputNameIF).toHaveValue(fullNameFaker)
    await expect(pom.formlLayoutsPage.inputEmailIF).toHaveValue(emailFaker)
    await expect(pom.formlLayoutsPage.checkboxRememberMe).toBeChecked()
})

test('Fill and submit the Basic Form', async({page}) => {
    const pom = new PageObjectManager(page)

    const emailFaker = faker.internet.email()
    const passwordFaker = faker.internet.password()

    await pom.formlLayoutsPage.fillAndSubmitBasicForm(emailFaker, passwordFaker)

    await expect(pom.formlLayoutsPage.inputEmailBF).toHaveValue(emailFaker)
    await expect(pom.formlLayoutsPage.inputPasswordBF).toHaveValue(passwordFaker)
    await expect(pom.formlLayoutsPage.checkboxCheckMeOut).toBeChecked()
})
