/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","jquery","ojs/ojcomponentcore","ojs/ojarraytabledatasource","ojs/ojcolor","ojs/ojlistview","ojs/ojeditablevalue"],function(a,g,c){(function(){a.ab("oj.ojColorPalette",c.oj.editableValue,{widgetEventPrefix:"oj",defaultElement:"\x3cinput\x3e",options:{palette:null,swatchSize:"lg",labelDisplay:null,layout:"grid",value:null,disabled:!1},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;var c=a.index,e=null;switch(a.subId){case "oj-palette-entry":a=
this.oe.find(".oj-listview-item"),a.length&&c<a.length&&(e=a[c])}return e},getSubIdByNode:function(a){var d=c(a);a=null;var e=-1,f=null,g;d.is("li")&&d.hasClass("oj-listview-item-element")&&(a="oj-palette-entry",g=d.attr("id"),d=this.oe.find(".oj-listview-item"),c.each(d,function(a,b){if(c(b).attr("id")===g)return e=a,!1}));a&&(f={subId:a},0<=e&&(f.index=e));return f},add:function(b){var c=null,e;b instanceof a.o?c={color:b}:"object"===typeof b&&(e=b.color,e instanceof a.o&&(c=b));c&&(this.rP("The swatch add is being animated in the palette (id\x3d"+
this.element.attr("id")+")."),c.id=this.Qda(),this.gm||(this.gm=[]),this.gm.push({Sf:"a",WR:c}),this.ZB.add(c),this.k2())},remove:function(b){var c=null,e;e=typeof b;"number"===e?0<=b&&b<this.hn.length?c=this.hn[b].id:a.C.error("JET Color Palette (id\x3d'"+this.element.attr("id")+"'): Invalid index for remove ("+b+")"):"object"===e&&(b=b instanceof a.o?b:b.color,c=this.wBa(b));c&&(b={id:c},this.rP("The removed swatch is being animated in the palette (id\x3d"+this.element.attr("id")+")."),this.gm||
(this.gm=[]),this.gm.push({Sf:"r",WR:b}),this.ZB.remove(b),this.k2())},whenReady:function(){var a=this;return new Promise(function(c){a.oe.ojListView("whenReady").then(function(){c(!0)})})},_destroy:function(){this.y0();this.oe&&(this.gm=[],this.oe.ojListView("destroy"));this.ZB=null;this.w7.remove();this.Pg.removeClass("oj-colorpalette");this.wx();this._super()},_ComponentCreate:function(){this._super();this.FGa()},Qg:function(){this._super();var b=this.VK();b?(b=b.attr("id"))?this.oe.attr("aria-labelledby",
b):a.C.warn("JET Color Palette: The label for this component needs an id in order to be accessible"):(b=this.element.attr("aria-label"))&&this.oe.attr("aria-label",b)},_setOption:function(a,c,e){switch(a){case "value":this.S0(c);break;case "palette":this.mMa(c);break;case "swatchSize":this.nMa(c);break;case "layout":this.lMa(c);break;case "labelDisplay":this.kMa(c);break;case "disabled":this.TH(c,!0)}this._super(a,c,e)},UIa:function(a,c){"selection"===c.option&&this.zLa(a,c)},k2:function(){if(!this.vU){var b=
this;this.vU=a.Context.getContext(this.oe[0]).Ne();this.vU.whenReady().then(function(){b.vU=null;var a,c,f,g,k;b.y0();if(b.gm){f=!1;for(k=0;k<b.gm.length;k++)if(a=b.gm[k],c=a.WR,"a"===a.Sf||"r"===a.Sf)f=!0,g||(g=b.hn.slice(0)),"a"===a.Sf?g.push(c):"r"===a.Sf&&(c=b.vBa(g,c.id),g.splice(c,1),a.index=c);if(f)for(b.Gx("palette",g,null);b.gm.length;)a=b.gm.shift(),c=a.WR,"a"===a.Sf?b.hn.push(c):"r"===a.Sf&&b.hn.splice(a.index,1)}},function(){a.C.error("JET Color Palette (id\x3d'"+b.element.attr("id")+
"'): ListView timed out.");b.gm=[]})}},mM:function(b,c){var e=c instanceof a.o,f=!1;b instanceof a.o&&e&&(f=b.isEqual(c));return f},Gx:function(a,c,e){"palette"===a&&this.option(a,c,{_context:{originalEvent:e,kb:!0},changed:!0})},zX:function(a){var c=-1,e=this.hn,f=e.length,g,k;for(g=0;g<f;g++)if(k=e[g],a.isEqual(k.color)){c=g;break}return c},wBa:function(a){var c=null,e=this.hn,f=e.length,g,k;for(g=0;g<f;g++)if(k=e[g],a.isEqual(k.color)){c=k.id;break}return c},vBa:function(a,c){var e=-1,f=a.length,
g,k;for(g=0;g<f;g++)if(k=a[g],k.id===c){e=g;break}return e},rP:function(b){this.eP||(this.eP=a.Context.getContext(this.element[0]).Ne().Ld({description:b}))},y0:function(){this.eP&&(this.eP(),this.eP=null)},TKa:function(b){var c,e,f,g,k,l;c=b.data.color;c instanceof a.o||(c=a.o.BLACK,a.C.warn("JET Color Palette (id\x3d'"+this.element.attr("id")+"'): Substituting oj.Color.BLACK for an object that is not an instance of oj.Color"));e=f=b.data.label;g="auto"===this.wO&&"list"===this.Jf&&"sm"===this.sC||
"auto"===this.wO&&"grid"===this.Jf&&"lg"===this.sC;null!=c&&(l=e?e:this.EW.format(c),g?(e=l?l:this.EW.format(c),e=f?e:e.toUpperCase()):e=null,k=!!(this.FHa(c)||e&&"none"===e.toLowerCase()));f="";this.em===b.data.id&&(f="oj-selected",this.em=-1,this.I0=b.parentElement);b="list"===this.Jf?"oj-colorpalette-swatchsize-"+this.sC+(k?" oj-colorpalette-swatch-none":""):this.Bka+(k?" oj-colorpalette-swatch-none":"");return k?this.PKa(g,e,l,b,f):this.RKa(c,g,e,l,b,f)},RKa:function(a,d,e,f,g,k){a="\x3cdiv class\x3d'oj-colorpalette-swatch-entry "+
g+(d?" oj-colorpalette-swatch-showlabel":"")+"'\x3e\x3cdiv class\x3d'oj-colorpalette-swatch-container'\x3e\x3cdiv class\x3d'oj-colorpalette-swatch "+k+"' style\x3d'background-color:"+a.toString()+"'"+(e?"":" title\x3d'"+f+"'")+"\x3e\x3c/div\x3e\x3c/div\x3e";e&&(a+="\x3cspan class\x3d'oj-colorpalette-swatch-text'\x3e"+e+"\x3c/span\x3e");return c(a+"\x3c/div\x3e")[0]},PKa:function(a,d,e,f,g){a="\x3cdiv class\x3d'oj-colorpalette-swatch-entry "+f+(a?" oj-colorpalette-swatch-showlabel":"")+"'\x3e\x3cdiv class\x3d'oj-colorpalette-swatch-container'\x3e\x3cdiv class\x3d'oj-colorpalette-swatch "+
g+"'"+(d?"":" title\x3d'"+e+"'")+"\x3e\x3cdiv class\x3d'oj-colorpalette-swatch-none-icon'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";d&&(a+="\x3cspan class\x3d'oj-colorpalette-swatch-text'\x3e"+d+"\x3c/span\x3e");return c(a+"\x3c/div\x3e")[0]},zLa:function(a,d){var e=null,f,e=c(d.items[0]).find(".oj-colorpalette-swatch");e.addClass("oj-selected");f=this.BLa;this.BLa=e;!f&&this.I0&&(f=c(this.I0).find(".oj-colorpalette-swatch"),this.I0=null);f&&f.removeClass("oj-selected");1===d.value.length&&(e=this.hn[d.value].color,
this.dc(e,a),this.xf=e)},TH:function(a,d){var e,f;if(!d||d&&a!==this.cq)this.oe&&this.oe.ojListView("option","disabled",a),e=c(".oj-colorpalette-container .oj-colorpalette-swatch"),f=this,a?(this.MF=[],c.each(e,function(a,b){f.MF.push(b.style.backgroundColor);b.style.backgroundColor="#eee"})):(this.MF&&this.MF.length&&c.each(e,function(a,b){b.style.backgroundColor=f.MF[a]}),this.MF=null),this.cq=a},S0:function(b){var c=-1,e=[];0<this.hn.length&&b instanceof a.o&&!this.mM(this.xf,b)&&(c=this.zX(b),
0<=c&&e.push(c),this.oe.ojListView("option","selection",e),this.xf=b);return 0<=c},mMa:function(a){c.isArray(a)&&!this.zHa(a,this.hn)&&(this.rP("The palette (id\x3d"+this.element.attr("id")+") option change in progress."),this.gm=[],this.hn=a.slice(0),this.em=this.zX(this.xf),this.xja(a,this.em,!0),this.k2())},nMa:function(a){"string"===typeof a&&a!==this.sC&&(this.sC=a,this.Bka="oj-colorpalette-swatchsize-"+("lg"===a?"lg":"sm"===a?"sm":"xs"),this.oe.ojListView("refresh"))},kMa:function(a){"string"!==
typeof a||a===this.wO||"auto"!==a&&"off"!==a||(this.wO=a,this.oe.ojListView("refresh"))},lMa:function(a){"string"===typeof a&&a!==this.Jf&&(this.Jf=a,this.LLa(),this.oe.ojListView("refresh"))},LLa:function(){var a="grid"===this.Jf,c=a?"oj-colorpalette-grid":"oj-colorpalette-list";this.oe.removeClass("oj-colorpalette-grid oj-colorpalette-list oj-listview-card-layout");this.oe.addClass(c);a&&this.oe.addClass("oj-listview-card-layout")},xja:function(b,c,e){this.Lwa(b);this.ZB=new a.Ya(b,{idAttribute:"id"});
0<=c&&(0===this.JO.length?this.JO.push(c):this.JO[0]=c);e&&this.oe.ojListView("option","data",this.ZB)},FGa:function(){this.rP("Palette (id\x3d"+this.element.attr("id")+") is initializing.");this.BG();this.hb()},hb:function(){this.Pg.append(this.WG);this.Pg.addClass("oj-colorpalette");this.w7=this.Pg.find(".oj-colorpalette-container");this.oe=this.w7.find(":first");this.oe.attr("data-oj-context","");this.xf&&this.xf instanceof a.o&&(this.em=this.zX(this.xf));this.Cka=0;this.xja(this.hn,this.em,!1);
this.oe.ojListView({data:this.ZB,item:{renderer:this.TKa.bind(this)},optionChange:this.UIa.bind(this),selectionMode:"single",selection:this.JO,rootAttributes:{style:"height:100%;width:100%"}}).attr("data-oj-internal","");var b=this;a.Context.getContext(this.oe[0]).Ne().whenReady().then(function(){b.oe.ojListView("option","translations.msgNoData","");b.TH(b.cq);if(b.oe[0].scrollWidth>b.oe[0].clientWidth){var a=b.wDa(),c="rtl"===b.sd();b.oe.css(c?"padding-left":"padding-right",a+1)}b.y0()})},BG:function(){this.HV();
this.Zaa=a.La.$k(a.Rh.CONVERTER_TYPE_COLOR);this.EW=this.Zaa.createConverter({format:"hex"});this.R("labelNone");this.WG=["\x3cdiv class\x3d'oj-colorpalette-container'\x3e","\x3cul class\x3d'"+("grid"===this.Jf?"oj-colorpalette-grid oj-listview-card-layout":"oj-colorpalette-list")+"'/\x3e","\x3c/div\x3e"].join("")},HV:function(){var b=this.options,d;this.Pg=c(this.element);this.cq=!1;this.JO=[];this.ZB=null;d=b.swatchSize;"string"===typeof d&&(d=d.toLowerCase(),"lg"!==d&&"sm"!==d&&"xs"!==d&&(d="lg"));
this.sC=d;this.Bka="oj-colorpalette-swatchsize-"+d;d=b.labelDisplay;"string"===typeof d&&(d=d.toLowerCase(),"auto"!==d&&"off"!==d&&(d="auto"));this.wO=d;d=b.layout;"string"===typeof d&&(d=d.toLowerCase(),"grid"!==d&&"list"!==d&&(d="grid"),"grid"!==d&&"xs"===this.sC&&(d="grid"));this.Jf=d;d=b.value;d instanceof a.o||(d=null);this.xf=d?d:a.o.BLACK;d=b.palette;c.isArray(d)||(d=[]);this.hn=d.slice(0);d=b.disabled;"boolean"===typeof d&&(this.cq=d)},FHa:function(a){var c=a.cD(),e=a.VC(),f=a.TC();a=a.SC();
return 0===c&&0===e&&0===f&&0===a},zHa:function(a,c){var e=a.length,f=c.length,g,k;g=!1;if(e===f){for(f=0;f<e&&(g=a[f],k=c[f],!this.mM(g.color,k.color)||(g=g.label,k=k.label,g===k));f++);g=f>=e}return g},Lwa:function(a){var c,e,f=a.length;for(c=0;c<f;c++)e=a[c],e.id=this.Qda()},Qda:function(){var a=this.Cka.toString();this.Cka++;return a},wx:function(){this.Zaa=this.EW=this.WG=this.oe=null},wDa:function(){var a=c("\x3cdiv style\x3d'overflow: scroll; width: 100px; height: 100px; position: absolute; visibility: hidden;'\x3e\x3cdiv style\x3d'width: 100%; height: 100%;'\x3e\x3c/div\x3e\x3c/div\x3e");
this.element.append(a);var d=a[0].offsetWidth,e=a.children()[0].offsetWidth;a.remove();return d-e},_GetMessagingLauncherElement:function(){return this.element},ag:function(){return this.oe},Yt:function(){return this.xf},uk:function(b){this.xf="string"===typeof b?new a.o(b):b},di:function(){return this.xf.toString()},_GetDefaultStyleClass:function(){return"oj-colorpalette"}})})()});