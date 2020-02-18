exports.config = {
    path: '/wd/hub',
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './features/*.feature'
    ],
    // Patterns to exclude.

    // ============
    // Capabilities
    // ============

    maxInstances: 10,

    capabilities: [{

        maxInstances: 5,

        browserName: 'chrome',

    }],

    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
 
    baseUrl: 'https://the-internet.herokuapp.com/',

    waitforTimeout: 10000,

    connectionRetryTimeout: 30000,

    connectionRetryCount: 1,

    services: ['chromedriver'],

    framework: 'cucumber',

    specFileRetries: 1,

    reporters: ['spec'],
    cucumberOpts: {
        require: ['./steps/*.js'], 
        format: ['pretty'], 
        timeout: 60000,     // <number> timeout for step definitions
    },

    before: function() {
        const chai = require('chai')
        global.expect = chai.expect
        chai.Should()
    }
    
}
