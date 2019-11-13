import axios from 'axios';

const setAdminToken = adminToken => {
  if (adminToken) {
    axios.defaults.headers.common['x-auth-token'] = adminToken;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAdminToken;
