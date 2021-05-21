https://github.com/Yolean/kubernetes-kafka


docker run -it --network=host edenhill/kafkacat:1.6.0 -b YOUR_BROKER -L

kubectl create namespace kafka && \
kubectl apply -k github.com/Yolean/kubernetes-kafka/variants/dev-small/?ref=v6.0.3

kubectl -n kafka port-forward kafka-0 9094
kafkacat -b localhost:9094 -L

 kafkacat -b localhost:9094 -L

https://www.sohamkamani.com/nodejs/working-with-kafka/
https://github.com/edenhill/kafkacat
 https://www.magalix.com/blog/kafka-on-kubernetes-and-deploying-best-practice

 https://betterprogramming.pub/how-to-run-highly-available-kafka-on-kubernetes-a1824db8a3e2