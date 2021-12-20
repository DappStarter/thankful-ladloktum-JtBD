require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remember method good gloom suspect truly'; 
let testAccounts = [
"0x3ee3b61c6639b963e7d37f5133803a11ddcec72d5d46be95b55febe5e2676789",
"0xcf829a6acd68539eb60ff8cf91097ff77e57916999d766d11875379ec1f2b087",
"0xd2469f521f2f527c36711aef46f3e6cbf954fc6ca6e5bf373586f3974a609632",
"0x07ff6da3d04bb46b158227e38915dfc8bc4ec25d87222a2baad07f6b6feb7bf2",
"0x75157373f27da92cad5b4cdbba81e1b2807f7f21010f2dab02f356993e5b3466",
"0xb6d9725269513d4e6d58887f0bb59823b920d2b4ba0db50b8db703f63afe5259",
"0x47504cf1d1b2892a996d0d8bc61679b3c7987cf6e74a58c576c74a279aafe669",
"0x39d7e4110a35cf98c7453741ae7d6321c16663f32c03af775e6b3efb3f607ae7",
"0x11b8c1c7f4c0905a6eb07294933be0d723d5fcbee4830c56f162121070df1a60",
"0x592bd110875b9234b2bf99cd276f10adb4afe7a884fb3520b61a3fd25c583b1a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

