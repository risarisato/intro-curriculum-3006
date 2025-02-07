// 厳格モードは詳細エラーとか警告文を出す
'use strict';
// module.exportsは別ファイルからrobotが呼び出す
module.exports = robot => {
    // 正規表現でhelloと発言したら「i」は小文字大文字関係なく
  robot.hear(/hello>/i, msg => {
      // ユーザIDを取る
    const username = msg.message.user.name;
    // helloと発言があったら、ユーザID、helloを返す
    msg.send('Hello, ' + username);
  });
robot.hear(/おみくじ/i, msg => {
  const username = msg.message.user.name;
  const lots = ['大好き','好き','1人でいい','かまってちゃん','メンヘラちゃん'];
  const lot = lots[Math.floor(Math.random() * lots.length)];
  const ideas = ['アウトプットが大切','インプットばっかり','Qiitaドハマり','slack（・∀・）ﾆﾔﾆﾔ','時間大切に']
  const idea = ideas[Math.floor(Math.random() * ideas.length)];
  msg.send(`<@${username}>さんの今のご機嫌は、${lot}です。pcは${idea}ですね。`)
});
};