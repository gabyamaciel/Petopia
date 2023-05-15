const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const pets = [
  {
    id: "1",
    name: "Mike",
    age: "1",
    species: "Dog",
    breed: "Shihtzu",
  },
  {
    id: "2",
    name: "Sullyvan",
    age: "3",
    species: "Ferret",
    breed: "White",
  },
  {
    id: "3",
    name: "Oddie",
    age: "6",
    species: "Cat",
    breed: "Persa",
  },
];

// Read all pets
router.get("/", (req, res) => {
  res.json(pets);
});

// Read a single pet by ID
router.get("/:id", (req, res) => {
  const pet = pets.find((p) => p.id === req.params.id);
  if (pet) {
    res.json(pet);
  } else {
    res.status(404).json({ message: "Pet not found" });
  }
});

// Create a new pet
router.post("/", (req, res) => {
  const newPet = {
    id: uuidv4(),
    name: req.body.name,
    age: req.body.age,
    species: req.body.species,
    breed: req.body.breed,
  };

  pets.push(newPet);
  res.status(201).json(newPet);
});

// Update an existing pet
router.put("/:id", (req, res) => {
  const pet = pets.find((p) => p.id === req.params.id);
  if (pet) {
    pet.name = req.body.name;
    pet.age = req.body.age;
    pet.species = req.body.species;
    pet.breed = req.body.breed;

    res.json(pet);
  } else {
    res.status(404).json({ message: "Pet not found" });
  }
});

// Delete a pet
router.delete("/:id", (req, res) => {
  const petIndex = pets.findIndex((p) => p.id === req.params.id);
  if (petIndex !== -1) {
    const deletedPet = pets[petIndex];
    pets.splice(petIndex, 1);
    res.json(deletedPet);
  } else {
    res.status(404).json({ message: "Pet not found" });
  }
});

module.exports = router;