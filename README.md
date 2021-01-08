# tesla_bitcoin_miner
This is the code for "Tesla Bitcoin Miner" this week's live machine learning game show hosted by Siraj Raval

## Overview
My Tesla can now mine bitcoin while on autopilot using this node.js app that i wrote. Every 24 hours, it reinvests its earnings into paying
for its own electricity usage and 2 emerging altcoins based on the results of a 24/7 reinforcement learning agent. This code works but can be improved since its not nearly as efficient as it could be (ASIC usage), i will do so during the livestream. The architecture is basically using an M1 mac Mini powered by the Tesla via the chargeport that runs a custom Bitcoin miner, and runs this node app. The node app pays for Tesla charging by sending money to a BitPay account that issues a Visa Card to buy things with BTC earnings. The Visa card is connected to my Tesla account, which automatically charges it for supercharging. It mines bitcoin while on autopilot and im dancing to trance music hands-free, that's the future i want to see. 

## Dependencies
- send-crypto
- tiny-timer
- reinforce-js
- coinbase

## Usage

Use any computer and a car charger to AC outlet converter so that it's powered by your car. Run Honeyminer on the computer. Download this node app. Install dependencies one by one using npm aka 'npm install send-crypto'. then run the app using 'npm run'. 

