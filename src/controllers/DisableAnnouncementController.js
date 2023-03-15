const express = require('express');
const disableAnnouncemet = require('../models/personsModel');

const disableAnnouncemet = async (req, res) => {
  const disableAnnouncement = true;
  if (disableAnnouncement) {
    res.status(403).send('This call has been disabled.');
  } else {
    await disableAnnouncement.delete(); 
    return res.status(200).send({message:'Deleted successfully'}); 
  }
};
app.listen(3000, () => {
  console.log('Server started on port 3000.');
});

module.exports = {disableAnnouncemet};
