main.floors.MT231=
{
    "floorId": "MT231",
    "title": "231 层",
    "name": "231 层",
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
            "type": "setCurtain",
            "time": 1000
        },
        {
            "type": "callBook"
        },
        "\t[十三斧首领]魈魈魈……魈大人？！",
        "\t[魈]想跑？我让你截杀的人呢？嗯？",
        "\t[十三斧首领]魈大人，谨遵您的命令，\n我差一点就成功……",
        "\t[魈]你敢临阵脱逃？",
        "\t[十三斧首领]大人！饶命！\n我打不过那个女孩，不得不逃啊！\n您行行好放我们一马，让我们逃命去吧！",
        "\t[魈]奇怪，这个场面总觉得在哪出现过。\n真是一点创意都没有，\n大人我啊，真的生气了啊！",
        "\t[十三斧首领]快逃——",
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
        "魈的话音还没落地，\n就在他发怒分心的瞬间，\n十三斧们轰然朝四面八方散去。",
        "\t[十三斧成员]大哥，我们……",
        "\t[十三斧首领]往回跑！那个小丫头可能还温柔点！\n还能祸水东引，\n那个魈随便一上头就跟她火并了！",
        "\t[十三斧成员]是！",
        "\t[魈]没用的东西。\n你们愣着干什么？还不随我追上去？",
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "playSound",
            "name": "172-Skill16.ogg"
        },
        {
            "type": "playSound",
            "name": "050-Explosion03.ogg"
        },
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    3
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    3
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    6
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    7
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    8
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    8
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    7
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    3
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    2
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    2
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    3
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    4
                ]
            ],
            "remove": true
        },
        "\t[十三斧成员]大哥，你带我一起逃啊，\n带我一起逃啊——",
        "\t[魈]哈哈，还想逃，都去死吧。",
        {
            "type": "changeFloor",
            "floorId": "MT230",
            "loc": [
                6,
                11
            ],
            "direction": "up"
        },
        {
            "type": "moveHero",
            "time": 100,
            "steps": [
                "up:1"
            ]
        },
        "十三斧首领拼命地加速，死死看着远处，\n忽然远处出现了三人的小队，\n十三斧首领眼中顿时迸发出一丝希望光芒。",
        "\t[十三斧首领]纳可，纳可小姐，救命——",
        {
            "type": "setCurtain",
            "time": 1000
        },
        {
            "type": "setBlock",
            "number": "E1245",
            "loc": [
                [
                    6,
                    7
                ]
            ],
            "floorId": "MT230",
            "time": 1000
        },
        "远处两道残影，\n一前一后，迅速朝队伍飞来，\n特别是后面一道身影，那股庞大气息早就弥漫开。",
        "\t[纳可]……怎么回事？\n这家伙怎么又回来了。",
        {
            "type": "setBlock",
            "number": "E1594",
            "loc": [
                [
                    6,
                    5
                ]
            ],
            "floorId": "MT230",
            "time": 1000
        },
        "\t[魈]没用的。\n你逃不掉的。\n临阵脱逃……死！",
        "\t[雷冬]是十三斧首领，后面是……他谁啊？！\n但我看不透他的气息，小姐，千万别去帮忙，\n我们帮不了，反而会送命！",
        "\t[纳可]……",
        "\t[十三斧首领]快救我——不——",
        {
            "type": "animate",
            "name": "hand",
            "loc": [
                6,
                7
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    7
                ]
            ],
            "floorId": "MT230",
            "remove": true
        },
        "\t[峰]（和资料上描述的一样，崇尚力量的世界，\n杀戮随处可见，地位似乎颇高的家伙就这么死了。）",
        {
            "type": "openDoor",
            "loc": [
                9,
                10
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                10,
                10
            ]
        },
        "那魈眉头皱着，\n看向不远处的纳可三人。",
        "\t[魈]刚才这家伙是在向你们求救？\n小丫头，既然我追杀他们，而你和他们是一伙的，\n你想好怎么死了吗？",
        "\t[纳可]啊？我根本没见过你……\n你哪位……",
        "\t[魈]好你个丫头，看见本大人不行礼也罢，\n和本大人讲话竟不用尊称？\n真是该杀啊，该杀！",
        "\t[纳可]这样就喊打喊杀吗，你谁呀？！\n即使在这个游戏里也过分了叭——",
        "\t[魈]还装傻？现在跪下来向本大人求饶，\n我可以考虑让你死得……\n舒服一点？嘿嘿嘿。",
        "\t[雷冬]这位前辈——！",
        "\t[纳可]你说话怎么没有前后逻辑呀……\n好恶心，想打架吗？",
        "\t[魈]好，很好！你看来是不演了！\n不知死活，\n燕岗城里敢损我魈大人的颜面——",
        "\t[峰]你算什么东西。",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[魈]？？？",
        "\t[魈]什么？你在和我说话？\n喝啊啊啊啊！狂妄的小子，\n我会把你的舌头割下来，让你在死前学会敬畏……",
        {
            "type": "unfollow",
            "name": "feng.png"
        },
        {
            "type": "setBlock",
            "number": "E1191",
            "loc": [
                [
                    6,
                    7
                ]
            ],
            "floorId": "MT230"
        },
        {
            "type": "animate",
            "name": "chaoju",
            "loc": [
                6,
                7
            ]
        },
        "\t[峰]死。",
        {
            "type": "animate",
            "name": "music",
            "loc": [
                6,
                5
            ],
            "async": true
        },
        "\t[魈]这、这怎么可能……",
        {
            "type": "animate",
            "name": "wind",
            "loc": [
                6,
                5
            ],
            "async": true
        },
        "\t[魈]你、你是……世界……",
        {
            "type": "animate",
            "name": "baozha",
            "loc": [
                6,
                5
            ]
        },
        {
            "type": "waitAsync"
        },
        "\t[魈]谔谔啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊\n啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊！",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    5
                ]
            ],
            "floorId": "MT230",
            "remove": true
        },
        {
            "type": "setBlock",
            "number": "E1188",
            "loc": [
                [
                    6,
                    7
                ]
            ],
            "floorId": "MT230"
        },
        "\t[纳可]吼那么大声干嘛！",
        "\t[纳可]……等等？这就……没了？\n连减速带都不算啊！！\n我刚才为什么要听他说那么多话！感觉我好笨。",
        "\t[雷冬]……………我真愚蠢，\n丫头，你身边明明是一位高手，\n真正的高手！",
        "\t[纳可]峰大哥，你……？",
        "\t[峰]呵呵，没什么。\n暂且安全了，先赶路吧，\n有什么话到了主城再说。",
        "\t[雷冬]是，大人！",
        "\t[雷冬]（小姐，这是位真正的超级强者。\n那种低调苦修的修炼者！）",
        "\t[雷冬]（他对你印象挺好，你赶紧得跟他拉近点关系，\n能跟这样的超级强者交好，\n对我们纳家比什么都好啊。）",
        "听着雷叔的传音，\n纳可突然不知道该说什么。",
        "\t[纳可]（呜，这个家伙到底怎么回事，\n这么强为什么不早点说啊！\n害我掉了那么多血！）",
        "\t[纳可]（之前花那么大力气救他，\n其实他根本就没把那只特咕兽当回事吧！）",
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
        "………………",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    7
                ]
            ],
            "floorId": "MT230",
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    10
                ]
            ],
            "floorId": "MT230",
            "remove": true
        },
        {
            "type": "follow",
            "name": "feng.png"
        },
        {
            "type": "openDoor",
            "loc": [
                9,
                10
            ],
            "floorId": "MT231"
        },
        {
            "type": "openDoor",
            "loc": [
                10,
                10
            ],
            "floorId": "MT231"
        },
        {
            "type": "setCurtain",
            "time": 1000
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,6": {
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
        "4,7": {
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
        "8,7": {
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
        "5,8": {
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
        "7,8": {
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
        "6,4": {
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
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,10": {
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
    [173,173,173,173,  0,  0, 88,  0,  0,173,173,173,173],
    [173,173,173,173,  0,1246,  0,1246,  0,173,173,173,173],
    [173,173,173,  0,1246,  0,  0,  0,1246,  0,173,173,173],
    [173,173,  0,  0,  0,  0,1245,  0,  0,  0,  0,173,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,1597,  0,  0,  0,  0,  0,173],
    [173,173,  0,  0,1392,  0,  0,  0,1389,  0,  0,173,173],
    [173,173,173,  0,  0,1396,  0,1399,  0,  0,173,173,173],
    [173,173,173,173,  0,  0,  0,  0,  0,173,173,173,173],
    [173,173,173,173,  0,  0,  0,  0,  0, 85, 85, 87,173],
    [173,173,173,173,173,173,173,173,173,173,173,173,173],
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