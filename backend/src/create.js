const fs = require('fs')
const path = require('path')
const { Gateway,Wallets } = require('fabric-network')

const walletPath = path.resolve(__dirname, '..','Org1Wallet');

const connectionProfilePath = path.resolve(__dirname, '..','connection.json');
const connectionProfile =JSON.parse(fs.readFileSync(connectionProfilePath, 'utf8'));


async function submitTransaction(id, name, institute, degree, certificate) {
    try {
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        const gateway = new Gateway();

        const connectionOptions = { wallet, identity: 'Org1 Admin', discovery:{ enabled: true, asLocalhost: true } };

        await gateway.connect(connectionProfile, connectionOptions);

        const network = await gateway.getNetwork('mychannel');
        // Get the contract from the network.
        const contract = network.getContract('smart-contracts');
        console.log(contract)
        // Submit the specified transaction.
        await contract.submitTransaction('createDocAsset', id, name, institute, degree, certificate);
        console.log('Transaction has been submitted');
        // Disconnect from the gateway.
        gateway.disconnect();
    } catch (error) {
        console.error('Failed to submit transaction:',error);
        process.exit(1);
    }
}

async function getTransactionData(value){
    let ret_value=""
    try {
        // Create a new file system based wallet for managing identities.
        const wallet =  await Wallets.newFileSystemWallet(walletPath);
        const gateway = new Gateway();


        const connectionOptions = { wallet, identity: 'Org1 Admin', discovery:{ enabled: true, asLocalhost: true } };
        await gateway.connect(connectionProfile, connectionOptions);

        const network =  await gateway.getNetwork('mychannel');
        const contract = network.getContract('smart-contracts');


        // Get the network (channel) our contract is deployed to.
        const result = await contract.evaluateTransaction('readDocAsset', value);
        //console.log(`Transaction has been evaluated, result is:${result.toString()}`);
        ret_value=result.toString()

        // Disconnect from the gateway.
        gateway.disconnect();
    } catch (error) {
        console.error('Failed to submit transaction:',error);
        process.exit(1);
    }
    return JSON.parse(ret_value)
}

//getTransactionData('102').then(x=>console.log(x))

async function searchAsset(value){
	ret_value=''
	try {
        // Create a new file system based wallet for managing identities.
        const wallet =  await Wallets.newFileSystemWallet(walletPath);
        const gateway = new Gateway();

        const connectionOptions = { wallet, identity: 'Org1 Admin', discovery:{ enabled: true, asLocalhost: true } };
        await gateway.connect(connectionProfile, connectionOptions);

        const network =  await gateway.getNetwork('mychannel');
        const contract = network.getContract('smart-contracts');


        // Get the network (channel) our contract is deployed to.
        const result = await contract.evaluateTransaction('docAssetExists',value);
        //console.log(`Transaction has been evaluated, result is:${result.toString()}`);
        ret_value=result.toString()

        // Disconnect from the gateway.
        gateway.disconnect();
    } catch (error) {
        console.error('Failed to submit transaction:',error);
        process.exit(1);
    }
    return ret_value
}

//searchAsset('102').then(x=>console.log(x))


async function updateAsset(id,new_value) {
	const wallet =  await Wallets.newFileSystemWallet(walletPath);
    const gateway = new Gateway();

    const connectionOptions = { wallet, identity: 'Org1 Admin', discovery:{ enabled: true, asLocalhost: true } };

    await gateway.connect(connectionProfile, connectionOptions);
    const network =  await gateway.getNetwork('mychannel');
    const contract = network.getContract('smart-contracts');


    getTransactionData(id).then( x=>{
        console.log(id)
        console.log(x.aadhar)
        console.log(typeof(x.pan))
        console.log(new_value)
        // submitTransaction(id,x.aadhar,x.pan,"rd1","rd2","rd3","rd4",new_value)

        // Submit the specified transaction.updateMyAsset
        //contract.submitTransaction('updateDocAsset', id,x.aadhar,x.pan,new_value);
        console.log("hey")
        //console.log('Transaction has been submitted');
    })
    // Disconnect from the gateway.
    gateway.disconnect();
}

async function searchParticularAsset() {
    const wallet = await Wallets.newFileSystemWallet(walletPath);
    const gateway = new Gateway();

    const connectionOptions = { wallet, identity: 'Org1 Admin', discovery:{ enabled: true, asLocalhost: true } };

    await gateway.connect(connectionProfile, connectionOptions);

    const network = await gateway.getNetwork('mychannel');
    // Get the contract from the network.
    const contract = network.getContract('smart-contract-js');
    console.log('\n--> Evaluate Transaction: QueryAssets, assets of size 15');
    str="all,rd"
    result = await contract.evaluateTransaction('QueryAssets', '{"selector":{"bank":"all,rd"}}');
    console.log("*** Result:",result.toString());
    gateway.disconnect();
}

module.exports = { submitTransaction ,getTransactionData ,searchAsset ,updateAsset }