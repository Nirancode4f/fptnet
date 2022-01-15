Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

/**
 * Hook used to detect clicks outside a component (or an escape key press). onTriggered function is triggered on `click` or escape `keyup` event.
 *
 */
function useDetectClickOutside(_a) {
    var onTriggered = _a.onTriggered, disableClick = _a.disableClick, disableKeys = _a.disableKeys, allowAnyKey = _a.allowAnyKey, triggerKeys = _a.triggerKeys;
    var ref = react.useRef(null);
    var keyListener = react.useCallback(function (e) {
        if (allowAnyKey) {
            onTriggered(e);
        }
        else if (triggerKeys) {
            if (triggerKeys.includes(e.key)) {
                onTriggered(e);
            }
        }
        else {
            if (e.key === 'Escape') {
                onTriggered(e);
            }
        }
    }, []);
    var clickListener = react.useCallback(function (e) {
        if (ref && ref.current) {
            if (!ref.current.contains(e.target)) {
                onTriggered === null || onTriggered === void 0 ? void 0 : onTriggered(e);
            }
        }
    }, [ref.current]);
    react.useEffect(function () {
        !disableClick && document.addEventListener('click', clickListener);
        !disableKeys && document.addEventListener('keyup', keyListener);
        return function () {
            !disableClick && document.removeEventListener('click', clickListener);
            !disableKeys && document.removeEventListener('keyup', keyListener);
        };
    }, []);
    return ref;
}

exports.useDetectClickOutside = useDetectClickOutside;
//# sourceMappingURL=index.js.map
