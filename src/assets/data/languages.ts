/**
 * 项目语言构成数据
 *
 * 设计目标：组件只依赖 `LanguageItem[]` 这一抽象接口，不关心底层数据来源。
 * 当前阶段为静态数据；后续将改为：GitHub API → 构建阶段生成数据 → 写入本文件 → Footer 读取展示。
 */

export interface LanguageItem {
  /** 语言名称 */
  name: string
  /** 统计权重（代码行数 / 字节数），用于自动计算占比 */
  bytes: number
}

export const languageStats: LanguageItem[] = [
  { name: 'TypeScript', bytes: 52040 },
  { name: 'Vue', bytes: 37950 },
  { name: 'HTML', bytes: 16361 },
  { name: 'CSS', bytes: 1001 },
]
