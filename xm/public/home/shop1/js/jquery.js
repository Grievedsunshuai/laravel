!function(t){function e(o){if(n[o])return n[o].exports;var s=n[o]={exports:{},id:o,loaded:!1};return t[o].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){n(2),document.querySelectorAll||(document.querySelectorAll=function(t){var e,n=document.createElement("style"),o=[];for(document.documentElement.firstChild.appendChild(n),document._qsa=[],n.styleSheet.cssText=t+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",window.scrollBy(0,0),n.parentNode.removeChild(n);document._qsa.length;)e=document._qsa.shift(),e.style.removeAttribute("x-qsa"),o.push(e);return document._qsa=null,o}),~function(t){function e(t){Zepto?t():e()}var n,o={propertyName:"data-stat-id",urlParam:"stat",needMap:!0,domain:".mi.com",live:!1},s={parentLoop:!1,sonLoop:!1,exposure:null,drawDataScript:"//c1.mifile.cn/f/i/15/stat/js/jquery.dataDraw.min.js",jquerySource:"//s01.mifile.cn/js/lib/jquery.min.js",re:{normalEnd:/\/(index.php|index.html|index.htm|index)$/,snapshotModalDate:/^(\/\d{10}\/)/,snapshotModalEnd:/.html$/},locationObj:{protocol:"http://",host:location.host,pathname:location.pathname}},i={isSnapshotModal:function(){return"file.stat.be.xiaomi.com"==location.host?!0:!1},hashSnapshotModal:function(){return s.locationObj.protocol+location.pathname.replace(s.re.snapshotModalDate,"").replace(s.re.snapshotModalEnd,"").replace(s.re.normalEnd,"/")},getPageHash:function(){var t=s.locationObj;t.pathname=t.pathname.replace(s.re.normalEnd,"/");var e=this.isSnapshotModal()?this.hashSnapshotModal():c(t,"");return xmstMd5("undefined"!=typeof _STAT_HASHNAME&&""!=_STAT_HASHNAME?_STAT_HASHNAME:e)},isOpenCanvas:function(){return n.needMap&&xmstTools.getLocationName(n.urlParam,"search")&&"true"==xmstTools.getLocationName(n.urlParam,"search")?!0:!1},appendStatModal:function(t){var e=xmstTools.trim(t.attr("href"))||"";if(this.isOpenCanvas()&&-1!=e.indexOf("/")&&(-1==e.indexOf("http")||-1!=e.indexOf(n.domain))){var o,i=(n.urlParam+"=true",{hashName:e.split("#"),searchName:e.split("?")});if(this.isSnapshotModal()){var r=i.searchName[0].replace("http://",""),a=location.pathname.replace(s.re.snapshotModalDate,"").replace(s.re.snapshotModalEnd,"");o=location.href.replace(a,r)}else o=i.hashName[1]?i.hashName[0]+"?"+n.urlParam+"=true#"+i.hashName[1]:i.searchName[1]?e+"&"+n.urlParam+"=true":e+"?"+n.urlParam+"=true";t.attr("href",o)}}},r=function(){xmstTools.loadScript(s.drawDataScript,function(e,n,o){t("body").linkSigntoDraw({pageID:i.getPageHash()})})},a=function(e,o,a){var d=t(e).hasClass("J_linksign-customize"),p=d?t(e).children():t(e).find("a"),u={page:i.getPageHash(),point:null},h=p.length-1,m=i.isOpenCanvas();o===a&&(s.parentLoop=!0),p.each(function(e,a){if("true"!=t(a).attr("data-stat-exclude")){var p=xmstTools.trim(t(a).attr("href"))||t(a).attr("data-stat-productid")||"",f=xmstTools.trim(t(a).text()),_=t(a).parent().parent().attr("class")||t(a).parent().parent().parent().attr("class")||"",g=o+""+e,v=t(a).attr("data-stat-aid"),w=t(a).attr("data-stat-pid"),y=t(a).attr("data-log_code")||"";p=-1!==p.indexOf(n.domain)?p.split("?")[0]:p;var L=p+f+_;L=d?L+g:L,u.point=w?v+"+"+w:xmstMd5(L);var S=t(a).attr("onclick")||"",x=l(c(u,"-"),p,y),T=x+S;t(a).attr(n.propertyName)||t(a).attr(n.propertyName,u.point).attr("onclick",T),i.appendStatModal(t(a)),s.parentLoop===!0&&e===h&&m&&(s.sonLoop=!0,r())}})},l=function(t,e,n){var o=xmstTools.stripscript("'trackEvent', '"+t+"', '"+e+"', 'pcpid', '"+n+"'");return"_msq.push(["+o+"]);"},c=function(t,e){var n=[];if("undefined"!=typeof t)for(var o in t){var s=t[o];s=null==s||""==s?"00":s,n.push(s)}return n.join(e)},d=function(){t.fn.linkSign=function(e){n=t.extend(o,e);var i=this.length-1;this.each(function(t,e){a(this,t,i)});var r=s.exposure;r?r.update():r=xmstSp({elements_selector:".exposure"})},t(function(){t("body,.J_linksign-customize").linkSign()})};t?d():/http(s)?:\/\/m\.mi\.com/i.test(location.href)?timer=window.setInterval(function(){e(function(){window.clearInterval(timer),t=Zepto,d()})},500):xmstTools.loadScript("//c1.mifile.cn/f/i/15/stat/js/zepto.1.1.6.js",function(){t=Zepto,d()})}(window.jQuery||window.Zepto)},function(module,exports){xmstSp=function(instanceSettings){function _init(){_isInitialized||(_defaultSettings={elements_selector:"img",container:window,threshold:300,throttle:300,skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_processed:null},_supportsAddEventListener=!!window.addEventListener,_supportsAttachEvent=!!window.attachEvent,_supportsClassList=!!document.body.classList,_isInitialized=!0)}function _addEventListener(t,e,n){return _supportsAddEventListener?void t.addEventListener(e,n):void(_supportsAttachEvent&&(t.attachEvent("on"+e,function(t){return function(){n.call(t,window.event)}}(t)),t=null))}function _removeEventListener(t,e,n){return _supportsAddEventListener?void t.removeEventListener(e,n):void(_supportsAttachEvent&&t.detachEvent("on"+e,n))}function _isInsideViewport(t,e,n){function o(){return window.innerWidth||p.documentElement.clientWidth||document.body.clientWidth}function s(){return window.innerHeight||p.documentElement.clientHeight||document.body.clientHeight}function i(t){return t.getBoundingClientRect().top+u-p.documentElement.clientTop}function r(t){return t.getBoundingClientRect().left+h-p.documentElement.clientLeft}function a(){var o;return o=e===window?s()+u:i(e)+e.offsetHeight,o<=i(t)-n}function l(){var s;return s=e===window?o()+window.pageXOffset:r(e)+o(),s<=r(t)-n}function c(){var o;return o=e===window?u:i(e),o>=i(t)+n+t.offsetHeight}function d(){var o;return o=e===window?h:r(e),o>=r(t)+n+t.offsetWidth}var p,u,h;return p=t.ownerDocument,u=window.pageYOffset||p.body.scrollTop,h=window.pageXOffset||p.body.scrollLeft,!(a()||c()||l()||d())}function _now(){var t=new Date;return t.getTime()}function _merge_objects(t,e){var n,o={};for(n in t)t.hasOwnProperty(n)&&(o[n]=t[n]);for(n in e)e.hasOwnProperty(n)&&(o[n]=e[n]);return o}function _convertToArray(t){try{return Array.prototype.slice.call(t)}catch(e){var n,o=[],s=t.length;for(n=0;s>n;n++)o.push(t[n]);return o}}function _bind(t,e){return function(){return t.apply(e,arguments)}}function LazyLoad(){_init(),this._settings=_merge_objects(_defaultSettings,instanceSettings),this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._handleScrollFn=_bind(this.handleScroll,this),_addEventListener(window,"resize",this._handleScrollFn),this.update()}var _defaultSettings,_supportsAddEventListener,_supportsAttachEvent,_supportsClassList,_isInitialized=!1,vars=[],msf=function(){this.p=[]};msf.prototype.push=function(t){return"function"==typeof t[0]?void t[0](t.slice(1)):void(("setDomainId"==t[0]||"setVars"==t[0])&&this[t[0]](t.slice(1)))},msf.prototype.setVars=function(t){vars[t[0]]=t[1]},msf.prototype.setDomainId=function(t){vars.domain_id=t[0]};var _msf=new msf;_msf.p=window._msq.p;var initMsq=function(){for(i=0;i<_msf.p.length;i++)_msf.push(_msf.p[i])};return initMsq(),LazyLoad.prototype._loopThroughElements=function(){var i,element,settings=this._settings,elements=this._elements,elementsLength=elements?elements.length:0,insideLogs=[],insideLogCodes=[],logValue="",logCodeValue="",processedIndexes=[];for(i=0;elementsLength>i;i++)element=elements[i],settings.skip_invisible&&null===element.offsetParent||_isInsideViewport(element,settings.container,settings.threshold)&&((logValue=element.getAttribute("data-log_code"))&&(insideLogs.push(logValue),(logCodeValue=element.getAttribute("onclick"))&&(logCodeValue=eval(logCodeValue.replace("_msq.push","")),5==logCodeValue.length&&insideLogCodes.push(logCodeValue[1]))),processedIndexes.push(i),element.wasProcessed=!0);for(insideLogs.length&&this._sendData(insideLogCodes.join(";"),encodeURIComponent(insideLogs.join(";")));processedIndexes.length>0;)elements.splice(processedIndexes.pop(),1),settings.callback_processed&&settings.callback_processed(elements.length);0===elementsLength&&this._stopScrollHandler()},LazyLoad.prototype._sendData=function(t,e){vars.pageid=xmstTools.getPcid();var n=xmstTools.getBaseParam(vars),o=xmstTools.getVars(vars),s=document.createElement("script");s.type="text/javascript",s.async=!0,s.src="//a.stat.xiaomi.com/js/mstr.js?"+n+o+"&type=sp&logs="+t+"&log_codes="+e;var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)},LazyLoad.prototype._purgeElements=function(){var t,e,n=this._elements,o=n.length,s=[];for(t=0;o>t;t++)e=n[t],e.wasProcessed&&s.push(t);for(;s.length>0;)n.splice(s.pop(),1)},LazyLoad.prototype._startScrollHandler=function(){this._isHandlingScroll||(this._isHandlingScroll=!0,_addEventListener(this._settings.container,"scroll",this._handleScrollFn))},LazyLoad.prototype._stopScrollHandler=function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,_removeEventListener(this._settings.container,"scroll",this._handleScrollFn))},LazyLoad.prototype.handleScroll=function(){var t,e,n;this._settings&&(e=_now(),n=this._settings.throttle,0!==n?(t=n-(e-this._previousLoopTime),0>=t||t>n?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=e,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(_bind(function(){this._previousLoopTime=_now(),this._loopTimeout=null,this._loopThroughElements()},this),t))):this._loopThroughElements())},LazyLoad.prototype.update=function(){this._elements=_convertToArray(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},LazyLoad.prototype.destroy=function(){_removeEventListener(window,"resize",this._handleScrollFn),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null},new LazyLoad}}]);