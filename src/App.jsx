import { useEffect, useMemo, useRef, useState } from "react";
import {
  BadgeCheck,
  Bell,
  Brain,
  Check,
  CloudSun,
  Copy,
  Frown,
  Github,
  Grid2X2,
  Leaf,
  MapPin,
  MessageCircle,
  MoonStar,
  Plus,
  Search,
  Shirt,
  Smile,
  Sparkles,
  ShoppingBag,
  Utensils,
  X,
} from "lucide-react";

const TRANSLATIONS = {
  zh: {
    appName: "就这样吧",
    nav: {
      settings: "语言",
      theme: "主题",
      warm: "暖阳",
      cool: "微凉",
      dark: "静夜",
    },
    hero: {
      title: "生活很累",
      titleMuted: "随便一点",
      subtitle: "Keep it simple, keep it chill.",
    },
    grid: {
      coming: "还在开发",
      comingDesc: "开发者去摸鱼了…",
      label: "工具",
    },
    common: {
      back: "返回主页",
      close: "关闭",
    },
    footer: {
      tagline: "\"就这样吧，挺好的。\"",
      copyright: "©念安-2026.01",
      contact: "与我联系",
    },
    tools: {
      dinner: {
        title: "晚饭吃什么",
        desc: "解决人类终极难题",
        cta: "帮我选！",
        add: "加入菜单",
        placeholder: "加个想吃的...",
        resultLabel: "今日答案",
        rolling: "神灵感应中...",
        empty: "菜单空空",
        poolLabel: "MENU POOL",
        reset: "Reset",
        defaultMenu: [
          "家常面",
          "牛肉饭",
          "清炒时蔬",
          "家常炒饭",
          "番茄鸡蛋面",
          "鸡蛋炒饭",
          "牛肉面",
          "炸酱面",
          "葱油拌面",
          "热干面",
          "凉皮",
          "刀削面",
          "米线",
          "螺蛳粉",
          "桂林米粉",
          "酸辣粉",
          "重庆小面",
          "担担面",
          "兰州拉面",
          "红烧牛肉面",
          "咖喱牛肉饭",
          "宫保鸡丁盖饭",
          "鱼香肉丝盖饭",
          "回锅肉盖饭",
          "卤肉饭",
          "肥牛饭",
          "椒盐鸡腿饭",
          "鸡排饭",
          "照烧鸡腿饭",
          "黑椒牛柳饭",
          "土豆烧牛肉",
          "土豆炖排骨",
          "海带炖排骨",
          "红烧排骨",
          "可乐鸡翅",
          "糖醋排骨",
          "糖醋里脊",
          "糖醋鱼",
          "红烧狮子头",
          "粉蒸肉",
          "梅菜扣肉",
          "香菇滑鸡",
          "清蒸鲈鱼",
          "清蒸鲳鱼",
          "酸菜鱼",
          "水煮鱼",
          "麻辣香锅",
          "香辣虾",
          "香辣蟹",
          "干锅花菜",
          "干锅牛蛙",
          "干锅鸭头",
          "烤鱼",
          "烤串拼盘",
          "烧烤小摊",
          "生煎包",
          "锅贴",
          "煎饺",
          "韭菜盒子",
          "鸡蛋灌饼",
          "肉夹馍",
          "凉拌木耳",
          "凉拌黄瓜",
          "拍黄瓜",
          "凉拌粉丝",
          "炒青菜",
          "蒜蓉生菜",
          "蒜蓉西兰花",
          "蚝油生菜",
          "炒空心菜",
          "番茄炒蛋",
          "土豆丝炒青椒",
          "鱼香茄子",
          "地三鲜",
          "红烧茄子",
          "茄汁大虾",
          "番茄牛腩",
          "番茄豆腐煲",
          "豆腐炖蘑菇",
          "麻婆豆腐",
          "家常豆腐",
          "铁板豆腐",
          "麻辣烫",
          "关东煮",
          "冒菜",
          "砂锅粉丝煲",
          "砂锅豆腐煲",
          "小火锅",
          "清汤火锅",
          "鸳鸯火锅",
          "重庆火锅",
          "串串香",
          "寿司卷",
          "三文鱼寿司",
          "鳗鱼寿司",
          "亲子丼",
          "牛丼",
          "日式咖喱饭",
          "乌冬面",
          "味噌汤",
          "汉堡薯条",
          "炸鸡套餐",
          "披萨",
          "意大利面",
          "奶油蘑菇意面",
          "培根番茄意面",
          "焗饭",
          "焗土豆泥",
          "三明治",
          "培根煎蛋吐司",
          "鸡蛋沙拉",
          "凯撒沙拉",
          "水果沙拉",
          "牛肉沙拉",
          "烤鸡沙拉",
          "牛奶麦片",
          "粥加小菜",
          "皮蛋瘦肉粥",
          "生滚牛肉粥",
          "虾仁粥",
          "小米粥",
          "红枣银耳汤",
          "南瓜粥",
          "玉米排骨汤",
          "冬瓜排骨汤",
          "紫菜蛋花汤",
          "西红柿蛋汤",
          "蘑菇汤",
          "酸辣汤",
          "馄饨",
          "饺子",
          "牛肉粉丝汤",
          "羊肉汤",
          "牛杂粉",
          "叉烧饭",
          "广式烧鸭饭",
          "港式烧腊拼饭",
          "海南鸡饭",
          "砂锅粥",
          "煲仔饭",
          "腊味煲仔饭",
          "豆腐脑",
          "油泼面",
          "西安肉夹馍套餐",
          "煎牛排",
          "煎三文鱼",
          "黄焖鸡米饭",
          "砂锅土豆粉",
          "烤冷面",
          "铁板鱿鱼",
          "葱爆羊肉",
          "葱爆牛肉",
          "韭黄炒蛋",
          "韭菜炒肉",
          "辣子鸡",
          "辣炒年糕",
          "韩国拌饭",
          "石锅拌饭",
          "泡菜锅",
          "泡菜炒饭",
          "炒年糕",
        ],
      },
      buy: {
        title: "买不买决策姬",
        desc: "冲动消费冷静剂",
        cta: "给个痛快话",
        buy: "买!",
        hold: "别买!",
        mood: "心理博弈结果",
        hint: "准备好就交给我。",
        thinking: "闭上眼，默念那个商品。",
        reasons: {
          buy: [
            "今天够辛苦，奖励自己一次合理。",
            "折扣刚好，不买才会后悔。",
            "它会让你的生活更顺一点点。",
            "这次买，是对未来自己的投资。",
            "你已经考虑过一阵子了，这不是冲动，是积累。",
            "它能提升效率，而时间比钱更值钱。",
            "你值得拥有一点让生活发光的小物件。",
            "预算之内，情绪之上，完全可控。",
            "这是对当下努力的一点温柔反馈。",
            "灵感与喜欢来得不多见，抓住它也不错。",
            "这不是消费，是把快乐提前领用。",
            "如果它能带来长期陪伴，那就值得。",
            "你不是买东西，你是在选择某种生活方式。",
            "适度犒赏能帮你保持继续前进的动力。",
            "金钱会流走，但体验会留在记忆里。",
            "你不是在买东西，是在给生活增加一点温度。",
            "如果它能提升情绪稳定性，那就是刚性需求。",
            "你会用到它，而且不仅仅一次。",
            "你的快乐值得被认真对待。",
            "这是一笔小额投资，却能带来长期满足。",
            "它能减少以后反复纠结的次数。",
            "有时候，喜欢本身就是最好的理由。",
            "眼下这个阶段，它确实适合你。",
            "不是从众消费，这是你个人的选择。",
            "你已经权衡过利弊，现在可以享受决定了。",
            "它会成为你一天生活里的一点小亮点。",
            "物质不是答案，但合适的东西能减轻负担。",
            "比起犹豫消耗情绪，果断反而更轻松。",
            "如果预算允许，那就是对自我的温柔支持。",
            "生活不能全是理性，留一点浪漫给自己。",
          ],
          hold: [
            "三天后你就会忘掉它。",
            "先放购物车，观察它的情绪。",
            "今天已经很累，不必再处理它。",
            "给钱包留一点呼吸空间。",
            "你只是需要快乐，不一定需要这个东西。",
            "冲动五分钟，还款三个月，不值得。",
            "当下的欲望不等于真实的需求。",
            "等下一次看到它时，你再感受一次喜欢是否依然存在。",
            "如果需要理由说服自己买，多半并不是真正需要。",
            "你已经拥有类似功能的东西了。",
            "真正的宝贝，不会因为多等几天而离开。",
            "现在先不买，是一种更强大的自我掌控。",
            "把这份冲动转化成储蓄，会更安心。",
            "理性比短暂的满足更酷一点。",
            "你不是错过机会，而是在筛选更好的选择。",
            "你想要的不是它，而是当下那一点情绪安慰。",
            "真正适合你的东西，不会只在这一刻出现。",
            "把喜欢留到下一件真正值得的东西上。",
            "短暂的刺激会散去，但支出会留下。",
            "你不是在克制自己，而是在保护自己。",
            "等心情稳定后再决定，你会更满意现在的选择。",
            "当你需要说服自己购买时，其实答案已经很明显。",
            "理性暂停，并不影响你继续热爱生活。",
            "把这份冲动转化为积累，是一种温柔的强大。",
            "今天先不买，你依然拥有选择权。",
            "此刻的你，更需要休息，而不是消费。",
            "不买，也是一种对自己的尊重。",
            "有时候，空掉一笔消费，就是给未来留一份安全感。",
            "你并没有错过，而是在掌控节奏。",
            "理智并非冷漠，而是温柔地替你承担压力。",
          ],
        },
      },
      fish: {
        title: "敲木鱼",
        desc: "心诚则灵，Bug 退散",
        cta: "敲一下",
        modes: ["Bug 退散", "需求不改", "会议收敛", "灵感涌现"],
        responses: ["功德 +1", "已静音尘世", "Bug 已远离", "呼吸变稳了"],
        counterLabel: "今日功德",
      },
      fortune: {
        title: "今日运势",
        desc: "温柔治愈版小预测",
        cta: "再测一次",
        loading: "正在占卜今日能量…",
        fields: {
          energy: "能量",
          luckyColor: "幸运色",
          luckyItem: "幸运单品",
          keyword: "关键词",
        },
        pool: [
          {
            title: "轻盈回弹",
            keyword: "节奏放慢",
            energy: "72%",
            luckyColor: "奶油白",
            colorHex: "#f3ede4",
            luckyItem: "薄针织",
            note: "不用追进度，先完成一个小目标就够了。",
          },
          {
            title: "小幸运靠近",
            keyword: "期待感上升",
            energy: "81%",
            luckyColor: "杏子黄",
            colorHex: "#f2d58d",
            luckyItem: "帆布鞋",
            note: "今天适合先做喜欢的事，顺手解决难题。",
          },
          {
            title: "安稳蓄力",
            keyword: "慢慢积累",
            energy: "66%",
            luckyColor: "雾蓝",
            colorHex: "#b7c8d4",
            luckyItem: "衬衫",
            note: "别急着比较，你的节奏刚刚好。",
          },
          {
            title: "柔和上扬",
            keyword: "情绪回温",
            energy: "78%",
            luckyColor: "珊瑚粉",
            colorHex: "#f2b5aa",
            luckyItem: "针织开衫",
            note: "把心力放回自己，今天会更有底气。",
          },
          {
            title: "专注小宇宙",
            keyword: "效率在线",
            energy: "84%",
            luckyColor: "奶茶棕",
            colorHex: "#c8a489",
            luckyItem: "皮质小包",
            note: "专注 40 分钟，奖励自己一段放空。",
          },
          {
            title: "温柔守护",
            keyword: "心思细腻",
            energy: "70%",
            luckyColor: "薄荷绿",
            colorHex: "#bfe4d0",
            luckyItem: "轻薄风衣",
            note: "注意照顾好自己，才有余力照顾别人。",
          },
        ],
      },
      date: {
        title: "约会去哪儿",
        desc: "写下地点，抽一张今天的约会目的地",
        placeholder: "如：[常熟]、[苏州中心]…",
        cta: "抽一下",
        rolling: "旋转中…",
        slotLabel: "抽到的方向",
        slotHint: "等待指针停下",
        resultLabel: "今日建议",
        prefix: "去",
        resultHint: "抽到后这里会出现今天的约会建议。",
        poiTitle: "附近好去处",
        poiHint: "抽取后会推荐 20km 内的真实地点",
        poiLoading: "正在搜寻 20km 内的约会地点…",
        poiEmpty: "20km 内没有匹配结果，换个地点试试。",
        poiError: "搜索失败，请换个地点重试。",
        poiMissingKey: "缺少高德 Key，无法获取周边地点。",
        poiUnknown: "地址待补充",
        poiRadius: "20km",
        categories: [
          { label: "热门商场", suffix: "的热门商场去 Window Shopping", keywords: "商场" },
          { label: "江畔公园", suffix: "的江畔公园散步吹风", keywords: "公园" },
          { label: "文艺书店", suffix: "的独立书店翻翻新书", keywords: "书店" },
          { label: "复古影院", suffix: "的复古影院看一场老电影", keywords: "电影院" },
          { label: "隐秘咖啡馆", suffix: "的角落咖啡馆慢慢聊天", keywords: "咖啡馆" },
          { label: "美术馆", suffix: "的美术馆看一场新展", keywords: "美术馆" },
          { label: "夜市", suffix: "的夜市边逛边吃", keywords: "夜市" },
          { label: "花园餐厅", suffix: "的花园餐厅坐窗边", keywords: "餐厅" },
          { label: "天台酒吧", suffix: "的天台酒吧微醺一下", keywords: "酒吧" },
          { label: "水族馆", suffix: "的水族馆看蓝色海", keywords: "水族馆" },
          { label: "周末市集", suffix: "的周末市集淘点小物", keywords: "市集" },
          { label: "城市天台", suffix: "的城市天台吹吹晚风", keywords: "观景台" },
        ],
      },
      outfit: {
        title: "今日穿搭",
        desc: "看天气来点不费脑的穿搭建议",
        location: {
          title: "定位与天气",
          use: "获取当前位置",
          manualLabel: "手动城市",
          manualPlaceholder: "输入城市（如 北京）",
          manualBtn: "查天气",
          status: {
            idle: "尚未定位",
            locating: "定位中…",
            loading: "获取天气中…",
            searching: "查找城市中…",
            ready: "天气已更新",
            denied: "未授权定位权限",
            unavailable: "设备不支持定位",
            error: "获取失败",
          },
          unknown: "未知地点",
        },
        weather: {
          label: "当前天气",
          temperature: "温度",
          wind: "风速",
        },
        gender: {
          label: "性别",
          options: [
            { id: "female", label: "女生" },
            { id: "male", label: "男生" },
          ],
        },
        style: {
          label: "穿搭场景",
          options: [
            { id: "commute", label: "通勤" },
            { id: "casual", label: "休闲" },
            { id: "sport", label: "运动" },
            { id: "date", label: "约会" },
            { id: "home", label: "宅家" },
          ],
        },
        wants: {
          label: "想穿什么",
          options: [
            { id: "tee", label: "T恤" },
            { id: "shirt", label: "衬衫" },
            { id: "hoodie", label: "卫衣" },
            { id: "knit", label: "针织" },
            { id: "jacket", label: "外套" },
            { id: "trousers", label: "长裤" },
            { id: "shorts", label: "短裤" },
            { id: "skirt", label: "半裙" },
            { id: "dress", label: "连衣裙" },
            { id: "sneakers", label: "运动鞋" },
          ],
        },
        suggestions: {
          title: "今日建议",
          empty: "先获取天气，我再给你穿搭清单。",
          preference: "偏好",
          stylePrefix: "场景",
        },
      },
      excuse: {
        title: "逃离借口",
        desc: "优雅地逃离现场",
        cta: "生成借口",
        copy: "复制",
        copied: "已复制",
        default: "点击生成一条合理又不完全合理的理由。",
        pool: [
          "网络突然变慢，我去确认路由器情绪。",
          "同事在找我同步需求，我去听听风声。",
          "文档加载中，先让它自我反省三分钟。",
          "键盘有点发烫，我去冷却一下双手。",
          "要对齐一下目标，先给脑子热启动。",
        ],
      },
      persona: {
        title: "今日人设",
        desc: "我不装了，我摊牌了。",
        cta: "换一个人设",
        default: {
          title: "等待分配",
          icon: "🎴",
          desc: "抽卡中，请稍等。",
        },
        pool: [
          { title: "退堂鼓表演艺术家", icon: "🥁", desc: "遇到困难，先退为敬。" },
          { title: "人形咖啡过滤机", icon: "☕", desc: "血管里流的都是美式。" },
          { title: "带薪如厕高级顾问", icon: "🧻", desc: "灵感来自洗手间。" },
          { title: "会议气氛调节员", icon: "🎛️", desc: "话题太尴尬？我来控场。" },
          { title: "灵感捕手", icon: "🪄", desc: "灵感一闪，先记再说。" },
          { title: "借口策展人", icon: "🗂️", desc: "理由不多，但很体面。" },
          { title: "情绪降噪师", icon: "🫧", desc: "把杂音降到最低。" },
          { title: "效率假装家", icon: "🧠", desc: "看起来很忙，其实很稳。" },
        ],
      },
    },
  },
  en: {
    appName: "Just Like This",
    nav: {
      settings: "Language",
      theme: "Theme",
      warm: "Warm",
      cool: "Cool",
      dark: "Night",
    },
    hero: {
      title: "Life is heavy",
      titleMuted: "Keep it simple",
      subtitle: "Keep it simple, keep it chill.",
    },
    grid: {
      coming: "Coming soon",
      comingDesc: "Next tool is simmering.",
      label: "Tool",
    },
    common: {
      back: "Back",
      close: "Close",
    },
    footer: {
      tagline: "\"Just like this, it's fine.\"",
      copyright: "©Nianan-2026.01",
      contact: "Contact me",
    },
    tools: {
      dinner: {
        title: "Dinner Decider",
        desc: "A little randomness, less anxiety.",
        cta: "Pick for me!",
        add: "Add",
        placeholder: "Add something you crave...",
        resultLabel: "Tonight",
        rolling: "Thinking",
        empty: "Menu empty",
        tips: "Tip: remove tags to keep it light.",
        poolLabel: "MENU POOL",
        reset: "Reset",
        defaultMenu: [
          "Homestyle noodles",
          "Beef rice bowl",
          "Stir-fried seasonal greens",
          "Homestyle fried rice",
          "Tomato egg noodles",
          "Egg fried rice",
          "Beef noodles",
          "Zha jiang noodles",
          "Scallion oil noodles",
          "Hot dry noodles",
          "Liangpi cold noodles",
          "Knife-cut noodles",
          "Rice noodles",
          "Luosifen",
          "Guilin rice noodles",
          "Sour and spicy glass noodles",
          "Chongqing noodles",
          "Dan dan noodles",
          "Lanzhou beef noodles",
          "Braised beef noodle soup",
          "Curry beef rice",
          "Kung pao chicken rice",
          "Yu xiang shredded pork rice",
          "Twice-cooked pork rice",
          "Braised pork rice",
          "Fatty beef rice",
          "Salt and pepper chicken leg rice",
          "Chicken cutlet rice",
          "Teriyaki chicken leg rice",
          "Black pepper beef rice",
          "Beef braised with potatoes",
          "Pork ribs stewed with potatoes",
          "Pork ribs stewed with kelp",
          "Braised pork ribs",
          "Cola chicken wings",
          "Sweet and sour ribs",
          "Sweet and sour pork",
          "Sweet and sour fish",
          "Braised lion's head meatballs",
          "Steamed pork with rice flour",
          "Mei cai braised pork",
          "Mushroom chicken",
          "Steamed sea bass",
          "Steamed pomfret",
          "Sour fish with pickled mustard greens",
          "Sichuan boiled fish",
          "Mala dry pot",
          "Spicy shrimp",
          "Spicy crab",
          "Dry pot cauliflower",
          "Dry pot bullfrog",
          "Dry pot duck head",
          "Grilled fish",
          "Grilled skewers platter",
          "Street BBQ",
          "Pan-fried buns",
          "Potstickers",
          "Pan-fried dumplings",
          "Chive pockets",
          "Egg stuffed pancake",
          "Roujiamo",
          "Cold tossed wood ear mushrooms",
          "Cucumber salad",
          "Smashed cucumber salad",
          "Cold tossed glass noodles",
          "Stir-fried greens",
          "Garlic lettuce",
          "Garlic broccoli",
          "Oyster sauce lettuce",
          "Stir-fried water spinach",
          "Tomato and egg stir-fry",
          "Shredded potato with green pepper",
          "Yu xiang eggplant",
          "Sauteed eggplant, potato, and pepper",
          "Braised eggplant",
          "Prawns in tomato sauce",
          "Tomato beef brisket",
          "Tomato tofu clay pot",
          "Tofu and mushroom stew",
          "Mapo tofu",
          "Homestyle tofu",
          "Sizzling plate tofu",
          "Mala tang",
          "Oden",
          "Mao cai",
          "Clay pot vermicelli",
          "Clay pot tofu",
          "Mini hot pot",
          "Clear broth hot pot",
          "Yuan yang hot pot",
          "Chongqing hot pot",
          "Skewer hot pot",
          "Sushi rolls",
          "Salmon sushi",
          "Eel sushi",
          "Oyakodon",
          "Gyudon",
          "Japanese curry rice",
          "Udon",
          "Miso soup",
          "Burger and fries",
          "Fried chicken combo",
          "Pizza",
          "Pasta",
          "Creamy mushroom pasta",
          "Bacon tomato pasta",
          "Baked rice",
          "Baked mashed potatoes",
          "Sandwich",
          "Bacon and egg toast",
          "Egg salad",
          "Caesar salad",
          "Fruit salad",
          "Beef salad",
          "Grilled chicken salad",
          "Milk and cereal",
          "Porridge with sides",
          "Century egg and pork congee",
          "Beef congee",
          "Shrimp congee",
          "Millet porridge",
          "Red date and white fungus soup",
          "Pumpkin porridge",
          "Corn and pork rib soup",
          "Winter melon and pork rib soup",
          "Seaweed egg drop soup",
          "Tomato egg soup",
          "Mushroom soup",
          "Hot and sour soup",
          "Wontons",
          "Dumplings",
          "Beef vermicelli soup",
          "Lamb soup",
          "Beef offal rice noodles",
          "Char siu rice",
          "Cantonese roast duck rice",
          "Hong Kong roast combo rice",
          "Hainan chicken rice",
          "Clay pot congee",
          "Clay pot rice",
          "Clay pot rice with cured meats",
          "Tofu pudding",
          "Chili oil noodles",
          "Xian roujiamo set",
          "Pan-seared steak",
          "Pan-seared salmon",
          "Braised chicken rice",
          "Clay pot potato noodles",
          "Grilled cold noodles",
          "Sizzling squid",
          "Scallion lamb stir-fry",
          "Scallion beef stir-fry",
          "Stir-fried eggs with garlic chives",
          "Stir-fried pork with chives",
          "Spicy fried chicken",
          "Spicy stir-fried rice cakes",
          "Korean bibimbap",
          "Stone pot bibimbap",
          "Kimchi stew",
          "Kimchi fried rice",
          "Stir-fried rice cakes",
        ],
      },
      buy: {
        title: "Buy or Not Muse",
        desc: "No matter the result, you get an excuse.",
        cta: "Make the call",
        buy: "Buy!",
        hold: "Don't buy!",
        mood: "Mind game",
        hint: "Ready? Hand it to me.",
        thinking: "Close your eyes and whisper it.",
        reasons: {
          buy: [
            "You worked hard today; a small reward is reasonable.",
            "The discount is just right; skipping it will feel regretful.",
            "It will make your life a little smoother.",
            "Buying this is an investment in future you.",
            "You've thought about it for a while; it's not impulse, it's buildup.",
            "It boosts efficiency, and time is worth more than money.",
            "You deserve a little item that makes life glow.",
            "Within budget and under control, your mood can come first.",
            "A gentle reward for your current effort.",
            "Inspiration and liking don't show up often; catching it is fine.",
            "This isn't spending; it's redeeming happiness early.",
            "If it can be long-term company, it's worth it.",
            "You're not buying a thing; you're choosing a way of life.",
            "A measured treat helps keep your momentum.",
            "Money flows away, but experiences stay in memory.",
            "You're not buying stuff; you're adding a little warmth to life.",
            "If it steadies your mood, it's a real need.",
            "You'll use it, and not just once.",
            "Your happiness deserves to be taken seriously.",
            "A small investment with long-lasting satisfaction.",
            "It reduces future back-and-forth indecision.",
            "Sometimes, liking it is the best reason.",
            "At this stage, it really fits you.",
            "Not a crowd purchase; it's your choice.",
            "You've weighed the pros and cons; now enjoy the decision.",
            "It will be a small bright spot in your day.",
            "Material isn't the answer, but the right thing can ease the load.",
            "Compared to the emotional cost of hesitation, deciding is lighter.",
            "If the budget allows, it's gentle support for yourself.",
            "Life can't be all rational; save some romance for yourself.",
          ],
          hold: [
            "In three days, you'll forget it.",
            "Leave it in the cart and watch its mood.",
            "You're already tired today; no need to handle it now.",
            "Give your wallet some breathing room.",
            "You just need happiness, not necessarily this item.",
            "Five minutes of impulse, three months of paying it off. Not worth it.",
            "The desire of the moment is not the same as real need.",
            "When you see it next time, check if the liking still exists.",
            "If you need reasons to convince yourself, you probably don't need it.",
            "You already own something with similar function.",
            "The right treasure won't disappear if you wait a few days.",
            "Not buying now is a stronger kind of self-control.",
            "Turn the impulse into savings; it will feel safer.",
            "Being rational is a bit cooler than short-lived satisfaction.",
            "You're not missing out; you're filtering for better choices.",
            "What you want isn't it, it's the small emotional comfort right now.",
            "What truly suits you won't only appear in this moment.",
            "Save your liking for the next thing truly worth it.",
            "The brief rush fades, but the expense remains.",
            "You're not restraining yourself; you're protecting yourself.",
            "Decide after your mood settles; you'll like that choice more.",
            "When you have to persuade yourself to buy, the answer is clear.",
            "Pausing rationally doesn't stop you from loving life.",
            "Turning impulse into savings is a gentle kind of strength.",
            "Not buying today still leaves you with the choice.",
            "Right now you need rest, not spending.",
            "Not buying is also respect for yourself.",
            "Sometimes skipping a purchase is leaving safety for the future.",
            "You're not missing out; you're controlling the pace.",
            "Reason isn't cold; it's gently carrying pressure for you.",
          ],
        },
      },
      fish: {
        title: "Cyber Wooden Fish",
        desc: "Tap once, bugs walk away.",
        cta: "Tap",
        modes: ["Bugs away", "Scope stable", "Meetings short", "Ideas flow"],
        responses: ["Merit +1", "Noise muted", "Bug left", "Breath steadier"],
        counterLabel: "Merit today",
      },
      fortune: {
        title: "Daily Fortune",
        desc: "A gentle, healing mini forecast.",
        cta: "Refresh",
        loading: "Tuning into your energy…",
        fields: {
          energy: "Energy",
          luckyColor: "Lucky color",
          luckyItem: "Lucky pick",
          keyword: "Keyword",
        },
        pool: [
          {
            title: "Soft Bounce Back",
            keyword: "Slow tempo",
            energy: "72%",
            luckyColor: "Cream white",
            colorHex: "#f3ede4",
            luckyItem: "Light knit",
            note: "One small win is enough to keep you steady.",
          },
          {
            title: "Tiny Luck Nearby",
            keyword: "Hope rising",
            energy: "81%",
            luckyColor: "Apricot",
            colorHex: "#f2d58d",
            luckyItem: "Canvas sneakers",
            note: "Start with what you like. Momentum follows.",
          },
          {
            title: "Quiet Momentum",
            keyword: "Steady build",
            energy: "66%",
            luckyColor: "Mist blue",
            colorHex: "#b7c8d4",
            luckyItem: "Crisp shirt",
            note: "Your pace is the right pace today.",
          },
          {
            title: "Gentle Lift",
            keyword: "Mood warming",
            energy: "78%",
            luckyColor: "Coral pink",
            colorHex: "#f2b5aa",
            luckyItem: "Knit cardigan",
            note: "Give yourself the care you give others.",
          },
          {
            title: "Focus Bubble",
            keyword: "Flow state",
            energy: "84%",
            luckyColor: "Latte brown",
            colorHex: "#c8a489",
            luckyItem: "Leather mini bag",
            note: "Do 40 minutes of focus, then reset.",
          },
          {
            title: "Soft Guard",
            keyword: "Gentle heart",
            energy: "70%",
            luckyColor: "Mint green",
            colorHex: "#bfe4d0",
            luckyItem: "Light trench",
            note: "Protect your energy and it will protect you.",
          },
        ],
      },
      date: {
        title: "Date Destination",
        desc: "Type a location and draw today's date spot.",
        placeholder: " e.g. [Changshu], [Suzhou Center]...",
        cta: "Spin",
        rolling: "Spinning…",
        slotLabel: "Today picks",
        slotHint: "Waiting for the pointer to stop",
        resultLabel: "Suggestion",
        prefix: "Go to ",
        resultHint: "Your date suggestion will show up here.",
        poiTitle: "Nearby ideas",
        poiHint: "After spinning, you'll get real places within 20km.",
        poiLoading: "Finding date spots within 20km…",
        poiEmpty: "No matches within 20km. Try a different place.",
        poiError: "Search failed. Try a different location.",
        poiMissingKey: "Missing Amap key. Unable to load nearby places.",
        poiUnknown: "Address pending",
        poiRadius: "20km",
        categories: [
          { label: "Rooftop bar", suffix: " for a rooftop toast", keywords: "酒吧" },
          { label: "Riverside park", suffix: " for a riverside walk", keywords: "公园" },
          { label: "Indie bookstore", suffix: " for a cozy bookstore browse", keywords: "书店" },
          { label: "Art museum", suffix: " to catch a fresh exhibition", keywords: "美术馆" },
          { label: "Night market", suffix: " for a night market food stroll", keywords: "夜市" },
          { label: "Retro cinema", suffix: " to watch a classic film", keywords: "电影院" },
          { label: "Hidden cafe", suffix: " for a slow coffee chat", keywords: "咖啡馆" },
          { label: "Garden bistro", suffix: " for a window-side dinner", keywords: "餐厅" },
          { label: "Aquarium", suffix: " to drift through blue lights", keywords: "水族馆" },
          { label: "Weekend market", suffix: " to pick up tiny treasures", keywords: "市集" },
          { label: "Arcade", suffix: " for a playful arcade round", keywords: "游戏厅" },
          { label: "City overlook", suffix: " to catch the night view", keywords: "观景台" },
        ],
      },
      outfit: {
        title: "Outfit Today",
        desc: "Weather-aware outfit ideas with zero brainpower.",
        location: {
          title: "Location & Weather",
          use: "Use my location",
          manualLabel: "City",
          manualPlaceholder: "Enter a city",
          manualBtn: "Check",
          status: {
            idle: "Not located",
            locating: "Locating…",
            loading: "Loading weather…",
            searching: "Searching city…",
            ready: "Weather ready",
            denied: "Location permission denied",
            unavailable: "Location not supported",
            error: "Failed to fetch",
          },
          unknown: "Unknown place",
        },
        weather: {
          label: "Current weather",
          temperature: "Temp",
          wind: "Wind",
        },
        gender: {
          label: "Gender",
          options: [
            { id: "female", label: "Women" },
            { id: "male", label: "Men" },
          ],
        },
        style: {
          label: "Occasion",
          options: [
            { id: "commute", label: "Commute" },
            { id: "casual", label: "Casual" },
            { id: "sport", label: "Sport" },
            { id: "date", label: "Date" },
            { id: "home", label: "Home" },
          ],
        },
        wants: {
          label: "Want to wear",
          options: [
            { id: "tee", label: "T-shirt" },
            { id: "shirt", label: "Shirt" },
            { id: "hoodie", label: "Hoodie" },
            { id: "knit", label: "Knit" },
            { id: "jacket", label: "Jacket" },
            { id: "trousers", label: "Trousers" },
            { id: "shorts", label: "Shorts" },
            { id: "skirt", label: "Skirt" },
            { id: "dress", label: "Dress" },
            { id: "sneakers", label: "Sneakers" },
          ],
        },
        suggestions: {
          title: "Suggestions",
          empty: "Grab the weather first and I'll build your list.",
          preference: "Prefer",
          stylePrefix: "Scene",
        },
      },
      excuse: {
        title: "Exit Excuse",
        desc: "Absurd yet coherent. Pressure down.",
        cta: "Generate",
        copy: "Copy",
        copied: "Copied",
        default: "Click to generate a believable excuse.",
        pool: [
          "Network slowed down. Checking the router mood.",
          "Syncing requirements with a teammate.",
          "Docs are loading. Giving them 3 minutes.",
          "Keyboard got warm. Cooling down hands.",
          "Aligning goals. Brain warming up.",
        ],
      },
      persona: {
        title: "Today Persona",
        desc: "A light label for today.",
        cta: "Draw again",
        default: {
          title: "Pending",
          icon: "🎴",
          desc: "Card is shuffling.",
        },
        pool: [
          { title: "Retreat Drum Artist", icon: "🥁", desc: "When in doubt, retreat with style." },
          { title: "Human Coffee Filter", icon: "☕", desc: "Caffeine is the bloodstream." },
          { title: "Paid Restroom Consultant", icon: "🧻", desc: "Ideas live in the quiet booth." },
          { title: "Meeting Vibe Tuner", icon: "🎛️", desc: "Keeps awkwardness in check." },
          { title: "Idea Catcher", icon: "🪄", desc: "Captures sparks before they fade." },
          { title: "Excuse Curator", icon: "🗂️", desc: "Few reasons, all elegant." },
          { title: "Noise Reducer", icon: "🫧", desc: "Softens the mental static." },
          { title: "Efficiency Cosplayer", icon: "🧠", desc: "Looks busy, stays steady." },
        ],
      },
    },
  },
};

