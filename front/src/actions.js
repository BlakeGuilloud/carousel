import axios from 'axios';

export function uploadFile(file) {
  console.log('woo woo woo', file);
  return axios.post('https://zzssmp01xj.execute-api.us-east-1.amazonaws.com/dev/uploadFile', file)
    .then((response) => {
      console.log('response', response);
    });
}