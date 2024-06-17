const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');
const Hospital = require('./models/Hospital');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/HEALTHCARESYSTEM", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
  });

app.post("/login",(req,res)=>{
  const {email,password} = req.body;
  UserModel.findOne({email:email})
    .then(user=>{
      if(user){
        if(user.password===password){
          res.json("Success");
        } else {
          res.json("Incorrect Password");
        }
      } else {
        res.json("No record exists");
      }
    })
    .catch(error => {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

app.post('/register', (req, res) => {
  const newUser = new UserModel(req.body);
  UserModel.findOne({ email: newUser.email })
    .then(existingUser => {
      if (existingUser) {
        return res.status(400).json({ error: 'User with this email already exists' });
      }
      return newUser.save();
    })
    .then(user => res.json(user))
    .catch(err => res.status(400).json({ error: err.message }));
});

app.post('/hospitals', async (req, res) => {
  try {
    const hospital = new Hospital(req.body);
    await hospital.save();
    res.status(201).send(hospital);
  } catch (error) {
    console.error('Error creating hospital:', error);
    res.status(400).send(error);
  }
});

app.get('/hospitals', async (req, res) => {
  const { speciality } = req.query;
  try {
      const hospitals = await Hospital.find({ speciality }).select('hospitalName rating locationurl experience');
      res.json(hospitals);
  } catch (error) {
      console.error('Error fetching hospitals:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});


const PORT = 8009;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
