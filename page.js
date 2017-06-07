var storageObject = localStorage;

function changeStorage(event) {
    var target = event.target;
    if (storageObject === window.localStorage) {
        storageObject = window.sessionStorage;
        target.innerHTML = '当前存储介质为sessionStorage';
    } else {
        storageObject = window.localStorage;
        target.innerHTML = '当前存储介质为localStorage';
    }
    doShowAll();
}

function doSetItem() {
    var nameInput = document.querySelector('#name');
    var countInput = document.querySelector('#count');
    storageObject.setItem(nameInput.value, countInput.value);
    nameInput.value = '';
    countInput.value = '';
    doShowAll();
}

function doRemoveItem(event) {
    var key = event.target.getAttribute('data-key');
    storageObject.removeItem(key);
    doShowAll();
}

function doClear() {
    storageObject.clear();
    doShowAll();
}

function doShowAll() {
    document.querySelector('.listContent').innerHTML = createHTML(storageObject);
}

function createHTML(tempList) {
    if (tempList.length < 1) {
        return '<li><span>购物车内没有商品</span></li>';
    }
    var tempHTML = '';
    for (var itemName in tempList) {
        var value = storageObject.getItem(itemName);
        tempHTML = tempHTML +
            '<li>' +
            '<span>' + itemName + '</span>' +
            '<span>' + value + '</span>' +
            '<span>' +
            '<a onclick="doRemoveItem(event)" class="btn" data-key="' + itemName + '">删除</a>' +
            '</span>' +
            '</li>';
    }
    return tempHTML;
}