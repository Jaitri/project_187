// script.js
AFRAME.registerComponent('rotate-on-click', {
    init: function () {
        var el = this.el;
        el.addEventListener('click', function () {
            el.object3D.rotation.y += Math.PI / 2;
        });
    }
});
