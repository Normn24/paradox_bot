const TelegramBot = require("node-telegram-bot-api");
const CronJob = require('./node_modules/cron/lib/cron').CronJob;

const token = "6092793681:AAGuTdwlrUJGMU_L5hsB_MV-RFrH5yN_0Xc";

const bot = new TelegramBot(token, { polling: true });

const start = () => {
  bot.on("message", async (msg) => {
    const chatId = msg.chat.id;

    if (msg.text === "/start") {
      await bot.sendMessage(chatId, "Hello there")
    }


    const job = new CronJob('00 24 21 5 * *', function() {
      return bot.sendMessage(chatId, "Test text ");
    });
    
    job.start();
    
  });
}

start()