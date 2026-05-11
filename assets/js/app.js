const copyButtons = document.querySelectorAll("[data-copy]");

copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
        const text = button.dataset.copy;
        const originalText = button.textContent;

        try {
            await navigator.clipboard.writeText(text);
            button.textContent = "Copied!";
        } catch (error) {
            button.textContent = "Copy failed";
            console.error("Copy failed:", error);
        }

        setTimeout(() => {
            button.textContent = originalText;
        }, 1800);
    });
});

const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const translations = {
    zh: {
        "nav.home": "首页",
        "nav.map": "地图",
        "nav.wiki": "Wiki",

        "hero.eyebrow": "Eastern Coastal World",
        "hero.text": "一个以原版生存、建筑、铁路、钓鱼、酿酒与慢生活为核心的小型 Minecraft 世界。这里不是快餐服务器，而是一片会慢慢留下痕迹的地方。",
        "hero.join": "进入世界",
        "hero.map": "世界地图",

        "entry.kicker": "Server Address",

        "bulletin.kicker": "World Bulletin",
        "bulletin.title": "世界公告",

        "features.kicker": "World",
        "features.title": "这个世界的方向",

        "rules.kicker": "Rules",
        "rules.title": "基本规则"
    },

    en: {
        "nav.home": "Home",
        "nav.map": "Map",
        "nav.wiki": "Wiki",

        "hero.eyebrow": "Eastern Coastal World",
        "hero.text": "Minaro is a small Minecraft world focused on survival, building, railway, fishing, brewing and slow living. It is not a fast-paced server, but a place where traces remain over time.",
        "hero.join": "Join World",
        "hero.map": "World Map",

        "entry.kicker": "Server Address",

        "bulletin.kicker": "World Bulletin",
        "bulletin.title": "World Bulletin",

        "features.kicker": "World",
        "features.title": "Direction of the World",

        "rules.kicker": "Rules",
        "rules.title": "Basic Rules"
    },

    ja: {
        "nav.home": "ホーム",
        "nav.map": "地図",
        "nav.wiki": "Wiki",

        "hero.eyebrow": "Eastern Coastal World",
        "hero.text": "Minaro は、サバイバル、建築、鉄道、釣り、醸造、そしてゆっくりとした暮らしを中心にした小さな Minecraft の世界です。短期的に消費するサーバーではなく、時間とともに痕跡が残っていく場所です。",
        "hero.join": "参加する",
        "hero.map": "ワールドマップ",

        "entry.kicker": "Server Address",

        "bulletin.kicker": "World Bulletin",
        "bulletin.title": "ワールド掲示板",

        "features.kicker": "World",
        "features.title": "この世界の方向性",

        "rules.kicker": "Rules",
        "rules.title": "基本ルール"
    }
};

function setLanguage(lang) {
    const dictionary = translations[lang] || translations.zh;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;

        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    document.querySelectorAll(".lang-btn").forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === lang);
    });

    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    localStorage.setItem("minaro-language", lang);
}

document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
        setLanguage(button.dataset.lang);
    });
});

const savedLanguage = localStorage.getItem("minaro-language") || "zh";
setLanguage(savedLanguage);