const TOOL_CARDS = [
  {
    id: "dinner",
    icon: Utensils,
    glow: "rgba(255, 214, 187, 0.75)",
    glow2: "rgba(255, 244, 232, 0.9)",
    iconBg: "rgba(237, 178, 140, 0.9)",
    iconInk: "#b2522c",
  },
  {
    id: "buy",
    icon: ShoppingBag,
    glow: "rgba(212, 229, 255, 0.75)",
    glow2: "rgba(236, 244, 255, 0.9)",
    iconBg: "rgba(170, 203, 245, 0.9)",
    iconInk: "#355b93",
  },
  {
    id: "fish",
    icon: Bell,
    glow: "rgba(255, 236, 201, 0.75)",
    glow2: "rgba(255, 249, 236, 0.9)",
    iconBg: "rgba(250, 210, 146, 0.9)",
    iconInk: "#a36f14",
  },
  {
    id: "date",
    icon: MapPin,
    glow: "rgba(255, 215, 227, 0.75)",
    glow2: "rgba(255, 238, 244, 0.9)",
    iconBg: "rgba(248, 183, 201, 0.9)",
    iconInk: "#9b2c4c",
  },
  {
    id: "fortune",
    icon: MoonStar,
    glow: "rgba(255, 233, 196, 0.75)",
    glow2: "rgba(255, 246, 224, 0.9)",
    iconBg: "rgba(245, 211, 151, 0.9)",
    iconInk: "#9a6b1c",
  },
  {
    id: "outfit",
    icon: Shirt,
    glow: "rgba(204, 244, 227, 0.75)",
    glow2: "rgba(232, 252, 244, 0.9)",
    iconBg: "rgba(170, 225, 204, 0.9)",
    iconInk: "#2f6a57",
  },
  {
    id: "excuse",
    icon: MessageCircle,
    glow: "rgba(200, 236, 248, 0.75)",
    glow2: "rgba(232, 248, 255, 0.9)",
    iconBg: "rgba(158, 216, 238, 0.9)",
    iconInk: "#2f6e86",
  },
  {
    id: "persona",
    icon: BadgeCheck,
    glow: "rgba(236, 214, 242, 0.75)",
    glow2: "rgba(246, 236, 250, 0.9)",
    iconBg: "rgba(206, 174, 224, 0.9)",
    iconInk: "#6a3b86",
  },
  {
    id: "coming",
    icon: Grid2X2,
    glow: "rgba(230, 230, 230, 0.7)",
    glow2: "rgba(245, 245, 245, 0.9)",
    iconBg: "rgba(210, 210, 210, 0.9)",
    iconInk: "#7b7b7b",
  },
];

