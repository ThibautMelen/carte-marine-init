#!/usr/bin/env node

/**
 * Script pour générer le guide PDF complet
 * Utilise Puppeteer pour convertir le HTML en PDF
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDFGuide() {
    console.log('🚀 Génération du guide PDF...');
    
    try {
        // Lancer Puppeteer
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        // Chemin vers le fichier HTML
        const htmlPath = path.join(__dirname, '../public/downloads/guide-complet-cartes-marines.html');
        const htmlUrl = `file://${htmlPath}`;
        
        console.log('📄 Chargement du fichier HTML...');
        await page.goto(htmlUrl, { waitUntil: 'networkidle0' });
        
        // Attendre que le contenu soit chargé
        await page.waitForTimeout(2000);
        
        // Générer le PDF
        console.log('📑 Génération du PDF...');
        const pdfPath = path.join(__dirname, '../public/downloads/guide-complet-cartes-marines.pdf');
        
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '20mm',
                right: '15mm',
                bottom: '20mm',
                left: '15mm'
            },
            displayHeaderFooter: true,
            headerTemplate: `
                <div style="font-size: 10px; text-align: center; width: 100%; color: #2C5F7F;">
                    Guide Complet des Cartes Marines
                </div>
            `,
            footerTemplate: `
                <div style="font-size: 10px; text-align: center; width: 100%; color: #6B7C8C;">
                    Page <span class="pageNumber"></span> sur <span class="totalPages"></span>
                </div>
            `
        });
        
        await browser.close();
        
        // Vérifier que le fichier a été créé
        if (fs.existsSync(pdfPath)) {
            const stats = fs.statSync(pdfPath);
            console.log(`✅ Guide PDF généré avec succès !`);
            console.log(`📁 Fichier: ${pdfPath}`);
            console.log(`📊 Taille: ${(stats.size / 1024).toFixed(2)} KB`);
        } else {
            throw new Error('Le fichier PDF n\'a pas été créé');
        }
        
    } catch (error) {
        console.error('❌ Erreur lors de la génération du PDF:', error.message);
        process.exit(1);
    }
}

// Exécuter le script
if (require.main === module) {
    generatePDFGuide();
}

module.exports = { generatePDFGuide };
