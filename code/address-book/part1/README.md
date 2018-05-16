we set up public variables in a solidity contract, compile that solidity contract with remix.ethereum.org's online solidity coding editor and then we run that smart contract on a local ethereum blockchain that runs on your computer via ganache.

0. start up ganache, by double clicking on it from your applications folder

1. go to remix.ethereum.org

2. copy and paste AddressBook.sol into the site

3. go to the run tab in the top right corner

4. in Environment, select Web3 Provider

5. Put in http://localhost:7545

6. Go to the Compile tab in the top right corner

7. compile it, select auto compile (we're still on the Compile tab)

8. click on details (we're still on the Compile tab)

9. scroll down to ABI, hit copy

10. in index.html, on the line where it says

var Web3ContractABI = web3.eth.contract(

in the (), delete everything that's there, and copy and paste what's on your clipboard.

11. Go back to the browser, go to the run tab (top right corner)

12. Click the Create button on the right middle of the page.

13. Copy the address (we're still on the Run tab)

14. in index.html, on the line where it says

var contract = Web3ContractABI.at('

delete what's in the quotes and paste in what's on your clipboard.

15. Open index.html in your browser and you should see a form with information loaded in it.

