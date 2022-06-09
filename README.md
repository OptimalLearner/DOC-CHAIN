# DOC-CHAIN

Verification of academic documents and certificates is long and tedious process. During interview process or admission process, verifying all records of candidates takes time. So, blockchain based cryptographic solution comes to the rescue. *DOC-CHAIN* provides a platform to upload and store documents on Blockchain and verify the same easily and efficiently. 

IPFS is being used for storing academic documents and certificates in a decentralized manner. Each document stored in IPFS will be recognized by a unique hash value. IPFS maintains a Distributed Hash Table (DHTs) for mapping the hash with the documents. The documents are stored on IPFS as storing whole documents on blockchain results in access latency. It means it takes too much time for the users to upload and download document files. There are thousands of nodes in fully decentralized blockchains. This results in increase in latency. 

Companies or other universities/institutes can upload the documents submitted by the students. The document is then passed to the OCR module where the Unique ID on the student’s certificate is extracted along with the institute name which is passed on to the chaincode. The chaincode will fetch the encrypted hash of the document already present in the blockchain using the extracted information received. The encrypted hash is then passed to the decryption module where the encrypted hash is decrypted using AES 256-bit Decryption CBC Mode and then passed to the hash comparator module. The hash comparator module will compare the received decrypted hash and hash of the document recently uploaded in the system and if these match then the verification status returned to the company or other university is SUCCESS, else it results in a FALURE and the certificate is forged.

*Tech Stack Used:* ReactJS, NodeJS, ExpressJS, MongoDB, Hyperledger Fabric, IPFS  
*Hyperledger Fabric Platform:* VSCode IBM Blockchain Platform Extension  
*Chaincode (Smart Contracts) Written Using:* JavaScript
