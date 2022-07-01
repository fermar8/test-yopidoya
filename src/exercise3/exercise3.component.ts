import { Injectable } from "@angular/core";
type averagePair = (input: Array<number>, target: number) => boolean;

@Injectable({
  providedIn: "root"
})

export class Exercise3Service {
averagePair: averagePair = (input, target) => {
        let start = 0;
        let end = input.length - 1;
    
        while (start < end) {
            let average = (input[start] + input[end] / 2);
            if (average === target) {
                return true;
            } else if (average > target) {
                end--;
            } else {
                start++;
            }
        }
        return false;
    };
};