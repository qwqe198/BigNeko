main.floors.MT189=
{
    "floorId": "MT189",
    "title": "189 层",
    "name": "189 层",
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
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,6": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT189_2_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT189_2_2",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,2": {
            "0": {
                "condition": "flag:door_MT189_2_2==2",
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
                        "name": "flag:door_MT189_2_2",
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
    [  4,  4,  4,156,156,156,156,156,156,156,156,156,156],
    [  4,  4,900, 83, 83, 83,1742, 82,  0,1741,156,1487,156],
    [  4,156, 85,156,156,156,1280,156,1012,  0,156, 15,156],
    [156,1285,  0,1285,156,1149,  0,1282,  0,1281, 15,1487,156],
    [156,  0,1149,  0,156,156, 82,156,156, 81,156,156,156],
    [156,156,156, 82,156,1741,  0, 21,156,1741,  0,1742,156],
    [156, 87,156,1282,156,  0,1746,  0,156,156,156,  0,156],
    [156,  0, 21,  0, 82,1486,  0, 22, 82,1486,1281,1742,156],
    [156, 22,  0,156,156,156,1283,156,156,156, 82,156,156],
    [156,1284,156,1486,156,1149,  0,1486, 81,1283,  0,1012,156],
    [156,1153,1281,  0,1282,  0,156,  0,156,  0,156, 82,156],
    [156,1741,156, 21,156,1486,  0,1744,156,1283,  0, 88,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156]
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