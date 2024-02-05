var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12579031',
    password: 'w2ULiiS6dj',
    database: 'sql12579031'
});


//!express++++>
var app = express();
//*setting middleware
//*Serves resources from public folder
app.use(express.static('public')); //public folder
//*Serves all the request which includes /images in the url from images folder
app.use('/images', express.static(__dirname + '/images')); //images folder
app.use('/controllers', express.static(__dirname + '/controllers')); //controllers fodler
app.use('/node_modules', express.static(__dirname + '/node_modules'));
//open terminal and run 'node server.js'
//--Example to see file in browser--
//http://localhost:3001/images/<filename.> or http://localhost:3001/controllers/<filename.>
//http://localhost:3001/<filename.> //this will call file from public
//--Example to use in html--
//to use public folder in .html ==> <link rel="stylesheet" type="text/css" href="http://localhost:3001/styles.css" />
//to use images folder in .html ==> <img src="/images/login_student.jpg"></img>
//!==========>

app.use(session({
    secret: 'secrect',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
    //res.sendFile(path.join(__dirname + '/requestForm.html'));
});

app.post('/auth', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (username && password) {
        connection.query('SELECT * FROM userAccounts WHERE userName = ? AND userPwd = ?', [username, password], function (error, results, fields) {
            if (results != 0) {
                req.session.loggedin = true;
                // req.session.username = username;
                res.redirect('/homePage');
            } else {
                res.redirect('/StudentLoginf');
                // res.send('Wrong Username or Password');
            }
            res.end();
        });
    } else {
        res.redirect('/StudentLogin');
        //res.send('Please enter Username and Password');
        res.end();
    }
});

app.post('/authAdmin', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (username && password) {
        connection.query('SELECT * FROM adminAccounts WHERE userName = ? AND userPwd = ?', [username, password], function (error, results, fields) {
            if (results != 0) {
                req.session.loggedin = true;
                // req.session.username = userName;
                res.redirect('/adminPage');
            } else {
                res.redirect('/adminLoginf');
                // res.send('Wrong Username or Password');
            }
            res.end();
        });
    } else {
        res.redirect('/adminLoginf');
        // res.send('Please enter Username and Password');
        res.end();
    }
});

//go to First PAGE
//student
app.get('/home', function (req, res) {
    if (req.session.loggedin) {
        res.redirect('/homePage');
        // res.send('Welcome back, ' + req.session.username * '!');
    } else {
        res.send('Please login to view this page');
    }
    res.end();
});


//admin
app.get('/adminPage', function (req, res) {
    if (req.session.loggedin) {
        res.redirect('/adminHomePage');
        // res.send('Welcome back, ' + req.session.username * '!');
    } else {
        res.send('Please login to view this page');
    }
    res.end();
});

//app.listen(3000);
app.listen(3001, () => {
    console.log('listening on port 3001');
});


//go to Login PAGE
//student
app.get('/StudentLogin', function (req, res) {
    res.sendFile(path.join(__dirname + '/login_student.html'));
})
//studentf
app.get('/StudentLoginf', function (req, res) {
    res.sendFile(path.join(__dirname + '/login_student_false.html'));
})
//admin
app.get('/adminLogin', function (req, res) {
    res.sendFile(path.join(__dirname + '/login_admin.html'));
})
//adminf
app.get('/adminLoginf', function (req, res) {
    res.sendFile(path.join(__dirname + '/login_admin_false.html'));
})

//to student Home PAGE
app.get('/homePage', function (req, res) {
    res.sendFile(path.join(__dirname + '/requestForm.html'));
})

//In requestForm PAGE

//go to add_Late
app.get('/addLateform', function (req, res) {
    res.sendFile(path.join(__dirname + '/add_Late.html'));
})

//go to add_Drop PAGE
app.get('/addDropform', function (req, res) {
    res.sendFile(path.join(__dirname + '/add_Drop.html'));
})

//go to add_Cross
app.get('/addCrossform', function (req, res) {
    res.sendFile(path.join(__dirname + '/add_Cross.html'));
})

//success insert page
app.get('/success', function (req, res) {
    res.sendFile(path.join(__dirname + '/success_insert.html'));
})

//go to change User info
app.get('/editProfile', function (req, res) {
    res.sendFile(path.join(__dirname + '/studentData.html'));
})

