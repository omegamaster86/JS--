const tasks = ['0 : 掃除','1 : 買い物','2 : 散歩'];

console.log("=======================\n現在持っているタスク一覧\n=======================");
for (const todo of tasks) {
    console.log(todo);
}

const newTask = prompt("タスク入力して下さい");
tasks.push('3 : ' + newTask);

if (newTask !== null) {
    alert("新しいタスクを追加しました。");
} 

console.log("=======================\n現在持っているタスク一覧\n=======================");
for (let todo of tasks) {
    console.log(todo);
}

if (newTask !== null) {
    alert("「確認、追加、削除、終了」の４つのいずれかを入力してください。")
}
