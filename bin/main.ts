import * as yargs from 'yargs';
import JsonFix from '..';

(async () => {
    const argv = yargs
        .usage('Usage: $0 [-w] [paths...]')
        .option('write', {
            alias: 'w',
            describe: 'overwrite a file instead of outputting to stdout',
            default: false,
        })
        .option('minify', {
            describe: 'disable pretty print',
            default: false,
        })
        .option('indent', {
            alias: 'i',
            describe: 'indent of JSON output',
            default: 2,
        }).argv as any;

    try {
        await new JsonFix(argv).run(argv._);
    } catch (e) {
        console.error('Error:', e.message);
    }
})();
