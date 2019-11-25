/* eslint-disable arrow-body-style */
/* eslint-disable object-shorthand */
const axios = require('axios');

// eslint-disable-next-line arrow-body-style
// eslint-disable-next-line camelcase
const register = async (insert) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${process.env.API_GATEWAY_URL}/usersv2/register`,
      method: 'POST',
      data: {
        email: insert.email,
        password: insert.password,
        nama_lengkap: insert.nama_lengkap,
        role_id: insert.role_id,
      },
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = { register };
