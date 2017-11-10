function test_1() {
    for(var i=0;i<8;i++){
        document.write("number is "+i+"<br>");
    }
}

function test_2() {
    for (i = 1; i < 10; i++) {
        if (i == 5 || i == 6) {
            continue;
        }
        if (i == 8) {
            break;
        }
        document.write(i);
    }
}