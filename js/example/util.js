define(function (require, exports) {
    exports.getText = function (key) {
        switch (key) {
            case 'index':
                return '这是 index 页面';
            case 'test':
                return '这是 test 页面';
        }
    };
});