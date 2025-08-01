// 页面加载完成后执行
window.addEventListener('load', function () {
    async function autosetimg(element) {
        // 获取预览图 URL
        const imagepreviewsrc = element.getAttribute('preview-image-src');
        // 获取真实图 URL
        const realSrc = element.getAttribute('resourcesrc');
        let url;
        if (imagepreviewsrc) {
            url = imagepreviewsrc;
        } else if (realSrc) {
            url = realSrc;
        }
        // 调用 setimg 函数设置图片
        setimg(element, url);
        if (imagepreviewsrc && realSrc) {
            element.title = `点击查看原图`;
            element.onclick = () => {
                setimg(element, realSrc);
            };
        }
    }

    const setimg = async (element, url) => {
        const alt = element.alt;
        element.src = '';
        element.alt = '加载中...';
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`状态码异常:${response.status}`);
            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);
            element.src = objectUrl;
            element.alt = alt;
            element.onload = () => URL.revokeObjectURL(objectUrl);
            return true;
        } catch (e) {
            element.alt = '点击重载';
            console.warn('图片加载失败', e);
            element.onclick = () => {
                setimg(element, url);
            };
            return false;
        }
    };

    // 获取所有带有 resourcesrc 属性的 img 标签
    const images = document.querySelectorAll('img[resourcesrc]');
    images.forEach(function (img) {
        autosetimg(img);
    });
});

// 页面加载完成后执行

window.addEventListener('load', function () {
    // 获取所有带有 resourcesrc 属性的 img 标签
    const starelements = document.querySelectorAll('star[data-star-amount]');
    starelements.forEach(function (element) {
        const amount = element.getAttribute('data-star-amount');
        element.innerHTML = '';
        element.style.color = "#ffc107";
        for (let i = 0; i < amount; i++) {
            const star = document.createElement('i');
            star.classList.add('bi', 'bi-star-fill');
            star.innerHTML = "&nbsp;";
            element.appendChild(star);
        }
    });
});

window.addEventListener('load', function () {

    const servicecards = document.getElementById('service-range-cards-container');

    // 定义服务范围数据
    const serviceRanges = [
        { title: '班级活动排练', content: '在经过班主任（或相关负责人）与主管领导申请后，在小礼堂进行活动排练，使用舞台，更接近真实演出时的场景' },
        { title: '年级会议', content: '场地承办军训开幕式、表彰大会、年级会议、文化教育、级部学生会会议 等' },
        { title: '校级活动', content: '曾承办校庆、全体教职工会议、各级会议/学习等' },
        { title: '外来活动', content: '他校/组织的各类典礼、晚会、节日庆典等；曾承办武警海口支队的文艺汇演等' },
        { title: '更多活动', content: '随机出现的各类活动等你来迎接' },
        // 可按需添加更多服务范围
    ];


    // 遍历服务范围数据并创建元素
    serviceRanges.forEach(service => {
        const card = document.createElement('div');
        card.classList.add('col-lg-4', 'col-md-6', 'mt-1', 'mb-1','d-flex');

        card.innerHTML = `
                <div class="card card-body h-100 w-100 p-4">
                    <h4>${service.title}</h4>
                         <hr class="col-3 text-warning" style="border-top-width: 4px;opacity: 0.6;">
                        <div>${service.content}</div>
                </div>
            `;
        servicecards.appendChild(card);
    })
});

window.addEventListener('load', function () {
    var container = this.document.querySelectorAll('[data-tag="our-benefits-container"]')[0];
    const content_element_group = container.querySelector('[data-tag="our-benefits-content"]');
    const content_element = content_element_group.querySelectorAll('pre[data-tag="our-benefits-content-json"]');
    content_element.forEach(one_element => {
        var content_html = one_element.innerHTML;
        content_html = content_html.replace(/'/g, '"');
        const content_json = JSON.parse(content_html);
        var element = this.document.createElement("div");
        const _content = content_json
        element.innerHTML = `
        <div class="icon-box d-flex position-relative">
            <div>
                <h5><strong class="h5_5">${_content.title}</strong></h5>
                <p>${_content.description}</p>
            </div>
        </div>
        `;
        container.appendChild(element);
    });
    return;
});

import hall_of_fame_app from "/assets/js/hall_of_fame.js";
hall_of_fame_app.test();
hall_of_fame_app.main();


// P(亲代):      <AaBb>    ×     <AaBb>
//               ↓           ↓
// 配子类型: AB Ab aB ab    AB Ab aB ab

// F1:
//          |  AB  |  Ab  |  aB  |  ab
// -------------------------------------
//   AB    |AABB  |AABb  |AaBB  |AaBb
//   Ab    |AABb  |AAbb  |AaBb  |Aabb
//   aB    |AaBB  |AaBb  |aaBB  |aaBb
//   ab    |AaBb  |Aabb  |aaBb  |aabb

// 基因型及比例:
// AABB : AABb : AAbb : AaBB : AaBb : Aabb : aaBB : aaBb : aabb = 1 : 2 : 1 : 2 : 4 : 2 : 1 : 2 : 1

// 表现型及比例（A、B 为显性）:
// A_B_ : A_bb : aaB_ : aabb = 9 : 3 : 3 : 1