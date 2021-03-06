const router = require('express').Router();

const UsuarioController = require('../app/controllers/UsuarioController');

const autenticacaoMiddleware = require('../app/middleware/autenticacaoMiddleware');


router.route('/usuarios')
  .post(UsuarioController.postUsers);

// router.use(autenticacaoMiddleware);

router.route('/usuarios')
  .get(UsuarioController.getUsers)
  .delete(UsuarioController.deleteUser)
  .put(UsuarioController.putUser);

router.route('/usuarios/:id')
  .get(UsuarioController.getUser)
  .put(UsuarioController.putUser)
  .delete(UsuarioController.deleteUser);

router.route('/usuariospesquisa/:campo')
  .get(UsuarioController.getUsersByName);

router.route('/usuarioslimit/:limit/:offset')
  .get(UsuarioController.getUsersWhitLimitAndOffset);

module.exports = router;
