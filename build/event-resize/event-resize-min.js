YUI.add("event-resize",function(e){var b=e.Env.evt.dom_wrappers,d=e.config.win,c="event:"+e.stamp(d)+"resizenative",a;e.Event.define("windowresize",{on:(e.UA.gecko&&e.UA.gecko<1.91)?function(h,f,g){e.Event._attach("resize",function(i){g.fire(i);});}:function(i,g,h){var f=e.config.windowResizeDelay||100;g._handle=e.Event._attach(["resize",function(j){if(g._timer){g._timer.cancel();}g._timer=e.later(f,e,function(){h.fire(new e.DOMEventFacade(j,d,b[c]));});}],{facade:false});},detach:function(g,f){if(f._timer){f._timer.cancel();}f._handle.detach();}});},"@VERSION@",{requires:["event-synthetic"]});