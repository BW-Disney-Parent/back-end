exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("requests")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("requests").insert([
        {
          id: 1,
          userID: 1,
          chaperoneID: 2,
          accepted: true,
          meetingPlace: "Food Court",
          dateTime: "2019-01-01 20:00:00",
          kids: 4,
          description: "My kids are great!"
        },
        {
          id: 2,
          userID: 1,
          accepted: false,
          meetingPlace: "Food Court",
          dateTime: "2019-01-01 20:00:00",
          kids: 4,
          description: "My kids are great!"
        },
        {
          id: 3,
          userID: 2,
          chaperoneID: 4,
          accepted: true,
          meetingPlace: "Log Flume",
          dateTime: "2019-01-01 11:00:00",
          kids: 3,
          description: "My kids are great!"
        },
        {
          id: 4,
          userID: 2,
          accepted: false,
          meetingPlace: "Food Court",
          dateTime: "2019-01-01 20:00:00",
          kids: 4,
          description: "My kids are great!"
        },
        {
          id: 5,
          userID: 3,
          chaperoneID: 5,
          accepted: true,
          meetingPlace: "Food Court",
          dateTime: "2019-01-01 15:00:00",
          kids: 1,
          description: "They are great to with!"
        },
        {
          id: 6,
          userID: 3,
          accepted: false,
          meetingPlace: "Food Court",
          dateTime: "2019-01-01 20:00:00",
          kids: 4,
          description: "My kids are great!"
        },
        {
          id: 7,
          userID: 4,
          chaperoneID: 3,
          accepted: true,
          meetingPlace: "Space Mountain",
          dateTime: "2019-01-01 11:00:00",
          kids: 4,
          description: "Most of them are great; one is a trouble maker."
        },
        {
          id: 8,
          userID: 4,
          accepted: false,
          meetingPlace: "Food Court",
          dateTime: "2019-01-01 20:00:00",
          kids: 4,
          description: "My kids are great!"
        },
        {
          id: 9,
          userID: 5,
          accepted: false,
          meetingPlace: "Cotton Candy Stand",
          dateTime: "2019-01-01 11:00:00",
          kids: 4,
          description: "They can be good. Sometimes..."
        },
        {
          id: 10,
          userID: 5,
          chaperoneID: 2,
          accepted: true,
          meetingPlace: "Food Court",
          dateTime: "2019-01-01 20:00:00",
          kids: 4,
          description: "My kids are great!"
        }
      ]);
    });
};
