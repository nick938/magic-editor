import Moveable from 'moveable';
import MoveableOptionsManager from './MoveableOptionsManager';
import { StageDragStatus, StageMultiDragResizeConfig } from './types';
export default class StageMultiDragResize extends MoveableOptionsManager {
    /** 画布容器 */
    container: HTMLElement;
    /** 多选:目标节点组 */
    targetList: HTMLElement[];
    /** Moveable多选拖拽类实例 */
    moveableForMulti?: Moveable;
    dragStatus: StageDragStatus;
    private dragResizeHelper;
    private getRenderDocument;
    private delayedMarkContainer;
    private markContainerEnd;
    constructor(config: StageMultiDragResizeConfig);
    /**
     * 多选
     * @param els
     */
    multiSelect(els: HTMLElement[]): void;
    canSelect(el: HTMLElement, selectedEl: HTMLElement | undefined): boolean;
    updateMoveable(eleList?: HTMLElement[]): void;
    /**
     * 清除多选状态
     */
    clearSelectStatus(): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 拖拽完成后将更新的位置信息暴露给上层业务方，业务方可以接收事件进行保存
     * @param isResize 是否进行大小缩放
     */
    private update;
}
