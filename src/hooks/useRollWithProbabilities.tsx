// import React from "react";
import { data649, dataDaily5, dataGrandNum } from "../types/freqNumbers";

const useRollWithProbabilities = (game: string) => {
  // console.log(game);
  const roll = (numToSelect: number) => {
    // Create an array of the numbers and their probabilities
    const numbersArray =
      game === "649" ? Object.entries(data649) : Object.entries(dataDaily5);

    const granNumberArray = Object.entries(dataGrandNum);

    const selectedNumbers: number[] = [];
    const remainingNumbers = numbersArray;

    let removedNumberProbability = 0;

    const getGrandNum = () => {
      let cumulativeProbability = 0;
      const randomValue = Math.random() * 100; // Generate a random value between 0 and 100
      for (let j = 0; j < granNumberArray.length; j++) {
        const [number, probability] = granNumberArray[j];
        cumulativeProbability += probability;
        if (randomValue <= cumulativeProbability) {
          return number;
        }
      }
    };

    const grandNum = getGrandNum();

    const selectNumber = (
      randomValue: number,
      remainingNumbers: [string, number][],
      cumulativeProbability: number
    ) => {
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
    };

    for (let i = 0; i < numToSelect; i++) {
      const randomValue = Math.random() * (100 - removedNumberProbability); // Generate a random value between 0 and 100
      let cumulativeProbability = 0;

      selectNumber(randomValue, remainingNumbers, cumulativeProbability);
    }

    selectedNumbers.sort((a, b) => a - b);

    if (game === "dailyGrand") selectedNumbers.push(Number(grandNum));

    // console.log(selectedNumbers)

    return selectedNumbers;
  };

  return roll;
};

export default useRollWithProbabilities;
