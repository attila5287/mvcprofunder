module.exports = {
  calculate_progress: (need, coll) => {
    return Math.floor((coll / need) * 100);
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt( amount ).toLocaleString();
    
  },
};
