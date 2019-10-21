exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("questions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("questions").insert([
        {
          requestID: 1,
          userID: 1,
          content: "Do your kids have peanut allergies?"
        },
        { requestID: 1, userID: 2, content: "How high is the moon?" },
        { requestID: 1, userID: 3, content: "Are your kids cool?" },

        {
          requestID: 2,
          userID: 4,
          content: "Do your kids have peanut allergies?"
        },
        { requestID: 2, userID: 5, content: "Do your trust me?" },
        {
          requestID: 2,
          userID: 2,
          content: "Do your kids have peanut allergies?"
        },
        { requestID: 3, userID: 2, content: "Do your trust me?" },
        {
          requestID: 3,
          userID: 3,
          content: "Do your kids have peanut allergies?"
        },
        {
          requestID: 3,
          userID: 4,
          content: "Do you care about your kids?"
        },

        {
          requestID: 4,
          userID: 2,
          content: "Do you have a CPR certification?"
        },
        {
          requestID: 4,
          userID: 2,
          content: "Do your kids have peanut allergies?"
        },
        {
          requestID: 4,
          userID: 3,
          content: "Do you care about your kids?"
        },

        {
          requestID: 5,
          userID: 4,
          content: "Do you care about your kids?"
        },
        {
          requestID: 5,
          userID: 3,
          content: "Do your kids have peanut allergies?"
        },
        {
          requestID: 5,
          userID: 2,
          content: "Do your kids have peanut allergies?"
        }
      ]);
    });
};
