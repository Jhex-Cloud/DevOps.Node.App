const express = require('express')
const router = express.Router()
const recepies = require('../Database/recepies')

const idFilter = (req) => (recepie) => recepie.id === parseInt(req.params.id)

//Return all recepies as JSON
router.get('/all', (req, res) => res.json(recepies))

//Return Single recepie
router.get('/:id', (req, res) => {
  const found = recepies.some(idFilter(req))
  if (found) {
    res.json(recepies.filter(idFilter(req)))
  } else {
    res.status(400).json({ msg: `No recepie with the id of ${req.params.id}` })
  }
})

// Create Recepie
router.post('/add', (req, res) => {
  const newRecepie = {
    ...req.body,
  }
  if (
    !newRecepie.id ||
    !newRecepie.title ||
    !newRecepie.href ||
    !newRecepie.ingredients
  ) {
    return res
      .status(400)
      .json({ msg: 'Pls include ID.. Title.. Href.. Ingredients' })
  }
  recepies.push(newRecepie)
  res.json(recepies)
})

// Update Recepie Info
router.put('/:id', (req, res) => {
  const found = recepies.some(idFilter(req))

  if (found) {
    recepies.forEach((recepie, i) => {
      if (idFilter(req)(recepie)) {
        const updrecepie = { ...recepie, ...req.body }
        recepies[i] = updrecepie
        res.json({ msg: 'recepie updated', updrecepie })
      }
    })
  } else {
    res.status(400).json({ msg: `No recepie with the id of ${req.params.id}` })
  }
})

// Delete recepie
router.delete('/:id', (req, res) => {
  const found = recepies.some(idFilter(req))

  if (found) {
    res.json({
      msg: 'recepie deleted',
      recepies: recepies.filter((recepie) => !idFilter(req)(recepie)),
    })
  } else {
    res.status(400).json({ msg: `No recepie with the id of ${req.params.id}` })
  }
})

module.exports = router
