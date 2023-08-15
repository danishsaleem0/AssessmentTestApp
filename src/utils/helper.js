import React from 'react';
import {getToken} from './localStoreUtil';

// //  api helper

// export const fetchApi = async ({
//   method,
//   endPoint,
//   token,
//   data,
//   params,
//   formData,
// }) => {
//   const headers = {};
//   if (token) headers.token = await getToken();

//   if (formData) {
//     headers['Content-Type'] = 'multipart/form-data';
//   } else {
//     headers['Content-Type'] = 'application/json';
//   }

//   var config = {
//     method,
//     url: `${BASE_URL}/data/${endPoint}`,
//     headers,
//     data: data ? data : undefined,
//   };
//   if (params) config.params = params;
//   return await axios(config);
// };
