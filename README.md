# back-end

Users
-id
-isParent: false
-firstName
-lastName
-age
-gender
-description

Requests
-id
-userID references id in users (ParentID)
-accepted: false
-meetingPlace: string
-time: time
-date: date
-kids: integer
-description: string

Questions
-id
-requestID references id in requests
-userID (Questioner's ID) references id in users
-content: string
-timeStamp: time

Parents
Navbar: My Requests (Add button)
: Jobs
: My Accepted Requests
: My Accepted Jobs

Nonparent
: Jobs
: My accepted jobs
