const router = require("express").Router();
const Requests = require("../requests/requests-model.js");

/* --- Insert a request -- */
router.post("/", (req, res) => {
  const {
    requesterUserID,
    meetingPlace,
    dateTime,
    kids,
    description
  } = req.body;
  //Required Fields
  console.log(req.body);
  if (requesterUserID && meetingPlace && dateTime && kids) {
    Requests.insert(req.body)
      .then(response => {
        if (response) {
          res.status(200).json({ message: "Insertion Successful!" });
        }
      })
      .catch(error => {
        res.status(500).json({ message: "Database Error", error });
      });
  } else {
    res
      .status(400)
      .json({ message: "You need a meeting place, dateTime, and kids!" });
  }
});

module.exports = router;
