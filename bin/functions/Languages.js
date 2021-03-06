/* eslint-disable require-jsdoc */
import { copyRecur, execute, rename } from '../utils/helpers.js';
import spinner from '../utils/spinners.js';
import packages from '../static/packages.js';

class Languages {
    static async react(name, features) {
        spinner.install.start();
        execute(`npx create-react-app ${name}`, () => {
            execute(`cd ${name}/src && mkdir api components pages utils`);
            spinner.install.succeed('đĻ dependencies installed');

            spinner.features.start();
            features.map((feature) => {
                const tempPath = `../bin/templates/react/${feature}`;
                const currPath = `${process.cwd()}/${name}`;
                const hasRedux = features.includes('redux');

                if (feature == 'contextAPI' && hasRedux) return;
                execute(`cd ${name} && npm i ${packages.react[feature]}`, () =>
                    copyRecur(tempPath, currPath)
                );
            });
            spinner.features.succeed('âšī¸ features added');
        });
    }

    static node(name) {
        console.log('đ§ Under construction đ§');
    }
}

export default Languages;
