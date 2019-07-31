const { RESTDataSource } = require("apollo-datasource-rest");

class GoogleNewsAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = "https://www.googleapis.com";
  }

  async getNewsByContinent({ continent }) {
    return this.get(
      `/customsearch/v1?key=AIzaSyC7kBqeS0nh6Ejo_aFs_rI1PecfOwawclk&cx=004399504627790727017:nc67yhqclkg&q=${continent}`
    );
  }
}

module.exports = GoogleNewsAPI;
