/*
 * 日期格式转换
 */
function dateFormat(arg){

    try{
        if(typeof arg !== 'string' && typeof arg !== 'number' && !(arg instanceof Date))
            return '';
        if(typeof arg === 'string')
            arg = parseInt(arg);
        if(typeof arg === 'number') {
            arg = arg * Math.pow(10, 13-arg.toString().length); //补齐13位
            arg = new Date( arg ); }
        return [arg.getFullYear(), '年', arg.getMonth()+1, '月', arg.getDate(), '日'].join('');
    }catch(e){
        alert(e.message);
        return '';
    }
}