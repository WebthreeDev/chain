const appConfig = {
    // app title
    name: "New Year Chain Explorer",
    // app description
    description:
        "New Year Chain Explorer allows you to explore and search the New Year Chain blockchain for transactions, addresses and blocks",
    // app keywords
    keywords: "icicb, explorer, search, blockchain, crypto, currency",
    // apollo client settings
    apollo: { 
        // list of providers. if one of them is unavailable, another is randomly picked
        providers: [
            {
                http: 'http://3.143.142.135/graphql', // http://127.0.0.1:16761/graphql    real: http://3.143.142.135/graphql
                // for subscriptions
                ws: '', 
            },
        ],
        // index into providers array of default provider or 'random' - takes index randomly
        defaultProviderIndex: "random"
    },
    useTestnet: false,
    // use 'hash' mode in vue router
    routerHashMode: false,
    // testnet config
    testnet: {
        // list of providers. if one of them is unavailable, another is randomly picked
        providers: [
            {
                http: 'http://13.58.153.103/graphql', // real http://13.58.153.103/graphql
                // for subscriptions
                ws: '',
            },
        ],
    },
    // progressive web application
    usePWA: true,
    // pwa settings
    pwa: {
        // name used in pwa manifest
        name: "New Year Chain Explorer"
    },
    // default options for production build
    build: {
        // output dir for production build
        outputDir: "dist"
    },
    // downtime threshold in seconds. downtime values less than this threshold will be displayed as 0
    downtimeThreshold: 10,
    explorer: {
        mainnet: 'http://explorer.icicbchain.org',
        testnet: 'http://testnet-rpc.icicbchain.org',
    }
    
};

if (appConfig.useTestnet) {
    appConfig.apollo.providers = appConfig.testnet.providers;
}

// scss variables prepended to every scss file
appConfig.scssData = `
    @import "src/assets/scss/vars";
`;

module.exports = appConfig;
