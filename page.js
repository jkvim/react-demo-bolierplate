function doSetItem() {
    var name = document.forms.editor.name.value;
    var data = document.forms.editor.data.value;
    localStorage.setItem(name, data);
    doShowAll();
}

function doGetItem() {
    var name = document.forms.editor.name.value;
    document.forms.editor.data.value = localStorage.getItem(name);
    doShowAll();
}

function doRemoveItem(event) {
    var key = event.target.getAttribute('data-key');
    localStorage.removeItem(key);
    doShowAll();
}

function doClear() {
    localStorage.clear();
    doShowAll();
}

function doShowAll() {
    var key = "",
        pairs = "<tr><th>商品名称</th><th>商品数量</th><th>操作</th></tr>\n";
    for (var i = localStorage.length - 1; i >= 0; i--) {
        key = localStorage.key(i);
        pairs = pairs + "<tr><td>"
            + key + "</td>\n<td>"
            + localStorage.getItem(key)
            + "</td>\n<td>"
            + "<input type='button' data-key='" + key
            + "' value='删除' onclick='doRemoveItem(event)'>"
            + "</td></tr>\n";
    }
    if (localStorage.length === 0) {
        pairs += "<tr><td colspan='3'>购物车内没有商品</td></tr>\n";
    }
    document.getElementById('pairs').innerHTML = pairs;
}