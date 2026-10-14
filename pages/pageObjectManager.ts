import { Locator, Page } from '@playwright/test';
import { NavigationPage } from '../pages/navigationPage';
import { FormlLayoutsPage } from './formLayoutsPage';

// This approach simplifies the management of page objects by creating a single orchestrator that handles all instances of the page objects, rather than initializing them in each test
export class PageObjectManager {

    readonly arrowBackFromAuthSubMenus: Locator
    readonly navigationPage: NavigationPage
    readonly formlLayoutsPage: FormlLayoutsPage

    /**
     * Now, every time we call the PageManager we are initialyzing all the pages instances inside the constructor 
     * @param pageParam - Fixture Page from playwright
     */
    constructor(pageParam: Page){
        this.arrowBackFromAuthSubMenus = pageParam.locator('[icon="arrow-back"]')
        this.navigationPage = new NavigationPage(pageParam)
        this.formlLayoutsPage = new FormlLayoutsPage(pageParam)
    }

}