//go to edit petition
app.get('/history', function (req, res) {
    res.sendFile(path.join(__dirname + '/history.html'));
})

//LOG OUT
app.get('/logout', function (req, res) {
    res.redirect('/');
    // res.sendFile(path.join(__dirname + '/login.html'));
})

//edit form
app.get('/editForm', function (req, res) {
    res.sendFile(path.join(__dirname + '/editForm.html'));
})


//ADMIN PAGE
app.get('/adminHomePage', function (req, res) {
    res.sendFile(path.join(__dirname + '/admin_Home.html'));
})

//go to admn validation
app.get('/adminPetitionForm', function (req, res) {
    res.sendFile(path.join(__dirname + '/validation.html'));
})

//go to signApprove
app.get('/adminsignApprove', function (req, res) {
    res.sendFile(path.join(__dirname + '/signApproval.html'));
})

//go to admvalidationShow
app.get('/adminvalidData', function (req, res) {
    res.sendFile(path.join(__dirname + '/validationShow.html'));
})

app.get('/dummy', function (req, res) {
    res.sendFile(path.join(__dirname + '/dummy.html'));
})

//edit adddrop
app.get('/editAdddrop', function (req, res) {
    res.sendFile(path.join(__dirname + '/editAdddrop.html'));
})

//edit addlate
app.get('/editAddlate', function (req, res) {
    res.sendFile(path.join(__dirname + '/editAddlate.html'));
})

//edit addcross
app.get('/editAddcross', function (req, res) {
    res.sendFile(path.join(__dirname + '/editAddcross.html'));
})

//INSERT addDrop to database
app.post('/insertAddDrop', function (req, res) {
    var date = req.body.date;
    var title = req.body.title;
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var studentID = req.body.studentId;
    var grade = req.body.grade;
    var field = req.body.field;
    var advisor = req.body.advisor;
    //Address
    var houseNo = req.body.houseNo;
    var village = req.body.village;
    var subArea = req.body.subArea;
    var area = req.body.area;
    var province = req.body.province;
    var postcode = req.body.postcode;
    var tel = req.body.phone;
    var housetel = req.body.call;
    //add drop infor
    var subjectID = req.body.subjectId;
    var subjectName = req.body.subjectName;
    var section = req.body.section;
    var classDate = req.body.classDate;
    var unit = req.body.unit;
    var Teacher = req.body.teacher;
    var Allow = req.body.allow;
    var type = req.body.addOrwithdraw;
    var Why = req.body.reason;

    //insert adddrop to db
    connection.query(
        'INSERT INTO InformationAdddrop (date, title, firstname, lastname, studentID, grade, field, advisor, houseNo, village, subArea, area, province, postcode, tel, housetel, subjectID, subjectName, section, classDate, unit, Teacher, Allow, type, Why) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                                        [date, title, firstname, lastname, studentID, grade, field, advisor, houseNo, village, subArea, area, province, postcode, tel, housetel, subjectID, subjectName, section, classDate, unit, Teacher, Allow, type, Why],
        function (err, result, fields) {
            if (err) {
                res.json({ status: 'error', message: err })
                return
            }
            res.redirect('/success');
            // res.json({status: 'ok'})
        }
    );


})

//INSERT AddCross to database
app.post('/insertAddCross', function (req, res) {
    var date = req.body.date;
    var title = req.body.title;
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var studentID = req.body.studentId;
    var grade = req.body.grade;
    var field = req.body.field;
    var advisor = req.body.advisor;
    //Address
    var houseNo = req.body.houseNo;
    var village = req.body.village;
    var subArea = req.body.subArea;
    var area = req.body.area;
    var province = req.body.province;
    var postcode = req.body.postcode;
    var tel = req.body.phone;
    var housetel = req.body.call;
    //add drop infor
    var subjectID = req.body.subjectId;
    var subjectName = req.body.subjectName;
    var section = req.body.section;
    var classDate = req.body.classDate;
    var unit = req.body.unit;
    var Teacher = req.body.teacher;
    var Allow = req.body.allow;
    var Why = req.body.reason;

    //insert adddrop to db
    connection.query(
        'INSERT INTO InformationAddcross (date, title, firstname, lastname, studentID, grade, field, advisor, houseNo, village, subArea, area, province, postcode, tel, housetel, subjectID, subjectName, section, classDate, unit, Teacher, Allow, Why) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [date, title, firstname, lastname, studentID, grade, field, advisor, houseNo, village, subArea, area, province, postcode, tel, housetel, subjectID, subjectName, section, classDate, unit, Teacher, Allow, Why],
        function (err, result, fields) {
            if (err) {
                res.json({ status: 'error', message: err })
                return
            }
            res.redirect('/success');
            // res.json({status: 'ok'})
        }
    );


})

