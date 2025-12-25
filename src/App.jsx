import { useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  Bell,
  Grid2X2,
  Leaf,
  MessageCircle,
  Palette,
  Plus,
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
        desc: "帮你人类选择困难。",
        cta: "抽一次",
        add: "加入菜单",
        placeholder: "添加菜单，比如：番茄炒蛋",
        resultLabel: "今日答案",
        rolling: "摇晃中",
        empty: "菜单空空",
        tips: "点击标签移除，保持轻量。",
        defaultMenu: ["家常面", "牛肉饭", "砂锅粥", "清炒时蔬", "小火锅", "寿司卷"],
      },
      buy: {
        title: "买不买",
        desc: "冲动消费终结者。",
        cta: "请裁决",
        buy: "买",
        hold: "先别",
        mood: "心理博弈结果",
        hint: "给我 3 秒，我给你理由。",
        reasons: {
          buy: [
            "今天够辛苦，奖励自己一次合理。",
            "折扣刚好，不买才会后悔。",
            "它会让你的生活更顺一点点。",
            "这次买，是对未来自己的投资。",
          ],
          hold: [
            "三天后你就会忘掉它。",
            "先放购物车，观察它的情绪。",
            "今天已经很累，不必再处理它。",
            "给钱包留一点呼吸空间。",
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
        cta: "Spin once",
        add: "Add",
        placeholder: "Add menu, e.g. tomato egg",
        resultLabel: "Tonight",
        rolling: "Spinning",
        empty: "Menu empty",
        tips: "Tip: remove tags to keep it light.",
        defaultMenu: ["Noodles", "Beef bowl", "Porridge", "Greens", "Hot pot", "Sushi"],
      },
      buy: {
        title: "Buy or Not",
        desc: "No matter the result, you get an excuse.",
        cta: "Decide",
        buy: "Buy",
        hold: "Hold",
        mood: "Mind game",
        hint: "Give me 3 seconds.",
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
    iconBg: "rgba(255, 214, 187, 0.6)",
    iconInk: "#c46a3d",
  },
  {
    id: "buy",
    icon: ShoppingBag,
    glow: "rgba(212, 229, 255, 0.75)",
    glow2: "rgba(236, 244, 255, 0.9)",
    iconBg: "rgba(212, 229, 255, 0.6)",
    iconInk: "#4c6fa5",
  },
  {
    id: "fish",
    icon: Bell,
    glow: "rgba(255, 236, 201, 0.75)",
    glow2: "rgba(255, 249, 236, 0.9)",
    iconBg: "rgba(255, 236, 201, 0.6)",
    iconInk: "#c28b2d",
  },
  {
    id: "excuse",
    icon: MessageCircle,
    glow: "rgba(200, 236, 248, 0.75)",
    glow2: "rgba(232, 248, 255, 0.9)",
    iconBg: "rgba(200, 236, 248, 0.6)",
    iconInk: "#3f7e9a",
  },
  {
    id: "persona",
    icon: BadgeCheck,
    glow: "rgba(236, 214, 242, 0.75)",
    glow2: "rgba(246, 236, 250, 0.9)",
    iconBg: "rgba(236, 214, 242, 0.6)",
    iconInk: "#7a4c92",
  },
  {
    id: "coming",
    icon: Grid2X2,
    glow: "rgba(230, 230, 230, 0.7)",
    glow2: "rgba(245, 245, 245, 0.9)",
    iconBg: "rgba(226, 226, 226, 0.6)",
    iconInk: "#8c8c8c",
  },
];

const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];
const classNames = (...classes) => classes.filter(Boolean).join(" ");

