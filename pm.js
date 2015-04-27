KISSY.add(function(S,require,exports,module){
/*compiled by xtemplate#3.3.3*/
var ret = module.exports = function pm(undefined){
var t;
var t0;
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var tpl = this;
var root = tpl.root;
var buffer = tpl.buffer;
var scope = tpl.scope;
var runtime = tpl.runtime;
var name = tpl.name;
var pos = tpl.pos;
var data = scope.data;
var affix = scope.affix;
var nativeCommands = root.nativeCommands;
var utils = root.utils;
var callFnUtil = utils["callFn"];
var callCommandUtil = utils["callCommand"];
var rangeCommand = nativeCommands["range"];
var foreachCommand = nativeCommands["foreach"];
var forinCommand = nativeCommands["forin"];
var eachCommand = nativeCommands["each"];
var withCommand = nativeCommands["with"];
var ifCommand = nativeCommands["if"];
var setCommand = nativeCommands["set"];
var includeCommand = nativeCommands["include"];
var parseCommand = nativeCommands["parse"];
var extendCommand = nativeCommands["extend"];
var blockCommand = nativeCommands["block"];
var macroCommand = nativeCommands["macro"];
var debuggerCommand = nativeCommands["debugger"];


buffer.data += '<div class="pm-modal">\n\t<div class="pm-content">\n\t\t<h3>';
pos.line = 3;
var id0 = ((t=(affix.$pmTitle)) !== undefined ? t:((t = data.$pmTitle) !== undefined ? t :scope.resolveLooseUp(["$pmTitle"])));
buffer = buffer.write(id0);
buffer.data += '</h3>\n\t\t<div>\n\t\t\t';
pos.line = 5;
var id1 = ((t=(affix.$pmContent)) !== undefined ? t:((t = data.$pmContent) !== undefined ? t :scope.resolveLooseUp(["$pmContent"])));
buffer = buffer.write(id1);
buffer.data += '\n\t\t\t<button class="pm-close">Close me!</button>\n\t\t</div>\n\t</div>\n</div>';
return buffer;
};
ret.TPL_NAME = module.id || module.name;
});