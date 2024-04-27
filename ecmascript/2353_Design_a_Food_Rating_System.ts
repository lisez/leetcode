export class FoodRatings {
  #foods: string[];
  #cuisines: string[];
  #ratings: number[];

  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    this.#foods = foods;
    this.#cuisines = cuisines;
    this.#ratings = ratings;
  }

  changeRating(food: string, newRating: number): void {
    const idx = this.#foods.indexOf(food);
    this.#ratings[idx] = newRating;
  }

  highestRated(cuisine: string): string {
    let max = 0;
    let maxIdx = 0;
    for (let i = 0; i < this.#cuisines.length; i += 1) {
      if (this.#cuisines[i] !== cuisine || this.#ratings[i] < max) continue;
      if (this.#ratings[i] > max) {
        max = this.#ratings[i];
        maxIdx = i;
      } else if (this.#foods[maxIdx] > this.#foods[i]) {
        maxIdx = i;
      }
    }
    return this.#foods[maxIdx];
  }
}
