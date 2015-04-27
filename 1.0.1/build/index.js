KISSY.add('kg/pretty-modal/1.0.1/index',["node","event","kg/xtemplate/3.3.3/runtime","base","./pm","./pmbase.css","./pmeffects.css"],function(S ,require, exports, module) {
 var $ = require('node').all;
var Event = require('event');
var XTemplate = require("kg/xtemplate/3.3.3/runtime");
var Base = require('base');

var pmTpl = require('./pm');

var PrettyModal = Base.extend({
    initializer: function(){
        require('./pmbase.css')
        require('./pmeffects.css')
    },
    render: function() {
        var self = this;
        var $target = self.get('$target');
        var pmTitle = self.get('pmTitle');
        var pmContent = self.get('pmContent');
        $(document).delegate('click', '.pm-trigger', function(e) {
            var el = e.srcElement || e.target;
            // get parameters
            var effect = $(el).attr('data-effect');
            self.set('effect', effect);
            var $overlay = self.get('$overlay');
            var $pm = $(new XTemplate(self.get('pmTpl')).render({
                $pmTitle: pmTitle,
                $pmContent: pmContent
            }));
            self.set('$pm', $pm);
            $pm.addClass(effect);
            $target.append($pm);
            $target.append($overlay);
            // 让元素居中
            $pm.css({
                'margin-left': ($pm.width() - $(window).width())/2,
                'margin-top': ($pm.height() - $(window).height())/2,
            })
        });
        $(document).delegate('click', '.pm-close', function(e) {
            $pm = self.get('$pm');
            $overlay = self.get('$overlay');
            effect = self.get('effect');
            $pm.removeClass(effect);
            var cls = effect + '-next';
            $pm.addClass(cls);
            S.later(function() {$pm.remove();$overlay.remove()}, 1000);
        });
    }
},{
    ATTRS:{
        // 内部调用参数
        pmTpl: {
            value: pmTpl
        },
        //overlay的tpl
        $overlay: {
            value: '<div class="pm-overlay"></div>',
            getter: function(v) {
                return $(v);
            }
        },
        $pm: {
            value: ''
        },
        effect: {
            value: ''
        },

        // 外部传参

        // 传入钩子(如#J_Target)，用于放置Pretty modal的容器
        $target: {
            value: '',
            getter: function(v) {
                return $(v);
            }
        },
        //组件是否依赖html结构/
        htmlBase: {
            value: false
        },
        // 标题
        pmTitle: {

        },
        // 内容
        pmContent: {

        }
    }
});

module.exports = PrettyModal;




});