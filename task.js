const text = "Wonderful Joyful Happiness Time Task Apple";
const matches = text.match(/\b[^aA\s]{6,}\b/g);
console.log(matches);