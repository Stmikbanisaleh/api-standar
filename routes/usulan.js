const express = require('express');

const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const usulanController = require('../controllers/usulanController');

// router.get('/', userController.userList);
router.post('/jumlahusulan', checkAuth, usulanController.JumlahUsulan);
router.post('/jumlahsni', checkAuth, usulanController.JumlahSNI);
router.post('/jumlahpnps', checkAuth, usulanController.JumlahPNPS);
router.post('/jumlahsl', checkAuth, usulanController.JumlahSL);
router.post('/getrumusansni', checkAuth, usulanController.GetrumusanSNI);
router.post('/getrumusansl', checkAuth, usulanController.GetrumusanSL);
router.post('/getsni', checkAuth, usulanController.GetSNI);
router.post('/getsl', checkAuth, usulanController.GetSL);
router.post('/getusulandraft', checkAuth, usulanController.GetUsulanDraft);
router.post('/getusulandiajukan', checkAuth, usulanController.GetUsulanDiajukan);
router.post('/getdetailuser', checkAuth, usulanController.GetDetailUser);
router.post('/getusulandraftbyuser', checkAuth, usulanController.GetUsulanDraftByUser);
router.post('/getusulandiajukanbyuser', checkAuth, usulanController.GetUsulanDiajukanByUser);
router.post('/getusulanditerimabyuser', checkAuth, usulanController.GetUsulanDiterimaByUser);
router.post('/getprosesperumusanbyuser', checkAuth, usulanController.GetProsesPerumusanByUser);
router.post('/getprosesperumusan', checkAuth, usulanController.GetProsesPerumusan);



module.exports = router;
