function test() {
    console.log("名人堂动态部分脚本已加载");
}
function main() {
    const parentcontainer = document.querySelectorAll('[data-tag="hall-of-fame-carousel"]')[0];
    const info_container = parentcontainer.querySelectorAll('[data-tag="hall-of-fame-info"]');
    parentcontainer.innerHTML = '';
    for (let i = 0; i < info_container.length; i++) {
        const one_info = info_container[i];
        
        var content_html = one_info.innerHTML;
        content_html = content_html.replace(/'/g, '"');
        const information = JSON.parse(content_html);
        var element = document.createElement("div");
        if (i == 0) {
            element.classList.add("active");
        }
        element.classList.add("carousel-item");
        element.innerHTML = `
        <!-- 使用 row 类创建行布局 -->
        <div class="row align-items-center">
            <!-- 头像部分，占 3 列 -->
            <div class="col-3 text-center">
                <img resourcesrc="${information.avatar}" class="testimonial-img"
                    alt="">
            </div>
            <!-- 描述部分，占 9 列 -->
            <div class="col-9">
                <h3><strong>${information.name}</strong></h3>
                <star data-star-amount="${information.star}"></star>
                <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <span>${information.description}</span>
                    <i class="bi bi-quote quote-icon-right"></i>
                </p>
            </div>
        </div>
            `;
        parentcontainer.appendChild(element);
    }
}
// export functions
export default { test, main };
