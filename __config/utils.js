export const capitalize = (string) =>
    string
        .trim()
        .toLowerCase()
        .split(' ')
        .map((word) => word.replace(/./, (l) => l.toUpperCase()))
        .join(' ');

export const randomInRange = (...args) => {
    let min = 0;
    let max = args[0];

    if (args.length === 2) {
        [min, max] = args;
    }

    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
};

export const center = (string, length) => {
    const difference = Math.max(length - string.length, 0);
    const spacer = ' '.repeat(Math.floor(difference / 2));

    return `${spacer}${string}${spacer}`;
};

const sendData = (data) =>
    new Promise((res) => {
        setTimeout(() => {
            res(data);
        }, randomInRange(500));
    });

const response = (data) =>
    new Promise((res, rej) => {
        if (Math.random() > 0.5) {
            rej(new Error('Internet connection failed, try again'));
        }

        setTimeout(() => {
            res({
                json: () => sendData(data),
            });
        }, randomInRange(2000));
    });

export const pseudoFetch = (data) => response(data);
