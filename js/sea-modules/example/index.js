define("example/index",["./util"],function(e){var t=e("./util");alert(t.getText("index"))}),define("example/util",[],function(e,t){t.getText=function(e){switch(e){case"index":return"这是 index 页面";case"test":return"这是 test 页面"}}});