import express from 'express'

const RootController = (req: express.Request, res: express.Response) => {
  res.send(`<h1> Head over to /api to access the demo api </h1>`)
}

export = RootController
