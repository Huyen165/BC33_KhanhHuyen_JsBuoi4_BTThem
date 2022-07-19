function returnDay(month, year) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            {
                return 31;
            }
        case 2:
            {
                if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                    return 29;
                }
                return 28;
            }
        case 4:
        case 6:
        case 9:
        case 11:
            {
                return 30;
            }
    }
}

function nextDay(day, month, year) {
    var nd = day;
    var nm = month;
    var ny = year;

    if (year > 0 && month > 0 && month < 13 && day > 0 && day <= (returnDay(month, year))) {
        nd = day + 1;
        if (month !== 12 && d === (returnDay(month, year))) {
            nd = 1;
            nm = month + 1;
        }
    } else if (month === 12 && day === (returnDay(month, year))) {
        nd = 1;
        nm = 1
        ny = year + 1;

    } else if (month === 2) {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            nd = 1;
            nm = month + 1;
        } else {
            nd = 1;
            nm = month + 1;
        }
    }
    console.log("Ngày tiếp theo : " + nd + "/" + nm + "/" + ny)
}

function ex1() {
    var day = prompt("Vui lòng nhập ngày hôm nay:", "");
    var month = prompt("Vui lòng nhập tháng:", "");
    var year = prompt("Vui lòng nhập năm :", "");
    console.log("Ngày hôm nay :", day + "/", month + "/", year);
    nextDay = nextDay(day, month, year);

}
ex1();

// EX 2: cho biết tháng đó có bnh ngày 
// SƠ ĐỒ 3 KHỐI 
/**
 * INPUT : Nhập vào ngày/tháng/ năm từ bàn phím
 * 
 * 
 * PROCESS: 1. Nhận giá trị tháng, năm từ bàn phím.
 *          2. Sử dụng switch case để in số ngày ra màn hình, ktra năm, nếu là năm nhuận thì in ra 29 ngày đối với tháng 2.
 *          3. in kết quả ra màn hình
 * 
 * 
 * OUTPUT:In số ngày của tháng nhập vào ra màn hình.
 */

var month = 6;
var year = 2022;
if (month > 0 && month <= 12) {
    switch (month, year) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("Tháng" + month + "có 31 ngày");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Tháng" + month + "có 30 ngày");
            break;
        case 2:
            year = prompt("Mời nhập thêm năm:", "");
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                console.log("Tháng" + month + "năm" + year + "có 29 ngày");
            } else {
                console.log("Tháng" + month + "có 31 ngày");

            }
            break;
    }
} else {
    console.log("Tháng không tồn tại");
}