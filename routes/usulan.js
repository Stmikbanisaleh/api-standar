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
router.post('/getprosesperumusanbyuser', checkAuth, usulanController.GetProsesPerumusanByUser);
router.post('/getprosesperumusan', checkAuth, usulanController.GetProsesPerumusan);
router.post('/getdetail', checkAuth, usulanController.GetDetail);
router.post('/addperbaikan', checkAuth, usulanController.AddPerbaikan);
router.post('/add_d_acuansni', checkAuth, usulanController.AddDacuansni);
router.post('/add_d_acuannonsni', checkAuth, usulanController.AddDAcuannonsni);
router.post('/add_d_bibliografi', checkAuth, usulanController.AddDbibliografi);
router.post('/add_d_lpk', checkAuth, usulanController.AddDlpk);
router.post('/hapususulan', checkAuth, usulanController.HapusUsulan);
router.post('/hapusdmanfaat', checkAuth, usulanController.HapusDManfaat);
router.post('/hapusdkepentingan', checkAuth, usulanController.HapusPikahKepentingan);
router.post('/hapusdkonseptor', checkAuth, usulanController.HapusDKonseptor);
router.post('/hapusdkonseptorutama', checkAuth, usulanController.HapusDKonseptorutama);
router.post('/hapusdkregulasi', checkAuth, usulanController.HapusDRegulasi);
router.post('/ajukan', checkAuth, usulanController.Ajukan);
router.post('/getusulanbyid', checkAuth, usulanController.GetUsulanById);
router.post('/getperbaikanbyid', checkAuth, usulanController.GetPerbaikanById);
router.post('/getperumusansni', checkAuth, usulanController.GetPerumusanSNI);
router.post('/getperumusansl', checkAuth, usulanController.GetPerumusanSL);


module.exports = router;
