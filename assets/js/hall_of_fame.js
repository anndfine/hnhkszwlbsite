function test() {
    return true;
}
function main() {
    document.addEventListener("DOMContentLoaded", function () {
        // 延迟加载图片
        function lazyLoadImages() {
            const lazyImages = document.querySelectorAll("img.lazyload");

            lazyImages.forEach(img => {
                // 替换data-src为src
                if (img.getAttribute("data-src")) {
                    img.setAttribute("src", img.getAttribute("data-src"));
                    img.removeAttribute("data-src");
                }
            });
        }

        // 页面加载后延迟500ms加载图片
        setTimeout(lazyLoadImages, 500);

        // 或者使用Intersection Observer实现懒加载
        if ('IntersectionObserver' in window) {
            const lazyImageObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        const lazyImage = entry.target;
                        if (lazyImage.getAttribute("data-src")) {
                            lazyImage.setAttribute("src", lazyImage.getAttribute("data-src"));
                            lazyImage.removeAttribute("data-src");
                            lazyImageObserver.unobserve(lazyImage);
                        }
                    }
                });
            });

            document.querySelectorAll("img.lazyload").forEach(function (lazyImage) {
                lazyImageObserver.observe(lazyImage);
            });
        }
    });
    return true;
}
// export functions
export default { test, main };