//INSERT AddLate to database
app.post('/insertAddLate', function (req, res) {
    var date = req.body.date;
    var title = req.body.title;
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var studentID = req.body.studentId;
    var grade = req.body.grade;
    var field = req.body.field;
    var advisor = req.body.advisor;
    //Address
    var houseNo = req.body.houseNo;
    var village = req.body.village;
    var subArea = req.body.subArea;
    var area = req.body.area;
    var province = req.body.province;
    var postcode = req.body.postcode;
    var tel = req.body.phone;
    var housetel = req.body.call;
    //add drop infor
    var subjectID = req.body.subjectId;
    var subjectName = req.body.subjectName;
    var section = req.body.section;
    var classDate = req.body.classDate;
    var unit = req.body.unit;
    var Teacher = req.body.teacher;
    var Allow = req.body.allow;
    var Why = req.body.reason;

    //insert adddrop to db
    connection.query(
        'INSERT INTO InformationAddlate (date, title, firstname, lastname, studentID, grade, field, advisor, houseNo, village, subArea, area, province, postcode, tel, housetel, subjectID, subjectName, section, classDate, unit, Teacher, Allow, Why) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [date, title, firstname, lastname, studentID, grade, field, advisor, houseNo, village, subArea, area, province, postcode, tel, housetel, subjectID, subjectName, section, classDate, unit, Teacher, Allow, Why],
        function (err, result, fields) {
            if (err) {
                res.json({ status: 'error', message: err })
                return
            }
            res.redirect('/success');
            // res.json({status: 'ok'})
        }
    );


})

app.post('/getData', (req, res) => {
    //res.send(`${req.body.fname}`);
    // connection.query("SELECT * FROM userAccounts WHERE userName = 'test'", function (err, result,fields){
    //   if(err){
    //      console.log(err);
    //  }
    // console.log(result[0].userName);
    //res.send(result)
    //"DECLARE @a  = 'araiwa'";
    const t = req.body.title;
    const f = req.body.fname;
    const l = req.body.lname;
    const id = req.body.studentId;
    const y = req.body.grade;
    const fi = req.body.field;
    const ad = req.body.advisor;
    const hn = req.body.houseNo;
    const m = req.body.village;
    const tb = req.body.subArea;
    const op = req.body.area;
    const jw = req.body.province;
    const post = req.body.postcode;
    const tel = req.body.phone;
    const htel = req.body.call;

    connection.query("UPDATE userAccounts SET title ='" + t + "', firstname ='" + f + "',lastname ='" + l + "', stID ='" + id + "',grade ='" + y + "',field ='" + fi + "',advisor ='" + ad + "',houseNo ='" + hn + "',village ='" + m + "',subArea ='" + tb + "',area ='" + op + "',province ='" + jw + "',postcode ='" + post + "',tel ='" + tel + "',houseTel ='" + htel + "' WHERE userName = '" + id + "'", function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.redirect('/success');
    });
    //  })
})

//update adddrop
app.post('/upadteAdddrop', (req, res) => {
    var date = req.body.date;
    var t = req.body.title;
    var f = req.body.fname;
    var l = req.body.lname;
    var id = req.body.studentId;
    var y = req.body.grade;
    var fi = req.body.field;
    var ad = req.body.advisor;
    //Address
    var hn = req.body.houseNo;
    var m = req.body.village;
    var tb = req.body.subArea;
    var op = req.body.area;
    var jw = req.body.province;
    var post = req.body.postcode;
    var tel = req.body.phone;
    var htel = req.body.call;
    //add drop infor
    var subjectID = req.body.subjectId;
    var subjectName = req.body.subjectName;
    var section = req.body.section;
    var classDate = req.body.classDate;
    var unit = req.body.unit;
    var Teacher = req.body.teacher;
    var Allow = req.body.allow;
    var Why = req.body.reason;

    connection.query("UPDATE InformationAdddrop SET date = '" + date + "',title ='" + t + "', firstname ='" + f + "',lastname ='" + l + "', studentID ='" + id + "',grade ='" + y + "',field ='" + fi + "',advisor ='" + ad + "',houseNo ='" + hn + "',village ='" + m + "',subArea ='" + tb + "',area ='" + op + "',province ='" + jw + "',postcode ='" + post + "',tel ='" + tel + "',houseTel ='" + htel + "' ,subjectID ='" + subjectID + "',subjectName = '" + subjectName + "',section = '" + section + "',classDate = '" + classDate + "',unit = '" + unit + "',Teacher = '" + Teacher + "',Allow = '" + Allow + "',Why = '" + Why + "' WHERE studentID = '" + id + "'", function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.redirect('/success');
    });
    //  })
})

