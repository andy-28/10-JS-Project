const input = document.querySelector("#input");

const handleChange = (event) => {
  input.classList.toggle("has-value", event.target.value);
};

// commemt can make code readable
// Welcome to 30DaysOfJavascript
/* 
    comment can make code readable, easy to reuse and informative
*/

let a = "String";
let b = true;
let c
let d = null;

console.log("Hello, World");

// 獲取按鈕元素和頁面寬高
const btn = document.getElementById('hover-btn');
const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;

// 綁定滑鼠移動事件監聽器
document.addEventListener('mousemove', (event) => {
  // 計算按鈕的新位置
  const x = event.clientX;
  const y = event.clientY;
  const btnX = x - btn.offsetWidth / 2;
  const btnY = y - btn.offsetHeight / 2;
  
  // 設置按鈕的新位置
  btn.style.left = btnX + 'px';
  btn.style.top = btnY + 'px';
});

// 綁定滑鼠進入事件監聽器
btn.addEventListener('mouseenter', () => {
  // 計算按鈕的隨機位置
  const randomX = Math.random() * pageWidth;
  const randomY = Math.random() * pageHeight;
  
  // 設置按鈕的位置
  btn.style.left = randomX + 'px';
  btn.style.top = randomY + 'px';
  
  // 顯示按鈕
  btn.style.display = 'block';
});

// 綁定滑鼠離開事件監聽器
btn.addEventListener('mouseleave', () => {
  // 隱藏按鈕
  btn.style.display = 'none';
});
