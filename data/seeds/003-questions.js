exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("questions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("questions").insert([
        {
          id: 1,
          requestID: 1,
          userID: 1,
          content: "Do your kids have peanut allergies?"
        },
        { id: 2, requestID: 1, userID: 2, content: "How high is the moon?" },
        { id: 3, requestID: 1, userID: 3, content: "Are your kids cool?" },

        {
          id: 4,
          requestID: 2,
          userID: 4,
          content: "Do your kids have peanut allergies?"
        },
        { id: 5, requestID: 2, userID: 5, content: "Do your trust me?" },
        {
          id: 6,
          requestID: 2,
          userID: 2,
          content: "Do your kids have peanut allergies?"
        },
        { id: 7, requestID: 3, userID: 2, content: "Do your trust me?" },
        {
          id: 8,
          requestID: 3,
          userID: 3,
          content: "Do your kids have peanut allergies?"
        },
        {
          id: 9,
          requestID: 3,
          userID: 4,
          content: "Do you care about your kids?"
        },

        {
          id: 10,
          requestID: 4,
          userID: 2,
          content: "Do you have a CPR certification?"
        },
        {
          id: 11,
          requestID: 4,
          userID: 2,
          content: "Do your kids have peanut allergies?"
        },
        {
          id: 12,
          requestID: 4,
          userID: 3,
          content: "Do you care about your kids?"
        },

        {
          id: 13,
          requestID: 5,
          userID: 4,
          content: "Do you care about your kids?"
        },
        {
          id: 14,
          requestID: 5,
          userID: 3,
          content: "Do your kids have peanut allergies?"
        },
        {
          id: 15,
          requestID: 5,
          userID: 2,
          content: "Do your kids have peanut allergies?"
        }
      ]);
    });
};
