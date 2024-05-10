// 封装屏幕分割函数
function splitScreen() {
    const containerDiv = document.getElementById("container");
    const clockDiv = document.getElementById("clock");
    const weatherDiv = document.getElementById("weather");
    const animal = document.getElementById("animal");

    document.body.appendChild(containerDiv);
    document.body.appendChild(clockDiv);
    document.body.appendChild(weatherDiv); // 将 weatherDiv 添加到 containerDiv 中
    document.body.appendChild(animal); // 将 weatherDiv 添加到 containerDiv 中

    function adjustLayout() {
        if (window.innerWidth < window.innerHeight) {
            //竖屏模式
            containerDiv.style.width = "100%";
            containerDiv.style.height = "50vh"; // 使用视口高度的一半

            clockDiv.style.width = "100%";
            clockDiv.style.height = "50vh"; // 使用视口高度的一半

            weatherDiv.style.width = "100%";
            weatherDiv.style.height = "50vh"; // 使用视口高度的一半

            animal.style.width = "100%";
            animal.style.height = "50vh"; // 使用视口高度的一半

        } else {
            //横屏模式
            containerDiv.style.width = "50%";
            containerDiv.style.height = "50vh"; // 使用视口高度，铺满整个页面高度
            containerDiv.style.float = "left";

            clockDiv.style.width = "50%";
            clockDiv.style.height = "50vh"; // 使用视口高度，铺满整个页面高度
            clockDiv.style.float = "left";

            weatherDiv.style.width = "50%";
            weatherDiv.style.height = "50vh"; // 使用视口高度的一半
            weatherDiv.style.float = "left";

            animal.style.width = "50%";
            animal.style.height = "50vh"; // 使用视口高度的一半
            animal.style.float = "left";

        }
    }

    adjustLayout();

    window.addEventListener("resize", adjustLayout);
}

// 导出函数
module.exports = splitScreen;
