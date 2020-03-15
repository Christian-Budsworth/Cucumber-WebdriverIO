const { generate } = require('multiple-cucumber-html-reporter');
const { removeSync } = require('fs-extra');


exports.config = {
    path: '/wd/hub',
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './features/*.feature'
    ],
    // ============
    // Capabilities
    // ============

    maxInstances: 10,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['headless', 'disable-gpu'],
        },
    }],
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'error',
    bail: 0,

    baseUrl: 'https://the-internet.herokuapp.com/',

    waitforTimeout: 10000,

    connectionRetryTimeout: 30000,

    connectionRetryCount: 1,

    services: ['chromedriver'],

    framework: 'cucumber',

    specFileRetries: 1,

    reporters: ['spec', ['cucumberjs-json', {
        jsonFolder: 'reports/cucumber-results/json'
    }]],
    cucumberOpts: {
        require: ['./steps/*.js'],
        format: ['pretty'],
        timeout: 60000,
    },
    onPrepare: function () {
        removeSync('reports/cucumber-results')
    },

    before: function () {
        const chai = require('chai')
        global.expect = chai.expect
        chai.Should()
    },
    onComplete: function () {
        generate({
            jsonDir: 'reports/cucumber-results/json/',
            reportPath: 'reports/cucumber-results/',
            openReportInBrowser: true
        })
    }
}
