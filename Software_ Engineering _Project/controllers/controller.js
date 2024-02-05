const useform = document.getElementById("useform")
let alertMessage = '';
let myDetail = {
    "Date": document.getElementById("date").value,
    "StudentFullname": document.getElementById("nameSurname").value,
    "Mr": document.getElementById("mr").value,
    "StudentId": document.getElementById("register").value,
    "StudentYear": document.getElementById("section1").value,
    "StudyField": document.getElementById("major").value,
    "advisor": document.getElementById("professional"),
    "addressNumber": document.getElementById("numh").value,
    "moo": document.getElementById("village").value,
    "tumbol": document.getElementById("district").value,
    "amphur": document.getElementById("district1").value,
    "province": document.getElementById("province").value,
    "postalCode": document.getElementById("zipCode").value,
    "mobilePhone": document.getElementById("tel").value,
    "mobile": document.getElementById("telH").value,
    // "subject" : document.getElementById("subject").value,
    // "choice" : document.getElementById("choice").value,
    //"cause": document.getElementById("cause").value,
    // "addSubjectList": [{
    //     "SubjectCode": document.getElementById("SubjectCode1").value,
    //     "SubjectName": document.getElementById("SubjectName1").value,
    //     "SubjectSection": document.getElementById("SubjectSection1").value,
    //     "SubjectDate": document.getElementById("SubjectDate1").value,
    //     "SubjectCredit": document.getElementById("SubjectCredit1").value,
    //     "SubjectTeacher": document.getElementById("SubjectTeacher1").value,
    //     "SubjectTeacherCheck": document.getElementById("SubjectTeacherCheck1").value,
    // }
    //]
}
function CheckDate() {
    let Date = document.getElementById("date").value
    if (Date == '') {
        alertMessage = alertMessage + 'กรุณากรอกวัน/เดือน/ปี\n'
    }
    myDetail["Date"] = '' + Date;
}

function CheckMr() {
    let Mr = document.getElementById("mr").value
    if (Mr != 'นาย' && Mr != 'นาง' && Mr != 'นางสาว') {
        alertMessage = alertMessage + 'กรุณากรอกนาย นางหรือนางสาวเท่านั้น\n'
    }
    myDetail["Mr"] = '' + Mr;
}

function checkFullname() {
    let Fullname = document.getElementById("nameSurname").value
    if (Fullname == '') {
        alertMessage = alertMessage + 'กรุณากรอกชื่อ-สกุล\n'
    }
    myDetail["StudentFullname"] = '' + Fullname;
}

function checkRegister() {
    let Reg = document.getElementById("register").value
    if (Reg.length != 10) {
        alertMessage = alertMessage + 'กรุณาตรวจสอบความถูกต้องของรหัสนักศึกษา\n'
    }
    myDetail["StudentId"] = '' + Reg;
}

function checkSection() {
    let section = document.getElementById("section1").value
    if (section == '') {
        alertMessage = alertMessage + 'กรุณากรอกปีที่ศึกษา\n'
    }
    myDetail["StudentYear"] = '' + section;
}

function checkMajor() {
    let major = document.getElementById("major").value
    if (major == '') {
        alertMessage = alertMessage + 'กรุณากรอกสาขาที่เรียน\n'
    }
    myDetail["StudyField"] = '' + major;
}

function checkPro() {
    let pro = document.getElementById("professional").value
    if (pro == '') {
        alertMessage = alertMessage + 'กรุณากรอกอาจารย์ที่ปรึกษา\n'
    }
    myDetail["advisor"] = '' + pro;
}

function checkAddress() {
    let numh = document.getElementById("numh").value
    let village = document.getElementById("village").value
    let district = document.getElementById("district").value
    let district1 = document.getElementById("district1").value
    let province = document.getElementById("province").value
    let zipCode = document.getElementById("zipCode").value

    if (numh == '') {
        alertMessage = alertMessage + 'กรุณากรอกที่อยู่บ้านเลขที่\n'
    } else {
        myDetail["addressNumber"] = '' + numh;
    }
    if (village == '') {
        alertMessage = alertMessage + 'กรุณากรอกหมู่บ้าน\n'
    } else {
        myDetail["moo"] = '' + village;
    }
    if (district == '') {
        alertMessage = alertMessage + 'กรุณากรอกตำบล\n'
    } else {
        myDetail["tumbol"] = '' + district;
    }
    if (district1 == '') {
        alertMessage = alertMessage + 'กรุณากรอกอำเภอ\n'
    } else {
        myDetail["amphur"] = '' + district1;
    }
    if (province == '') {
        alertMessage = alertMessage + 'กรุณากรอกจังหวัด\n'
    } else {
        myDetail["province"] = '' + province;
    }
    if (zipCode.length != 5) {
        alertMessage = alertMessage + 'กรุณากรอกรหัสไปรษณีย์ให้ถูกต้อง\n'
    } else {
        myDetail["postalCode"] = '' + zipCode;
    }
}

function checkMobile() {
    let mobilePhone = document.getElementById("tel").value
    let mobile = document.getElementById("telH").value

    if (mobilePhone == '') {
        alertMessage = alertMessage + 'กรุณากรอกเบอร์โทรศัพท์'
    } else if (mobilePhone.length != 10 || mobilePhone.charAt(0) != 0) {
        alertMessage = alertMessage + 'กรุณากรอกเบอร์โทรศัพท์ให้ครบ 10 หลักและขึ้นต้นด้วยเลข 0\n'
    } else {
        myDetail["mobilePhone"] = '' + mobilePhone;
    }

    if (mobile.length != 0) {
        if (mobile.length != 10 || mobile.charAt(0) != 0 || mobile.charAt(1) != 1) {
            alertMessage = alertMessage + 'กรุณากรอกเบอร์โทรศัพท์บ้านให้ครบ 10 หลักและขึ้นต้นด้วยเลข 01\n'
        } else {
            myDetail["mobile"] = '' + mobile;
        }
    }
}

