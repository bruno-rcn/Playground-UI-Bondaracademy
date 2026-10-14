import { expect, Locator, Page } from "@playwright/test"
import { step } from "../helpers/testStepDecorator"

export class FormlLayoutsPage {

    private readonly page: Page
    private readonly inlineFormParentLocator: Locator
    readonly inputNameIF: Locator
    readonly inputEmailIF: Locator
    readonly checkboxRememberMe: Locator
    readonly submitButtonIF: Locator
    private readonly basicFormParentLocator: Locator
    readonly inputEmailBF: Locator
    readonly inputPasswordBF: Locator
    readonly checkboxCheckMeOut: Locator
    readonly submitButtonBF: Locator

    constructor(pageParam: Page){
        this.page = pageParam
        this.inlineFormParentLocator = pageParam.locator('.inline-form-card')
        this.inputNameIF = this.inlineFormParentLocator.getByPlaceholder('Jane Doe')
        this.inputEmailIF = this.inlineFormParentLocator.getByPlaceholder('Email')
        this.checkboxRememberMe = this.inlineFormParentLocator.getByRole('checkbox', {name: 'Remember me'})
        this.submitButtonIF = this.inlineFormParentLocator.getByRole('button', {name: 'Submit'})
        this.basicFormParentLocator = pageParam.locator('nb-card', {hasText: 'Basic form'})
        this.inputEmailBF = this.basicFormParentLocator.getByRole('textbox', {name: 'Email'})
        this.inputPasswordBF = this.basicFormParentLocator.getByRole('textbox', {name: 'Password'})
        this.checkboxCheckMeOut = this.basicFormParentLocator.getByRole('checkbox', {name: 'Check me out'})
        this.submitButtonBF = this.basicFormParentLocator.getByRole('button', {name: 'Submit'})
    }

    @step
    async fillAndSubmitInlineForm(name: string, email: string){
        await this.inputNameIF.fill(name)
        await this.inputEmailIF.fill(email)
        await this.checkboxRememberMe.check({force: true})
        await this.submitButtonIF.click()
    }

    async fillAndSubmitBasicForm(email: string, password: string){
        await this.inputEmailBF.fill(email)
        await this.inputPasswordBF.fill(password)
        await this.checkboxCheckMeOut.check({force: true})
        await this.submitButtonBF.click()
    }

}