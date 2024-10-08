const express = require('express');
const path = require('path'); // Adicione esta linha
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes'); // Importing post routes
const commentRoutes = require('./routes/comment.routes'); // Ajuste o caminho conforme necessário
const categoryRoutes = require("./routes/category.routes");
const userRoutes = require("./routes/user.routes");

const cors = require('cors');

require('dotenv').config();

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:4200', // Change to your frontend domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true // If using cookies or authentication
}));

const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use("/api/categories", categoryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
