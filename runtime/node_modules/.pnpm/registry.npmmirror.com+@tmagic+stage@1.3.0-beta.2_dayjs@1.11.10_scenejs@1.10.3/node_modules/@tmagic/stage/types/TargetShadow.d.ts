import type { TargetElement as ShadowElement, TargetShadowConfig } from './types';
/**
 * 将选中的节点修正定位后，添加一个操作节点到蒙层上
 */
export default class TargetShadow {
    el?: ShadowElement;
    els: ShadowElement[];
    private idPrefix;
    private container;
    private scrollLeft;
    private scrollTop;
    private zIndex?;
    private updateDragEl?;
    constructor(config: TargetShadowConfig);
    update(target: ShadowElement): ShadowElement;
    updateGroup(targetGroup: ShadowElement[]): ShadowElement[];
    destroyEl(): void;
    destroyEls(): void;
    destroy(): void;
    private updateEl;
    private scrollHandler;
}
