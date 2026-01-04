# MapGenie 森林之子地图汉化插件

## 功能说明

这是一个用于 MapGenie Sons of The Forest 地图网站的汉化插件，提供三种显示模式：
- **原文**：显示原始英文
- **汉化**：显示中文翻译
- **双语**：显示"中文 (英文)"格式

## 安装步骤

### 1. 安装 Tampermonkey

首先需要在浏览器中安装 Tampermonkey 扩展：

- **Chrome/Edge**: [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Firefox**: [Firefox Add-ons](https://addons.mozilla.org/firefox/addon/tampermonkey/)

### 2. 安装脚本

1. 点击 Tampermonkey 图标，选择"管理面板"
2. 点击左侧的"+"号，创建新脚本
3. 删除默认内容
4. 复制 `mapgenie-chinese.user.js` 文件的内容并粘贴
5. 保存脚本（Ctrl+S）

**注意**：翻译词库已直接嵌入到脚本中，无需修改文件路径。

## 使用方法

### 访问网站

1. 打开浏览器，访问：https://mapgenie.io/sons-of-the-forest/maps/world
2. 脚本会自动加载并翻译页面内容

### 切换显示模式

1. 页面右上角会显示一个 🌐 图标
2. 点击图标打开语言模式菜单
3. 选择您想要的显示模式：
   - **原文**：显示英文
   - **汉化**：显示中文
   - **双语**：显示"中文 (英文)"

### 保存设置

- 您选择的模式会自动保存到浏览器本地存储
- 刷新页面后，上次选择的模式会自动应用

## 翻译内容

插件已翻译以下内容：

### 分类名称
- Locations（位置）
- Collectibles（收集品）
- Items（物品）
- Natives（原住民）
- Wildlife（野生动物）
- Materials（材料）
- Other（其他）

### 子分类（部分示例）
- 3D Printer（3D打印机）
- Bunker（地堡）
- Cave Entrance（洞穴入口）
- Artifact Piece（神器碎片）
- Blueprint（蓝图）
- Weapon（武器）
- Mutant（变异体）
- 等等...

### UI 元素
- Search（搜索）
- Show All（显示全部）
- Hide All（隐藏全部）
- Filter Active（筛选已激活）
- 等等...

## 故障排除

### 脚本无法加载

1. 检查 Tampermonkey 是否已正确安装
2. 检查脚本是否已启用
3. 检查 `@require` 路径是否正确
4. 查看浏览器控制台（F12）是否有错误信息

### 翻译不生效

1. 刷新页面（F5）
2. 检查控制台是否有 "MapGenie 森林之子地图汉化插件已加载" 的日志
3. 确认 `locals.js` 文件路径正确
4. 尝试切换语言模式

### 部分文本未翻译

1. 这是正常现象，插件可能遗漏了一些文本
2. 您可以手动编辑 `locals.js` 文件添加缺失的翻译
3. 提交 Issue 告诉我们哪些文本需要翻译

## 自定义翻译

如果您想添加或修改翻译，可以编辑 `locals.js` 文件：

```javascript
const locals = {
    // 添加新的翻译
    "Your Text Here": "您的翻译",

    // 修改现有翻译
    "Search": "查找",  // 将"搜索"改为"查找"
};
```

修改后保存文件，刷新页面即可生效。

## 技术支持

如果遇到问题，请检查：
1. 浏览器控制台（F12）的错误信息
2. Tampermonkey 脚本是否启用
3. 文件路径是否正确
4. 网络连接是否正常

## 注意事项

1. 本插件仅用于个人学习和使用
2. 请勿用于商业用途
3. 翻译可能存在不准确之处，欢迎指正
4. 网站更新可能导致插件失效，需要及时更新

## 版本信息

- **版本**: 1.0.0
- **更新日期**: 2026-01-03
- **兼容性**: Chrome, Firefox, Edge

## 许可证

本项目仅供学习交流使用。