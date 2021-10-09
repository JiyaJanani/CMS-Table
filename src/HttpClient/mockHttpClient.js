import MockAdapter from "axios-mock-adapter";

const clients = require("./exampleData/clients.json");
const PageDataLimit = 3;

const mockStoreClient = (storeClient) => {
  const mock = new MockAdapter(storeClient);

  mock.onPost("/api/clients").reply(function (config) {
    const bodyData = JSON.parse(config.data).data;
    let result = clients;
    let page = bodyData && bodyData.page ? bodyData.page : 1;
    let resultCount = clients.length;

    if (bodyData && bodyData.searchKey) {
      result = clients.filter((e) => e.clientId === bodyData.searchKey);
      resultCount = result.length;
    }

    result = result.slice((page - 1) * PageDataLimit, page * PageDataLimit);

    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve([
          200,
          {
            list: result,
            page: Math.ceil(resultCount / PageDataLimit),
            total: clients.length,
          },
        ]);
      }, 0);
    });
  });

  return storeClient;
};

export default mockStoreClient;