const ToolContainer = ({ toolId, content, onBack, labels }) => {
  if (!toolId) return null;
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-[var(--bg)]/85 px-4 py-10 backdrop-blur-sm"
      onClick={onBack}
    >
      <div
        className="card w-full max-w-4xl p-6 md:p-8 animate-fadeUp"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="btn-ghost active:scale-95"
          >
            ← {labels.back}
          </button>
        </div>
        <div className="mt-6">{content}</div>
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
    const interval = setInterval(() => {
      setRollingItem(getRandomItem(menuItems));
      ticks += 1;
      if (ticks > 8) {
        clearInterval(interval);
      }
    }, 90);

    setTimeout(() => {
      const finalPick = getRandomItem(menuItems);
      setRollingItem(finalPick);
      setDinnerResult(finalPick);
      setIsRolling(false);
    }, 900);
  };

  const handleBuyDecision = () => {
    const buy = Math.random() > 0.5;
    const reasonPool = buy ? t.tools.buy.reasons.buy : t.tools.buy.reasons.hold;
    setBuyDecision({
      result: buy ? t.tools.buy.buy : t.tools.buy.hold,
      reason: getRandomItem(reasonPool),
    });
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
      return (
        <div className="space-y-4">
          <div>
            <span className="chip">{t.grid.label}</span>
            <h2 className="mt-3 text-2xl font-black tracking-tighter">
              {t.tools.dinner.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)] font-serif">
              {t.tools.dinner.desc}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {menuItems.map((item) => (
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
            ))}
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <input
              className="field flex-1"
              value={menuInput}
              onChange={(event) => setMenuInput(event.target.value)}
              placeholder={t.tools.dinner.placeholder}
            />
            <div className="flex gap-2">
              <button type="button" className="btn-ghost active:scale-95" onClick={handleAddMenu}>
                <Plus size={16} />
                {t.tools.dinner.add}
              </button>
              <button
                type="button"
                className="btn-primary active:scale-95"
                onClick={handleDinnerSpin}
                disabled={isRolling || menuItems.length === 0}
              >
                {isRolling ? t.tools.dinner.rolling : t.tools.dinner.cta}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-5">
            <div>
              <p className="text-xs text-[var(--muted)]">{t.tools.dinner.resultLabel}</p>
              <p className="text-2xl font-semibold">
                {dinnerResult || rollingItem || t.tools.dinner.empty}
              </p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-soft)] text-2xl">
              🍜
            </div>
          </div>
          <p className="text-xs text-[var(--muted)] font-serif">{t.tools.dinner.tips}</p>
        </div>
      );
    }

    if (activeTool === "buy") {
      return (
        <div className="space-y-4">
          <div>
            <span className="chip">{t.grid.label}</span>
            <h2 className="mt-3 text-2xl font-black tracking-tighter">
              {t.tools.buy.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)] font-serif">
              {t.tools.buy.desc}
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-5 md:flex-row md:items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[var(--accent-soft)] text-2xl font-semibold text-[var(--accent-strong)]">
              {buyDecision ? buyDecision.result : "?"}
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                {t.tools.buy.mood}
              </p>
              <p className="mt-2 text-lg font-serif">
                {buyDecision ? buyDecision.reason : t.tools.buy.hint}
              </p>
            </div>
          </div>
          <button type="button" className="btn-primary active:scale-95" onClick={handleBuyDecision}>
            {t.tools.buy.cta}
          </button>
        </div>
      );
    }

    if (activeTool === "fish") {
      return (
        <div className="space-y-4">
          <div>
            <span className="chip">{t.grid.label}</span>
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
          <div>
            <span className="chip">{t.grid.label}</span>
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
          <div>
            <span className="chip">{t.grid.label}</span>
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

          <div className="mt-12 grid auto-rows-[170px] gap-6 sm:grid-cols-2 md:auto-rows-[190px] lg:grid-cols-3">
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
                    "tool-card group flex h-full flex-col justify-between overflow-hidden p-6 text-left transition-all duration-300 animate-fadeUp hover:-translate-y-1 active:scale-[0.98]",
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
                  </div>
                  <div className="mt-6 space-y-2">
                    <h3 className="text-xl font-black tracking-tight">{content.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{content.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
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
