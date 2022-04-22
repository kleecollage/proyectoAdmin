import { UserController } from './../controller/UserController';
import {Router} from 'express'
import { checkJwt } from '../middlewares/jwt';
import { checkRole } from '../middlewares/role';

const router = Router();

//Get all users
router.get('/', [checkJwt,  checkRole(['admin'])], UserController.getAll);

//Get one user
router.get('/:id', [checkJwt,  checkRole(['admin'])], UserController.getById);

//Create new user
router.post ('/', [checkJwt], UserController.newUser);

//Edit user
router.patch('/:id', [checkJwt,  checkRole(['admin'])], UserController.editUser);

//Delete
router.delete('/:id', [checkJwt,  checkRole(['admin'])], UserController.deleteUser);

export default router;