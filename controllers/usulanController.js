/* eslint-disable global-require */
/* eslint-disable import/order */
const usulanSchema = require('../models/usulanModel');
const konseptorUtamaSchema = require('../models/konseptorutamaModel');
const dkonseptorSchema = require('../models/dkonseptorModel');
const dkepentinganSchema = require('../models/dkepentinganModel');
const dmanfaatSchema = require('../models/dmanfaatModel');
const dregulasiSchema = require('../models/dregulasiModel');
const dperbaikanSchema = require('../models/dperbaikanModel');
const dacuansniSchema = require('../models/dacuansniModel');
const dacuannonsniSchema = require('../models/dacuannonsniModel');
const dbibliografiSchema = require('../models/dbibliografiModel');
const dlpkSchema = require('../models/dlpkModel');


const fs = require('fs');
//  Get Token
exports.JumlahUsulan = async (req, res) => {
  try {
    usulanSchema.sequelize.query('select count(*) as jumlah from msusulan where status = 100', { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.JumlahSNI = async (req, res) => {
  try {
    usulanSchema.sequelize.query('select count(*) as jumlah from msusulan where status = 102 and proses_perumusan = 89', { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.JumlahSL = async (req, res) => {
  try {
    usulanSchema.sequelize.query('select count(*) as jumlah from msusulan where status = 102 and proses_perumusan = 95', { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.JumlahPNPS = async (req, res) => {
  try {
    usulanSchema.sequelize.query('select count(*) as jumlah from msusulan where status = 102 and proses_perumusan = 80', { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetrumusanSNI = async (req, res) => {
  try {
    usulanSchema.sequelize.query('SELECT `msusulan`.*,(SELECT nama_rev FROM'
    + ' msrev WHERE id = `msusulan`.`JENIS_PERUMUSAN`) as jenis_perumusan, (SELECT '
    + ' nama_rev FROM msrev WHERE id = `msusulan`.`komite_teknis`) as komtek FROM `msusulan` '
    + ' WHERE `JENIS_STANDAR` = 48 AND `PROSES_PERUMUSAN` != 0', { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetrumusanSL = async (req, res) => {
  try {
    usulanSchema.sequelize.query('SELECT `msusulan`.*,(SELECT nama_rev FROM'
      + ' msrev WHERE id = `msusulan`.`JENIS_PERUMUSAN`) as jenis_perumusan, (SELECT '
      + ' nama_rev FROM msrev WHERE id = `msusulan`.`komite_teknis`) as komtek FROM `msusulan` '
      + ' WHERE `JENIS_STANDAR` = 49 AND `PROSES_PERUMUSAN` != 0', { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetSNI = async (req, res) => {
  try {
    usulanSchema.sequelize.query('SELECT `msusulan`.*, (SELECT nama_rev '
       + ' FROM msrev WHERE id = `msusulan`.`komite_teknis`) as komtek FROM `msusulan`'
    + ' WHERE `JENIS_STANDAR` = 48 AND `PROSES_PERUMUSAN` = 89', { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetSL = async (req, res) => {
  try {
    usulanSchema.sequelize.query('SELECT `msusulan`.*, (SELECT nama_rev '
         + ' FROM msrev WHERE id = `msusulan`.`komite_teknis`) as komtek FROM `msusulan`'
      + ' WHERE `JENIS_STANDAR` = 49 AND `PROSES_PERUMUSAN` = 95', { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetUsulanDraft = async (req, res) => {
  try {
    usulanSchema.sequelize.query('SELECT `msusulan`.*,(SELECT nama_rev FROM '
        + ' msrev WHERE id = `msusulan`.`JENIS_PERUMUSAN`) as jenis_perumusan, (SELECT '
        + ' nama_rev FROM msrev WHERE id = `msusulan`.`KOMITE_TEKNIS`) as komtek, (SELECT '
        + ' nama_rev FROM msrev WHERE id = `msusulan`.`PROSES_USULAN`) as tahapan FROM `msusulan` '
       + ' WHERE `STATUS` = 99', { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetUsulanDraftByUser = async (req, res) => {
  try {
    usulanSchema.sequelize.query(`${'SELECT `msusulan`.*,(SELECT nama_rev FROM msrev WHERE '
        + ' id = `msusulan`.`JENIS_PERUMUSAN`) as jenis_perumusan, '
+ ' (SELECT nama_rev FROM msrev WHERE id = `msusulan`.`KOMITE_TEKNIS`) as komtek, '
+ '(SELECT nama_rev FROM msrev WHERE id = `msusulan`.`PROSES_USULAN`) as tahapan FROM `msusulan`'
+ 'WHERE `STATUS` = 99 AND `USER_INPUT`= "'}${req.body.id}"`, { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetUsulanById = async (req, res) => {
  try {
    usulanSchema.sequelize.query(`select * from msusulan where id = ${req.body.id}`, { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetPerbaikanById = async (req, res) => {
  try {
    usulanSchema.sequelize.query(`select * from d_perbaikan where id_usulan = ${req.body.id}`, { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetPerumusanSNI = async (req, res) => {
  try {
    usulanSchema.sequelize.query('select * from msrev where golongan = 22', { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetPerumusanSL = async (req, res) => {
  try {
    usulanSchema.sequelize.query('select * from msrev where golongan = 23', { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetUsulanDiajukan = async (req, res) => {
  try {
    usulanSchema.sequelize.query('SELECT `msusulan`.*,(SELECT nama_rev FROM msrev WHERE '
            + ' id = `msusulan`.`JENIS_PERUMUSAN`) as jenis_perumusan, '
    + ' (SELECT nama_rev FROM msrev WHERE id = `msusulan`.`KOMITE_TEKNIS`) as komtek, '
    + '(SELECT nama_rev FROM msrev WHERE id = `msusulan`.`PROSES_USULAN`) as tahapan FROM `msusulan`'
    + 'WHERE `STATUS` = 100', { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetUsulanDiajukanByUser = async (req, res) => {
  try {
    usulanSchema.sequelize.query(`${'SELECT `msusulan`.*,(SELECT nama_rev FROM msrev WHERE '
          + ' id = `msusulan`.`JENIS_PERUMUSAN`) as jenis_perumusan, '
  + ' (SELECT nama_rev FROM msrev WHERE id = `msusulan`.`KOMITE_TEKNIS`) as komtek, '
  + '(SELECT nama_rev FROM msrev WHERE id = `msusulan`.`PROSES_USULAN`) as tahapan FROM `msusulan`'
  + 'WHERE `STATUS` = 100 AND `USER_INPUT`= "'}${req.body.id}"`, { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetUsulanDiterima = async (req, res) => {
  try {
    usulanSchema.sequelize.query('SELECT `msusulan`.*,(SELECT nama_rev FROM msrev WHERE '
              + ' id = `msusulan`.`JENIS_PERUMUSAN`) as jenis_perumusan, '
      + ' (SELECT nama_rev FROM msrev WHERE id = `msusulan`.`KOMITE_TEKNIS`) as komtek, '
      + '(SELECT nama_rev FROM msrev WHERE id = `msusulan`.`PROSES_USULAN`) as tahapan FROM `msusulan`'
      + 'WHERE `STATUS` = 102', { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetUsulanDiterimaByUser = async (req, res) => {
  try {
    usulanSchema.sequelize.query(`${'SELECT `msusulan`.*,(SELECT nama_rev FROM msrev WHERE '
            + ' id = `msusulan`.`JENIS_PERUMUSAN`) as jenis_perumusan, '
    + ' (SELECT nama_rev FROM msrev WHERE id = `msusulan`.`KOMITE_TEKNIS`) as komtek, '
    + '(SELECT nama_rev FROM msrev WHERE id = `msusulan`.`PROSES_USULAN`) as tahapan FROM `msusulan`'
    + 'WHERE `STATUS` = 102 AND `USER_INPUT`= "'}${req.body.id}"`, { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetUsulanDitolak = async (req, res) => {
  try {
    usulanSchema.sequelize.query('SELECT `msusulan`.*,(SELECT nama_rev FROM msrev WHERE '
              + ' id = `msusulan`.`JENIS_PERUMUSAN`) as jenis_perumusan, '
      + ' (SELECT nama_rev FROM msrev WHERE id = `msusulan`.`KOMITE_TEKNIS`) as komtek, '
      + '(SELECT nama_rev FROM msrev WHERE id = `msusulan`.`PROSES_USULAN`) as tahapan FROM `msusulan`'
      + 'WHERE `STATUS` = 101', { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetUsulanDitolakByUser = async (req, res) => {
  try {
    usulanSchema.sequelize.query(`${'SELECT `msusulan`.*,(SELECT nama_rev FROM msrev WHERE '
            + ' id = `msusulan`.`JENIS_PERUMUSAN`) as jenis_perumusan, '
    + ' (SELECT nama_rev FROM msrev WHERE id = `msusulan`.`KOMITE_TEKNIS`) as komtek, '
    + '(SELECT nama_rev FROM msrev WHERE id = `msusulan`.`PROSES_USULAN`) as tahapan FROM `msusulan`'
    + 'WHERE `STATUS` = 101 AND `USER_INPUT`= "'}${req.body.id}"`, { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetDetailUser = async (req, res) => {
  try {
    usulanSchema.sequelize.query(`select * from msuserstandar where id = "${req.body.id}"`, { type: usulanSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.AddUsulan = (req, res) => {
  const base64Data = req.body.dok_detail_penelitian_64;
  const base64Data2 = req.body.dok_org_pendukung_64;
  const base64Data3 = req.body.surat_pengajuan_64;
  const base64Data4 = req.body.outline_64;

  fs.writeFile(`./public/file/${req.body.dok_detail_penelitian}`, base64Data, 'base64', () => {
  });

  fs.writeFile(`./public/file/${req.body.dok_org_pendukung}`, base64Data2, 'base64', () => {
  });

  fs.writeFile(`./public/file/${req.body.surat_pengajuan}`, base64Data3, 'base64', () => {
  });

  fs.writeFile(`./public/file/${req.body.outline}`, base64Data4, 'base64', () => {
  });

  const payload = {
    jenis_standar: req.body.jenis_standar,
    komiter_teknis: req.body.komiter_teknis,
    judul: req.body.judul,
    ruang_lingkup: req.body.ruang_lingkup,
    detail_penelitian: req.body.detail_penelitian,
    dok_detail_penelitian: req.body.dok_detail_penelitian,
    tujuan_perumusan: req.body.tujuan_perumusan,
    org_pendukung: req.body.org_pendukung,
    dok_org_pendukung: req.body.dok_org_pendukung,
    surat_pengajuan: req.body.surat_pengajuan,
    outline: req.body.outline,
    evaluasi: req.body.evaluasi,
    status: req.body.status,
    proses_usulan: req.body.proses_usulan,
    user_input: req.body.user_input,
    tgl_input: req.body.tgl_input,
  };

  try {
    usulanSchema.create(payload)
      .then((result) => res.status(200).json({
        status: 200,
        messages: 'Usulan berhasil ditambahkan',
        id: result.id,
      }));
  } catch (e) {
    res.status(400).json({
      status: 'ERROR',
      messages: e,
      data: {},
    });
  }
};

exports.AddKonseptor = async (req, res) => {
  const payload = {
    id_usulan: req.body.id_usulan,
    nama: req.body.nama,
    alamat: req.body.alamat,
    email: req.body.email,
    telepon: req.body.telepon,
  };

  try {
    konseptorUtamaSchema.create(payload)
      .then((result) => res.status(200).json({
        status: 200,
        messages: 'Konseptor Utama berhasil ditambahkan',
        id: result.id,
      }));
  } catch (e) {
    res.status(400).json({
      status: 'ERROR',
      messages: e,
      data: {},
    });
  }
};

exports.AddDKonseptor = async (req, res) => {
  const payload = {
    id_usulan: req.body.id_usulan,
    nama: req.body.nama,
    instantsi: req.body.instantsi,
  };

  try {
    dkonseptorSchema.create(payload)
      .then(() => res.status(200).json({
        status: 200,
        messages: 'Konseptor berhasil ditambahkan',
      }));
  } catch (e) {
    res.status(400).json({
      status: 'ERROR',
      messages: e,
      data: {},
    });
  }
};

exports.AddDKepentingan = async (req, res) => {
  const payload = {
    id_usulan: req.body.id_usulan,
    nama: req.body.nama,
  };

  try {
    dkepentinganSchema.create(payload)
      .then(() => res.status(200).json({
        status: 200,
        messages: 'Kepentingan berhasil ditambahkan',
      }));
  } catch (e) {
    res.status(400).json({
      status: 'ERROR',
      messages: e,
      data: {},
    });
  }
};

exports.AddDManfaat = async (req, res) => {
  const payload = {
    id_usulan: req.body.id_usulan,
    isi: req.body.isi,
  };

  try {
    dmanfaatSchema.create(payload)
      .then(() => res.status(200).json({
        status: 200,
        messages: 'Manfaat berhasil ditambahkan',
      }));
  } catch (e) {
    res.status(400).json({
      status: 'ERROR',
      messages: e,
      data: {},
    });
  }
};

exports.AddDRegulasi = async (req, res) => {
  const payload = {
    id_usulan: req.body.id_usulan,
    nama: req.body.nama,
  };

  try {
    dregulasiSchema.create(payload)
      .then(() => res.status(200).json({
        status: 200,
        messages: 'Regulasi berhasil ditambahkan',
      }));
  } catch (e) {
    res.status(400).json({
      status: 'ERROR',
      messages: e,
      data: {},
    });
  }
};

exports.AddPerbaikan = async (req, res) => {
  const payload = {
    id_usulan: req.body.id_usulan,
  };
  try {
    dperbaikanSchema.create(payload)
      .then(() => res.status(200).json({
        status: 200,
        messages: 'Perbaikan berhasil ditambahkan',
      }));
  } catch (e) {
    res.status(400).json({
      status: 'ERROR',
      messages: e,
      data: {},
    });
  }
};

exports.AddDacuansni = async (req, res) => {
  const payload = {
    id_usulan: req.body.id_usulan,
    nama: req.body.nama,
  };

  try {
    dacuansniSchema.create(payload)
      .then(() => res.status(200).json({
        status: 200,
        messages: 'Perbaikan berhasil ditambahkan',
      }));
  } catch (e) {
    res.status(400).json({
      status: 'ERROR',
      messages: e,
      data: {},
    });
  }
};

exports.AddDlpk = async (req, res) => {
  const payload = {
    id_usulan: req.body.id_usulan,
    nama: req.body.nama,
  };

  try {
    dlpkSchema.create(payload)
      .then(() => res.status(200).json({
        status: 200,
        messages: 'Perbaikan berhasil ditambahkan',
      }));
  } catch (e) {
    res.status(400).json({
      status: 'ERROR',
      messages: e,
      data: {},
    });
  }
};
exports.AddDAcuannonsni = async (req, res) => {
  const payload = {
    id_usulan: req.body.id_usulan,
    nama: req.body.nama,
  };

  try {
    dacuannonsniSchema.create(payload)
      .then(() => res.status(200).json({
        status: 200,
        messages: 'Perbaikan berhasil ditambahkan',
      }));
  } catch (e) {
    res.status(400).json({
      status: 'ERROR',
      messages: e,
      data: {},
    });
  }
};

exports.AddDbibliografi = async (req, res) => {
  const payload = {
    id_usulan: req.body.id_usulan,
    nama: req.body.nama,
  };

  try {
    dbibliografiSchema.create(payload)
      .then(() => res.status(200).json({
        status: 200,
        messages: 'Bibliografi berhasil ditambahkan',
      }));
  } catch (e) {
    res.status(400).json({
      status: 'ERROR',
      messages: e,
      data: {},
    });
  }
};

exports.GetProsesPerumusan = async (req, res) => {
  try {
    usulanSchema.sequelize.query(`
      SELECT msusulan.*,(SELECT nama_rev FROM msrev WHERE id = msusulan.jenis_perumusan) as jenis_perumusan,
        (SELECT nama_rev FROM msrev WHERE id = msusulan.komite_teknis) as komtek,
        (SELECT nama_rev FROM msrev WHERE id = msusulan.PROSES_PERUMUSAN) as tahapan 
      FROM msusulan
      WHERE proses_perumusan = "${req.body.proses_perumusan}"
    `, { type: usulanSchema.sequelize.QueryTypes.SELECT }).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetProsesPerumusanByUser = async (req, res) => {
  try {
    usulanSchema.sequelize.query(`
      SELECT msusulan.*,(SELECT nama_rev FROM msrev WHERE id = msusulan.jenis_perumusan) as jenis_perumusan,
        (SELECT nama_rev FROM msrev WHERE id = msusulan.komite_teknis) as komtek,
        (SELECT nama_rev FROM msrev WHERE id = msusulan.PROSES_PERUMUSAN) as tahapan 
      FROM msusulan
      WHERE proses_perumusan =  "${req.body.proses_perumusan}" AND user_input = "${req.body.user_input}"
    `, { type: usulanSchema.sequelize.QueryTypes.SELECT }).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.GetDetail = async (req, res) => {
  try {
    usulanSchema.sequelize.query(`
    SELECT msusulan.*,
      (SELECT nama_rev FROM msrev WHERE id = msusulan.jenis_perumusan) as jenis_perumusan,
      (SELECT nama_rev FROM msrev WHERE id = msusulan.jalur_perumusan) as jalur_perumusan,
      (SELECT nama_rev FROM msrev WHERE id = msusulan.komite_teknis) as komtek,
      (SELECT nama_rev FROM msrev WHERE id = msusulan.proses_perumusan) as tahapan
    FROM msusulan 
    WHERE id = "${req.body.id}"
    `, { type: usulanSchema.sequelize.QueryTypes.SELECT }).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.HapusUsulan = async (req, res) => {
  try {
    usulanSchema.sequelize.query(`delete from msusulan where id = ${req.body.id}`)
      .then((response) => {
        res.status(200).json(response);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.HapusDKonseptorutama = async (req, res) => {
  try {
    dkonseptorSchema.sequelize.query(`delete from d_konseptor_utama where id_usulan = "${req.body.id}"`)
      .then((response) => {
        res.status(200).json(response);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.HapusDKonseptor = async (req, res) => {
  try {
    dkonseptorSchema.sequelize.query(`delete from d_konseptor where id_usulan = "${req.body.id}"`)
      .then((response) => {
        res.status(200).json(response);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.HapusPikahKepentingan = async (req, res) => {
  try {
    dkepentinganSchema.sequelize.query(`delete from d_pihak_berkepentingan where id_usulan = "${req.body.id}"`)
      .then((response) => {
        res.status(200).json(response);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.HapusDManfaat = async (req, res) => {
  try {
    dmanfaatSchema.sequelize.query(`delete from d_manfaat where id_usulan = "${req.body.id}"`)
      .then((response) => {
        res.status(200).json(response);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.HapusDRegulasi = async (req, res) => {
  try {
    dregulasiSchema.sequelize.query(`delete from d_regulasi where id_usulan = "${req.body.id}"`)
      .then((response) => {
        res.status(200).json(response);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.Ajukan = async (req, res) => {
  try {
    usulanSchema.update({
      status: 100,
    }, {
      where: {
        id: req.body.id,
      },
    })
      .then((response) => {
        res.status(200).json(response);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};
