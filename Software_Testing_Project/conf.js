exports.config = {

    capabilities: {
        'browserName': 'chrome'
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],


    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 100000
    }
};