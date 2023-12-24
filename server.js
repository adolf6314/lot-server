const express = require("express");
const app = express();

const admin = require("firebase-admin");
const credentials = {
  type: "service_account",
  project_id: "lottery-store37",
  private_key_id: "013a4a970582cec23111175166a84bd03e172f5d",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQD0ca7Flg975bHe\nOWLOoCRpP5lzWPo6E6VGxOX7lVZUowBmR+SVAQXL66OHcrLVPougn9jdfj8te7Xp\nP5uCRHk2V/QlmPsMeyd5iQAElsmJuiMt03KfOZOpUEwFVAq7rPLKyoEfT4LEiN6f\n+F5/z1Wye9OjLVNc0lgbcseFHHijU3atHs3NZA4uWyKfEAvHJQzeYR+RpiH0Rv4B\nupiZJIbq+HqM1RXfxj4dP0rWyDUTODopFeLd7dPs6g9y5JAEgYNAdHq22Ic1dhCI\navmlTcFeopMDW/VLAqMBJgWIv+lrjgdRwyCM+bAbhnc9cA/eBaVttGH3Lrf+lvJS\nhgkF/NbbAgMBAAECggEAKD0HKZRe/noG/Q9SQgmKOjRoygbwGJuqSHYva5TKLiAv\nonvxgfZgohBV4307OK9/5D7b6p4WaqIjhaldq88iFZLbPaMrVFh43OCd+vi9ZVQZ\nkrjCH2QmzVIf/tKLpRg+Vqkzdy2ArQyLenwz8Mh3EWyhH9/dX07AMoiC6oO6IhxP\n9VzC5apzWGqEEfM77Nd6Eq8ogPiO281VOUeCDe1p0MGR5Ox/Kczehaw/FbwBn7UT\ncJF3rnOh9rbnJqwTbQyOWdACWPrl33CbGu/Mzu+8bghDKQ0WLC7aNOxRdfDmvrbC\nWb79zYAPK8CWaZH/mJZzuu1W0nI/BWMGxc8KjG0wUQKBgQD7aejt8xR8ov67qQMZ\nv97c3VPG0iieHmwytsyBoDPwxu7xteYqnDjc3Cl12loslN/UNUfyQAvyS9Ayapaa\noySHvlfejkN6H9qcuz9ucRBBbMCW5VVZ3ZA5UL+HDPCsXawZfaZq69impH8duKaC\ndv7eAoi0CWetExhXs3NWfgiVsQKBgQD45zmV/uznc/mDT597ttpCSbkK3TLLUAO8\nMqw7XQtYCDuSrPpQqmx4lFy89c6byF6MdVLI5CN347CS7kJ+p1iznUQMhdudaIoC\ni+VYcc9Sbcput2advR1nX3Il6xDIjvTJ5M1E6dwjPmxb8n7tKFz0KfKor4lt466x\nQWmQN/u8SwKBgQC0F0SMFmCpexRfloyrCD77FOuq8uW3hfFZToolnH04TzfgGr1Z\n7nfo9SgZzKRlZOsElnoH9IraMCZdxu5ErPJA7j8BJAT/2Qt+0753PTQ4uU8nh/Vg\nnw5tkALyGXnY7myWAeSQmIqjrBeGUbusntKoc0Y7OLV0S8ZXJCtNXJCHsQKBgQCF\nd0eTvNy/x5p15Q45wnUKsol839vK1Z8LHYjpVB0vGUsIfaTD+H6tsbCAyrX9JtY8\nLvUzL9ItCXS3dPdG/uk7dwr0RBrdLx9B+k4CvRRUuPaho8psrunDcpS87G1VfgKY\n+A1x9IzMgT6Nl1ykQs6FRrEN7wKcYEheWBsI8FwWPQKBgA4AJT1VfHidmgI/vVrP\nEZLtSFq34vxw21roc4HCoZClZEJ/xVU/MI9hVPUCgMC7Ys1gYCLitCS3Rk4UN3mW\nKzWhB4maZG+lnyHbEoRG7QEZqjb5ERiqh7SSutrJDIvPxkENwdYQwZ7IFGUCB+HT\nfIBeX9u25mma2fFmgEGfWHry\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-brze7@lottery-store37.iam.gserviceaccount.com",
  client_id: "111113058371075914829",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-brze7%40lottery-store37.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

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
