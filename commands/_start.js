/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /start@YuamHelperBot
CMD*/

Bot.sendInlineKeyboard(
  [
    [
      {
        title: "BALANCE", command: "/balance""
      }
    ],
    [
      { title: "🟢 BUY TOKEN", command: "/buy" },
      { title: " 🔴 SELL TOKEN", command: "/buy" },
    [{ title: "HELP", command: "/help" }],
    [{ title: "CLOSE", command: "/close" }]
  ],
  "👋🏻 Hi [" +
    user.first_name +
    "](tg://user?id=" +
    user.telegramid +
    ")!\n\n[YUAM SNIPER](https://t.me/" +
    bot.name +
    ")Fast Trade Like a Pro"
)

Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })

