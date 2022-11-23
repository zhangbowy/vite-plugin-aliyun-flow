"use strict";
exports.__esModule = true;
function Aliflow() {
    var dependencies = pkg.dependencies, devDependencies = pkg.devDependencies, name = pkg.name, version = pkg.version;
    var __APP_INFO__ = {
        pkg: { dependencies: dependencies, devDependencies: devDependencies, name: name, version: version },
        lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
    };
    return {
        name: 'vite-plugin-aliuyun-flow',
        apply: 'serve',
        config: function (userConfig, env) {
            console.log(userConfig);
            console.log(env);
            // 可以做进一步的修改，会自动合入当前的配置
            // return
        }
    };
}
exports["default"] = Aliflow;
