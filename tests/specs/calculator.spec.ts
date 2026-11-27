import { expect, test } from '@playwright/test';

export function sum(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}

export function multiply(x: number, y: number): number {
    return x * y;
}

export function remainder(x: number, y: number): number {
    if (y === 0) {
        throw new RangeError('Cannot divide by zero.');
    }

    return x % y;
}


export function divide(x: number, y: number): number {
    if (y === 0) {
        throw new RangeError('Cannot divide by zero.');
    }

    return x / y;
}

test('calculator operations', () => {
    const x = 10;
    const y = 2;
    const results = {
        sum: sum(x, y),
        subtraction: subtract(x, y),
        multiplication: multiply(x, y),
        division: divide(x, y),
    };

    console.log(`Sum: ${results.sum}`);
    console.log(`Subtraction: ${results.subtraction}`);
    console.log(`Multiplication: ${results.multiplication}`);
    console.log(`Division: ${results.division}`);

    expect(results).toEqual({
        sum: 12,
        subtraction: 8,
        multiplication: 20,
        division: 5,
    });
});

