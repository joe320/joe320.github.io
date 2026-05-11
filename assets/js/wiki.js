const wikiTranslations = {
    zh: {
        "meta.title": "Minaro Wiki",
        "wiki.meta.description": "Minaro Wiki 是 Minaro Minecraft 世界的居民手册，记录规则、经济、铁路、建筑、死亡机制与公共制度。",
        "wiki.meta.ogdescription": "Minaro 的居民手册与世界制度档案。",

        "wiki.hero.eyebrow": "Resident Handbook",
        "wiki.hero.title": "Minaro Wiki",
        "wiki.hero.intro": "这里记录 Minaro 的基本规则、经济制度、建筑原则、铁路规划、死亡机制与公共生活方式。它不是一份冷冰冰的服务器说明书，而是这个世界的居民手册。",

        "wiki.sidebar.title": "目录",

        "wiki.toc.quickStart": "快速开始",
        "wiki.toc.principles": "世界原则",
        "wiki.toc.rules": "基本规则",
        "wiki.toc.economy": "经济与货币",
        "wiki.toc.protection": "物品与建筑保护",
        "wiki.toc.death": "死亡机制",
        "wiki.toc.railway": "铁路与聚落",
        "wiki.toc.plugins": "插件说明",

        "wiki.quickStart.title": "快速开始",
        "wiki.quickStart.serverAddress": "服务器地址",
        "wiki.quickStart.version": "版本",
        "wiki.quickStart.map": "地图",
        "wiki.quickStart.desc": "Minaro 是一个小型长期世界。这里更重视建筑、铁路、港口、钓鱼、酿酒、聚落与玩家之间的合作。如果你习惯快速毕业、极限刷资源或大型工业化，这里可能不是最适合你的地方。",

        "wiki.principles.title": "世界原则",
        "wiki.principles.1": "距离应该有意义。铁路、道路、港口和补给点是世界的一部分。",
        "wiki.principles.2": "世界不是菜单。我们尽量避免过度依赖传送、GUI 商店和数字经济。",
        "wiki.principles.3": "建筑会留下时间痕迹。请尽量建设能被他人经过、使用和记住的地方。",
        "wiki.principles.4": "不鼓励极端工业化。公共体验、服务器稳定与世界氛围优先于效率。",

        "wiki.rules.title": "基本规则",
        "wiki.rules.respectPlayers.title": "尊重玩家",
        "wiki.rules.respectPlayers.desc": "不骚扰、不歧视、不恶意攻击他人。这里是长期小社区，不是一次性战场。",
        "wiki.rules.respectBuilds.title": "尊重建筑",
        "wiki.rules.respectBuilds.desc": "未经允许，不破坏、不修改、不占用他人的建筑、仓库、商店或公共工程。",
        "wiki.rules.noCheating.title": "禁止作弊与漏洞滥用",
        "wiki.rules.noCheating.desc": "禁止外挂、复制漏洞、恶意卡服机器，以及破坏世界平衡的极端工业设施。",
        "wiki.rules.publicAccess.title": "保持公共通道开放",
        "wiki.rules.publicAccess.desc": "道路、铁路、河道、港口与公共设施应尽量保持通行，不随意封堵。",

        "wiki.economy.title": "经济与货币",
        "wiki.economy.desc": "Minaro 倾向使用实体物品作为交易媒介，而不是传统的余额数字经济。货币会占用空间，可以被运输、储存、交换，因此贸易会真正发生在地图中。",
        "wiki.economy.harborTicket.title": "港券",
        "wiki.economy.harborTicket.desc": "基础流通货币，使用毒马铃薯作为媒介。适合日常小额交易。",
        "wiki.economy.seaTicket.title": "海券",
        "wiki.economy.seaTicket.desc": "高价值储值货币，使用鹦鹉螺壳作为媒介。适合大宗贸易和储值。",
        "wiki.economy.rate": "<strong>参考汇率：</strong>1 个鹦鹉螺壳 ≈ 32 个毒马铃薯。实际交易允许玩家自由议价。",

        "wiki.protection.title": "物品与建筑保护",
        "wiki.protection.desc": "Minaro 不使用大范围地皮插件。世界保持连续开放，但私人物品需要被保护。",
        "wiki.protection.1": "箱子、门、熔炉等容器可以使用锁定插件保护。",
        "wiki.protection.2": "建筑破坏和偷窃会通过 CoreProtect 查询并回滚。",
        "wiki.protection.3": "公共设施，例如道路、铁路、车站、港口，不应被私人封锁。",
        "wiki.protection.4": "建议玩家把贵重物品放入受保护容器，不要长期裸露堆放。",

        "wiki.death.title": "死亡机制",
        "wiki.death.desc": "Minaro 希望死亡有代价，但不会让一次失误摧毁玩家的长期积累。",
        "wiki.death.1": "死亡后会生成墓碑或死亡容器。",
        "wiki.death.2": "玩家需要返回死亡地点回收遗物。",
        "wiki.death.3": "不开放 <code>/back</code>，交通和救援应成为世界的一部分。",
        "wiki.death.4": "岩浆和虚空死亡会根据插件设置尽量生成在最近安全位置。",

        "wiki.railway.title": "铁路与聚落",
        "wiki.railway.desc": "铁路是 Minaro 的重要公共基础设施。它不仅用于移动，也用于连接聚落、贸易和共同记忆。",
        "wiki.railway.1": "鼓励建设车站、港口、驿站、仓库和沿线聚落。",
        "wiki.railway.2": "未经许可不要拆改公共铁路和车站结构。",
        "wiki.railway.3": "聚落建设应尽量保留道路、出入口和公共空间。",
        "wiki.railway.4": "大型公共工程建议先在公告栏或 Discord 中提出计划。",

        "wiki.plugins.title": "插件说明",
        "wiki.plugins.chestshop": "用于地图内实体商店，支持玩家之间的物品交易。",
        "wiki.plugins.brewery": "用于酿酒与地方特产，适合酒馆、聚会和聚落文化。",
        "wiki.plugins.evenmorefish": "增强钓鱼内容，让渔业和港口生活更有意义。",
        "wiki.plugins.graves": "管理死亡后的物品回收，保留风险但降低挫败感。",
        "wiki.plugins.voicechat": "附近语音，让车站、港口和探险更有临场感。",
        "wiki.plugins.coreprotect": "用于日志查询、防熊和回滚，是长期世界的安全基础。"
    },

    en: {
        "meta.title": "Minaro Wiki",
        "wiki.meta.description": "Minaro Wiki is the resident handbook for the Minaro Minecraft world, covering rules, economy, railways, building principles, death mechanics and public systems.",
        "wiki.meta.ogdescription": "The resident handbook and civic archive of Minaro.",

        "wiki.hero.eyebrow": "Resident Handbook",
        "wiki.hero.title": "Minaro Wiki",
        "wiki.hero.intro": "This page records the rules, economy, building principles, railway planning, death mechanics and public life of Minaro. It is not just a server manual, but a handbook for residents of this world.",

        "wiki.sidebar.title": "Contents",

        "wiki.toc.quickStart": "Quick Start",
        "wiki.toc.principles": "World Principles",
        "wiki.toc.rules": "Rules",
        "wiki.toc.economy": "Economy & Currency",
        "wiki.toc.protection": "Protection",
        "wiki.toc.death": "Death Mechanics",
        "wiki.toc.railway": "Railway & Settlements",
        "wiki.toc.plugins": "Plugins",

        "wiki.quickStart.title": "Quick Start",
        "wiki.quickStart.serverAddress": "Server Address",
        "wiki.quickStart.version": "Version",
        "wiki.quickStart.map": "Map",
        "wiki.quickStart.desc": "Minaro is a small long-term world. It values building, railways, harbors, fishing, brewing, settlements and cooperation between players. If you prefer rushing progression, extreme resource farming or large-scale industrialization, this may not be the right place for you.",

        "wiki.principles.title": "World Principles",
        "wiki.principles.1": "Distance should matter. Railways, roads, harbors and supply points are part of the world.",
        "wiki.principles.2": "The world is not a menu. We try to avoid excessive teleportation, GUI shops and digital economy systems.",
        "wiki.principles.3": "Buildings leave traces of time. Build places that others can pass through, use and remember.",
        "wiki.principles.4": "Extreme industrialization is discouraged. Shared experience, server stability and atmosphere matter more than efficiency.",

        "wiki.rules.title": "Rules",
        "wiki.rules.respectPlayers.title": "Respect Players",
        "wiki.rules.respectPlayers.desc": "No harassment, discrimination or malicious behavior. This is a long-term small community, not a disposable battlefield.",
        "wiki.rules.respectBuilds.title": "Respect Builds",
        "wiki.rules.respectBuilds.desc": "Do not destroy, modify or occupy other players' builds, storage, shops or public projects without permission.",
        "wiki.rules.noCheating.title": "No Cheating or Exploit Abuse",
        "wiki.rules.noCheating.desc": "Hacked clients, duplication glitches, lag machines and extreme facilities that break world balance are prohibited.",
        "wiki.rules.publicAccess.title": "Keep Public Access Open",
        "wiki.rules.publicAccess.desc": "Roads, railways, rivers, harbors and public facilities should remain accessible and not be blocked casually.",

        "wiki.economy.title": "Economy & Currency",
        "wiki.economy.desc": "Minaro tends to use physical items as trade media instead of traditional digital balances. Currency takes inventory space, can be transported, stored and exchanged, so trade actually happens in the world.",
        "wiki.economy.harborTicket.title": "Harbor Ticket",
        "wiki.economy.harborTicket.desc": "The basic circulating currency, represented by poisonous potatoes. Suitable for daily small trades.",
        "wiki.economy.seaTicket.title": "Sea Ticket",
        "wiki.economy.seaTicket.desc": "A higher-value storage currency, represented by nautilus shells. Suitable for bulk trade and saving value.",
        "wiki.economy.rate": "<strong>Reference rate:</strong> 1 nautilus shell ≈ 32 poisonous potatoes. Actual trade prices may be negotiated freely.",

        "wiki.protection.title": "Protection",
        "wiki.protection.desc": "Minaro does not use large land-claim plugins. The world remains open and continuous, but private items still need protection.",
        "wiki.protection.1": "Chests, doors, furnaces and other containers can be protected with locking plugins.",
        "wiki.protection.2": "Building griefing and theft can be checked and rolled back through CoreProtect.",
        "wiki.protection.3": "Public facilities such as roads, railways, stations and harbors should not be privately blocked.",
        "wiki.protection.4": "Players are advised to store valuables in protected containers instead of leaving them exposed.",

        "wiki.death.title": "Death Mechanics",
        "wiki.death.desc": "Minaro wants death to have a cost, but not to destroy long-term progress with one mistake.",
        "wiki.death.1": "A grave or death container will be created after death.",
        "wiki.death.2": "Players need to return to the death location to recover their belongings.",
        "wiki.death.3": "<code>/back</code> is not available; transportation and rescue should become part of the world.",
        "wiki.death.4": "Lava and void deaths will try to generate the grave at the nearest safe location depending on plugin settings.",

        "wiki.railway.title": "Railway & Settlements",
        "wiki.railway.desc": "Railways are important public infrastructure in Minaro. They are not only for movement, but also for connecting settlements, trade and shared memory.",
        "wiki.railway.1": "Stations, harbors, depots, warehouses and settlements along railway lines are encouraged.",
        "wiki.railway.2": "Do not modify or remove public railways and stations without permission.",
        "wiki.railway.3": "Settlements should preserve roads, entrances and shared public space.",
        "wiki.railway.4": "Large public projects should be proposed on the bulletin board or Discord first.",

        "wiki.plugins.title": "Plugins",
        "wiki.plugins.chestshop": "Used for physical in-world shops and item trading between players.",
        "wiki.plugins.brewery": "Used for brewing and local specialties, supporting taverns, gatherings and settlement culture.",
        "wiki.plugins.evenmorefish": "Expands fishing content and makes fishery and harbor life more meaningful.",
        "wiki.plugins.graves": "Manages item recovery after death while keeping risk and reducing frustration.",
        "wiki.plugins.voicechat": "Proximity voice chat, making stations, harbors and exploration feel more present.",
        "wiki.plugins.coreprotect": "Used for logging, anti-griefing and rollback. It is a safety foundation for a long-term world."
    },

    ja: {
        "meta.title": "Minaro Wiki",
        "wiki.meta.description": "Minaro Wiki は、Minaro Minecraft ワールドの住民向けハンドブックです。ルール、経済、鉄道、建築方針、死亡システム、公共制度を記録します。",
        "wiki.meta.ogdescription": "Minaro の住民手帳と世界制度の記録です。",

        "wiki.hero.eyebrow": "Resident Handbook",
        "wiki.hero.title": "Minaro Wiki",
        "wiki.hero.intro": "ここには Minaro の基本ルール、経済制度、建築方針、鉄道計画、死亡システム、公共生活のあり方が記録されています。これは単なるサーバー説明書ではなく、この世界の住民手帳です。",

        "wiki.sidebar.title": "目次",

        "wiki.toc.quickStart": "はじめに",
        "wiki.toc.principles": "世界の方針",
        "wiki.toc.rules": "基本ルール",
        "wiki.toc.economy": "経済と通貨",
        "wiki.toc.protection": "保護システム",
        "wiki.toc.death": "死亡システム",
        "wiki.toc.railway": "鉄道と集落",
        "wiki.toc.plugins": "プラグイン",

        "wiki.quickStart.title": "はじめに",
        "wiki.quickStart.serverAddress": "サーバーアドレス",
        "wiki.quickStart.version": "バージョン",
        "wiki.quickStart.map": "地図",
        "wiki.quickStart.desc": "Minaro は小規模で長期運営を前提とした世界です。建築、鉄道、港、釣り、醸造、集落、そしてプレイヤー同士の協力を重視しています。短期間での進行、極端な資源効率、大規模な工業化を好む場合、この世界はあまり向いていないかもしれません。",

        "wiki.principles.title": "世界の方針",
        "wiki.principles.1": "距離には意味があります。鉄道、道路、港、補給地点は世界の一部です。",
        "wiki.principles.2": "世界はメニューではありません。過度なテレポート、GUIショップ、デジタル経済はできるだけ避けます。",
        "wiki.principles.3": "建築は時間の痕跡を残します。他の人が通り、使い、記憶できる場所を作ってください。",
        "wiki.principles.4": "極端な工業化は推奨されません。公共体験、サーバー安定性、世界の雰囲気を効率より優先します。",

        "wiki.rules.title": "基本ルール",
        "wiki.rules.respectPlayers.title": "プレイヤーを尊重する",
        "wiki.rules.respectPlayers.desc": "嫌がらせ、差別、悪意ある攻撃は禁止です。ここは長期的な小規模コミュニティであり、使い捨ての戦場ではありません。",
        "wiki.rules.respectBuilds.title": "建築を尊重する",
        "wiki.rules.respectBuilds.desc": "許可なく他人の建築、倉庫、商店、公共事業を破壊・変更・占有しないでください。",
        "wiki.rules.noCheating.title": "チートと不具合悪用の禁止",
        "wiki.rules.noCheating.desc": "不正クライアント、複製バグ、悪意ある負荷装置、世界のバランスを壊す極端な施設は禁止です。",
        "wiki.rules.publicAccess.title": "公共通路を開放する",
        "wiki.rules.publicAccess.desc": "道路、鉄道、河川、港、公共施設はできるだけ通行可能な状態を保ってください。",

        "wiki.economy.title": "経済と通貨",
        "wiki.economy.desc": "Minaro では、従来のデジタル残高ではなく、実体のあるアイテムを取引媒体として使う方針です。通貨はインベントリを占有し、輸送・保管・交換できるため、取引は実際に世界の中で発生します。",
        "wiki.economy.harborTicket.title": "港券",
        "wiki.economy.harborTicket.desc": "基本的な流通通貨で、毒ジャガイモを媒体として使用します。日常的な小額取引に適しています。",
        "wiki.economy.seaTicket.title": "海券",
        "wiki.economy.seaTicket.desc": "高価値の保存通貨で、オウムガイの殻を媒体として使用します。大口取引や価値の保存に適しています。",
        "wiki.economy.rate": "<strong>参考レート：</strong>オウムガイの殻 1 個 ≈ 毒ジャガイモ 32 個。実際の取引価格は自由に交渉できます。",

        "wiki.protection.title": "保護システム",
        "wiki.protection.desc": "Minaro では大規模な土地保護プラグインを使用しません。世界は連続した開かれた空間として保たれますが、個人の持ち物は保護できます。",
        "wiki.protection.1": "チェスト、ドア、かまどなどのコンテナはロックプラグインで保護できます。",
        "wiki.protection.2": "建築破壊や盗難は CoreProtect により確認・ロールバックできます。",
        "wiki.protection.3": "道路、鉄道、駅、港などの公共施設を私的に封鎖しないでください。",
        "wiki.protection.4": "貴重品は保護されたコンテナに入れ、長時間むき出しで放置しないことを推奨します。",

        "wiki.death.title": "死亡システム",
        "wiki.death.desc": "Minaro では死亡に代償を持たせますが、一度のミスで長期的な蓄積が失われないようにします。",
        "wiki.death.1": "死亡後、墓または死亡コンテナが生成されます。",
        "wiki.death.2": "プレイヤーは死亡地点へ戻って遺品を回収する必要があります。",
        "wiki.death.3": "<code>/back</code> は使用できません。交通と救助も世界の一部です。",
        "wiki.death.4": "溶岩や奈落で死亡した場合、プラグイン設定に応じて可能な限り近くの安全地点に墓が生成されます。",

        "wiki.railway.title": "鉄道と集落",
        "wiki.railway.desc": "鉄道は Minaro の重要な公共インフラです。移動だけでなく、集落、交易、共有された記憶をつなぐ役割があります。",
        "wiki.railway.1": "駅、港、停留所、倉庫、沿線集落の建設を歓迎します。",
        "wiki.railway.2": "許可なく公共鉄道や駅の構造を撤去・変更しないでください。",
        "wiki.railway.3": "集落では道路、出入口、公共空間をできるだけ残してください。",
        "wiki.railway.4": "大規模な公共事業は、まず掲示板または Discord で提案してください。",

        "wiki.plugins.title": "プラグイン",
        "wiki.plugins.chestshop": "ワールド内の実体商店とプレイヤー間のアイテム取引に使用します。",
        "wiki.plugins.brewery": "醸造と地域特産品に使用し、酒場、集まり、集落文化を支えます。",
        "wiki.plugins.evenmorefish": "釣り要素を拡張し、漁業と港の暮らしに意味を持たせます。",
        "wiki.plugins.graves": "死亡後のアイテム回収を管理し、リスクを残しつつ挫折感を抑えます。",
        "wiki.plugins.voicechat": "近接ボイスチャットにより、駅、港、探索の臨場感を高めます。",
        "wiki.plugins.coreprotect": "ログ確認、荒らし対策、ロールバックに使用します。長期世界の安全基盤です。"
    }
};

if (window.mergeTranslations) {
    window.mergeTranslations(wikiTranslations);
}

if (window.setLanguage) {
    window.setLanguage(
        window.getCurrentLanguage ? window.getCurrentLanguage() : "zh"
    );
}

const tocLinks = document.querySelectorAll(".wiki-toc a");
const sections = document.querySelectorAll(".wiki-section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const id = entry.target.getAttribute("id");

            tocLinks.forEach((link) => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${id}`
                );
            });
        });
    },
    {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0
    }
);

sections.forEach((section) => observer.observe(section));
