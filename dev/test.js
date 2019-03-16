const Blockchain = require('./blockchain');
bitcoin = new Blockchain();

// TTEST THE CHAIN IS VALID

const bc = {
    "chain": [
    {
    "index": 1,
    "timestamp": 1552127660635,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1552127760281,
    "transactions": [
    {
    "amount": 80,
    "sender": "adfjksdoeoeoep",
    "recipient": "alskekdwkwkkskx",
    "transactionId": "1564db30425711e9884c9f97f795c7c4"
    },
    {
    "amount": 90,
    "sender": "adfjksdoeoeoep",
    "recipient": "alskekdwkwkkskx",
    "transactionId": "1a07d660425711e9884c9f97f795c7c4"
    }
    ],
    "nonce": 10779,
    "hash": "000028d170a745724064ba7a5e2f861f612ce3c465b4955b8c62a144de255397",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1552127777828,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "e6161ba0425611e9884c9f97f795c7c4",
    "transactionId": "217e63f0425711e9884c9f97f795c7c4"
    },
    {
    "amount": 20,
    "sender": "adfjksdoeoeoep",
    "recipient": "alskekdwkwkkskx",
    "transactionId": "2935f220425711e9884c9f97f795c7c4"
    }
    ],
    "nonce": 17036,
    "hash": "00003858eca6208cff21cf22be2a9738f80836c198b26bfe38ae23abb0516b07",
    "previousBlockHash": "000028d170a745724064ba7a5e2f861f612ce3c465b4955b8c62a144de255397"
    },
    {
    "index": 4,
    "timestamp": 1552127801138,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "e6161ba0425611e9884c9f97f795c7c4",
    "transactionId": "2bf0cc60425711e9884c9f97f795c7c4"
    },
    {
    "amount": 30,
    "sender": "adfjksdoeoeoep",
    "recipient": "alskekdwkwkkskx",
    "transactionId": "34052090425711e9884c9f97f795c7c4"
    },
    {
    "amount": 50,
    "sender": "adfjksdoeoeoep",
    "recipient": "alskekdwkwkkskx",
    "transactionId": "372d1480425711e9884c9f97f795c7c4"
    }
    ],
    "nonce": 49920,
    "hash": "000001ce8df6d3829108bb36a673683dd086d9b785758191dd50fd56e485ab50",
    "previousBlockHash": "00003858eca6208cff21cf22be2a9738f80836c198b26bfe38ae23abb0516b07"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "e6161ba0425611e9884c9f97f795c7c4",
    "transactionId": "39d59f40425711e9884c9f97f795c7c4"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    };

    console.log(bitcoin.chainIsValid(bc.chain));


/* TEST GENESIS BLOCK

const bitcoin = new Blockchain();

console.log(bitcoin);
*/



//============================================
/* TEST proofOfWork METHOD
const bitcoin = new Blockchain();

const previousBlockHash = 'OINAISDFN09N09ASDNF90N90ASNDF';
const currentBlockData = [
    {
        amount: 101,
        sender: 'N90ANS90N90ANSDFN',
        recipient: '90NA90SNDF90ANSDF09N'
    },
    {
        amount: 30,
        sender: '09ANS09DFNA8SDNF',
        recipient: 'UIANSIUDFUIABSDUIFB'
    },
    {
        amount: 200,
        sender: '89ANS89DFN98ASNDF89',
        recipient: 'AUSDF89ANSD9FNASD'
    }
];

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
*/


//======================================================================

/* TEST CREATE HASH BLOCK METHOD
const bitcoin = new Blockchain();

const previousBlockHash = 'asdsakskkeekwwk';
const currentBlockData = [
    {
        amount: 100,
        sender: 'askdjfkskeeek',
        recipient: 'ksldlslslsle'
    },
    {
        amount: 200,
        sender: 'askdjfkskeeek',
        recipient: 'ksldlslslsle'
    },
    {
        amount: 300,
        sender: 'askdjfkskeeek',
        recipient: 'ksldlslslsle'
    }
];
const nonce = 28393993;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
*/

//===========================================================================

/*TEST CREATE NEW TRANSACTION METHOD
const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'sdlasdflah', 'askasdfka');

bitcoin.createNewTransaction(100, 'alexdfkdsaldf', 'jadesaasdfd');

bitcoin.createNewBlock(2400, 'sdlasdflah', 'askasdfka');

bitcoin.createNewTransaction(200, 'alexdfkdsaldf', 'jadesaasdfd');
bitcoin.createNewTransaction(300, 'alexdfkdsaldf', 'jadesaasdfd');
bitcoin.createNewTransaction(400, 'alexdfkdsaldf', 'jadesaasdfd');


bitcoin.createNewBlock(2401, 'sdlasdfdflah', 'askasdsdfka');

console.log(bitcoin);
console.log(bitcoin.chain[1]);
console.log(bitcoin.chain[2]);
*/

//=================================================================

/* TEST CREATE NEW BLOCK METHOD
const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'sdlasdflah', 'askasdfka');
bitcoin.createNewBlock(2430, 'shsdjeuu4kdj', 'asusiow87');
bitcoin.createNewBlock(3457, 'lsoskdjr', 'asiwueyrt');

console.log(bitcoin);
*/

//=================================================================

