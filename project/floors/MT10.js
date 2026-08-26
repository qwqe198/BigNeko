main.floors.MT10=
{
    "floorId": "MT10",
    "title": "10 层",
    "name": "10 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,2": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[纳可]（糟糕，被发现了。\n居然碰巧遇到一个闲逛的侍从，这下……）",
                "\t[纳家侍从]请留步，小姐。\n这里禁止大地级之下的子弟随意出入。",
                "\t[纳可]是吗……真对不起。\n那就只能把你打晕过去了！",
                {
                    "type": "battle",
                    "id": "soldier"
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            2
                        ]
                    ],
                    "remove": true
                }
            ]
        }
    },
    "changeFloor": {
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,3": {
            "0": {
                "condition": "flag:door_MT10_6_3==2",
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
                        "name": "flag:door_MT10_6_3",
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
    [  4, 21,  4,  4,  4,  4, 87,  4,  4,  4,  4, 22,  4],
    [  4, 21,572,645,640,576,225,576,640,645,572, 22,  4],
    [  4,  4,  4,  4,  4,  4, 85,  4,  4,  4,  4,  4,  4],
    [  1, 60,  1, 59,  1,243,  0,243,  1, 21,572, 21,  1],
    [  1,239, 82,244, 81,  0,619,  0,  1,635,242,636,  1],
    [  1, 81,  1,  1,  1,  1, 83,  1,  1,  1,241,  1,  1],
    [  1,  0,240,  0,236,636,  0,236,  0, 81,641,  0,  1],
    [  1,586,  1,241,  1,  0, 34,  1,584,  1,  0, 22,  1],
    [  1, 81,  1, 58,  1,  1, 82,  1,  1,  1,240,  1,  1],
    [  1, 58,  1,241,  1,636, 59,636,237,  0,584,  0,  1],
    [  1,239, 81,  0,237, 59, 88, 59,  1, 58,  0, 58,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "1.mp3"
}