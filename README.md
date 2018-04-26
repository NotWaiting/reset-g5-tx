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
DEBUG=smp,transmitter,bluetooth-manager node reset 425BGT
```

Wait at least 5 minutes since control messages only go to the transmitter on 5 minute intervals. Once you get the following Tx/Rx messages, it should have worked and you can <Ctrl> C to stop the process. 

```
  bluetooth-manager Tx 428668 +20ms
  bluetooth-manager Rx 438374f9 +23ms
got message [object Object]
```

