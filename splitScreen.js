// 封装屏幕分割函数
function splitScreen() {
  const leftDiv = document.getElementById("container");
  const rightDiv = document.getElementById("clock");

    leftDiv.style.width = "50%";
    leftDiv.style.height = "100vh"; // 使用视口高度，铺满整个页面高度
    leftDiv.style.float = "left";
    leftDiv.style.backgroundColor = "lightblue";

    rightDiv.style.width = "50%";
    rightDiv.style.height = "100vh"; // 使用视口高度，铺满整个页面高度
    rightDiv.style.float = "left";
    rightDiv.style.backgroundColor = "lightgreen";

    document.body.appendChild(leftDiv);
    document.body.appendChild(rightDiv);

    function adjustLayout() {
        if (window.innerWidth < 600) {
            leftDiv.style.width = "100%";
            leftDiv.style.height = "50vh"; // 使用视口高度的一半
            rightDiv.style.width = "100%";
            rightDiv.style.height = "50vh"; // 使用视口高度的一半
        } else {
            leftDiv.style.width = "50%";
            leftDiv.style.height = "100vh"; // 使用视口高度，铺满整个页面高度
            rightDiv.style.width = "50%";
            rightDiv.style.height = "100vh"; // 使用视口高度，铺满整个页面高度
        }
    }

    adjustLayout();

    window.addEventListener("resize", adjustLayout);
}

// 导出函数
module.exports = splitScreen;