//update addlate
app.post('/upadteAddlate', (req, res) => {
    var date = req.body.date;
    var t = req.body.title;
    var f = req.body.fname;
    var l = req.body.lname;
    var id = req.body.studentId;
    var y = req.body.grade;
    var fi = req.body.field;
    var ad = req.body.advisor;
    //Address
    var hn = req.body.houseNo;
    var m = req.body.village;
    var tb = req.body.subArea;
    var op = req.body.area;
    var jw = req.body.province;
    var post = req.body.postcode;
    var tel = req.body.phone;
    var htel = req.body.call;
    //add drop infor
    var subjectID = req.body.subjectId;
    var subjectName = req.body.subjectName;
    var section = req.body.section;
    var classDate = req.body.classDate;
    var unit = req.body.unit;
    var Teacher = req.body.teacher;
    var Allow = req.body.allow;
    var Why = req.body.reason;

    connection.query("UPDATE InformationAddlate SET date = '" + date + "',title ='" + t + "', firstname ='" + f + "',lastname ='" + l + "', studentID ='" + id + "',grade ='" + y + "',field ='" + fi + "',advisor ='" + ad + "',houseNo ='" + hn + "',village ='" + m + "',subArea ='" + tb + "',area ='" + op + "',province ='" + jw + "',postcode ='" + post + "',tel ='" + tel + "',houseTel ='" + htel + "' ,subjectID ='" + subjectID + "',subjectName = '" + subjectName + "',section = '" + section + "',classDate = '" + classDate + "',unit = '" + unit + "',Teacher = '" + Teacher + "',Allow = '" + Allow + "',Why = '" + Why + "' WHERE studentID = '" + id + "'", function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.redirect('/success');
    });
    //  })
})

//update addcross
app.post('/upadteAddcross', (req, res) => {
    var date = req.body.date;
    var t = req.body.title;
    var f = req.body.fname;
    var l = req.body.lname;
    var id = req.body.studentId;
    var y = req.body.grade;
    var fi = req.body.field;
    var ad = req.body.advisor;
    //Address
    var hn = req.body.houseNo;
    var m = req.body.village;
    var tb = req.body.subArea;
    var op = req.body.area;
    var jw = req.body.province;
    var post = req.body.postcode;
    var tel = req.body.phone;
    var htel = req.body.call;
    //add drop infor
    var subjectID = req.body.subjectId;
    var subjectName = req.body.subjectName;
    var section = req.body.section;
    var classDate = req.body.classDate;
    var unit = req.body.unit;
    var Teacher = req.body.teacher;
    var Allow = req.body.allow;
    var Why = req.body.reason;

    connection.query("UPDATE InformationAddcross SET date = '" + date + "',title ='" + t + "', firstname ='" + f + "',lastname ='" + l + "', studentID ='" + id + "',grade ='" + y + "',field ='" + fi + "',advisor ='" + ad + "',houseNo ='" + hn + "',village ='" + m + "',subArea ='" + tb + "',area ='" + op + "',province ='" + jw + "',postcode ='" + post + "',tel ='" + tel + "',houseTel ='" + htel + "' ,subjectID ='" + subjectID + "',subjectName = '" + subjectName + "',section = '" + section + "',classDate = '" + classDate + "',unit = '" + unit + "',Teacher = '" + Teacher + "',Allow = '" + Allow + "',Why = '" + Why + "' WHERE studentID = '" + id + "'", function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.redirect('/success');
    });
    //  })
})


