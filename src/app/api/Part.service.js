import { PartList } from "./stub/PartList.data";

const partApiService = {
  getPartList: async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(PartList);
      }, 1000);
    });
  },
};

export default partApiService;
