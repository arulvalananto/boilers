import { listHandler, initHandler, createHandler } from './handlers.js';

export const initCommand = {
    command: ['init', 'i'],
    description: 'Initialize a new boilerplate project.',
    builder: (yargs) => {
        return yargs.option('name', {
            alias: 'n',
            describe: 'The name of your project.',
            type: 'string',
        });
    },
    handler: initHandler,
};

export const listCommand = {
    command: ['list', 'ls'],
    description: 'List all available boilerplate or template.',
    builder: () => {},
    handler: listHandler,
};

export const createCommand = {
    command: ['create', 'c'],
    description: 'Create a new template',
    builder: () => {},
    handler: createHandler,
};
