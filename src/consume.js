const { Kafka } = require("kafkajs")

// the client ID lets kafka know who's producing the messages
const clientId = "my-client"
// we can define the list of brokers in the cluster
const brokers = ["localhost:9094"]
// this is the topic to which we want to write messages
const topic = "mytopic"

// initialize a new kafka client and initialize a producer from it
const kafka = new Kafka({ clientId, brokers, connectionTimeout: 3000})
const consumer = kafka.consumer({ groupId: clientId })

const consume = async () => {
    console.log("consume");
	// first, we wait for the client to connect and subscribe to the given topic
	await consumer.connect()
	await consumer.subscribe({ topic })
	await consumer.run({
		// this function is called every time the consumer gets a new message
		eachMessage: ({  topic, partition, message, timestamp }) => {
			// here, we just log the message to the standard output
			// console.log(`received message: ${message.value}`)
			console.log({
				key: message.key.toString(),
				value: message.value.toString(),
				headers: message.headers,
				timestamp: message.timestamp,
			})
		},
	})
}

module.exports = consume