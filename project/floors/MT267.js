main.floors.MT267=
{
    "floorId": "MT267",
    "title": "267 层",
    "name": "267 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 200000,
    "defaultGround": 974,
    "bgm": "17.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,0": [
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
                        "need": "flag:267f<1",
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
                                "name": "flag:267f",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "text": "获得3把绿钥匙、2兆攻击",
                        "color": [
                            118,
                            209,
                            125,
                            1
                        ],
                        "need": "flag:267f<1",
                        "action": [
                            {
                                "type": "animate",
                                "name": "green"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:saltygreen",
                                "operator": "+=",
                                "value": "3"
                            },
                            {
                                "type": "setValue",
                                "name": "item:greenKey",
                                "operator": "+=",
                                "value": "3"
                            },
                            {
                                "type": "setValue",
                                "name": "status:atk",
                                "operator": "+=",
                                "value": "2e12"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:267f",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "text": "获得4兆攻击",
                        "color": [
                            167,
                            217,
                            167,
                            1
                        ],
                        "need": "flag:267f<1",
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
                                "name": "status:atk",
                                "operator": "+=",
                                "value": "4e12"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:267f",
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
        "5,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,1": {
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
    [975,975,975,975,975,985,975,975,975,975,975,975,975],
    [975,  0,251137,975,2078, 88,2078,975,1419,975,  0, 87,975],
    [975,1419,  0,975, 82,975,1547,1549,  0,1542, 50,251138,975],
    [975,  0,1164,1550, 21,  0,1164,975,2095,975,  0,1164,975],
    [975,1551,975,975,1550,975,975,975,975,975,975,975,975],
    [975,  0, 22, 81,  0,1421,975,2093,975, 23,975,1543,  0],
    [975,736, 21,975,1421, 47,975,  0,975,1551,975, 82,1543],
    [975,975,1550,975,  0,2077,1548, 21,975, 81,975,1543,975],
    [975,975,2078,975,1548,  0,975, 21, 86,2092, 82,  0,1543],
    [975,975, 83,975,2093,975,975, 15,975,975,975, 82,975],
    [975,2082,1552,975,975,975,975,2078,975,975,1558,  0,975],
    [975,251129,2081,975,975,975,975,975,975,975,251131,1558,975],
    [975,975,975,975,975,975,975,975,975,975,1558,  0,975]
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