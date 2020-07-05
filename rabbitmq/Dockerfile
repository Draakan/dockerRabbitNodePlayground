FROM rabbitmq:3.8.5

RUN rabbitmq-plugins enable rabbitmq_web_stomp \
&& rabbitmq-plugins enable rabbitmq_stomp \
&& rabbitmq-plugins enable rabbitmq_mqtt \
&& rabbitmq-plugins enable rabbitmq_shovel rabbitmq_shovel_management

EXPOSE 5672
EXPOSE 15672
EXPOSE 15674
EXPOSE 61613
EXPOSE 25672
EXPOSE 4369
EXPOSE 9100
EXPOSE 9101
EXPOSE 9102
EXPOSE 9103
EXPOSE 9104
EXPOSE 9105
