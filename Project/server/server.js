const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors('http://localhost:8081'));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.json({message: 'Welcome to nowhere.'});
});

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require('./models/index.js');
const dbConfig = require('./database/db.config.js');

const Role = db.role;

db.mongoose
  .connect(
    `mongodb+srv://${dbConfig.HOST}:${dbConfig.PASS}@cluster0.li8q53j.mongodb.net/RNproject?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => {
    console.log('Successfully connect to MongoDB.');
    initial();
  })
  .catch(err => {
    console.error('Connection error', err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user',
      }).save(err => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: 'moderator',
      }).save(err => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: 'admin',
      }).save(err => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

// routes
require('./routes/auth.routes.js')(app);
require('./routes/user.routes.js')(app);
