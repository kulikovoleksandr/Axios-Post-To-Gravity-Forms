const username = ""; //ck_............
const password = ""; //cs_............
const auth = Buffer.from(username + ":" + password).toString("base64");
var config = {
  method: "post",
  url: "https://woocommerce.local/wp-json/gf/v2/forms/3/submissions",
  headers: {
    Authorization: `Basic ${auth}`,
  },
  data: {
    input_1: "test3",
    input_2_1: "First Choice",
    input_2_2: "Second Choice",
    input_2_3: "",
  },
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
