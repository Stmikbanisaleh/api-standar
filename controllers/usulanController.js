const usulanSchema = require('../models/usulanModel');

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


exports.GetUsulanDiajukan = async (req, res) => {
  try {
    usulanSchema.sequelize.query('SELECT `msusulan`.*,(SELECT nama_rev FROM msrev WHERE '
            + ' id = `msusulan`.`JENIS_PERUMUSAN`) as jenis_perumusan, '
    + ' (SELECT nama_rev FROM msrev WHERE id = `msusulan`.`KOMITE_TEKNIS`) as komtek, '
    + '(SELECT nama_rev FROM msrev WHERE id = `msusulan`.`PROSES_USULAN`) as tahapan FROM `msusulan`'
    + 'WHERE `STATUS` = 99', { type: usulanSchema.sequelize.QueryTypes.SELECT })
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

exports.GetUsulanDiterima = async (req, res) => {
  try {
    usulanSchema.sequelize.query('SELECT `msusulan`.*,(SELECT nama_rev FROM msrev WHERE '
              + ' id = `msusulan`.`JENIS_PERUMUSAN`) as jenis_perumusan, '
      + ' (SELECT nama_rev FROM msrev WHERE id = `msusulan`.`KOMITE_TEKNIS`) as komtek, '
      + '(SELECT nama_rev FROM msrev WHERE id = `msusulan`.`PROSES_USULAN`) as tahapan FROM `msusulan`'
      + 'WHERE `STATUS` = 99', { type: usulanSchema.sequelize.QueryTypes.SELECT })
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

exports.GetUsulanDitolak = async (req, res) => {
  try {
    usulanSchema.sequelize.query('SELECT `msusulan`.*,(SELECT nama_rev FROM msrev WHERE '
              + ' id = `msusulan`.`JENIS_PERUMUSAN`) as jenis_perumusan, '
      + ' (SELECT nama_rev FROM msrev WHERE id = `msusulan`.`KOMITE_TEKNIS`) as komtek, '
      + '(SELECT nama_rev FROM msrev WHERE id = `msusulan`.`PROSES_USULAN`) as tahapan FROM `msusulan`'
      + 'WHERE `STATUS` = 99', { type: usulanSchema.sequelize.QueryTypes.SELECT })
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

exports.GetProsesPerumusanByUser = async (req, res) => {
  try {
    usulanSchema.sequelize.query(`
      SELECT msusulan.*,(SELECT nama_rev FROM msrev WHERE id = msusulan.jenis_perumusan) as jenis_perumusan,
        (SELECT nama_rev FROM msrev WHERE id = msusulan.komite_teknis) as komtek,
        (SELECT nama_rev FROM msrev WHERE id = msusulan.PROSES_PERUMUSAN) as tahapan 
      FROM msusulan
      WHERE proses_perumusan = "80" AND user_input = "${req.body.user_input}"
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

exports.GetProsesPerumusan = async (req, res) => {
  try {
    usulanSchema.sequelize.query(`
      SELECT msusulan.*,(SELECT nama_rev FROM msrev WHERE id = msusulan.jenis_perumusan) as jenis_perumusan,
        (SELECT nama_rev FROM msrev WHERE id = msusulan.komite_teknis) as komtek,
        (SELECT nama_rev FROM msrev WHERE id = msusulan.PROSES_PERUMUSAN) as tahapan 
      FROM msusulan
      WHERE proses_perumusan = "80"
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
