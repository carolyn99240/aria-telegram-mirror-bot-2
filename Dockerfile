#Base Image
FROM ghcr.io/carolyn99240/aria-telegram-mirror-bot-2:master

WORKDIR /bot/

CMD ["bash", "start.sh"]
