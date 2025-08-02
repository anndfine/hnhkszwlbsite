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

import hall_of_fame_app from "/assets/js/hall_of_fame.js";
hall_of_fame_app.test();
hall_of_fame_app.main();


// 图片预览功能
document.addEventListener('DOMContentLoaded', function () {
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalImageTitle');
    const modalDescription = document.getElementById('modalImageDescription');
    const imgLoading = document.getElementById('imgLoading');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // 收集所有图片项
    const galleryItems = Array.from(document.querySelectorAll('.waterfall-item'));
    let currentIndex = 0;
    let currentItems = [];

    // 监听模态框显示事件
    imageModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;

        // 获取当前激活的筛选类别
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');

        // 根据筛选条件获取当前可见的图片项
        currentItems = galleryItems.filter(item => {
            if (activeFilter === '*') return true;
            return item.classList.contains(activeFilter.slice(1));
        });

        // 获取当前点击项的索引
        const currentCard = button.closest('.waterfall-item');
        currentIndex = currentItems.indexOf(currentCard);

        // 加载当前图片
        loadImage(button);
    });

    // 加载图片函数
    function loadImage(button) {
        // 获取数据属性
        const title = button.getAttribute('data-title');
        const description = button.getAttribute('data-description');
        const previewSrc = button.getAttribute('data-preview');
        const fullSrc = button.getAttribute('data-full');

        // 设置模态框内容
        modalTitle.textContent = title;
        modalDescription.textContent = description;

        // 显示加载状态
        imgLoading.style.display = 'flex';

        // 先加载预览图
        modalImage.src = previewSrc;
        modalImage.alt = title;

        // 加载原图
        const fullImage = new Image();
        fullImage.onload = function () {
            modalImage.src = fullSrc;
            imgLoading.style.display = 'none';
        };
        fullImage.onerror = function () {
            imgLoading.style.display = 'none';
            console.error('大图加载失败:', fullSrc);
        };
        fullImage.src = fullSrc;
    }

    // 上一张按钮
    prevBtn.addEventListener('click', function () {
        if (currentItems.length <= 1) return;

        currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
        const prevButton = currentItems[currentIndex].querySelector('.view-btn');
        loadImage(prevButton);
    });

    // 下一张按钮
    nextBtn.addEventListener('click', function () {
        if (currentItems.length <= 1) return;

        currentIndex = (currentIndex + 1) % currentItems.length;
        const nextButton = currentItems[currentIndex].querySelector('.view-btn');
        loadImage(nextButton);
    });

    // 键盘导航
    document.addEventListener('keydown', function (e) {
        if (!imageModal.classList.contains('show')) return;

        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        } else if (e.key === 'Escape') {
            bootstrap.Modal.getInstance(imageModal).hide();
        }
    });

    // 简单的筛选功能
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItemsAll = document.querySelectorAll('.waterfall-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // 移除所有按钮的active类
            filterBtns.forEach(b => b.classList.remove('active'));
            // 为当前按钮添加active类
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            galleryItemsAll.forEach(item => {
                if (filterValue === '*' || item.classList.contains(filterValue.slice(1))) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

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