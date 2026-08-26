main.floors.MT200=
{
    "floorId": "MT200",
    "title": "200 层",
    "name": "200 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 10000,
    "defaultGround": 970,
    "bgm": "13.mp3",
    "firstArrive": [
        "\t[昊荒]警报！警报！\n不明来历生命体已经抵达核心区域！\n启用主战中枢，执行紧急清扫程序——",
        {
            "type": "moveHero",
            "time": 200,
            "steps": [
                "down:2",
                "left:1"
            ]
        },
        {
            "type": "function",
            "function": "function(){\ncore.drawWarning(4, 6, '昊荒')\n}"
        },
        {
            "type": "sleep",
            "time": 3000,
            "noSkip": true
        },
        "\t[纳可]喂喂，前面那家伙，\n干嘛要模仿机械音对船舱里喊话啊！！",
        "\t[纳娜米]那个……失礼了，这位前辈，\n你是什么主战中枢？",
        "\t[昊荒]哈哈！我早就料到了，\n这飞船里如此之多的宝物，\n定能引起各路强者争夺。",
        "\t[昊荒]还好我技高一筹！\n现在舱门锁死了，你们谁都别想活着出去！\n把你们所有的宝石留下吧！",
        "\t[纳可]怎么办啊姐姐……\n这个家伙，我们好像也打不赢啊。",
        "\t[纳娜米]等一下……他的逻辑是不是有点问题？\n他把自己和宝物跟我们一起锁在了船里……\n难道不应该在外面堵我们吗？",
        "\t[纳可]啊？对哦……\n不过姐姐，最近发生的怪事实在太多了，\n虽然这家伙在这里，但我勉强还能理解！",
        "\t[昊荒]不然呢？那怎么办？\n这游戏的楼梯只能往上走，\n在170层堵你们有什么用啊？",
        "\t[昊荒]快点，别磨蹭了！\n交出你们的黄钥匙，\n黄钥匙自古以来就是我们圣荒城的固有资产。",
        "\t[纳娜米]……这下麻烦了。\n他好像脑子有点问题，\n但足足云霄级五阶……",
        "\t[纳可]有了！用楼传！！",
        "\t[纳娜米]可可……\n事到如今也只好这样了，\n但不要逞强，迅速偷掉这里的宝物……跑！",
        "\t[纳可]明白！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,4": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "4,6": [
            {
                "type": "setCurtain",
                "color": [
                    255,
                    255,
                    255,
                    1
                ],
                "time": 1000,
                "keep": true
            },
            {
                "type": "choices",
                "text": "【第二幕】已结束。可以登录后在这里提交成绩，\n防止存档丢失。你可以选择以下三种计分方式。\n\n在【天之门】中，一把绿钥匙计为100兆分数，\n因此成绩的排头数字将代表你的绿钥匙数量。\n你保留下的绿钥匙越多，对于分数就越有利。\n\n【生之门】将记录为你当前生命。\n\n【匙之门】则只看持有的道具数量。\n权值为：黄钥匙1、蓝钥匙3、\n红钥匙/破墙镐/飞行器10、绿钥匙25。",
                "choices": [
                    {
                        "text": "天之门",
                        "color": [
                            111,
                            229,
                            139,
                            1
                        ],
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "operator": "+=",
                                "value": "item:greenKey*1e14"
                            },
                            {
                                "type": "win",
                                "reason": "第二幕 - 天之门",
                                "noexit": 1
                            },
                            {
                                "type": "insert",
                                "loc": [
                                    6,
                                    3
                                ],
                                "floorId": "sample0"
                            }
                        ]
                    },
                    {
                        "text": "生之门",
                        "color": [
                            231,
                            110,
                            190,
                            1
                        ],
                        "action": [
                            {
                                "type": "win",
                                "reason": "第二幕 - 生之门",
                                "noexit": 1
                            },
                            {
                                "type": "insert",
                                "loc": [
                                    6,
                                    3
                                ],
                                "floorId": "sample0"
                            }
                        ]
                    },
                    {
                        "text": "匙之门",
                        "color": [
                            227,
                            206,
                            93,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(item:yellowKey+item:blueKey*3+item:redKey*10+item:pickaxe*10+item:centerFly*10+item:greenKey*25==(0==1))",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:hp",
                                        "operator": "/=",
                                        "value": "生命*2"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "setValue",
                                        "name": "status:hp",
                                        "value": "item:yellowKey+item:blueKey*3+item:redKey*10+item:pickaxe*10+item:centerFly*10+item:greenKey*25"
                                    }
                                ]
                            },
                            {
                                "type": "win",
                                "reason": "第二幕 - 匙之门",
                                "noexit": 1
                            },
                            {
                                "type": "insert",
                                "loc": [
                                    6,
                                    3
                                ],
                                "floorId": "sample0"
                            }
                        ]
                    },
                    {
                        "text": "继续游戏",
                        "color": [
                            159,
                            214,
                            220,
                            1
                        ],
                        "action": [
                            {
                                "type": "setValue",
                                "name": "item:I953",
                                "value": "1"
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "MT201",
                                "loc": [
                                    6,
                                    7
                                ],
                                "direction": "up"
                            },
                            {
                                "type": "unfollow",
                                "name": "nanami.png"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I821",
                                "value": "0"
                            },
                            {
                                "type": "setCurtain",
                                "time": 1000,
                                "moveMode": "easeIn"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "8,6": [
            "\t[纳可]近距离接触这等强者……\n竟然意外地又使领域前进了一步！\n该变强了！"
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [190322,190323,156,156,156,156,2077,156,156,156,156,190326,190327],
    [190330,190331,  4,  4,  4,  4,  4,  4,  4,  4,  4,190334,190335],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,156,156,156,156,156,156,156,156,156,  4,  4],
    [156,156,156,  0,1487,  0, 88,  0,1487,  0,156,156,156],
    [  4,  4,  4,1488,  0,1487,  0,1487,  0,1488,  4,  4,  4],
    [  4, 61, 84,  0,721,  0,  0,  0,933,  0, 84, 61,  4],
    [  4,  4,  4, 24,  0,1487,  0,1487,  0, 24,  4,  4,  4],
    [156,156,156,  0,1488,  0,1489,  0,1488,  0,156,156,156],
    [  4,  4,156,156,156,156,156,156,156,156,156,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [190352,190353,  4,  4,  4,  4,  4,  4,  4,  4,  4,190324,190325],
    [190360,190361,156,156,156,156,156,156,156,156,156,190332,190333]
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