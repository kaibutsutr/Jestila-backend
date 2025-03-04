const axios = require("axios");

const Bearer =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NDA1ODlkYmQyNTA5NTgzMDVkNjc5MTFiMjBiMDY5ZSIsImp0aSI6IjE2YjhiZjc2YmYxMDgyNDA4YjBjNDRjMTI3ZGM1NTRhYmY0Y2E3ZGE2M2NjMDM1MDBlYTllY2E1NDgzZTI4NTk3MWRhYjhhYTJlMWQ5MjA4NWM4N2U4NzJlYjY0OWY4ZjBkNDMxZTNkNWVmNzNlN2EwOTkzZTQ1NGM0OWJkMGM2YThkMWJiYWE5YmZkNTIxYTYwYTRmZTZiMzM0NDQ0NWYiLCJpYXQiOjE3NDAzOTQ2NTYsIm5iZiI6MTc0MDM5NDY1NiwiZXhwIjoxODk4MTc5NDE2LCJzdWIiOiIxODc5MTAyIiwic2NvcGVzIjpbIm9yZGVyczpyZWFkIiwib3JkZXJzOndyaXRlIiwicHJvZHVjdHM6cmVhZCIsInByb2R1Y3RzOndyaXRlIiwic2hpcHBpbmdzOnJlYWQiLCJzaGlwcGluZ3M6d3JpdGUiLCJkaXNjb3VudHM6cmVhZCIsImRpc2NvdW50czp3cml0ZSIsInBheW91dHM6cmVhZCIsInJlZnVuZHM6cmVhZCIsInJlZnVuZHM6d3JpdGUiLCJzaG9wOnJlYWQiLCJzaG9wOndyaXRlIl19.Bij3RbmTc_2xcYEdsVEOCw3lcQHzSmsD4x1lBrBgM01jjvg6g2IwyvWuLaAtgQYOZW-9kd37Nwc_hXWwZBnVEwICLaiwsPq6mUwUBIfhNCApUXJRxpLgnNMI5miIZp0m324Cev_qLVhLZcdup65nwiNKp6q3F_ypcNxnxykzPw1riSgkBUl9DEVmhviWt7eG_jopmIskG3zt6fou1aIFtNgm6q0rGpO6mUsOSK8AwC73UM9upDWtBlO3xB_grH40ZQ9fLhy5EZpM1QwEuEMBiJtp2acuEXGl-Z3NjS3Q6xivuzLsMfShMz6ov1xaf0FODOx3LpuoBBvNwYsCvTsjqg";
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllproducts = (req, res) => {
  const options = {
    method: "GET",
    url: "https://api.shopier.com/v1/products?limit=10&page=1&sort=dateDesc",
    headers: {
      accept: "application/json",
      authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NDA1ODlkYmQyNTA5NTgzMDVkNjc5MTFiMjBiMDY5ZSIsImp0aSI6IjE2YjhiZjc2YmYxMDgyNDA4YjBjNDRjMTI3ZGM1NTRhYmY0Y2E3ZGE2M2NjMDM1MDBlYTllY2E1NDgzZTI4NTk3MWRhYjhhYTJlMWQ5MjA4NWM4N2U4NzJlYjY0OWY4ZjBkNDMxZTNkNWVmNzNlN2EwOTkzZTQ1NGM0OWJkMGM2YThkMWJiYWE5YmZkNTIxYTYwYTRmZTZiMzM0NDQ0NWYiLCJpYXQiOjE3NDAzOTQ2NTYsIm5iZiI6MTc0MDM5NDY1NiwiZXhwIjoxODk4MTc5NDE2LCJzdWIiOiIxODc5MTAyIiwic2NvcGVzIjpbIm9yZGVyczpyZWFkIiwib3JkZXJzOndyaXRlIiwicHJvZHVjdHM6cmVhZCIsInByb2R1Y3RzOndyaXRlIiwic2hpcHBpbmdzOnJlYWQiLCJzaGlwcGluZ3M6d3JpdGUiLCJkaXNjb3VudHM6cmVhZCIsImRpc2NvdW50czp3cml0ZSIsInBheW91dHM6cmVhZCIsInJlZnVuZHM6cmVhZCIsInJlZnVuZHM6d3JpdGUiLCJzaG9wOnJlYWQiLCJzaG9wOndyaXRlIl19.Bij3RbmTc_2xcYEdsVEOCw3lcQHzSmsD4x1lBrBgM01jjvg6g2IwyvWuLaAtgQYOZW-9kd37Nwc_hXWwZBnVEwICLaiwsPq6mUwUBIfhNCApUXJRxpLgnNMI5miIZp0m324Cev_qLVhLZcdup65nwiNKp6q3F_ypcNxnxykzPw1riSgkBUl9DEVmhviWt7eG_jopmIskG3zt6fou1aIFtNgm6q0rGpO6mUsOSK8AwC73UM9upDWtBlO3xB_grH40ZQ9fLhy5EZpM1QwEuEMBiJtp2acuEXGl-Z3NjS3Q6xivuzLsMfShMz6ov1xaf0FODOx3LpuoBBvNwYsCvTsjqg",
    },
  };

  axios
    .request(options)
    .then((response) => {
      const contentType = response.headers["content-type"];
      const data = response.data;
      res.status(200).json({ data }); //send json object with success true and people array
    })
    .catch((err) => console.error(err));

  //GET
};

module.exports = {
  getAllproducts,
}; // export and object with functions