// function checkCause() {
//     let cause = document.getElementById("cause").value
//     if (cause == '') {
//         alertMessage = alertMessage + 'กรุณากรอกเหตุผล'
//     } else {
//         myDetail["cause"] = '' + cause;
//     }
// }

// function addRows(tableId) {
//     const table = document.getElementById(tableId);
//     var rowCount = table.rows.length;
//     var row = table.insertRow(rowCount);
//     for (var i = 0; i < 8; i++) {
//         var td = document.createElement('td')
//         td = row.insertCell(i);
//         if (i == 0) {
//             var cent = document.createElement('center');
//             var bold = document.createElement('b');
//             var num = document.createTextNode(rowCount + '.');
//             bold.appendChild(num);
//             cent.appendChild(bold);
//             td.appendChild(cent);

//         } else if (i == 7) {
//             var ele = document.createElement('input');
//             var cent = document.createElement('center');
//             ele.setAttribute('type', 'checkbox');
//             ele.setAttribute('value', 'on');
//             cent.appendChild(ele);
//             td.appendChild(cent);
//         } else {
//             var ele = document.createElement('input');
//             ele.setAttribute('type', 'text');
//             ele.setAttribute('value', '');
//             td.appendChild(ele);
//         }
//     }

// }
// function deleteRows(table_id) {
//     var table = document.getElementById(table_id);
//     var rowCount = table.rows.length;
//     if (rowCount > '2') {
//         var row = table.deleteRow(rowCount - 1);
//         rowCount--;
//     }
//     else {
//         alert('There should be atleast one row');
//     }
// }

// var plus = document.getElementById('plus');
// var minus = document.getElementById('minus');

// minus.addEventListener('click', (e) => {
//     e.preventDefault();
//     deleteRows('addT')
// })

// plus.addEventListener('click', (e) => {
//     e.preventDefault();
//     addRows('addT');
// })

// var plus1 = document.getElementById('plus1');
// var minus1 = document.getElementById('minus1');

// minus1.addEventListener('click', (e) => {
//     e.preventDefault();
//     deleteRows('dropT')
// })

// plus1.addEventListener('click', (e) => {
//     e.preventDefault();
//     addRows('dropT');
// })

// function tableToArray(table_id) {
//     var myTab = document.getElementById(table_id);
//     var arrValues = [];
  
//     for (row = 1; row < myTab.rows.length; row++) {
//       // loop through each cell in a row.
//       var informationFromArray = {};
//       var count = 0;
//         for (c = 0; c < myTab.rows[row].cells.length; c++) {  
//               var element = myTab.rows.item(row).cells[c];
//               if(element.childNodes[0].value == '' || element.childNodes[0].value < 1)
//               {
//                 count -= 1;
//               }
//               if(c==1)
//               {
//                 informationFromArray["subjectCode"] = element.childNodes[0].value;
//                 count++;
//               }
//               else if(c == 2)
//               {
//                 informationFromArray["subjectName"] = element.childNodes[0].value;
//                 count++;
//               }
//               else if(c == 3)
//               {
//                 informationFromArray["subjectSection"] = element.childNodes[0].value;
//                 count++;
//               }
//               else if(c == 4)
//               {
//                 informationFromArray["subjectDate"] = element.childNodes[0].value;
//                 count++;
//               }
//               else if(c == 5)
//               {
//                 informationFromArray["subjectCredit"] = element.childNodes[0].value;
//                 count++;
//               }
//               else if(c == 6)
//               {
//                 informationFromArray["subjectTeacher"] = element.childNodes[0].value;
//                 count++;
//               }
//               else if(c == 7)
//               {
//                 if(element.childNodes[0].value == "on")
//                 {
//                   informationFromArray["subjectTeacherCheck"] = false;
//                 }
//                 else
//                 {
//                   informationFromArray["subjectTeacherCheck"] = true;
//                 }
//               }
//           }
//       if(count == 6)
//       {
//         arrValues.push(informationFromArray);
//       }
//       else
//       {
//         if(table_id == 'addT')
//         {
//             let alert;
//           alert = alert + "ต้องกรอกข้อมูลรายละเอียดการเพิ่มรายวิชาให้ครบ\n";
//           return 0;
//         }
//         else if(table_id == 'dropT')
//         {
//             let alert;
//           alert = alert + "ต้องกรอกข้อมูลรายละเอียดการถอนรายวิชาให้ครบ\n";
//           return 0;
//         }
//       }
//     }
//     if(table_id == 'addT')
//     {
//       myDetail["addSubjectList"] = arrValues;
//     }
//     else if(table_id == 'dropT')
//     {
//       myDetail["dropSubjectList"] =  arrValues;
//     }
//   }

useform.addEventListener('submit', (e) => {
    e.preventDefault();
    CheckDate();
    CheckMr();
    checkFullname();
    checkRegister();
    checkSection();
    checkMajor();
    checkPro();
    checkAddress();
    checkMobile();
    //checkCause();
    //tableToArray("addT");
    //tableToArray("dropT");

    if (alertMessage.length == 0) {
        console.log(JSON.stringify(myDetail, '/t', 2))
    } else {
        alert(alertMessage);
        alertMessage = '';
    }

})