const WEATHER_THEMES = {
  clear: {
    icon: "☀️",
    label: { zh: "晴朗", en: "Clear" },
    tip: {
      zh: "日晒偏强，记得防晒或带墨镜。",
      en: "Sunny skies: consider sunscreen or shades.",
    },
  },
  cloudy: {
    icon: "☁️",
    label: { zh: "多云", en: "Cloudy" },
    tip: {
      zh: "光线柔和，浅色系更显干净。",
      en: "Soft light today, lighter colors feel crisp.",
    },
  },
  fog: {
    icon: "🌫️",
    label: { zh: "有雾", en: "Foggy" },
    tip: {
      zh: "湿冷感明显，注意加一层。",
      en: "Feels damp and cool, add a layer.",
    },
  },
  drizzle: {
    icon: "🌦️",
    label: { zh: "小雨", en: "Drizzle" },
    tip: {
      zh: "带伞或轻薄防水外套。",
      en: "Bring a compact umbrella or light shell.",
    },
  },
  rain: {
    icon: "🌧️",
    label: { zh: "下雨", en: "Rain" },
    tip: {
      zh: "建议防水外套和耐水鞋。",
      en: "Waterproof outerwear and shoes help.",
    },
  },
  snow: {
    icon: "❄️",
    label: { zh: "下雪", en: "Snow" },
    tip: {
      zh: "注意防滑鞋和保暖配件。",
      en: "Insulated boots and warm accessories.",
    },
  },
  thunder: {
    icon: "⛈️",
    label: { zh: "雷雨", en: "Thunderstorm" },
    tip: {
      zh: "尽量轻便，记得雨具。",
      en: "Keep it light and carry rain gear.",
    },
  },
  unknown: {
    icon: "🌤️",
    label: { zh: "天气多变", en: "Changeable" },
    tip: {
      zh: "备一件外套更安心。",
      en: "Bring a light layer just in case.",
    },
  },
};

