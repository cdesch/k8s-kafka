# k8s-kafka

k8s-kafka hello world app with nodejs kafkajs

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


    kubectl -n kafka port-forward kafka-0 9094
    kafka/bin/

    ./kafka-topics.sh --create \
    --zookeeper localhost:2181 \
    --replication-factor 2 \
    --partitions 3 \
    --topic unique-topic-name


    bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 3 --topic test

