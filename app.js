'use strict';

const http = require('http');
const CryptoAccount = require("send-crypto");
const Timer = require('tiny-timer')
const timer = new Timer({ interval: 1000, stopwatch: false })



const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  train_agent()
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


function train_agent() {
	//set timer
	//timer.on('tick', (ms) => console.log('tick', ms))
	//timer.start(500000000000000) // run for 500000000000000 seconds
	//collect data
	//data_stream()
	//train agent
// TypeScript
import { DQNSolver, DQNOpt, DQNEnv } from 'reinforce-js';

// JavaScript
// const DQNSolver = require('reinforce-js').DQNSolver;
// const DQNEnv = require('reinforce-js').DQNEnv;
// const DQNOpt = require('reinforce-js').DQNOpt;

const width = 400;
const height = 400;
const numberOfStates = 20;
const numberOfActions = 4;
const env = new DQNEnv(width, height, numberOfStates, numberOfActions);

const opt = new DQNOpt();
opt.setTrainingMode(true);
opt.setNumberOfHiddenUnits([100]);  // mind the array here, currently only one layer supported! Preparation for DNN in progress...
opt.setEpsilonDecay(1.0, 0.1, 1e6);
opt.setEpsilon(0.05);
opt.setGamma(0.9);
opt.setAlpha(0.005);
opt.setLossClipping(true);
opt.setLossClamp(1.0);
opt.setRewardClipping(true);
opt.setRewardClamp(1.0);
opt.setExperienceSize(1e6);
opt.setReplayInterval(5);
opt.setReplaySteps(5);

/*
Outfit solver with environment complexity and specs.
After configuration it's ready to train its untrained Q-Network and learn from SARSA experiences.
*/
const dqnSolver = new DQNSolver(env, opt);

/*
Determine a state, e.g.:
*/
const state = [ /* Array with numerical values and length of 20 as configured via numberOfStates */ ];

/*
Now inject state and receive the preferred action as index from 0 to 3 as configured via numberOfActions.
*/
const action = dqnSolver.decide(state);

/*
Now calculate some Reward and let the Solver learn from it, e.g.:
*/
const reward = 0.9;

dqnSolver.learn(reward);
//if time = 24 hours
//	invest()
//BTC_To_Visa()
//record_earnings()


}

function data_stream() {

ticker.ticker('kraken', 'ltc_usd').then((ticker) => {
    console.log(ticker);
}).catch((err) => {
    console.error(err);
});
ticker.ticker('kraken', 'eth_usd').then((ticker) => {
    console.log(ticker);
}).catch((err) => {
    console.error(err);
});

}

function invest(best_altcoin) {


	altcoin = best_altcoin;
var Client = require('coinbase').Client;

var client = new Client({'apiKey': 'API KEY',
                         'apiSecret': 'API SECRET'});

client.getAccount('test', function(err, account) {
  account.buy({"amount": "10",
               "currency": best_altcoin,
               "payment_method": "test"}, function(err, tx) {
    console.log(tx);
  });
});
}

function record_earnings() {

}

//My Tesla can now mine bitcoin while on autopilot. Every 24 hours, it reinvests its earnings into paying
//for its own electricity usage and 3 emerging altcoins based on the results of a 24/7 reinforcement learning agent. 
//Javascript Code + Demo tomorrow during the livestream!


function BTC_To_Visa() {
//Load Account From Private Key (Same as HoneyWallet)
const privateKey = process.env.PRIVATE_KEY || CryptoAccount.newPrivateKey();
const account = new CryptoAccount(privateKey);

(async() => {
  
//Confirm our Address
console.log(await account.address("BTC"));
// > "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"

//Confirm our balance
console.log(account.getBalance("BTC"));
// > 0.01


//Send 0.1 BTC to BitPay account
const txHash = account
    .send("test", 0.01, "BTC")
    .on("transactionHash", console.log)
    // > "test"
    .on("confirmation", console.log);
// > 1
// > 2 ...

})()

}
