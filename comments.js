// Create web server
// Run the server
// Create a route for GET /comments
// Create a route for POST /comments
// Create a route for DELETE /comments
// Create a route for PUT /comments
// Create a route for PATCH /comments

const express = require('express');
const app = express();
app.use(express.json());

// Create an array with comments
let comments = [
  {
    id: 1,
    username: "John",
    comment: "Hello, I'm John.",
  },
  {
    id: 2,
    username: "Jane",
    comment: "Hello, I'm Jane.",
  },
  {
    id: 3,
    username: "Jim",
    comment: "Hello, I'm Jim.",
  },
];

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route for POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Create a route for DELETE /comments
app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  comments = comments.filter((comment) => comment.id !== id);
  res.json({ message: 'Comment deleted' });
});

// Create a route for PUT /comments
app.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const newComment = req.body;
  comments = comments.map((comment) => {
    if (comment.id === id) {
      return newComment;
    }
    return comment;
  });
  res.json(newComment);
});

// Create a route for PATCH /comments
app.patch('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const newComment = req.body;
  comments = comments.map((comment) => {
    if (comment.id === id) {
      return { ...comment, ...newComment };
    }
    return comment;
  });
  res.json(newComment);
});

// Run the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});