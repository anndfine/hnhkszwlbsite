<!-- src/components/Layout/Footer.vue -->
<template>
  <footer id="关于" class="footer bg-dark text-white py-4">
    <div class="container">
      <div class="row g-4">
        <!-- 组织信息 -->
        <div class="col-lg-4 col-md-6">
          <div class="footer-about">
            <h5 class="fw-bold mb-3">
              海口市第四中学团委学生会<br>网络管理部
            </h5>
            <div class="footer-contact">
              <p class="text-muted">期待您的加入</p>
              <div class="mt-3">
                <span class="fw-semibold">QQ群:</span>
                <a id="进群链接" href="https://qm.qq.com/q/5gVlLLYjtC" class="text-decoration-none ms-2"
                  target="_blank">
                  点击跳转加入群聊
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 页面信息 -->
        <div class="col-lg-4 col-md-6">
          <div class="tech-stats">
            <h6 class="fw-bold mb-3">页面构成</h6>
            <div class="progress mb-2" style="height: 20px;">
              <div class="progress-bar" role="progressbar" style="width: 81.3%;" aria-valuenow="81.3"
                aria-valuemin="0" aria-valuemax="100">
                HTML 81.3%
              </div>
            </div>
            <div class="progress mb-2" style="height: 20px;">
              <div class="progress-bar bg-success" role="progressbar" style="width: 9.9%;"
                aria-valuenow="10.4" aria-valuemin="0" aria-valuemax="100">
                JavaScript 9.9%
              </div>
            </div>
            <div class="progress" style="height: 20px;">
              <div class="progress-bar bg-info" role="progressbar" style="width: 8.8%;"
                aria-valuenow="8.8" aria-valuemin="0" aria-valuemax="100">
                CSS 8.8%
              </div>
            </div>
          </div>
        </div>

        <!-- 版权信息 -->
        <div class="col-lg-4">
          <div class="copyright text-lg-end">
            <div class="mb-3">
              <span>Copyright</span>
              <strong class="px-1">海口市第四中学网络部</strong>
              <span>All Rights Reserved</span>
            </div>
            <div class="mb-3">
              <a href="https://github.com/anndfine/hnhkszwlbsite" class="text-decoration-none"
                target="_blank">
                <i class="bi bi-github"></i>
                在Github上编辑此页
              </a>
            </div>
            <div class="text-secondary small">
              <div>为保护隐私，成员信息仅展示社交平台昵称；部分往届成员信息因时间久远暂缺。数据统计截至2025年10月。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// 页脚逻辑可以在这里添加
</script>