main.floors.MT14=
{
    "floorId": "MT14",
    "title": "14 层",
    "name": "14 层",
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
        "11,11": {
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
    "afterGetItem": {
        "1,11": [
            "\t[纳可]经过一段时间的熟悉后，\n对手中这把剑的掌握程度似乎又深了一层。",
            "\t[纳可]不过只是熟练度的提升而已。\n想要使用特殊技巧，恐怕还差得远呢。"
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 47,  0,572,  1,258, 59,  0,  1,636,  0, 87,  1],
    [  1,  0, 21,  0,253,  0,  1, 33,260,  0, 23,635,  1],
    [  1, 83,  1,  1,  1, 86,  1,  1,  1,  1,  1, 16,  1],
    [  1,636,  0,  1,  0,252,  1,635,  1,641,  1,259,  1],
    [  1,  0,251, 81, 58,  0,587,254, 81,253, 21,  0,  1],
    [  1, 59,  0,  1,  1,  1,  1, 82,  1,  1,  1, 81,  1],
    [  1,256,  1, 22, 81,252,  0, 59,  1, 58,  1, 33,  1],
    [  1,635,259,  0,  1,  0,585,256, 81,  0,253,  0,  1],
    [  1, 82,  1,  1,  1,  1,  1,  1,  1,  1,  1, 81,  1],
    [  1,257,  1,  0, 22, 16,  0,  1,636,  1, 21,  0,  1],
    [  1,614,254, 21,  0,  1, 59, 15,252, 81,  0, 88,  1],
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