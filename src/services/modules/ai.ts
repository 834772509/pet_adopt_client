import request from "../request";

const AK = "jG7qNGiy5Gj92Q23ZiZgsQDf";
const SK = "3h5GESlrorUzSkjHmZFEnWk4NwPLMIjo";

/**
 * 使用 AK，SK 生成鉴权签名（Access Token）
 * @return string 鉴权签名信息（Access Token）
 */
function getAccessToken() {
  return new Promise((resolve, reject) => {
    request
      .post({
        url: `https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=${AK}&client_secret=${SK}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        resolve(res.access_token);
      })
      .catch((err) => reject(err));
  });
}

// AI识别动物品种
export function getAIAnimalBreeds(pictureBase64: string) {
  const bodyFormData = new FormData();

  return new Promise((resolve, reject) => {
    getAccessToken()
      .then((accessToken) => {
        bodyFormData.append("image", pictureBase64);

        request
          .post({
            url: `https://aip.baidubce.com/rest/2.0/image-classify/v1/animal?access_token=${accessToken}`,
            data: bodyFormData,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          })
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });
}
