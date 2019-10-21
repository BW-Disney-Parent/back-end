exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("requests")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("requests").insert([
        {
          requesterUserID: 1,
          chaperoneUserID: 2,
          accepted: true,
          meetingPlace: "Food Court",
          dateTime: "2019-01-01 20:00:00",
          kids: 4,
          description: "My kids are great!"
        },
        {
          requesterUserID: 1,
          accepted: false,
          meetingPlace: "Food Court",
          dateTime: "2019-01-01 20:00:00",
          kids: 4,
          description: "My kids are great!"
        },
        {
          requesterUserID: 2,
          chaperoneUserID: 4,
          accepted: true,
          meetingPlace: "Log Flume",
          dateTime: "2019-01-01 11:00:00",
          kids: 3,
          description: "My kids are great!"
        },
        {
          requesterUserID: 2,
          accepted: false,
          meetingPlace: "Food Court",
          dateTime: "2019-01-01 20:00:00",
          kids: 4,
          description: "My kids are great!"
        },
        {
          requesterUserID: 3,
          chaperoneUserID: 5,
          accepted: true,
          meetingPlace: "Food Court",
          dateTime: "2019-01-01 15:00:00",
          kids: 1,
          description: "They are great to with!"
        },
        {
          requesterUserID: 3,
          accepted: false,
          meetingPlace: "Food Court",
          dateTime: "2019-01-01 20:00:00",
          kids: 4,
          description: "My kids are great!"
        },
        {
          requesterUserID: 4,
          chaperoneUserID: 3,
          accepted: true,
          meetingPlace: "Space Mountain",
          dateTime: "2019-01-01 11:00:00",
          kids: 4,
          description: "Most of them are great; one is a trouble maker."
        },
        {
          requesterUserID: 4,
          accepted: false,
          meetingPlace: "Food Court",
          dateTime: "2019-01-01 20:00:00",
          kids: 4,
          description: "My kids are great!"
        },
        {
          requesterUserID: 5,
          accepted: false,
          meetingPlace: "Cotton Candy Stand",
          dateTime: "2019-01-01 11:00:00",
          kids: 4,
          description: "They can be good. Sometimes..."
        },
        {
          requesterUserID: 5,
          chaperoneUserID: 2,
          accepted: true,
          meetingPlace: "Food Court",
          dateTime: "2019-01-01 20:00:00",
          kids: 4,
          description: "My kids are great!"
        }
      ]);
    });
};
