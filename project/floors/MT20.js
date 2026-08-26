main.floors.MT20=
{
    "floorId": "MT20",
    "title": "20 层",
    "name": "20 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 2,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,1": [
            {
                "type": "setValue",
                "name": "flag:door_MT20_2_11",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,11": {
            "0": {
                "condition": "flag:door_MT20_2_11==1",
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
                        "name": "flag:door_MT20_2_11",
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
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,1013, 60,644,572, 59,334, 59,572,643, 60,1014,  4],
    [  4,  4,  4,  4,  4,572,635,572,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4, 81,  4,  4,  4,  4,  4,  4],
    [  1, 60,  0,332,1014,  4,279,  4,1013,332,  0, 22,  1],
    [  1,  1,331,  1,  1,  4, 81,  4,  1,  1,280,  0,  1],
    [  1,643,  0,331, 21,  4, 82,  4,619,  1,641,  1,  1],
    [  1,  1,  1,  1,  0,  4, 81,  4,620, 16,279,635,  1],
    [  1, 60,326,  0,325,  4,279,  4,619,  1,  1,325,  1],
    [  1, 83,  1, 21,  0,  4, 81,  4,  1,  1,272,  0,  1],
    [  1, 83,  1,272,  1,  1,572,  0,641,280,  0, 81,  1],
    [  1, 87, 85,  0,636,280,  0, 88,  1,  1, 59,  1,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [],
    "fg2map": [],
    "bgm": "2.mp3"
}