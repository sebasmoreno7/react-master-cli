import chalk from 'chalk';
import dotenv from 'dotenv';
import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';
import globby from 'globby';

import { messages, emojis, filteredFolders } from './data';
import { randomInRange, capitalize, center } from './utils';

dotenv.config();

const { NAME } = process.env;

const createMetadata = async () => {
    const folders = (
        await globby('**', {
            gitignore: true,
            onlyDirectories: true,
            deep: 1,
        })
    ).filter(
        (folder) =>
            !filteredFolders.includes(folder) && !folder.startsWith('__')
    );

    const metadata = folders.map((folder) => {
        const folderMeta = JSON.parse(
            fs.readFileSync(path.join(folder, 'metadata.json'))
        );
        return {
            ...folderMeta,
            folder,
        };
    });

    return metadata;
};

const createOptions = (metadata) =>
    metadata.map(({ name, folder, modules, description }, index) => {
        const number = `${String(index + 1).padStart(2, '0')}`;

        return {
            name: `${number}. ${name}`,
            value: { folder, modules, number, name, description },
        };
    });

export const cli = async () => {
    const hasName = NAME && NAME !== 'undefined';

    if (hasName) {
        const emoji = `${emojis[randomInRange(emojis.length - 1)]}`;
        const parsedName = capitalize(NAME);
        const phrase = messages[randomInRange(messages.length - 1)];
        const hi = center(
            `Hey ${parsedName}`,
            phrase.length - emoji.length * 2
        );

        console.log(
            chalk.bold.blue(`
${emoji}${hi}${emoji}
${phrase}!
`)
        );
    }

    const nameQuestion = !hasName
        ? [
              {
                  type: 'input',
                  name: 'name',
                  message: "What's your name?",
              },
          ]
        : [];

    const answers = await inquirer.prompt([
        ...nameQuestion,
        {
            type: 'list',
            name: 'package',
            message: 'Which project do you want to run?',
            choices: [
                ...createOptions(await createMetadata()),
                new inquirer.Separator('>>>>'),
            ],
        },
    ]);

    const { folder, modules, number, name, description } = answers.package;

    fs.writeFileSync(
        './.env',
        `
NAME = ${answers.name || NAME || ''}
PROJECT = ${folder}
MODULES = ${Number(modules)}
`
    );

    console.log(
        `
Starting project ${number}: ${chalk.green(name)}.
Let's ${chalk.green(description)}!
`
    );
};
