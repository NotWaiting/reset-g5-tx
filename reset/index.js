const id = process.argv[2];

const Transmitter = require('..');

const getMessages = () => [{
  date: new Date(),
  type: "ResetTx"
}];

const transmitter = new Transmitter(id, getMessages);

transmitter.on('glucose', glucose => {
  console.log("read glucose with Tx start date " + glucose.transmitterStartDate);
});

transmitter.on('disconnect', process.exit);
