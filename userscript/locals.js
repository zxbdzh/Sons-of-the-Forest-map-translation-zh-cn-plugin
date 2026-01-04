// MapGenie 森林之子地图汉化词库
// 翻译数据字典

const locals = {
    // ========== UI 元素 ==========
    "Search": "搜索",
    "Show All": "显示全部",
    "Hide All": "隐藏全部",
    "Filter Active": "筛选已激活",
    "Clear Target": "清除目标",
    "Embed Map": "嵌入地图",
    "Upgrade To Pro": "升级到专业版",

    // ========== 分类名称 ==========
    "Locations": "位置",
    "Collectibles": "收集品",
    "Items": "物品",
    "Natives": "原住民",
    "Wildlife": "野生动物",
    "Materials": "材料",
    "Other": "其他",

    // ========== Locations 子分类 ==========
    "3D Printer": "3D打印机",
    "Abandoned Camp": "废弃营地",
    "Bunker": "地堡",
    "Cannibal Camp": "食人族营地",
    "Cave Entrance": "洞穴入口",
    "Exit": "出口",
    "GPS Locator": "GPS定位器",
    "Point of Interest": "兴趣点",
    "Spawn Point": "出生点",
    "Village": "村庄",

    // ========== Collectibles 子分类 ==========
    "Artifact Piece": "神器碎片",
    "Blueprint": "蓝图",
    "Book": "书籍",
    "Clothes": "衣服",
    "Document": "文档",
    "Keycard": "门禁卡",
    "Laptop": "笔记本电脑",
    "Magazine": "杂志",
    "Video Recording": "视频录像",

    // ========== Items 子分类 ==========
    "Air Tank": "氧气瓶",
    "Ammo Case": "弹药箱",
    "Cooking Pot": "烹饪锅",
    "Crate": "板条箱",
    "Crossbow Bolts": "弩箭",
    "Equipment": "装备",
    "Explosives": "爆炸物",
    "Flare": "信号弹",
    "Gear": "齿轮",
    "Golf Cart Battery": "高尔夫球车电池",
    "Light Bulb": "灯泡",
    "Meds": "药品",
    "Snack": "零食",
    "Soda": "汽水",
    "Suitcase": "行李箱",
    "Supply Case": "补给箱",
    "Tarp": "防水布",
    "Utility Item": "实用物品",
    "Weapon": "武器",

    // ========== Natives 子分类 ==========
    "Mutant": "变异体",

    // ========== Wildlife 子分类 ==========
    "Deer": "鹿",
    "Fish": "鱼",
    "Moose": "驼鹿",
    "Oyster": "牡蛎",
    "Seagull": "海鸥",
    "Shark": "鲨鱼",
    "Turtle": "海龟",

    // ========== Materials 子分类 ==========
    "Cash": "现金",
    "Circuit Board": "电路板",
    "Cloth": "布料",
    "Coins": "硬币",
    "Duct Tape": "强力胶带",
    "Mushrooms": "蘑菇",
    "Plant": "植物",
    "Rope": "绳索",
    "Solafite Ore": "索拉菲特矿石",
    "Vodka Bottle": "伏特加酒瓶",
    "Watch": "手表",
    "Wire": "电线",

    // ========== Other 子分类 ==========
    "Door": "门",
    "Easter Egg": "彩蛋",
    "Golf Ball": "高尔夫球",
    "Grave": "坟墓",
    "Miscellaneous": "杂项",
    "Pond": "池塘",
    "Radio": "收音机",
    "Skull": "头骨",
    "Vehicle": "载具",

    // ========== 工具提示 ==========
    "Distance Measurement Tool": "距离测量工具",
    "Sniping Radius Tool": "狙击范围工具",
    "Drag the target shape to visualize sniping distances. Dotted lines are 50m increments.": "拖动目标形状以可视化狙击距离。虚线为50米增量。",

    // ========== 其他文本 ==========
    "Embed this map on your own website by copying the code below and adding it to your html": "通过复制下面的代码并将其添加到您的 HTML 中，将此地图嵌入到您自己的网站上",
    "Ad Blocker? Consider an upgrade to PRO to remove ads and get extra features.": "广告拦截器？考虑升级到专业版以移除广告并获取额外功能。",

    // ========== 正则表达式翻译（用于动态内容） ==========
    regex: {
        // 可以添加正则表达式规则来处理动态内容
        // 例如：[/(\d+) items/, "$1 个物品"]
    }
};

