import type { Plugin } from 'vite';
interface AliflowParam {
    projectName?: string;
}
export default function Aliflow(options: AliflowParam): Plugin;
export {};
