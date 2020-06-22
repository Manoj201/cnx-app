import { PartList } from "./stub/PartList.data";

const partApiService = {
  getPartList: async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(PartList);
      }, 1000);
    });
  },

  addEditPart: async (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({
          status: "200",
          part: {
            ...data,
          },
        });
      }, 1000);
    });
  },
};

export default partApiService;
