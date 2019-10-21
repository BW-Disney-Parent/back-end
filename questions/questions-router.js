const router = require("express").Router();
const Questions = require("../questions/questions-model.js");

/* ---Add A question--- */
router.post("/", (req, res) => {
  const { requestID, questionerUserID, content } = req.body;
  console.log(req.body);
  if (!requestID && !questionerUserID && !content) {
    res.status(400).json({
      message: "You need to have the requestID, questionerUserID, and content!"
    });
  }

  console.log("here");

  Questions.insert({ requestID, questionerUserID, content })
    .then(response => {
      res.status(200).json({ message: "Question Created!" });
    })
    .catch(error => {
      res.status(500).json({ message: "Server Error!", error });
    });
});

/* Update a question */
router.put("/:questionID", (req, res) => {
  const { questionID } = req.params;
  const changes = req.body;

  Questions.update(questionID, changes)
    .then(response => {
      res.status(200).json({ message: "Question Updated!" });
    })
    .catch(error => {
      res.status(500).json({ message: "Server Error!", error });
    });
});

/* Delete a question */
router.delete("/:questionID", (req, res) => {
  const { questionID } = req.params;

  Questions.deleteQuestion(questionID)
    .then(response => {
      res.status(200).json({ message: "Question Deleted!" });
    })
    .catch(error => {
      res.status(500).json({ message: "Server Error!", error });
    });
});

module.exports = router;
