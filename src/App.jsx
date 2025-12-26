import { useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  Bell,
  Brain,
  Frown,
  Github,
  Grid2X2,
  Leaf,
  MessageCircle,
  Palette,
  Plus,
  Smile,
  Sparkles,
  Settings,
  ShoppingBag,
  Utensils,
  X,
} from "lucide-react";

const TRANSLATIONS = {
  zh: {
    appName: "就这样吧",
    nav: {
      settings: "设置",
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
        desc: "心诚则灵，Bug 退散。",
        cta: "敲一下",
        modes: ["Bug 退散", "需求不改", "会议收敛", "灵感涌现"],
        responses: ["功德 +1", "已静音尘世", "Bug 已远离", "呼吸变稳了"],
        counterLabel: "今日功德",
      },
      excuse: {
        title: "摸鱼借口",
        desc: "优雅地逃离现场。",
        cta: "生成借口",
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
        cta: "刷新人设",
        default: "等待分配",
        pool: [
          "退堂鼓表演艺术家",
          "会议气氛调节员",
          "灵感捕手",
          "借口策展人",
          "情绪降噪师",
        ],
      },
    },
  },
  en: {
    appName: "Just Like This",
    nav: {
      settings: "Settings",
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
        defaultMenu: ["Noodles", "Beef bowl", "Porridge", "Greens", "Hot pot", "Sushi"],
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
            "You earned it. Make it reasonable.",
            "The discount is honest today.",
            "It smooths your day a little.",
            "Future you will thank you.",
          ],
          hold: [
            "In three days, it will fade.",
            "Let it rest in the cart.",
            "Not today, give it space.",
            "Your wallet needs a breath.",
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
      excuse: {
        title: "Perfect Excuse",
        desc: "Absurd yet coherent. Pressure down.",
        cta: "Generate",
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
        cta: "Refresh",
        default: "Pending",
        pool: [
          "Drum of Retreat Artist",
          "Meeting Vibe Tuner",
          "Idea Catcher",
          "Excuse Curator",
          "Noise Reducer",
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

const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];
const classNames = (...classes) => classes.filter(Boolean).join(" ");

const ToolContainer = ({ toolId, content, onBack, labels, appName }) => {
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
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="logo-pill transition hover:-translate-y-0.5 active:scale-95"
            aria-label={labels.back}
          >
            <div className="logo-icon">
              <Leaf size={18} />
            </div>
            <span className="text-sm font-semibold">{appName}</span>
          </button>
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
  const [fishPulse, setFishPulse] = useState("");
  const [fishPulseKey, setFishPulseKey] = useState(0);

  const [excuse, setExcuse] = useState(t.tools.excuse.default);
  const [persona, setPersona] = useState(t.tools.persona.default);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [theme, language]);

  useEffect(() => {
    if (!menuTouched) {
      setMenuItems(t.tools.dinner.defaultMenu);
    }
    setExcuse(t.tools.excuse.default);
    setPersona(t.tools.persona.default);
    setBuyDecision(null);
    setIsBuyThinking(false);
    setRollingItem("");
    setDinnerResult("");
  }, [language, menuTouched, t]);

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

  const handleFishTap = () => {
    setMerit((prev) => prev + 1);
    setFishPulse(getRandomItem(t.tools.fish.responses));
    setFishPulseKey((prev) => prev + 1);
  };

  const handleExcuse = () => {
    setExcuse(getRandomItem(t.tools.excuse.pool));
  };

  const handlePersona = () => {
    setPersona(getRandomItem(t.tools.persona.pool));
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
            <span className="chip tool-chip">{t.grid.label}</span>
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
            <span className="chip tool-chip">{t.grid.label}</span>
            <h2 className="buy-title">{t.tools.buy.title}</h2>
          </div>
          <div className="buy-panel">
            <div className={classNames("buy-face", decisionColor, isBuyThinking && "animate-pulse")}>
              {decisionIcon || <span className="buy-face-placeholder">?</span>}
            </div>
            <p className={classNames("buy-decision", decisionColor)}>{decisionText}</p>
            <p className="buy-reason">“{reasonText}”</p>
          </div>
          <button
            type="button"
            className="btn-primary buy-cta active:scale-95"
            onClick={handleBuyDecision}
            disabled={isBuyThinking}
          >
            {t.tools.buy.cta}
          </button>
        </div>
      );
    }

    if (activeTool === "fish") {
      return (
        <div className="space-y-4">
          <div className="relative">
            <span className="chip tool-chip">{t.grid.label}</span>
            <h2 className="mt-3 text-2xl font-black tracking-tighter">
              {t.tools.fish.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)] font-serif">
              {t.tools.fish.desc}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
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
            {fishPulse && (
              <span
                key={fishPulseKey}
                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-6 animate-fadeUp text-sm text-[var(--accent-strong)]"
              >
                {fishPulse}
              </span>
            )}
            <button
              type="button"
              onClick={handleFishTap}
              className="flex w-full flex-col items-center gap-3 rounded-[36px] border border-[var(--line)] bg-[var(--surface)] p-8 text-center transition hover:-translate-y-0.5 active:scale-95"
            >
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

    if (activeTool === "excuse") {
      return (
        <div className="space-y-4">
          <div className="relative">
            <span className="chip tool-chip">{t.grid.label}</span>
            <h2 className="mt-3 text-2xl font-black tracking-tighter">
              {t.tools.excuse.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)] font-serif">
              {t.tools.excuse.desc}
            </p>
          </div>
          <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 text-lg font-serif">
            {excuse}
          </div>
          <button type="button" className="btn-primary active:scale-95" onClick={handleExcuse}>
            {t.tools.excuse.cta}
          </button>
        </div>
      );
    }

    if (activeTool === "persona") {
      return (
        <div className="space-y-4">
          <div className="relative">
            <span className="chip tool-chip">{t.grid.label}</span>
            <h2 className="mt-3 text-2xl font-black tracking-tighter">
              {t.tools.persona.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)] font-serif">
              {t.tools.persona.desc}
            </p>
          </div>
          <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              {t.tools.persona.title}
            </p>
            <p className="mt-3 text-2xl font-semibold">{persona}</p>
          </div>
          <button type="button" className="btn-primary active:scale-95" onClick={handlePersona}>
            {t.tools.persona.cta}
          </button>
        </div>
      );
    }

    return null;
  }, [
    activeTool,
    buyDecision,
    dinnerResult,
    excuse,
    fishModeIndex,
    fishPulse,
    fishPulseKey,
    isRolling,
    menuInput,
    menuItems,
    persona,
    rollingItem,
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
      <div
        className={classNames(
          "relative z-10 min-h-screen px-4 pb-16 pt-8 transition-all duration-500 md:px-10",
          activeTool ? "opacity-0 blur-sm pointer-events-none" : "opacity-100"
        )}
      >
        <div className="sticky top-5 z-20 mx-auto flex max-w-6xl items-start justify-between gap-4">
          <div className="logo-pill">
            <div className="logo-icon">
              <Leaf size={18} />
            </div>
            <span className="text-sm font-semibold">{t.appName}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleLangCycle}
              aria-label={t.nav.settings}
              title={t.nav.settings}
              className="nav-btn"
            >
              <Settings size={18} />
              <span className="hidden text-xs font-semibold sm:inline">{t.nav.settings}</span>
            </button>
            <button
              type="button"
              onClick={handleThemeCycle}
              aria-label={t.nav.theme}
              title={t.nav.theme}
              className="nav-btn"
            >
              <Palette size={18} />
              <span className="hidden text-xs font-semibold sm:inline">{t.nav.theme}</span>
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
              return (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => handleOpenTool(tool.id)}
                  className={classNames(
                    "tool-card group flex h-full flex-col justify-between overflow-hidden p-7 text-left transition-all duration-300 animate-fadeUp hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.98]",
                    tool.id === "coming" && "cursor-not-allowed opacity-70"
                  )}
                  style={{
                    animationDelay: `${index * 80}ms`,
                    "--card-glow": tool.glow,
                    "--card-glow-2": tool.glow2,
                    "--icon-bg": tool.iconBg,
                    "--icon-ink": tool.iconInk,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="tool-icon flex h-11 w-11 items-center justify-center rounded-2xl transition group-hover:scale-105">
                      <Icon size={20} />
                    </div>
                    <div className="tool-arrow text-[var(--muted)]">
                      <span role="img" aria-label="go">
                        ➔
                      </span>
                    </div>
                  </div>
                  <div className="tool-text mt-6 space-y-2">
                    <h3 className="text-2xl font-black tracking-tight">{content.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{content.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <footer className="mt-20 text-center text-stone-300 text-sm font-medium italic">
            就这样吧，挺好的。
            <div className="mt-3 flex flex-col items-center gap-2 text-xs font-medium not-italic text-stone-300">
              <span>©️念安@2026</span>
              <a
                href="https://github.com/dandan1232"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-stone-400 transition hover:text-stone-500"
              >
                与我联系
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
        appName={t.appName}
      />
    </div>
  );
}

export default App;
