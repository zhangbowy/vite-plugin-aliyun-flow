import type { Plugin } from 'vite';
import dayjs from 'dayjs';
import path from 'path';
import fs from 'fs';

interface AliflowParam {
    projectName?: string
}

export default function Aliflow(options: AliflowParam): Plugin {
    const env = process.env

    const pkg: any = fs.readFileSync(process.cwd() + '/package.json', 'utf-8')

    const str: any = fs.readFileSync(path.join(__dirname, '../src/external.js'), 'utf-8')

    const { name, version } = JSON.parse(pkg);

    const __APP_INFO__ = {
        projectName: options.projectName || name,
        pkg: { name, version },
        lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    };

    let HtmlStr = `const __GLOBAL_ENV_ = ${JSON.stringify(env)};
    const __APP_INFO__ = ${JSON.stringify(__APP_INFO__)};`

    HtmlStr += str
    return {
        name: 'vite-plugin-aliuyun-flow',
        apply: 'build',
        config: () => ({
            define: {
                __APP_INFO__: JSON.stringify(__APP_INFO__),
                __GLOBAL_ENV_: env,
            },
          }),
          transformIndexHtml(html) {
            return [
                {
                    tag: 'script',
                    attrs: {  defer: true },
                    children: HtmlStr,
                    injectTo: 'body'
                  },
            ]
          }

    };
}