const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "student_result"
});

// Check database connection
db.connect((err) => {
    if (err) {
        console.log("Database connection failed:");
        console.log(err.message);
        return;
    }

    console.log("MySQL connected successfully!");
});

// Test API
app.get("/", (req, res) => {
    res.send("Student Result Backend is running!");
});

// Get all students
app.get("/api/students", (req, res) => {

    const sql = "SELECT * FROM students";

    db.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.json(results);
    });
});

// Get student result by PRN
app.get("/api/result/:prn", (req, res) => {

    const prn = req.params.prn;

    const sql = `
        SELECT
            s.prn,
            s.name,
            s.branch,
            m.subject,
            m.mse,
            m.ese
        FROM students s
        JOIN marks m
            ON s.id = m.student_id
        WHERE s.prn = ?
        ORDER BY m.id
    `;

    db.query(sql, [prn], (err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                error: "Student result not found"
            });
        }

        res.json({
            prn: results[0].prn,
            name: results[0].name,
            branch: results[0].branch,
            marks: results.map(row => ({
                subject: row.subject,
                mse: row.mse,
                ese: row.ese
            }))
        });
    });
});

// Start server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});