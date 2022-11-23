"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function Aliflow(options) {
    const env = process.env;
    const pkg = fs_1.default.readFileSync(process.cwd() + '/package.json', 'utf-8');
    const str = fs_1.default.readFileSync(path_1.default.join(__dirname, '../src/external.js'), 'utf-8');
    const { name, version } = JSON.parse(pkg);
    const __APP_INFO__ = {
        projectName: options.projectName || name,
        pkg: { name, version },
        lastBuildTime: (0, dayjs_1.default)().format('YYYY-MM-DD HH:mm:ss'),
    };
    let HtmlStr = `const __GLOBAL_ENV_ = ${JSON.stringify(env)};
    const __APP_INFO__ = ${JSON.stringify(__APP_INFO__)};`;
    HtmlStr += str;
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
                    attrs: { defer: true },
                    children: HtmlStr,
                    injectTo: 'body'
                },
            ];
        }
    };
}
exports.default = Aliflow;
//# sourceMappingURL=index.js.map