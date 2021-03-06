define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Provides the utilities for getting element's metrics.
     */
    var ElementRect = (function () {
        /**
         * Initializes a new instance of the `ElementRect` class with the specified `element`.
         */
        function ElementRect(element) {
            this.element = element;
            this.width = this.boundingRect.width;
            this.height = this.boundingRect.height;
            this.size = Math.max(this.width, this.height);
        }
        Object.defineProperty(ElementRect.prototype, "center", {
            /**
             * Returns the center coordinates of the current element.
             */
            get: function () {
                return {
                    x: this.width / 2,
                    y: this.height / 2
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ElementRect.prototype, "boundingRect", {
            /**
             * Returns the size of the current element and its position relative to the viewport.
             */
            get: function () {
                return this.element.getBoundingClientRect();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Calculates euclidean distance between two points.
         * @param point1 - Start point
         * @param point2 - End point
         * @returns Distance between two points.
         */
        ElementRect.euclideanDistance = function (point1, point2) {
            return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
        };
        /**
         * Calculates the distance between given point and farthest corner of the current element.
         * @param The point object containing x and y coordinates.
         * @returns Distance from a point to the container's farthest corner.
         */
        ElementRect.prototype.distanceToFarthestCorner = function (_a) {
            var _b = _a.x, x = _b === void 0 ? 0 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c;
            return Math.max(ElementRect.euclideanDistance({ x: x, y: y }, { x: 0, y: 0 }), ElementRect.euclideanDistance({ x: x, y: y }, { x: this.width, y: 0 }), ElementRect.euclideanDistance({ x: x, y: y }, { x: 0, y: this.height }), ElementRect.euclideanDistance({ x: x, y: y }, { x: this.width, y: this.height }));
        };
        /**
         * Determines if the specified point is contained within this element.
         * @param {(Event|Object)} ev - The object containing coordinates of the point.
         * @param {Number} ev.x - The `x` coordinate of the point.
         * @param {Number} ev.y - The `y` coordinate of the point.
         * @param {Number} ev.clientX - The `x` coordinate of the point.
         * @param {Number} ev.clientY - The `y` coordinate of the point.
         * @returns {Boolean} Returns `true` if the `x` and `y` coordinates of point is a point inside this element's rectangle, otherwise `false`.
         */
        ElementRect.prototype.contains = function (ev) {
            var l = this.boundingRect.left, t = this.boundingRect.top, w = this.boundingRect.width, h = this.boundingRect.height, _x = ev.x || ev.clientX || 0, _y = ev.y || ev.clientY || 0;
            return _x >= l && _x <= l + w && _y >= t && _y <= t + h;
        };
        return ElementRect;
    }());
    exports.ElementRect = ElementRect;
});
