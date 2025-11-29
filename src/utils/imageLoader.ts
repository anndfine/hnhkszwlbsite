// src/utils/imageLoader.ts
// src/utils/imageLoader.ts
export const initImageLoader = () => {
  console.log('初始化图片加载器...')
  console.log('initImageLoader 函数开始执行')

  async function autosetimg(element: HTMLImageElement) {
    console.log('开始处理图片元素:', element)
    console.log('图片元素详细信息:', {
      src: element.src,
      alt: element.alt,
      attributes: Array.from(element.attributes)
        .map((attr) => `${attr.name}="${attr.value}"`)
        .join(', '),
    })

    const imagepreviewsrc = element.getAttribute('preview-image-src')
    const realSrc = element.getAttribute('resourcesrc')
    const dataSrc = element.getAttribute('data-src') // 新增：获取data-src属性
    let url: string | null = null

    console.log('获取到的图片属性:', {
      imagepreviewsrc,
      realSrc,
      dataSrc, // 新增：记录data-src属性
    })

    // 优先使用data-src属性，其次是imagepreviewsrc，最后是resourcesrc
    if (dataSrc) {
      console.log('使用data-src图片源:', dataSrc)
      url = dataSrc
    } else if (imagepreviewsrc) {
      console.log('使用预览图片源:', imagepreviewsrc)
      url = imagepreviewsrc
    } else if (realSrc) {
      console.log('使用实际图片源:', realSrc)
      url = realSrc
    } else {
      console.log('未找到有效的图片源属性')
    }

    if (url) {
      console.log('开始设置图片:', url)
      try {
        await setimg(element, url)
        console.log('图片设置成功:', url)

        // 检查是否需要设置点击查看原图功能
        const previewSrc = dataSrc || imagepreviewsrc
        const originalSrc = realSrc || (previewSrc ? null : dataSrc)

        if (previewSrc && originalSrc && previewSrc !== originalSrc) {
          console.log('设置点击查看原图功能')
          element.title = '点击查看原图'
          element.onclick = () => {
            console.log('用户点击查看原图，切换到实际图片源:', originalSrc)
            setimg(element, originalSrc)
          }
        }
      } catch (error) {
        console.error('设置图片时出错:', error)
      }
    } else {
      console.warn('没有有效的图片URL，跳过处理')
    }
  }

  const setimg = async (element: HTMLImageElement, url: string): Promise<boolean> => {
    console.log('setimg 函数开始执行，URL:', url)
    const alt = element.alt
    console.log('保存原始alt文本:', alt)

    element.src = ''
    element.alt = '加载中...'
    console.log('清空图片src并设置加载中状态')

    try {
      console.log('开始获取图片资源:', url)
      const response = await fetch(url)
      console.log('获取图片响应:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        headers: Array.from(response.headers.entries())
          .map(([key, value]) => `${key}: ${value}`)
          .join(', '),
      })

      if (!response.ok) {
        console.error('图片响应状态异常:', response.status, response.statusText)
        throw new Error(`状态码异常:${response.status}`)
      }

      console.log('开始读取图片数据...')
      const blob = await response.blob()
      console.log('图片数据读取完成，blob类型:', blob.type, '大小:', blob.size, 'bytes')

      const objectUrl = URL.createObjectURL(blob)
      console.log('创建对象URL:', objectUrl)

      element.src = objectUrl
      element.alt = alt
      console.log('设置图片src和alt完成')

      element.onload = () => {
        // 尝试移除.lazyload类名
        try {
          element.classList.remove('lazyload')
        } catch (e) {
          console.error('移除.lazyload类名时出错:', e)
        }
        console.log('图片加载完成，释放对象URL:', objectUrl)
        // URL.revokeObjectURL(objectUrl)
      }

      return true
    } catch (e) {
      console.error('图片加载过程中出错:', e)
      element.alt = '点击重载'
      console.warn('图片加载失败，设置点击重载功能')

      element.onclick = () => {
        console.log('用户点击重载图片，URL:', url)
        setimg(element, url)
      }

      return false
    }
  }

  // 获取所有带有 resourcesrc 属性的 img 标签（保留原有逻辑）
  console.log('开始查找带有resourcesrc属性的图片元素...')
  const resourcesrcImages = document.querySelectorAll('img[resourcesrc]')
  console.log('找到', resourcesrcImages.length, '个带有resourcesrc属性的图片元素')

  // 获取所有带有 data-src 属性的 img 标签（新增逻辑）
  console.log('开始查找带有data-src属性的图片元素...')
  const dataSrcImages = document.querySelectorAll('img[data-src]')
  console.log('找到', dataSrcImages.length, '个带有data-src属性的图片元素')

  // 合并两个选择器，避免重复处理
  const allImages = document.querySelectorAll('img[resourcesrc], img[data-src]')
  console.log('总共找到', allImages.length, '个需要处理的图片元素')

  if (allImages.length === 0) {
    console.warn(
      '未找到任何带有resourcesrc或data-src属性的图片元素，请检查HTML中是否正确设置了这些属性',
    )
  }

  // 使用Set去重，避免重复处理同一个元素
  const uniqueImages = new Set(allImages)
  console.log('去重后需要处理', uniqueImages.size, '个图片元素')

  uniqueImages.forEach((img, index) => {
    console.log('开始处理第', Number(index) + 1, '个图片元素')
    autosetimg(img as HTMLImageElement)
  })

  console.log('initImageLoader 函数执行完成')
}

export const initStarRating = () => {
  console.log('初始化星星评分...')
  const starelements = document.querySelectorAll('star[data-star-amount]')
  starelements.forEach((element) => {
    const amount = element.getAttribute('data-star-amount')
    if (amount) {
      element.innerHTML = ''
      element.setAttribute('style', 'color: #ffc107')
      for (let i = 0; i < parseInt(amount); i++) {
        const star = document.createElement('i')
        star.classList.add('bi', 'bi-star-fill')
        star.innerHTML = '&nbsp;'
        element.appendChild(star)
      }
    }
  })
}
