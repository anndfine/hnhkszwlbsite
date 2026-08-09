
# Website Design System

## 1. 整体风格

网站定位：
海口市第四中学网络部官网

设计关键词：
- 专业
- 简洁
- 技术感
- 校园组织感

避免：
- 商业 SaaS 风格
- AI 模板感
- 过度炫技效果


---

## 2. 色彩规范

主背景：


--background:

卡片背景：

--card:

主要文字：

--text-primary:

次要文字：

--text-secondary:

强调色：

蓝色： 用途：

橙色： 用途：

禁止：

随意新增紫色渐变

每个 Section 自己定义主题色



---

## 3. Section 结构规范

统一：

<section>

  标题区域

  内容区域

</section>

标题：

中文标题
ENGLISH TITLE

要求：

左对齐/居中统一

间距统一



---

## 4. 卡片规范

统一：

圆角：

12px / 16px

阴影：

轻量

禁止：

发光边框

彩色渐变边框



---

## 5. 动画规范

进入：

统一 reveal 动画。

要求：

首次进入触发；

返回视口仍可触发；

不使用过度缩放。



---

## 6. 图片规范

图片：

固定容器比例；

object-fit: cover；

避免不同高度导致布局跳动。



---

## 7. 响应式规范

桌面：

多列布局。

移动：

单列/双列。

禁止：

横向滚动；

固定宽度卡片。



---

# 8. 当前模块状态

|模块	|状态|
|-|--|
|HeroSection	|完成|
|Navbar	|完成|
|WorkSection	|完成|
|ServiceSection	|完成|
|BenefitsSection	|待优化|
|PositionsSection	|完成|
|GallerySection	|开发中|
|MembersSection	|完成|



---
---


因为目前最大的风险已经不是“功能缺失”，而是：

> 10 个组件由不同的人/AI 修改后，最后像 10 个网页拼起来。