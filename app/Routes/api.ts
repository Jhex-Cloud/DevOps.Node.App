/* eslint-disable radix */
import express from 'express'
import { recepieInterface, foodRecepies } from '../Database/recepies'

const router = express.Router()

const idFilter = (req: any) => (recepie: recepieInterface) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  recepie.id === parseInt(req.params.id)

// Return all foodRecepies as JSON
router.get('/all', (req, res) => res.json(foodRecepies))

// Return Single recepie
router.get('/:id', (req, res) => {
  const found = foodRecepies.some(idFilter(req))
  if (found) {
    res.json(foodRecepies.filter(idFilter(req)))
  } else {
    res.status(400).json({ msg: `No recepie with the id of ${req.params.id}` })
  }
})

// Create Recepie
router.post('/add', (req, res) => {
  const newRecepie = {
    ...req.body
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
  foodRecepies.push(newRecepie)
  return res.json(foodRecepies)
})

// Update Recepie Info
router.put('/:id', (req, res) => {
  const found = foodRecepies.some(idFilter(req))

  if (found) {
    foodRecepies.forEach((recepie: recepieInterface, i: any) => {
      if (idFilter(req)(recepie)) {
        const updrecepie = { ...recepie, ...req.body }
        foodRecepies[i] = updrecepie
        res.json({ msg: 'recepie updated', updrecepie })
      }
    })
  } else {
    res.status(400).json({ msg: `No recepie with the id of ${req.params.id}` })
  }
})

// Delete recepie
router.delete('/:id', (req, res) => {
  const found = foodRecepies.some(idFilter(req))

  if (found) {
    res.json({
      msg: 'recepie deleted',
      foodRecepies: foodRecepies.filter(
        (recepie: recepieInterface) => !idFilter(req)(recepie)
      )
    })
  } else {
    res.status(400).json({ msg: `No recepie with the id of ${req.params.id}` })
  }
})

module.exports = router
