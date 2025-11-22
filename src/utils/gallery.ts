// src/utils/gallery.ts
export const initGallery = () => {
  console.log('初始化图片画廊...')
  const imageModal = document.getElementById('imageModal')
  const modalImage = document.getElementById('modalImage') as HTMLImageElement
  const modalTitle = document.getElementById('modalImageTitle')
  const modalDescription = document.getElementById('modalImageDescription')
  const imgLoading = document.getElementById('imgLoading')
  const prevBtn = document.querySelector('.prev-btn')
  const nextBtn = document.querySelector('.next-btn')

  if (!imageModal || !modalImage || !modalTitle || !modalDescription || !imgLoading) {
    return
  }

  // 检查是否已经初始化过
  if ((imageModal as any)._galleryInitialized) {
    return
  }
  (imageModal as any)._galleryInitialized = true

  // 收集所有图片项
  const galleryItems = Array.from(document.querySelectorAll('.waterfall-item'))
  let currentIndex = 0
  let currentItems: Element[] = []

  // 监听模态框显示事件
  imageModal.addEventListener('show.bs.modal', function (event) {
    const button = (event as any).relatedTarget as HTMLElement

    // 获取当前激活的筛选类别
    const activeFilterBtn = document.querySelector('.filter-btn.active') as HTMLElement
    const activeFilter = activeFilterBtn?.getAttribute('data-filter') || '*'

    // 根据筛选条件获取当前可见的图片项
    currentItems = galleryItems.filter((item) => {
      if (activeFilter === '*') return true
      return item.classList.contains(activeFilter.slice(1))
    })

    // 获取当前点击项的索引
    const currentCard = button.closest('.waterfall-item')
    if (currentCard) {
      currentIndex = currentItems.indexOf(currentCard)
    }

    // 加载当前图片
    loadImage(button)
  })

  // 加载图片函数
  function loadImage(button: HTMLElement) {
    const title = button.getAttribute('data-title')
    const description = button.getAttribute('data-description')
    const previewSrc = button.getAttribute('data-preview')
    const fullSrc = button.getAttribute('data-full')

    if (title && modalTitle) modalTitle.textContent = title
    if (description && modalDescription) modalDescription.textContent = description

    // 显示加载状态
    if (imgLoading) {
      imgLoading.style.display = 'flex'
      imgLoading.style.opacity = '1'
    }

    // 重置图片源
    modalImage.src = ''
    modalImage.onload = null
    modalImage.onerror = null

    // 如果当前图片已经是目标图片，直接显示
    if (modalImage.src === fullSrc || modalImage.src === previewSrc) {
      if (imgLoading) {
        imgLoading.style.display = 'none'
      }
      return
    }

    // 先加载预览图
    if (previewSrc) {
      modalImage.src = previewSrc
      modalImage.onload = function () {
        // 预览图加载成功后，开始加载原图
        loadFullImage(fullSrc)
      }
      modalImage.onerror = function () {
        // 如果预览图加载失败，直接加载原图
        loadFullImage(fullSrc)
      }
    } else {
      // 如果没有预览图，直接加载原图
      loadFullImage(fullSrc)
    }

    if (title) modalImage.alt = title
  }

  function loadFullImage(fullSrc: string | null) {
    if (!fullSrc) {
      // 如果没有原图，隐藏加载状态
      if (imgLoading) {
        imgLoading.style.display = 'none'
      }
      return
    }

    // 如果原图已经加载过，直接显示
    if (modalImage.src === fullSrc) {
      modalImage.style.opacity = '1'
      if (imgLoading) {
        imgLoading.style.display = 'none'
      }
      return
    }

    // 加载原图
    const fullImage = new Image()
    fullImage.onload = function () {
      // 在设置modalImage.src之前，先移除所有事件监听器
      modalImage.onload = null
      modalImage.onerror = null

      modalImage.src = fullSrc
      // 添加淡入效果
      modalImage.style.opacity = '0'
      setTimeout(() => {
        modalImage.style.transition = 'opacity 0.3s ease-in-out'
        modalImage.style.opacity = '1'
      }, 50)

      // 隐藏加载状态
      if (imgLoading) {
        imgLoading.style.transition = 'opacity 0.3s ease-in-out'
        imgLoading.style.opacity = '0'
        setTimeout(() => {
          imgLoading.style.display = 'none'
        }, 300)
      }
    }
    fullImage.onerror = function () {
      console.error('大图加载失败:', fullSrc)
      // 隐藏加载状态
      if (imgLoading) {
        imgLoading.style.transition = 'opacity 0.3s ease-in-out'
        imgLoading.style.opacity = '0'
        setTimeout(() => {
          imgLoading.style.display = 'none'
        }, 300)
      }
    }
    fullImage.src = fullSrc
  }

  // 上一张按钮
  prevBtn?.addEventListener('click', function () {
    if (!currentItems || currentItems.length <= 1) return

    currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length
    const currentItem = currentItems[currentIndex]
    if (!currentItem) return

    const prevButton = currentItem.querySelector('.view-btn') as HTMLElement
    if (prevButton) loadImage(prevButton)
  })

  // 下一张按钮
  nextBtn?.addEventListener('click', function () {
    if (!currentItems || currentItems.length <= 1) return

    currentIndex = (currentIndex + 1) % currentItems.length
    const currentItem = currentItems[currentIndex]
    if (!currentItem) return

    const nextButton = currentItem.querySelector('.view-btn') as HTMLElement
    if (nextButton) loadImage(nextButton)
  })

  // 键盘导航
  document.addEventListener('keydown', function (e) {
    if (!imageModal || !imageModal.classList.contains('show')) return

    if (e.key === 'ArrowLeft') {
      ; (prevBtn as HTMLElement)?.click()
    } else if (e.key === 'ArrowRight') {
      ; (nextBtn as HTMLElement)?.click()
    } else if (e.key === 'Escape') {
      const modalInstance = (window as any).bootstrap?.Modal?.getInstance(imageModal)
      modalInstance?.hide()
    }
  })

  // 简单的筛选功能
  const filterBtns = document.querySelectorAll('.filter-btn')
  const galleryItemsAll = document.querySelectorAll('.waterfall-item')

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', function (this: HTMLElement) {
      filterBtns.forEach((b) => b.classList.remove('active'))
      this.classList.add('active')

      const filterValue = this.getAttribute('data-filter') || '*'

      galleryItemsAll.forEach((item) => {
        if (filterValue === '*' || item.classList.contains(filterValue.slice(1))) {
          ; (item as HTMLElement).style.display = 'block'
        } else {
          ; (item as HTMLElement).style.display = 'none'
        }
      })
    })
  })
}
