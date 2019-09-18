const express = require('express');
const router = express.Router();

/**
 * @route     GET api/contacts
 * @description Get all users contacts
 * @access Private
 */
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

/**
 * @route     POST api/contacts
 * @description add new contact
 * @access Private
 */
router.post('/', (req, res) => {
  res.send('add new contact');
});

/**
 * @route     PUT api/contacts/:id
 * @description Update a contact
 * @access Private
 */
router.put('/:id', (req, res) => {
  res.send('Update a contact');
});

/**
 * @route     DELETE api/contacts/:id
 * @description DELETE contact
 * @access Private
 */
router.delete('/:id', (req, res) => {
  res.send('Delete a contact');
});

module.exports = router;