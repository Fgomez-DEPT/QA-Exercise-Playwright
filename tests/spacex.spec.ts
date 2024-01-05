import test, { chromium, expect } from 'playwright/test';
import { Page } from 'playwright'

test.describe('SpaceX App', () => {
 let browser;
 let page: Page;

 test.beforeAll(async () => {
    browser = await chromium.launch();
 });

 test.afterAll(async () => {
    await browser.close();
 });

 test.beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('https://csb-x6dpt1.netlify.app/');
 });

 test.afterEach(async () => {
    await page.close();
 });

 test('should load the rocket list', async () => {
    // Your implementation here
 });

 test('should search for "crs" and navigate to page 2', async () => {
    // Your implementation here
 });

 test('should mark CRS-13 as a favorite', async () => {
    // Your implementation here
 });

 test('should check that CRS-13 is present in the Favorites tab', async () => {
    // Your implementation here
 });

 test('should check that CRS-13 is still a favorite after refreshing the page', async () => {
    // Your implementation here
 });
});