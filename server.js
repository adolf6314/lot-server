const express = require("express");
const app = express();

const admin = require("firebase-admin");
const credentials = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create", async (req, res) => {
  try {
    console.log(req.body);
    const id = req.body.email;
    const useJson = {
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    };
    const response = db.collection("lottery").doc(id).set(useJson);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

const db = admin.firestore();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
