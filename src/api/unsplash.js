import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 40566c484ca546b391ab504ad3bdf3a6b5c90eff2c6bf99e3c9ca740659e7ef9",
  },
});