// 导出到全局作用域
if (typeof window !== 'undefined') {
    window.mapgenieLocals = locals;
}

// ========== 中文→英文反向翻译字典（用于搜索功能） ==========
const reverseLocals = {
    // UI 元素
    "搜索": "Search",
    "显示全部": "Show All",
    "隐藏全部": "Hide All",
    "筛选已激活": "Filter Active",
    "清除目标": "Clear Target",
    "嵌入地图": "Embed Map",
    "升级到专业版": "Upgrade To Pro",

    // 分类名称
    "位置": "Locations",
    "收集品": "Collectibles",
    "物品": "Items",
    "原住民": "Natives",
    "野生动物": "Wildlife",
    "材料": "Materials",
    "其他": "Other",

    // Locations 子分类
    "3D打印机": "3D Printer",
    "废弃营地": "Abandoned Camp",
    "地堡": "Bunker",
    "食人族营地": "Cannibal Camp",
    "洞穴入口": "Cave Entrance",
    "出口": "Exit",
    "GPS定位器": "GPS Locator",
    "兴趣点": "Point of Interest",
    "出生点": "Spawn Point",
    "村庄": "Village",

    // Collectibles 子分类
    "神器碎片": "Artifact Piece",
    "蓝图": "Blueprint",
    "书籍": "Book",
    "衣服": "Clothes",
    "文档": "Document",
    "门禁卡": "Keycard",
    "笔记本电脑": "Laptop",
    "杂志": "Magazine",
    "视频录像": "Video Recording",

    // Items 子分类
    "氧气瓶": "Air Tank",
    "弹药箱": "Ammo Case",
    "烹饪锅": "Cooking Pot",
    "板条箱": "Crate",
    "弩箭": "Crossbow Bolts",
    "装备": "Equipment",
    "爆炸物": "Explosives",
    "信号弹": "Flare",
    "齿轮": "Gear",
    "高尔夫球车电池": "Golf Cart Battery",
    "灯泡": "Light Bulb",
    "药品": "Meds",
    "零食": "Snack",
    "汽水": "Soda",
    "行李箱": "Suitcase",
    "补给箱": "Supply Case",
    "防水布": "Tarp",
    "实用物品": "Utility Item",
    "武器": "Weapon",

    // Natives 子分类
    "变异体": "Mutant",

    // Wildlife 子分类
    "鹿": "Deer",
    "鱼": "Fish",
    "驼鹿": "Moose",
    "牡蛎": "Oyster",
    "海鸥": "Seagull",
    "鲨鱼": "Shark",
    "海龟": "Turtle",

    // Materials 子分类
    "现金": "Cash",
    "电路板": "Circuit Board",
    "布料": "Cloth",
    "硬币": "Coins",
    "强力胶带": "Duct Tape",
    "蘑菇": "Mushrooms",
    "植物": "Plant",
    "绳索": "Rope",
    "索拉菲特矿石": "Solafite Ore",
    "伏特加酒瓶": "Vodka Bottle",
    "手表": "Watch",
    "电线": "Wire",

    // Other 子分类
    "门": "Door",
    "彩蛋": "Easter Egg",
    "高尔夫球": "Golf Ball",
    "坟墓": "Grave",
    "杂项": "Miscellaneous",
    "池塘": "Pond",
    "收音机": "Radio",
    "头骨": "Skull",
    "载具": "Vehicle",

    // 工具提示
    "距离测量工具": "Distance Measurement Tool",
    "狙击范围工具": "Sniping Radius Tool",
};

// 导出到全局作用域
if (typeof window !== 'undefined') {
    window.mapgenieReverseLocals = reverseLocals;
}