// 1. 将css样式内容放入数
const styles = [
    'color: white',
    'background: green',
    'font-size: 19px',
    'border: 1px solid #fff',
    'text-shadow: 2px 2px black',
    'padding: 5px',
].join(';');

console.log(`%c${__APP_INFO__.projectName}, 当前版本: V${__APP_INFO__.pkg.version}`, styles);

console.log(
    `%c打包时间: ${__APP_INFO__.lastBuildTime}`,
    styles,
);
console.log(__GLOBAL_ENV_, __GLOBAL_ENV_);

console.log(`%c构建Node.js版本: ${__GLOBAL_ENV_.CI_RUNTIME_VERSION || '-'}`, styles);

console.log(`%c流水线执行人: ${__GLOBAL_ENV_.EXECUTOR_NAME || '-'}`, styles);

console.log(`%c分支: ${__GLOBAL_ENV_.CI_COMMIT_REF_NAME || '-'}`, styles);
console.log(
    `%cCOMMIT信息: ${__GLOBAL_ENV_.CI_COMMIT_TITLE || '-'} ${
        __GLOBAL_ENV_.CI_COMMIT_ID || '-'
    }`,
    styles,
);

console.log(
    `%c本次流水线执行记录:`,
    styles,
    `${__GLOBAL_ENV_.ENGINE_PIPELINE_PORTAL_URL}/pipelines/${__GLOBAL_ENV_.ENGINE_PIPELINE_ID}/current`,
);
