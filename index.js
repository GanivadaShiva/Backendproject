const express = require('express');
const app = express();
const axios = require('axios');

// Import the users array from the database.js file
const users = require('./database');
app.use(express.json());

// Define the route handler for the /api/v3/app/events?id=:event_id endpoint
app.get('/api/v3/app/events', (req, res) => {
  const eventId = req.query.id; // Get the event_id from the query parameters

  // Find the event by its unique ID
  const event = users.find((user) => user.uid.toString() === eventId);

  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }

  return res.json(event);
});

app.get('/api/v3/app/events', (req, res) => {
    const { type, limit, page } = req.query;
  
    // Filter events based on recency
    let filteredEvents = users;
    if (type === 'latest') {
      filteredEvents = users.sort((a, b) => b.schedule.localeCompare(a.schedule));
    }
  
    // Paginate results based on page number and limit of events per page
    const pageSize = parseInt(limit) || 5;
    const pageNumber = parseInt(page) || 1;
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedEvents = filteredEvents.slice(startIndex, endIndex);
  
    return res.json(paginatedEvents);
  });
  
  const eventData = {
    name: "New Tech Workshop",
    files: {
      image: "workshop_image.jpg"
    },
    tagline: "Learn the latest technologies",
    schedule: "2023-10-10T13:00:00",
    description: "Join us for an interactive workshop where you'll get hands-on experience with cutting-edge technologies.",
    moderator: {
      uid: 501,
      name: "Alex Johnson"
    },
    category: "Technology",
    sub_category: "Workshops",
    rigor_rank: 3
};
  
axios.post('http://localhost:3000/api/v3/app/events', eventData)
.then(response => {
  console.log('Event created with ID:', response.data.id);
})
.catch(error => {
  console.error('Error creating event:', error.response.data.error);
});


const eventId = 1; // Replace with the ID of the event you want to update

const updatedEventData = {
  name: "Updated Tech Conference 2023",
  tagline: "Discover the latest trends in technology and more",
  schedule: "2023-09-15T09:00:00",
  description: "Join us for a full day of insightful talks, networking opportunities, and hands-on workshops, where industry experts will share their knowledge on emerging technologies.",
  files: {
    image: "conference_updated_image.jpg"
  },
  moderator: {
    uid: 101,
    name: "John Smith"
  },
  category: "Technology",
  sub_category: "Conferences",
  rigor_rank: 5,
  attendees: [101, 203, 305, 408]
};

axios.put(`http://localhost:3000/api/v3/app/events/${eventId}`, updatedEventData)
  .then(response => {
    console.log('Event updated successfully');
  })
  .catch(error => {
    console.error('Error updating event:', error.response.data.error);
  });

  app.delete('/api/v3/app/events/:id', (req, res) => {
    const eventId = req.params.id; // Get the event ID from the request params
  
    // Find the index of the event in the users array
    const eventIndex = users.findIndex((user) => user.uid.toString() === eventId);
  
    if (eventIndex === -1) {
      return res.status(404).json({ error: 'Event not found' });
    }
  
    // Remove the event from the array
    const deletedEvent = users.splice(eventIndex, 1);
  
    return res.json({ success: true, deletedEvent });
  });

  // Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
