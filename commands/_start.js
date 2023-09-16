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
        title: "YUAM SNIPE",
        url: "https://t.me/" + bot.name + "?startgroup=start"
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
    ") is the most complete Bot to help you manage your groups easily and safely!\n\n👉🏻 Add me in a Supergroup and promote me as Admin to let me get in action!"
)

Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })

