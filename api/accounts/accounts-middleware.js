exports.checkAccountPayload = (req, res, next) => {
  const { name, budget } = req.body
  if(!name || !name.trim() || !budget ) {
    res.status(400).json({
      message: "name and budget are required"
    })
  } else if (name.trim() < 3 || name.trim() > 100) {
    res.status(400).json({
      message: "name of account must be between 3 and 100"
    })
  } else if (typeof name !== 'string') {
    res.status(400).json({
      message: "name of account must be a string"
  })
} else if (typeof budget !== 'number'){
  res.status(400).json({
    message: "budget of account must be a number"
})
} else if (budget < 0 || budget > 1000000 ) {
  res.status(400).json({
    message: "budget of account is too large or too small"
})
} else {
  req.name = name.trim()
  req.budget = budget
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
}
