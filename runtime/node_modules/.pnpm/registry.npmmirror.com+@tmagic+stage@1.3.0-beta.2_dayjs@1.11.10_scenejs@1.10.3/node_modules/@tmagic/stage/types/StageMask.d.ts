import { Mode } from './const';
import Rule from './Rule';
/**
 * 蒙层
 * @description 用于拦截页面的点击动作，避免点击时触发组件自身动作；在编辑器中点击组件应当是选中组件；
 */
export default class StageMask extends Rule {
    content: HTMLDivElement;
    wrapper: HTMLDivElement;
    page: HTMLElement | null;
    scrollTop: number;
    scrollLeft: number;
    width: number;
    height: number;
    wrapperHeight: number;
    wrapperWidth: number;
    maxScrollTop: number;
    maxScrollLeft: number;
    private mode;
    private pageScrollParent;
    private intersectionObserver;
    private wrapperResizeObserver;
    constructor();
    setMode(mode: Mode): void;
    /**
     * 初始化视窗和蒙层监听，监听元素是否在视窗区域、监听mask蒙层所在的wrapper大小变化
     * @description 初始化视窗和蒙层监听
     * @param page 页面Dom节点
     */
    observe(page: HTMLElement): void;
    /**
     * 处理页面大小变更，同步页面和mask大小
     * @param entries ResizeObserverEntry，获取页面最新大小
     */
    pageResize(entries: ResizeObserverEntry[]): void;
    /**
     * 监听一个组件是否在画布可视区域内
     * @param el 被选中的组件，可能是左侧目录树中选中的
     */
    observerIntersection(el: HTMLElement): void;
    /**
     * 挂载Dom节点
     * @param el 将蒙层挂载到该Dom节点上
     */
    mount(el: HTMLDivElement): void;
    setLayout(el: HTMLElement): void;
    scrollIntoView(el: Element): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 监听选中元素是否在画布可视区域内，如果目标元素不在可视区域内，通过滚动使该元素出现在可视区域
     */
    private initObserverIntersection;
    /**
     * 监听mask的容器大小变化
     */
    private initObserverWrapper;
    private scroll;
    private scrollTo;
    /**
     * 设置蒙层高度
     * @param height 高度
     */
    private setHeight;
    /**
     * 设置蒙层宽度
     * @param width 宽度
     */
    private setWidth;
    /**
     * 计算并设置最大滚动宽度
     */
    private setMaxScrollLeft;
    /**
     * 计算并设置最大滚动高度
     */
    private setMaxScrollTop;
    /**
     * 修复滚动距离
     * 由于滚动容器变化等因素，会导致当前滚动的距离不正确
     */
    private fixScrollValue;
    private mouseWheelHandler;
}
