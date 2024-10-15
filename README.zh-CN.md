# 自定义 React 组件库

本仓库提供了一个模板，用于创建一个使用 Rollup、TypeScript、Less 和 Storybook 的 React 组件库。它允许您轻松构建、文档化和展示您的组件。

[English Docs](./README.md)

## 特性

- **Rollup**：高效地打包您的组件，便于分发。
- **TypeScript**：使用类型安全和现代 JavaScript 特性进行开发。
- **Less**：使用 Less 来为您的组件添加样式。
- **Storybook**：在隔离环境中文档化和可视化您的组件。

## 快速开始

### 前提条件

- 确保您在机器上安装了 [Node.js](https://nodejs.org/)。
- 您可 Yarn 包管理器。如果尚未安装，可以使用 npm 进行安装：

  ```bash
  npm install --global yarn
  ```

### 安装

1. 克隆仓库：

   ```bash
   git clone https://github.com/jobsofferings/basic-components.git
   cd basic-components
   ```

2. 安装依赖：

   ```bash
   yarn
   ```

### 运行 Storybook

要启动 Storybook 并查看您的组件：

```bash
yarn sb
```

运行该命令后，您可以访问 Storybook： [http://localhost:6006/](http://localhost:6006/)。