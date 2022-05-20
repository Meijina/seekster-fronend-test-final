import axios from "axios";
let url = "https://api-candidate-test.workforce-develop.com";
const token = "ENTER_YOUR_ACCESS_TOKEN";
class services {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL: url,
      timeout: 60 * 5 * 100,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Authorization" :"Bearer "+token
      },
      withCredentials: false,
    });
    this.api.interceptors.response.use(
      (response) => {
        return Promise.resolve(response);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  getApi(endpoint,params={}) {
    return new Promise((resolve, reject) => {
      this.api
        .get(endpoint,{ params: params })
        .then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }
  
  postApi(endpoint,params={}) {
    return new Promise((resolve, reject) => {
      this.api
        .post(endpoint,{ params: params })
        .then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }
  
}
const service = new services();
export { service, services };

// export const getApi = () => {
//   return new Promise((resolve, reject) => {
//     api.get("/v1/services").then(
//       (res) => {
//         resolve(res);
//       },
//       (err) => {
//         reject(err);
//       }
//     );
//   });
// };
//   const postApi = () => {};
