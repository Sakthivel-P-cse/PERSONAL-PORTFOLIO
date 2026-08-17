const { test, expect } = require('@playwright/test');

test.describe('Aikhan Portfolio Recovery Verification', () => {
  test('Homepage has correct elements and layout', async ({ page }) => {
    await page.goto('/');
    
    // Check main title
    await expect(page.locator('text=> khan/')).toBeVisible();
    
    // Check navigation links
    const navLinks = page.locator('nav.site-nav a');
    await expect(navLinks).toHaveCount(2);
    await expect(navLinks.nth(0)).toHaveText('links');
    await expect(navLinks.nth(1)).toHaveText('cv');
    
    // Check goals section
    await expect(page.locator('text=my goals')).toBeVisible();
    
    // Test hover on ROT13 text
    const rot13Element = page.locator('text=v jnag gb yrnea').first();
    await expect(rot13Element).toBeVisible();
    
    // Contact section
    await expect(page.locator('text=status')).toBeVisible();
    await expect(page.locator('text=located')).toBeVisible();
    await expect(page.locator('text=contact')).toBeVisible();
  });

  test('CV page renders correctly', async ({ page }) => {
    await page.goto('/cv');
    
    // Check terminal header
    await expect(page.locator('text=man 1 khan')).toBeVisible();
    
    // Check sections
    await expect(page.locator('text=001 NAME')).toBeVisible();
    await expect(page.locator('text=002 DESCRIPTION')).toBeVisible();
    await expect(page.locator('text=003 EDUCATION')).toBeVisible();
    await expect(page.locator('text=004 EXPERIENCE')).toBeVisible();
    await expect(page.locator('text=005 RESEARCH PUBLICATIONS')).toBeVisible();
    await expect(page.locator('text=006 HONORS & AWARDS')).toBeVisible();
    
    // Verify specific content
    await expect(page.locator('text=princeton university')).toBeVisible();
    await expect(page.locator('text=nozomio')).toBeVisible();
  });

  test('Links page renders correctly', async ({ page }) => {
    await page.goto('/links');
    
    // Check terminal header
    await expect(page.locator('text=ssh khan@now')).toBeVisible();
    
    // Check resources
    await expect(page.locator('text=ls ~/links/resources')).toBeVisible();
    await expect(page.locator('text=my tech stack')).toBeVisible();
    await expect(page.locator('text=how to build a startup in 2026')).toBeVisible();
    
    // Check social links
    await expect(page.locator('text=cat ~/.connect')).toBeVisible();
    await expect(page.locator('text=tiktok')).toBeVisible();
    await expect(page.locator('text=github')).toBeVisible();
  });
});
