import express from 'express'

const RootController = (req: express.Request, res: express.Response) => {
  res.render('pages/index')
}

export = RootController
