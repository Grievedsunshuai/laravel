!function(t){function e(i){if(a[i])return a[i].exports;var r=a[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var a={};return e.m=t,e.c=a,e.p="",e(0)}([function(t,e,a){t.exports=a(1)},function(t,e,a){a(2),MI.buySuccess=function(){function t(t){t&&($("#J_buyRecommend").miRecommend({type:1,gid:t,title:"买购物车中商品的人还买了",page:"CartSuc",isBuy:!0,useCarousel:!1}),$("#J_historyRecommend").miRecommend({type:0,gid:t,title:"根据浏览向您推荐",page:"CartSuc",isBuy:!0,useCarousel:!1}),$("#J_userHistory").miRecommend({type:4,title:"您还看了",page:"CartSuc",isBuy:!1,useCarousel:!0}))}function e(e){if(e){var i=MI.GLOBAL_CONFIG.cartSite+"/cart/getItem.php?gid="+e;$.ajax({url:i,dataType:"jsonp",jsonp:"jsonpcallback",timeout:1e4,error:function(){},success:function(e){e&&1===e.code&&e.data?(a(e.data),t(e.data.commodity_id)):location.href=MI.GLOBAL_CONFIG.staticSite+"/cart/"}})}}function a(t){var e=doT.template($("#J_goodsTemplate").html());("fail"===r.insurance||"fail"===r.relation)&&($(".J_actBox").addClass("act_notic"),$(".J_notic").removeClass("hide")),t.service="success"===r.insurance||"success"===r.relation?!0:!1;var a=e(t);$("#J_goodsBox").html(a)}function i(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),a=window.location.search.substr(1).match(e);return null!==a?decodeURIComponent(a[2]):null}var r=this,o=function(){r.insurance=i("insurance"),r.relation=i("relation");var t=i("gid");t?e(t):location.href=MI.GLOBAL_CONFIG.staticSite+"/cart/",$(".J_goBack").on("click",function(){i("pid")?location.href=MI.GLOBAL_CONFIG.itemSite+("product"===i("protype")?"/product/":"/")+i("pid")+".html":history.go(-1)})};return{init:o}}(),$(document).ready(function(){MI.buySuccess.init()})},function(t,e,a){a(3),a(4),function(t){"use strict";function e(e){var r,n=c[o.type],s=t.cookie("userId")||"",l=t.cookie("mstuid");switch(o.type){case 2:var d="?u="+l+"&i="+s+"&a="+o.cid;r=o.apiHost[2]+d,"Home"===o.page&&(r+="&c=AA");break;case 4:r=o.apiHost[o.type]+"?mstuid="+l+"&mid="+s;break;default:r=o.apiHost[o.type]+"?a="+o.cid+"&cid="+o.gid}t.ajax({dataType:"JSONP",url:r,jsonpCallback:n,cache:!0,params:o,success:function(r){if(r.type=this.params.type,r.title=this.params.title,r.global=MI.GLOBAL_CONFIG,r.iHost=this.params.iHost,r.isBuy=this.params.isBuy,r.useCarousel=this.params.useCarousel,r.r.length<this.params.showMin)return!1;var o=t(e),n=a(5);o.addClass("container").html(n(r));var s=o.find("ul[data-carousel-list=true]").eq(0);i(o,s,this.params),null!==this.params.callback&&"function"==typeof this.params.callback&&this.params.callback()}})}function i(e,a,i){3!==i.type&&i.useCarousel&&a.carousel({containerSelector:e,controls:i.carouselControl,pager:i.carouselPage,itemHeight:320}),i.isBuy&&(t(".J_xm-recommend-list").hover(function(){t(this).find(".J_xm-recommend-btn").show()},function(){t(this).find(".J_xm-recommend-btn").hide()}),t(".J_xm-recommend-btn").off(".addcart").on("click.addcart",function(){function e(){r.removeClass("xm-recommend-notice-active"),setTimeout(function(){a.removeClass("disabled"),r.empty()},500)}var a=t(this),r=a.parent().siblings(".xm-recommend-notice");return a.hasClass("disabled")?!1:(MI.addShopCart(a.attr("data-stat-gid"),function(t){1===t.code?"Cart"!==i.page?(r.addClass("xm-recommend-notice-active").empty().append('<a class="btn btn-block btn-green btn-notice" href="javascript: void(0);">成功加入购物车</a>'),r.find(".btn-notice").one("click",e),setTimeout(function(){e()},1e3)):location.href=MI.GLOBAL_CONFIG.staticSite+"/cart/":alert(t.msg)}),!1)}));var o=s.page[i.page],n=s.api[i.type];r(e,o,n),t.isFunction(t("body").linkSign)&&e.linkSign({live:!0});var c=e.attr("id"),l="re-"+o+"."+n;t.force_appear(),e.appear(),e.one("appear",function(){"undefined"!=typeof _msq&&_msq.push(["trackPanelShow",c,l])})}function r(e,a,i){var r=e.find("a");t.each(r,function(e,r){var o,n=t(r).attr("data-stat-index"),s=l(t(r).attr("data-stat-text")),c=t(r).attr("data-stat-method"),d=t(r).attr("data-stat-addcart");o=d?"stat_"+a+d+"."+i+"_"+n+"_"+c:"stat_"+a+"."+i+"_"+n+"_"+c,t(r).attr({"data-stat-pid":o,"data-stat-aid":s})})}var o,n={cid:2,type:1,gid:"1152300005",title:"",showMin:5,apiHost:["//rec.www.mi.com/alsoview/get","//rec.www.mi.com/alsobuy/get","//rec.www.mi.com/guesslike/get","//rec.www.mi.com/cartbuy/get","//rec.www.mi.com/viewlist/get"],page:"Cart",iHost:"//i1.mifile.cn/a1/",isBuy:!1,useCarousel:!0,carouselControl:!1,carouselPage:!0,callback:null},s={page:{Home:"首页",ItemTail:"单品页底部",ComAll:"全部评论页",ComSuc:"评论成功页",AskAll:"全部提问页",AskDetail:"提问详情页",List:"列表页",Cart:"购物车",CartSuc:"加购成功",Saleoff:"下架页",Search:"搜索页",ErrorTip:"报错页"},api:["看了还看","买了还买","猜你喜欢","购物车推荐","您还看了"]},c=["recommend_alsoview","recommend_alsobuy","recommend_guesslike","recommend_cart","recommend_history"],l=function(t){try{return t.replace(/\s/g,"")}catch(e){return t}};t.fn.miRecommend=function(a){o=t.extend(n,a),e(this)}}(jQuery)},function(t,e){!function(t){function e(e){function a(){return 0>=x?!1:(b&&clearInterval(b),void(b=setTimeout(function(){var t=y===x-1?0:y+1;i(t),a()},f.pause)))}function i(t){return y===t?!1:(C.css({marginLeft:-g*h*t,transition:"margin-left "+f.speed/1e3+"s "+f.easing}),f.controls&&(0===t?d.addClass("control-disabled"):d.removeClass("control-disabled"),t===x-1?u.addClass("control-disabled"):u.removeClass("control-disabled")),f.pager&&m.find("li").eq(t).addClass("pager-active").siblings().removeClass("pager-active"),void(y=t))}function r(){for(var e='<ul class="xm-pagers">',a=0,r=x;r>a;a+=1)e+='<li class="pager'+(0===a?" pager-active":"")+'"><span class="dot">'+(a+1)+"</span></li>";e+="</ul>",m.html(e),m.find("li").off(".carousel").on("click.carousel",function(){t(this).addClass("pager-active").siblings().removeClass("pager-active"),i(m.find("li").index(t(this)))})}function o(){h=f.itemPerSlide||Math.ceil(s.width()/g),x=Math.ceil(c.length/h),1>=x||(i(0),f.pager&&r(),f.auto&&(a(),f.controls&&l.find(".control").off(".carousel").on({"mouseenter.carousel":function(){b&&clearTimeout(b)},"mouseleave.carousel":function(){a()}}),f.pager&&m.find(".pager").off(".carousel").on({"mouseenter.carousel":function(){b&&clearTimeout(b)},"mouseleave.carousel":function(){a()}})))}var n,s,c,l,d,u,m,p,f,h,g,v,x,C=t(this),b=0,y=-1;return p={itemSelector:"> li",itemWidth:null,itemHeight:null,itemPerSlide:null,containerSelector:null,controlsSelector:null,pagersSelector:null,speed:500,easing:"ease",auto:!1,pause:5e3,controls:!0,controlsClass:"xm-controls-line-small",pager:!1,onLoad:t.noop},f=t.extend({},p,e),c=C.find(f.itemSelector),f.itemPerSlide&&c.length<=f.itemPerSlide?this:(g=f.itemWidth||c.outerWidth(!0),v=f.itemHeight||c.outerHeight(),n=f.containerSelector?C.closest(f.containerSelector):C.parent(),n.addClass("xm-carousel-container"),s=C.wrap('<div class="xm-carousel-wrapper"></div>').closest(".xm-carousel-wrapper").css({height:v,overflow:"hidden"}),C.css("width",g*c.length),f.controls&&(l=t('<div class="xm-controls '+f.controlsClass+' xm-carousel-controls"><a class="control control-prev iconfont" href="javascript: void(0);">&#xe628;</a><a class="control control-next iconfont" href="javascript: void(0);">&#xe623;</a></div>'),f.controlsSelector?n.find(f.controlsSelector).append(l):l.insertAfter(s),d=l.find(".control-prev"),u=l.find(".control-next"),d.on("click",function(e){e.preventDefault(),t(this).hasClass("control-disabled")||i(y-1)}),u.on("click",function(e){e.preventDefault(),t(this).hasClass("control-disabled")||i(y+1)})),f.pager&&(m=t('<div class="xm-pagers-wrapper"></div>'),f.pagersSelector?n.find(f.pagersSelector).append(m):m.insertAfter(s)),o(),f.onLoad(C),void t(window).on("resize",o))}t.fn.carousel=function(t){return this.each(function(){e.call(this,t)}),this}}(jQuery)},function(t,e){!function(t){function e(){o=!1;for(var e=0,r=i.length;r>e;e++){var n=t(i[e]).filter(function(){return t(this).is(":appeared")});if(n.trigger("appear",[n]),a){var s=a.not(n);s.trigger("disappear",[s])}a=n}}var a,i=[],r=!1,o=!1,n={interval:250,force_process:!1},s=t(window);t.expr[":"].appeared=function(e){var a=t(e);if(!a.is(":visible"))return!1;var i=s.scrollLeft(),r=s.scrollTop(),o=a.offset(),n=o.left,c=o.top;return c+a.height()>=r&&c-(a.data("appear-top-offset")||0)<=r+s.height()&&n+a.width()>=i&&n-(a.data("appear-left-offset")||0)<=i+s.width()?!0:!1},t.fn.extend({appear:function(a){var s=t.extend({},n,a||{}),c=this.selector||this;if(!r){var l=function(){o||(o=!0,setTimeout(e,s.interval))};t(window).scroll(l).resize(l),r=!0}return s.force_process&&setTimeout(e,s.interval),i.push(c),t(c)}}),t.extend({force_appear:function(){return r?(e(),!0):!1}})}(jQuery)},function(t,e){t.exports=function(t){var e="";t.title&&(e+='<h2 class="xm-recommend-title"><span>'+t.title+"</span></h2>"),e+='<div class="xm-recommend"><ul class="',e+=3!==t.type&&t.useCarousel?"xm-carousel-col-5-list xm-carousel-list clearfix":"row",e+='" data-carousel-list="true">';var a=t.r;if(a)for(var i,r=-1,o=a.length-1;o>r;)i=a[r+=1],e+=' <li class="J_xm-recommend-list',3!==t.type&&t.useCarousel||(e+=" span4"),e+='"> ',i.ext&&i.ext.img&&i.ext.url?e+=' <a target="_blank" href="'+i.ext.url+'" data-stat-gid="'+i.g+'" data-stat-method="'+t.v+"_"+i.a+'" data-stat-index='+r+' data-stat-text="'+i.n+'"> <img src="'+i.ext.img+'" width="100%" height="300px" alt="'+i.n+'"> </a> ':(e+=' <dl> <dt> <a href="'+t.global.itemSite+"/"+i.c+'.html" data-stat-method="'+t.v+"_"+i.a+'" data-stat-index='+r+' data-stat-text="'+i.n+'" target="_blank"> <img src="'+t.iHost+i.i+'?width=140&height=140" srcset="'+t.iHost+i.i+'?width=280&height=280 2x" alt="'+i.n+'" /> </a> </dt> <dd class="xm-recommend-name"> <a href="'+t.global.itemSite+"/"+i.c+'.html" data-stat-method="'+t.v+"_"+i.a+'" data-stat-index='+r+' data-stat-text="'+i.n+'" target="_blank"> '+i.n+' </a> </dd> <dd class="xm-recommend-price">'+i.p+'元</dd> <dd class="xm-recommend-tips"> ',i.l&&4!==t.type&&(e+=" ",parseInt(i.l)>0&&(e+=" "+i.l+"人好评 "),e+=" "),e+=" ",t.isBuy===!0&&(e+=' <a href="'+t.global.cartSite+"/cart/add/"+i.g+'-0-1" data-stat-gid="'+i.g+'" data-stat-method="'+t.v+"_"+i.a+'" data-stat-index='+r+' data-stat-text="'+i.n+'" data-stat-addcart="加购" class="btn btn-small btn-line-primary J_xm-recommend-btn">加入购物车</a> '),e+=' </dd> <dd class="xm-recommend-notice"></dd> </dl> '),e+=" </li>";return e+="</ul></div>"}}]);