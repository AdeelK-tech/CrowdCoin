import Web3 from 'web3';
let web3;
//checking if we are running code on the browser or the server because of nextJS and if metamask is installed or not
if(typeof window!=='undefined' && typeof window.ethereum!=='undefined'){
    // we are in the browser and metamask is running
    web3=new Web3(window.ethereum);
}
else{
    // we are not in the browser *OR* the user is not running metamask
    // setting up our own provider
    let provider=new Web3.providers.HttpProvider(
        'https://eth-rinkeby.alchemyapi.io/v2/2coySLyXNPRkzGdPOJdJ_JA4XeLZvw3z'
    )
    web3=new Web3(provider);
}
export default web3