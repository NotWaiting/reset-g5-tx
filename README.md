# reset-g5-tx
Command line utility based on xdrip-js that resets an expired Dexcom g5 transmitter to restart the date/timer

Install
```
cd /root/src
git clone https://github.com/efidoman/reset-g5-tx.git
cd /root/src/reset-g5-tx
sudo npm install
```

To reset a Transmitter (replace "425BGT" with transmitter id to reset)
```
cd /root/src/reset-g5-tx
node reset 425BGT
```