const OUTFIT_BASE = {
  zh: {
    hot: {
      female: ["轻薄吊带/短袖 + 半裙", "亚麻连衣裙 + 凉鞋"],
      male: ["短袖T恤 + 透气短裤", "薄衬衫 + 九分裤"],
    },
    warm: {
      female: ["短袖衬衫 + 半裙", "薄针织 + 轻薄长裤"],
      male: ["短袖衬衫 + 九分裤", "薄T + 轻薄外套"],
    },
    mild: {
      female: ["长袖T + 薄外套", "针织衫 + 长裙"],
      male: ["长袖T + 轻薄夹克", "衬衫 + 休闲裤"],
    },
    cool: {
      female: ["卫衣 + 风衣/夹克", "针织衫 + 长裤"],
      male: ["卫衣 + 外套", "针织衫 + 休闲裤"],
    },
    cold: {
      female: ["厚外套 + 保暖打底", "呢大衣/羽绒 + 长裤"],
      male: ["厚外套 + 抓绒内搭", "羽绒/棉服 + 厚裤"],
    },
    freeze: {
      female: ["羽绒服 + 保暖内衣 + 围巾手套", "加厚外套 + 雪地靴"],
      male: ["羽绒服 + 保暖内衣 + 围巾手套", "加厚外套 + 雪地靴"],
    },
  },
  en: {
    hot: {
      female: ["Light tank/tee + skirt", "Linen dress + sandals"],
      male: ["T-shirt + breathable shorts", "Short-sleeve shirt + cropped pants"],
    },
    warm: {
      female: ["Short-sleeve shirt + skirt", "Light knit + airy pants"],
      male: ["Short-sleeve shirt + chinos", "Light tee + thin jacket"],
    },
    mild: {
      female: ["Long-sleeve tee + light jacket", "Knit + midi skirt"],
      male: ["Long-sleeve tee + light jacket", "Shirt + relaxed pants"],
    },
    cool: {
      female: ["Hoodie + trench/jacket", "Knit + long pants"],
      male: ["Hoodie + jacket", "Sweater + casual pants"],
    },
    cold: {
      female: ["Thick coat + warm base", "Wool coat/down + pants"],
      male: ["Thick coat + fleece base", "Down jacket + heavy pants"],
    },
    freeze: {
      female: ["Down jacket + thermal base + scarf/gloves", "Puffer + winter boots"],
      male: ["Down jacket + thermal base + scarf/gloves", "Puffer + winter boots"],
    },
  },
};

const OUTFIT_STYLE_TIPS = {
  zh: {
    commute: "通勤：利落层次，外套别太厚。",
    casual: "休闲：舒适为主，版型放松一点。",
    sport: "运动：速干弹力面料更轻松。",
    date: "约会：加一点色彩或配饰。",
    home: "宅家：柔软面料 + 轻松配色。",
  },
  en: {
    commute: "Commute: clean layers, keep it neat.",
    casual: "Casual: prioritize comfort and relaxed fits.",
    sport: "Sport: breathable, stretchy fabrics feel best.",
    date: "Date: add a little color or accessory.",
    home: "Home: soft fabrics and easy colors.",
  },
};

const OUTFIT_STYLE_BASE = {
  zh: {
    commute: {
      female: ["垂感衬衫 + 直筒裤", "短外套 + 乐福鞋"],
      male: ["衬衫 + 直筒休闲裤", "轻薄西装外套 + 皮鞋"],
    },
    casual: {
      female: ["宽松T + 牛仔裤", "针织外套 + 运动鞋"],
      male: ["宽松T + 牛仔裤", "卫衣 + 运动鞋"],
    },
    sport: {
      female: ["速干上衣 + 运动短裤", "紧身打底 + 轻薄风衣"],
      male: ["速干T + 运动短裤", "运动外套 + 跑鞋"],
    },
    date: {
      female: ["修身针织 + 半裙", "连衣裙 + 乐福鞋"],
      male: ["衬衫 + 休闲裤", "针织上衣 + 皮鞋"],
    },
    home: {
      female: ["家居套装 + 软拖", "宽松卫衣 + 瑜伽裤"],
      male: ["家居套装 + 软拖", "宽松卫衣 + 休闲短裤"],
    },
  },
  en: {
    commute: {
      female: ["Flowy shirt + straight pants", "Short jacket + loafers"],
      male: ["Crisp shirt + straight pants", "Light blazer + leather shoes"],
    },
    casual: {
      female: ["Relaxed tee + denim", "Light knit + sneakers"],
      male: ["Relaxed tee + denim", "Hoodie + sneakers"],
    },
    sport: {
      female: ["Quick-dry top + shorts", "Base layer + light shell"],
      male: ["Quick-dry tee + shorts", "Training jacket + runners"],
    },
    date: {
      female: ["Fitted knit + skirt", "Dress + loafers"],
      male: ["Shirt + tapered pants", "Knit top + leather shoes"],
    },
    home: {
      female: ["Lounge set + slides", "Oversized hoodie + leggings"],
      male: ["Lounge set + slides", "Relaxed hoodie + shorts"],
    },
  },
};

