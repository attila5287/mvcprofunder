module.exports = {
  calculate_progress: (need, coll) => {
    return Math.floor((coll / need) * 100);
  },
};
