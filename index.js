const TelegramBot = require("node-telegram-bot-api");

const token = "6092793681:AAGuTdwlrUJGMU_L5hsB_MV-RFrH5yN_0Xc";
const CronJob = require('cron').CronJob;
const bot = new TelegramBot(token, { polling: true });

const start = () =>{
  bot.on("message", async (msg) => {
    const chatId = msg.chat.id;

    if(text === "/start"){
      await bot.sendMessage(chatId, "Hello there")
    }
    const job = new CronJob('0 */10 * * * *', function() {
      return bot.sendMessage(chatId, "Test text ");
    });
    job.start();

  });
}

start()