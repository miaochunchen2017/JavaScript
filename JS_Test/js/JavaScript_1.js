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
//document.write("Mcc's Web");

function Type_Json() {
    var JsonObject = {
        "Person":
            [
                {"Name": "Mcc", "Age": 25, "Sex": "Male", "IsMarried": true, "Spouse": null},
                {"Name": "Zmr", "Age": 25, "Sex": "Female", "IsMarried": true, "Spouse": "Mcc"}
            ]
    };

//修改Json数据
    JsonObject.Person[0].Name = "MCC";
    var person_num = 1;
//     document.getElementById("person_name").innerHTML = JsonObject.Person[person].Name;
// //打印Json数据
//     document.getElementById("person_age").innerHTML = JsonObject.Person[person].Age;
//     document.getElementById("person_sex").innerHTML = JsonObject.Person[person].Sex;
//     document.getElementById("person_isMarrid").innerHTML = JsonObject.Person[person].IsMarried;
//     document.getElementById("person_spouse").innerHTML = JsonObject.Person[person]["Spouse"];

//使用for-in来循环对象的属性的值
    for (var x in JsonObject.Person[person_num]) {
        document.getElementById("personInformation_p_a").innerHTML += JsonObject.Person[person_num][x] + "<br>";
    }
}

//嵌套Json
function Type_Json_0() {
    var JsonObject = {
        "Person": 1,
        "Name": {
            "First_Name": "Miao",
            "Middle_Name": "Chun",
            "Last_Name": "Chen"
        }
        , "Age": 25, "Sex": "Male", "IsMarried": true, "Spouse": null

    };

    document.getElementById("personInformation_p_c").innerHTML = JsonObject.Name["First_Name"];
//或者写成  document.getElementById("personInformation_p_c").innerHTML = JsonObject.Name.First_Name;

}

function Type_Json_1() {
    var JsonObject_1 = {
        "Person": ["Name", "Age", "Sex", "IsMarried", "Spouse"]
    };

//使用for-in来循环对象的属性的值
    var p1 = "";
    for (var s in JsonObject_1.Person) {
        p1 += JsonObject_1.Person[s] + "<br>";
    }
    document.getElementById("personInformation_p_e").innerHTML = p1;
}

//循环内嵌数组
function cycle_array() {
    var goods, info, i, j, x = "";
    goods = {
        "name": "milk",
        "kind": "drink",
        "brand": [
            {"name": "三元", "info": ["milk", 500, "$1.99"]},
            {"name": "蒙牛", "info": ["milk", null, "$1.59"]},
            {"name": "伊利", "info": ["milk", 600, "$1.09"]}
        ]
    }

    info = ["商品种类：", "商品净含量：", "商品售价："]

    for (i in goods.brand) {
        x += "<h2>" + "商品品牌：" + goods.brand[i].name + "</h2>";
        for (j in goods.brand[i].info) {
            // 如果没有数据，则返回“||没找到数据||”
            if (goods.brand[i].info[j] === null)
                x += info[j] + "||没找到数据||" + "<br>";
            // 如果有数据，则叠加x的值
            else {
                if (goods.brand[i].info[j] > 0 | goods.brand[i].info[j] < 99999)
                    x += info[j] + goods.brand[i].info[j] + "g" + "<br>";
                else
                    x += info[j] + goods.brand[i].info[j] + "<br>";
            }
        }
    }
    document.getElementById("example_1").innerHTML = x;
}

// 将Json数据转化为Javascript对象
function practiceJson() {
    var dsfs, i, x = "";
    dsfs = {
        "name": "milk",
        "type": [
            {"color": "white", "taste": "sweet", "price": "normal", "jjj": 111},
            {"color": "blue", "taste": "bad", "price": "high", "jjj": 211},
            {"color": "yellow", "taste": "sweet", "price": "cheap", "jjj": 311}
        ]
    };
    for (i in dsfs.type) {
        for (x in dsfs.type[i])
            document.getElementById("example_2").innerHTML += dsfs.type[i][x] + "<br/>";
    }

}
