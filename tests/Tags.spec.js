import{test,expect} from '@playwright/test';

test('test1@sanity', async ({ page }) => {
    console.log('this is test1')


})

test('test2@sanity', async ({ page }) => {
    console.log('this is test2')


})

test('test@regression', async ({ page }) => {
    console.log('this is test3')


})

test('test4@regression', async ({ page }) => {
    console.log('this is test4')    


})

test('test5@sanity@regression', async ({ page }) => {
    console.log('this is test5')


})