export const getDetails = (list) => {
  // convert object to arry
  const arrayData = [];

  for (const [key, value] of Object.entries(list)) {
    if (value !== null) {
      arrayData.push(value);
    }
  }

  const total = arrayData.reduce((total, item) => {
    if (item != null) {
      return (total = total + item.price);
    }
  }, 0);

  return {productCount: arrayData?.length, totalCost: total};
};
