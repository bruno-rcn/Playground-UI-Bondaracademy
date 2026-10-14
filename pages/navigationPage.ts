import {expect, Locator, Page} from '@playwright/test'
import { step } from '../helpers/testStepDecorator'

export class NavigationPage {

    private readonly page: Page
    // Header Page
    private readonly headerParentLocator: Locator
    // Left corner menu
    readonly menuItemsParentLocator: Locator
    readonly menuHamburguerToColapseOrExpended: Locator

    constructor(pageParam: Page){
        this.page = pageParam
        this.headerParentLocator = pageParam.locator('nb-layout-header')
        this.menuItemsParentLocator = pageParam.getByText('IoT Dashboard')
        this.menuHamburguerToColapseOrExpended = pageParam.locator('[icon="menu-2-outline"]')
    }

    /**
     * This method will be responsible to expanded the menu if it is colapse
     * and then, access the specific feature
     * Private because will be visible and used just by this file
     * @param nameGroupMenu - Text from menu feature 
     */
    @step
    private async selectGroupMenuItem(nameGroupMenu: string){
        const groupMenu = this.page.getByTitle(nameGroupMenu, {exact: true})
        const expandedState = await groupMenu.getAttribute('aria-expanded')
        if(expandedState == "false"){
            await groupMenu.click()
        }
    }

    @step
    async formSubMenuItem(subItem: string){
        await this.selectGroupMenuItem('Forms')
        await this.page.getByText(subItem).click()
    }

    @step
    async modalOverlaysSubMenuItem(subItem: string){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText(subItem).click()
    }

    @step
    async extraComponentsSubMenuItem(subItem: string){
        await this.selectGroupMenuItem('Extra Components')
        await this.page.getByText(subItem).click()
    }

    @step
    async chartsSubMenuItem(subItem: string){
        await this.selectGroupMenuItem('Charts')
        await this.page.getByText(subItem).click()
    }

    @step
    async tablesDataSubMenuItem(subItem: string){
        await this.selectGroupMenuItem('Tables & Data')
        await this.page.getByText(subItem).click()
    }

    @step
    async authSubMenuItem(subItem: string){
        await this.selectGroupMenuItem('Auth')
        await this.page.getByText(subItem).click()
    }

    /**
     * We can use this method to change the background color
     * GetByRole 'list' because the options are inside an ul tag
     * @param color 
     */
    @step
    async changeColorTheme(color: string){
        const colorButton = this.headerParentLocator.locator('.select-button')
        await colorButton.click()
        await this.page.getByRole('list').getByText(color).click()
    }

}