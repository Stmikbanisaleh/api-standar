const express = require('express');

const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const usulanController = require('../controllers/usulanController');
const jenisstandarController = require('../controllers/jenisstandarController');

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
router.post('/getusulanditolak', checkAuth, usulanController.GetUsulanDitolak);
router.post('/getusulanditerima', checkAuth, usulanController.GetUsulanDiterima);
router.post('/getdetailuser', checkAuth, usulanController.GetDetailUser);
router.post('/getusulandraftbyuser', checkAuth, usulanController.GetUsulanDraftByUser);
router.post('/getusulandiajukanbyuser', checkAuth, usulanController.GetUsulanDiajukanByUser);
router.post('/getusulanditerimabyuser', checkAuth, usulanController.GetUsulanDiterimaByUser);
router.post('/getusulanditolakbyuser', checkAuth, usulanController.GetUsulanDitolakByUser);
router.post('/jenisstandar', jenisstandarController.JenisStandar);
router.post('/komiteteknis', jenisstandarController.KomiteTeknis);
router.post('/jenisperumusan', jenisstandarController.JenisPerumusan);
router.post('/jalurperumusan', jenisstandarController.JalurPerumusan);
router.post('/konseptor', jenisstandarController.GetKonseptor);
router.post('/addusulan', usulanController.AddUsulan);
router.post('/addkonseptorutama', usulanController.AddKonseptor);
router.post('/add_d_konseptor', usulanController.AddDKonseptor);
router.post('/add_d_kepentingan', usulanController.AddDKepentingan);
router.post('/add_d_manfaat', usulanController.AddDManfaat);
router.post('/add_d_regulasi', usulanController.AddDRegulasi);


module.exports = router;
