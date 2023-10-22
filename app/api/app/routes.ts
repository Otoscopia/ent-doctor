export const refresh = () => {
  console.log("refreshed");
};

type Filter = {
  id: number;
  name: string;
};

export const filter = (filter: Filter) => {
  console.log(filter);
};
