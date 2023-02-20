
const newTask1 = prompt("タスク入力して下さい");
//const newTask2 = prompt("ジャンルを入力してください");//こいつが原因
const tasks = [
{content:'0 :[内容]机を片付ける',
genre:'[ジャンル] 掃除'},

{content:'1 :[内容]牛乳を買う',
genre:'[ジャンル]買い物'},

{content:'2 :[内容]散歩する',
genre:'[ジャンル]運動'},
]

console.log("=======================\n現在持っているタスク一覧\n=======================");
for (const todo of tasks) {
console.log(todo.content+','+todo.genre);
}

function fn () {
if (newTask1 !== null) {
    const newTask2 = prompt("ジャンルを入力してください");
    const newTask = {content:'3 :[内容]'+ newTask1,genre:'[ジャンル]' + newTask2}

    tasks.push(newTask);
}}
fn();


if (newTask1 !== null) {
alert("新しいタスクを追加しました。");
} 

console.log("=======================\n現在持っているタスク一覧\n=======================");
for (const todo of tasks) {
console.log(todo.content+','+todo.genre);
}

if (newTask1 !== null) {
alert("「確認、追加、削除、終了」の４つのいずれかを入力してください。");
}