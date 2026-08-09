/**
 * 页脚数据源：简介、快速导航、联系信息、版权信息统一在此维护
 * 链接类型约定：
 *  - to      → 站内路由，渲染为 <router-link>（如 '/')
 *  - anchor  → 站内锚点，渲染为原生 <a href="#...">（避免 router-link 滚动回顶破坏锚点）
 *  - href    → 站外链接，渲染为 <a target="_blank" rel="noopener">
 */

export interface FooterLink {
  label: string
  /** 站内路由地址（router-link） */
  to?: string
  /** 站内锚点 id（原生 <a href="#...">） */
  anchor?: string
  /** 站外链接地址（<a target="_blank" rel="noopener">） */
  href?: string
}

export interface FooterContactItem {
  /** Bootstrap Icons 类名（站点已全局引入） */
  icon: string
  /** 展示名 */
  label: string
  /** 纯文本展示内容 */
  text?: string
  /** 站外链接地址 */
  href?: string
}

export interface FooterData {
  brand: {
    title: string
    subtitle: string
    description: string
  }
  quickLinks: {
    title: string
    links: FooterLink[]
  }
  contact: {
    title: string
    items: FooterContactItem[]
  }
  copyright: {
    owner: string
    /** 备案号（如 '琼ICP备12345678号-1'），为空则不展示 */
    icp: string
    /** 版权栏小字说明 */
    notice: string
  }
}

export const footerData: FooterData = {
  brand: {
    title: '海口市第四中学网络部',
    subtitle: 'wlb.yt437700.top',
    description:
      '网络部全名"海口市第四中学团委学生会网络管理部"，隶属于海口市第四中学团委学生会，为学校各类活动提供灯光、音响、舞台设备与技术支持。',
  },
  quickLinks: {
    title: '快速导航',
    links: [
      { label: '概览', to: '/' },
      { label: '我们的工作', anchor: '我们的工作' },
      { label: '各种福利', anchor: 'benefits' },
      { label: '部门内岗位', anchor: '部门内岗位' },
      { label: '骨干成员', anchor: 'members' },
      { label: '活动实拍', anchor: '活动实拍' },
    ],
  },
  contact: {
    title: '联系信息',
    items: [
      {
        icon: 'bi bi-qq',
        label: 'QQ 群',
        text: '点击跳转加入群聊',
        href: 'https://qm.qq.com/q/HWrYTzo2EU',
      },
      {
        icon: 'bi bi-github',
        label: 'GitHub',
        text: '在 GitHub 上编辑此站',
        href: 'https://github.com/yt437700/hnhkszwlbsite',
      },
      {
        icon: 'bi bi-geo-alt',
        label: '学校',
        text: '海口市第四中学',
      },
    ],
  },
  copyright: {
    owner: '海口市第四中学网络部',
    icp: '',
    notice: '为保护隐私，成员信息仅展示社交平台昵称；部分往届成员信息因时间久远暂缺。',
  },
}
