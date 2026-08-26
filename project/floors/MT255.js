main.floors.MT255=
{
    "floorId": "MT255",
    "title": "255 层",
    "name": "255 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "03.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 100000,
    "defaultGround": 919,
    "bgm": "16.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "2,5": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,12": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT255_6_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT255_6_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT255_6_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT255_6_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT255_6_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT255_6_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT255_6_11",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,7": [
            "\t[纳可]奇怪，追寻着那个女孩的踪迹过来，\n结果她突然就不见了。",
            "\t[纳娜米]可可快看，那边有……\n呃，那是什么东西？",
            "\t[出芽茸茸队长]布咕布咕！咕咕咕！\n（愤怒地蠕动）",
            "\t[燃血茸茸]嘶嘶，嘶嘶。嘶嘶嘶嘶？嘶。",
            "\t[风砂石]…………………………………………",
            "\t[纳娜米]啊，我们是路过的冒险者。\n虽然不知道各位能不能听懂……",
            "\t[出芽茸茸队长]叽！叽叽！\n（蠕动）（跳弹）\n（阴暗地爬行）",
            "\t[燃血茸茸]嘶嘶嘶嘶嘶嘶——",
            "\t[风砂石]…………………………………………\n…………………………………………",
            "\t[纳可]姐姐，它们好像生气了……\n而且那个带头的，头上还顶着个芽，\n看起来好奇怪……",
            "\t[出芽茸茸队长]布咕——！！\n（猛地吐出一团火）",
            "\t[纳娜米]哇吐火了！躲开可可！\n这群家伙完全没法交流啊！\n直接动手吧！",
            {
                "type": "battle",
                "loc": [
                    6,
                    9
                ]
            },
            {
                "type": "battle",
                "loc": [
                    5,
                    8
                ]
            },
            {
                "type": "battle",
                "loc": [
                    7,
                    8
                ]
            },
            {
                "type": "battle",
                "loc": [
                    4,
                    9
                ]
            },
            {
                "type": "battle",
                "loc": [
                    8,
                    9
                ]
            },
            {
                "type": "battle",
                "loc": [
                    5,
                    10
                ]
            },
            {
                "type": "battle",
                "loc": [
                    7,
                    10
                ]
            },
            "\t[出芽茸茸队长]咕咕……咕咕……",
            {
                "type": "openDoor",
                "loc": [
                    6,
                    11
                ]
            },
            "\t[纳可]跑掉了……\n姐姐，这个世界是不是要崩坏了啊。\n我再也不想遇到这种不明生物了。",
            "\t[纳娜米]别抱怨了，它们往那边的冰塑建筑群去了。\n虽然很不想跟过去，但那是唯一的线索。\n忍一忍，我们走！"
        ]
    },
    "autoEvent": {
        "6,11": {
            "0": {
                "condition": "flag:door_MT255_6_11==7",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT255_6_11",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20,2077, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 15, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20,1489, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 15, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 88,  0, 47, 47,  0, 15,1489, 15,2077, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 86, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 86, 20, 20, 20, 20, 20, 20],
    [ 20, 20,2077,  0,  0,1523,  0,1518,  0,  0,2077, 20, 20],
    [ 20, 20,  0,2078,1515,  0,1528,  0,1515,2078,  0, 20, 20],
    [ 20, 20,2077,  0,  0,1523,  0,1518,  0,  0,2077, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 85, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 87, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "weather": [
        "snow",
        2
    ]
}