/// <reference types="react" />
interface Props {
    onTriggered: (e: Event) => void;
    disableClick?: boolean;
    disableKeys?: boolean;
    allowAnyKey?: boolean;
    triggerKeys?: string[];
}
/**
 * Hook used to detect clicks outside a component (or an escape key press). onTriggered function is triggered on `click` or escape `keyup` event.
 *
 */
export declare function useDetectClickOutside({ onTriggered, disableClick, disableKeys, allowAnyKey, triggerKeys, }: Props): import("react").MutableRefObject<null>;
export {};
