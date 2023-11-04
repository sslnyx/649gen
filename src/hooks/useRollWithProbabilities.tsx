import React from "react";
import data from "../types/freqNumbers";

const useRollWithProbabilities = () => {
  const roll = (numToSelect: number) => {
    // Create an array of the numbers and their probabilities
    const numbersArray = Object.entries(data);

    // Sort the numbers based on their probabilities in descending order
    //   numbersArray.sort((a, b) => b[1] - a[1]);

    const selectedNumbers = [];
    const remainingNumbers = numbersArray;

    let removedNumberProbability = 0;

    for (let i = 0; i < numToSelect; i++) {
      const randomValue = Math.random() * (100 - removedNumberProbability); // Generate a random value between 0 and 100
      let cumulativeProbability = 0;

      for (let j = 0; j < remainingNumbers.length; j++) {
        const [number, probability] = remainingNumbers[j];
        cumulativeProbability += probability;

        //   console.log(cumulativeProbability)

        if (randomValue <= cumulativeProbability) {
          selectedNumbers.push(parseInt(number));
          remainingNumbers.splice(j, 1); // Remove the selected number from the list
          removedNumberProbability += probability;
          break;
        }
      }
    }

    selectedNumbers.sort((a, b) => a - b);

    return selectedNumbers;
  };

  return roll;
};

export default useRollWithProbabilities;
