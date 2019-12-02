/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
const Joi = require('joi');
const { gettoken, getUserDetails } = require('../libraries/login');
const { register } = require('../libraries/register');


//  Get Token
exports.userToken = async (req, res) => {
  try {
    const validate = Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    });

    const payload = {
      email: req.body.email,
      password: req.body.password,
    };

    Joi.validate(validate, payload, async () => {
      try {
        const data = await gettoken(req.body.email, req.body.password);
        res.status(200).json(data);
      } catch (error) {
        res.status(400).json({
          status: 500,
          messages: error,
        });
      }
    });
  } catch (error) {
    res.status(402).json({
      error,
      status: 402,
      data: 'required',
    });
  }
};

// Register
exports.userRegister = async (req, res) => {
  try {
    const validate = Joi.object().keys({
      email: Joi.string().required(),
    });

    const payload = {
      email: req.body.email,
    };

    Joi.validate(payload, validate, async () => {
      const insert = {
        email,
        password,
        role_id,
        is_active,
        no_handphone,
        fax,
        nama_lengkap,
        no_ktp,
        alamat,
        id_provinsi,
        id_kota,

      } = req.body;
      try {
      // eslint-disable-next-line max-len
        const data = await register(insert);
        res.status(200).json({
          response: data,
        });
      } catch (error) {
        res.status(401).json({
          status: 401,
          messages: error,
        });
      }
    });
  } catch (error) {
    res.status(402).json({
      error,
      status: 402,
      data: 'required',
    });
  }
};

exports.getUserDetail = async (req, res) => {
  try {
    provinsiSchema.sequelize.query('select id_prov, nama from msprovinsi', { type: provinsiSchema.sequelize.QueryTypes.SELECT })
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

exports.userDetail = async (req, res) => {
  try {
    const validate = Joi.object().keys({
      id: Joi.string().required(),
    });

    const payload = {
      id: req.body.id,
    };

    Joi.validate(validate, payload, async () => {
      try {
        const data = await getUserDetails(req.body.id);
        res.status(200).json(data);
      } catch (error) {
        res.status(400).json({
          status: 500,
          messages: error,
        });
      }
    });
  } catch (error) {
    res.status(402).json({
      error,
      status: 402,
      data: 'required',
    });
  }
};
