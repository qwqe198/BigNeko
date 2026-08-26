main.floors.MT62=
{
    "floorId": "MT62",
    "title": "62 层",
    "name": "62 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 20,
    "defaultGround": 150654,
    "bgm": "5.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "10,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT62_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT62_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT62_10_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT62_10_9",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,6": {
            "0": {
                "condition": "flag:door_MT62_10_6==2",
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
                        "name": "flag:door_MT62_10_6",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "10,9": {
            "0": {
                "condition": "flag:door_MT62_10_9==2",
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
                        "name": "flag:door_MT62_10_9",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144, 88,  0,426,144,620,  0,144,1017,144,  0,1023,144],
    [144, 86,144,620, 82,1017,620,429, 86,429,1018,622,144],
    [144,426,  0,144,144,144,144,144,144,144,144,144,144],
    [144,  0, 60,144,1013, 82,1020,144,1009,144,144,1022,144],
    [144, 60,  0,421,  0,144,427,  0,428,144,1017,144,144],
    [144, 81,144,144, 81,144, 81,144,144,144, 85,144,144],
    [144,423,144,1014,  0,144,425,1018,144,428,  0,428,144],
    [144,1016,425,  0,1014,144, 86,144,144,  0, 47,  0,144],
    [144,144,144,144,426, 82,430,621,144,144, 85,144,144],
    [144,  0,428,  0, 21,144, 86,144,144,427,  0,427,144],
    [144,1017,144, 21,  0,144,425,621,430,  0, 87,  0,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            151316,
            151316,
            0,
            151316,
            0,
            151316,
            151316,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            151316,
            151316,
            151316,
            151316,
            151316,
            151316,
            151316,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    ],
    "fg2map": []
}