const express = require('express')
const cors = require('cors')
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(cors())

//mysql connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project'

})

connection.connect((err) => {
    if (err) {
        console.log('Error connecting  to  MySQL database = ', err)
        return;
    }
    console.log('MySQL success fully connected!');
})

//Read
app.get("/movieDetail/:movie_id", async (req, res) => {
    const movie_id = req.params.movie_id;
    try {
        connection.query("SELECT * FROM movie INNER JOIN showtime ON movie.movie_id = showtime.movie_id INNER JOIN shows ON showtime.showtime_id = shows.showtime_id INNER JOIN theater ON shows.theater_id = theater.theater_id WHERE movie.movie_id = ?", [movie_id], (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
})

//Read
app.get("/showtimeDetail/:showtime_id", async (req, res) => {
    const showtime_id = req.params.showtime_id;
    //console.log("🚀 ~ file: server.js:46 ~ app.get ~ showtime_id:", showtime_id)

    try {
        connection.query("SELECT * FROM showtime INNER JOIN movie ON movie.movie_id = showtime.movie_id INNER JOIN shows ON shows.showtime_id = showtime.showtime_id INNER JOIN theater ON theater.theater_id = shows.theater_id WHERE showtime.showtime_id = ?", [showtime_id], (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
})

app.get("/myBookings", async (req, res) => {
    try {
        connection.query("SELECT * FROM booking INNER JOIN showtime ON showtime.showtime_id = booking.showtime_id INNER JOIN seat ON seat.seat_no = booking.seat_no INNER JOIN movie ON movie.movie_id = showtime.movie_id", (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
})

app.get("/movie", async (req, res) => {
    try {
        connection.query("SELECT * FROM movie", (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
})

// book movie only (without seat)
app.post("/booking", async (req, res) => {
    const { showtime_id, cust_id } = req.body;

    try {
        connection.query(
            "INSERT INTO booking(showtime_id, cust_id, date, seat_no) VALUES(?,?,?,?)",
            [showtime_id, cust_id, new Date(), null],
            (err, results, fields) => {
                if (err) {
                    console.log("Error while inserting a user into the database", err);
                    return res.status(400).send();
                }
                return res.status(201).json({ message: "New booking  sucessfully created!" });
            }
        )
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
})

// book movie and seat
app.post("/booking/seat", async (req, res) => {
    const { showtime_id, cust_id, seat_no } = req.body;
    //console.log("🚀 ~ file: server.js:98 ~ app.post ~ showtime_id, cust_id, seat_no:", showtime_id, cust_id, seat_no)

    try {
        connection.query(
            "UPDATE booking SET seat_no=? WHERE showtime_id = ? AND cust_id = ?",
            [seat_no, showtime_id, cust_id],
            (err, results, fields) => {
                if (err) {
                    console.log("Error while inserting a user into the database", err);
                    return res.status(400).send();
                }
                //return res.status(201).json({ message: "New booking  sucessfully created!" });
                connection.query(
                    "UPDATE seat SET seat_status=? WHERE seat_no=?",
                    ['reserved', seat_no],
                    (err, results, fields) => {
                        if (err) {
                            console.log("Error while inserting a user into the database", err);
                            return res.status(400).send();
                        }
                        return res.status(201).json({ message: "New booking  sucessfully created!" });

                    }
                )
            }
        )
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
})

app.listen(3000, () => console.log('Server is running on port 3000'));