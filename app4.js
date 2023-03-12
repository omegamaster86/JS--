const task = prompt("タスク入力して下さい");
const tasks = [
  { content: "机を片付ける", genre: "掃除" },

  { content: "牛乳を買う", genre: "買い物" },

  { content: "散歩する", genre: "運動" },
];

for (let i = 0; i < tasks.length; i++) {
  console.log(`${i}:[内容]${tasks[i].content},[ジャンル]${tasks[i].genre}`);
}

function fn() {
  if (task !== null) {
    const genre = prompt("ジャンルを入力してください");
    const newTask = { content: task, genre: genre };
    tasks.push(newTask);
  }
}
fn();

if (task !== null) {
  alert("新しいタスクを追加しました。");
}

console.log(
  "=======================\n現在持っているタスク一覧\n======================="
);
for (let i = 0; i < tasks.length; i++) {
  console.log(`${i}:[内容]${tasks[i].content},[ジャンル]${tasks[i].genre}`);
}

if (task !== null) {
  alert("「確認、追加、削除、終了」の４つのいずれかを入力してください。");
}