const OUTFIT_WANT_TIPS = {
  zh: {
    tee: "想穿T恤：外搭薄衬衫或防晒开衫。",
    shirt: "想穿衬衫：内搭背心更清爽。",
    hoodie: "想穿卫衣：下装选直筒更利落。",
    knit: "想穿针织：加一层内搭更舒适。",
    jacket: "想穿外套：内搭尽量薄一点。",
    trousers: "想穿长裤：垂感面料更显利落。",
    shorts: "想穿短裤：配长袜更休闲。",
    skirt: "想穿半裙：上衣选短款更有比例。",
    dress: "想穿连衣裙：带一件轻外套。",
    sneakers: "想穿运动鞋：整体偏休闲更和谐。",
  },
  en: {
    tee: "Want a tee? Add a light overshirt or cardigan.",
    shirt: "Want a shirt? A tank base keeps it airy.",
    hoodie: "Want a hoodie? Pair with straight pants.",
    knit: "Want a knit? Add a thin base layer.",
    jacket: "Want a jacket? Keep the inner layer light.",
    trousers: "Want trousers? Drape-friendly fabrics look sharp.",
    shorts: "Want shorts? Crew socks make it easygoing.",
    skirt: "Want a skirt? A cropped top balances proportions.",
    dress: "Want a dress? Bring a light outer layer.",
    sneakers: "Want sneakers? Keep the look casual.",
  },
};

const OUTFIT_WIND_TIPS = {
  zh: "风有点大，外套要防风。",
  en: "Wind is up, grab a windbreaker.",
};

const getWeatherKey = (code) => {
  if (code === 0) return "clear";
  if ([1, 2, 3].includes(code)) return "cloudy";
  if ([45, 48].includes(code)) return "fog";
  if ([51, 53, 55, 56, 57].includes(code)) return "drizzle";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "rain";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";
  if ([95, 96, 99].includes(code)) return "thunder";
  return "unknown";
};

const getTempBand = (temp) => {
  if (temp >= 30) return "hot";
  if (temp >= 24) return "warm";
  if (temp >= 18) return "mild";
  if (temp >= 10) return "cool";
  if (temp >= 0) return "cold";
  return "freeze";
};

const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];
const classNames = (...classes) => classes.filter(Boolean).join(" ");
const getUniqueId = () =>
  `${Date.now()}-${Math.random().toString(16).slice(2)}`;
const AMAP_KEY = import.meta.env.VITE_AMAP_KEY;
const formatDistance = (distance) => {
  const value = Number(distance);
  if (!Number.isFinite(value)) return "";
  if (value < 1000) return `${Math.round(value)}m`;
  return `${(value / 1000).toFixed(1)}km`;
};

const ToolContainer = ({ toolId, content, onBack, labels }) => {
  if (!toolId) return null;
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-[var(--bg)]/85 px-4 py-10 backdrop-blur-sm"
      onClick={onBack}
    >
      <div
        className="card w-full max-w-4xl p-6 md:p-8 animate-fadeUp max-h-[90vh] overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-start gap-4">
          <button
            type="button"
            onClick={onBack}
            className="btn-ghost active:scale-95"
          >
            ← {labels.back}
          </button>
        </div>
        <div className="mt-6 max-h-[70vh] overflow-y-auto pr-1">{content}</div>
      </div>
    </div>
  );
};

