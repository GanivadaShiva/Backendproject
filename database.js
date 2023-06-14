// database.js

const users = [
    {
      "type": "event",
      "uid": 1,
      "name": "Tech Conference 2023",
      "tagline": "Discover the latest trends in technology",
      "schedule": "2023-09-15T09:00:00",
      "description": "Join us for a full day of insightful talks and networking opportunities, where industry experts will share their knowledge on emerging technologies.",
      "files": {
        "image": "conference_image.jpg"
      },
      "moderator": {
        "uid": 101,
        "name": "John Smith"
      },
      "category": "Technology",
      "sub_category": "Conferences",
      "rigor_rank": 4,
      "attendees": [101, 203, 305, 408]
    },
    {
      "type": "event",
      "uid": 2,
      "name": "Music Festival 2023",
      "tagline": "Celebrate the love for music",
      "schedule": "2023-07-20T18:00:00",
      "description": "Experience the magic of live performances by your favorite artists. Dance, sing, and create memories that will last a lifetime!",
      "files": {
        "image": "festival_poster.jpg"
      },
      "moderator": {
        "uid": 205,
        "name": "Emily Johnson"
      },
      "category": "Entertainment",
      "sub_category": "Music",
      "rigor_rank": 3,
      "attendees": [205, 309, 412, 511, 619]
    },
    {
      "type": "event",
      "uid": 3,
      "name": "Fitness Bootcamp",
      "tagline": "Transform your body and mind",
      "schedule": "2023-08-05T07:00:00",
      "description": "Join our intensive fitness bootcamp and challenge yourself with high-intensity workouts, expert guidance, and nutrition tips to achieve your fitness goals.",
      "files": {
        "image": "bootcamp_banner.jpg"
      },
      "moderator": {
        "uid": 305,
        "name": "Sarah Thompson"
      },
      "category": "Health & Wellness",
      "sub_category": "Fitness",
      "rigor_rank": 5,
      "attendees": [305, 406, 513, 618, 719, 827]
    }
  ];
  
  module.exports = users;
  