const Joi = require('joi');
const { gettoken } = require('../libraries/login');
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
    res.status(500).json({
      error,
      status: 402,
      data: 'required',
    });
  }
};

exports.userRegister = async (req, res) => {
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
        const data = await register(req.body.email, req.body.password);
        res.status(200).json(data);
      } catch (error) {
        res.status(400).json({
          status: 500,
          messages: error,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      error,
      status: 402,
      data: 'required',
    });
  }
};
