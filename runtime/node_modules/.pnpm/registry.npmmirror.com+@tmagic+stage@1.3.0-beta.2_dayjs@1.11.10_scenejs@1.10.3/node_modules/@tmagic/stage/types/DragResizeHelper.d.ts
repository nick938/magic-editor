import { OnDrag, OnDragGroup, OnDragGroupStart, OnDragStart, OnResize, OnResizeGroup, OnResizeGroupStart, OnResizeStart, OnRotate, OnRotateStart, OnScale, OnScaleStart } from 'moveable';
import MoveableHelper from 'moveable-helper';
import { Mode } from './const';
import { DragResizeHelperConfig, Rect, TargetElement } from './types';
/**
 * 拖拽/改变大小等操作发生时，moveable会抛出各种状态事件，DragResizeHelper负责响应这些事件，对目标节点target和拖拽节点targetShadow进行修改；
 * 其中目标节点是DragResizeHelper直接改的，targetShadow作为直接被操作的拖拽框，是调用moveableHelper改的；
 * 有个特殊情况是流式布局下，moveableHelper不支持，targetShadow也是DragResizeHelper直接改的
 */
export default class DragResizeHelper {
    /** 目标节点在蒙层上的占位节点，用于跟鼠标交互，避免鼠标事件直接作用到目标节点 */
    private targetShadow;
    /** 要操作的原始目标节点 */
    private target;
    /** 多选:目标节点组 */
    private targetList;
    /** 响应拖拽的状态事件，修改绝对定位布局下targetShadow的dom。
     * MoveableHelper里面的方法是成员属性，如果DragResizeHelper用继承的方式将无法通过super去调这些方法 */
    private moveableHelper;
    /** 流式布局下，目标节点的镜像节点 */
    private ghostEl;
    /** 用于记录节点被改变前的位置 */
    private frameSnapShot;
    /** 多选模式下的多个节点 */
    private framesSnapShot;
    /** 布局方式：流式布局、绝对定位、固定定位 */
    private mode;
    constructor(config: DragResizeHelperConfig);
    destroy(): void;
    destroyShadowEl(): void;
    getShadowEl(): TargetElement | undefined;
    updateShadowEl(el: HTMLElement): void;
    setMode(mode: Mode): void;
    /**
     * 改变大小事件开始
     * @param e 包含了拖拽节点的dom，moveableHelper会直接修改拖拽节点
     */
    onResizeStart(e: OnResizeStart): void;
    onResize(e: OnResize): void;
    onDragStart(e: OnDragStart): void;
    onDrag(e: OnDrag): void;
    onRotateStart(e: OnRotateStart): void;
    onRotate(e: OnRotate): void;
    onScaleStart(e: OnScaleStart): void;
    onScale(e: OnScale): void;
    getGhostEl(): HTMLElement | undefined;
    destroyGhostEl(): void;
    clear(): void;
    getFrame(el: HTMLElement | SVGElement): ReturnType<MoveableHelper['getFrame']>;
    getShadowEls(): TargetElement[];
    updateGroup(els: HTMLElement[]): void;
    setTargetList(targetList: HTMLElement[]): void;
    clearMultiSelectStatus(): void;
    onResizeGroupStart(e: OnResizeGroupStart): void;
    /**
     * 多选状态下通过拖拽边框改变大小，所有选中组件会一起改变大小
     */
    onResizeGroup(e: OnResizeGroup): void;
    onDragGroupStart(e: OnDragGroupStart): void;
    onDragGroup(e: OnDragGroup): void;
    getUpdatedElRect(el: HTMLElement, parentEl: HTMLElement | null, doc: Document): Rect;
    /**
     * 多选状态设置多个节点的快照
     */
    private setFramesSnapShot;
    /**
     * 流式布局把目标节点复制一份进行拖拽，在拖拽结束前不影响页面原布局样式
     */
    private generateGhostEl;
    private setGhostElChildrenId;
}
