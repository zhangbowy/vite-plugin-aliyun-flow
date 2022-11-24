import type { Plugin, HtmlTagDescriptor } from 'vite';
import dayjs from 'dayjs';
import path from 'path';
import fs from 'fs';

interface AliflowOptions {
    projectName?: string
}

export default function Aliflow(options: AliflowOptions): Plugin {
    const env = process.env

    const pkg: any = fs.readFileSync(process.cwd() + '/package.json', 'utf-8')

    const extStr: string = fs.readFileSync(path.join(__dirname, '../src/external.js'), 'utf-8')

    const { name, version } = JSON.parse(pkg);

    const __APP_INFO__ = {
        projectName: options.projectName || name,
        pkg: { name, version },
        lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    };

    const HtmlStr: string = `const __GLOBAL_ENV_ = ${JSON.stringify(env)};
    const __APP_INFO__ = ${JSON.stringify(__APP_INFO__)};
    \n ${extStr}`

    return {
        name: 'vite-plugin-aliuyun-flow',
        apply: 'build',
        config: () => ({
            define: {
                __APP_INFO__: JSON.stringify(__APP_INFO__),
                __GLOBAL_ENV_: env,
            },
        }),
        transformIndexHtml(html): HtmlTagDescriptor[] {
            return [
                {
                    tag: 'script',
                    attrs: { defer: true },
                    children: HtmlStr,
                    injectTo: 'body'
                },
            ]
        }

    };
}