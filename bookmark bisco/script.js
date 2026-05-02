let bookmarkList = document.getElementById('bookmark-list');

let testSave = JSON.stringify(bookmarkList)

let testLoad = JSON.parse(testSave)

console.log(testSave)
console.log(testLoad)