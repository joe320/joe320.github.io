window.translations = window.translations || {};

function mergeTranslations(source) {
    Object.keys(source).forEach((lang) => {
        window.translations[lang] = {
            ...(window.translations[lang] || {}),
            ...source[lang]
        };
    });
}

window.mergeTranslations = mergeTranslations;

mergeTranslations({
    zh: {
        "meta.title": "Minaro",
        "meta.description": "Minaro 是一个以原版生存、建筑、铁路、钓鱼、酿酒与慢生活为核心的小型硬核 Minecraft 世界。",
        "meta.keywords": "Minecraft, Minaro, Minecraft 服务器, 生存, 铁路, 钓鱼, 酿酒",
        "meta.ogdescription": "一个以原版生存、建筑、铁路、钓鱼、酿酒与慢生活为核心的小型硬核 Minecraft 世界。",

        "nav.home": "首页",
        "nav.map": "地图",
        "nav.wiki": "Wiki",
        "nav.faq": "FAQ",
        "nav.blog": "Blog",
        "nav.gallery": "Gallery",

        "button.copy": "复制地址",
        "button.copied": "复制成功!",
        "button.copyFailed": "复制失败，请刷新重试",
        
        "status.online": "在线",
        "status.phase": "准备阶段",

        "hero.eyebrow": "铁路与港口的世界",
        "hero.text": "一个以原版生存、建筑、铁路、钓鱼、酿酒与慢生活为核心的小型硬核 Minecraft 世界。",
        "hero.join": "进入世界",
        "hero.map": "世界地图",

        "entry.kicker": "服务器地址",

        "bulletin.kicker": "世界公告",
        "bulletin.title": "公告与日志",
        "bulletin.seeAll": "See all >",

        "features.kicker": "世界发展模式",
        "features.title": "发展模式",

        "rules.kicker": "规则",
        "rules.title": "基本规则",

        "footer.text": "A small world, slowly built by its residents."
    },

    en: {
        "meta.title": "Minaro",
        "meta.description": "Minaro is a small, hardcore Minecraft world centered around classic survival, building, railways, fishing, brewing, and a laid-back lifestyle.",
        "meta.keywords": "Minecraft, Minaro, Minecraft Server, Survival, Railways, Fishing, Brewing",
        "meta.ogdescription": "A small, hardcore Minecraft world centered around classic survival, building, railways, fishing, brewing, and a laid-back lifestyle.",

        "nav.home": "Home",
        "nav.map": "Map",
        "nav.wiki": "Wiki",
        "nav.faq": "FAQ",
        "nav.blog": "Blog",
        "nav.gallery": "Gallery",

        "button.copy": "Copy",
        "button.copied": "Copied!",
        "button.copyFailed": "Copy failed,F5&retry",
        
        "status.online": "Online",
        "status.phase": "Preparation Phase",
        
        "hero.eyebrow": "The World of Railways and Ports",
        "hero.text": "Minaro is a small Minecraft world focused on survival, building, railway, fishing, brewing and slow living. It is not a fast-paced server, but a place where traces remain over time.",
        "hero.join": "Join World",
        "hero.map": "World Map",

        "entry.kicker": "Server Address",

        "bulletin.kicker": "World Bulletin",
        "bulletin.title": "World Bulletin & Log",
        "bulletin.seeAll": "See all >",

        "features.kicker": "World",
        "features.title": "Direction of the World",

        "rules.kicker": "Rules",
        "rules.title": "Basic Rules",

        "footer.text": "A small world, slowly built by its residents."
    },

    ja: {
        "meta.title": "Minaro",
        "meta.description": "Minaroは、サバイバル、建築、鉄道、釣り、醸造、そしてスローライフを核とした、小規模でハードコアなMinecraftワールドです。",
        "meta.keywords": "Minecraft, Minaro, Minecraft サーバー, サバイバル, 鉄道, 釣り, 醸造",
        "meta.ogdescription": "サバイバル、建築、鉄道、釣り、醸造、そしてスローライフを核とした、小規模でハードコアなMinecraftワールドです。",

        "nav.home": "ホーム",
        "nav.map": "地図",
        "nav.wiki": "Wiki",
        "nav.faq": "FAQ",
        "nav.blog": "Blog",
        "nav.gallery": "Gallery",

        "button.copy": "コピー",
        "button.copied": "コピーしました",
        "button.copyFailed": "コピーに失敗しました。ページを更新して、もう一度お試しください。",

        "status.online": "Online",
        "status.phase": "準備段階",
        
        "hero.eyebrow": "鉄道と港湾の世界",
        "hero.text": "Minaroは、サバイバル、建築、鉄道、釣り、醸造、そしてスローライフを核とした小規模なMinecraftワールドです。短期的に消費するサーバーではなく、時間とともに痕跡が残っていく場所です。",
        "hero.join": "参加する",
        "hero.map": "ワールドマップ",

        "entry.kicker": "サーバーアドレス",

        "bulletin.kicker": "世界の速報",
        "bulletin.title": "世界掲示板とログ",
        "bulletin.seeAll": "See all >",
        "bulletin.item.siteOnline": "Minaro サイトが公開されました。",
        "bulletin.item.archiveStarted": "ワールドログが長期的な出来事の記録を開始しました。",
        "bulletin.item.railwayPlanning": "第一期鉄道計画を準備中です。",

        "features.kicker": "世界",
        "features.title": "この世界の方向性",

        "rules.kicker": "ルール",
        "rules.title": "基本ルール",

        "footer.text": "住民たちが少しずつ築き上げてきた、小さな世界。"
    }
});

function getTranslation(obj, path) {
    if (!obj || !path) return undefined;

    if (Object.prototype.hasOwnProperty.call(obj, path)) {
        return obj[path];
    }

    return path.split(".").reduce((acc, part) => {
        return acc && acc[part];
    }, obj);
}

window.getTranslation = getTranslation;

function setLanguage(lang) {
    const dictionary = window.translations[lang] || window.translations.zh;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        const translation = getTranslation(dictionary, key);

        if (translation !== undefined) {
            element.textContent = translation;
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
        const key = element.dataset.i18nHtml;
        const translation = getTranslation(dictionary, key);

        if (translation !== undefined) {
            element.innerHTML = translation;
        }
    });

    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
        const key = element.dataset.i18nContent;
        const translation = getTranslation(dictionary, key);

        if (translation !== undefined) {
            element.setAttribute("content", translation);
        }
    });

    const title = getTranslation(dictionary, "meta.title");

    if (title !== undefined) {
        document.title = title;
    }

    document.querySelectorAll(".lang-btn").forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === lang);
    });

    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    localStorage.setItem("minaro-language", lang);
}

window.setLanguage = setLanguage;

window.getCurrentLanguage = function () {
    return localStorage.getItem("minaro-language") || "zh";
};

document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
        setLanguage(button.dataset.lang);
    });
});

const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
        const text = button.dataset.copy;
        const originalText = button.textContent;
        const lang = window.getCurrentLanguage();
        const dictionary = window.translations[lang] || window.translations.zh;

        try {
            await navigator.clipboard.writeText(text);

            button.textContent =
                getTranslation(dictionary, "button.copied") || "Copied!";
        } catch (error) {
            button.textContent =
                getTranslation(dictionary, "button.copyFailed") || "Copy failed";

            console.error("Copy failed:", error);
        }

        setTimeout(() => {
            button.textContent = originalText;
        }, 1800);
    });
});

const savedLanguage = window.getCurrentLanguage();
setLanguage(savedLanguage);

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
}
