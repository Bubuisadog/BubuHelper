/**
 * 从接口取数据拼装成html，输出到页面
 * 依赖：jQuery | Resig's MicroTemplate
 * options.output 输出容器
 * options.showType 输出方式 {html, append, prepend等}
 */
var data2Html = function(options, callback) {
    if( !options.url ) return;
    $.ajax({
        url: options.url,
        type: options.type || 'get',
        dataType: options.dataType || 'json',
        success: function(data){
            if( data.errno != 0 ) return;
            var html = tmpl(tpl, data.data);
            options.output && $(options.output)[options.showType || 'html'](html);
        },
        error: function(){
            callback(e);
        }
    })
}