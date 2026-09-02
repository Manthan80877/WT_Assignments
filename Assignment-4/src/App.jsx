import { useState } from "react";
import "./App.css";

const subjects = [
  {
    key: "DAA",
    name: "Design and Analysis of Algorithms",
  },
  {
    key: "CN",
    name: "Computer Networks",
  },
  {
    key: "ARVR",
    name: "AR/VR",
  },
  {
    key: "WT",
    name: "Web Technologies",
  },
];

function getGrade(total) {
  if (total >= 90) return "O";
  if (total >= 80) return "A+";
  if (total >= 70) return "A";
  if (total >= 60) return "B+";
  if (total >= 50) return "B";
  if (total >= 40) return "C";
  return "F";
}

function App() {
  const [name, setName] = useState("");
  const [prn, setPrn] = useState("");

  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const searchStudent = async (e) => {
    e.preventDefault();

    setError("");
    setStudent(null);

    const enteredName = name.trim().toLowerCase();
    const enteredPrn = prn.trim();

    if (!enteredName || !enteredPrn) {
      setError("Please enter both your name and PRN.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/result/${encodeURIComponent(enteredPrn)}`
      );

      if (!response.ok) {
        setError("Student not found. Please check your name and PRN.");
        return;
      }

      const data = await response.json();

      // Verify the entered name as well as PRN
      if (data.name.trim().toLowerCase() !== enteredName) {
        setError("Student not found. Please check your name and PRN.");
        return;
      }

      // Convert marks array from API into the format
      // used by the existing UI
      const marksObject = {};

      data.marks.forEach((mark) => {
        marksObject[mark.subject] = {
          mse: mark.mse,
          ese: mark.ese,
        };
      });

      setStudent({
        prn: data.prn,
        name: data.name,
        branch: data.branch,
        marks: marksObject,
      });
    } catch (err) {
      console.error(err);

      setError(
        "Unable to connect to the result server. Please make sure the backend is running."
      );
    }
  };

  const checkAnotherStudent = () => {
    setStudent(null);
    setName("");
    setPrn("");
    setError("");
  };

  /*
   * =========================
   *     SEARCH PAGE
   * =========================
   */

  if (!student) {
    return (
      <div className="page">

        <header className="topbar">

          <div className="brand">

            <div className="brand-mark">
              VIT
            </div>

            <div>
              <h2>Vishwakarma Institute of Technology</h2>
              <p>Semester Result Portal</p>
            </div>

          </div>

          <div className="semester-badge">
            2025–26
          </div>

        </header>

        <main className="hero">

          <div className="eyebrow">
            STUDENT PORTAL
          </div>

          <h1>
            Check your
            <br />
            <span>semester result.</span>
          </h1>

          <p className="subtitle">
            Enter your student details to view your
            semester performance.
          </p>

          <form
            className="result-form"
            onSubmit={searchStudent}
          >

            <label>
              Student Name

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Manthan Agrawal"
              />
            </label>

            <label>
              Permanent Registration Number (PRN)

              <input
                type="text"
                value={prn}
                onChange={(e) => setPrn(e.target.value)}
                placeholder="e.g. 12410897"
              />
            </label>

            {error && (
              <div className="error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="primary-button"
            >
              <span>Get Semester Result</span>
              <strong>→</strong>
            </button>

            <p className="info-note">
              Enter your details exactly as registered in
              the student database.
            </p>

          </form>

        </main>

      </div>
    );
  }

  /*
   * =========================
   *     RESULT CALCULATION
   * =========================
   */

  const calculatedSubjects = subjects.map((subject) => {

    const subjectMarks = student.marks?.[subject.key];

    const mse = Number(subjectMarks?.mse ?? 0);
    const ese = Number(subjectMarks?.ese ?? 0);

    const total = mse + ese;

    const grade = getGrade(total);

    return {
      ...subject,
      mse,
      ese,
      total,
      grade,
    };
  });

  const totalMarks = calculatedSubjects.reduce(
    (sum, subject) => sum + subject.total,
    0
  );

  const maximumMarks = calculatedSubjects.length * 100;

  const percentage =
    maximumMarks > 0
      ? ((totalMarks / maximumMarks) * 100).toFixed(2)
      : "0.00";

  const failedSubjects = calculatedSubjects.filter(
    (subject) => subject.grade === "F"
  );

  const passed = failedSubjects.length === 0;

  /*
   * =========================
   *     RESULT PAGE
   * =========================
   */

  return (
    <div className="page">

      <header className="topbar">

        <div className="brand">

          <div className="brand-mark">
            VIT
          </div>

          <div>
            <h2>
              Vishwakarma Institute of Technology
            </h2>

            <p>
              Semester Result Portal
            </p>
          </div>

        </div>

        <div className="semester-badge">
          2025–26
        </div>

      </header>


      <main className="result-page">

        <button
          className="back-button"
          onClick={checkAnotherStudent}
        >
          ← Check another student
        </button>


        {/* STUDENT RECORD */}

        <section className="result-heading">

          <div>

            <div className="eyebrow">
              STUDENT RECORD
            </div>

            <h1>
              {student.name}
            </h1>

            <p>
              PRN: {student.prn}
              {" • "}
              {student.branch}
            </p>

          </div>

          <div
            className={`status ${
              passed ? "pass" : "fail"
            }`}
          >
            {passed ? "VERIFIED" : "FAILED"}
          </div>

        </section>


        {/* SUMMARY */}

        <section className="summary-grid">

          <div className="summary-card">

            <span>
              STUDENT
            </span>

            <strong>
              {student.name}
            </strong>

          </div>


          <div className="summary-card">

            <span>
              PRN
            </span>

            <strong>
              {student.prn}
            </strong>

          </div>


          <div className="summary-card">

            <span>
              BRANCH
            </span>

            <strong>
              {student.branch}
            </strong>

          </div>

        </section>


        {/* MARKS */}

        <section className="marks-card">

          <div className="table-header">

            <div>

              <div className="eyebrow">
                SEMESTER MARKS
              </div>

              <h2>
                Subject-wise Performance
              </h2>

              <p>
                Marks are displayed from the student
                result database.
              </p>

            </div>

            <div className="academic-year">
              2025–26
            </div>

          </div>


          <div className="table-wrap">

            <table>

              <thead>

                <tr>
                  <th>Subject</th>
                  <th>MSE / 30</th>
                  <th>ESE / 70</th>
                  <th>Total / 100</th>
                  <th>Grade</th>
                </tr>

              </thead>


              <tbody>

                {calculatedSubjects.map((subject) => (

                  <tr key={subject.key}>

                    <td className="subject-name">
                      {subject.name}
                    </td>

                    <td>
                      {subject.mse}
                    </td>

                    <td>
                      {subject.ese}
                    </td>

                    <td>
                      {subject.total}
                    </td>

                    <td>

                      <span
                        className={`grade ${
                          subject.grade === "F"
                            ? "grade-f"
                            : ""
                        }`}
                      >
                        {subject.grade}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* RESULT SUMMARY */}

          <div className="summary-grid">

            <div className="summary-card">

              <span>
                TOTAL MARKS
              </span>

              <strong>
                {totalMarks} / {maximumMarks}
              </strong>

            </div>


            <div className="summary-card">

              <span>
                PERCENTAGE
              </span>

              <strong>
                {percentage}%
              </strong>

            </div>


            <div className="summary-card">

              <span>
                RESULT
              </span>

              <strong>
                {passed ? "PASS" : "FAIL"}
              </strong>

            </div>

          </div>

        </section>


        <p className="disclaimer">
          Student information verified from the local
          student database.
        </p>

      </main>

    </div>
  );
}

export default App;