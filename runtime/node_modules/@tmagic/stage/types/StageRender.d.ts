/// <reference types="node" />
import { EventEmitter } from 'events';
import { Id } from '@tmagic/schema';
import type { Point, RemoveData, Runtime, RuntimeWindow, StageRenderConfig, UpdateData } from './types';
export default class StageRender extends EventEmitter {
    /** 组件的js、css执行的环境，直接渲染为当前window，iframe渲染则为iframe.contentWindow */
    contentWindow: RuntimeWindow | null;
    runtime: Runtime | null;
    iframe?: HTMLIFrameElement;
    private runtimeUrl?;
    private zoom;
    private customizedRender?;
    constructor({ runtimeUrl, zoom, customizedRender }: StageRenderConfig);
    getMagicApi: () => {
        onPageElUpdate: (el: HTMLElement) => boolean;
        onRuntimeReady: (runtime: Runtime) => void;
    };
    add(data: UpdateData): Promise<void>;
    remove(data: RemoveData): Promise<void>;
    update(data: UpdateData): Promise<void>;
    select(els: HTMLElement[]): Promise<void>;
    setZoom(zoom?: number): void;
    /**
     * 挂载Dom节点
     * @param el 将页面挂载到该Dom节点上
     */
    mount(el: HTMLDivElement): Promise<void>;
    getRuntime: () => Promise<Runtime>;
    getDocument(): Document | undefined;
    /**
     * 通过坐标获得坐标下所有HTML元素数组
     * @param point 坐标
     * @returns 坐标下方所有HTML元素数组，会包含父元素直至html，元素层叠时返回顺序是从上到下
     */
    getElementsFromPoint(point: Point): HTMLElement[];
    getTargetElement(idOrEl: Id | HTMLElement): HTMLElement;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 在runtime中对被选中的元素进行标记，部分组件有对选中态进行特殊显示的需求
     * @param el 被选中的元素
     */
    private flagSelectedEl;
    private loadHandler;
    private postTmagicRuntimeReady;
}
