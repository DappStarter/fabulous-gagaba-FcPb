require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain umbrella guess arch obscure general'; 
let testAccounts = [
"0xe72a2fbe4457ff7cabfbf149075ed18dbcdfe190ade407fe25b7307e053dc653",
"0x7dca181945ff36d236f694f87c5d119c65dfafd2ca2f56d9f4497b6780cb633f",
"0x0049002f46dee48a3630a2c382d4109607f2becaccddd55a2af6dbc958490226",
"0x53d1194a0f97758f46e94ea76e7eb25fe37d5e3d04591efaa49e9b79860f2a84",
"0xd248a8a0a890b10b5f4527529543697c5be7b5de3cb5dc7d5d168c0960083d7b",
"0x83611bc432b7b5f69e2598e8cfcdcb2215788ef24b337cbf070f8694911b28b6",
"0x25140743e694784f5629973b5b3118c0e6377a088a4cefc3a1ca4dd60928aa7b",
"0x72eaf8e0ef298ca30850c2fdddabdf250df2fb2574871321f977bb2913db5642",
"0xc4613403e15b75c3719e388db9f080cdd9fb6d5225080110517f952884548230",
"0x718806ebfc7ca72bf442eb74a72e06714dd08e8b8b917b21af8ae2b4637df9e4"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

