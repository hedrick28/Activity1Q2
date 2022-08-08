var array1: any[] = [1, 1, 1, 2, 2, 2, 3, 3, 3];

export const isbnTester = () => {
    if (array1.length != 10) {
        console.log("False")
    }
    else {
        let i = 0;
        let quotient = 0;
        while (i < array1.length - 2) {
            quotient += (array1[i] * (i + 1));
            i++;
        }
        if (array1[array1.length - 1] = "X") {
            quotient += (10 * 10)
        } else {
            quotient += (array1.length - 1 * 10)
        }
        if (quotient % 11 == 0) {
            console.log("True")
        } else {
            console.log("False")
        }
    }
}

isbnTester();