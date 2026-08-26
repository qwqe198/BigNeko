main.floors.MT246=
{
    "floorId": "MT246",
    "title": "246 层",
    "name": "246 层",
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
    "events": {
        "12,3": [
            {
                "type": "choices",
                "text": "\t[绿色按钮,A985]如果觉得打不动的话，\n不妨来点补给再前进吧！\n又或者，如果你更喜欢绿钥匙……？",
                "choices": [
                    {
                        "text": "获得4把绿钥匙",
                        "color": [
                            75,
                            217,
                            63,
                            1
                        ],
                        "need": "flag:246f<1",
                        "action": [
                            {
                                "type": "animate",
                                "name": "green"
                            },
                            {
                                "type": "setValue",
                                "name": "item:greenKey",
                                "operator": "+=",
                                "value": "4"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:246f",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "text": "获得2把绿钥匙、1吸1换",
                        "color": [
                            118,
                            209,
                            125,
                            1
                        ],
                        "need": "flag:246f<1",
                        "action": [
                            {
                                "type": "animate",
                                "name": "green"
                            },
                            {
                                "type": "setValue",
                                "name": "item:greenKey",
                                "operator": "+=",
                                "value": "2"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:saltygreen",
                                "operator": "+=",
                                "value": "2"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I732",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I733",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:246f",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "text": "获得2吸2换",
                        "color": [
                            167,
                            217,
                            167,
                            1
                        ],
                        "need": "flag:246f<1",
                        "action": [
                            {
                                "type": "animate",
                                "name": "green"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:saltygreen",
                                "operator": "+=",
                                "value": "4"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I732",
                                "operator": "+=",
                                "value": "2"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I733",
                                "operator": "+=",
                                "value": "2"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:246f",
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
        "10,3": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,9": {
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
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20,180205,1419,  0, 21, 20,736,1390,1488, 21,1488, 20],
    [ 20,1489,1152, 20, 20,1389, 20, 20, 20, 20, 20,1385, 20],
    [ 20,2095,  0, 20, 20, 21,1383, 20,1391, 81, 88,  0,985],
    [ 20, 20,1387, 20, 20, 20, 82, 20, 15, 20, 20, 16, 20],
    [ 20, 21,  0, 20,1152, 20,1488, 20,1386,  0, 20,1383, 20],
    [ 20, 20,1489,1384,  0,1489,1388, 82,  0, 22, 16,1384, 20],
    [ 20, 20,1163, 20, 47,  0,1152, 20,1422,1488, 20,180205, 20],
    [ 20, 20, 81, 20, 20, 81, 20, 20, 20,1385, 20, 20, 20],
    [ 20,1489,  0,1488, 20,1489, 20,1420,1383,1152, 20, 87, 20],
    [ 20, 20, 20, 20, 20, 81, 20,  0, 20, 20, 20,1489, 20],
    [ 20,1489, 81,1489, 81,1489, 20,1164,1386, 81, 22,  0, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
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