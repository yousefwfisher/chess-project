const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const FILE_PATH = "./bookings.json";

// حفظ بيانات الحجز
app.post("/save", (req, res) => {
  const booking = req.body;

  let bookings = [];
  if (fs.existsSync(FILE_PATH)) {
    bookings = JSON.parse(fs.readFileSync(FILE_PATH));
  }

  bookings.push(booking);

  fs.writeFileSync(FILE_PATH, JSON.stringify(bookings, null, 2));
  res.json({ success: true, message: "تم الحجز بنجاح ✅" });
});

// عرض كل الحجوزات (هتفيدك لما تعمل صفحة أدمن)
app.get("/bookings", (req, res) => {
  if (fs.existsSync(FILE_PATH)) {
    const data = fs.readFileSync(FILE_PATH);
    res.json(JSON.parse(data));
  } else {
    res.json([]);
  }
});

app.listen(3000, () => console.log("✅ book-corses.js شغال على http://127.0.0.1:3000"));
