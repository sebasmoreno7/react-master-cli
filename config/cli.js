import inquirer from 'inquirer';
import fs from 'fs';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

const { NAME } = process.env;
const meta = [
    {
        name: 'Cool project',
        objective: 'create cool stuff',
        modules: false,
    },
    {
        name: '222 project',
        objective: 'creat2222e cool stuff',
        modules: false,
    },
    {
        name: 'Cool project',
        objective: 'create cool stuff',
        modules: false,
    },
    {
        name: 'Cool project',
        objective: 'create cool stuff',
        modules: false,
    },
    {
        name: 'Cool project',
        objective: 'create cool stuff',
        modules: false,
    },
    {
        name: 'Cool project',
        objective: 'create cool stuff',
        modules: false,
    },
    {
        name: 'Cool project',
        objective: 'create cool stuff',
        modules: false,
    },
];

const messages = [
    `Have an awesome class`,
    `Enjoy your class`,
    `Have fun learning today`,
    `Great day to React ⚛️`,
    `Beatiful weather to stay inside`,
    `In the sky: a bird?, an airplane? No, only bugs`,
    `JARVIS, music for programming please.`,
    `C-3PO, translate master's JSX please`
];

const emojis = [
    "🐇",
    "👨‍🏫",
    "⏳",
    "⚡️",
    "👑",
    "🖊️",
    "💣",
    "🔥",
    "💖",
    "✨",
    "⛄",
    "🌠",
    "⚔",
    "🐺",
    "🙌",
    "🤠",
    "👊",
    "🧞",
    "🎮",
    "🎈",
    "👨🏻‍💻",
    "👩🏻‍💻",
    "🕵",
    "😁",
    "📲",
    "💰",
];

const center = (string, length) => {
    const difference = Math.max(length - string.length, 0);
    console.log(difference);

    const spacer = " ".repeat(Math.floor(difference) / 2);
    console.log(spacer, spacer.length);

    return `${spacer}${string}${spacer}`;
};

const capitalize = (string) => string
    .trim()
    .toLowerCase()
    .replace(/./, l => l.toUpperCase());

const randomInRange = (...args) => {
    let min = 0;
    let max = args[0];

    if (args.length === 2) {
        ([min, max] = args);
    }

    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
};

export const cli = async () => {
    const nameQuestion = [
        {
            type: 'input',
            name: 'name',
            message: "What's your name?"
        }
    ];

    if (NAME) {
        const emoji = `${emojis[randomInRange(emojis.length - 1)]}  `;
        const phrase = chalk.cyan(messages[randomInRange(messages.length - 1)]);
        const name = capitalize(NAME);

        console.log(`
${emoji}    ${chalk.bold.blue(`Hey ${name}`)}    ${emoji}
${phrase}!
`
        );
    }


    const { package: index, name } = await inquirer.prompt(
        [
            ...(!NAME || NAME === "undefined" ? nameQuestion : []),
            {
                type: 'list',
                name: "package",
                message: "Which project do you want to run?",
                choices: [
                    ...(meta.map((_, index) => index + 1)),
                    new inquirer.Separator('>>>>'),

                ]
            },
        ]
    );

    const metaChoice = meta[index - 1];
    const folder = String(index).padStart(2, "0");

    fs.writeFileSync(
        './.env',
        `
NAME = ${ name || NAME || ""}
PROJECT = ${ folder}
MODULES = ${ Number(metaChoice.modules)}
`
    );

    console.log(
        `Starting project ${folder}: ${metaChoice.name}.
Let's ${metaChoice.objective}!`);

};