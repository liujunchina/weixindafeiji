/**
 * Created by Administrator on 2016/1/5.
 */
var main = $("main");
var arr = new Array();
var moveupFlag = false;
var moveleftFlag = false;
var movedownFlag = false;
var moverightFlag = false;
//����ѭ�����õ�id


main.style.height = "600px";

function $(id) {
    return document.getElementById(id);
}
// �¼�����
var EventUtil = {
    addHandler: function (element, type, handler) {  //Ҫ������Ԫ�أ��¼����ƣ��¼����������
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.addEventListener("on" + type, handler, false);
        } else {
            element["on" + type] = handler;
        }
    },

    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    }
}

setInterval(createFly, 1000);
setInterval(FlyMove, 50);
setInterval(myflymove, 10);
setInterval(fazidan,10);
var myfly = myFly();

//����С�ɻ��Ķ���
//x��y���ٶȣ�ͼƬ
function Fly(src, x, y, speed) {
    this.src = src;
    this.x = x;
    this.y = y;
    this.speed = speed;


    this.imgNode = document.createElement("img");
    this.imgNode.src = this.src;
    this.imgNode.style.position = "absolute";
    this.imgNode.style.left = this.x + "px";
    this.imgNode.style.top = this.y + "px";

    main.appendChild(this.imgNode);

    this.move = function () {
        this.imgNode.style.top = parseInt(this.imgNode.style.top) + this.speed + "px";

    };
}

function createFly() {
    var fly = new Fly("image/enemy1_fly_1.png", parseInt(Math.random() * 286), 0, 5);
    arr.push(fly);
    //console.log(fly);

}
function FlyMove() {
    for (var i = 0; i < arr.length; i++) {
        arr[i].move();
        //console.log(arr[i].speed);
        //console.log(arr[i].imgNode.style.top);
        //console.log(main.style.height);
        if (parseInt(arr[i].imgNode.style.top) >= parseInt(main.style.height)) {
            main.removeChild(arr[i].imgNode);
            //arr.splice(i,1);
            arr.shift();            //���е�����һ����
        }
    }
}

//������ҵķɻ�
//��С����ʼλ�ã��ƶ��ٶȣ�img
//��Ϊ���ƶ����򣬷����ӵ���
function myFly() {
    myfly = new Fly("image/�ҵķɻ�.gif", 133, 508, 10);
    console.log(myfly.imgNode);
    EventUtil.addHandler(myfly.imgNode, "keyup", function (event) {
        alert(event.keyCode);
    });
    return myfly;
    //myfly.imgNode.addEventListener("onkeypress", movedown, false);
    //myfly.imgNode.addEventListener("onkeypress", movedown, false);
    //myfly.imgNode.addEventListener("onkeypress", moveleft, false);
    //myfly.imgNode.addEventListener("onkeypress", moveright, false);
}

var count = 0;
window.onkeydown = function () {
    var event = window.event || arguments[0];
    console.log("keyCode" + event.keyCode);
    //event = EventUtil.getEvent(event);
    if (event.keyCode == "38" || event.keyCode == "87") {
        //�����ƶ�
        moveupFlag = true;
    }
    if (event.keyCode == "37" || event.keyCode == "65") {
        //�����ƶ�
        moveleftFlag = true;
    }
    if (event.keyCode == "39" || event.keyCode == "68") {
        //�����ƶ�
        moverightFlag = true;
    }
    if (event.keyCode == "40" || event.keyCode == "83") {
        //�����ƶ�
        movedownFlag = true;
    }
    //flymove();

};
window.onkeyup = function () {
//    console.log(event.keyCode);
    if (event.keyCode == "38" || event.keyCode == "87") {
        //�����ƶ�
        //setInterval(moveup(),10);
        moveupFlag = false;
    }
    if (event.keyCode == "37" || event.keyCode == "65") {
        //�����ƶ�
        moveleftFlag = false;
    }
    if (event.keyCode == "39" || event.keyCode == "68") {
        //�����ƶ�
        moverightFlag = false;
    }
    if (event.keyCode == "40" || event.keyCode == "83") {
        movedownFlag = false;
    }
    //flymove();
};
function moveup() {
    myfly.imgNode.style.top = parseInt(myfly.imgNode.style.top) - 2 + "px";
}
function moveleft() {
    myfly.imgNode.style.left = parseInt(myfly.imgNode.style.left) - 2 + "px";
}
function moveright() {
    myfly.imgNode.style.left = parseInt(myfly.imgNode.style.left) + 2 + "px";
}
function movedown() {
    myfly.imgNode.style.top = parseInt(myfly.imgNode.style.top) + 2 + "px";
}
//setInterval(myflymove, 10);
function myflymove() {
    console.log("count:" + count++);

    if (moveupFlag) {
        moveup();
    }
    if (moveleftFlag) {
        moveleft();
    }
    if (movedownFlag) {
        movedown();
    }
    if (moverightFlag) {
        moveright();
    }
}

//fazidan(x,y,speed)