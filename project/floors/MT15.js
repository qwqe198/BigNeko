main.floors.MT15=
{
    "floorId": "MT15",
    "title": "15 层",
    "name": "15 层",
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
    "events": {
        "5,3": [
            "\t[老人]看到那座石碑了吗？\n那上面刻录着一种秘法【融血术】。",
            "\t[老人]血洛大陆并不太平，各个世界城之间时有战争。",
            "\t[老人]于是那些城主在世界城、领地主城之中，\n建造了大大小小可供参悟修炼的石碑，\n以期自己的子民中诞生更多强者。",
            "\t[老人]这些石碑每一块都价值不菲，\n不过，上面记载的秘法也并非无敌。\n那些存在真正的绝学，自然是不可外传的。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "11,1": {
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
        "3,1": [
            {
                "type": "setValue",
                "name": "flag:door_MT15_2_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT15_2_2",
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
                "condition": "flag:door_MT15_2_2==2",
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
                        "name": "flag:door_MT15_2_2",
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
    [260,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,260,  0, 21,255,  0,255, 21,  1, 88,  1],
    [  1,894, 85,  0, 59,  0,  1,636,  1,  0,254,  0,  1],
    [  1,  1,  1,260,  0,121,  1, 82,  1,  1,  1, 81,  1],
    [  1,  1,  1,  1, 81,  1,637, 21, 81,256,  1, 21,  1],
    [  1,639,259,635,  0, 81, 33,635,  1,  0, 21,  0,  1],
    [  1,  1, 58,  1,  1,  1, 82,  1,  1,  1,  1, 82,  1],
    [  1, 22,255,  0, 81,  0,636,  1, 58,  1,  0,635,  1],
    [  1,257,  1,254,  1, 21,  0,256,  0,260,637,  0,  1],
    [  1, 81,  1, 82,  1,  1,  1,  1,  1,  1,253,  1,  1],
    [  1,  0, 60,256,  0, 58,  1,641,  1,  0, 59, 82,  1],
    [  1, 87,  0,  1,635,  0, 81,  0,254, 21,  1,572,  1],
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