function App() {
  const [language, setLanguage] = useState("zh");
  const [theme, setTheme] = useState("warm");
  const [activeTool, setActiveTool] = useState(null);

  const t = TRANSLATIONS[language];

  const [menuItems, setMenuItems] = useState(t.tools.dinner.defaultMenu);
  const [menuInput, setMenuInput] = useState("");
  const [menuTouched, setMenuTouched] = useState(false);
  const [rollingItem, setRollingItem] = useState("");
  const [dinnerResult, setDinnerResult] = useState("");
  const [isRolling, setIsRolling] = useState(false);

  const [buyDecision, setBuyDecision] = useState(null);
  const [isBuyThinking, setIsBuyThinking] = useState(false);

  const [merit, setMerit] = useState(0);
  const [fishModeIndex, setFishModeIndex] = useState(0);
  const [fishPops, setFishPops] = useState([]);

  const [fortune, setFortune] = useState(null);
  const [fortuneSeed, setFortuneSeed] = useState(0);
  const [dateLocation, setDateLocation] = useState("");
  const [dateResult, setDateResult] = useState(null);
  const [dateRolling, setDateRolling] = useState(null);
  const [dateResultLocation, setDateResultLocation] = useState("");
  const [dateSeed, setDateSeed] = useState(0);
  const [isDateSpinning, setIsDateSpinning] = useState(false);
  const [datePlaces, setDatePlaces] = useState([]);
  const [datePlacesStatus, setDatePlacesStatus] = useState("idle");
  const [datePlacesError, setDatePlacesError] = useState("");

  const [excuse, setExcuse] = useState(t.tools.excuse.default);
  const [isExcuseRolling, setIsExcuseRolling] = useState(false);
  const [excuseCopied, setExcuseCopied] = useState(false);
  const [persona, setPersona] = useState(t.tools.persona.default);
  const [personaSeed, setPersonaSeed] = useState(0);
  const [outfitGender, setOutfitGender] = useState("female");
  const [outfitStyle, setOutfitStyle] = useState("commute");
  const [outfitWants, setOutfitWants] = useState([]);
  const [outfitStatus, setOutfitStatus] = useState("idle");
  const [outfitLocation, setOutfitLocation] = useState(null);
  const [outfitWeather, setOutfitWeather] = useState(null);
  const [outfitCityQuery, setOutfitCityQuery] = useState("");

  const excuseIntervalRef = useRef(null);
  const excuseCopyTimeoutRef = useRef(null);
  const dateSpinIntervalRef = useRef(null);
  const dateSearchRef = useRef(0);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [theme, language]);

  useEffect(() => {
    if (!menuTouched) {
      setMenuItems(t.tools.dinner.defaultMenu);
    }
    if (excuseIntervalRef.current) {
      clearInterval(excuseIntervalRef.current);
      excuseIntervalRef.current = null;
    }
    if (excuseCopyTimeoutRef.current) {
      clearTimeout(excuseCopyTimeoutRef.current);
      excuseCopyTimeoutRef.current = null;
    }
    setExcuse(t.tools.excuse.default);
    setIsExcuseRolling(false);
    setExcuseCopied(false);
    setPersona(t.tools.persona.default);
    setPersonaSeed(0);
    setBuyDecision(null);
    setIsBuyThinking(false);
    setRollingItem("");
    setDinnerResult("");
    if (dateSpinIntervalRef.current) {
      clearInterval(dateSpinIntervalRef.current);
      dateSpinIntervalRef.current = null;
    }
    setDateLocation("");
    setDateResult(null);
    setDateRolling(null);
    setDateResultLocation("");
    setDateSeed(0);
    setIsDateSpinning(false);
    setDatePlaces([]);
    setDatePlacesStatus("idle");
    setDatePlacesError("");
  }, [language, menuTouched, t]);

  useEffect(() => {
    return () => {
      if (excuseIntervalRef.current) {
        clearInterval(excuseIntervalRef.current);
      }
      if (excuseCopyTimeoutRef.current) {
        clearTimeout(excuseCopyTimeoutRef.current);
      }
      if (dateSpinIntervalRef.current) {
        clearInterval(dateSpinIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (activeTool === "fortune") {
      setFortune(getRandomItem(t.tools.fortune.pool));
      setFortuneSeed((prev) => prev + 1);
    } else {
      setFortune(null);
    }
  }, [activeTool, t]);

  useEffect(() => {
    if (activeTool !== "date" && dateSpinIntervalRef.current) {
      clearInterval(dateSpinIntervalRef.current);
      dateSpinIntervalRef.current = null;
      setIsDateSpinning(false);
    }
  }, [activeTool]);

  useEffect(() => {
    if (activeTool === "persona") {
      setPersona(getRandomItem(t.tools.persona.pool));
      setPersonaSeed((prev) => prev + 1);
    }
  }, [activeTool, t]);

  const handleAddMenu = () => {
    const items = menuInput
      .split(/[,，\n]+/)
      .map((item) => item.trim())
      .filter(Boolean);
    if (!items.length) return;
    setMenuItems((prev) => [...new Set([...prev, ...items])]);
    setMenuInput("");
    setMenuTouched(true);
  };

  const handleRemoveMenu = (item) => {
    setMenuItems((prev) => prev.filter((menu) => menu !== item));
    setMenuTouched(true);
  };

  const handleDinnerSpin = () => {
    if (isRolling || menuItems.length === 0) return;
    setIsRolling(true);
    setDinnerResult("");
    let ticks = 0;
    const tickLimit = 15;
    const interval = setInterval(() => {
      const pick = getRandomItem(menuItems);
      setRollingItem(pick);
      ticks += 1;
      if (ticks >= tickLimit) {
        clearInterval(interval);
        setDinnerResult(pick);
        setIsRolling(false);
      }
    }, 80);
  };

  const handleMenuReset = () => {
    setMenuItems(t.tools.dinner.defaultMenu);
    setMenuInput("");
    setMenuTouched(false);
  };

  const handleBuyDecision = () => {
    if (isBuyThinking) return;
    setIsBuyThinking(true);
    setBuyDecision(null);
    setTimeout(() => {
      const buy = Math.random() > 0.5;
      const reasonPool = buy ? t.tools.buy.reasons.buy : t.tools.buy.reasons.hold;
      setBuyDecision({
        result: buy ? t.tools.buy.buy : t.tools.buy.hold,
        reason: getRandomItem(reasonPool),
        tone: buy ? "buy" : "hold",
      });
      setIsBuyThinking(false);
    }, 600);
  };

  const fetchDatePlaces = async ({ location, keyword }) => {
    const query = location.trim();
    if (!query) return;
    const requestId = Date.now();
    dateSearchRef.current = requestId;
    if (!AMAP_KEY) {
      setDatePlaces([]);
      setDatePlacesStatus("error");
      setDatePlacesError(t.tools.date.poiMissingKey);
      return;
    }
    setDatePlacesStatus("loading");
    setDatePlacesError("");
    setDatePlaces([]);
    try {
      const geoUrl = new URL("https://restapi.amap.com/v3/geocode/geo");
      geoUrl.searchParams.set("address", query);
      geoUrl.searchParams.set("key", AMAP_KEY);
      const geoResponse = await fetch(geoUrl.toString());
      if (!geoResponse.ok) {
        throw new Error("Geo request failed");
      }
      const geoData = await geoResponse.json();
      if (geoData?.status !== "1") {
        throw new Error("Geo status error");
      }
      const geoLocation = geoData?.geocodes?.[0]?.location;
      if (!geoLocation) {
        throw new Error("No geocode");
      }
      const aroundUrl = new URL("https://restapi.amap.com/v3/place/around");
      aroundUrl.searchParams.set("key", AMAP_KEY);
      aroundUrl.searchParams.set("location", geoLocation);
      aroundUrl.searchParams.set("radius", "20000");
      aroundUrl.searchParams.set("sortrule", "distance");
      aroundUrl.searchParams.set("offset", "8");
      aroundUrl.searchParams.set("page", "1");
      if (keyword) {
        aroundUrl.searchParams.set("keywords", keyword);
      }
      const aroundResponse = await fetch(aroundUrl.toString());
      if (!aroundResponse.ok) {
        throw new Error("Around request failed");
      }
      const aroundData = await aroundResponse.json();
      if (aroundData?.status !== "1") {
        throw new Error("Around status error");
      }
      const pois = Array.isArray(aroundData?.pois) ? aroundData.pois : [];
      const places = pois
        .map((poi) => {
          const addressParts = [poi.address, poi.adname, poi.cityname].filter(Boolean);
          return {
            id: poi.id || `${poi.location}-${poi.name}`,
            name: poi.name,
            address: addressParts.join(" ") || t.tools.date.poiUnknown,
            distance: formatDistance(poi.distance),
          };
        })
        .filter((poi) => poi.name);
      if (dateSearchRef.current !== requestId) {
        return;
      }
      if (!places.length) {
        setDatePlacesStatus("empty");
        return;
      }
      setDatePlaces(places);
      setDatePlacesStatus("success");
    } catch (error) {
      if (dateSearchRef.current !== requestId) {
        return;
      }
      setDatePlaces([]);
      setDatePlacesStatus("error");
      setDatePlacesError(t.tools.date.poiError);
    }
  };

  const handleDateSpin = () => {
    const location = dateLocation.trim();
    if (!location || isDateSpinning) return;
    if (dateSpinIntervalRef.current) {
      clearInterval(dateSpinIntervalRef.current);
      dateSpinIntervalRef.current = null;
    }
    setIsDateSpinning(true);
    setDateResult(null);
    setDateResultLocation(location);
    setDatePlacesStatus("idle");
    setDatePlacesError("");
    setDatePlaces([]);
    let count = 0;
    const categories = t.tools.date.categories;
    const interval = setInterval(() => {
      const pick = getRandomItem(categories);
      setDateRolling(pick);
      count += 1;
      if (count >= 12) {
        clearInterval(interval);
        dateSpinIntervalRef.current = null;
        setDateResult(pick);
        setDateSeed((prev) => prev + 1);
        setIsDateSpinning(false);
        void fetchDatePlaces({ location, keyword: pick.keywords || pick.label });
      }
    }, 80);
    dateSpinIntervalRef.current = interval;
  };

  const handleFishTap = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const pop = {
      id: getUniqueId(),
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      text: getRandomItem(t.tools.fish.responses),
    };
    setMerit((prev) => prev + 1);
    setFishPops((prev) => [...prev, pop]);
    setTimeout(() => {
      setFishPops((prev) => prev.filter((item) => item.id !== pop.id));
    }, 900);
  };

  const handleExcuse = () => {
    if (isExcuseRolling) return;
    if (excuseIntervalRef.current) {
      clearInterval(excuseIntervalRef.current);
    }
    if (excuseCopyTimeoutRef.current) {
      clearTimeout(excuseCopyTimeoutRef.current);
    }
    setExcuseCopied(false);
    setExcuse(null);
    setIsExcuseRolling(true);
    let count = 0;
    const interval = setInterval(() => {
      setExcuse(getRandomItem(t.tools.excuse.pool));
      count += 1;
      if (count > 8) {
        clearInterval(interval);
        excuseIntervalRef.current = null;
        setIsExcuseRolling(false);
      }
    }, 50);
    excuseIntervalRef.current = interval;
  };

  const handleCopyExcuse = async () => {
    if (!excuse || isExcuseRolling) return;
    if (excuseCopyTimeoutRef.current) {
      clearTimeout(excuseCopyTimeoutRef.current);
    }
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(excuse);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = excuse;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setExcuseCopied(true);
      excuseCopyTimeoutRef.current = setTimeout(() => {
        setExcuseCopied(false);
      }, 2000);
    } catch (error) {
      setExcuseCopied(false);
    }
  };

  const handlePersona = () => {
    setPersona(getRandomItem(t.tools.persona.pool));
    setPersonaSeed((prev) => prev + 1);
  };

  const buildLocation = (place) => ({
    name: place?.name,
    admin1: place?.admin1,
    country: place?.country,
    latitude: place?.latitude,
    longitude: place?.longitude,
  });

  const fetchOutfitWeather = async (latitude, longitude, locationOverride) => {
    setOutfitStatus("loading");
    try {
      const weatherUrl = new URL("https://api.open-meteo.com/v1/forecast");
      weatherUrl.searchParams.set("latitude", latitude);
      weatherUrl.searchParams.set("longitude", longitude);
      weatherUrl.searchParams.set("current_weather", "true");
      weatherUrl.searchParams.set("timezone", "auto");

      const weatherResponse = await fetch(weatherUrl.toString());
      if (!weatherResponse.ok) {
        throw new Error("Weather request failed");
      }
      const weatherData = await weatherResponse.json();
      const currentWeather = weatherData?.current_weather;
      if (!currentWeather) {
        throw new Error("Weather data missing");
      }

      let resolvedLocation = locationOverride;
      if (!resolvedLocation) {
        try {
          const geoUrl = new URL("https://geocoding-api.open-meteo.com/v1/reverse");
          geoUrl.searchParams.set("latitude", latitude);
          geoUrl.searchParams.set("longitude", longitude);
          geoUrl.searchParams.set("count", "1");
          geoUrl.searchParams.set("language", language === "zh" ? "zh" : "en");
          const geoResponse = await fetch(geoUrl.toString());
          if (geoResponse.ok) {
            const geoData = await geoResponse.json();
            resolvedLocation = buildLocation(geoData?.results?.[0]);
          }
        } catch (error) {
          resolvedLocation = null;
        }
      }

      setOutfitLocation(
        resolvedLocation || {
          name: t.tools.outfit.location.unknown,
          latitude,
          longitude,
        }
      );
      setOutfitWeather({
        temperature: currentWeather.temperature,
        windspeed: currentWeather.windspeed,
        weathercode: currentWeather.weathercode,
        isDay: currentWeather.is_day,
      });
      setOutfitStatus("ready");
    } catch (error) {
      setOutfitStatus("error");
    }
  };

  const handleOutfitLocate = () => {
    if (!navigator.geolocation) {
      setOutfitStatus("unavailable");
      return;
    }
    setOutfitStatus("locating");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        void fetchOutfitWeather(latitude, longitude);
      },
      (error) => {
        setOutfitStatus(error.code === 1 ? "denied" : "error");
      },
      { enableHighAccuracy: false, timeout: 10000 }
    );
  };

  const handleOutfitCitySearch = async () => {
    const query = outfitCityQuery.trim();
    if (!query) return;
    setOutfitStatus("searching");
    try {
      const geoUrl = new URL("https://geocoding-api.open-meteo.com/v1/search");
      geoUrl.searchParams.set("name", query);
      geoUrl.searchParams.set("count", "1");
      geoUrl.searchParams.set("language", language === "zh" ? "zh" : "en");
      const geoResponse = await fetch(geoUrl.toString());
      if (!geoResponse.ok) {
        throw new Error("Geo request failed");
      }
      const geoData = await geoResponse.json();
      const place = geoData?.results?.[0];
      if (!place) {
        setOutfitStatus("error");
        return;
      }
      const location = buildLocation(place);
      void fetchOutfitWeather(place.latitude, place.longitude, location);
    } catch (error) {
      setOutfitStatus("error");
    }
  };

  const handleOutfitWantToggle = (id) => {
    setOutfitWants((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toolContent = useMemo(() => {
    if (!activeTool) return null;

    if (activeTool === "dinner") {
      const hasMenu = menuItems.length > 0;
      const isIdle = !dinnerResult && !rollingItem;
      const displayText = hasMenu
        ? dinnerResult || rollingItem || "?"
        : t.tools.dinner.empty;
      return (
        <div className="space-y-6 md:space-y-8">
          <div className="relative text-center">
            <h2 className="mt-3 text-2xl font-black tracking-tighter md:text-3xl">
              {t.tools.dinner.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)] font-serif">
              {t.tools.dinner.desc}
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className={classNames("dinner-note-wrap", isRolling && "is-rolling")}>
              <div className={classNames("dinner-note-base", isRolling && "animate-pulse")} />
              <div className="dinner-note-card">
                <p
                  className={classNames(
                    "dinner-note-text",
                    isRolling && "blur-[2px]",
                    isIdle && "text-[var(--muted-strong)]"
                  )}
                >
                  {displayText}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="btn-primary active:scale-95"
              onClick={handleDinnerSpin}
              disabled={isRolling || menuItems.length === 0}
            >
              {isRolling ? (
                <>
                  <Brain size={16} className="animate-spin" />
                  {t.tools.dinner.rolling}
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  {t.tools.dinner.cta}
                </>
              )}
            </button>
          </div>
          <div className="menu-pool">
            <div className="menu-pool-head">
              <span className="menu-pool-title">{t.tools.dinner.poolLabel}</span>
              <button
                type="button"
                className="menu-reset"
                onClick={handleMenuReset}
                disabled={!menuItems.length}
              >
                {t.tools.dinner.reset}
              </button>
            </div>
            <div className="menu-pool-list">
              {menuItems.length ? (
                menuItems.map((item) => (
                  <span key={item} className="pill">
                    {item}
                    <button
                      type="button"
                      onClick={() => handleRemoveMenu(item)}
                      className="rounded-full p-1 text-[var(--muted)] transition hover:text-[var(--accent-strong)] active:scale-95"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))
              ) : (
                <p className="text-xs text-[var(--muted)]">{t.tools.dinner.empty}</p>
              )}
            </div>
            <div className="menu-pool-input">
              <input
                className="menu-field"
                value={menuInput}
                onChange={(event) => setMenuInput(event.target.value)}
                placeholder={t.tools.dinner.placeholder}
              />
              <button
                type="button"
                className="menu-add-btn"
                onClick={handleAddMenu}
                aria-label={t.tools.dinner.add}
              >
                <Plus size={16} />
              </button>
            </div>
            <p className="menu-tip">{t.tools.dinner.tips}</p>
          </div>
        </div>
      );
    }

    if (activeTool === "buy") {
      const buyTone = buyDecision?.tone;
      const decisionColor =
        buyTone === "buy" ? "text-emerald-500" : buyTone === "hold" ? "text-rose-500" : "";
      const decisionIcon =
        buyTone === "buy" ? <Smile size={38} /> : buyTone === "hold" ? <Frown size={38} /> : null;
      const decisionText = buyDecision?.result || "?";
      const reasonText = isBuyThinking
        ? t.tools.buy.thinking
        : buyDecision
          ? buyDecision.reason
          : t.tools.buy.hint;
      return (
        <div className="space-y-6">
          <div className="relative text-center">
            <h2 className="buy-title">{t.tools.buy.title}</h2>
          </div>
          <div className="buy-panel">
            <div className={classNames("buy-face", decisionColor, isBuyThinking && "animate-pulse")}>
              {decisionIcon || <span className="buy-face-placeholder">?</span>}
            </div>
            <p className={classNames("buy-decision", decisionColor)}>{decisionText}</p>
            <p className="buy-reason">“{reasonText}”</p>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="btn-primary buy-cta active:scale-95"
              onClick={handleBuyDecision}
              disabled={isBuyThinking}
            >
              {t.tools.buy.cta}
            </button>
          </div>
        </div>
      );
    }

    if (activeTool === "fish") {
      return (
        <div className="space-y-4 text-center">
          <div className="relative">
            <h2 className="mt-3 text-2xl font-black tracking-tighter">
              {t.tools.fish.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)] font-serif">
              {t.tools.fish.desc}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {t.tools.fish.modes.map((mode, index) => (
              <button
                key={mode}
                type="button"
                onClick={() => setFishModeIndex(index)}
                className={classNames(
                  "rounded-full px-3 py-1 text-xs transition active:scale-95",
                  fishModeIndex === index
                    ? "bg-[var(--accent)] text-white"
                    : "border border-[var(--line)] text-[var(--muted)] hover:bg-[var(--accent-soft)]"
                )}
              >
                {mode}
              </button>
            ))}
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={handleFishTap}
              className="fish-drum"
            >
              {fishPops.map((pop) => (
                <span
                  key={pop.id}
                  className="fish-pop"
                  style={{ left: pop.x, top: pop.y }}
                >
                  {pop.text}
                </span>
              ))}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent-soft)] text-3xl">
                🔔
              </div>
              <div>
                <p className="text-sm text-[var(--muted)]">{t.tools.fish.modes[fishModeIndex]}</p>
                <p className="text-lg font-semibold">{t.tools.fish.cta}</p>
              </div>
            </button>
          </div>
          <div className="flex items-center justify-between text-sm text-[var(--muted)]">
            <span>
              {t.tools.fish.counterLabel}: <strong className="text-[var(--ink)]">{merit}</strong>
            </span>
            <span>{t.tools.fish.modes[fishModeIndex]}</span>
          </div>
        </div>
      );
    }

    if (activeTool === "date") {
      const locationText = dateLocation.trim();
      const isLocationReady = Boolean(locationText);
      const activePick = dateResult || dateRolling;
      const resultLocation = dateResultLocation || locationText;
      const resultText =
        dateResult && resultLocation
          ? `${t.tools.date.prefix}${resultLocation}${dateResult.suffix}`
          : "";
      return (
        <div className="space-y-6">
          <div className="relative text-center">
            <h2 className="mt-3 text-2xl font-black tracking-tighter">
              {t.tools.date.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)] font-serif">
              {t.tools.date.desc}
            </p>
          </div>
          <div className="fortune-stage">
            <div className="date-card border-2 border-dashed border-rose-200 bg-rose-50">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-rose-600">
                    <MapPin size={16} />
                    <span className="text-xs font-semibold uppercase tracking-[0.35em]">
                      {t.tools.date.title}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-rose-500/80">
                    {t.tools.date.desc}
                  </p>
                </div>
                <span className="chip text-rose-500">{t.tools.date.resultLabel}</span>
              </div>
              <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center">
                <div className="relative flex-1">
                  <MapPin
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-300"
                  />
                  <input
                    className="date-input w-full rounded-full border border-rose-200 bg-white/80 py-2.5 pl-10 pr-4 text-sm text-rose-700 placeholder:text-rose-300 focus:border-rose-200 focus:ring-2 focus:ring-rose-100 transition-all"
                    value={dateLocation}
                    onChange={(event) => setDateLocation(event.target.value)}
                    placeholder={t.tools.date.placeholder}
                  />
                </div>
                <button
                  type="button"
                  className="date-cta active:scale-95"
                  onClick={handleDateSpin}
                  disabled={!isLocationReady || isDateSpinning}
                >
                  <Sparkles size={16} className={isDateSpinning ? "animate-spin" : ""} />
                  {isDateSpinning ? t.tools.date.rolling : t.tools.date.cta}
                </button>
              </div>
              <div className="mt-4 space-y-3">
                <div
                  className={classNames(
                    "date-slot transition-all",
                    isDateSpinning && "blur-[1px] scale-95"
                  )}
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-rose-400">
                    {t.tools.date.slotLabel}
                  </p>
                  <p
                    className={classNames(
                      "mt-2 text-xl font-bold text-rose-600",
                      isDateSpinning && "animate-pulse"
                    )}
                  >
                    {activePick?.label || t.tools.date.slotHint}
                  </p>
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-rose-400">
                    {t.tools.date.resultLabel}
                  </p>
                  {dateResult && resultText ? (
                    <div key={dateSeed} className="date-result animate-popIn text-rose-600">
                      {resultText}
                    </div>
                  ) : (
                    <p className="mt-2 text-xs text-rose-400">
                      {t.tools.date.resultHint}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-5 date-places">
                <div className="date-places-head">
                  <span className="text-[0.65rem] uppercase tracking-[0.3em] text-rose-400">
                    {t.tools.date.poiTitle}
                  </span>
                  <span className="chip text-rose-500">{t.tools.date.poiRadius}</span>
                </div>
                {datePlacesStatus === "idle" && (
                  <p className="text-xs text-rose-400">{t.tools.date.poiHint}</p>
                )}
                {datePlacesStatus === "loading" && (
                  <p className="text-xs text-rose-500/80">{t.tools.date.poiLoading}</p>
                )}
                {datePlacesStatus === "empty" && (
                  <p className="text-xs text-rose-400">{t.tools.date.poiEmpty}</p>
                )}
                {datePlacesStatus === "error" && (
                  <p className="text-xs text-rose-400">
                    {datePlacesError || t.tools.date.poiError}
                  </p>
                )}
                {datePlacesStatus === "success" && (
                  <div className="date-places-grid">
                    {datePlaces.map((place) => (
                      <div key={place.id} className="date-place">
                        <div className="date-place-head">
                          <p className="date-place-name">{place.name}</p>
                          {place.distance && (
                            <span className="date-place-distance">{place.distance}</span>
                          )}
                        </div>
                        <p className="date-place-address">{place.address}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeTool === "fortune") {
      return (
        <div className="space-y-5">
          <div className="relative text-center">
            <h2 className="mt-3 text-2xl font-black tracking-tighter">
              {t.tools.fortune.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)] font-serif">
              {t.tools.fortune.desc}
            </p>
          </div>
          <div className="fortune-stage">
            {fortune ? (
              <div key={fortuneSeed} className="fortune-card animate-popIn">
                <div className="fortune-top">
                  <span className="chip">{t.tools.fortune.fields.keyword}</span>
                  <span className="fortune-keyword">{fortune.keyword}</span>
                </div>
                <h3 className="fortune-title">{fortune.title}</h3>
                <p className="fortune-note">{fortune.note}</p>
                <div className="fortune-grid">
                  <div className="fortune-item">
                    <span className="fortune-label">{t.tools.fortune.fields.energy}</span>
                    <span className="fortune-value">{fortune.energy}</span>
                  </div>
                  <div className="fortune-item">
                    <span className="fortune-label">{t.tools.fortune.fields.luckyColor}</span>
                    <span className="fortune-value">
                      <span
                        className="fortune-swatch"
                        style={{ "--swatch": fortune.colorHex }}
                      />
                      {fortune.luckyColor}
                    </span>
                  </div>
                  <div className="fortune-item">
                    <span className="fortune-label">{t.tools.fortune.fields.luckyItem}</span>
                    <span className="fortune-value">{fortune.luckyItem}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="fortune-card">
                <p className="text-sm text-[var(--muted)]">{t.tools.fortune.loading}</p>
              </div>
            )}
          </div>
        </div>
      );
    }

    if (activeTool === "outfit") {
      const weatherKey = outfitWeather ? getWeatherKey(outfitWeather.weathercode) : "unknown";
      const weatherTheme = WEATHER_THEMES[weatherKey] || WEATHER_THEMES.unknown;
      const weatherLabel = outfitWeather ? weatherTheme.label[language] : "--";
      const weatherIcon = outfitWeather ? weatherTheme.icon : "🌡️";
      const tempText = outfitWeather ? `${Math.round(outfitWeather.temperature)}°C` : "--";
      const windText = outfitWeather ? `${Math.round(outfitWeather.windspeed)} km/h` : "--";
      const styleLabel =
        t.tools.outfit.style.options.find((option) => option.id === outfitStyle)?.label ||
        "";
      const locationParts = [
        outfitLocation?.name,
        outfitLocation?.admin1,
        outfitLocation?.country,
      ].filter(Boolean);
      const locationLabel =
        locationParts.join(" · ") || t.tools.outfit.location.unknown;
      const statusLabel =
        t.tools.outfit.location.status[outfitStatus] ||
        t.tools.outfit.location.status.idle;
      const isOutfitBusy = ["locating", "loading", "searching"].includes(outfitStatus);
      const selectedWants = t.tools.outfit.wants.options
        .filter((option) => outfitWants.includes(option.id))
        .map((option) => option.label);
      const suggestions = [];
      if (outfitWeather) {
        const tempBand = getTempBand(outfitWeather.temperature);
        const baseSuggestions =
          OUTFIT_BASE[language]?.[tempBand]?.[outfitGender] || [];
        const styleSuggestions =
          OUTFIT_STYLE_BASE[language]?.[outfitStyle]?.[outfitGender] || [];
        const wantSuggestions = outfitWants
          .map((id) => OUTFIT_WANT_TIPS[language]?.[id])
          .filter(Boolean);
        if (styleLabel) {
          suggestions.push(`${t.tools.outfit.suggestions.stylePrefix}: ${styleLabel}`);
        }
        if (selectedWants.length) {
          suggestions.push(
            `${t.tools.outfit.suggestions.preference}: ${selectedWants.join(" / ")}`
          );
        }
        suggestions.push(...styleSuggestions.slice(0, 2));
        suggestions.push(...wantSuggestions.slice(0, 2));
        suggestions.push(...baseSuggestions.slice(0, 2));
        const styleTip = OUTFIT_STYLE_TIPS[language]?.[outfitStyle];
        if (styleTip) {
          suggestions.push(styleTip);
        }
        const weatherTip = weatherTheme.tip?.[language];
        if (weatherTip) {
          suggestions.push(weatherTip);
        }
        if (outfitWeather.windspeed >= 24) {
          suggestions.push(OUTFIT_WIND_TIPS[language]);
        }
      }
      const outfitSuggestions = suggestions.filter(Boolean).slice(0, 8);
      return (
        <div className="space-y-6">
          <div className="relative text-center">
            <h2 className="mt-3 text-2xl font-black tracking-tighter">
              {t.tools.outfit.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)] font-serif">
              {t.tools.outfit.desc}
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.15fr_1fr]">
            <div className="outfit-panel space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    {t.tools.outfit.location.title}
                  </p>
                  <p className="mt-2 text-lg font-semibold">{locationLabel}</p>
                </div>
                <span className="outfit-status">{statusLabel}</span>
              </div>
              <div className="outfit-weather-card">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{weatherIcon}</span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                      {t.tools.outfit.weather.label}
                    </p>
                    <p className="text-lg font-semibold">{weatherLabel}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black">{tempText}</p>
                  <p className="text-xs text-[var(--muted)]">
                    {t.tools.outfit.weather.wind}: {windText}
                  </p>
                </div>
              </div>
              <div className="outfit-actions">
                <button
                  type="button"
                  className="btn-primary active:scale-95"
                  onClick={handleOutfitLocate}
                  disabled={isOutfitBusy}
                >
                  <MapPin size={16} />
                  {t.tools.outfit.location.use}
                </button>
                <div className="outfit-manual">
                  <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    {t.tools.outfit.location.manualLabel}
                  </span>
                  <div className="outfit-manual-row">
                    <input
                      className="field"
                      value={outfitCityQuery}
                      onChange={(event) => setOutfitCityQuery(event.target.value)}
                      placeholder={t.tools.outfit.location.manualPlaceholder}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          event.preventDefault();
                          void handleOutfitCitySearch();
                        }
                      }}
                    />
                    <button
                      type="button"
                      className="btn-ghost active:scale-95"
                      onClick={handleOutfitCitySearch}
                      disabled={isOutfitBusy}
                    >
                      <Search size={16} />
                      {t.tools.outfit.location.manualBtn}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="outfit-panel space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  {t.tools.outfit.gender.label}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {t.tools.outfit.gender.options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setOutfitGender(option.id)}
                      className={classNames(
                        "rounded-full px-3 py-1 text-xs font-semibold transition active:scale-95",
                        outfitGender === option.id
                          ? "bg-[var(--accent)] text-white"
                          : "border border-[var(--line)] text-[var(--muted)] hover:bg-[var(--accent-soft)]"
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  {t.tools.outfit.style.label}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {t.tools.outfit.style.options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setOutfitStyle(option.id)}
                      className={classNames(
                        "rounded-full px-3 py-1 text-xs font-semibold transition active:scale-95",
                        outfitStyle === option.id
                          ? "bg-[var(--accent)] text-white"
                          : "border border-[var(--line)] text-[var(--muted)] hover:bg-[var(--accent-soft)]"
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  {t.tools.outfit.wants.label}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {t.tools.outfit.wants.options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleOutfitWantToggle(option.id)}
                      className={classNames(
                        "rounded-full px-3 py-1 text-xs font-semibold transition active:scale-95",
                        outfitWants.includes(option.id)
                          ? "bg-[var(--accent)] text-white"
                          : "border border-[var(--line)] text-[var(--muted)] hover:bg-[var(--accent-soft)]"
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="outfit-panel space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {t.tools.outfit.suggestions.title}
              </h3>
              <CloudSun size={18} className="text-[var(--muted)]" />
            </div>
            {outfitWeather ? (
              <div className="grid gap-2 md:grid-cols-2">
                {outfitSuggestions.map((item, index) => (
                  <div key={`${item}-${index}`} className="outfit-suggestion">
                    {item}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-[var(--muted)]">
                {t.tools.outfit.suggestions.empty}
              </p>
            )}
          </div>
        </div>
      );
    }

    if (activeTool === "excuse") {
      const excuseText =
        excuse ?? (isExcuseRolling ? "" : t.tools.excuse.default);
      return (
        <div className="space-y-4">
          <div className="relative text-center">
            <h2 className="mt-3 text-2xl font-black tracking-tighter">
              {t.tools.excuse.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)] font-serif">
              {t.tools.excuse.desc}
            </p>
          </div>
          <div className="excuse-wrap">
            <div className="excuse-card text-lg font-serif">
              <div className="excuse-body">
                <p
                  className={classNames(
                    "excuse-text",
                    isExcuseRolling && "is-rolling"
                  )}
                >
                  {excuseText}
                </p>
              </div>
              <button
                type="button"
                className={classNames(
                  "excuse-copy",
                  excuseCopied && "is-copied"
                )}
                onClick={handleCopyExcuse}
                disabled={!excuse || isExcuseRolling}
                aria-label={excuseCopied ? t.tools.excuse.copied : t.tools.excuse.copy}
              >
                {excuseCopied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="btn-primary active:scale-95"
              onClick={handleExcuse}
            >
              {t.tools.excuse.cta}
            </button>
          </div>
        </div>
      );
    }

    if (activeTool === "persona") {
      const personaCard = persona || t.tools.persona.default;
      return (
        <div className="space-y-4">
          <div className="relative text-center">
            <h2 className="mt-3 text-2xl font-black tracking-tighter">
              {t.tools.persona.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)] font-serif">
              {t.tools.persona.desc}
            </p>
          </div>
          <div className="persona-stage">
            <div key={personaSeed} className="persona-card animate-popIn">
              <div className="persona-emoji text-8xl leading-none">
                {personaCard.icon}
              </div>
              <h3 className="persona-title">{personaCard.title}</h3>
              <p className="persona-desc">{personaCard.desc}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="btn-primary active:scale-95"
              onClick={handlePersona}
            >
              <Sparkles size={16} />
              {t.tools.persona.cta}
            </button>
          </div>
        </div>
      );
    }

    return null;
  }, [
    activeTool,
    buyDecision,
    dateLocation,
    datePlaces,
    datePlacesError,
    datePlacesStatus,
    dateResult,
    dateResultLocation,
    dateRolling,
    dateSeed,
    dinnerResult,
    excuse,
    excuseCopied,
    isDateSpinning,
    isExcuseRolling,
    fortune,
    fortuneSeed,
    fishModeIndex,
    fishPops,
    isRolling,
    menuInput,
    menuItems,
    outfitCityQuery,
    outfitGender,
    outfitLocation,
    outfitStatus,
    outfitStyle,
    outfitWeather,
    outfitWants,
    persona,
    personaSeed,
    rollingItem,
    language,
    t,
  ]);

  const handleOpenTool = (id) => {
    if (id === "coming") return;
    setActiveTool(id);
  };

  const handleCloseTool = () => {
    setActiveTool(null);
  };

  const handleLangCycle = () => {
    setLanguage((prev) => (prev === "zh" ? "en" : "zh"));
  };

  const handleThemeCycle = () => {
    const order = ["warm", "cool", "dark"];
    setTheme((prev) => order[(order.indexOf(prev) + 1) % order.length]);
  };

  return (
    <div className="app-shell font-sans">
      <style>{`
        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, calc(-50% - 60px)) scale(1.08);
          }
        }
        @keyframes popIn {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          60% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-popIn {
          animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          transform-origin: center;
          will-change: transform, opacity;
        }
      `}</style>
      <div
        className={classNames(
          "relative z-10 min-h-screen px-4 pb-16 pt-8 transition-all duration-500 md:px-10",
          activeTool ? "opacity-0 blur-sm pointer-events-none" : "opacity-100"
        )}
      >
        <div className="sticky top-5 z-20 mx-auto flex max-w-6xl items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleCloseTool}
            className="group flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 pl-0 pr-3 py-0 shadow-sm backdrop-blur-xl"
            aria-label={t.appName}
          >
            <span className="flex h-9 w-9 items-center justify-center">
              <Leaf
                size={18}
                className="text-stone-700 transition-transform duration-200 group-hover:rotate-12"
              />
            </span>
            <span className="text-sm font-semibold text-stone-700">{t.appName}</span>
          </button>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleLangCycle}
              aria-label={t.nav.settings}
              title={t.nav.settings}
              className="nav-btn"
            >
              <span role="img" aria-hidden="true">
                🌐
              </span>
            </button>
            <button
              type="button"
              onClick={handleThemeCycle}
              aria-label={t.nav.theme}
              title={t.nav.theme}
              className="nav-btn"
            >
              <span role="img" aria-hidden="true">
                🎨
              </span>
            </button>
          </div>
        </div>

        <section className="mx-auto mt-14 max-w-6xl">
          <div className="flex flex-col gap-3 text-center">
            <h1 className="font-display text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-[var(--ink)]">{t.hero.title}</span>
              <span className="text-[var(--accent)]">.</span>
              <span className="block text-[var(--muted-strong)]">
                {t.hero.titleMuted}
                <span className="text-[var(--muted-strong)]">.</span>
              </span>
            </h1>
            <p className="text-sm text-[var(--muted)] md:text-base">
              {t.hero.subtitle}
            </p>
          </div>

          <div className="mt-12 grid auto-rows-[230px] gap-6 sm:grid-cols-2 md:auto-rows-[255px] lg:grid-cols-3">
            {TOOL_CARDS.map((tool, index) => {
              const content =
                tool.id === "coming"
                  ? { title: t.grid.coming, desc: t.grid.comingDesc }
                  : t.tools[tool.id];
              const Icon = tool.icon;
              const isComing = tool.id === "coming";
              const cardClassName = classNames(
                "tool-card group flex h-full flex-col justify-between overflow-hidden p-7 text-left transition-all duration-300 animate-fadeUp hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.98]",
                isComing && "opacity-80"
              );
              const cardStyle = {
                animationDelay: `${index * 80}ms`,
                "--card-glow": tool.glow,
                "--card-glow-2": tool.glow2,
                "--icon-bg": tool.iconBg,
                "--icon-ink": tool.iconInk,
              };
              const cardContent = (
                <>
                  <div className="flex items-center justify-between">
                    <div className="tool-icon flex h-11 w-11 items-center justify-center rounded-2xl transition group-hover:scale-105">
                      <Icon size={20} />
                    </div>
                    {!isComing && (
                      <div className="tool-arrow text-[var(--muted)]">
                        <span role="img" aria-label="go">
                          ➔
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="tool-text mt-6 space-y-2">
                    <h3 className="text-2xl font-black tracking-tight">{content.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{content.desc}</p>
                  </div>
                </>
              );
              if (isComing) {
                return (
                  <a
                    key={tool.id}
                    href="https://github.com/dandan1232/Just-Like-This"
                    target="_blank"
                    rel="noreferrer"
                    className={cardClassName}
                    style={cardStyle}
                  >
                    {cardContent}
                  </a>
                );
              }
              return (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => handleOpenTool(tool.id)}
                  className={cardClassName}
                  style={cardStyle}
                >
                  {cardContent}
                </button>
              );
            })}
          </div>

          <footer className="mt-20 text-center text-stone-300 text-[20px] font-medium italic">
            {t.footer.tagline}
            <div className="mt-3 flex items-center justify-center gap-3 text-xs font-medium not-italic text-stone-300">
              <span>{t.footer.copyright}</span>
              <a
                href="https://github.com/dandan1232/Just-Like-This"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-stone-400 transition hover:text-stone-500"
              >
                {t.footer.contact}
                <Github size={14} />
              </a>
            </div>
          </footer>
        </section>
      </div>

      <ToolContainer
        toolId={activeTool}
        content={toolContent}
        onBack={handleCloseTool}
        labels={t.common}
      />
    </div>
  );
}

export default App;
