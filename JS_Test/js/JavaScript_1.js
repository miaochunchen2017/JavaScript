var test;
var test_2 = "shiyanlou";
x = 100;
y = "hello";
z = true;

var cars_1 = new Array();
cars_1[0] = "Audi";
cars_1[1] = "BMW";
cars_1[2] = "Benz";

var cars_2 = new Array("Audi", "BMW", "Benz");

var cars_3 = ["Audi", "BMW", "Benz"];

console.log(cars_1)

function test_1() {
    for (var i1 = 0; i1 < 8; i1++) {
        document.write("number is " + i1 + "<br>");
    }
}

function test_2() {
    for (var i2 = 1; i2 < 10; i2++) {
        if (i2 == 5 || i2 == 6) {
            continue;
        }
        if (i2 == 8) {
            break;
        }
        document.write(i2);
    }
}

function test_3() {
    var i3 = 0;
    while (i3 < 8) {
        document.write(i3);
        i3++;
    }
}

//NEW FILE !!!!
document.write("Mcc's Web");

