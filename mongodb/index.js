const express = require('express');

const app = express();

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/SkillIntern");

const Students = mongoose.model('Student', { name: String });

const Student = new Students({ name: 'Zildjian' });

Student.save().then(() => console.log('document inserted'));
