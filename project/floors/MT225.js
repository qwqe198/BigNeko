main.floors.MT225=
{
    "floorId": "MT225",
    "title": "225 层",
    "name": "225 层",
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
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "12,10": [
            {
                "type": "choices",
                "text": "\t[绿色按钮,A985]如果觉得打不动的话，\n不妨来点补给再前进吧！\n又或者，如果你更喜欢绿钥匙……？",
                "choices": [
                    {
                        "text": "获得6把绿钥匙",
                        "color": [
                            75,
                            217,
                            63,
                            1
                        ],
                        "need": "flag:225f<1",
                        "action": [
                            {
                                "type": "animate",
                                "name": "green"
                            },
                            {
                                "type": "setValue",
                                "name": "item:greenKey",
                                "operator": "+=",
                                "value": "6"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:225f",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "text": "获得3把绿钥匙、3亿经验",
                        "color": [
                            118,
                            209,
                            125,
                            1
                        ],
                        "need": "flag:225f<1",
                        "action": [
                            {
                                "type": "animate",
                                "name": "green"
                            },
                            {
                                "type": "setValue",
                                "name": "item:greenKey",
                                "operator": "+=",
                                "value": "3"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:saltygreen",
                                "operator": "+=",
                                "value": "3"
                            },
                            {
                                "type": "setValue",
                                "name": "status:exp",
                                "operator": "+=",
                                "value": "3e8"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:225f",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "text": "获得6亿经验",
                        "color": [
                            167,
                            217,
                            167,
                            1
                        ],
                        "need": "flag:225f<1",
                        "action": [
                            {
                                "type": "animate",
                                "name": "green"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:saltygreen",
                                "operator": "+=",
                                "value": "6"
                            },
                            {
                                "type": "setValue",
                                "name": "status:exp",
                                "operator": "+=",
                                "value": "6e8"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:225f",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "text": "离去…",
                        "action": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "4,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,11": {
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
    [173,173,173,1489,  0,173,2095,173,173,173,1488,1487,173],
    [173,2077, 82,  0,1489,173,1347,  0,1164,1348,1163,1488,173],
    [173,173,173,173, 82,173, 83,173,173,173,1488,173,173],
    [173,1488,1488, 81, 21,1343,1150,173,173,173,1345,173,173],
    [173,173,173,173,  0,173,1344,173,173,173, 21,173,173],
    [173,173,173,173,1164,173,  0,1346,1151,1346,  0,1163,173],
    [173,173,173,1486,173,173, 15,173,173,173, 81,173,173],
    [173,173,1163,  0,173,173,1489,  0, 22,1349,1163,173,173],
    [173,173,173,1344, 81, 21,173,1152,173,173,1345,173,173],
    [173,173,173,173,173,1344,173,1342,173,173,1489,  0,985],
    [173,1488,1488, 81, 88,1488,  0,1488, 82, 82,  0, 87,173],
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