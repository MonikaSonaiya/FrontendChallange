const NodePersist = require('node-persist');

const initPersist = async () => {
  await NodePersist.init();
};

const setAverageRating = async (rating) => {
  await NodePersist.setItem('averageRating', rating);
};

const getAverageRating = async () => {
  const avgRating = await NodePersist.getItem('averageRating');
  return avgRating || 0;
};

module.exports = { initPersist, setAverageRating, getAverageRating };