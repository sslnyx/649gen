const data: { [key: number]: number } = {
  1: 480,
  2: 498,
  3: 520,
  4: 525,
  5: 498,
  6: 498,
  7: 532,
  8: 511,
  9: 528,
  10: 518,
  11: 493,
  12: 515,
  13: 496,
  14: 469,
  15: 499,
  16: 512,
  17: 511,
  18: 485,
  19: 514,
  20: 536,
  21: 531,
  22: 512,
  23: 532,
  24: 509,
  25: 489,
  26: 510,
  27: 538,
  28: 490,
  29: 508,
  30: 505,
  31: 568,
  32: 510,
  33: 511,
  34: 559,
  35: 506,
  36: 529,
  37: 512,
  38: 541,
  39: 495,
  40: 555,
  41: 529,
  42: 518,
  43: 548,
  44: 526,
  45: 575,
  46: 539,
  47: 544,
  48: 520,
  49: 521,
};

function calculatePercentage(obj: { [key: number]: number }) {
  const totalSum = Object.values(obj).reduce((acc, value) => acc + value, 0);
  const percentageData: { [key: number]: number } = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const percentage = (obj[key] / totalSum) * 100;
      percentageData[key] = percentage;
    }
  }
  return percentageData;
}

export default calculatePercentage(data);
