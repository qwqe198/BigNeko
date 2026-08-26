main.floors.MT230=
{
    "floorId": "MT230",
    "title": "230 层",
    "name": "230 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 50000,
    "defaultGround": 973,
    "bgm": "15.mp3",
    "color": [
        0,
        0,
        0,
        0.2
    ],
    "weather": [
        "fog",
        1
    ],
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 200,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "animate",
            "name": "jingya",
            "loc": "hero"
        },
        {
            "type": "setText",
            "position": "down",
            "offset": 30
        },
        "\t[纳可]有情况！",
        {
            "type": "sleep",
            "time": 500
        },
        "十三道身影，\n仿佛十三发炮弹迅猛地从高树上俯冲下来，\n拦在了纳可两人之前！",
        {
            "type": "callBook"
        },
        "\t[十三斧首领]哈哈，此路是我开，此树是我栽！\n纳家丫头，你可知道我是谁？",
        "\t[纳可]诶？十，十三斧……\n那个所有属性全部爆攻的组织吗。",
        "\t[十三斧首领]算你识相，\n是你在飞船里抢劫了圣荒城的将军？\n把身上的宝物都交出来！",
        "\t[十三斧成员]是啊是啊！\n年轻人这么爱抢宝石怎么行呢？\n还是交给我们保管吧。",
        "\t[峰]啧……",
        "\t[纳可]抢劫？没有呀，是那家伙先动手的。\n而且你们突然出现在这里，\n总觉得好违和。",
        "\t[纳可]就好像本来没有理由，\n然后强行找了一个理由堵路一样。\n不会也是被无形的手推动的叭……",
        "\t[十三斧首领]哈？！\n少说废话！这次我们的确是奉命而来！\n誓要在这里截住你！",
        "\t[十三斧首领]纳家小丫头，\n看你最近到处抢宝石风头很盛啊。\n可惜今天碰上我们，是你的末日到了——",
        "\t[纳可]你才末日到了！！",
        "\t[？？？]十三斧，手下留人！",
        {
            "type": "setBlock",
            "number": "E1199",
            "loc": [
                [
                    7,
                    10
                ]
            ],
            "time": 500
        },
        {
            "type": "callBook"
        },
        "\t[雷冬]抱歉，小姐，\n我来迟了。",
        "\t[纳可]……是雷叔！\n太好了，峰大哥，我们有救了。",
        "\t[雷冬]小姐，那两个商人是假意被那魅影幻姬击败。\n趁着你上前营救之时，\n暗中有人配合魅影幻姬的能力，施展幻术。",
        "\t[雷冬]他们的目的，\n是把小姐你引导到这片森林里。\n若非老爷吩咐我暗中护卫，恐怕……",
        "\t[纳可]……真让人火大啊。",
        "\t[雷冬]对方都是成名的云霄级高手，\n不过以我折影剑的特殊之处，\n也可拦他一拦，小姐你快走——",
        {
            "type": "moveHero",
            "steps": [
                "up:1"
            ]
        },
        "\t[纳可]我不走！我受不了了！\n什么十三斧，吃我一招银霜月轮——",
        {
            "type": "callBook"
        },
        {
            "type": "battle",
            "id": "E1240"
        },
        "\t[十三斧首领]什么？怎会如此，\n怪物！这纳家的小丫头是怪物！\n情报有误！她根本不是天空级！",
        "\t[纳可]你的末日到了，再接我一招——",
        "\t[十三斧首领]可恶，魈那个……大人骗了我们，\n今天是我状态不好，\n纳家丫头，有本事我们改日再战——",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    7
                ]
            ],
            "remove": true
        },
        "\t[十三斧成员]不！老大跑了！我们也跑啊！",
        "\t[峰]（果然用不到我了么……）",
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    5
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    5
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    5
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    4
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    4
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    3
                ]
            ],
            "remove": true
        },
        "尘土飞扬，庞大的队伍原本嚣张无比，\n此时此刻，却迅速灰溜溜地离去。",
        "\t[纳可]等等，这在搞什么啊！\n闹了半天怎么突然就走了！",
        "\t[雷冬]我的天……\n小姐，你现在到底有多强？",
        "\t[纳可]唔，并没有那么强，\n刚才一怒之下暴打了他，\n但差点就没打过。",
        "\t[雷冬]……",
        "\t[峰]……",
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 1000,
            "keep": true
        },
        "与此同时……",
        {
            "type": "changeFloor",
            "floorId": "MT231",
            "loc": [
                6,
                -1
            ],
            "direction": "down"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,10": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "6,7": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "6,8": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "6,5": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "5,4": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "7,4": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "4,5": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "8,5": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "6,3": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        }
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [173,173,173,173,173,173,173,173,173,173,173,173,173],
    [173,173,173,173,173,  0, 87,  0,173,173,173,173,173],
    [173,173,173,173,  0,  0,  0,  0,  0,173,173,173,173],
    [173,173,  0,  0,  0,  0,1246,  0,  0,  0,  0,173,173],
    [173,173,  0,  0,  0,1246,  0,1246,  0,  0,  0,173,173],
    [173,  0,  0,  0,1246,  0,1246,  0,1246,  0,  0,  0,173],
    [173,173,173,173,173,  0,  0,  0,173,173,173,173,173],
    [173,173,173,173,173,  0,1245,  0,173,173,173,173,173],
    [173,173,173,90038,90039,  0,  0,  0,90026,90027,173,173,173],
    [173,173,173,173,173,  0,  0,  0,173,173,173,173,173],
    [173,173,173,173,173,  0,  0,  0,173,173,173,173,173],
    [173,173,173,173,  0,  0, 88,  0,  0,173,173,173,173],
    [173,173,173,173,173,173,173,173,173,173,173,173,173]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}