const { getBlogPosts } = require("./data");

// src/index.js
const blogs = getBlogPosts();
console.log(blogs);
const ul = document.createElement("ul");
blogs.forEach((blog) =>{
    const li = document.createElement("li");
    li.innerText=blog;
    ul.appendChild(li);
});
// 检查document.body是否存在
if (document.body) {
    document.body.appendChild(ul); // 将 ul 添加到页面
} else {
    console.error("document.body不存在");
}