import {Router, Request, Response} from 'express';

import {User} from '../models/User';
import {AuthRouter} from './auth.router';

export function logMessage(m: String) {
  console.log(new Date().toLocaleString() + `: ${m}`);
}

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/');

router.get('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  logMessage(`get user for ${id}`);
  const item = await User.findByPk(id);
  res.send(item);
});

export const UserRouter: Router = router;
