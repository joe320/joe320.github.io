const galleryTranslations = {
    zh: {
        "meta.title": "Minaro Gallery",
        "gallery.meta.description": "Minaro Gallery 收录港口、铁路、聚落、市场、灯塔与世界日常的截图。",
        "gallery.meta.ogdescription": "Minaro 的世界截图档案。",

        "nav.blog": "Blog",
        "nav.gallery": "Gallery",

        "gallery.hero.eyebrow": "World Images",
        "gallery.hero.title": "Minaro Gallery",
        "gallery.hero.intro": "这里会收录 Minaro 的港口、铁路、聚落、市场、灯塔与日常截图。它不是宣传图集，而是世界慢慢留下的影像档案。",

        "gallery.type.harbor": "港口",
        "gallery.type.railway": "铁路",
        "gallery.type.landmark": "地标",
        "gallery.type.settlement": "聚落",

        "gallery.item.harborNight.title": "雨夜港口",
        "gallery.item.harborNight.desc": "预留图片位置。之后可替换为 Minaro 港区夜景。",

        "gallery.item.railwayStation.title": "旧车站",
        "gallery.item.railwayStation.desc": "预留图片位置。之后可替换为铁路车站或站台截图。",

        "gallery.item.lighthouse.title": "灯塔",
        "gallery.item.lighthouse.desc": "预留图片位置。之后可替换为海岸灯塔或公共建筑截图。",

        "gallery.item.settlement.title": "玩家聚落",
        "gallery.item.settlement.desc": "预留图片位置。之后可替换为玩家村庄、市场或住宅区截图。"
    },

    en: {
        "meta.title": "Minaro Gallery",
        "gallery.meta.description": "Minaro Gallery collects screenshots of harbors, railways, settlements, markets, lighthouses and everyday scenes.",
        "gallery.meta.ogdescription": "The visual archive of Minaro.",

        "nav.blog": "Blog",
        "nav.gallery": "Gallery",

        "gallery.hero.eyebrow": "World Images",
        "gallery.hero.title": "Minaro Gallery",
        "gallery.hero.intro": "This page collects screenshots of Minaro's harbors, railways, settlements, markets, lighthouses and everyday moments. It is not a promotional gallery, but a visual archive of the world.",

        "gallery.type.harbor": "Harbor",
        "gallery.type.railway": "Railway",
        "gallery.type.landmark": "Landmark",
        "gallery.type.settlement": "Settlement",

        "gallery.item.harborNight.title": "Harbor at Night",
        "gallery.item.harborNight.desc": "Image placeholder. Replace it later with a night scene from Minaro harbor.",

        "gallery.item.railwayStation.title": "Old Station",
        "gallery.item.railwayStation.desc": "Image placeholder. Replace it later with a railway station or platform screenshot.",

        "gallery.item.lighthouse.title": "Lighthouse",
        "gallery.item.lighthouse.desc": "Image placeholder. Replace it later with a coastal lighthouse or public building screenshot.",

        "gallery.item.settlement.title": "Player Settlement",
        "gallery.item.settlement.desc": "Image placeholder. Replace it later with a village, market or residential area screenshot."
    },

    ja: {
        "meta.title": "Minaro Gallery",
        "gallery.meta.description": "Minaro Gallery は、港、鉄道、集落、市場、灯台、日常風景のスクリーンショットを収録します。",
        "gallery.meta.ogdescription": "Minaro のワールド画像アーカイブです。",

        "nav.blog": "Blog",
        "nav.gallery": "Gallery",

        "gallery.hero.eyebrow": "World Images",
        "gallery.hero.title": "Minaro Gallery",
        "gallery.hero.intro": "ここでは Minaro の港、鉄道、集落、市場、灯台、日常風景のスクリーンショットを収録します。宣伝用ギャラリーではなく、世界が少しずつ残していく画像アーカイブです。",

        "gallery.type.harbor": "港",
        "gallery.type.railway": "鉄道",
        "gallery.type.landmark": "ランドマーク",
        "gallery.type.settlement": "集落",

        "gallery.item.harborNight.title": "雨夜の港",
        "gallery.item.harborNight.desc": "画像の仮置きです。後で Minaro 港区の夜景に差し替えできます。",

        "gallery.item.railwayStation.title": "古い駅",
        "gallery.item.railwayStation.desc": "画像の仮置きです。後で鉄道駅やホームのスクリーンショットに差し替えできます。",

        "gallery.item.lighthouse.title": "灯台",
        "gallery.item.lighthouse.desc": "画像の仮置きです。後で海岸の灯台や公共建築のスクリーンショットに差し替えできます。",

        "gallery.item.settlement.title": "プレイヤー集落",
        "gallery.item.settlement.desc": "画像の仮置きです。後で村、市場、住宅地のスクリーンショットに差し替えできます。"
    }
};

if (window.mergeTranslations) {
    window.mergeTranslations(galleryTranslations);
}

if (window.setLanguage) {
    window.setLanguage(
        window.getCurrentLanguage ? window.getCurrentLanguage() : "zh"
    );
}
