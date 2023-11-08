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

const dataDaily: { [key: number]: number } = {
  1: 76,
  2: 86,
  3: 73,
  4: 87,
  5: 72,
  6: 77,
  7: 87,
  8: 88,
  9: 66,
  10: 66,
  11: 69,
  12: 73,
  13: 84,
  14: 93,
  15: 76,
  16: 67,
  17: 93,
  18: 62,
  19: 72,
  20: 66,
  21: 70,
  22: 62,
  23: 71,
  24: 71,
  25: 74,
  26: 70,
  27: 78,
  28: 70,
  29: 67,
  30: 72,
  31: 74,
  32: 73,
  33: 72,
  34: 84,
  35: 77,
  36: 63,
  37: 78,
  38: 85,
  39: 81,
  40: 65,
  41: 73,
  42: 72,
  43: 86,
  44: 76,
  45: 75,
  46: 79,
  47: 81,
  48: 79,
  49: 67,
};

const grandNum: { [key: number]: number } = {
  1: 123,
  2: 126,
  3: 93,
  4: 93,
  5: 97,
  6: 101,
  7: 104,
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

const data649 = calculatePercentage(data);
const dataDaily5 = calculatePercentage(dataDaily);
const dataGrandNum = calculatePercentage(grandNum)

export { data649, dataDaily5, dataGrandNum };
