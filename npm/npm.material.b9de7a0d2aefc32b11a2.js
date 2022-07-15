"use strict";(self.webpackChunkvue_material_adapter=self.webpackChunkvue_material_adapter||[]).push([[8847],{2163:(L,R,v)=>{v.d(R,{$:()=>f});/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f=function(){function S(){this.rafIDs=new Map}return S.prototype.request=function(l,c){var p=this;this.cancel(l);var e=requestAnimationFrame(function(d){p.rafIDs.delete(l),c(d)});this.rafIDs.set(l,e)},S.prototype.cancel=function(l){var c=this.rafIDs.get(l);c&&(cancelAnimationFrame(c),this.rafIDs.delete(l))},S.prototype.cancelAll=function(){var l=this;this.rafIDs.forEach(function(c,p){l.cancel(p)})},S.prototype.getQueue=function(){var l=[];return this.rafIDs.forEach(function(c,p){l.push(p)}),l},S}()},8604:(L,R,v)=>{v.d(R,{E:()=>c,i:()=>p});/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},S={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function l(e){return Boolean(e.document)&&typeof e.document.createElement=="function"}function c(e,d){if(l(e)&&d in f){var a=e.document.createElement("div"),u=f[d],T=u.standard,E=u.prefixed,n=T in a.style;return n?T:E}return d}function p(e,d){if(l(e)&&d in S){var a=e.document.createElement("div"),u=S[d],T=u.standard,E=u.prefixed,n=u.cssProperty,i=n in a.style;return i?T:E}return d}},7721:(L,R,v)=>{v.d(R,{C:()=>n});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={CLOSING:"mdc-banner--closing",OPEN:"mdc-banner--open",OPENING:"mdc-banner--opening"},c={BANNER_ANIMATION_CLOSE_TIME_MS:250,BANNER_ANIMATION_OPEN_TIME_MS:300},p={CLOSED:"MDCBanner:closed",CLOSING:"MDCBanner:closing",OPENED:"MDCBanner:opened",OPENING:"MDCBanner:opening",ACTION_CLICKED:"MDCBanner:actionClicked"},e={CONTENT:".mdc-banner__content",PRIMARY_ACTION:".mdc-banner__primary-action",SECONDARY_ACTION:".mdc-banner__secondary-action",TEXT:".mdc-banner__text"},d;(function(i){i[i.PRIMARY=0]="PRIMARY",i[i.SECONDARY=1]="SECONDARY",i[i.UNSPECIFIED=2]="UNSPECIFIED"})(d||(d={}));var a;(function(i){i[i.PRIMARY=0]="PRIMARY",i[i.SECONDARY=1]="SECONDARY",i[i.UNKNOWN=2]="UNKNOWN"})(a||(a={}));/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var u=l.OPENING,T=l.OPEN,E=l.CLOSING,n=function(i){(0,f.ZT)(t,i);function t(r){var o=i.call(this,(0,f.pi)((0,f.pi)({},t.defaultAdapter),r))||this;return o.isOpened=!1,o.animationFrame=0,o.animationTimer=0,o}return Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},getContentHeight:function(){return 0},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},notifyActionClicked:function(){},releaseFocus:function(){},removeClass:function(){},setStyleProperty:function(){},trapFocus:function(){}}},enumerable:!1,configurable:!0}),t.prototype.destroy=function(){cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0},t.prototype.open=function(){var r=this;this.isOpened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(E),this.adapter.addClass(u);var o=this.adapter.getContentHeight();this.animationFrame=requestAnimationFrame(function(){r.adapter.addClass(T),r.adapter.setStyleProperty("height",o+"px"),r.animationTimer=setTimeout(function(){r.handleAnimationTimerEnd(),r.adapter.trapFocus(),r.adapter.notifyOpened()},c.BANNER_ANIMATION_OPEN_TIME_MS)})},t.prototype.close=function(r){var o=this;!this.isOpened||(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.isOpened=!1,this.adapter.notifyClosing(r),this.adapter.addClass(E),this.adapter.setStyleProperty("height","0"),this.adapter.removeClass(T),this.adapter.removeClass(u),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){o.adapter.releaseFocus(),o.handleAnimationTimerEnd(),o.adapter.notifyClosed(r)},c.BANNER_ANIMATION_CLOSE_TIME_MS))},t.prototype.isOpen=function(){return this.isOpened},t.prototype.handlePrimaryActionClick=function(r){r===void 0&&(r=!1),r?this.adapter.notifyActionClicked(0):this.close(d.PRIMARY)},t.prototype.handleSecondaryActionClick=function(r){r===void 0&&(r=!1),r?this.adapter.notifyActionClicked(1):this.close(d.SECONDARY)},t.prototype.layout=function(){var r=this.adapter.getContentHeight();this.adapter.setStyleProperty("height",r+"px")},t.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(u),this.adapter.removeClass(E)},t}(S.K)},2616:(L,R,v)=>{v.d(R,{B:()=>l});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(){function p(e,d){for(var a=[],u=2;u<arguments.length;u++)a[u-2]=arguments[u];this.root=e,this.initialize.apply(this,(0,f.ev)([],(0,f.CR)(a))),this.foundation=d===void 0?this.getDefaultFoundation():d,this.foundation.init(),this.initialSyncWithDOM()}return p.attachTo=function(e){return new p(e,new S.K({}))},p.prototype.initialize=function(){for(var e=[],d=0;d<arguments.length;d++)e[d]=arguments[d]},p.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},p.prototype.initialSyncWithDOM=function(){},p.prototype.destroy=function(){this.foundation.destroy()},p.prototype.listen=function(e,d,a){this.root.addEventListener(e,d,a)},p.prototype.unlisten=function(e,d,a){this.root.removeEventListener(e,d,a)},p.prototype.emit=function(e,d,a){a===void 0&&(a=!1);var u;typeof CustomEvent=="function"?u=new CustomEvent(e,{bubbles:a,detail:d}):(u=document.createEvent("CustomEvent"),u.initCustomEvent(e,a,!1,d)),this.root.dispatchEvent(u)},p}(),c=null},3264:(L,R,v)=>{v.d(R,{K:()=>f});/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f=function(){function l(c){c===void 0&&(c={}),this.adapter=c}return Object.defineProperty(l,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(l,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(l,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),l.prototype.init=function(){},l.prototype.destroy=function(){},l}(),S=null},2873:(L,R,v)=>{v.d(R,{P:()=>e});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},c={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",DATA_INDETERMINATE_ATTR:"data-indeterminate",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},p={ANIM_END_LATCH_MS:250};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var e=function(a){(0,f.ZT)(u,a);function u(T){var E=a.call(this,(0,f.pi)((0,f.pi)({},u.defaultAdapter),T))||this;return E.currentCheckState=c.TRANSITION_STATE_INIT,E.currentAnimationClass="",E.animEndLatchTimer=0,E.enableAnimationEndHandler=!1,E}return Object.defineProperty(u,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(u,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(u,"numbers",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(u,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),u.prototype.init=function(){this.currentCheckState=this.determineCheckState(),this.updateAriaChecked(),this.adapter.addClass(l.UPGRADED)},u.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer)},u.prototype.setDisabled=function(T){this.adapter.setNativeControlDisabled(T),T?this.adapter.addClass(l.DISABLED):this.adapter.removeClass(l.DISABLED)},u.prototype.handleAnimationEnd=function(){var T=this;!this.enableAnimationEndHandler||(clearTimeout(this.animEndLatchTimer),this.animEndLatchTimer=setTimeout(function(){T.adapter.removeClass(T.currentAnimationClass),T.enableAnimationEndHandler=!1},p.ANIM_END_LATCH_MS))},u.prototype.handleChange=function(){this.transitionCheckState()},u.prototype.transitionCheckState=function(){if(!!this.adapter.hasNativeControl()){var T=this.currentCheckState,E=this.determineCheckState();if(T!==E){this.updateAriaChecked();var n=c.TRANSITION_STATE_UNCHECKED,i=l.SELECTED;E===n?this.adapter.removeClass(i):this.adapter.addClass(i),this.currentAnimationClass.length>0&&(clearTimeout(this.animEndLatchTimer),this.adapter.forceLayout(),this.adapter.removeClass(this.currentAnimationClass)),this.currentAnimationClass=this.getTransitionAnimationClass(T,E),this.currentCheckState=E,this.adapter.isAttachedToDOM()&&this.currentAnimationClass.length>0&&(this.adapter.addClass(this.currentAnimationClass),this.enableAnimationEndHandler=!0)}}},u.prototype.determineCheckState=function(){var T=c.TRANSITION_STATE_INDETERMINATE,E=c.TRANSITION_STATE_CHECKED,n=c.TRANSITION_STATE_UNCHECKED;return this.adapter.isIndeterminate()?T:this.adapter.isChecked()?E:n},u.prototype.getTransitionAnimationClass=function(T,E){var n=c.TRANSITION_STATE_INIT,i=c.TRANSITION_STATE_CHECKED,t=c.TRANSITION_STATE_UNCHECKED,r=u.cssClasses,o=r.ANIM_UNCHECKED_CHECKED,h=r.ANIM_UNCHECKED_INDETERMINATE,C=r.ANIM_CHECKED_UNCHECKED,g=r.ANIM_CHECKED_INDETERMINATE,A=r.ANIM_INDETERMINATE_CHECKED,m=r.ANIM_INDETERMINATE_UNCHECKED;switch(T){case n:return E===t?"":E===i?A:m;case t:return E===i?o:h;case i:return E===t?C:g;default:return E===i?A:m}},u.prototype.updateAriaChecked=function(){this.adapter.isIndeterminate()?this.adapter.setNativeControlAttr(c.ARIA_CHECKED_ATTR,c.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter.removeNativeControlAttr(c.ARIA_CHECKED_ATTR)},u}(S.K);const d=null},6760:(L,R,v)=>{v.d(R,{PB:()=>e,So:()=>p,kl:()=>S,my:()=>c,n3:()=>l});/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f;(function(d){d.PRIMARY_ACTION="mdc-evolution-chip__action--primary",d.TRAILING_ACTION="mdc-evolution-chip__action--trailing",d.CHIP_ROOT="mdc-evolution-chip"})(f||(f={}));var S;(function(d){d[d.UNSPECIFIED=0]="UNSPECIFIED",d[d.CLICK=1]="CLICK",d[d.BACKSPACE_KEY=2]="BACKSPACE_KEY",d[d.DELETE_KEY=3]="DELETE_KEY",d[d.SPACEBAR_KEY=4]="SPACEBAR_KEY",d[d.ENTER_KEY=5]="ENTER_KEY"})(S||(S={}));var l;(function(d){d[d.UNSPECIFIED=0]="UNSPECIFIED",d[d.PRIMARY=1]="PRIMARY",d[d.TRAILING=2]="TRAILING"})(l||(l={}));var c;(function(d){d.INTERACTION="MDCChipAction:interaction",d.NAVIGATION="MDCChipAction:navigation"})(c||(c={}));var p;(function(d){d[d.FOCUSABLE=0]="FOCUSABLE",d[d.FOCUSABLE_AND_FOCUSED=1]="FOCUSABLE_AND_FOCUSED",d[d.NOT_FOCUSABLE=2]="NOT_FOCUSABLE"})(p||(p={}));var e;(function(d){d.ARIA_DISABLED="aria-disabled",d.ARIA_HIDDEN="aria-hidden",d.ARIA_SELECTED="aria-selected",d.DATA_DELETABLE="data-mdc-deletable",d.DISABLED="disabled",d.ROLE="role",d.TAB_INDEX="tabindex"})(e||(e={}))},1839:(L,R,v)=>{v.d(R,{H:()=>e});var f=v(5500),S=v(3264),l=v(6285),c=v(6760);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p=new Map;p.set(l.Fn.SPACEBAR,c.kl.SPACEBAR_KEY),p.set(l.Fn.ENTER,c.kl.ENTER_KEY),p.set(l.Fn.DELETE,c.kl.DELETE_KEY),p.set(l.Fn.BACKSPACE,c.kl.BACKSPACE_KEY);var e=function(a){(0,f.ZT)(u,a);function u(T){return a.call(this,(0,f.pi)((0,f.pi)({},u.defaultAdapter),T))||this}return Object.defineProperty(u,"defaultAdapter",{get:function(){return{emitEvent:function(){},focus:function(){},getAttribute:function(){return null},getElementID:function(){return""},removeAttribute:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),u.prototype.handleClick=function(){this.isDisabled()||this.emitInteraction(c.kl.CLICK)},u.prototype.handleKeydown=function(T){var E=(0,l.ku)(T);if(this.shouldNotifyInteractionFromKey(E)){T.preventDefault(),this.emitInteraction(this.getTriggerFromKey(E));return}if((0,l.tI)(T)){T.preventDefault(),this.emitNavigation(E);return}},u.prototype.setDisabled=function(T){if(this.isSelectable()){this.adapter.setAttribute(c.PB.ARIA_DISABLED,""+T);return}T?this.adapter.setAttribute(c.PB.DISABLED,"true"):this.adapter.removeAttribute(c.PB.DISABLED)},u.prototype.isDisabled=function(){return this.adapter.getAttribute(c.PB.ARIA_DISABLED)==="true"||this.adapter.getAttribute(c.PB.DISABLED)!==null},u.prototype.setFocus=function(T){if(!!this.isFocusable()){if(T===c.So.FOCUSABLE_AND_FOCUSED){this.adapter.setAttribute(c.PB.TAB_INDEX,"0"),this.adapter.focus();return}if(T===c.So.FOCUSABLE){this.adapter.setAttribute(c.PB.TAB_INDEX,"0");return}if(T===c.So.NOT_FOCUSABLE){this.adapter.setAttribute(c.PB.TAB_INDEX,"-1");return}}},u.prototype.isFocusable=function(){return!(this.isDisabled()||this.adapter.getAttribute(c.PB.ARIA_HIDDEN)==="true")},u.prototype.setSelected=function(T){!this.isSelectable()||this.adapter.setAttribute(c.PB.ARIA_SELECTED,""+T)},u.prototype.isSelected=function(){return this.adapter.getAttribute(c.PB.ARIA_SELECTED)==="true"},u.prototype.emitInteraction=function(T){this.adapter.emitEvent(c.my.INTERACTION,{actionID:this.adapter.getElementID(),source:this.actionType(),trigger:T})},u.prototype.emitNavigation=function(T){this.adapter.emitEvent(c.my.NAVIGATION,{source:this.actionType(),key:T})},u.prototype.shouldNotifyInteractionFromKey=function(T){var E=T===l.Fn.ENTER||T===l.Fn.SPACEBAR,n=T===l.Fn.BACKSPACE||T===l.Fn.DELETE;return!!(E||n&&this.shouldEmitInteractionOnRemoveKey())},u.prototype.getTriggerFromKey=function(T){var E=p.get(T);return E||c.kl.UNSPECIFIED},u}(S.K),d=null},9466:(L,R,v)=>{v.d(R,{w:()=>c});var f=v(5500),S=v(6760),l=v(1839);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c=function(e){(0,f.ZT)(d,e);function d(){return e!==null&&e.apply(this,arguments)||this}return d.prototype.isSelectable=function(){return this.adapter.getAttribute(S.PB.ROLE)==="option"},d.prototype.actionType=function(){return S.n3.PRIMARY},d.prototype.shouldEmitInteractionOnRemoveKey=function(){return this.adapter.getAttribute(S.PB.DATA_DELETABLE)==="true"},d}(l.H),p=null},5897:(L,R,v)=>{v.d(R,{H:()=>c});var f=v(5500),S=v(6760),l=v(1839);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c=function(e){(0,f.ZT)(d,e);function d(){return e!==null&&e.apply(this,arguments)||this}return d.prototype.isSelectable=function(){return!1},d.prototype.actionType=function(){return S.n3.TRAILING},d.prototype.shouldEmitInteractionOnRemoveKey=function(){return!0},d}(l.H),p=null},3714:(L,R,v)=>{v.d(R,{d:()=>T});var f=v(5500),S=v(3264),l=v(6285),c=v(6760),p=v(9385);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var e;(function(n){n.ARIA_MULTISELECTABLE="aria-multiselectable"})(e||(e={}));var d;(function(n){n.CHIP="mdc-evolution-chip"})(d||(d={}));var a;(function(n){n.INTERACTION="MDCChipSet:interaction",n.REMOVAL="MDCChipSet:removal",n.SELECTION="MDCChipSet:selection"})(a||(a={}));/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var u;(function(n){n[n.INCREMENT=0]="INCREMENT",n[n.DECREMENT=1]="DECREMENT"})(u||(u={}));var T=function(n){(0,f.ZT)(i,n);function i(t){return n.call(this,(0,f.pi)((0,f.pi)({},i.defaultAdapter),t))||this}return Object.defineProperty(i,"defaultAdapter",{get:function(){return{announceMessage:function(){},emitEvent:function(){},getAttribute:function(){return null},getChipActionsAtIndex:function(){return[]},getChipCount:function(){return 0},getChipIdAtIndex:function(){return""},getChipIndexById:function(){return 0},isChipFocusableAtIndex:function(){return!1},isChipSelectableAtIndex:function(){return!1},isChipSelectedAtIndex:function(){return!1},removeChipAtIndex:function(){},setChipFocusAtIndex:function(){},setChipSelectedAtIndex:function(){},startChipAnimationAtIndex:function(){}}},enumerable:!1,configurable:!0}),i.prototype.handleChipAnimation=function(t){var r=t.detail,o=r.chipID,h=r.animation,C=r.isComplete,g=r.addedAnnouncement,A=r.removedAnnouncement,m=this.adapter.getChipIndexById(o);if(h===p.oI.EXIT&&C){A&&this.adapter.announceMessage(A),this.removeAfterAnimation(m,o);return}if(h===p.oI.ENTER&&C&&g){this.adapter.announceMessage(g);return}},i.prototype.handleChipInteraction=function(t){var r=t.detail,o=r.source,h=r.chipID,C=r.isSelectable,g=r.isSelected,A=r.shouldRemove,m=this.adapter.getChipIndexById(h);if(A){this.removeChip(m);return}this.focusChip(m,o,c.So.FOCUSABLE),this.adapter.emitEvent(a.INTERACTION,{chipIndex:m,chipID:h}),C&&this.setSelection(m,o,!g)},i.prototype.handleChipNavigation=function(t){var r=t.detail,o=r.chipID,h=r.key,C=r.isRTL,g=r.source,A=this.adapter.getChipIndexById(o),m=h===l.Fn.ARROW_RIGHT&&!C||h===l.Fn.ARROW_LEFT&&C;if(m){this.focusNextChipFrom(A+1);return}var s=h===l.Fn.ARROW_LEFT&&!C||h===l.Fn.ARROW_RIGHT&&C;if(s){this.focusPrevChipFrom(A-1);return}if(h===l.Fn.ARROW_DOWN){this.focusNextChipFrom(A+1,g);return}if(h===l.Fn.ARROW_UP){this.focusPrevChipFrom(A-1,g);return}if(h===l.Fn.HOME){this.focusNextChipFrom(0,g);return}if(h===l.Fn.END){this.focusPrevChipFrom(this.adapter.getChipCount()-1,g);return}},i.prototype.getSelectedChipIndexes=function(){for(var t,r,o=new Set,h=this.adapter.getChipCount(),C=0;C<h;C++){var g=this.adapter.getChipActionsAtIndex(C);try{for(var A=(t=void 0,(0,f.XA)(g)),m=A.next();!m.done;m=A.next()){var s=m.value;this.adapter.isChipSelectedAtIndex(C,s)&&o.add(C)}}catch(I){t={error:I}}finally{try{m&&!m.done&&(r=A.return)&&r.call(A)}finally{if(t)throw t.error}}}return o},i.prototype.setChipSelected=function(t,r,o){this.adapter.isChipSelectableAtIndex(t,r)&&this.setSelection(t,r,o)},i.prototype.isChipSelected=function(t,r){return this.adapter.isChipSelectedAtIndex(t,r)},i.prototype.removeChip=function(t){t>=this.adapter.getChipCount()||t<0||(this.adapter.startChipAnimationAtIndex(t,p.oI.EXIT),this.adapter.emitEvent(a.REMOVAL,{chipID:this.adapter.getChipIdAtIndex(t),chipIndex:t,isComplete:!1}))},i.prototype.addChip=function(t){t>=this.adapter.getChipCount()||t<0||this.adapter.startChipAnimationAtIndex(t,p.oI.ENTER)},i.prototype.focusNextChipFrom=function(t,r){for(var o=this.adapter.getChipCount(),h=t;h<o;h++){var C=this.getFocusableAction(h,u.INCREMENT,r);if(C){this.focusChip(h,C,c.So.FOCUSABLE_AND_FOCUSED);return}}},i.prototype.focusPrevChipFrom=function(t,r){for(var o=t;o>-1;o--){var h=this.getFocusableAction(o,u.DECREMENT,r);if(h){this.focusChip(o,h,c.So.FOCUSABLE_AND_FOCUSED);return}}},i.prototype.getFocusableAction=function(t,r,o){var h=this.adapter.getChipActionsAtIndex(t);return r===u.DECREMENT&&h.reverse(),o?this.getMatchingFocusableAction(t,h,o):this.getFirstFocusableAction(t,h)},i.prototype.getFirstFocusableAction=function(t,r){var o,h;try{for(var C=(0,f.XA)(r),g=C.next();!g.done;g=C.next()){var A=g.value;if(this.adapter.isChipFocusableAtIndex(t,A))return A}}catch(m){o={error:m}}finally{try{g&&!g.done&&(h=C.return)&&h.call(C)}finally{if(o)throw o.error}}return null},i.prototype.getMatchingFocusableAction=function(t,r,o){var h,C,g=null;try{for(var A=(0,f.XA)(r),m=A.next();!m.done;m=A.next()){var s=m.value;if(this.adapter.isChipFocusableAtIndex(t,s)&&(g=s),g===o)return g}}catch(I){h={error:I}}finally{try{m&&!m.done&&(C=A.return)&&C.call(A)}finally{if(h)throw h.error}}return g},i.prototype.focusChip=function(t,r,o){var h,C;this.adapter.setChipFocusAtIndex(t,r,o);for(var g=this.adapter.getChipCount(),A=0;A<g;A++){var m=this.adapter.getChipActionsAtIndex(A);try{for(var s=(h=void 0,(0,f.XA)(m)),I=s.next();!I.done;I=s.next()){var _=I.value;_===r&&A===t||this.adapter.setChipFocusAtIndex(A,_,c.So.NOT_FOCUSABLE)}}catch(y){h={error:y}}finally{try{I&&!I.done&&(C=s.return)&&C.call(s)}finally{if(h)throw h.error}}}},i.prototype.supportsMultiSelect=function(){return this.adapter.getAttribute(e.ARIA_MULTISELECTABLE)==="true"},i.prototype.setSelection=function(t,r,o){var h,C;if(this.adapter.setChipSelectedAtIndex(t,r,o),this.adapter.emitEvent(a.SELECTION,{chipID:this.adapter.getChipIdAtIndex(t),chipIndex:t,isSelected:o}),!this.supportsMultiSelect())for(var g=this.adapter.getChipCount(),A=0;A<g;A++){var m=this.adapter.getChipActionsAtIndex(A);try{for(var s=(h=void 0,(0,f.XA)(m)),I=s.next();!I.done;I=s.next()){var _=I.value;_===r&&A===t||this.adapter.setChipSelectedAtIndex(A,_,!1)}}catch(y){h={error:y}}finally{try{I&&!I.done&&(C=s.return)&&C.call(s)}finally{if(h)throw h.error}}}},i.prototype.removeAfterAnimation=function(t,r){this.adapter.removeChipAtIndex(t),this.adapter.emitEvent(a.REMOVAL,{chipIndex:t,isComplete:!0,chipID:r});var o=this.adapter.getChipCount();o<=0||this.focusNearestFocusableAction(t)},i.prototype.focusNearestFocusableAction=function(t){for(var r=this.adapter.getChipCount(),o=t,h=t;o>-1||h<r;){var C=this.getNearestFocusableAction(o,h,c.n3.TRAILING);if(C){this.focusChip(C.index,C.action,c.So.FOCUSABLE_AND_FOCUSED);return}o--,h++}},i.prototype.getNearestFocusableAction=function(t,r,o){var h=this.getFocusableAction(t,u.DECREMENT,o);if(h)return{index:t,action:h};if(r===t)return null;var C=this.getFocusableAction(r,u.INCREMENT,o);return C?{index:r,action:C}:null},i}(S.K);const E=null},9385:(L,R,v)=>{v.d(R,{Ae:()=>f,PG:()=>S,oI:()=>c,ry:()=>l});/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f;(function(p){p.SELECTING="mdc-evolution-chip--selecting",p.DESELECTING="mdc-evolution-chip--deselecting",p.SELECTING_WITH_PRIMARY_ICON="mdc-evolution-chip--selecting-with-primary-icon",p.DESELECTING_WITH_PRIMARY_ICON="mdc-evolution-chip--deselecting-with-primary-icon",p.DISABLED="mdc-evolution-chip--disabled",p.ENTER="mdc-evolution-chip--enter",p.EXIT="mdc-evolution-chip--exit",p.SELECTED="mdc-evolution-chip--selected",p.HIDDEN="mdc-evolution-chip--hidden",p.WITH_PRIMARY_ICON="mdc-evolution-chip--with-primary-icon"})(f||(f={}));var S;(function(p){p.INTERACTION="MDCChip:interaction",p.NAVIGATION="MDCChip:navigation",p.ANIMATION="MDCChip:animation"})(S||(S={}));var l;(function(p){p.DATA_REMOVED_ANNOUNCEMENT="data-mdc-removed-announcement",p.DATA_ADDED_ANNOUNCEMENT="data-mdc-added-announcement"})(l||(l={}));var c;(function(p){p.ENTER="mdc-evolution-chip-enter",p.EXIT="mdc-evolution-chip-exit"})(c||(c={}))},3207:(L,R,v)=>{v.d(R,{y:()=>u});var f=v(5500),S=v(2163),l=v(3264),c=v(6285),p=v(6760),e=v(9385);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var d;(function(E){E[E.UNSPECIFIED=0]="UNSPECIFIED",E[E.LEFT=1]="LEFT",E[E.RIGHT=2]="RIGHT"})(d||(d={}));var a;(function(E){E.SELECTION="selection",E.EXIT="exit"})(a||(a={}));var u=function(E){(0,f.ZT)(n,E);function n(i){var t=E.call(this,(0,f.pi)((0,f.pi)({},n.defaultAdapter),i))||this;return t.animFrame=new S.$,t}return Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},emitEvent:function(){},getActions:function(){return[]},getAttribute:function(){return null},getElementID:function(){return""},getOffsetWidth:function(){return 0},hasClass:function(){return!1},isActionDisabled:function(){return!1},isActionFocusable:function(){return!1},isActionSelectable:function(){return!1},isActionSelected:function(){return!1},isRTL:function(){return!1},removeClass:function(){},setActionDisabled:function(){},setActionFocus:function(){},setActionSelected:function(){},setStyleProperty:function(){}}},enumerable:!1,configurable:!0}),n.prototype.destroy=function(){this.animFrame.cancelAll()},n.prototype.getElementID=function(){return this.adapter.getElementID()},n.prototype.setDisabled=function(i){var t,r,o=this.getActions();try{for(var h=(0,f.XA)(o),C=h.next();!C.done;C=h.next()){var g=C.value;this.adapter.setActionDisabled(g,i)}}catch(A){t={error:A}}finally{try{C&&!C.done&&(r=h.return)&&r.call(h)}finally{if(t)throw t.error}}i?this.adapter.addClass(e.Ae.DISABLED):this.adapter.removeClass(e.Ae.DISABLED)},n.prototype.isDisabled=function(){var i,t,r=this.getActions();try{for(var o=(0,f.XA)(r),h=o.next();!h.done;h=o.next()){var C=h.value;if(this.adapter.isActionDisabled(C))return!0}}catch(g){i={error:g}}finally{try{h&&!h.done&&(t=o.return)&&t.call(o)}finally{if(i)throw i.error}}return!1},n.prototype.getActions=function(){return this.adapter.getActions()},n.prototype.isActionFocusable=function(i){return this.adapter.isActionFocusable(i)},n.prototype.isActionSelectable=function(i){return this.adapter.isActionSelectable(i)},n.prototype.isActionSelected=function(i){return this.adapter.isActionSelected(i)},n.prototype.setActionFocus=function(i,t){this.adapter.setActionFocus(i,t)},n.prototype.setActionSelected=function(i,t){this.adapter.setActionSelected(i,t),this.animateSelection(t)},n.prototype.startAnimation=function(i){if(i===e.oI.ENTER){this.adapter.addClass(e.Ae.ENTER);return}if(i===e.oI.EXIT){this.adapter.addClass(e.Ae.EXIT);return}},n.prototype.handleAnimationEnd=function(i){var t=this,r=i.animationName;if(r===e.oI.ENTER){this.adapter.removeClass(e.Ae.ENTER),this.adapter.emitEvent(e.PG.ANIMATION,{chipID:this.getElementID(),animation:e.oI.ENTER,addedAnnouncement:this.getAddedAnnouncement(),isComplete:!0});return}if(r===e.oI.EXIT){this.adapter.removeClass(e.Ae.EXIT),this.adapter.addClass(e.Ae.HIDDEN);var o=this.adapter.getOffsetWidth();this.adapter.setStyleProperty("width",o+"px"),this.animFrame.request(a.EXIT,function(){t.animFrame.request(a.EXIT,function(){t.adapter.setStyleProperty("width","0")})})}},n.prototype.handleTransitionEnd=function(){!this.adapter.hasClass(e.Ae.HIDDEN)||this.adapter.emitEvent(e.PG.ANIMATION,{chipID:this.getElementID(),animation:e.oI.EXIT,removedAnnouncement:this.getRemovedAnnouncement(),isComplete:!0})},n.prototype.handleActionInteraction=function(i){var t=i.detail,r=t.source,o=t.actionID,h=this.adapter.isActionSelectable(r),C=this.adapter.isActionSelected(r);this.adapter.emitEvent(e.PG.INTERACTION,{chipID:this.getElementID(),shouldRemove:this.shouldRemove(t),actionID:o,isSelectable:h,isSelected:C,source:r})},n.prototype.handleActionNavigation=function(i){var t=i.detail,r=t.source,o=t.key,h=this.adapter.isRTL(),C=this.adapter.isActionFocusable(p.n3.TRAILING),g=this.adapter.isActionFocusable(p.n3.PRIMARY),A=this.directionFromKey(o,h),m=r===p.n3.PRIMARY&&A===d.RIGHT&&C,s=r===p.n3.TRAILING&&A===d.LEFT&&g;if(m){this.navigateActions({from:r,to:p.n3.TRAILING});return}if(s){this.navigateActions({from:r,to:p.n3.PRIMARY});return}this.adapter.emitEvent(e.PG.NAVIGATION,{chipID:this.getElementID(),isRTL:h,source:r,key:o})},n.prototype.directionFromKey=function(i,t){var r=i===c.Fn.ARROW_LEFT,o=i===c.Fn.ARROW_RIGHT;return!t&&r||t&&o?d.LEFT:!t&&o||t&&r?d.RIGHT:d.UNSPECIFIED},n.prototype.navigateActions=function(i){this.adapter.setActionFocus(i.from,p.So.NOT_FOCUSABLE),this.adapter.setActionFocus(i.to,p.So.FOCUSABLE_AND_FOCUSED)},n.prototype.shouldRemove=function(i){var t=i.source,r=i.trigger;return r===p.kl.BACKSPACE_KEY||r===p.kl.DELETE_KEY?!0:t===p.n3.TRAILING},n.prototype.getRemovedAnnouncement=function(){var i=this.adapter.getAttribute(e.ry.DATA_REMOVED_ANNOUNCEMENT);return i||void 0},n.prototype.getAddedAnnouncement=function(){var i=this.adapter.getAttribute(e.ry.DATA_ADDED_ANNOUNCEMENT);return i||void 0},n.prototype.animateSelection=function(i){var t=this;this.resetAnimationStyles(),this.animFrame.request(a.SELECTION,function(){t.animFrame.request(a.SELECTION,function(){t.updateSelectionStyles(i)})})},n.prototype.resetAnimationStyles=function(){this.adapter.removeClass(e.Ae.SELECTING),this.adapter.removeClass(e.Ae.DESELECTING),this.adapter.removeClass(e.Ae.SELECTING_WITH_PRIMARY_ICON),this.adapter.removeClass(e.Ae.DESELECTING_WITH_PRIMARY_ICON)},n.prototype.updateSelectionStyles=function(i){var t=this,r=this.adapter.hasClass(e.Ae.WITH_PRIMARY_ICON);if(r&&i){this.adapter.addClass(e.Ae.SELECTING_WITH_PRIMARY_ICON),this.animFrame.request(a.SELECTION,function(){t.adapter.addClass(e.Ae.SELECTED)});return}if(r&&!i){this.adapter.addClass(e.Ae.DESELECTING_WITH_PRIMARY_ICON),this.animFrame.request(a.SELECTION,function(){t.adapter.removeClass(e.Ae.SELECTED)});return}if(i){this.adapter.addClass(e.Ae.SELECTING),this.animFrame.request(a.SELECTION,function(){t.adapter.addClass(e.Ae.SELECTED)});return}if(!i){this.adapter.addClass(e.Ae.DESELECTING),this.animFrame.request(a.SELECTION,function(){t.adapter.removeClass(e.Ae.SELECTED)});return}},n}(l.K),T=null},5146:(L,R,v)=>{v.d(R,{O:()=>p});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={INDETERMINATE_CLASS:"mdc-circular-progress--indeterminate",CLOSED_CLASS:"mdc-circular-progress--closed"},c={ARIA_HIDDEN:"aria-hidden",ARIA_VALUENOW:"aria-valuenow",DETERMINATE_CIRCLE_SELECTOR:".mdc-circular-progress__determinate-circle",RADIUS:"r",STROKE_DASHOFFSET:"stroke-dashoffset"};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p=function(d){(0,f.ZT)(a,d);function a(u){return d.call(this,(0,f.pi)((0,f.pi)({},a.defaultAdapter),u))||this}return Object.defineProperty(a,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{addClass:function(){},getDeterminateCircleAttribute:function(){return null},hasClass:function(){return!1},removeClass:function(){},removeAttribute:function(){},setAttribute:function(){},setDeterminateCircleAttribute:function(){}}},enumerable:!1,configurable:!0}),a.prototype.init=function(){this.closed=this.adapter.hasClass(l.CLOSED_CLASS),this.determinate=!this.adapter.hasClass(l.INDETERMINATE_CLASS),this.progress=0,this.determinate&&this.adapter.setAttribute(c.ARIA_VALUENOW,this.progress.toString()),this.radius=Number(this.adapter.getDeterminateCircleAttribute(c.RADIUS))},a.prototype.setDeterminate=function(u){this.determinate=u,this.determinate?(this.adapter.removeClass(l.INDETERMINATE_CLASS),this.setProgress(this.progress)):(this.adapter.addClass(l.INDETERMINATE_CLASS),this.adapter.removeAttribute(c.ARIA_VALUENOW))},a.prototype.isDeterminate=function(){return this.determinate},a.prototype.setProgress=function(u){if(this.progress=u,this.determinate){var T=(1-this.progress)*(2*Math.PI*this.radius);this.adapter.setDeterminateCircleAttribute(c.STROKE_DASHOFFSET,""+T),this.adapter.setAttribute(c.ARIA_VALUENOW,this.progress.toString())}},a.prototype.getProgress=function(){return this.progress},a.prototype.open=function(){this.closed=!1,this.adapter.removeClass(l.CLOSED_CLASS),this.adapter.removeAttribute(c.ARIA_HIDDEN)},a.prototype.close=function(){this.closed=!0,this.adapter.addClass(l.CLOSED_CLASS),this.adapter.setAttribute(c.ARIA_HIDDEN,"true")},a.prototype.isClosed=function(){return this.closed},a}(S.K);const e=null},5365:(L,R,v)=>{v.d(R,{C4:()=>l,UX:()=>f,ZH:()=>d,j2:()=>e,sY:()=>p,wl:()=>c});/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f={CELL:"mdc-data-table__cell",CELL_NUMERIC:"mdc-data-table__cell--numeric",CONTENT:"mdc-data-table__content",HEADER_CELL:"mdc-data-table__header-cell",HEADER_CELL_LABEL:"mdc-data-table__header-cell-label",HEADER_CELL_SORTED:"mdc-data-table__header-cell--sorted",HEADER_CELL_SORTED_DESCENDING:"mdc-data-table__header-cell--sorted-descending",HEADER_CELL_WITH_SORT:"mdc-data-table__header-cell--with-sort",HEADER_CELL_WRAPPER:"mdc-data-table__header-cell-wrapper",HEADER_ROW:"mdc-data-table__header-row",HEADER_ROW_CHECKBOX:"mdc-data-table__header-row-checkbox",IN_PROGRESS:"mdc-data-table--in-progress",LINEAR_PROGRESS:"mdc-data-table__linear-progress",PAGINATION_ROWS_PER_PAGE_LABEL:"mdc-data-table__pagination-rows-per-page-label",PAGINATION_ROWS_PER_PAGE_SELECT:"mdc-data-table__pagination-rows-per-page-select",PROGRESS_INDICATOR:"mdc-data-table__progress-indicator",ROOT:"mdc-data-table",ROW:"mdc-data-table__row",ROW_CHECKBOX:"mdc-data-table__row-checkbox",ROW_SELECTED:"mdc-data-table__row--selected",SORT_ICON_BUTTON:"mdc-data-table__sort-icon-button",SORT_STATUS_LABEL:"mdc-data-table__sort-status-label",TABLE_CONTAINER:"mdc-data-table__table-container"},S={ARIA_SELECTED:"aria-selected",ARIA_SORT:"aria-sort"},l={COLUMN_ID:"data-column-id",ROW_ID:"data-row-id"},c={CONTENT:"."+f.CONTENT,HEADER_CELL:"."+f.HEADER_CELL,HEADER_CELL_WITH_SORT:"."+f.HEADER_CELL_WITH_SORT,HEADER_ROW:"."+f.HEADER_ROW,HEADER_ROW_CHECKBOX:"."+f.HEADER_ROW_CHECKBOX,PROGRESS_INDICATOR:"."+f.PROGRESS_INDICATOR,ROW:"."+f.ROW,ROW_CHECKBOX:"."+f.ROW_CHECKBOX,ROW_SELECTED:"."+f.ROW_SELECTED,SORT_ICON_BUTTON:"."+f.SORT_ICON_BUTTON,SORT_STATUS_LABEL:"."+f.SORT_STATUS_LABEL},p={SORTED_IN_DESCENDING:"Sorted in descending order",SORTED_IN_ASCENDING:"Sorted in ascending order"},e={ARIA_SELECTED:S.ARIA_SELECTED,ARIA_SORT:S.ARIA_SORT,DATA_ROW_ID_ATTR:l.ROW_ID,HEADER_ROW_CHECKBOX_SELECTOR:c.HEADER_ROW_CHECKBOX,ROW_CHECKBOX_SELECTOR:c.ROW_CHECKBOX,ROW_SELECTED_SELECTOR:c.ROW_SELECTED,ROW_SELECTOR:c.ROW},d;(function(u){u.ASCENDING="ascending",u.DESCENDING="descending",u.NONE="none",u.OTHER="other"})(d||(d={}));var a={ROW_CLICK:"MDCDataTable:rowClick",ROW_SELECTION_CHANGED:"MDCDataTable:rowSelectionChanged",SELECTED_ALL:"MDCDataTable:selectedAll",SORTED:"MDCDataTable:sorted",UNSELECTED_ALL:"MDCDataTable:unselectedAll"}},1486:(L,R,v)=>{v.d(R,{V:()=>c});var f=v(5500),S=v(3264),l=v(5365);/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c=function(p){(0,f.ZT)(e,p);function e(d){return p.call(this,(0,f.pi)((0,f.pi)({},e.defaultAdapter),d))||this}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},addClassAtRowIndex:function(){},getAttributeByHeaderCellIndex:function(){return""},getHeaderCellCount:function(){return 0},getHeaderCellElements:function(){return[]},getRowCount:function(){return 0},getRowElements:function(){return[]},getRowIdAtIndex:function(){return""},getRowIndexByChildElement:function(){return 0},getSelectedRowCount:function(){return 0},getTableContainerHeight:function(){return 0},getTableHeaderHeight:function(){return 0},isCheckboxAtRowIndexChecked:function(){return!1},isHeaderRowCheckboxChecked:function(){return!1},isRowsSelectable:function(){return!1},notifyRowSelectionChanged:function(){},notifySelectedAll:function(){},notifySortAction:function(){},notifyUnselectedAll:function(){},notifyRowClick:function(){},registerHeaderRowCheckbox:function(){},registerRowCheckboxes:function(){},removeClass:function(){},removeClassAtRowIndex:function(){},removeClassNameByHeaderCellIndex:function(){},setAttributeAtRowIndex:function(){},setAttributeByHeaderCellIndex:function(){},setClassNameByHeaderCellIndex:function(){},setHeaderRowCheckboxChecked:function(){},setHeaderRowCheckboxIndeterminate:function(){},setProgressIndicatorStyles:function(){},setRowCheckboxCheckedAtIndex:function(){},setSortStatusLabelByHeaderCellIndex:function(){}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.isRowsSelectable()&&(this.adapter.registerHeaderRowCheckbox(),this.adapter.registerRowCheckboxes(),this.setHeaderRowCheckboxState())},e.prototype.layoutAsync=function(){return(0,f.mG)(this,void 0,void 0,function(){return(0,f.Jh)(this,function(d){switch(d.label){case 0:return this.adapter.isRowsSelectable()?[4,this.adapter.registerHeaderRowCheckbox()]:[3,3];case 1:return d.sent(),[4,this.adapter.registerRowCheckboxes()];case 2:d.sent(),this.setHeaderRowCheckboxState(),d.label=3;case 3:return[2]}})})},e.prototype.getRows=function(){return this.adapter.getRowElements()},e.prototype.getHeaderCells=function(){return this.adapter.getHeaderCellElements()},e.prototype.setSelectedRowIds=function(d){for(var a=0;a<this.adapter.getRowCount();a++){var u=this.adapter.getRowIdAtIndex(a),T=!1;u&&d.indexOf(u)>=0&&(T=!0),this.adapter.setRowCheckboxCheckedAtIndex(a,T),this.selectRowAtIndex(a,T)}this.setHeaderRowCheckboxState()},e.prototype.getRowIds=function(){for(var d=[],a=0;a<this.adapter.getRowCount();a++)d.push(this.adapter.getRowIdAtIndex(a));return d},e.prototype.getSelectedRowIds=function(){for(var d=[],a=0;a<this.adapter.getRowCount();a++)this.adapter.isCheckboxAtRowIndexChecked(a)&&d.push(this.adapter.getRowIdAtIndex(a));return d},e.prototype.handleHeaderRowCheckboxChange=function(){for(var d=this.adapter.isHeaderRowCheckboxChecked(),a=0;a<this.adapter.getRowCount();a++)this.adapter.setRowCheckboxCheckedAtIndex(a,d),this.selectRowAtIndex(a,d);d?this.adapter.notifySelectedAll():this.adapter.notifyUnselectedAll()},e.prototype.handleRowCheckboxChange=function(d){var a=this.adapter.getRowIndexByChildElement(d.target);if(a!==-1){var u=this.adapter.isCheckboxAtRowIndexChecked(a);this.selectRowAtIndex(a,u),this.setHeaderRowCheckboxState();var T=this.adapter.getRowIdAtIndex(a);this.adapter.notifyRowSelectionChanged({rowId:T,rowIndex:a,selected:u})}},e.prototype.handleSortAction=function(d){for(var a=d.columnId,u=d.columnIndex,T=d.headerCell,E=0;E<this.adapter.getHeaderCellCount();E++)E!==u&&(this.adapter.removeClassNameByHeaderCellIndex(E,l.UX.HEADER_CELL_SORTED),this.adapter.removeClassNameByHeaderCellIndex(E,l.UX.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(E,l.j2.ARIA_SORT,l.ZH.NONE),this.adapter.setSortStatusLabelByHeaderCellIndex(E,l.ZH.NONE));this.adapter.setClassNameByHeaderCellIndex(u,l.UX.HEADER_CELL_SORTED);var n=this.adapter.getAttributeByHeaderCellIndex(u,l.j2.ARIA_SORT),i=l.ZH.NONE;n===l.ZH.ASCENDING?(this.adapter.setClassNameByHeaderCellIndex(u,l.UX.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(u,l.j2.ARIA_SORT,l.ZH.DESCENDING),i=l.ZH.DESCENDING):n===l.ZH.DESCENDING?(this.adapter.removeClassNameByHeaderCellIndex(u,l.UX.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(u,l.j2.ARIA_SORT,l.ZH.ASCENDING),i=l.ZH.ASCENDING):(this.adapter.setAttributeByHeaderCellIndex(u,l.j2.ARIA_SORT,l.ZH.ASCENDING),i=l.ZH.ASCENDING),this.adapter.setSortStatusLabelByHeaderCellIndex(u,i),this.adapter.notifySortAction({columnId:a,columnIndex:u,headerCell:T,sortValue:i})},e.prototype.handleRowClick=function(d){var a=d.rowId,u=d.row;this.adapter.notifyRowClick({rowId:a,row:u})},e.prototype.showProgress=function(){var d=this.adapter.getTableHeaderHeight(),a=this.adapter.getTableContainerHeight()-d,u=d;this.adapter.setProgressIndicatorStyles({height:a+"px",top:u+"px"}),this.adapter.addClass(l.UX.IN_PROGRESS)},e.prototype.hideProgress=function(){this.adapter.removeClass(l.UX.IN_PROGRESS)},e.prototype.setHeaderRowCheckboxState=function(){this.adapter.getSelectedRowCount()===0?(this.adapter.setHeaderRowCheckboxChecked(!1),this.adapter.setHeaderRowCheckboxIndeterminate(!1)):this.adapter.getSelectedRowCount()===this.adapter.getRowCount()?(this.adapter.setHeaderRowCheckboxChecked(!0),this.adapter.setHeaderRowCheckboxIndeterminate(!1)):(this.adapter.setHeaderRowCheckboxIndeterminate(!0),this.adapter.setHeaderRowCheckboxChecked(!1))},e.prototype.selectRowAtIndex=function(d,a){a?(this.adapter.addClassAtRowIndex(d,l.UX.ROW_SELECTED),this.adapter.setAttributeAtRowIndex(d,l.j2.ARIA_SELECTED,"true")):(this.adapter.removeClassAtRowIndex(d,l.UX.ROW_SELECTED),this.adapter.setAttributeAtRowIndex(d,l.j2.ARIA_SELECTED,"false"))},e}(S.K)},4917:(L,R,v)=>{v.d(R,{X:()=>a});var f=v(5500),S=v(2163),l=v(3264);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},p={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},e={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var d;(function(T){T.POLL_SCROLL_POS="poll_scroll_position",T.POLL_LAYOUT_CHANGE="poll_layout_change"})(d||(d={}));var a=function(T){(0,f.ZT)(E,T);function E(n){var i=T.call(this,(0,f.pi)((0,f.pi)({},E.defaultAdapter),n))||this;return i.dialogOpen=!1,i.isFullscreen=!1,i.animationFrame=0,i.animationTimer=0,i.escapeKeyAction=p.CLOSE_ACTION,i.scrimClickAction=p.CLOSE_ACTION,i.autoStackButtons=!0,i.areButtonsStacked=!1,i.suppressDefaultPressSelector=p.SUPPRESS_DEFAULT_PRESS_SELECTOR,i.animFrame=new S.$,i.contentScrollHandler=function(){i.handleScrollEvent()},i.windowResizeHandler=function(){i.layout()},i.windowOrientationChangeHandler=function(){i.layout()},i}return Object.defineProperty(E,"cssClasses",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(E,"strings",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(E,"numbers",{get:function(){return e},enumerable:!1,configurable:!0}),Object.defineProperty(E,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),E.prototype.init=function(){this.adapter.hasClass(c.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(c.FULLSCREEN)},E.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},E.prototype.open=function(n){var i=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(c.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),n&&n.isAboveFullscreenDialog&&this.adapter.addClass(c.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){i.adapter.addClass(c.OPEN),i.adapter.addBodyClass(c.SCROLL_LOCK),i.layout(),i.animationTimer=setTimeout(function(){i.handleAnimationTimerEnd(),i.adapter.trapFocus(i.adapter.getInitialFocusEl()),i.adapter.notifyOpened()},e.DIALOG_ANIMATION_OPEN_TIME_MS)})},E.prototype.close=function(n){var i=this;n===void 0&&(n=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(n),this.adapter.addClass(c.CLOSING),this.adapter.removeClass(c.OPEN),this.adapter.removeBodyClass(c.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){i.adapter.releaseFocus(),i.handleAnimationTimerEnd(),i.adapter.notifyClosed(n)},e.DIALOG_ANIMATION_CLOSE_TIME_MS))},E.prototype.showSurfaceScrim=function(){var n=this;this.adapter.addClass(c.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){n.adapter.addClass(c.SURFACE_SCRIM_SHOWN)})},E.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(c.SURFACE_SCRIM_SHOWN),this.adapter.addClass(c.SURFACE_SCRIM_HIDING)},E.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(c.SURFACE_SCRIM_HIDING),this.adapter.removeClass(c.SURFACE_SCRIM_SHOWING)},E.prototype.isOpen=function(){return this.dialogOpen},E.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},E.prototype.setEscapeKeyAction=function(n){this.escapeKeyAction=n},E.prototype.getScrimClickAction=function(){return this.scrimClickAction},E.prototype.setScrimClickAction=function(n){this.scrimClickAction=n},E.prototype.getAutoStackButtons=function(){return this.autoStackButtons},E.prototype.setAutoStackButtons=function(n){this.autoStackButtons=n},E.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},E.prototype.setSuppressDefaultPressSelector=function(n){this.suppressDefaultPressSelector=n},E.prototype.layout=function(){var n=this;this.animFrame.request(d.POLL_LAYOUT_CHANGE,function(){n.layoutInternal()})},E.prototype.handleClick=function(n){var i=this.adapter.eventTargetMatches(n.target,p.SCRIM_SELECTOR);if(i&&this.scrimClickAction!=="")this.close(this.scrimClickAction);else{var t=this.adapter.getActionFromEvent(n);t&&this.close(t)}},E.prototype.handleKeydown=function(n){var i=n.key==="Enter"||n.keyCode===13;if(!!i){var t=this.adapter.getActionFromEvent(n);if(!t){var r=n.composedPath?n.composedPath()[0]:n.target,o=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(r,this.suppressDefaultPressSelector):!0;i&&o&&this.adapter.clickDefaultButton()}}},E.prototype.handleDocumentKeydown=function(n){var i=n.key==="Escape"||n.keyCode===27;i&&this.escapeKeyAction!==""&&this.close(this.escapeKeyAction)},E.prototype.handleScrollEvent=function(){var n=this;this.animFrame.request(d.POLL_SCROLL_POS,function(){n.toggleScrollDividerHeader(),n.toggleScrollDividerFooter()})},E.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},E.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(c.OPENING),this.adapter.removeClass(c.CLOSING)},E.prototype.runNextAnimationFrame=function(n){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(n,0)})},E.prototype.detectStackedButtons=function(){this.adapter.removeClass(c.STACKED);var n=this.adapter.areButtonsStacked();n&&this.adapter.addClass(c.STACKED),n!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=n)},E.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(c.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(c.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},E.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(c.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(c.SCROLL_DIVIDER_HEADER):this.adapter.addClass(c.SCROLL_DIVIDER_HEADER)},E.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(c.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(c.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(c.SCROLL_DIVIDER_FOOTER)},E}(l.K);const u=null},1117:(L,R,v)=>{v.d(R,{Bi:()=>f,Xe:()=>p,a9:()=>S});/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function f(e,d,a){return d(e,{initialFocusEl:a})}function S(e){return e?e.scrollHeight>e.offsetHeight:!1}function l(e){return e?e.scrollTop===0:!1}function c(e){return e?Math.ceil(e.scrollHeight-e.scrollTop)===e.clientHeight:!1}function p(e){var d=new Set;return[].forEach.call(e,function(a){return d.add(a.offsetTop)}),d.size>1}},8569:(L,R,v)=>{v.d(R,{xQ:()=>l});/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f;(function(p){p.POLITE="polite",p.ASSERTIVE="assertive"})(f||(f={}));var S="data-mdc-dom-announce";function l(p,e){c.getInstance().say(p,e)}var c=function(){function p(){this.liveRegions=new Map}return p.getInstance=function(){return p.instance||(p.instance=new p),p.instance},p.prototype.say=function(e,d){var a,u,T=(a=d==null?void 0:d.priority)!==null&&a!==void 0?a:f.POLITE,E=(u=d==null?void 0:d.ownerDocument)!==null&&u!==void 0?u:document,n=this.getLiveRegion(T,E);n.textContent="",setTimeout(function(){n.textContent=e,E.addEventListener("click",i)},1);function i(){n.textContent="",E.removeEventListener("click",i)}},p.prototype.getLiveRegion=function(e,d){var a=this.liveRegions.get(d);a||(a=new Map,this.liveRegions.set(d,a));var u=a.get(e);if(u&&d.body.contains(u))return u;var T=this.createLiveRegion(e,d);return a.set(e,T),T},p.prototype.createLiveRegion=function(e,d){var a=d.createElement("div");return a.style.position="absolute",a.style.top="-9999px",a.style.left="-9999px",a.style.height="1px",a.style.overflow="hidden",a.setAttribute("aria-atomic","true"),a.setAttribute("aria-live",e),a.setAttribute(S,"true"),d.body.appendChild(a),a},p}()},6121:(L,R,v)=>{v.d(R,{K:()=>f});/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function f(l){return l===void 0&&(l=window),S(l)?{passive:!0}:!1}function S(l){l===void 0&&(l=window);var c=!1;try{var p={get passive(){return c=!0,!1}},e=function(){};l.document.addEventListener("test",e,p),l.document.removeEventListener("test",e,p)}catch{c=!1}return c}},8071:(L,R,v)=>{v.d(R,{i:()=>S});/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f="mdc-dom-focus-sentinel",S=function(){function l(c,p){p===void 0&&(p={}),this.root=c,this.options=p,this.elFocusedBeforeTrapFocus=null}return l.prototype.trapFocus=function(){var c=this.getFocusableElements(this.root);if(c.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(c,this.options.initialFocusEl)},l.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+f)).forEach(function(c){c.parentElement.removeChild(c)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},l.prototype.wrapTabFocus=function(c){var p=this,e=this.createSentinel(),d=this.createSentinel();e.addEventListener("focus",function(){var a=p.getFocusableElements(c);a.length>0&&a[a.length-1].focus()}),d.addEventListener("focus",function(){var a=p.getFocusableElements(c);a.length>0&&a[0].focus()}),c.insertBefore(e,c.children[0]),c.appendChild(d)},l.prototype.focusInitialElement=function(c,p){var e=0;p&&(e=Math.max(c.indexOf(p),0)),c[e].focus()},l.prototype.getFocusableElements=function(c){var p=[].slice.call(c.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return p.filter(function(e){var d=e.getAttribute("aria-disabled")==="true"||e.getAttribute("disabled")!=null||e.getAttribute("hidden")!=null||e.getAttribute("aria-hidden")==="true",a=e.tabIndex>=0&&e.getBoundingClientRect().width>0&&!e.classList.contains(f)&&!d,u=!1;if(a){var T=getComputedStyle(e);u=T.display==="none"||T.visibility==="hidden"}return a&&!u})},l.prototype.createSentinel=function(){var c=document.createElement("div");return c.setAttribute("tabindex","0"),c.setAttribute("aria-hidden","true"),c.classList.add(f),c},l}()},6285:(L,R,v)=>{v.d(R,{Fn:()=>f,ku:()=>e,tI:()=>d});/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},S=new Set;S.add(f.BACKSPACE),S.add(f.ENTER),S.add(f.SPACEBAR),S.add(f.PAGE_UP),S.add(f.PAGE_DOWN),S.add(f.END),S.add(f.HOME),S.add(f.ARROW_LEFT),S.add(f.ARROW_UP),S.add(f.ARROW_RIGHT),S.add(f.ARROW_DOWN),S.add(f.DELETE),S.add(f.ESCAPE),S.add(f.TAB);var l={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},c=new Map;c.set(l.BACKSPACE,f.BACKSPACE),c.set(l.ENTER,f.ENTER),c.set(l.SPACEBAR,f.SPACEBAR),c.set(l.PAGE_UP,f.PAGE_UP),c.set(l.PAGE_DOWN,f.PAGE_DOWN),c.set(l.END,f.END),c.set(l.HOME,f.HOME),c.set(l.ARROW_LEFT,f.ARROW_LEFT),c.set(l.ARROW_UP,f.ARROW_UP),c.set(l.ARROW_RIGHT,f.ARROW_RIGHT),c.set(l.ARROW_DOWN,f.ARROW_DOWN),c.set(l.DELETE,f.DELETE),c.set(l.ESCAPE,f.ESCAPE),c.set(l.TAB,f.TAB);var p=new Set;p.add(f.PAGE_UP),p.add(f.PAGE_DOWN),p.add(f.END),p.add(f.HOME),p.add(f.ARROW_LEFT),p.add(f.ARROW_UP),p.add(f.ARROW_RIGHT),p.add(f.ARROW_DOWN);function e(a){var u=a.key;if(S.has(u))return u;var T=c.get(a.keyCode);return T||f.UNKNOWN}function d(a){return p.has(e(a))}},5319:(L,R,v)=>{v.d(R,{oq:()=>f,wB:()=>S});/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function f(c,p){if(c.closest)return c.closest(p);for(var e=c;e;){if(S(e,p))return e;e=e.parentElement}return null}function S(c,p){var e=c.matches||c.webkitMatchesSelector||c.msMatchesSelector;return e.call(c,p)}function l(c){var p=c;if(p.offsetParent!==null)return p.scrollWidth;var e=p.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);var d=e.scrollWidth;return document.documentElement.removeChild(e),d}},2767:(L,R,v)=>{v.d(R,{i:()=>p});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},c={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p=function(d){(0,f.ZT)(a,d);function a(u){var T=d.call(this,(0,f.pi)((0,f.pi)({},a.defaultAdapter),u))||this;return T.animationFrame=0,T.animationTimer=0,T}return Object.defineProperty(a,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(a,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),a.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},a.prototype.open=function(){var u=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(l.OPEN),this.adapter.addClass(l.ANIMATE),this.runNextAnimationFrame(function(){u.adapter.addClass(l.OPENING)}),this.adapter.saveFocus())},a.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(l.CLOSING)},a.prototype.isOpen=function(){return this.adapter.hasClass(l.OPEN)},a.prototype.isOpening=function(){return this.adapter.hasClass(l.OPENING)||this.adapter.hasClass(l.ANIMATE)},a.prototype.isClosing=function(){return this.adapter.hasClass(l.CLOSING)},a.prototype.handleKeydown=function(u){var T=u.keyCode,E=u.key,n=E==="Escape"||T===27;n&&this.close()},a.prototype.handleTransitionEnd=function(u){var T=l.OPENING,E=l.CLOSING,n=l.OPEN,i=l.ANIMATE,t=l.ROOT,r=this.isElement(u.target)&&this.adapter.elementHasClass(u.target,t);!r||(this.isClosing()?(this.adapter.removeClass(n),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(i),this.adapter.removeClass(T),this.adapter.removeClass(E))},a.prototype.opened=function(){},a.prototype.closed=function(){},a.prototype.runNextAnimationFrame=function(u){var T=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){T.animationFrame=0,clearTimeout(T.animationTimer),T.animationTimer=setTimeout(u,0)})},a.prototype.isElement=function(u){return Boolean(u.classList)},a}(S.K);const e=null},8e3:(L,R,v)=>{v.d(R,{K:()=>l});var f=v(5500),S=v(2767);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(p){(0,f.ZT)(e,p);function e(){return p!==null&&p.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(S.i),c=null},7533:(L,R,v)=>{v.d(R,{B:()=>f});/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function f(S,l){return l(S,{skipInitialFocus:!0})}},6991:(L,R,v)=>{v.d(R,{T:()=>c});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c=function(e){(0,f.ZT)(d,e);function d(a){var u=e.call(this,(0,f.pi)((0,f.pi)({},d.defaultAdapter),a))||this;return u.shakeAnimationEndHandler=function(){u.handleShakeAnimationEnd()},u}return Object.defineProperty(d,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(d,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),d.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},d.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},d.prototype.getWidth=function(){return this.adapter.getWidth()},d.prototype.shake=function(a){var u=d.cssClasses.LABEL_SHAKE;a?this.adapter.addClass(u):this.adapter.removeClass(u)},d.prototype.float=function(a){var u=d.cssClasses,T=u.LABEL_FLOAT_ABOVE,E=u.LABEL_SHAKE;a?this.adapter.addClass(T):(this.adapter.removeClass(T),this.adapter.removeClass(E))},d.prototype.setRequired=function(a){var u=d.cssClasses.LABEL_REQUIRED;a?this.adapter.addClass(u):this.adapter.removeClass(u)},d.prototype.handleShakeAnimationEnd=function(){var a=d.cssClasses.LABEL_SHAKE;this.adapter.removeClass(a)},d}(S.K);const p=null},119:(L,R,v)=>{v.d(R,{Z:()=>p});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={ROOT:"mdc-form-field"},c={LABEL_SELECTOR:".mdc-form-field > label"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p=function(d){(0,f.ZT)(a,d);function a(u){var T=d.call(this,(0,f.pi)((0,f.pi)({},a.defaultAdapter),u))||this;return T.click=function(){T.handleClick()},T}return Object.defineProperty(a,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),a.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},a.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},a.prototype.handleClick=function(){var u=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){u.adapter.deactivateInputRipple()})},a}(S.K);const e=null},1959:(L,R,v)=>{v.d(R,{l:()=>p});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},c={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p=function(d){(0,f.ZT)(a,d);function a(u){var T=d.call(this,(0,f.pi)((0,f.pi)({},a.defaultAdapter),u))||this;return T.hasToggledAriaLabel=!1,T}return Object.defineProperty(a,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),a.prototype.init=function(){var u=this.adapter.getAttr(c.DATA_ARIA_LABEL_ON),T=this.adapter.getAttr(c.DATA_ARIA_LABEL_OFF);if(u&&T){if(this.adapter.getAttr(c.ARIA_PRESSED)!==null)throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(c.ARIA_PRESSED,String(this.isOn()))},a.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},a.prototype.isOn=function(){return this.adapter.hasClass(l.ICON_BUTTON_ON)},a.prototype.toggle=function(u){if(u===void 0&&(u=!this.isOn()),u?this.adapter.addClass(l.ICON_BUTTON_ON):this.adapter.removeClass(l.ICON_BUTTON_ON),this.hasToggledAriaLabel){var T=u?this.adapter.getAttr(c.DATA_ARIA_LABEL_ON):this.adapter.getAttr(c.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(c.ARIA_LABEL,T||"")}else this.adapter.setAttr(c.ARIA_PRESSED,""+u)},a}(S.K);const e=null},1151:(L,R,v)=>{v.d(R,{X:()=>c});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c=function(e){(0,f.ZT)(d,e);function d(a){var u=e.call(this,(0,f.pi)((0,f.pi)({},d.defaultAdapter),a))||this;return u.transitionEndHandler=function(T){u.handleTransitionEnd(T)},u}return Object.defineProperty(d,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(d,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),d.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},d.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},d.prototype.activate=function(){this.adapter.removeClass(l.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(l.LINE_RIPPLE_ACTIVE)},d.prototype.setRippleCenter=function(a){this.adapter.setStyle("transform-origin",a+"px center")},d.prototype.deactivate=function(){this.adapter.addClass(l.LINE_RIPPLE_DEACTIVATING)},d.prototype.handleTransitionEnd=function(a){var u=this.adapter.hasClass(l.LINE_RIPPLE_DEACTIVATING);a.propertyName==="opacity"&&u&&(this.adapter.removeClass(l.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(l.LINE_RIPPLE_DEACTIVATING))},d}(S.K);const p=null},1087:(L,R,v)=>{v.d(R,{l:()=>d});var f=v(5500),S=v(8604),l=v(3264);/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},p={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},e={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var d=function(u){(0,f.ZT)(T,u);function T(E){var n=u.call(this,(0,f.pi)((0,f.pi)({},T.defaultAdapter),E))||this;return n.observer=null,n}return Object.defineProperty(T,"cssClasses",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(T,"strings",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(T,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),T.prototype.init=function(){var E=this;this.determinate=!this.adapter.hasClass(c.INDETERMINATE_CLASS),this.adapter.addClass(c.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(n){var i,t;if(!E.determinate)try{for(var r=(0,f.XA)(n),o=r.next();!o.done;o=r.next()){var h=o.value;h.contentRect&&E.calculateAndSetDimensions(h.contentRect.width)}}catch(C){i={error:C}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(i)throw i.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},T.prototype.setDeterminate=function(E){if(this.determinate=E,this.determinate){this.adapter.removeClass(c.INDETERMINATE_CLASS),this.adapter.setAttribute(p.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(p.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(p.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),this.setBufferBarProgress(this.buffer);return}this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(c.INDETERMINATE_CLASS),this.adapter.removeAttribute(p.ARIA_VALUENOW),this.adapter.removeAttribute(p.ARIA_VALUEMAX),this.adapter.removeAttribute(p.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},T.prototype.isDeterminate=function(){return this.determinate},T.prototype.setProgress=function(E){this.progress=E,this.determinate&&(this.setPrimaryBarProgress(E),this.adapter.setAttribute(p.ARIA_VALUENOW,E.toString()))},T.prototype.getProgress=function(){return this.progress},T.prototype.setBuffer=function(E){this.buffer=E,this.determinate&&this.setBufferBarProgress(E)},T.prototype.getBuffer=function(){return this.buffer},T.prototype.open=function(){this.adapter.removeClass(c.CLOSED_CLASS),this.adapter.removeClass(c.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(p.ARIA_HIDDEN)},T.prototype.close=function(){this.adapter.addClass(c.CLOSED_CLASS),this.adapter.setAttribute(p.ARIA_HIDDEN,"true")},T.prototype.isClosed=function(){return this.adapter.hasClass(c.CLOSED_CLASS)},T.prototype.handleTransitionEnd=function(){this.adapter.hasClass(c.CLOSED_CLASS)&&this.adapter.addClass(c.CLOSED_ANIMATION_OFF_CLASS)},T.prototype.destroy=function(){u.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},T.prototype.restartAnimation=function(){this.adapter.removeClass(c.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(c.ANIMATION_READY_CLASS)},T.prototype.setPrimaryBarProgress=function(E){var n="scaleX("+E+")",i=typeof window!="undefined"?(0,S.E)(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(i,n)},T.prototype.setBufferBarProgress=function(E){var n=E*100+"%";this.adapter.setBufferBarStyle(p.FLEX_BASIS,n)},T.prototype.calculateAndSetDimensions=function(E){var n=E*e.PRIMARY_HALF,i=E*e.PRIMARY_FULL,t=E*e.SECONDARY_QUARTER,r=E*e.SECONDARY_HALF,o=E*e.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",i+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-i+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",t+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-t+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-o+"px"),this.restartAnimation()},T}(l.K);const a=null},6217:(L,R,v)=>{v.d(R,{KT:()=>d,UX:()=>l,j2:()=>e});/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f,S,l={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"},c=(f={},f[""+l.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",f[""+l.LIST_ITEM_CLASS]="mdc-list-item",f[""+l.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",f[""+l.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",f[""+l.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",f[""+l.ROOT]="mdc-list",f),p=(S={},S[""+l.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",S[""+l.LIST_ITEM_CLASS]="mdc-deprecated-list-item",S[""+l.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",S[""+l.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",S[""+l.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",S[""+l.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",S[""+l.ROOT]="mdc-deprecated-list",S),e={ACTION_EVENT:"MDCList:action",SELECTION_CHANGE_EVENT:"MDCList:selectionChange",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+l.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+l.LIST_ITEM_CLASS+` a,
    .`+p[l.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+p[l.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+l.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+l.LIST_ITEM_CLASS+` a,
    .`+l.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+l.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+p[l.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+p[l.LIST_ITEM_CLASS]+` a,
    .`+p[l.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+p[l.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},d={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300},a="evolution"},2598:(L,R,v)=>{v.d(R,{I:()=>C});var f=v(5500),S=v(3264),l=v(6285),c=v(6217);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p=["input","button","textarea","select"],e=function(A){var m=A.target;if(!!m){var s=(""+m.tagName).toLowerCase();p.indexOf(s)===-1&&A.preventDefault()}};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function d(){var A={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return A}function a(A,m){for(var s=new Map,I=0;I<A;I++){var _=m(I).trim();if(!!_){var y=_[0].toLowerCase();s.has(y)||s.set(y,[]),s.get(y).push({text:_.toLowerCase(),index:I})}}return s.forEach(function(D){D.sort(function(O,b){return O.index-b.index})}),s}function u(A,m){var s=A.nextChar,I=A.focusItemAtIndex,_=A.sortedIndexByFirstChar,y=A.focusedItemIndex,D=A.skipFocus,O=A.isItemAtIndexDisabled;clearTimeout(m.bufferClearTimeout),m.bufferClearTimeout=setTimeout(function(){i(m)},c.KT.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),m.typeaheadBuffer=m.typeaheadBuffer+s;var b;return m.typeaheadBuffer.length===1?b=T(_,y,O,m):b=E(_,O,m),b!==-1&&!D&&I(b),b}function T(A,m,s,I){var _=I.typeaheadBuffer[0],y=A.get(_);if(!y)return-1;if(_===I.currentFirstChar&&y[I.sortedIndexCursor].index===m){I.sortedIndexCursor=(I.sortedIndexCursor+1)%y.length;var D=y[I.sortedIndexCursor].index;if(!s(D))return D}I.currentFirstChar=_;var O=-1,b;for(b=0;b<y.length;b++)if(!s(y[b].index)){O=b;break}for(;b<y.length;b++)if(y[b].index>m&&!s(y[b].index)){O=b;break}return O!==-1?(I.sortedIndexCursor=O,y[I.sortedIndexCursor].index):-1}function E(A,m,s){var I=s.typeaheadBuffer[0],_=A.get(I);if(!_)return-1;var y=_[s.sortedIndexCursor];if(y.text.lastIndexOf(s.typeaheadBuffer,0)===0&&!m(y.index))return y.index;for(var D=(s.sortedIndexCursor+1)%_.length,O=-1;D!==s.sortedIndexCursor;){var b=_[D],M=b.text.lastIndexOf(s.typeaheadBuffer,0)===0,F=!m(b.index);if(M&&F){O=D;break}D=(D+1)%_.length}return O!==-1?(s.sortedIndexCursor=O,_[s.sortedIndexCursor].index):-1}function n(A){return A.typeaheadBuffer.length>0}function i(A){A.typeaheadBuffer=""}function t(A,m){var s=A.event,I=A.isTargetListItem,_=A.focusedItemIndex,y=A.focusItemAtIndex,D=A.sortedIndexByFirstChar,O=A.isItemAtIndexDisabled,b=(0,l.ku)(s)==="ArrowLeft",M=(0,l.ku)(s)==="ArrowUp",F=(0,l.ku)(s)==="ArrowRight",x=(0,l.ku)(s)==="ArrowDown",N=(0,l.ku)(s)==="Home",H=(0,l.ku)(s)==="End",B=(0,l.ku)(s)==="Enter",P=(0,l.ku)(s)==="Spacebar";if(s.altKey||s.ctrlKey||s.metaKey||b||M||F||x||N||H||B)return-1;var K=!P&&s.key.length===1;if(K){e(s);var V={focusItemAtIndex:y,focusedItemIndex:_,nextChar:s.key.toLowerCase(),sortedIndexByFirstChar:D,skipFocus:!1,isItemAtIndexDisabled:O};return u(V,m)}if(!P)return-1;I&&e(s);var U=I&&n(m);if(U){var V={focusItemAtIndex:y,focusedItemIndex:_,nextChar:" ",sortedIndexByFirstChar:D,skipFocus:!1,isItemAtIndexDisabled:O};return u(V,m)}return-1}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function r(A){return A instanceof Array}var o=["Alt","Control","Meta","Shift"];function h(A){var m=new Set(A?o.filter(function(s){return A.getModifierState(s)}):[]);return function(s){return s.every(function(I){return m.has(I)})&&s.length===m.size}}var C=function(A){(0,f.ZT)(m,A);function m(s){var I=A.call(this,(0,f.pi)((0,f.pi)({},m.defaultAdapter),s))||this;return I.wrapFocus=!1,I.isVertical=!0,I.isSingleSelectionList=!1,I.areDisabledItemsFocusable=!0,I.selectedIndex=c.KT.UNSET_INDEX,I.focusedItemIndex=c.KT.UNSET_INDEX,I.useActivatedClass=!1,I.useSelectedAttr=!1,I.ariaCurrentAttrValue=null,I.isCheckboxList=!1,I.isRadioList=!1,I.lastSelectedIndex=null,I.hasTypeahead=!1,I.typeaheadState=d(),I.sortedIndexByFirstChar=new Map,I}return Object.defineProperty(m,"strings",{get:function(){return c.j2},enumerable:!1,configurable:!0}),Object.defineProperty(m,"cssClasses",{get:function(){return c.UX},enumerable:!1,configurable:!0}),Object.defineProperty(m,"numbers",{get:function(){return c.KT},enumerable:!1,configurable:!0}),Object.defineProperty(m,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},notifySelectionChange:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),m.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},m.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},m.prototype.setWrapFocus=function(s){this.wrapFocus=s},m.prototype.setVerticalOrientation=function(s){this.isVertical=s},m.prototype.setSingleSelection=function(s){this.isSingleSelectionList=s,s&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},m.prototype.setDisabledItemsFocusable=function(s){this.areDisabledItemsFocusable=s},m.prototype.maybeInitializeSingleSelection=function(){var s=this.getSelectedIndexFromDOM();if(s!==c.KT.UNSET_INDEX){var I=this.adapter.listItemAtIndexHasClass(s,c.UX.LIST_ITEM_ACTIVATED_CLASS);I&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=s}},m.prototype.getSelectedIndexFromDOM=function(){for(var s=c.KT.UNSET_INDEX,I=this.adapter.getListItemCount(),_=0;_<I;_++){var y=this.adapter.listItemAtIndexHasClass(_,c.UX.LIST_ITEM_SELECTED_CLASS),D=this.adapter.listItemAtIndexHasClass(_,c.UX.LIST_ITEM_ACTIVATED_CLASS);if(!!(y||D)){s=_;break}}return s},m.prototype.setHasTypeahead=function(s){this.hasTypeahead=s,s&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},m.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&n(this.typeaheadState)},m.prototype.setUseActivatedClass=function(s){this.useActivatedClass=s},m.prototype.setUseSelectedAttribute=function(s){this.useSelectedAttr=s},m.prototype.getSelectedIndex=function(){return this.selectedIndex},m.prototype.setSelectedIndex=function(s,I){I===void 0&&(I={}),this.isIndexValid(s)&&(this.isCheckboxList?this.setCheckboxAtIndex(s,I):this.isRadioList?this.setRadioAtIndex(s,I):this.setSingleSelectionAtIndex(s,I))},m.prototype.handleFocusIn=function(s){s>=0&&(this.focusedItemIndex=s,this.adapter.setAttributeForElementIndex(s,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(s,"0"))},m.prototype.handleFocusOut=function(s){var I=this;s>=0&&(this.adapter.setAttributeForElementIndex(s,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(s,"-1")),setTimeout(function(){I.adapter.isFocusInsideList()||I.setTabindexToFirstSelectedOrFocusedItem()},0)},m.prototype.isIndexDisabled=function(s){return this.adapter.listItemAtIndexHasClass(s,c.UX.LIST_ITEM_DISABLED_CLASS)},m.prototype.handleKeydown=function(s,I,_){var y=this,D,O=(0,l.ku)(s)==="ArrowLeft",b=(0,l.ku)(s)==="ArrowUp",M=(0,l.ku)(s)==="ArrowRight",F=(0,l.ku)(s)==="ArrowDown",x=(0,l.ku)(s)==="Home",N=(0,l.ku)(s)==="End",H=(0,l.ku)(s)==="Enter",B=(0,l.ku)(s)==="Spacebar",P=this.isVertical&&F||!this.isVertical&&M,K=this.isVertical&&b||!this.isVertical&&O,V=s.key==="A"||s.key==="a",U=h(s);if(this.adapter.isRootFocused()){if((K||N)&&U([]))s.preventDefault(),this.focusLastElement();else if((P||x)&&U([]))s.preventDefault(),this.focusFirstElement();else if(K&&U(["Shift"])&&this.isCheckboxList){s.preventDefault();var k=this.focusLastElement();k!==-1&&this.setSelectedIndexOnAction(k,!1)}else if(P&&U(["Shift"])&&this.isCheckboxList){s.preventDefault();var k=this.focusFirstElement();k!==-1&&this.setSelectedIndexOnAction(k,!1)}if(this.hasTypeahead){var G={event:s,focusItemAtIndex:function(X){y.focusItemAtIndex(X)},focusedItemIndex:-1,isTargetListItem:I,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(X){return y.isIndexDisabled(X)}};t(G,this.typeaheadState)}return}var w=this.adapter.getFocusedElementIndex();if(!(w===-1&&(w=_,w<0))){if(P&&U([]))e(s),this.focusNextElement(w);else if(K&&U([]))e(s),this.focusPrevElement(w);else if(P&&U(["Shift"])&&this.isCheckboxList){e(s);var k=this.focusNextElement(w);k!==-1&&this.setSelectedIndexOnAction(k,!1)}else if(K&&U(["Shift"])&&this.isCheckboxList){e(s);var k=this.focusPrevElement(w);k!==-1&&this.setSelectedIndexOnAction(k,!1)}else if(x&&U([]))e(s),this.focusFirstElement();else if(N&&U([]))e(s),this.focusLastElement();else if(x&&U(["Control","Shift"])&&this.isCheckboxList){if(e(s),this.isIndexDisabled(w))return;this.focusFirstElement(),this.toggleCheckboxRange(0,w,w)}else if(N&&U(["Control","Shift"])&&this.isCheckboxList){if(e(s),this.isIndexDisabled(w))return;this.focusLastElement(),this.toggleCheckboxRange(w,this.adapter.getListItemCount()-1,w)}else if(V&&U(["Control"])&&this.isCheckboxList)s.preventDefault(),this.checkboxListToggleAll(this.selectedIndex===c.KT.UNSET_INDEX?[]:this.selectedIndex,!0);else if((H||B)&&U([])){if(I){var W=s.target;if(W&&W.tagName==="A"&&H||(e(s),this.isIndexDisabled(w)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(w,!1),this.adapter.notifyAction(w))}}else if((H||B)&&U(["Shift"])&&this.isCheckboxList){var W=s.target;if(W&&W.tagName==="A"&&H||(e(s),this.isIndexDisabled(w)))return;this.isTypeaheadInProgress()||(this.toggleCheckboxRange((D=this.lastSelectedIndex)!==null&&D!==void 0?D:w,w,w),this.adapter.notifyAction(w))}if(this.hasTypeahead){var G={event:s,focusItemAtIndex:function(j){y.focusItemAtIndex(j)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:I,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(j){return y.isIndexDisabled(j)}};t(G,this.typeaheadState)}}},m.prototype.handleClick=function(s,I,_){var y,D=h(_);s!==c.KT.UNSET_INDEX&&(this.isIndexDisabled(s)||(D([])?(this.isSelectableList()&&this.setSelectedIndexOnAction(s,I),this.adapter.notifyAction(s)):this.isCheckboxList&&D(["Shift"])&&(this.toggleCheckboxRange((y=this.lastSelectedIndex)!==null&&y!==void 0?y:s,s,s),this.adapter.notifyAction(s))))},m.prototype.focusNextElement=function(s){var I=this.adapter.getListItemCount(),_=s,y=null;do{if(_++,_>=I)if(this.wrapFocus)_=0;else return s;if(_===y)return-1;y=y!=null?y:_}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(_));return this.focusItemAtIndex(_),_},m.prototype.focusPrevElement=function(s){var I=this.adapter.getListItemCount(),_=s,y=null;do{if(_--,_<0)if(this.wrapFocus)_=I-1;else return s;if(_===y)return-1;y=y!=null?y:_}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(_));return this.focusItemAtIndex(_),_},m.prototype.focusFirstElement=function(){return this.focusNextElement(-1)},m.prototype.focusLastElement=function(){return this.focusPrevElement(this.adapter.getListItemCount())},m.prototype.focusInitialElement=function(){var s=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(s),s},m.prototype.setEnabled=function(s,I){!this.isIndexValid(s,!1)||(I?(this.adapter.removeClassForElementIndex(s,c.UX.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(s,c.j2.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(s,c.UX.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(s,c.j2.ARIA_DISABLED,"true")))},m.prototype.setSingleSelectionAtIndex=function(s,I){if(I===void 0&&(I={}),!(this.selectedIndex===s&&!I.forceUpdate)){var _=c.UX.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(_=c.UX.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==c.KT.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,_),this.setAriaForSingleSelectionAtIndex(s),this.setTabindexAtIndex(s),s!==c.KT.UNSET_INDEX&&this.adapter.addClassForElementIndex(s,_),this.selectedIndex=s,I.isUserInteraction&&!I.forceUpdate&&this.adapter.notifySelectionChange([s])}},m.prototype.setAriaForSingleSelectionAtIndex=function(s){this.selectedIndex===c.KT.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(s,c.j2.ARIA_CURRENT));var I=this.ariaCurrentAttrValue!==null,_=I?c.j2.ARIA_CURRENT:c.j2.ARIA_SELECTED;if(this.selectedIndex!==c.KT.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,_,"false"),s!==c.KT.UNSET_INDEX){var y=I?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(s,_,y)}},m.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?c.j2.ARIA_SELECTED:c.j2.ARIA_CHECKED},m.prototype.setRadioAtIndex=function(s,I){I===void 0&&(I={});var _=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(s,!0),!(this.selectedIndex===s&&!I.forceUpdate)&&(this.selectedIndex!==c.KT.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,_,"false"),this.adapter.setAttributeForElementIndex(s,_,"true"),this.selectedIndex=s,I.isUserInteraction&&!I.forceUpdate&&this.adapter.notifySelectionChange([s]))},m.prototype.setCheckboxAtIndex=function(s,I){I===void 0&&(I={});for(var _=this.selectedIndex,y=I.isUserInteraction?new Set(_===c.KT.UNSET_INDEX?[]:_):null,D=this.getSelectionAttribute(),O=[],b=0;b<this.adapter.getListItemCount();b++){var M=y==null?void 0:y.has(b),F=s.indexOf(b)>=0;F!==M&&O.push(b),this.adapter.setCheckedCheckboxOrRadioAtIndex(b,F),this.adapter.setAttributeForElementIndex(b,D,F?"true":"false")}this.selectedIndex=s,I.isUserInteraction&&O.length&&this.adapter.notifySelectionChange(O)},m.prototype.toggleCheckboxRange=function(s,I,_){this.lastSelectedIndex=_;for(var y=new Set(this.selectedIndex===c.KT.UNSET_INDEX?[]:this.selectedIndex),D=!(y!=null&&y.has(_)),O=(0,f.CR)([s,I].sort(),2),b=O[0],M=O[1],F=this.getSelectionAttribute(),x=[],N=b;N<=M;N++)if(!this.isIndexDisabled(N)){var H=y.has(N);D!==H&&(x.push(N),this.adapter.setCheckedCheckboxOrRadioAtIndex(N,D),this.adapter.setAttributeForElementIndex(N,F,""+D),D?y.add(N):y.delete(N))}x.length&&(this.selectedIndex=(0,f.ev)([],(0,f.CR)(y)),this.adapter.notifySelectionChange(x))},m.prototype.setTabindexAtIndex=function(s){this.focusedItemIndex===c.KT.UNSET_INDEX&&s!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==s&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==s&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),s!==c.KT.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(s,"tabindex","0")},m.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},m.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var s=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(s)},m.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==c.KT.UNSET_INDEX?this.selectedIndex:r(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(s,I){return Math.min(s,I)}):0:Math.max(this.focusedItemIndex,0)},m.prototype.isIndexValid=function(s,I){var _=this;if(I===void 0&&(I=!0),s instanceof Array){if(!this.isCheckboxList&&I)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return s.length===0?!0:s.some(function(y){return _.isIndexInRange(y)})}else if(typeof s=="number"){if(this.isCheckboxList&&I)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+s);return this.isIndexInRange(s)||this.isSingleSelectionList&&s===c.KT.UNSET_INDEX}else return!1},m.prototype.isIndexInRange=function(s){var I=this.adapter.getListItemCount();return s>=0&&s<I},m.prototype.setSelectedIndexOnAction=function(s,I){this.lastSelectedIndex=s,this.isCheckboxList?(this.toggleCheckboxAtIndex(s,I),this.adapter.notifySelectionChange([s])):this.setSelectedIndex(s,{isUserInteraction:!0})},m.prototype.toggleCheckboxAtIndex=function(s,I){var _=this.getSelectionAttribute(),y=this.adapter.isCheckboxCheckedAtIndex(s),D;I?D=y:(D=!y,this.adapter.setCheckedCheckboxOrRadioAtIndex(s,D)),this.adapter.setAttributeForElementIndex(s,_,D?"true":"false");var O=this.selectedIndex===c.KT.UNSET_INDEX?[]:this.selectedIndex.slice();D?O.push(s):O=O.filter(function(b){return b!==s}),this.selectedIndex=O},m.prototype.focusItemAtIndex=function(s){this.adapter.focusItemAtIndex(s),this.focusedItemIndex=s},m.prototype.checkboxListToggleAll=function(s,I){var _=this.adapter.getListItemCount();if(s.length===_)this.setCheckboxAtIndex([],{isUserInteraction:I});else{for(var y=[],D=0;D<_;D++)(!this.isIndexDisabled(D)||s.indexOf(D)>-1)&&y.push(D);this.setCheckboxAtIndex(y,{isUserInteraction:I})}},m.prototype.typeaheadMatchItem=function(s,I,_){var y=this;_===void 0&&(_=!1);var D={focusItemAtIndex:function(O){y.focusItemAtIndex(O)},focusedItemIndex:I||this.focusedItemIndex,nextChar:s,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:_,isItemAtIndexDisabled:function(O){return y.isIndexDisabled(O)}};return u(D,this.typeaheadState)},m.prototype.typeaheadInitSortedIndex=function(){return a(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},m.prototype.clearTypeaheadBuffer=function(){i(this.typeaheadState)},m}(S.K);const g=null},4818:(L,R,v)=>{v.d(R,{HX:()=>c,KT:()=>l,Ns:()=>p,UX:()=>f,j2:()=>S});/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},S={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",OPENING_EVENT:"MDCMenuSurface:opening",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},l={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},c;(function(e){e[e.BOTTOM=1]="BOTTOM",e[e.CENTER=2]="CENTER",e[e.RIGHT=4]="RIGHT",e[e.FLIP_RTL=8]="FLIP_RTL"})(c||(c={}));var p;(function(e){e[e.TOP_LEFT=0]="TOP_LEFT",e[e.TOP_RIGHT=4]="TOP_RIGHT",e[e.BOTTOM_LEFT=1]="BOTTOM_LEFT",e[e.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",e[e.TOP_START=8]="TOP_START",e[e.TOP_END=12]="TOP_END",e[e.BOTTOM_START=9]="BOTTOM_START",e[e.BOTTOM_END=13]="BOTTOM_END"})(p||(p={}))},4375:(L,R,v)=>{v.d(R,{k:()=>c});var f=v(5500),S=v(3264),l=v(4818);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c=function(e){(0,f.ZT)(d,e);function d(a){var u=e.call(this,(0,f.pi)((0,f.pi)({},d.defaultAdapter),a))||this;return u.isSurfaceOpen=!1,u.isQuickOpen=!1,u.isHoistedElement=!1,u.isFixedPosition=!1,u.isHorizontallyCenteredOnViewport=!1,u.maxHeight=0,u.openBottomBias=0,u.openAnimationEndTimerId=0,u.closeAnimationEndTimerId=0,u.animationRequestId=0,u.anchorCorner=l.Ns.TOP_START,u.originCorner=l.Ns.TOP_START,u.anchorMargin={top:0,right:0,bottom:0,left:0},u.position={x:0,y:0},u}return Object.defineProperty(d,"cssClasses",{get:function(){return l.UX},enumerable:!1,configurable:!0}),Object.defineProperty(d,"strings",{get:function(){return l.j2},enumerable:!1,configurable:!0}),Object.defineProperty(d,"numbers",{get:function(){return l.KT},enumerable:!1,configurable:!0}),Object.defineProperty(d,"Corner",{get:function(){return l.Ns},enumerable:!1,configurable:!0}),Object.defineProperty(d,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyClosing:function(){},notifyOpen:function(){},notifyOpening:function(){}}},enumerable:!1,configurable:!0}),d.prototype.init=function(){var a=d.cssClasses,u=a.ROOT,T=a.OPEN;if(!this.adapter.hasClass(u))throw new Error(u+" class required in root element.");this.adapter.hasClass(T)&&(this.isSurfaceOpen=!0)},d.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},d.prototype.setAnchorCorner=function(a){this.anchorCorner=a},d.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^l.HX.RIGHT},d.prototype.setAnchorMargin=function(a){this.anchorMargin.top=a.top||0,this.anchorMargin.right=a.right||0,this.anchorMargin.bottom=a.bottom||0,this.anchorMargin.left=a.left||0},d.prototype.setIsHoisted=function(a){this.isHoistedElement=a},d.prototype.setFixedPosition=function(a){this.isFixedPosition=a},d.prototype.isFixed=function(){return this.isFixedPosition},d.prototype.setAbsolutePosition=function(a,u){this.position.x=this.isFinite(a)?a:0,this.position.y=this.isFinite(u)?u:0},d.prototype.setIsHorizontallyCenteredOnViewport=function(a){this.isHorizontallyCenteredOnViewport=a},d.prototype.setQuickOpen=function(a){this.isQuickOpen=a},d.prototype.setMaxHeight=function(a){this.maxHeight=a},d.prototype.setOpenBottomBias=function(a){this.openBottomBias=a},d.prototype.isOpen=function(){return this.isSurfaceOpen},d.prototype.open=function(){var a=this;this.isSurfaceOpen||(this.adapter.notifyOpening(),this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(d.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(d.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){a.dimensions=a.adapter.getInnerDimensions(),a.autoposition(),a.adapter.addClass(d.cssClasses.OPEN),a.openAnimationEndTimerId=setTimeout(function(){a.openAnimationEndTimerId=0,a.adapter.removeClass(d.cssClasses.ANIMATING_OPEN),a.adapter.notifyOpen()},l.KT.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},d.prototype.close=function(a){var u=this;if(a===void 0&&(a=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,a||this.maybeRestoreFocus(),this.adapter.removeClass(d.cssClasses.OPEN),this.adapter.removeClass(d.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(d.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){u.adapter.removeClass(d.cssClasses.OPEN),u.adapter.removeClass(d.cssClasses.IS_OPEN_BELOW),u.closeAnimationEndTimerId=setTimeout(function(){u.closeAnimationEndTimerId=0,u.adapter.removeClass(d.cssClasses.ANIMATING_CLOSED),u.adapter.notifyClose()},l.KT.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,a||this.maybeRestoreFocus()}},d.prototype.handleBodyClick=function(a){var u=a.target;this.adapter.isElementInContainer(u)||this.close()},d.prototype.handleKeydown=function(a){var u=a.keyCode,T=a.key,E=T==="Escape"||u===27;E&&this.close()},d.prototype.autoposition=function(){var a;this.measurements=this.getAutoLayoutmeasurements();var u=this.getoriginCorner(),T=this.getMenuSurfaceMaxHeight(u),E=this.hasBit(u,l.HX.BOTTOM)?"bottom":"top",n=this.hasBit(u,l.HX.RIGHT)?"right":"left",i=this.getHorizontalOriginOffset(u),t=this.getVerticalOriginOffset(u),r=this.measurements,o=r.anchorSize,h=r.surfaceSize,C=(a={},a[n]=i,a[E]=t,a);o.width/h.width>l.KT.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(n="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(C),this.adapter.setTransformOrigin(n+" "+E),this.adapter.setPosition(C),this.adapter.setMaxHeight(T?T+"px":""),this.hasBit(u,l.HX.BOTTOM)||this.adapter.addClass(d.cssClasses.IS_OPEN_BELOW)},d.prototype.getAutoLayoutmeasurements=function(){var a=this.adapter.getAnchorDimensions(),u=this.adapter.getBodyDimensions(),T=this.adapter.getWindowDimensions(),E=this.adapter.getWindowScroll();return a||(a={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:a,bodySize:u,surfaceSize:this.dimensions,viewportDistance:{top:a.top,right:T.width-a.right,bottom:T.height-a.bottom,left:a.left},viewportSize:T,windowScroll:E}},d.prototype.getoriginCorner=function(){var a=this.originCorner,u=this.measurements,T=u.viewportDistance,E=u.anchorSize,n=u.surfaceSize,i=d.numbers.MARGIN_TO_EDGE,t=this.hasBit(this.anchorCorner,l.HX.BOTTOM),r,o;t?(r=T.top-i+this.anchorMargin.bottom,o=T.bottom-i-this.anchorMargin.bottom):(r=T.top-i+this.anchorMargin.top,o=T.bottom-i+E.height-this.anchorMargin.top);var h=o-n.height>0;!h&&r>o+this.openBottomBias&&(a=this.setBit(a,l.HX.BOTTOM));var C=this.adapter.isRtl(),g=this.hasBit(this.anchorCorner,l.HX.FLIP_RTL),A=this.hasBit(this.anchorCorner,l.HX.RIGHT)||this.hasBit(a,l.HX.RIGHT),m=!1;C&&g?m=!A:m=A;var s,I;m?(s=T.left+E.width+this.anchorMargin.right,I=T.right-this.anchorMargin.right):(s=T.left+this.anchorMargin.left,I=T.right+E.width-this.anchorMargin.left);var _=s-n.width>0,y=I-n.width>0,D=this.hasBit(a,l.HX.FLIP_RTL)&&this.hasBit(a,l.HX.RIGHT);return y&&D&&C||!_&&D?a=this.unsetBit(a,l.HX.RIGHT):(_&&m&&C||_&&!m&&A||!y&&s>=I)&&(a=this.setBit(a,l.HX.RIGHT)),a},d.prototype.getMenuSurfaceMaxHeight=function(a){if(this.maxHeight>0)return this.maxHeight;var u=this.measurements.viewportDistance,T=0,E=this.hasBit(a,l.HX.BOTTOM),n=this.hasBit(this.anchorCorner,l.HX.BOTTOM),i=d.numbers.MARGIN_TO_EDGE;return E?(T=u.top+this.anchorMargin.top-i,n||(T+=this.measurements.anchorSize.height)):(T=u.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-i,n&&(T-=this.measurements.anchorSize.height)),T},d.prototype.getHorizontalOriginOffset=function(a){var u=this.measurements.anchorSize,T=this.hasBit(a,l.HX.RIGHT),E=this.hasBit(this.anchorCorner,l.HX.RIGHT);if(T){var n=E?u.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?n-(this.measurements.viewportSize.width-this.measurements.bodySize.width):n}return E?u.width-this.anchorMargin.right:this.anchorMargin.left},d.prototype.getVerticalOriginOffset=function(a){var u=this.measurements.anchorSize,T=this.hasBit(a,l.HX.BOTTOM),E=this.hasBit(this.anchorCorner,l.HX.BOTTOM),n=0;return T?n=E?u.height-this.anchorMargin.top:-this.anchorMargin.bottom:n=E?u.height+this.anchorMargin.bottom:this.anchorMargin.top,n},d.prototype.adjustPositionForHoistedElement=function(a){var u,T,E=this.measurements,n=E.windowScroll,i=E.viewportDistance,t=E.surfaceSize,r=E.viewportSize,o=Object.keys(a);try{for(var h=(0,f.XA)(o),C=h.next();!C.done;C=h.next()){var g=C.value,A=a[g]||0;if(this.isHorizontallyCenteredOnViewport&&(g==="left"||g==="right")){a[g]=(r.width-t.width)/2;continue}A+=i[g],this.isFixedPosition||(g==="top"?A+=n.y:g==="bottom"?A-=n.y:g==="left"?A+=n.x:A-=n.x),a[g]=A}}catch(m){u={error:m}}finally{try{C&&!C.done&&(T=h.return)&&T.call(h)}finally{if(u)throw u.error}}},d.prototype.maybeRestoreFocus=function(){var a=this,u=this.adapter.isFocused(),T=this.adapter.getOwnerDocument?this.adapter.getOwnerDocument():document,E=T.activeElement&&this.adapter.isElementInContainer(T.activeElement);(u||E)&&setTimeout(function(){a.adapter.restoreFocus()},l.KT.TOUCH_EVENT_WAIT_MS)},d.prototype.hasBit=function(a,u){return Boolean(a&u)},d.prototype.setBit=function(a,u){return a|u},d.prototype.unsetBit=function(a,u){return a^u},d.prototype.isFinite=function(a){return typeof a=="number"&&isFinite(a)},d}(S.K),p=null},4542:(L,R,v)=>{v.d(R,{b:()=>u});var f=v(5500),S=v(3264),l=v(6217),c=v(4375);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},e={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},d={FOCUS_ROOT_INDEX:-1},a;(function(E){E[E.NONE=0]="NONE",E[E.LIST_ROOT=1]="LIST_ROOT",E[E.FIRST_ITEM=2]="FIRST_ITEM",E[E.LAST_ITEM=3]="LAST_ITEM"})(a||(a={}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var u=function(E){(0,f.ZT)(n,E);function n(i){var t=E.call(this,(0,f.pi)((0,f.pi)({},n.defaultAdapter),i))||this;return t.closeAnimationEndTimerId=0,t.defaultFocusState=a.LIST_ROOT,t.selectedIndex=-1,t}return Object.defineProperty(n,"cssClasses",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return e},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),n.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},n.prototype.handleKeydown=function(i){var t=i.key,r=i.keyCode,o=t==="Tab"||r===9;o&&this.adapter.closeSurface(!0)},n.prototype.handleItemAction=function(i){var t=this,r=this.adapter.getElementIndex(i);if(!(r<0)){this.adapter.notifySelected({index:r});var o=this.adapter.getAttributeFromElementAtIndex(r,e.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(o),this.closeAnimationEndTimerId=setTimeout(function(){var h=t.adapter.getElementIndex(i);h>=0&&t.adapter.isSelectableItemAtIndex(h)&&t.setSelectedIndex(h)},c.k.numbers.TRANSITION_CLOSE_DURATION)}},n.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case a.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case a.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case a.NONE:break;default:this.adapter.focusListRoot();break}},n.prototype.setDefaultFocusState=function(i){this.defaultFocusState=i},n.prototype.getSelectedIndex=function(){return this.selectedIndex},n.prototype.setSelectedIndex=function(i){if(this.validatedIndex(i),!this.adapter.isSelectableItemAtIndex(i))throw new Error("MDCMenuFoundation: No selection group at specified index.");var t=this.adapter.getSelectedSiblingOfItemAtIndex(i);t>=0&&(this.adapter.removeAttributeFromElementAtIndex(t,e.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(t,p.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(i,p.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(i,e.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=i},n.prototype.setEnabled=function(i,t){this.validatedIndex(i),t?(this.adapter.removeClassFromElementAtIndex(i,l.UX.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(i,e.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(i,l.UX.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(i,e.ARIA_DISABLED_ATTR,"true"))},n.prototype.validatedIndex=function(i){var t=this.adapter.getMenuItemCount(),r=i>=0&&i<t;if(!r)throw new Error("MDCMenuFoundation: No list item at specified index.")},n}(S.K);const T=null},9043:(L,R,v)=>{v.d(R,{y:()=>e});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},c={NOTCH_ELEMENT_PADDING:8},p={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var e=function(a){(0,f.ZT)(u,a);function u(T){return a.call(this,(0,f.pi)((0,f.pi)({},u.defaultAdapter),T))||this}return Object.defineProperty(u,"strings",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(u,"cssClasses",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(u,"numbers",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(u,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),u.prototype.notch=function(T){var E=u.cssClasses.OUTLINE_NOTCHED;T>0&&(T+=c.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(T),this.adapter.addClass(E)},u.prototype.closeNotch=function(){var T=u.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(T),this.adapter.removeNotchWidthProperty()},u}(S.K);const d=null},3925:(L,R,v)=>{v.d(R,{s:()=>p});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},c={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p=function(d){(0,f.ZT)(a,d);function a(u){return d.call(this,(0,f.pi)((0,f.pi)({},a.defaultAdapter),u))||this}return Object.defineProperty(a,"cssClasses",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),a.prototype.setDisabled=function(u){var T=a.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(u),u?this.adapter.addClass(T):this.adapter.removeClass(T)},a}(S.K);const e=null},569:(L,R,v)=>{v.d(R,{l:()=>T});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},c={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},p={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},e=v(7985);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var d=["touchstart","pointerdown","mousedown","keydown"],a=["touchend","pointerup","mouseup","contextmenu"],u=[],T=function(n){(0,f.ZT)(i,n);function i(t){var r=n.call(this,(0,f.pi)((0,f.pi)({},i.defaultAdapter),t))||this;return r.activationAnimationHasEnded=!1,r.activationTimer=0,r.fgDeactivationRemovalTimer=0,r.fgScale="0",r.frame={width:0,height:0},r.initialSize=0,r.layoutFrame=0,r.maxRadius=0,r.unboundedCoords={left:0,top:0},r.activationState=r.defaultActivationState(),r.activationTimerCallback=function(){r.activationAnimationHasEnded=!0,r.runDeactivationUXLogicIfReady()},r.activateHandler=function(o){r.activateImpl(o)},r.deactivateHandler=function(){r.deactivateImpl()},r.focusHandler=function(){r.handleFocus()},r.blurHandler=function(){r.handleBlur()},r.resizeHandler=function(){r.layout()},r}return Object.defineProperty(i,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){var t=this,r=this.supportsPressRipple();if(this.registerRootHandlers(r),r){var o=i.cssClasses,h=o.ROOT,C=o.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(h),t.adapter.isUnbounded()&&(t.adapter.addClass(C),t.layoutInternal())})}},i.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(i.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(i.cssClasses.FG_DEACTIVATION));var r=i.cssClasses,o=r.ROOT,h=r.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(o),t.adapter.removeClass(h),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},i.prototype.activate=function(t){this.activateImpl(t)},i.prototype.deactivate=function(){this.deactivateImpl()},i.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},i.prototype.setUnbounded=function(t){var r=i.cssClasses.UNBOUNDED;t?this.adapter.addClass(r):this.adapter.removeClass(r)},i.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(i.cssClasses.BG_FOCUSED)})},i.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(i.cssClasses.BG_FOCUSED)})},i.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},i.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},i.prototype.registerRootHandlers=function(t){var r,o;if(t){try{for(var h=(0,f.XA)(d),C=h.next();!C.done;C=h.next()){var g=C.value;this.adapter.registerInteractionHandler(g,this.activateHandler)}}catch(A){r={error:A}}finally{try{C&&!C.done&&(o=h.return)&&o.call(h)}finally{if(r)throw r.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},i.prototype.registerDeactivationHandlers=function(t){var r,o;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var h=(0,f.XA)(a),C=h.next();!C.done;C=h.next()){var g=C.value;this.adapter.registerDocumentInteractionHandler(g,this.deactivateHandler)}}catch(A){r={error:A}}finally{try{C&&!C.done&&(o=h.return)&&o.call(h)}finally{if(r)throw r.error}}},i.prototype.deregisterRootHandlers=function(){var t,r;try{for(var o=(0,f.XA)(d),h=o.next();!h.done;h=o.next()){var C=h.value;this.adapter.deregisterInteractionHandler(C,this.activateHandler)}}catch(g){t={error:g}}finally{try{h&&!h.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},i.prototype.deregisterDeactivationHandlers=function(){var t,r;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var o=(0,f.XA)(a),h=o.next();!h.done;h=o.next()){var C=h.value;this.adapter.deregisterDocumentInteractionHandler(C,this.deactivateHandler)}}catch(g){t={error:g}}finally{try{h&&!h.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}},i.prototype.removeCssVars=function(){var t=this,r=i.strings,o=Object.keys(r);o.forEach(function(h){h.indexOf("VAR_")===0&&t.adapter.updateCssVariable(r[h],null)})},i.prototype.activateImpl=function(t){var r=this;if(!this.adapter.isSurfaceDisabled()){var o=this.activationState;if(!o.isActivated){var h=this.previousActivationEvent,C=h&&t!==void 0&&h.type!==t.type;if(!C){o.isActivated=!0,o.isProgrammatic=t===void 0,o.activationEvent=t,o.wasActivatedByPointer=o.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var g=t!==void 0&&u.length>0&&u.some(function(A){return r.adapter.containsEventTarget(A)});if(g){this.resetActivationState();return}t!==void 0&&(u.push(t.target),this.registerDeactivationHandlers(t)),o.wasElementMadeActive=this.checkElementMadeActive(t),o.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){u=[],!o.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(o.wasElementMadeActive=r.checkElementMadeActive(t),o.wasElementMadeActive&&r.animateActivation()),o.wasElementMadeActive||(r.activationState=r.defaultActivationState())})}}}},i.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},i.prototype.animateActivation=function(){var t=this,r=i.strings,o=r.VAR_FG_TRANSLATE_START,h=r.VAR_FG_TRANSLATE_END,C=i.cssClasses,g=C.FG_DEACTIVATION,A=C.FG_ACTIVATION,m=i.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var s="",I="";if(!this.adapter.isUnbounded()){var _=this.getFgTranslationCoordinates(),y=_.startPoint,D=_.endPoint;s=y.x+"px, "+y.y+"px",I=D.x+"px, "+D.y+"px"}this.adapter.updateCssVariable(o,s),this.adapter.updateCssVariable(h,I),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(g),this.adapter.computeBoundingRect(),this.adapter.addClass(A),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},m)},i.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,r=t.activationEvent,o=t.wasActivatedByPointer,h;o?h=(0,e.Y)(r,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):h={x:this.frame.width/2,y:this.frame.height/2},h={x:h.x-this.initialSize/2,y:h.y-this.initialSize/2};var C={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:h,endPoint:C}},i.prototype.runDeactivationUXLogicIfReady=function(){var t=this,r=i.cssClasses.FG_DEACTIVATION,o=this.activationState,h=o.hasDeactivationUXRun,C=o.isActivated,g=h||!C;g&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(r),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(r)},p.FG_DEACTIVATION_MS))},i.prototype.rmBoundedActivationClasses=function(){var t=i.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},i.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},i.numbers.TAP_DELAY_MS)},i.prototype.deactivateImpl=function(){var t=this,r=this.activationState;if(!!r.isActivated){var o=(0,f.pi)({},r);r.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(o)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(o),t.resetActivationState()}))}},i.prototype.animateDeactivation=function(t){var r=t.wasActivatedByPointer,o=t.wasElementMadeActive;(r||o)&&this.runDeactivationUXLogicIfReady()},i.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var r=Math.max(this.frame.height,this.frame.width),o=function(){var C=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return C+i.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?r:o();var h=Math.floor(r*i.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&h%2!==0?this.initialSize=h-1:this.initialSize=h,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},i.prototype.updateLayoutCssVars=function(){var t=i.strings,r=t.VAR_FG_SIZE,o=t.VAR_LEFT,h=t.VAR_TOP,C=t.VAR_FG_SCALE;this.adapter.updateCssVariable(r,this.initialSize+"px"),this.adapter.updateCssVariable(C,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(o,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(h,this.unboundedCoords.top+"px"))},i}(S.K);const E=null},7985:(L,R,v)=>{v.d(R,{Y:()=>l,x:()=>S});var f;function S(c,p){p===void 0&&(p=!1);var e=c.CSS,d=f;if(typeof f=="boolean"&&!p)return f;var a=e&&typeof e.supports=="function";if(!a)return!1;var u=e.supports("--css-vars","yes"),T=e.supports("(--css-vars: yes)")&&e.supports("color","#00000000");return d=u||T,p||(f=d),d}function l(c,p,e){if(!c)return{x:0,y:0};var d=p.x,a=p.y,u=d+e.left,T=a+e.top,E,n;if(c.type==="touchstart"){var i=c;E=i.changedTouches[0].pageX-u,n=i.changedTouches[0].pageY-T}else{var t=c;E=t.pageX-u,n=t.pageY-T}return{x:E,y:n}}},8894:(L,R,v)=>{v.d(R,{Fp:()=>e});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={SEGMENT:".mdc-segmented-button__segment"},c={SELECTED:"selected",CHANGE:"change"},p={SINGLE_SELECT:"mdc-segmented-button--single-select"};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var e=function(E){(0,f.ZT)(n,E);function n(i){return E.call(this,(0,f.pi)((0,f.pi)({},n.defaultAdapter),i))||this}return Object.defineProperty(n,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},getSegments:function(){return[]},selectSegment:function(){},unselectSegment:function(){},notifySelectedChange:function(){}}},enumerable:!1,configurable:!0}),n.prototype.selectSegment=function(i){this.adapter.selectSegment(i)},n.prototype.unselectSegment=function(i){this.adapter.unselectSegment(i)},n.prototype.getSelectedSegments=function(){return this.adapter.getSegments().filter(function(i){return i.selected})},n.prototype.isSegmentSelected=function(i){return this.adapter.getSegments().some(function(t){return(t.index===i||t.segmentId===i)&&t.selected})},n.prototype.isSingleSelect=function(){return this.adapter.hasClass(p.SINGLE_SELECT)},n.prototype.handleSelected=function(i){this.isSingleSelect()&&this.unselectPrevSelected(i.index),this.adapter.notifySelectedChange(i)},n.prototype.unselectPrevSelected=function(i){var t,r;try{for(var o=(0,f.XA)(this.getSelectedSegments()),h=o.next();!h.done;h=o.next()){var C=h.value;C.index!==i&&this.unselectSegment(C.index)}}catch(g){t={error:g}}finally{try{h&&!h.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}},n}(S.K),d=v(2616),a=v(6540);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var u=function(E){(0,f.ZT)(n,E);function n(){return E!==null&&E.apply(this,arguments)||this}return n.attachTo=function(i){return new n(i)},Object.defineProperty(n.prototype,"segments",{get:function(){return this.segmentsList.slice()},enumerable:!1,configurable:!0}),n.prototype.initialize=function(i){i===void 0&&(i=function(t){return new a.$(t)}),this.segmentFactory=i,this.segmentsList=this.instantiateSegments(this.segmentFactory)},n.prototype.instantiateSegments=function(i){var t=[].slice.call(this.root.querySelectorAll(l.SEGMENT));return t.map(function(r){return i(r)})},n.prototype.initialSyncWithDOM=function(){var i=this;this.handleSelected=function(C){i.foundation.handleSelected(C.detail)},this.listen(c.SELECTED,this.handleSelected);for(var t=this.foundation.isSingleSelect(),r=0;r<this.segmentsList.length;r++){var o=this.segmentsList[r];o.setIndex(r),o.setIsSingleSelect(t)}var h=this.segmentsList.filter(function(C){return C.isSelected()});if(t&&h.length===0&&this.segmentsList.length>0)throw new Error("No segment selected in singleSelect mdc-segmented-button");if(t&&h.length>1)throw new Error("Multiple segments selected in singleSelect mdc-segmented-button")},n.prototype.destroy=function(){var i,t;try{for(var r=(0,f.XA)(this.segmentsList),o=r.next();!o.done;o=r.next()){var h=o.value;h.destroy()}}catch(C){i={error:C}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(i)throw i.error}}this.unlisten(c.SELECTED,this.handleSelected),E.prototype.destroy.call(this)},n.prototype.getDefaultFoundation=function(){var i=this,t={hasClass:function(r){return i.root.classList.contains(r)},getSegments:function(){return i.mappedSegments()},selectSegment:function(r){var o=i.mappedSegments().find(function(h){return h.index===r||h.segmentId===r});o&&i.segmentsList[o.index].setSelected()},unselectSegment:function(r){var o=i.mappedSegments().find(function(h){return h.index===r||h.segmentId===r});o&&i.segmentsList[o.index].setUnselected()},notifySelectedChange:function(r){i.emit(c.CHANGE,r,!0)}};return new e(t)},n.prototype.getSelectedSegments=function(){return this.foundation.getSelectedSegments()},n.prototype.selectSegment=function(i){this.foundation.selectSegment(i)},n.prototype.unselectSegment=function(i){this.foundation.unselectSegment(i)},n.prototype.isSegmentSelected=function(i){return this.foundation.isSegmentSelected(i)},n.prototype.mappedSegments=function(){return this.segmentsList.map(function(i,t){return{index:t,selected:i.isSelected(),segmentId:i.getSegmentId()}})},n}(d.B);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var T=v(9930);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */},6540:(L,R,v)=>{v.d(R,{$:()=>T});var f=v(5500),S=v(2616),l=v(6121),c=v(5319),p=v(569),e=v(7985);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var d=function(E){(0,f.ZT)(n,E);function n(){var i=E!==null&&E.apply(this,arguments)||this;return i.disabled=!1,i}return n.attachTo=function(i,t){t===void 0&&(t={isUnbounded:void 0});var r=new n(i);return t.isUnbounded!==void 0&&(r.unbounded=t.isUnbounded),r},n.createAdapter=function(i){return{addClass:function(t){return i.root.classList.add(t)},browserSupportsCssVars:function(){return e.x(window)},computeBoundingRect:function(){return i.root.getBoundingClientRect()},containsEventTarget:function(t){return i.root.contains(t)},deregisterDocumentInteractionHandler:function(t,r){return document.documentElement.removeEventListener(t,r,(0,l.K)())},deregisterInteractionHandler:function(t,r){return i.root.removeEventListener(t,r,(0,l.K)())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return(0,c.wB)(i.root,":active")},isSurfaceDisabled:function(){return Boolean(i.disabled)},isUnbounded:function(){return Boolean(i.unbounded)},registerDocumentInteractionHandler:function(t,r){return document.documentElement.addEventListener(t,r,(0,l.K)())},registerInteractionHandler:function(t,r){return i.root.addEventListener(t,r,(0,l.K)())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(t){return i.root.classList.remove(t)},updateCssVariable:function(t,r){return i.root.style.setProperty(t,r)}}},Object.defineProperty(n.prototype,"unbounded",{get:function(){return Boolean(this.isUnbounded)},set:function(i){this.isUnbounded=Boolean(i),this.setUnbounded()},enumerable:!1,configurable:!0}),n.prototype.activate=function(){this.foundation.activate()},n.prototype.deactivate=function(){this.foundation.deactivate()},n.prototype.layout=function(){this.foundation.layout()},n.prototype.getDefaultFoundation=function(){return new p.l(n.createAdapter(this))},n.prototype.initialSyncWithDOM=function(){var i=this.root;this.isUnbounded="mdcRippleIsUnbounded"in i.dataset},n.prototype.setUnbounded=function(){this.foundation.setUnbounded(Boolean(this.isUnbounded))},n}(S.B),a=v(5445),u=v(9171);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var T=function(E){(0,f.ZT)(n,E);function n(){return E!==null&&E.apply(this,arguments)||this}return Object.defineProperty(n.prototype,"ripple",{get:function(){return this.rippleComponent},enumerable:!1,configurable:!0}),n.attachTo=function(i){return new n(i)},n.prototype.initialize=function(i){var t=this;i===void 0&&(i=function(o,h){return new d(o,h)});var r=(0,f.pi)((0,f.pi)({},d.createAdapter(this)),{computeBoundingRect:function(){return t.foundation.getDimensions()}});this.rippleComponent=i(this.root,new p.l(r))},n.prototype.initialSyncWithDOM=function(){var i=this;this.handleClick=function(){i.foundation.handleClick()},this.listen(a.U3.CLICK,this.handleClick)},n.prototype.destroy=function(){this.ripple.destroy(),this.unlisten(a.U3.CLICK,this.handleClick),E.prototype.destroy.call(this)},n.prototype.getDefaultFoundation=function(){var i=this,t={isSingleSelect:function(){return i.isSingleSelect},getAttr:function(r){return i.root.getAttribute(r)},setAttr:function(r,o){i.root.setAttribute(r,o)},addClass:function(r){i.root.classList.add(r)},removeClass:function(r){i.root.classList.remove(r)},hasClass:function(r){return i.root.classList.contains(r)},notifySelectedChange:function(r){i.emit(a.U3.SELECTED,{index:i.index,selected:r,segmentId:i.getSegmentId()},!0)},getRootBoundingClientRect:function(){return i.root.getBoundingClientRect()}};return new u.a(t)},n.prototype.setIndex=function(i){this.index=i},n.prototype.setIsSingleSelect=function(i){this.isSingleSelect=i},n.prototype.isSelected=function(){return this.foundation.isSelected()},n.prototype.setSelected=function(){this.foundation.setSelected()},n.prototype.setUnselected=function(){this.foundation.setUnselected()},n.prototype.getSegmentId=function(){return this.foundation.getSegmentId()},n}(S.B)},5445:(L,R,v)=>{v.d(R,{U3:()=>l,UX:()=>c,Y4:()=>S,sL:()=>f});/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f={TRUE:"true",FALSE:"false"},S={ARIA_CHECKED:"aria-checked",ARIA_PRESSED:"aria-pressed",DATA_SEGMENT_ID:"data-segment-id"},l={CLICK:"click",SELECTED:"selected"},c={SELECTED:"mdc-segmented-button__segment--selected"}},9171:(L,R,v)=>{v.d(R,{a:()=>p});var f=v(5500),S=v(3264),l=v(5445);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c={bottom:0,height:0,left:0,right:0,top:0,width:0},p=function(e){(0,f.ZT)(d,e);function d(a){return e.call(this,(0,f.pi)((0,f.pi)({},d.defaultAdapter),a))||this}return Object.defineProperty(d,"defaultAdapter",{get:function(){return{isSingleSelect:function(){return!1},getAttr:function(){return""},setAttr:function(){},addClass:function(){},removeClass:function(){},hasClass:function(){return!1},notifySelectedChange:function(){},getRootBoundingClientRect:function(){return c}}},enumerable:!1,configurable:!0}),d.prototype.isSelected=function(){return this.adapter.hasClass(l.UX.SELECTED)},d.prototype.setSelected=function(){this.adapter.addClass(l.UX.SELECTED),this.setAriaAttr(l.sL.TRUE)},d.prototype.setUnselected=function(){this.adapter.removeClass(l.UX.SELECTED),this.setAriaAttr(l.sL.FALSE)},d.prototype.getSegmentId=function(){var a;return(a=this.adapter.getAttr(l.Y4.DATA_SEGMENT_ID))!==null&&a!==void 0?a:void 0},d.prototype.handleClick=function(){this.adapter.isSingleSelect()?this.setSelected():this.toggleSelection(),this.adapter.notifySelectedChange(this.isSelected())},d.prototype.getDimensions=function(){return this.adapter.getRootBoundingClientRect()},d.prototype.toggleSelection=function(){this.isSelected()?this.setUnselected():this.setSelected()},d.prototype.setAriaAttr=function(a){this.adapter.isSingleSelect()?this.adapter.setAttr(l.Y4.ARIA_CHECKED,a):this.adapter.setAttr(l.Y4.ARIA_PRESSED,a)},d}(S.K)},9930:(L,R,v)=>{v.d(R,{a:()=>f.a});var f=v(9171),S=v(6540);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */},5439:(L,R,v)=>{v.d(R,{D:()=>a});var f=v(5500),S=v(3264),l=v(6285),c=v(4818);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},e={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},d={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var a=function(T){(0,f.ZT)(E,T);function E(n,i){i===void 0&&(i={});var t=T.call(this,(0,f.pi)((0,f.pi)({},E.defaultAdapter),n))||this;return t.disabled=!1,t.isMenuOpen=!1,t.useDefaultValidation=!0,t.customValidity=!0,t.lastSelectedIndex=d.UNSET_INDEX,t.clickDebounceTimeout=0,t.recentlyClicked=!1,t.leadingIcon=i.leadingIcon,t.helperText=i.helperText,t}return Object.defineProperty(E,"cssClasses",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(E,"numbers",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(E,"strings",{get:function(){return e},enumerable:!1,configurable:!0}),Object.defineProperty(E,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!1,configurable:!0}),E.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},E.prototype.setSelectedIndex=function(n,i,t){i===void 0&&(i=!1),t===void 0&&(t=!1),!(n>=this.adapter.getMenuItemCount())&&(n===d.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()),this.adapter.setSelectedIndex(n),i&&this.adapter.closeMenu(),!t&&this.lastSelectedIndex!==n&&this.handleChange(),this.lastSelectedIndex=n)},E.prototype.setValue=function(n,i){i===void 0&&(i=!1);var t=this.adapter.getMenuItemValues().indexOf(n);this.setSelectedIndex(t,!1,i)},E.prototype.getValue=function(){var n=this.adapter.getSelectedIndex(),i=this.adapter.getMenuItemValues();return n!==d.UNSET_INDEX?i[n]:""},E.prototype.getDisabled=function(){return this.disabled},E.prototype.setDisabled=function(n){this.disabled=n,this.disabled?(this.adapter.addClass(p.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(p.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},E.prototype.openMenu=function(){this.adapter.addClass(p.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},E.prototype.setHelperTextContent=function(n){this.helperText&&this.helperText.setContent(n)},E.prototype.layout=function(){if(this.adapter.hasLabel()){var n=this.getValue().length>0,i=this.adapter.hasClass(p.FOCUSED),t=n||i,r=this.adapter.hasClass(p.REQUIRED);this.notchOutline(t),this.adapter.floatLabel(t),this.adapter.setLabelRequired(r)}},E.prototype.layoutOptions=function(){var n=this.adapter.getMenuItemValues(),i=n.indexOf(this.getValue());this.setSelectedIndex(i,!1,!0)},E.prototype.handleMenuOpened=function(){if(this.adapter.getMenuItemValues().length!==0){var n=this.getSelectedIndex(),i=n>=0?n:0;this.adapter.focusMenuItemAtIndex(i)}},E.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr("aria-expanded","false")},E.prototype.handleMenuClosed=function(){this.adapter.removeClass(p.ACTIVATED),this.isMenuOpen=!1,this.adapter.isSelectAnchorFocused()||this.blur()},E.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue());var n=this.adapter.hasClass(p.REQUIRED);n&&this.useDefaultValidation&&this.setValid(this.isValid())},E.prototype.handleMenuItemAction=function(n){this.setSelectedIndex(n,!0)},E.prototype.handleFocus=function(){this.adapter.addClass(p.FOCUSED),this.layout(),this.adapter.activateBottomLine()},E.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},E.prototype.handleClick=function(n){if(!(this.disabled||this.recentlyClicked)){if(this.setClickDebounceTimeout(),this.isMenuOpen){this.adapter.closeMenu();return}this.adapter.setRippleCenter(n),this.openMenu()}},E.prototype.handleKeydown=function(n){if(!(this.isMenuOpen||!this.adapter.hasClass(p.FOCUSED))){var i=(0,l.ku)(n)===l.Fn.ENTER,t=(0,l.ku)(n)===l.Fn.SPACEBAR,r=(0,l.ku)(n)===l.Fn.ARROW_UP,o=(0,l.ku)(n)===l.Fn.ARROW_DOWN,h=n.ctrlKey||n.metaKey;if(!h&&(!t&&n.key&&n.key.length===1||t&&this.adapter.isTypeaheadInProgress())){var C=t?" ":n.key,g=this.adapter.typeaheadMatchItem(C,this.getSelectedIndex());g>=0&&this.setSelectedIndex(g),n.preventDefault();return}!i&&!t&&!r&&!o||(this.openMenu(),n.preventDefault())}},E.prototype.notchOutline=function(n){if(!!this.adapter.hasOutline()){var i=this.adapter.hasClass(p.FOCUSED);if(n){var t=d.LABEL_SCALE,r=this.adapter.getLabelWidth()*t;this.adapter.notchOutline(r)}else i||this.adapter.closeOutline()}},E.prototype.setLeadingIconAriaLabel=function(n){this.leadingIcon&&this.leadingIcon.setAriaLabel(n)},E.prototype.setLeadingIconContent=function(n){this.leadingIcon&&this.leadingIcon.setContent(n)},E.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation},E.prototype.setUseDefaultValidation=function(n){this.useDefaultValidation=n},E.prototype.setValid=function(n){this.useDefaultValidation||(this.customValidity=n),this.adapter.setSelectAnchorAttr("aria-invalid",(!n).toString()),n?(this.adapter.removeClass(p.INVALID),this.adapter.removeMenuClass(p.MENU_INVALID)):(this.adapter.addClass(p.INVALID),this.adapter.addMenuClass(p.MENU_INVALID)),this.syncHelperTextValidity(n)},E.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(p.REQUIRED)&&!this.adapter.hasClass(p.DISABLED)?this.getSelectedIndex()!==d.UNSET_INDEX&&(this.getSelectedIndex()!==0||Boolean(this.getValue())):this.customValidity},E.prototype.setRequired=function(n){n?this.adapter.addClass(p.REQUIRED):this.adapter.removeClass(p.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",n.toString()),this.adapter.setLabelRequired(n)},E.prototype.getRequired=function(){return this.adapter.getSelectAnchorAttr("aria-required")==="true"},E.prototype.init=function(){var n=this.adapter.getAnchorElement();n&&(this.adapter.setMenuAnchorElement(n),this.adapter.setMenuAnchorCorner(c.Ns.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(p.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(p.INVALID)),this.layout(),this.layoutOptions()},E.prototype.blur=function(){this.adapter.removeClass(p.FOCUSED),this.layout(),this.adapter.deactivateBottomLine();var n=this.adapter.hasClass(p.REQUIRED);n&&this.useDefaultValidation&&this.setValid(this.isValid())},E.prototype.syncHelperTextValidity=function(n){if(!!this.helperText){this.helperText.setValidity(n);var i=this.helperText.isVisible(),t=this.helperText.getId();i&&t?this.adapter.setSelectAnchorAttr(e.ARIA_DESCRIBEDBY,t):this.adapter.removeSelectAnchorAttr(e.ARIA_DESCRIBEDBY)}},E.prototype.setClickDebounceTimeout=function(){var n=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout(function(){n.recentlyClicked=!1},d.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},E}(S.K);const u=null},8565:(L,R,v)=>{v.d(R,{g:()=>p});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},c={HELPER_TEXT_VALIDATION_MSG:"mdc-select-helper-text--validation-msg",HELPER_TEXT_VALIDATION_MSG_PERSISTENT:"mdc-select-helper-text--validation-msg-persistent"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p=function(d){(0,f.ZT)(a,d);function a(u){return d.call(this,(0,f.pi)((0,f.pi)({},a.defaultAdapter),u))||this}return Object.defineProperty(a,"cssClasses",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},getAttr:function(){return null},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),a.prototype.getId=function(){return this.adapter.getAttr("id")},a.prototype.isVisible=function(){return this.adapter.getAttr(l.ARIA_HIDDEN)!=="true"},a.prototype.setContent=function(u){this.adapter.setContent(u)},a.prototype.setValidation=function(u){u?this.adapter.addClass(c.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(c.HELPER_TEXT_VALIDATION_MSG)},a.prototype.setValidationMsgPersistent=function(u){u?this.adapter.addClass(c.HELPER_TEXT_VALIDATION_MSG_PERSISTENT):this.adapter.removeClass(c.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},a.prototype.getIsValidation=function(){return this.adapter.hasClass(c.HELPER_TEXT_VALIDATION_MSG)},a.prototype.getIsValidationMsgPersistent=function(){return this.adapter.hasClass(c.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},a.prototype.setValidity=function(u){var T=this.adapter.hasClass(c.HELPER_TEXT_VALIDATION_MSG);if(!!T){var E=this.adapter.hasClass(c.HELPER_TEXT_VALIDATION_MSG_PERSISTENT),n=!u||E;if(n){this.showToScreenReader(),u?this.adapter.removeAttr(l.ROLE):this.adapter.setAttr(l.ROLE,"alert");return}this.adapter.removeAttr(l.ROLE),this.hide()}},a.prototype.showToScreenReader=function(){this.adapter.removeAttr(l.ARIA_HIDDEN)},a.prototype.hide=function(){this.adapter.setAttr(l.ARIA_HIDDEN,"true")},a}(S.K);const e=null},3099:(L,R,v)=>{v.d(R,{k:()=>p});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={ICON_EVENT:"MDCSelect:icon",ICON_ROLE:"button"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c=["click","keydown"],p=function(d){(0,f.ZT)(a,d);function a(u){var T=d.call(this,(0,f.pi)((0,f.pi)({},a.defaultAdapter),u))||this;return T.savedTabIndex=null,T.interactionHandler=function(E){T.handleInteraction(E)},T}return Object.defineProperty(a,"strings",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),a.prototype.init=function(){var u,T;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var E=(0,f.XA)(c),n=E.next();!n.done;n=E.next()){var i=n.value;this.adapter.registerInteractionHandler(i,this.interactionHandler)}}catch(t){u={error:t}}finally{try{n&&!n.done&&(T=E.return)&&T.call(E)}finally{if(u)throw u.error}}},a.prototype.destroy=function(){var u,T;try{for(var E=(0,f.XA)(c),n=E.next();!n.done;n=E.next()){var i=n.value;this.adapter.deregisterInteractionHandler(i,this.interactionHandler)}}catch(t){u={error:t}}finally{try{n&&!n.done&&(T=E.return)&&T.call(E)}finally{if(u)throw u.error}}},a.prototype.setDisabled=function(u){!this.savedTabIndex||(u?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",l.ICON_ROLE)))},a.prototype.setAriaLabel=function(u){this.adapter.setAttr("aria-label",u)},a.prototype.setContent=function(u){this.adapter.setContent(u)},a.prototype.handleInteraction=function(u){var T=u.key==="Enter"||u.keyCode===13;(u.type==="click"||T)&&this.adapter.notifyIconAction()},a}(S.K);const e=null},2447:(L,R,v)=>{v.d(R,{KT:()=>S,U3:()=>c,UX:()=>f,Y4:()=>l,j2:()=>p});/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f={DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",INPUT:"mdc-slider__input",RANGE:"mdc-slider--range",THUMB:"mdc-slider__thumb",THUMB_FOCUSED:"mdc-slider__thumb--focused",THUMB_KNOB:"mdc-slider__thumb-knob",THUMB_TOP:"mdc-slider__thumb--top",THUMB_WITH_INDICATOR:"mdc-slider__thumb--with-indicator",TICK_MARKS:"mdc-slider--tick-marks",TICK_MARKS_CONTAINER:"mdc-slider__tick-marks",TICK_MARK_ACTIVE:"mdc-slider__tick-mark--active",TICK_MARK_INACTIVE:"mdc-slider__tick-mark--inactive",TRACK:"mdc-slider__track",TRACK_ACTIVE:"mdc-slider__track--active_fill",VALUE_INDICATOR_CONTAINER:"mdc-slider__value-indicator-container",VALUE_INDICATOR_TEXT:"mdc-slider__value-indicator-text"},S={STEP_SIZE:1,MIN_RANGE:0,THUMB_UPDATE_MIN_PX:5},l={ARIA_VALUETEXT:"aria-valuetext",INPUT_DISABLED:"disabled",INPUT_MIN:"min",INPUT_MAX:"max",INPUT_VALUE:"value",INPUT_STEP:"step",DATA_MIN_RANGE:"data-min-range"},c={CHANGE:"MDCSlider:change",INPUT:"MDCSlider:input"},p={VAR_VALUE_INDICATOR_CARET_LEFT:"--slider-value-indicator-caret-left",VAR_VALUE_INDICATOR_CARET_RIGHT:"--slider-value-indicator-caret-right",VAR_VALUE_INDICATOR_CARET_TRANSFORM:"--slider-value-indicator-caret-transform",VAR_VALUE_INDICATOR_CONTAINER_LEFT:"--slider-value-indicator-container-left",VAR_VALUE_INDICATOR_CONTAINER_RIGHT:"--slider-value-indicator-container-right",VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM:"--slider-value-indicator-container-transform"}},8216:(L,R,v)=>{v.d(R,{Y:()=>u});var f=v(5500),S=v(2163),l=v(8604),c=v(3264),p=v(2447),e=v(792);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var d;(function(n){n.SLIDER_UPDATE="slider_update"})(d||(d={}));var a=typeof window!="undefined",u=function(n){(0,f.ZT)(i,n);function i(t){var r=n.call(this,(0,f.pi)((0,f.pi)({},i.defaultAdapter),t))||this;return r.initialStylesRemoved=!1,r.isDisabled=!1,r.isDiscrete=!1,r.step=p.KT.STEP_SIZE,r.minRange=p.KT.MIN_RANGE,r.hasTickMarks=!1,r.isRange=!1,r.thumb=null,r.downEventClientX=null,r.startThumbKnobWidth=0,r.endThumbKnobWidth=0,r.animFrame=new S.$,r}return Object.defineProperty(i,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},addThumbClass:function(){},removeThumbClass:function(){},getAttribute:function(){return null},getInputValue:function(){return""},setInputValue:function(){},getInputAttribute:function(){return null},setInputAttribute:function(){return null},removeInputAttribute:function(){return null},focusInput:function(){},isInputFocused:function(){return!1},shouldHideFocusStylesForPointerEvents:function(){return!1},getThumbKnobWidth:function(){return 0},getValueIndicatorContainerWidth:function(){return 0},getThumbBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},isRTL:function(){return!1},setThumbStyleProperty:function(){},removeThumbStyleProperty:function(){},setTrackActiveStyleProperty:function(){},removeTrackActiveStyleProperty:function(){},setValueIndicatorText:function(){},getValueToAriaValueTextFn:function(){return null},updateTickMarks:function(){},setPointerCapture:function(){},emitChangeEvent:function(){},emitInputEvent:function(){},emitDragStartEvent:function(){},emitDragEndEvent:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerThumbEventHandler:function(){},deregisterThumbEventHandler:function(){},registerInputEventHandler:function(){},deregisterInputEventHandler:function(){},registerBodyEventHandler:function(){},deregisterBodyEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){var t=this;this.isDisabled=this.adapter.hasClass(p.UX.DISABLED),this.isDiscrete=this.adapter.hasClass(p.UX.DISCRETE),this.hasTickMarks=this.adapter.hasClass(p.UX.TICK_MARKS),this.isRange=this.adapter.hasClass(p.UX.RANGE);var r=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(p.Y4.INPUT_MIN,this.isRange?e.b.START:e.b.END),p.Y4.INPUT_MIN),o=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(p.Y4.INPUT_MAX,e.b.END),p.Y4.INPUT_MAX),h=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(p.Y4.INPUT_VALUE,e.b.END),p.Y4.INPUT_VALUE),C=this.isRange?this.convertAttributeValueToNumber(this.adapter.getInputAttribute(p.Y4.INPUT_VALUE,e.b.START),p.Y4.INPUT_VALUE):r,g=this.adapter.getInputAttribute(p.Y4.INPUT_STEP,e.b.END),A=g?this.convertAttributeValueToNumber(g,p.Y4.INPUT_STEP):this.step,m=this.adapter.getAttribute(p.Y4.DATA_MIN_RANGE),s=m?this.convertAttributeValueToNumber(m,p.Y4.DATA_MIN_RANGE):this.minRange;this.validateProperties({min:r,max:o,value:h,valueStart:C,step:A,minRange:s}),this.min=r,this.max=o,this.value=h,this.valueStart=C,this.step=A,this.minRange=s,this.numDecimalPlaces=E(this.step),this.valueBeforeDownEvent=h,this.valueStartBeforeDownEvent=C,this.mousedownOrTouchstartListener=this.handleMousedownOrTouchstart.bind(this),this.moveListener=this.handleMove.bind(this),this.pointerdownListener=this.handlePointerdown.bind(this),this.pointerupListener=this.handlePointerup.bind(this),this.thumbMouseenterListener=this.handleThumbMouseenter.bind(this),this.thumbMouseleaveListener=this.handleThumbMouseleave.bind(this),this.inputStartChangeListener=function(){t.handleInputChange(e.b.START)},this.inputEndChangeListener=function(){t.handleInputChange(e.b.END)},this.inputStartFocusListener=function(){t.handleInputFocus(e.b.START)},this.inputEndFocusListener=function(){t.handleInputFocus(e.b.END)},this.inputStartBlurListener=function(){t.handleInputBlur(e.b.START)},this.inputEndBlurListener=function(){t.handleInputBlur(e.b.END)},this.resizeListener=this.handleResize.bind(this),this.registerEventHandlers()},i.prototype.destroy=function(){this.deregisterEventHandlers()},i.prototype.setMin=function(t){this.min=t,this.isRange||(this.valueStart=t),this.updateUI()},i.prototype.setMax=function(t){this.max=t,this.updateUI()},i.prototype.getMin=function(){return this.min},i.prototype.getMax=function(){return this.max},i.prototype.getValue=function(){return this.value},i.prototype.setValue=function(t){if(this.isRange&&t<this.valueStart+this.minRange)throw new Error("end thumb value ("+t+") must be >= start thumb "+("value ("+this.valueStart+") + min range ("+this.minRange+")"));this.updateValue(t,e.b.END)},i.prototype.getValueStart=function(){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");return this.valueStart},i.prototype.setValueStart=function(t){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");if(this.isRange&&t>this.value-this.minRange)throw new Error("start thumb value ("+t+") must be <= end thumb "+("value ("+this.value+") - min range ("+this.minRange+")"));this.updateValue(t,e.b.START)},i.prototype.setStep=function(t){this.step=t,this.numDecimalPlaces=E(t),this.updateUI()},i.prototype.setMinRange=function(t){if(!this.isRange)throw new Error("`minRange` is only applicable for range sliders.");if(t<0)throw new Error("`minRange` must be non-negative. "+("Current value: "+t));if(this.value-this.valueStart<t)throw new Error("start thumb value ("+this.valueStart+") and end thumb value "+("("+this.value+") must differ by at least "+t+"."));this.minRange=t},i.prototype.setIsDiscrete=function(t){this.isDiscrete=t,this.updateValueIndicatorUI(),this.updateTickMarksUI()},i.prototype.getStep=function(){return this.step},i.prototype.getMinRange=function(){if(!this.isRange)throw new Error("`minRange` is only applicable for range sliders.");return this.minRange},i.prototype.setHasTickMarks=function(t){this.hasTickMarks=t,this.updateTickMarksUI()},i.prototype.getDisabled=function(){return this.isDisabled},i.prototype.setDisabled=function(t){this.isDisabled=t,t?(this.adapter.addClass(p.UX.DISABLED),this.isRange&&this.adapter.setInputAttribute(p.Y4.INPUT_DISABLED,"",e.b.START),this.adapter.setInputAttribute(p.Y4.INPUT_DISABLED,"",e.b.END)):(this.adapter.removeClass(p.UX.DISABLED),this.isRange&&this.adapter.removeInputAttribute(p.Y4.INPUT_DISABLED,e.b.START),this.adapter.removeInputAttribute(p.Y4.INPUT_DISABLED,e.b.END))},i.prototype.getIsRange=function(){return this.isRange},i.prototype.layout=function(t){var r=t===void 0?{}:t,o=r.skipUpdateUI;this.rect=this.adapter.getBoundingClientRect(),this.isRange&&(this.startThumbKnobWidth=this.adapter.getThumbKnobWidth(e.b.START),this.endThumbKnobWidth=this.adapter.getThumbKnobWidth(e.b.END)),o||this.updateUI()},i.prototype.handleResize=function(){this.layout()},i.prototype.handleDown=function(t){if(!this.isDisabled){this.valueStartBeforeDownEvent=this.valueStart,this.valueBeforeDownEvent=this.value;var r=t.clientX!=null?t.clientX:t.targetTouches[0].clientX;this.downEventClientX=r;var o=this.mapClientXOnSliderScale(r);this.thumb=this.getThumbFromDownEvent(r,o),this.thumb!==null&&(this.handleDragStart(t,o,this.thumb),this.updateValue(o,this.thumb,{emitInputEvent:!0}))}},i.prototype.handleMove=function(t){if(!this.isDisabled){t.preventDefault();var r=t.clientX!=null?t.clientX:t.targetTouches[0].clientX,o=this.thumb!=null;if(this.thumb=this.getThumbFromMoveEvent(r),this.thumb!==null){var h=this.mapClientXOnSliderScale(r);o||(this.handleDragStart(t,h,this.thumb),this.adapter.emitDragStartEvent(h,this.thumb)),this.updateValue(h,this.thumb,{emitInputEvent:!0})}}},i.prototype.handleUp=function(){var t,r;if(!(this.isDisabled||this.thumb===null)){!((r=(t=this.adapter).shouldHideFocusStylesForPointerEvents)===null||r===void 0)&&r.call(t)&&this.handleInputBlur(this.thumb);var o=this.thumb===e.b.START?this.valueStartBeforeDownEvent:this.valueBeforeDownEvent,h=this.thumb===e.b.START?this.valueStart:this.value;o!==h&&this.adapter.emitChangeEvent(h,this.thumb),this.adapter.emitDragEndEvent(h,this.thumb),this.thumb=null}},i.prototype.handleThumbMouseenter=function(){!this.isDiscrete||!this.isRange||(this.adapter.addThumbClass(p.UX.THUMB_WITH_INDICATOR,e.b.START),this.adapter.addThumbClass(p.UX.THUMB_WITH_INDICATOR,e.b.END))},i.prototype.handleThumbMouseleave=function(){var t,r;!this.isDiscrete||!this.isRange||!(!((r=(t=this.adapter).shouldHideFocusStylesForPointerEvents)===null||r===void 0)&&r.call(t))&&(this.adapter.isInputFocused(e.b.START)||this.adapter.isInputFocused(e.b.END))||this.thumb||(this.adapter.removeThumbClass(p.UX.THUMB_WITH_INDICATOR,e.b.START),this.adapter.removeThumbClass(p.UX.THUMB_WITH_INDICATOR,e.b.END))},i.prototype.handleMousedownOrTouchstart=function(t){var r=this,o=t.type==="mousedown"?"mousemove":"touchmove";this.adapter.registerBodyEventHandler(o,this.moveListener);var h=function(){r.handleUp(),r.adapter.deregisterBodyEventHandler(o,r.moveListener),r.adapter.deregisterEventHandler("mouseup",h),r.adapter.deregisterEventHandler("touchend",h)};this.adapter.registerBodyEventHandler("mouseup",h),this.adapter.registerBodyEventHandler("touchend",h),this.handleDown(t)},i.prototype.handlePointerdown=function(t){var r=t.button===0;!r||(t.pointerId!=null&&this.adapter.setPointerCapture(t.pointerId),this.adapter.registerEventHandler("pointermove",this.moveListener),this.handleDown(t))},i.prototype.handleInputChange=function(t){var r=Number(this.adapter.getInputValue(t));t===e.b.START?this.setValueStart(r):this.setValue(r),this.adapter.emitChangeEvent(t===e.b.START?this.valueStart:this.value,t),this.adapter.emitInputEvent(t===e.b.START?this.valueStart:this.value,t)},i.prototype.handleInputFocus=function(t){if(this.adapter.addThumbClass(p.UX.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.addThumbClass(p.UX.THUMB_WITH_INDICATOR,t),this.isRange)){var r=t===e.b.START?e.b.END:e.b.START;this.adapter.addThumbClass(p.UX.THUMB_WITH_INDICATOR,r)}},i.prototype.handleInputBlur=function(t){if(this.adapter.removeThumbClass(p.UX.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.removeThumbClass(p.UX.THUMB_WITH_INDICATOR,t),this.isRange)){var r=t===e.b.START?e.b.END:e.b.START;this.adapter.removeThumbClass(p.UX.THUMB_WITH_INDICATOR,r)}},i.prototype.handleDragStart=function(t,r,o){var h,C;this.adapter.emitDragStartEvent(r,o),this.adapter.focusInput(o),!((C=(h=this.adapter).shouldHideFocusStylesForPointerEvents)===null||C===void 0)&&C.call(h)&&this.handleInputFocus(o),t.preventDefault()},i.prototype.getThumbFromDownEvent=function(t,r){if(!this.isRange)return e.b.END;var o=this.adapter.getThumbBoundingClientRect(e.b.START),h=this.adapter.getThumbBoundingClientRect(e.b.END),C=t>=o.left&&t<=o.right,g=t>=h.left&&t<=h.right;return C&&g?null:C?e.b.START:g?e.b.END:r<this.valueStart?e.b.START:r>this.value?e.b.END:r-this.valueStart<=this.value-r?e.b.START:e.b.END},i.prototype.getThumbFromMoveEvent=function(t){if(this.thumb!==null)return this.thumb;if(this.downEventClientX===null)throw new Error("`downEventClientX` is null after move event.");var r=Math.abs(this.downEventClientX-t)<p.KT.THUMB_UPDATE_MIN_PX;if(r)return this.thumb;var o=t<this.downEventClientX;return o?this.adapter.isRTL()?e.b.END:e.b.START:this.adapter.isRTL()?e.b.START:e.b.END},i.prototype.updateUI=function(t){t?this.updateThumbAndInputAttributes(t):(this.updateThumbAndInputAttributes(e.b.START),this.updateThumbAndInputAttributes(e.b.END)),this.updateThumbAndTrackUI(t),this.updateValueIndicatorUI(t),this.updateTickMarksUI()},i.prototype.updateThumbAndInputAttributes=function(t){if(!!t){var r=this.isRange&&t===e.b.START?this.valueStart:this.value,o=String(r);this.adapter.setInputAttribute(p.Y4.INPUT_VALUE,o,t),this.isRange&&t===e.b.START?this.adapter.setInputAttribute(p.Y4.INPUT_MIN,String(r+this.minRange),e.b.END):this.isRange&&t===e.b.END&&this.adapter.setInputAttribute(p.Y4.INPUT_MAX,String(r-this.minRange),e.b.START),this.adapter.getInputValue(t)!==o&&this.adapter.setInputValue(o,t);var h=this.adapter.getValueToAriaValueTextFn();h&&this.adapter.setInputAttribute(p.Y4.ARIA_VALUETEXT,h(r,t),t)}},i.prototype.updateValueIndicatorUI=function(t){if(!!this.isDiscrete){var r=this.isRange&&t===e.b.START?this.valueStart:this.value;this.adapter.setValueIndicatorText(r,t===e.b.START?e.b.START:e.b.END),!t&&this.isRange&&this.adapter.setValueIndicatorText(this.valueStart,e.b.START)}},i.prototype.updateTickMarksUI=function(){if(!(!this.isDiscrete||!this.hasTickMarks)){var t=(this.valueStart-this.min)/this.step,r=(this.value-this.valueStart)/this.step+1,o=(this.max-this.value)/this.step,h=Array.from({length:t}).fill(e.X.INACTIVE),C=Array.from({length:r}).fill(e.X.ACTIVE),g=Array.from({length:o}).fill(e.X.INACTIVE);this.adapter.updateTickMarks(h.concat(C).concat(g))}},i.prototype.mapClientXOnSliderScale=function(t){var r=t-this.rect.left,o=r/this.rect.width;this.adapter.isRTL()&&(o=1-o);var h=this.min+o*(this.max-this.min);return h===this.max||h===this.min?h:Number(this.quantize(h).toFixed(this.numDecimalPlaces))},i.prototype.quantize=function(t){var r=Math.round((t-this.min)/this.step);return this.min+r*this.step},i.prototype.updateValue=function(t,r,o){var h=o===void 0?{}:o,C=h.emitInputEvent;if(t=this.clampValue(t,r),this.isRange&&r===e.b.START){if(this.valueStart===t)return;this.valueStart=t}else{if(this.value===t)return;this.value=t}this.updateUI(r),C&&this.adapter.emitInputEvent(r===e.b.START?this.valueStart:this.value,r)},i.prototype.clampValue=function(t,r){t=Math.min(Math.max(t,this.min),this.max);var o=this.isRange&&r===e.b.START&&t>this.value-this.minRange;if(o)return this.value-this.minRange;var h=this.isRange&&r===e.b.END&&t<this.valueStart+this.minRange;return h?this.valueStart+this.minRange:t},i.prototype.updateThumbAndTrackUI=function(t){var r=this,o=this,h=o.max,C=o.min,g=(this.value-this.valueStart)/(h-C),A=g*this.rect.width,m=this.adapter.isRTL(),s=a?(0,l.E)(window,"transform"):"transform";if(this.isRange){var I=this.adapter.isRTL()?(h-this.value)/(h-C)*this.rect.width:(this.valueStart-C)/(h-C)*this.rect.width,_=I+A;this.animFrame.request(d.SLIDER_UPDATE,function(){var y=!m&&t===e.b.START||m&&t!==e.b.START;y?(r.adapter.setTrackActiveStyleProperty("transform-origin","right"),r.adapter.setTrackActiveStyleProperty("left","auto"),r.adapter.setTrackActiveStyleProperty("right",r.rect.width-_+"px")):(r.adapter.setTrackActiveStyleProperty("transform-origin","left"),r.adapter.setTrackActiveStyleProperty("right","auto"),r.adapter.setTrackActiveStyleProperty("left",I+"px")),r.adapter.setTrackActiveStyleProperty(s,"scaleX("+g+")");var D=m?_:I,O=r.adapter.isRTL()?I:_;(t===e.b.START||!t||!r.initialStylesRemoved)&&(r.adapter.setThumbStyleProperty(s,"translateX("+D+"px)",e.b.START),r.alignValueIndicator(e.b.START,D)),(t===e.b.END||!t||!r.initialStylesRemoved)&&(r.adapter.setThumbStyleProperty(s,"translateX("+O+"px)",e.b.END),r.alignValueIndicator(e.b.END,O)),r.removeInitialStyles(m),r.updateOverlappingThumbsUI(D,O,t)})}else this.animFrame.request(d.SLIDER_UPDATE,function(){var y=m?r.rect.width-A:A;r.adapter.setThumbStyleProperty(s,"translateX("+y+"px)",e.b.END),r.alignValueIndicator(e.b.END,y),r.adapter.setTrackActiveStyleProperty(s,"scaleX("+g+")"),r.removeInitialStyles(m)})},i.prototype.alignValueIndicator=function(t,r){if(!!this.isDiscrete){var o=this.adapter.getThumbBoundingClientRect(t).width/2,h=this.adapter.getValueIndicatorContainerWidth(t),C=this.adapter.getBoundingClientRect().width;h/2>r+o?(this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CARET_LEFT,o+"px",t),this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CARET_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CARET_TRANSFORM,"translateX(-50%)",t),this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CONTAINER_LEFT,"0",t),this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,"none",t)):h/2>C-r+o?(this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CARET_LEFT,"auto",t),this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CARET_RIGHT,o+"px",t),this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CARET_TRANSFORM,"translateX(50%)",t),this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CONTAINER_LEFT,"auto",t),this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,"0",t),this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,"none",t)):(this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CARET_LEFT,"50%",t),this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CARET_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CARET_TRANSFORM,"translateX(-50%)",t),this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CONTAINER_LEFT,"50%",t),this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(p.j2.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,"translateX(-50%)",t))}},i.prototype.removeInitialStyles=function(t){if(!this.initialStylesRemoved){var r=t?"right":"left";this.adapter.removeThumbStyleProperty(r,e.b.END),this.isRange&&this.adapter.removeThumbStyleProperty(r,e.b.START),this.initialStylesRemoved=!0,this.resetTrackAndThumbAnimation()}},i.prototype.resetTrackAndThumbAnimation=function(){var t=this;if(!!this.isDiscrete){var r=a?(0,l.E)(window,"transition"):"transition",o="none 0s ease 0s";this.adapter.setThumbStyleProperty(r,o,e.b.END),this.isRange&&this.adapter.setThumbStyleProperty(r,o,e.b.START),this.adapter.setTrackActiveStyleProperty(r,o),requestAnimationFrame(function(){t.adapter.removeThumbStyleProperty(r,e.b.END),t.adapter.removeTrackActiveStyleProperty(r),t.isRange&&t.adapter.removeThumbStyleProperty(r,e.b.START)})}},i.prototype.updateOverlappingThumbsUI=function(t,r,o){var h=!1;if(this.adapter.isRTL()){var C=t-this.startThumbKnobWidth/2,g=r+this.endThumbKnobWidth/2;h=g>=C}else{var A=t+this.startThumbKnobWidth/2,m=r-this.endThumbKnobWidth/2;h=A>=m}h?(this.adapter.addThumbClass(p.UX.THUMB_TOP,o||e.b.END),this.adapter.removeThumbClass(p.UX.THUMB_TOP,o===e.b.START?e.b.END:e.b.START)):(this.adapter.removeThumbClass(p.UX.THUMB_TOP,e.b.START),this.adapter.removeThumbClass(p.UX.THUMB_TOP,e.b.END))},i.prototype.convertAttributeValueToNumber=function(t,r){if(t===null)throw new Error("MDCSliderFoundation: `"+r+"` must be non-null.");var o=Number(t);if(isNaN(o))throw new Error("MDCSliderFoundation: `"+r+"` value is `"+t+"`, but must be a number.");return o},i.prototype.validateProperties=function(t){var r=t.min,o=t.max,h=t.value,C=t.valueStart,g=t.step,A=t.minRange;if(r>=o)throw new Error("MDCSliderFoundation: min must be strictly less than max. "+("Current: [min: "+r+", max: "+o+"]"));if(g<=0)throw new Error("MDCSliderFoundation: step must be a positive number. "+("Current step: "+g));if(this.isRange){if(h<r||h>o||C<r||C>o)throw new Error("MDCSliderFoundation: values must be in [min, max] range. "+("Current values: [start value: "+C+", end value: ")+(h+", min: "+r+", max: "+o+"]"));if(C>h)throw new Error("MDCSliderFoundation: start value must be <= end value. "+("Current values: [start value: "+C+", end value: "+h+"]"));if(A<0)throw new Error("MDCSliderFoundation: minimum range must be non-negative. "+("Current min range: "+A));if(h-C<A)throw new Error("MDCSliderFoundation: start value and end value must differ by at least "+(A+". Current values: [start value: "+C+", ")+("end value: "+h+"]"));var m=(C-r)/g,s=(h-r)/g;if(!Number.isInteger(parseFloat(m.toFixed(6)))||!Number.isInteger(parseFloat(s.toFixed(6))))throw new Error("MDCSliderFoundation: Slider values must be valid based on the "+("step value ("+g+"). Current values: [start value: ")+(C+", end value: "+h+", min: "+r+"]"))}else{if(h<r||h>o)throw new Error("MDCSliderFoundation: value must be in [min, max] range. "+("Current values: [value: "+h+", min: "+r+", max: "+o+"]"));var s=(h-r)/g;if(!Number.isInteger(parseFloat(s.toFixed(6))))throw new Error("MDCSliderFoundation: Slider value must be valid based on the "+("step value ("+g+"). Current value: "+h))}},i.prototype.registerEventHandlers=function(){this.adapter.registerWindowEventHandler("resize",this.resizeListener),i.SUPPORTS_POINTER_EVENTS?(this.adapter.registerEventHandler("pointerdown",this.pointerdownListener),this.adapter.registerEventHandler("pointerup",this.pointerupListener)):(this.adapter.registerEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.registerEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.registerThumbEventHandler(e.b.START,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(e.b.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(e.b.START,"change",this.inputStartChangeListener),this.adapter.registerInputEventHandler(e.b.START,"focus",this.inputStartFocusListener),this.adapter.registerInputEventHandler(e.b.START,"blur",this.inputStartBlurListener)),this.adapter.registerThumbEventHandler(e.b.END,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(e.b.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(e.b.END,"change",this.inputEndChangeListener),this.adapter.registerInputEventHandler(e.b.END,"focus",this.inputEndFocusListener),this.adapter.registerInputEventHandler(e.b.END,"blur",this.inputEndBlurListener)},i.prototype.deregisterEventHandlers=function(){this.adapter.deregisterWindowEventHandler("resize",this.resizeListener),i.SUPPORTS_POINTER_EVENTS?(this.adapter.deregisterEventHandler("pointerdown",this.pointerdownListener),this.adapter.deregisterEventHandler("pointerup",this.pointerupListener)):(this.adapter.deregisterEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.deregisterEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.deregisterThumbEventHandler(e.b.START,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(e.b.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(e.b.START,"change",this.inputStartChangeListener),this.adapter.deregisterInputEventHandler(e.b.START,"focus",this.inputStartFocusListener),this.adapter.deregisterInputEventHandler(e.b.START,"blur",this.inputStartBlurListener)),this.adapter.deregisterThumbEventHandler(e.b.END,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(e.b.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(e.b.END,"change",this.inputEndChangeListener),this.adapter.deregisterInputEventHandler(e.b.END,"focus",this.inputEndFocusListener),this.adapter.deregisterInputEventHandler(e.b.END,"blur",this.inputEndBlurListener)},i.prototype.handlePointerup=function(){this.handleUp(),this.adapter.deregisterEventHandler("pointermove",this.moveListener)},i.SUPPORTS_POINTER_EVENTS=a&&Boolean(window.PointerEvent)&&!T(),i}(c.K);function T(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}function E(n){var i=/(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(n));if(!i)return 0;var t=i[1]||"",r=i[2]||0;return Math.max(0,(t==="0"?0:t.length)-Number(r))}},792:(L,R,v)=>{v.d(R,{X:()=>f,b:()=>S});/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f;(function(l){l[l.ACTIVE=0]="ACTIVE",l[l.INACTIVE=1]="INACTIVE"})(f||(f={}));var S;(function(l){l[l.START=1]="START",l[l.END=2]="END"})(S||(S={}))},3791:(L,R,v)=>{v.d(R,{$:()=>E});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},c={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},p={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var e=l.OPENING,d=l.OPEN,a=l.CLOSING,u=c.REASON_ACTION,T=c.REASON_DISMISS,E=function(i){(0,f.ZT)(t,i);function t(r){var o=i.call(this,(0,f.pi)((0,f.pi)({},t.defaultAdapter),r))||this;return o.opened=!1,o.animationFrame=0,o.animationTimer=0,o.autoDismissTimer=0,o.autoDismissTimeoutMs=p.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,o.closeOnEscape=!0,o}return Object.defineProperty(t,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),t.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(e),this.adapter.removeClass(d),this.adapter.removeClass(a)},t.prototype.open=function(){var r=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(a),this.adapter.addClass(e),this.adapter.announce(),this.runNextAnimationFrame(function(){r.adapter.addClass(d),r.animationTimer=setTimeout(function(){var o=r.getTimeoutMs();r.handleAnimationTimerEnd(),r.adapter.notifyOpened(),o!==p.INDETERMINATE&&(r.autoDismissTimer=setTimeout(function(){r.close(T)},o))},p.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},t.prototype.close=function(r){var o=this;r===void 0&&(r=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(r),this.adapter.addClass(l.CLOSING),this.adapter.removeClass(l.OPEN),this.adapter.removeClass(l.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){o.handleAnimationTimerEnd(),o.adapter.notifyClosed(r)},p.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},t.prototype.isOpen=function(){return this.opened},t.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},t.prototype.setTimeoutMs=function(r){var o=p.MIN_AUTO_DISMISS_TIMEOUT_MS,h=p.MAX_AUTO_DISMISS_TIMEOUT_MS,C=p.INDETERMINATE;if(r===p.INDETERMINATE||r<=h&&r>=o)this.autoDismissTimeoutMs=r;else throw new Error(`
        timeoutMs must be an integer in the range `+o+"\u2013"+h+`
        (or `+C+" to disable), but got '"+r+"'")},t.prototype.getCloseOnEscape=function(){return this.closeOnEscape},t.prototype.setCloseOnEscape=function(r){this.closeOnEscape=r},t.prototype.handleKeyDown=function(r){var o=r.key==="Escape"||r.keyCode===27;o&&this.getCloseOnEscape()&&this.close(T)},t.prototype.handleActionButtonClick=function(r){this.close(u)},t.prototype.handleActionIconClick=function(r){this.close(T)},t.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},t.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(l.OPENING),this.adapter.removeClass(l.CLOSING)},t.prototype.runNextAnimationFrame=function(r){var o=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){o.animationFrame=0,clearTimeout(o.animationTimer),o.animationTimer=setTimeout(r,0)})},t}(S.K);const n=null},5894:(L,R,v)=>{v.d(R,{N:()=>f});/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f;(function(l){l.PROCESSING="mdc-switch--processing",l.SELECTED="mdc-switch--selected",l.UNSELECTED="mdc-switch--unselected"})(f||(f={}));var S;(function(l){l.RIPPLE=".mdc-switch__ripple"})(S||(S={}))},9742:(L,R,v)=>{v.d(R,{O:()=>n});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function l(i){i===void 0&&(i=function(){function r(){}return r}());var t=new WeakMap;return function(r){__extends(o,r);function o(){return r!==null&&r.apply(this,arguments)||this}return o.prototype.observe=function(h,C){var g,A,m=this,s=[];try{for(var I=__values(Object.keys(C)),_=I.next();!_.done;_=I.next()){var y=_.value,D=C[y].bind(this);s.push(c(h,y,D))}}catch(M){g={error:M}}finally{try{_&&!_.done&&(A=I.return)&&A.call(I)}finally{if(g)throw g.error}}var O=function(){var M,F;try{for(var x=__values(s),N=x.next();!N.done;N=x.next()){var H=N.value;H()}}catch(K){M={error:K}}finally{try{N&&!N.done&&(F=x.return)&&F.call(x)}finally{if(M)throw M.error}}var B=t.get(m)||[],P=B.indexOf(O);P>-1&&B.splice(P,1)},b=t.get(this);return b||(b=[],t.set(this,b)),b.push(O),O},o.prototype.setObserversEnabled=function(h,C){a(h,C)},o.prototype.unobserve=function(){var h,C,g=t.get(this)||[];try{for(var A=__values(__spreadArray([],__read(g))),m=A.next();!m.done;m=A.next()){var s=m.value;s()}}catch(I){h={error:I}}finally{try{m&&!m.done&&(C=A.return)&&C.call(A)}finally{if(h)throw h.error}}},o}(i)}function c(i,t,r){var o=e(i,t),h=o.getObservers(t);return h.push(r),function(){h.splice(h.indexOf(r),1)}}var p=new WeakMap;function e(i,t){var r=new Map;p.has(i)||p.set(i,{isEnabled:!0,getObservers:function(s){var I=r.get(s)||[];return r.has(s)||r.set(s,I),I},installedProperties:new Set});var o=p.get(i);if(o.installedProperties.has(t))return o;var h=d(i,t)||{configurable:!0,enumerable:!0,value:i[t],writable:!0},C=(0,f.pi)({},h),g=h.get,A=h.set;if("value"in h){delete C.value,delete C.writable;var m=h.value;g=function(){return m},h.writable&&(A=function(s){m=s})}return g&&(C.get=function(){return g.call(this)}),A&&(C.set=function(s){var I,_,y=g?g.call(this):s;if(A.call(this,s),o.isEnabled&&(!g||s!==y))try{for(var D=(0,f.XA)(o.getObservers(t)),O=D.next();!O.done;O=D.next()){var b=O.value;b(s,y)}}catch(M){I={error:M}}finally{try{O&&!O.done&&(_=D.return)&&_.call(D)}finally{if(I)throw I.error}}}),o.installedProperties.add(t),Object.defineProperty(i,t,C),o}function d(i,t){for(var r=i,o;r&&(o=Object.getOwnPropertyDescriptor(r,t),!o);)r=Object.getPrototypeOf(r);return o}function a(i,t){var r=p.get(i);r&&(r.isEnabled=t)}/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var u=function(i){(0,f.ZT)(t,i);function t(r){var o=i.call(this,r)||this;return o.unobserves=new Set,o}return t.prototype.destroy=function(){i.prototype.destroy.call(this),this.unobserve()},t.prototype.observe=function(r,o){var h,C,g=this,A=[];try{for(var m=(0,f.XA)(Object.keys(o)),s=m.next();!s.done;s=m.next()){var I=s.value,_=o[I].bind(this);A.push(this.observeProperty(r,I,_))}}catch(D){h={error:D}}finally{try{s&&!s.done&&(C=m.return)&&C.call(m)}finally{if(h)throw h.error}}var y=function(){var D,O;try{for(var b=(0,f.XA)(A),M=b.next();!M.done;M=b.next()){var F=M.value;F()}}catch(x){D={error:x}}finally{try{M&&!M.done&&(O=b.return)&&O.call(b)}finally{if(D)throw D.error}}g.unobserves.delete(y)};return this.unobserves.add(y),y},t.prototype.observeProperty=function(r,o,h){return c(r,o,h)},t.prototype.setObserversEnabled=function(r,o){a(r,o)},t.prototype.unobserve=function(){var r,o;try{for(var h=(0,f.XA)((0,f.ev)([],(0,f.CR)(this.unobserves))),C=h.next();!C.done;C=h.next()){var g=C.value;g()}}catch(A){r={error:A}}finally{try{C&&!C.done&&(o=h.return)&&o.call(h)}finally{if(r)throw r.error}}},t}(S.K),T=v(5894);/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var E=function(i){(0,f.ZT)(t,i);function t(r){var o=i.call(this,r)||this;return o.handleClick=o.handleClick.bind(o),o}return t.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},t.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},t.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},t}(u),n=function(i){(0,f.ZT)(t,i);function t(){return i!==null&&i.apply(this,arguments)||this}return t.prototype.init=function(){i.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},t.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(T.N.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(T.N.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},t.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},t.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,T.N.PROCESSING)},t.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,T.N.SELECTED),this.toggleClass(!this.adapter.state.selected,T.N.UNSELECTED)},t.prototype.toggleClass=function(r,o){r?this.adapter.addClass(o):this.adapter.removeClass(o)},t}(E)},9532:(L,R,v)=>{v.d(R,{E:()=>d});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},c={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p=new Set;p.add(l.ARROW_LEFT_KEY),p.add(l.ARROW_RIGHT_KEY),p.add(l.END_KEY),p.add(l.HOME_KEY),p.add(l.ENTER_KEY),p.add(l.SPACE_KEY);var e=new Map;e.set(c.ARROW_LEFT_KEYCODE,l.ARROW_LEFT_KEY),e.set(c.ARROW_RIGHT_KEYCODE,l.ARROW_RIGHT_KEY),e.set(c.END_KEYCODE,l.END_KEY),e.set(c.HOME_KEYCODE,l.HOME_KEY),e.set(c.ENTER_KEYCODE,l.ENTER_KEY),e.set(c.SPACE_KEYCODE,l.SPACE_KEY);var d=function(u){(0,f.ZT)(T,u);function T(E){var n=u.call(this,(0,f.pi)((0,f.pi)({},T.defaultAdapter),E))||this;return n.useAutomaticActivation=!1,n}return Object.defineProperty(T,"strings",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(T,"numbers",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(T,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),T.prototype.setUseAutomaticActivation=function(E){this.useAutomaticActivation=E},T.prototype.activateTab=function(E){var n=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(E)||E===n)){var i;n!==-1&&(this.adapter.deactivateTabAtIndex(n),i=this.adapter.getTabIndicatorClientRectAtIndex(n)),this.adapter.activateTabAtIndex(E,i),this.scrollIntoView(E),this.adapter.notifyTabActivated(E)}},T.prototype.handleKeyDown=function(E){var n=this.getKeyFromEvent(E);if(n!==void 0)if(this.isActivationKey(n)||E.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(n))return;var i=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),n);this.adapter.setActiveTab(i),this.scrollIntoView(i)}else{var t=this.adapter.getFocusedTabIndex();if(this.isActivationKey(n))this.adapter.setActiveTab(t);else{var i=this.determineTargetFromKey(t,n);this.adapter.focusTabAtIndex(i),this.scrollIntoView(i)}}},T.prototype.handleTabInteraction=function(E){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(E.detail.tabId))},T.prototype.scrollIntoView=function(E){if(!!this.indexIsInRange(E)){if(E===0){this.adapter.scrollTo(0);return}if(E===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(E);return}this.scrollIntoViewImpl(E)}},T.prototype.determineTargetFromKey=function(E,n){var i=this.isRTL(),t=this.adapter.getTabListLength()-1,r=n===l.END_KEY,o=n===l.ARROW_LEFT_KEY&&!i||n===l.ARROW_RIGHT_KEY&&i,h=n===l.ARROW_RIGHT_KEY&&!i||n===l.ARROW_LEFT_KEY&&i,C=E;return r?C=t:o?C-=1:h?C+=1:C=0,C<0?C=t:C>t&&(C=0),C},T.prototype.calculateScrollIncrement=function(E,n,i,t){var r=this.adapter.getTabDimensionsAtIndex(n),o=r.contentLeft-i-t,h=r.contentRight-i,C=h-c.EXTRA_SCROLL_AMOUNT,g=o+c.EXTRA_SCROLL_AMOUNT;return n<E?Math.min(C,0):Math.max(g,0)},T.prototype.calculateScrollIncrementRTL=function(E,n,i,t,r){var o=this.adapter.getTabDimensionsAtIndex(n),h=r-o.contentLeft-i,C=r-o.contentRight-i-t,g=C+c.EXTRA_SCROLL_AMOUNT,A=h-c.EXTRA_SCROLL_AMOUNT;return n>E?Math.max(g,0):Math.min(A,0)},T.prototype.findAdjacentTabIndexClosestToEdge=function(E,n,i,t){var r=n.rootLeft-i,o=n.rootRight-i-t,h=r+o,C=r<0||h<0,g=o>0||h>0;return C?E-1:g?E+1:-1},T.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(E,n,i,t,r){var o=r-n.rootLeft-t-i,h=r-n.rootRight-i,C=o+h,g=o>0||C>0,A=h<0||C<0;return g?E+1:A?E-1:-1},T.prototype.getKeyFromEvent=function(E){return p.has(E.key)?E.key:e.get(E.keyCode)},T.prototype.isActivationKey=function(E){return E===l.SPACE_KEY||E===l.ENTER_KEY},T.prototype.indexIsInRange=function(E){return E>=0&&E<this.adapter.getTabListLength()},T.prototype.isRTL=function(){return this.adapter.isRTL()},T.prototype.scrollIntoViewImpl=function(E){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),t=this.adapter.getTabDimensionsAtIndex(E),r=this.findAdjacentTabIndexClosestToEdge(E,t,n,i);if(!!this.indexIsInRange(r)){var o=this.calculateScrollIncrement(E,r,n,i);this.adapter.incrementScroll(o)}},T.prototype.scrollIntoViewImplRTL=function(E){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),t=this.adapter.getTabDimensionsAtIndex(E),r=this.adapter.getScrollContentWidth(),o=this.findAdjacentTabIndexClosestToEdgeRTL(E,t,n,i,r);if(!!this.indexIsInRange(o)){var h=this.calculateScrollIncrementRTL(E,o,n,i,r);this.adapter.incrementScroll(h)}},T}(S.K);const a=null},9407:(L,R,v)=>{v.d(R,{N:()=>l});var f=v(5500),S=v(524);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(p){(0,f.ZT)(e,p);function e(){return p!==null&&p.apply(this,arguments)||this}return e.prototype.activate=function(){this.adapter.addClass(S.G.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(S.G.cssClasses.ACTIVE)},e}(S.G),c=null},524:(L,R,v)=>{v.d(R,{G:()=>p});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},c={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p=function(d){(0,f.ZT)(a,d);function a(u){return d.call(this,(0,f.pi)((0,f.pi)({},a.defaultAdapter),u))||this}return Object.defineProperty(a,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),a.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},a}(S.K);const e=null},9852:(L,R,v)=>{v.d(R,{f:()=>l});var f=v(5500),S=v(524);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(p){(0,f.ZT)(e,p);function e(){return p!==null&&p.apply(this,arguments)||this}return e.prototype.activate=function(d){if(!d){this.adapter.addClass(S.G.cssClasses.ACTIVE);return}var a=this.computeContentClientRect(),u=d.width/a.width,T=d.left-a.left;this.adapter.addClass(S.G.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+T+"px) scaleX("+u+")"),this.computeContentClientRect(),this.adapter.removeClass(S.G.cssClasses.NO_TRANSITION),this.adapter.addClass(S.G.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},e.prototype.deactivate=function(){this.adapter.removeClass(S.G.cssClasses.ACTIVE)},e}(S.G),c=null},1527:(L,R,v)=>{v.d(R,{U:()=>f,j:()=>S});/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},S={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"}},6173:(L,R,v)=>{v.d(R,{S:()=>n});var f=v(5500),S=v(3264),l=v(1527);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c=function(){function t(r){this.adapter=r}return t}();const p=null;/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var e=function(t){(0,f.ZT)(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.getScrollPositionRTL=function(){var o=this.adapter.getScrollAreaScrollLeft(),h=this.calculateScrollEdges().right;return Math.round(h-o)},r.prototype.scrollToRTL=function(o){var h=this.calculateScrollEdges(),C=this.adapter.getScrollAreaScrollLeft(),g=this.clampScrollValue(h.right-o);return{finalScrollPosition:g,scrollDelta:g-C}},r.prototype.incrementScrollRTL=function(o){var h=this.adapter.getScrollAreaScrollLeft(),C=this.clampScrollValue(h-o);return{finalScrollPosition:C,scrollDelta:C-h}},r.prototype.getAnimatingScrollPosition=function(o){return o},r.prototype.calculateScrollEdges=function(){var o=this.adapter.getScrollContentOffsetWidth(),h=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:o-h}},r.prototype.clampScrollValue=function(o){var h=this.calculateScrollEdges();return Math.min(Math.max(h.left,o),h.right)},r}(c);const d=null;/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var a=function(t){(0,f.ZT)(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.getScrollPositionRTL=function(o){var h=this.adapter.getScrollAreaScrollLeft();return Math.round(o-h)},r.prototype.scrollToRTL=function(o){var h=this.adapter.getScrollAreaScrollLeft(),C=this.clampScrollValue(-o);return{finalScrollPosition:C,scrollDelta:C-h}},r.prototype.incrementScrollRTL=function(o){var h=this.adapter.getScrollAreaScrollLeft(),C=this.clampScrollValue(h-o);return{finalScrollPosition:C,scrollDelta:C-h}},r.prototype.getAnimatingScrollPosition=function(o,h){return o-h},r.prototype.calculateScrollEdges=function(){var o=this.adapter.getScrollContentOffsetWidth(),h=this.adapter.getScrollAreaOffsetWidth();return{left:h-o,right:0}},r.prototype.clampScrollValue=function(o){var h=this.calculateScrollEdges();return Math.max(Math.min(h.right,o),h.left)},r}(c);const u=null;/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var T=function(t){(0,f.ZT)(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.getScrollPositionRTL=function(o){var h=this.adapter.getScrollAreaScrollLeft();return Math.round(h-o)},r.prototype.scrollToRTL=function(o){var h=this.adapter.getScrollAreaScrollLeft(),C=this.clampScrollValue(o);return{finalScrollPosition:C,scrollDelta:h-C}},r.prototype.incrementScrollRTL=function(o){var h=this.adapter.getScrollAreaScrollLeft(),C=this.clampScrollValue(h+o);return{finalScrollPosition:C,scrollDelta:h-C}},r.prototype.getAnimatingScrollPosition=function(o,h){return o+h},r.prototype.calculateScrollEdges=function(){var o=this.adapter.getScrollContentOffsetWidth(),h=this.adapter.getScrollAreaOffsetWidth();return{left:o-h,right:0}},r.prototype.clampScrollValue=function(o){var h=this.calculateScrollEdges();return Math.min(Math.max(h.right,o),h.left)},r}(c);const E=null;/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var n=function(t){(0,f.ZT)(r,t);function r(o){var h=t.call(this,(0,f.pi)((0,f.pi)({},r.defaultAdapter),o))||this;return h.isAnimating=!1,h}return Object.defineProperty(r,"cssClasses",{get:function(){return l.U},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return l.j},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),r.prototype.init=function(){var o=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-o+"px"),this.adapter.addScrollAreaClass(r.cssClasses.SCROLL_AREA_SCROLL)},r.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var o=this.calculateCurrentTranslateX(),h=this.adapter.getScrollAreaScrollLeft();return h-o},r.prototype.handleInteraction=function(){!this.isAnimating||this.stopScrollAnimation()},r.prototype.handleTransitionEnd=function(o){var h=o.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(h,r.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(r.cssClasses.ANIMATING))},r.prototype.incrementScroll=function(o){o!==0&&this.animate(this.getIncrementScrollOperation(o))},r.prototype.incrementScrollImmediate=function(o){if(o!==0){var h=this.getIncrementScrollOperation(o);h.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(h.finalScrollPosition))}},r.prototype.scrollTo=function(o){if(this.isRTL()){this.scrollToImplRTL(o);return}this.scrollToImpl(o)},r.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},r.prototype.calculateCurrentTranslateX=function(){var o=this.adapter.getScrollContentStyleValue("transform");if(o==="none")return 0;var h=/\((.+?)\)/.exec(o);if(!h)return 0;var C=h[1],g=(0,f.CR)(C.split(","),6),A=g[0],m=g[1],s=g[2],I=g[3],_=g[4],y=g[5];return parseFloat(_)},r.prototype.clampScrollValue=function(o){var h=this.calculateScrollEdges();return Math.min(Math.max(h.left,o),h.right)},r.prototype.computeCurrentScrollPositionRTL=function(){var o=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(o)},r.prototype.calculateScrollEdges=function(){var o=this.adapter.getScrollContentOffsetWidth(),h=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:o-h}},r.prototype.scrollToImpl=function(o){var h=this.getScrollPosition(),C=this.clampScrollValue(o),g=C-h;this.animate({finalScrollPosition:C,scrollDelta:g})},r.prototype.scrollToImplRTL=function(o){var h=this.getRTLScroller().scrollToRTL(o);this.animate(h)},r.prototype.getIncrementScrollOperation=function(o){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(o);var h=this.getScrollPosition(),C=o+h,g=this.clampScrollValue(C),A=g-h;return{finalScrollPosition:g,scrollDelta:A}},r.prototype.animate=function(o){var h=this;o.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(o.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+o.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){h.adapter.addClass(r.cssClasses.ANIMATING),h.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},r.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var o=this.getAnimatingScrollPosition();this.adapter.removeClass(r.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(o)},r.prototype.getAnimatingScrollPosition=function(){var o=this.calculateCurrentTranslateX(),h=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(h,o):h-o},r.prototype.rtlScrollerFactory=function(){var o=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(o-1);var h=this.adapter.getScrollAreaScrollLeft();if(h<0)return this.adapter.setScrollAreaScrollLeft(o),new a(this.adapter);var C=this.adapter.computeScrollAreaClientRect(),g=this.adapter.computeScrollContentClientRect(),A=Math.round(g.right-C.right);return this.adapter.setScrollAreaScrollLeft(o),A===h?new T(this.adapter):new e(this.adapter)},r.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},r}(S.K);const i=null},8073:(L,R,v)=>{v.d(R,{F:()=>l});var f=v(1527);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var S;function l(c,p){if(p===void 0&&(p=!0),p&&typeof S!="undefined")return S;var e=c.createElement("div");e.classList.add(f.U.SCROLL_TEST),c.body.appendChild(e);var d=e.offsetHeight-e.clientHeight;return c.body.removeChild(e),p&&(S=d),d}},2615:(L,R,v)=>{v.d(R,{Z:()=>e});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={ACTIVE:"mdc-tab--active"},c={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p=function(d){(0,f.ZT)(a,d);function a(u){var T=d.call(this,(0,f.pi)((0,f.pi)({},a.defaultAdapter),u))||this;return T.focusOnActivate=!0,T}return Object.defineProperty(a,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),a.prototype.handleClick=function(){this.adapter.notifyInteracted()},a.prototype.isActive=function(){return this.adapter.hasClass(l.ACTIVE)},a.prototype.setFocusOnActivate=function(u){this.focusOnActivate=u},a.prototype.activate=function(u){this.adapter.addClass(l.ACTIVE),this.adapter.setAttr(c.ARIA_SELECTED,"true"),this.adapter.setAttr(c.TABINDEX,"0"),this.adapter.activateIndicator(u),this.focusOnActivate&&this.adapter.focus()},a.prototype.deactivate=function(){!this.isActive()||(this.adapter.removeClass(l.ACTIVE),this.adapter.setAttr(c.ARIA_SELECTED,"false"),this.adapter.setAttr(c.TABINDEX,"-1"),this.adapter.deactivateIndicator())},a.prototype.computeDimensions=function(){var u=this.adapter.getOffsetWidth(),T=this.adapter.getOffsetLeft(),E=this.adapter.getContentOffsetWidth(),n=this.adapter.getContentOffsetLeft();return{contentLeft:T+n,contentRight:T+n+E,rootLeft:T,rootRight:T+u}},a}(S.K);const e=p},8590:(L,R,v)=>{v.d(R,{J:()=>p});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={ROOT:"mdc-text-field-character-counter"},c={ROOT_SELECTOR:"."+l.ROOT};/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p=function(d){(0,f.ZT)(a,d);function a(u){return d.call(this,(0,f.pi)((0,f.pi)({},a.defaultAdapter),u))||this}return Object.defineProperty(a,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!1,configurable:!0}),a.prototype.setCounterValue=function(u,T){u=Math.min(u,T),this.adapter.setContent(u+" / "+T)},a}(S.K);const e=null},648:(L,R,v)=>{v.d(R,{y:()=>T});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},c={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},p={LABEL_SCALE:.75},e=["pattern","min","max","required","step","minlength","maxlength"],d=["color","date","datetime-local","month","range","time","week"];/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var a=["mousedown","touchstart"],u=["click","keydown"],T=function(n){(0,f.ZT)(i,n);function i(t,r){r===void 0&&(r={});var o=n.call(this,(0,f.pi)((0,f.pi)({},i.defaultAdapter),t))||this;return o.isFocused=!1,o.receivedUserInput=!1,o.valid=!0,o.useNativeValidation=!0,o.validateOnValueChange=!0,o.helperText=r.helperText,o.characterCounter=r.characterCounter,o.leadingIcon=r.leadingIcon,o.trailingIcon=r.trailingIcon,o.inputFocusHandler=function(){o.activateFocus()},o.inputBlurHandler=function(){o.deactivateFocus()},o.inputInputHandler=function(){o.handleInput()},o.setPointerXOffset=function(h){o.setTransformOrigin(h)},o.textFieldInteractionHandler=function(){o.handleTextFieldInteraction()},o.validationAttributeChangeHandler=function(h){o.handleValidationAttributeChange(h)},o}return Object.defineProperty(i,"cssClasses",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return d.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){var t,r,o,h;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var C=(0,f.XA)(a),g=C.next();!g.done;g=C.next()){var A=g.value;this.adapter.registerInputInteractionHandler(A,this.setPointerXOffset)}}catch(I){t={error:I}}finally{try{g&&!g.done&&(r=C.return)&&r.call(C)}finally{if(t)throw t.error}}try{for(var m=(0,f.XA)(u),s=m.next();!s.done;s=m.next()){var A=s.value;this.adapter.registerTextFieldInteractionHandler(A,this.textFieldInteractionHandler)}}catch(I){o={error:I}}finally{try{s&&!s.done&&(h=m.return)&&h.call(m)}finally{if(o)throw o.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},i.prototype.destroy=function(){var t,r,o,h;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var C=(0,f.XA)(a),g=C.next();!g.done;g=C.next()){var A=g.value;this.adapter.deregisterInputInteractionHandler(A,this.setPointerXOffset)}}catch(I){t={error:I}}finally{try{g&&!g.done&&(r=C.return)&&r.call(C)}finally{if(t)throw t.error}}try{for(var m=(0,f.XA)(u),s=m.next();!s.done;s=m.next()){var A=s.value;this.adapter.deregisterTextFieldInteractionHandler(A,this.textFieldInteractionHandler)}}catch(I){o={error:I}}finally{try{s&&!s.done&&(h=m.return)&&h.call(m)}finally{if(o)throw o.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},i.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},i.prototype.handleValidationAttributeChange=function(t){var r=this;t.some(function(o){return e.indexOf(o)>-1?(r.styleValidity(!0),r.adapter.setLabelRequired(r.getNativeInput().required),!0):!1}),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},i.prototype.notchOutline=function(t){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(t){var r=this.adapter.getLabelWidth()*p.LABEL_SCALE;this.adapter.notchOutline(r)}else this.adapter.closeOutline()},i.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},i.prototype.setTransformOrigin=function(t){if(!(this.isDisabled()||this.adapter.hasOutline())){var r=t.touches,o=r?r[0]:t,h=o.target.getBoundingClientRect(),C=o.clientX-h.left;this.adapter.setLineRippleTransformOrigin(C)}},i.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},i.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},i.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},i.prototype.getValue=function(){return this.getNativeInput().value},i.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var r=this.isValid();this.styleValidity(r)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},i.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},i.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var r=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(r)},i.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},i.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},i.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},i.prototype.isDisabled=function(){return this.getNativeInput().disabled},i.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},i.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},i.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},i.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},i.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},i.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},i.prototype.setcharacterCounter=function(t){if(!!this.characterCounter){var r=this.getNativeInput().maxLength;if(r===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,r)}},i.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},i.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},i.prototype.styleValidity=function(t){var r=i.cssClasses.INVALID;if(t?this.adapter.removeClass(r):this.adapter.addClass(r),this.helperText){this.helperText.setValidity(t);var o=this.helperText.isValidation();if(!o)return;var h=this.helperText.isVisible(),C=this.helperText.getId();h&&C?this.adapter.setInputAttr(l.ARIA_DESCRIBEDBY,C):this.adapter.removeInputAttr(l.ARIA_DESCRIBEDBY)}},i.prototype.styleFocused=function(t){var r=i.cssClasses.FOCUSED;t?this.adapter.addClass(r):this.adapter.removeClass(r)},i.prototype.styleDisabled=function(t){var r=i.cssClasses,o=r.DISABLED,h=r.INVALID;t?(this.adapter.addClass(o),this.adapter.removeClass(h)):this.adapter.removeClass(o),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},i.prototype.styleFloating=function(t){var r=i.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(r):this.adapter.removeClass(r)},i.prototype.getNativeInput=function(){var t=this.adapter?this.adapter.getNativeInput():null;return t||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},i}(S.K);const E=null},7969:(L,R,v)=>{v.d(R,{w:()=>p});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},c={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+l.ROOT};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p=function(d){(0,f.ZT)(a,d);function a(u){return d.call(this,(0,f.pi)((0,f.pi)({},a.defaultAdapter),u))||this}return Object.defineProperty(a,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),a.prototype.getId=function(){return this.adapter.getAttr("id")},a.prototype.isVisible=function(){return this.adapter.getAttr(c.ARIA_HIDDEN)!=="true"},a.prototype.setContent=function(u){this.adapter.setContent(u)},a.prototype.isPersistent=function(){return this.adapter.hasClass(l.HELPER_TEXT_PERSISTENT)},a.prototype.setPersistent=function(u){u?this.adapter.addClass(l.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(l.HELPER_TEXT_PERSISTENT)},a.prototype.isValidation=function(){return this.adapter.hasClass(l.HELPER_TEXT_VALIDATION_MSG)},a.prototype.setValidation=function(u){u?this.adapter.addClass(l.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(l.HELPER_TEXT_VALIDATION_MSG)},a.prototype.showToScreenReader=function(){this.adapter.removeAttr(c.ARIA_HIDDEN)},a.prototype.setValidity=function(u){var T=this.adapter.hasClass(l.HELPER_TEXT_PERSISTENT),E=this.adapter.hasClass(l.HELPER_TEXT_VALIDATION_MSG),n=E&&!u;n?(this.showToScreenReader(),this.adapter.getAttr(c.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(c.ROLE,"alert")):this.adapter.removeAttr(c.ROLE),!T&&!n&&this.hide()},a.prototype.hide=function(){this.adapter.setAttr(c.ARIA_HIDDEN,"true")},a.prototype.refreshAlertRole=function(){var u=this;this.adapter.removeAttr(c.ROLE),requestAnimationFrame(function(){u.adapter.setAttr(c.ROLE,"alert")})},a}(S.K);const e=null},3592:(L,R,v)=>{v.d(R,{D:()=>e});var f=v(5500),S=v(3264);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},c={ROOT:"mdc-text-field__icon"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p=["click","keydown"],e=function(a){(0,f.ZT)(u,a);function u(T){var E=a.call(this,(0,f.pi)((0,f.pi)({},u.defaultAdapter),T))||this;return E.savedTabIndex=null,E.interactionHandler=function(n){E.handleInteraction(n)},E}return Object.defineProperty(u,"strings",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(u,"cssClasses",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(u,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),u.prototype.init=function(){var T,E;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var n=(0,f.XA)(p),i=n.next();!i.done;i=n.next()){var t=i.value;this.adapter.registerInteractionHandler(t,this.interactionHandler)}}catch(r){T={error:r}}finally{try{i&&!i.done&&(E=n.return)&&E.call(n)}finally{if(T)throw T.error}}},u.prototype.destroy=function(){var T,E;try{for(var n=(0,f.XA)(p),i=n.next();!i.done;i=n.next()){var t=i.value;this.adapter.deregisterInteractionHandler(t,this.interactionHandler)}}catch(r){T={error:r}}finally{try{i&&!i.done&&(E=n.return)&&E.call(n)}finally{if(T)throw T.error}}},u.prototype.setDisabled=function(T){!this.savedTabIndex||(T?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",l.ICON_ROLE)))},u.prototype.setAriaLabel=function(T){this.adapter.setAttr("aria-label",T)},u.prototype.setContent=function(T){this.adapter.setContent(T)},u.prototype.handleInteraction=function(T){var E=T.key==="Enter"||T.keyCode===13;(T.type==="click"||E)&&(T.preventDefault(),this.adapter.notifyIconAction())},u}(S.K);const d=null},604:(L,R,v)=>{v.d(R,{JB:()=>e,KT:()=>S,Nx:()=>f,OT:()=>d,PQ:()=>p,U3:()=>c,Y4:()=>l,YK:()=>E,i9:()=>T,j2:()=>a,qU:()=>u});/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f;(function(n){n.RICH="mdc-tooltip--rich",n.SHOWN="mdc-tooltip--shown",n.SHOWING="mdc-tooltip--showing",n.SHOWING_TRANSITION="mdc-tooltip--showing-transition",n.HIDE="mdc-tooltip--hide",n.HIDE_TRANSITION="mdc-tooltip--hide-transition",n.MULTILINE_TOOLTIP="mdc-tooltip--multiline",n.SURFACE="mdc-tooltip__surface",n.SURFACE_ANIMATION="mdc-tooltip__surface-animation",n.TOOLTIP_CARET_TOP="mdc-tooltip__caret-surface-top",n.TOOLTIP_CARET_BOTTOM="mdc-tooltip__caret-surface-bottom"})(f||(f={}));var S={BOUNDED_ANCHOR_GAP:4,UNBOUNDED_ANCHOR_GAP:8,MIN_VIEWPORT_TOOLTIP_THRESHOLD:8,HIDE_DELAY_MS:600,SHOW_DELAY_MS:500,MIN_HEIGHT:24,MAX_WIDTH:200,CARET_INDENTATION:24,ANIMATION_SCALE:.8},l={ARIA_EXPANDED:"aria-expanded",ARIA_HASPOPUP:"aria-haspopup",PERSISTENT:"data-mdc-tooltip-persistent",SCROLLABLE_ANCESTOR:"tooltip-scrollable-ancestor",HAS_CARET:"data-mdc-tooltip-has-caret"},c={HIDDEN:"MDCTooltip:hidden"},p;(function(n){n[n.DETECTED=0]="DETECTED",n[n.START=1]="START",n[n.CENTER=2]="CENTER",n[n.END=3]="END"})(p||(p={}));var e;(function(n){n[n.DETECTED=0]="DETECTED",n[n.ABOVE=1]="ABOVE",n[n.BELOW=2]="BELOW"})(e||(e={}));var d;(function(n){n[n.BOUNDED=0]="BOUNDED",n[n.UNBOUNDED=1]="UNBOUNDED"})(d||(d={}));var a={LEFT:"left",RIGHT:"right",CENTER:"center",TOP:"top",BOTTOM:"bottom"},u;(function(n){n[n.DETECTED=0]="DETECTED",n[n.ABOVE_START=1]="ABOVE_START",n[n.ABOVE_CENTER=2]="ABOVE_CENTER",n[n.ABOVE_END=3]="ABOVE_END",n[n.TOP_SIDE_START=4]="TOP_SIDE_START",n[n.CENTER_SIDE_START=5]="CENTER_SIDE_START",n[n.BOTTOM_SIDE_START=6]="BOTTOM_SIDE_START",n[n.TOP_SIDE_END=7]="TOP_SIDE_END",n[n.CENTER_SIDE_END=8]="CENTER_SIDE_END",n[n.BOTTOM_SIDE_END=9]="BOTTOM_SIDE_END",n[n.BELOW_START=10]="BELOW_START",n[n.BELOW_CENTER=11]="BELOW_CENTER",n[n.BELOW_END=12]="BELOW_END"})(u||(u={}));var T;(function(n){n[n.ABOVE=1]="ABOVE",n[n.BELOW=2]="BELOW",n[n.SIDE_TOP=3]="SIDE_TOP",n[n.SIDE_CENTER=4]="SIDE_CENTER",n[n.SIDE_BOTTOM=5]="SIDE_BOTTOM"})(T||(T={}));var E;(function(n){n[n.START=1]="START",n[n.CENTER=2]="CENTER",n[n.END=3]="END",n[n.SIDE_START=4]="SIDE_START",n[n.SIDE_END=5]="SIDE_END"})(E||(E={}))},6201:(L,R,v)=>{v.d(R,{S:()=>o});var f=v(5500),S=v(2163),l=v(8604),c=v(3264),p=v(6285),e=v(604);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var d=e.Nx.RICH,a=e.Nx.SHOWN,u=e.Nx.SHOWING,T=e.Nx.SHOWING_TRANSITION,E=e.Nx.HIDE,n=e.Nx.HIDE_TRANSITION,i=e.Nx.MULTILINE_TOOLTIP,t;(function(C){C.POLL_ANCHOR="poll_anchor"})(t||(t={}));var r=typeof window!="undefined",o=function(C){(0,f.ZT)(g,C);function g(A){var m=C.call(this,(0,f.pi)((0,f.pi)({},g.defaultAdapter),A))||this;return m.tooltipShown=!1,m.anchorGap=e.KT.BOUNDED_ANCHOR_GAP,m.xTooltipPos=e.PQ.DETECTED,m.yTooltipPos=e.JB.DETECTED,m.tooltipPositionWithCaret=e.qU.DETECTED,m.minViewportTooltipThreshold=e.KT.MIN_VIEWPORT_TOOLTIP_THRESHOLD,m.hideDelayMs=e.KT.HIDE_DELAY_MS,m.showDelayMs=e.KT.SHOW_DELAY_MS,m.anchorRect=null,m.parentRect=null,m.frameId=null,m.hideTimeout=null,m.showTimeout=null,m.addAncestorScrollEventListeners=new Array,m.removeAncestorScrollEventListeners=new Array,m.animFrame=new S.$,m.anchorBlurHandler=function(s){m.handleAnchorBlur(s)},m.documentClickHandler=function(s){m.handleDocumentClick(s)},m.documentKeydownHandler=function(s){m.handleKeydown(s)},m.tooltipMouseEnterHandler=function(){m.handleTooltipMouseEnter()},m.tooltipMouseLeaveHandler=function(){m.handleTooltipMouseLeave()},m.richTooltipFocusOutHandler=function(s){m.handleRichTooltipFocusOut(s)},m.windowScrollHandler=function(){m.handleWindowScrollEvent()},m.windowResizeHandler=function(){m.handleWindowChangeEvent()},m}return Object.defineProperty(g,"defaultAdapter",{get:function(){return{getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},addClass:function(){},hasClass:function(){return!1},removeClass:function(){},getComputedStyleProperty:function(){return""},setStyleProperty:function(){},setSurfaceAnimationStyleProperty:function(){},getViewportWidth:function(){return 0},getViewportHeight:function(){return 0},getTooltipSize:function(){return{width:0,height:0}},getAnchorBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getParentBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getAnchorAttribute:function(){return null},setAnchorAttribute:function(){return null},isRTL:function(){return!1},anchorContainsElement:function(){return!1},tooltipContainsElement:function(){return!1},focusAnchorElement:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerAnchorEventHandler:function(){},deregisterAnchorEventHandler:function(){},registerDocumentEventHandler:function(){},deregisterDocumentEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){},notifyHidden:function(){},getTooltipCaretBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setTooltipCaretStyle:function(){},clearTooltipCaretStyles:function(){},getActiveElement:function(){return null}}},enumerable:!1,configurable:!0}),g.prototype.init=function(){this.richTooltip=this.adapter.hasClass(d),this.persistentTooltip=this.adapter.getAttribute(e.Y4.PERSISTENT)==="true",this.interactiveTooltip=!!this.adapter.getAnchorAttribute(e.Y4.ARIA_EXPANDED)&&this.adapter.getAnchorAttribute(e.Y4.ARIA_HASPOPUP)==="dialog",this.hasCaret=this.richTooltip&&this.adapter.getAttribute(e.Y4.HAS_CARET)==="true"},g.prototype.isShown=function(){return this.tooltipShown},g.prototype.isRich=function(){return this.richTooltip},g.prototype.isPersistent=function(){return this.persistentTooltip},g.prototype.handleAnchorMouseEnter=function(){var A=this;this.tooltipShown?this.show():(this.clearHideTimeout(),this.showTimeout=setTimeout(function(){A.show()},this.showDelayMs))},g.prototype.handleAnchorTouchstart=function(){var A=this;this.showTimeout=setTimeout(function(){A.show()},this.showDelayMs),this.adapter.registerWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch)},g.prototype.preventContextMenuOnLongTouch=function(A){A.preventDefault()},g.prototype.handleAnchorTouchend=function(){this.clearShowTimeout(),this.isShown()||this.adapter.deregisterWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch)},g.prototype.handleAnchorFocus=function(A){var m=this,s=A.relatedTarget,I=s instanceof HTMLElement&&this.adapter.tooltipContainsElement(s);I||(this.showTimeout=setTimeout(function(){m.show()},this.showDelayMs))},g.prototype.handleAnchorMouseLeave=function(){var A=this;this.clearShowTimeout(),this.hideTimeout=setTimeout(function(){A.hide()},this.hideDelayMs)},g.prototype.handleAnchorClick=function(){this.tooltipShown?this.hide():this.show()},g.prototype.handleDocumentClick=function(A){var m=A.target instanceof HTMLElement&&(this.adapter.anchorContainsElement(A.target)||this.adapter.tooltipContainsElement(A.target));this.richTooltip&&this.persistentTooltip&&m||this.hide()},g.prototype.handleKeydown=function(A){var m=(0,p.ku)(A);if(m===p.Fn.ESCAPE){var s=this.adapter.getActiveElement(),I=s instanceof HTMLElement&&this.adapter.tooltipContainsElement(s);I&&this.adapter.focusAnchorElement(),this.hide()}},g.prototype.handleAnchorBlur=function(A){if(this.richTooltip){var m=A.relatedTarget instanceof HTMLElement&&this.adapter.tooltipContainsElement(A.relatedTarget);if(m||A.relatedTarget===null&&this.interactiveTooltip)return}this.hide()},g.prototype.handleTooltipMouseEnter=function(){this.show()},g.prototype.handleTooltipMouseLeave=function(){var A=this;this.clearShowTimeout(),this.hideTimeout=setTimeout(function(){A.hide()},this.hideDelayMs)},g.prototype.handleRichTooltipFocusOut=function(A){var m=A.relatedTarget instanceof HTMLElement&&(this.adapter.anchorContainsElement(A.relatedTarget)||this.adapter.tooltipContainsElement(A.relatedTarget));m||A.relatedTarget===null&&this.interactiveTooltip||this.hide()},g.prototype.handleWindowScrollEvent=function(){if(this.persistentTooltip){this.handleWindowChangeEvent();return}this.hide()},g.prototype.handleWindowChangeEvent=function(){var A=this;this.animFrame.request(t.POLL_ANCHOR,function(){A.repositionTooltipOnAnchorMove()})},g.prototype.show=function(){var A,m,s=this;if(this.clearHideTimeout(),this.clearShowTimeout(),!this.tooltipShown){this.tooltipShown=!0,this.adapter.removeAttribute("aria-hidden"),this.richTooltip&&(this.interactiveTooltip&&this.adapter.setAnchorAttribute("aria-expanded","true"),this.adapter.registerEventHandler("focusout",this.richTooltipFocusOutHandler)),this.persistentTooltip||(this.adapter.registerEventHandler("mouseenter",this.tooltipMouseEnterHandler),this.adapter.registerEventHandler("mouseleave",this.tooltipMouseLeaveHandler)),this.adapter.removeClass(E),this.adapter.addClass(u),this.isTooltipMultiline()&&!this.richTooltip&&this.adapter.addClass(i),this.anchorRect=this.adapter.getAnchorBoundingRect(),this.parentRect=this.adapter.getParentBoundingRect(),this.richTooltip?this.positionRichTooltip():this.positionPlainTooltip(),this.adapter.registerAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.registerDocumentEventHandler("click",this.documentClickHandler),this.adapter.registerDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.registerWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler);try{for(var I=(0,f.XA)(this.addAncestorScrollEventListeners),_=I.next();!_.done;_=I.next()){var y=_.value;y()}}catch(D){A={error:D}}finally{try{_&&!_.done&&(m=I.return)&&m.call(I)}finally{if(A)throw A.error}}this.frameId=requestAnimationFrame(function(){s.clearAllAnimationClasses(),s.adapter.addClass(a),s.adapter.addClass(T)})}},g.prototype.hide=function(){var A,m;if(this.clearHideTimeout(),this.clearShowTimeout(),!!this.tooltipShown){this.frameId&&cancelAnimationFrame(this.frameId),this.tooltipShown=!1,this.adapter.setAttribute("aria-hidden","true"),this.adapter.deregisterEventHandler("focusout",this.richTooltipFocusOutHandler),this.richTooltip&&this.interactiveTooltip&&this.adapter.setAnchorAttribute("aria-expanded","false"),this.persistentTooltip||(this.adapter.deregisterEventHandler("mouseenter",this.tooltipMouseEnterHandler),this.adapter.deregisterEventHandler("mouseleave",this.tooltipMouseLeaveHandler)),this.clearAllAnimationClasses(),this.adapter.addClass(E),this.adapter.addClass(n),this.adapter.removeClass(a),this.adapter.deregisterAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.deregisterDocumentEventHandler("click",this.documentClickHandler),this.adapter.deregisterDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.deregisterWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch);try{for(var s=(0,f.XA)(this.removeAncestorScrollEventListeners),I=s.next();!I.done;I=s.next()){var _=I.value;_()}}catch(y){A={error:y}}finally{try{I&&!I.done&&(m=s.return)&&m.call(s)}finally{if(A)throw A.error}}}},g.prototype.handleTransitionEnd=function(){var A=this.adapter.hasClass(E);this.adapter.removeClass(u),this.adapter.removeClass(T),this.adapter.removeClass(E),this.adapter.removeClass(n),A&&this.showTimeout===null&&this.adapter.notifyHidden()},g.prototype.clearAllAnimationClasses=function(){this.adapter.removeClass(T),this.adapter.removeClass(n)},g.prototype.setTooltipPosition=function(A){var m=A.xPos,s=A.yPos,I=A.withCaretPos;if(this.hasCaret&&I){this.tooltipPositionWithCaret=I;return}m&&(this.xTooltipPos=m),s&&(this.yTooltipPos=s)},g.prototype.setAnchorBoundaryType=function(A){A===e.OT.UNBOUNDED?this.anchorGap=e.KT.UNBOUNDED_ANCHOR_GAP:this.anchorGap=e.KT.BOUNDED_ANCHOR_GAP},g.prototype.setShowDelay=function(A){this.showDelayMs=A},g.prototype.setHideDelay=function(A){this.hideDelayMs=A},g.prototype.isTooltipMultiline=function(){var A=this.adapter.getTooltipSize();return A.height>e.KT.MIN_HEIGHT&&A.width>=e.KT.MAX_WIDTH},g.prototype.positionPlainTooltip=function(){var A=this.calculateTooltipStyles(this.anchorRect),m=A.top,s=A.yTransformOrigin,I=A.left,_=A.xTransformOrigin,y=r?(0,l.E)(window,"transform"):"transform";this.adapter.setSurfaceAnimationStyleProperty(y+"-origin",_+" "+s),this.adapter.setStyleProperty("top",m+"px"),this.adapter.setStyleProperty("left",I+"px")},g.prototype.positionRichTooltip=function(){var A,m,s,I,_=this.adapter.getComputedStyleProperty("width");this.adapter.setStyleProperty("width",_);var y=this.hasCaret?this.calculateTooltipWithCaretStyles(this.anchorRect):this.calculateTooltipStyles(this.anchorRect),D=y.top,O=y.yTransformOrigin,b=y.left,M=y.xTransformOrigin,F=r?(0,l.E)(window,"transform"):"transform";this.adapter.setSurfaceAnimationStyleProperty(F+"-origin",M+" "+O);var x=b-((m=(A=this.parentRect)===null||A===void 0?void 0:A.left)!==null&&m!==void 0?m:0),N=D-((I=(s=this.parentRect)===null||s===void 0?void 0:s.top)!==null&&I!==void 0?I:0);this.adapter.setStyleProperty("top",N+"px"),this.adapter.setStyleProperty("left",x+"px")},g.prototype.calculateTooltipStyles=function(A){if(!A)return{top:0,left:0};var m=this.adapter.getTooltipSize(),s=this.calculateYTooltipDistance(A,m.height),I=this.calculateXTooltipDistance(A,m.width);return{top:s.distance,yTransformOrigin:s.yTransformOrigin,left:I.distance,xTransformOrigin:I.xTransformOrigin}},g.prototype.calculateXTooltipDistance=function(A,m){var s=!this.adapter.isRTL(),I,_,y,D,O;this.richTooltip?(I=s?A.left-m:A.right,_=s?A.right:A.left-m,D=s?e.j2.RIGHT:e.j2.LEFT,O=s?e.j2.LEFT:e.j2.RIGHT):(I=s?A.left:A.right-m,_=s?A.right-m:A.left,y=A.left+(A.width-m)/2,D=s?e.j2.LEFT:e.j2.RIGHT,O=s?e.j2.RIGHT:e.j2.LEFT);var b=this.richTooltip?this.determineValidPositionOptions(I,_):this.determineValidPositionOptions(y,I,_);if(this.xTooltipPos===e.PQ.START&&b.has(I))return{distance:I,xTransformOrigin:D};if(this.xTooltipPos===e.PQ.END&&b.has(_))return{distance:_,xTransformOrigin:O};if(this.xTooltipPos===e.PQ.CENTER&&b.has(y))return{distance:y,xTransformOrigin:e.j2.CENTER};var M=this.richTooltip?[{distance:_,xTransformOrigin:O},{distance:I,xTransformOrigin:D}]:[{distance:y,xTransformOrigin:e.j2.CENTER},{distance:I,xTransformOrigin:D},{distance:_,xTransformOrigin:O}],F=M.find(function(H){var B=H.distance;return b.has(B)});if(F)return F;if(A.left<0)return{distance:this.minViewportTooltipThreshold,xTransformOrigin:e.j2.LEFT};var x=this.adapter.getViewportWidth(),N=x-(m+this.minViewportTooltipThreshold);return{distance:N,xTransformOrigin:e.j2.RIGHT}},g.prototype.determineValidPositionOptions=function(){for(var A,m,s=[],I=0;I<arguments.length;I++)s[I]=arguments[I];var _=new Set,y=new Set;try{for(var D=(0,f.XA)(s),O=D.next();!O.done;O=D.next()){var b=O.value;this.positionHonorsViewportThreshold(b)?_.add(b):this.positionDoesntCollideWithViewport(b)&&y.add(b)}}catch(M){A={error:M}}finally{try{O&&!O.done&&(m=D.return)&&m.call(D)}finally{if(A)throw A.error}}return _.size?_:y},g.prototype.positionHonorsViewportThreshold=function(A){var m=this.adapter.getViewportWidth(),s=this.adapter.getTooltipSize().width;return A+s<=m-this.minViewportTooltipThreshold&&A>=this.minViewportTooltipThreshold},g.prototype.positionDoesntCollideWithViewport=function(A){var m=this.adapter.getViewportWidth(),s=this.adapter.getTooltipSize().width;return A+s<=m&&A>=0},g.prototype.calculateYTooltipDistance=function(A,m){var s=A.bottom+this.anchorGap,I=A.top-(this.anchorGap+m),_=this.determineValidYPositionOptions(I,s);return this.yTooltipPos===e.JB.ABOVE&&_.has(I)?{distance:I,yTransformOrigin:e.j2.BOTTOM}:this.yTooltipPos===e.JB.BELOW&&_.has(s)?{distance:s,yTransformOrigin:e.j2.TOP}:_.has(s)?{distance:s,yTransformOrigin:e.j2.TOP}:_.has(I)?{distance:I,yTransformOrigin:e.j2.BOTTOM}:{distance:s,yTransformOrigin:e.j2.TOP}},g.prototype.determineValidYPositionOptions=function(A,m){var s=new Set,I=new Set;return this.yPositionHonorsViewportThreshold(A)?s.add(A):this.yPositionDoesntCollideWithViewport(A)&&I.add(A),this.yPositionHonorsViewportThreshold(m)?s.add(m):this.yPositionDoesntCollideWithViewport(m)&&I.add(m),s.size?s:I},g.prototype.yPositionHonorsViewportThreshold=function(A){var m=this.adapter.getViewportHeight(),s=this.adapter.getTooltipSize().height;return A+s+this.minViewportTooltipThreshold<=m&&A>=this.minViewportTooltipThreshold},g.prototype.yPositionDoesntCollideWithViewport=function(A){var m=this.adapter.getViewportHeight(),s=this.adapter.getTooltipSize().height;return A+s<=m&&A>=0},g.prototype.calculateTooltipWithCaretStyles=function(A){this.adapter.clearTooltipCaretStyles();var m=this.adapter.getTooltipCaretBoundingRect();if(!A||!m)return{position:e.qU.DETECTED,top:0,left:0};var s=m.width/e.KT.ANIMATION_SCALE,I=m.height/e.KT.ANIMATION_SCALE/2,_=this.adapter.getTooltipSize(),y=this.calculateYWithCaretDistanceOptions(A,_.height,{caretWidth:s,caretHeight:I}),D=this.calculateXWithCaretDistanceOptions(A,_.width,{caretWidth:s,caretHeight:I}),O=this.validateTooltipWithCaretDistances(y,D);O.size<1&&(O=this.generateBackupPositionOption(A,_,{caretWidth:s,caretHeight:I}));var b=this.determineTooltipWithCaretDistance(O),M=b.position,F=b.xDistance,x=b.yDistance,N=this.setCaretPositionStyles(M,{caretWidth:s,caretHeight:I}),H=N.yTransformOrigin,B=N.xTransformOrigin;return{yTransformOrigin:H,xTransformOrigin:B,top:x,left:F}},g.prototype.calculateXWithCaretDistanceOptions=function(A,m,s){var I=s.caretWidth,_=s.caretHeight,y=!this.adapter.isRTL(),D=A.left+A.width/2,O=A.left-(m+this.anchorGap+_),b=A.right+this.anchorGap+_,M=y?O:b,F=y?b:O,x=D-(e.KT.CARET_INDENTATION+I/2),N=D-(m-e.KT.CARET_INDENTATION-I/2),H=y?x:N,B=y?N:x,P=D-m/2,K=new Map([[e.YK.START,H],[e.YK.CENTER,P],[e.YK.END,B],[e.YK.SIDE_END,F],[e.YK.SIDE_START,M]]);return K},g.prototype.calculateYWithCaretDistanceOptions=function(A,m,s){var I=s.caretWidth,_=s.caretHeight,y=A.top+A.height/2,D=A.bottom+this.anchorGap+_,O=A.top-(this.anchorGap+m+_),b=y-(e.KT.CARET_INDENTATION+I/2),M=y-m/2,F=y-(m-e.KT.CARET_INDENTATION-I/2),x=new Map([[e.i9.ABOVE,O],[e.i9.BELOW,D],[e.i9.SIDE_TOP,b],[e.i9.SIDE_CENTER,M],[e.i9.SIDE_BOTTOM,F]]);return x},g.prototype.repositionTooltipOnAnchorMove=function(){var A=this.adapter.getAnchorBoundingRect();!A||!this.anchorRect||(A.top!==this.anchorRect.top||A.left!==this.anchorRect.left||A.height!==this.anchorRect.height||A.width!==this.anchorRect.width)&&(this.anchorRect=A,this.parentRect=this.adapter.getParentBoundingRect(),this.richTooltip?this.positionRichTooltip():this.positionPlainTooltip())},g.prototype.validateTooltipWithCaretDistances=function(A,m){var s,I,_,y,D,O,b=new Map,M=new Map,F=new Map([[e.i9.ABOVE,[e.YK.START,e.YK.CENTER,e.YK.END]],[e.i9.BELOW,[e.YK.START,e.YK.CENTER,e.YK.END]],[e.i9.SIDE_TOP,[e.YK.SIDE_START,e.YK.SIDE_END]],[e.i9.SIDE_CENTER,[e.YK.SIDE_START,e.YK.SIDE_END]],[e.i9.SIDE_BOTTOM,[e.YK.SIDE_START,e.YK.SIDE_END]]]);try{for(var x=(0,f.XA)(F.keys()),N=x.next();!N.done;N=x.next()){var H=N.value,B=A.get(H);if(this.yPositionHonorsViewportThreshold(B))try{for(var P=(_=void 0,(0,f.XA)(F.get(H))),K=P.next();!K.done;K=P.next()){var V=K.value,U=m.get(V);if(this.positionHonorsViewportThreshold(U)){var k=this.caretPositionOptionsMapping(V,H);b.set(k,{xDistance:U,yDistance:B})}}}catch(W){_={error:W}}finally{try{K&&!K.done&&(y=P.return)&&y.call(P)}finally{if(_)throw _.error}}if(this.yPositionDoesntCollideWithViewport(B))try{for(var G=(D=void 0,(0,f.XA)(F.get(H))),w=G.next();!w.done;w=G.next()){var V=w.value,U=m.get(V);if(this.positionDoesntCollideWithViewport(U)){var k=this.caretPositionOptionsMapping(V,H);M.set(k,{xDistance:U,yDistance:B})}}}catch(W){D={error:W}}finally{try{w&&!w.done&&(O=G.return)&&O.call(G)}finally{if(D)throw D.error}}}}catch(W){s={error:W}}finally{try{N&&!N.done&&(I=x.return)&&I.call(x)}finally{if(s)throw s.error}}return b.size?b:M},g.prototype.generateBackupPositionOption=function(A,m,s){var I=!this.adapter.isRTL(),_,y;if(A.left<0)_=this.minViewportTooltipThreshold+s.caretHeight,y=I?e.YK.END:e.YK.START;else{var D=this.adapter.getViewportWidth();_=D-(m.width+this.minViewportTooltipThreshold+s.caretHeight),y=I?e.YK.START:e.YK.END}var O,b;if(A.top<0)O=this.minViewportTooltipThreshold+s.caretHeight,b=e.i9.BELOW;else{var M=this.adapter.getViewportHeight();O=M-(m.height+this.minViewportTooltipThreshold+s.caretHeight),b=e.i9.ABOVE}var F=this.caretPositionOptionsMapping(y,b);return new Map([[F,{xDistance:_,yDistance:O}]])},g.prototype.determineTooltipWithCaretDistance=function(A){if(A.has(this.tooltipPositionWithCaret)){var m=A.get(this.tooltipPositionWithCaret);return{position:this.tooltipPositionWithCaret,xDistance:m.xDistance,yDistance:m.yDistance}}var s=[e.qU.ABOVE_START,e.qU.ABOVE_CENTER,e.qU.ABOVE_END,e.qU.TOP_SIDE_START,e.qU.CENTER_SIDE_START,e.qU.BOTTOM_SIDE_START,e.qU.TOP_SIDE_END,e.qU.CENTER_SIDE_END,e.qU.BOTTOM_SIDE_END,e.qU.BELOW_START,e.qU.BELOW_CENTER,e.qU.BELOW_END],I=s.find(function(y){return A.has(y)}),_=A.get(I);return{position:I,xDistance:_.xDistance,yDistance:_.yDistance}},g.prototype.caretPositionOptionsMapping=function(A,m){switch(m){case e.i9.ABOVE:if(A===e.YK.START)return e.qU.ABOVE_START;if(A===e.YK.CENTER)return e.qU.ABOVE_CENTER;if(A===e.YK.END)return e.qU.ABOVE_END;break;case e.i9.BELOW:if(A===e.YK.START)return e.qU.BELOW_START;if(A===e.YK.CENTER)return e.qU.BELOW_CENTER;if(A===e.YK.END)return e.qU.BELOW_END;break;case e.i9.SIDE_TOP:if(A===e.YK.SIDE_START)return e.qU.TOP_SIDE_START;if(A===e.YK.SIDE_END)return e.qU.TOP_SIDE_END;break;case e.i9.SIDE_CENTER:if(A===e.YK.SIDE_START)return e.qU.CENTER_SIDE_START;if(A===e.YK.SIDE_END)return e.qU.CENTER_SIDE_END;break;case e.i9.SIDE_BOTTOM:if(A===e.YK.SIDE_START)return e.qU.BOTTOM_SIDE_START;if(A===e.YK.SIDE_END)return e.qU.BOTTOM_SIDE_END;break;default:break}throw new Error("MDCTooltipFoundation: Invalid caret position of "+A+", "+m)},g.prototype.setCaretPositionStyles=function(A,m){var s,I,_=this.calculateCaretPositionOnTooltip(A,m);if(!_)return{yTransformOrigin:0,xTransformOrigin:0};this.adapter.clearTooltipCaretStyles(),this.adapter.setTooltipCaretStyle(_.yAlignment,_.yAxisPx),this.adapter.setTooltipCaretStyle(_.xAlignment,_.xAxisPx);var y=_.skew*(Math.PI/180),D=Math.cos(y);this.adapter.setTooltipCaretStyle("transform","rotate("+_.rotation+"deg) skewY("+_.skew+"deg) scaleX("+D+")"),this.adapter.setTooltipCaretStyle("transform-origin",_.xAlignment+" "+_.yAlignment);try{for(var O=(0,f.XA)(_.caretCorners),b=O.next();!b.done;b=O.next()){var M=b.value;this.adapter.setTooltipCaretStyle(M,"0")}}catch(F){s={error:F}}finally{try{b&&!b.done&&(I=O.return)&&I.call(O)}finally{if(s)throw s.error}}return{yTransformOrigin:_.yTransformOrigin,xTransformOrigin:_.xTransformOrigin}},g.prototype.calculateCaretPositionOnTooltip=function(A,m){var s=!this.adapter.isRTL(),I=this.adapter.getComputedStyleProperty("width"),_=this.adapter.getComputedStyleProperty("height");if(!(!I||!_||!m)){var y="calc(("+I+" - "+m.caretWidth+"px) / 2)",D="calc(("+_+" - "+m.caretWidth+"px) / 2)",O="0",b=e.KT.CARET_INDENTATION+"px",M="calc("+I+" - "+b+")",F="calc("+_+" - "+b+")",x=35,N=Math.abs(90-x),H=["border-bottom-right-radius","border-top-left-radius"],B=["border-bottom-left-radius","border-top-right-radius"],P=20;switch(A){case e.qU.BELOW_CENTER:return{yAlignment:e.j2.TOP,xAlignment:e.j2.LEFT,yAxisPx:O,xAxisPx:y,rotation:-1*x,skew:-1*P,xTransformOrigin:y,yTransformOrigin:O,caretCorners:H};case e.qU.BELOW_END:return{yAlignment:e.j2.TOP,xAlignment:s?e.j2.RIGHT:e.j2.LEFT,yAxisPx:O,xAxisPx:b,rotation:s?x:-1*x,skew:s?P:-1*P,xTransformOrigin:s?M:b,yTransformOrigin:O,caretCorners:s?B:H};case e.qU.BELOW_START:return{yAlignment:e.j2.TOP,xAlignment:s?e.j2.LEFT:e.j2.RIGHT,yAxisPx:O,xAxisPx:b,rotation:s?-1*x:x,skew:s?-1*P:P,xTransformOrigin:s?b:M,yTransformOrigin:O,caretCorners:s?H:B};case e.qU.TOP_SIDE_END:return{yAlignment:e.j2.TOP,xAlignment:s?e.j2.LEFT:e.j2.RIGHT,yAxisPx:b,xAxisPx:O,rotation:s?N:-1*N,skew:s?-1*P:P,xTransformOrigin:s?O:I,yTransformOrigin:b,caretCorners:s?H:B};case e.qU.CENTER_SIDE_END:return{yAlignment:e.j2.TOP,xAlignment:s?e.j2.LEFT:e.j2.RIGHT,yAxisPx:D,xAxisPx:O,rotation:s?N:-1*N,skew:s?-1*P:P,xTransformOrigin:s?O:I,yTransformOrigin:D,caretCorners:s?H:B};case e.qU.BOTTOM_SIDE_END:return{yAlignment:e.j2.BOTTOM,xAlignment:s?e.j2.LEFT:e.j2.RIGHT,yAxisPx:b,xAxisPx:O,rotation:s?-1*N:N,skew:s?P:-1*P,xTransformOrigin:s?O:I,yTransformOrigin:F,caretCorners:s?B:H};case e.qU.TOP_SIDE_START:return{yAlignment:e.j2.TOP,xAlignment:s?e.j2.RIGHT:e.j2.LEFT,yAxisPx:b,xAxisPx:O,rotation:s?-1*N:N,skew:s?P:-1*P,xTransformOrigin:s?I:O,yTransformOrigin:b,caretCorners:s?B:H};case e.qU.CENTER_SIDE_START:return{yAlignment:e.j2.TOP,xAlignment:s?e.j2.RIGHT:e.j2.LEFT,yAxisPx:D,xAxisPx:O,rotation:s?-1*N:N,skew:s?P:-1*P,xTransformOrigin:s?I:O,yTransformOrigin:D,caretCorners:s?B:H};case e.qU.BOTTOM_SIDE_START:return{yAlignment:e.j2.BOTTOM,xAlignment:s?e.j2.RIGHT:e.j2.LEFT,yAxisPx:b,xAxisPx:O,rotation:s?N:-1*N,skew:s?-1*P:P,xTransformOrigin:s?I:O,yTransformOrigin:F,caretCorners:s?H:B};case e.qU.ABOVE_CENTER:return{yAlignment:e.j2.BOTTOM,xAlignment:e.j2.LEFT,yAxisPx:O,xAxisPx:y,rotation:x,skew:P,xTransformOrigin:y,yTransformOrigin:_,caretCorners:B};case e.qU.ABOVE_END:return{yAlignment:e.j2.BOTTOM,xAlignment:s?e.j2.RIGHT:e.j2.LEFT,yAxisPx:O,xAxisPx:b,rotation:s?-1*x:x,skew:s?-1*P:P,xTransformOrigin:s?M:b,yTransformOrigin:_,caretCorners:s?H:B};default:case e.qU.ABOVE_START:return{yAlignment:e.j2.BOTTOM,xAlignment:s?e.j2.LEFT:e.j2.RIGHT,yAxisPx:O,xAxisPx:b,rotation:s?x:-1*x,skew:s?P:-1*P,xTransformOrigin:s?b:M,yTransformOrigin:_,caretCorners:s?B:H}}}},g.prototype.clearShowTimeout=function(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)},g.prototype.clearHideTimeout=function(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)},g.prototype.attachScrollHandler=function(A){var m=this;this.addAncestorScrollEventListeners.push(function(){A("scroll",m.windowScrollHandler)})},g.prototype.removeScrollHandler=function(A){var m=this;this.removeAncestorScrollEventListeners.push(function(){A("scroll",m.windowScrollHandler)})},g.prototype.destroy=function(){var A,m;this.frameId&&(cancelAnimationFrame(this.frameId),this.frameId=null),this.clearHideTimeout(),this.clearShowTimeout(),this.adapter.removeClass(a),this.adapter.removeClass(T),this.adapter.removeClass(u),this.adapter.removeClass(E),this.adapter.removeClass(n),this.richTooltip&&this.adapter.deregisterEventHandler("focusout",this.richTooltipFocusOutHandler),this.persistentTooltip||(this.adapter.deregisterEventHandler("mouseenter",this.tooltipMouseEnterHandler),this.adapter.deregisterEventHandler("mouseleave",this.tooltipMouseLeaveHandler)),this.adapter.deregisterAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.deregisterDocumentEventHandler("click",this.documentClickHandler),this.adapter.deregisterDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.deregisterWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler);try{for(var s=(0,f.XA)(this.removeAncestorScrollEventListeners),I=s.next();!I.done;I=s.next()){var _=I.value;_()}}catch(y){A={error:y}}finally{try{I&&!I.done&&(m=s.return)&&m.call(s)}finally{if(A)throw A.error}}this.animFrame.cancelAll()},g}(c.K),h=null},5719:(L,R,v)=>{v.d(R,{KT:()=>S,UX:()=>f,j2:()=>l});/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},S={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},l={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"}},5215:(L,R,v)=>{v.d(R,{j:()=>c});var f=v(5500),S=v(5719),l=v(3214);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c=function(e){(0,f.ZT)(d,e);function d(){var a=e!==null&&e.apply(this,arguments)||this;return a.wasScrolled=!1,a}return d.prototype.handleTargetScroll=function(){var a=this.adapter.getViewportScrollY();a<=0?this.wasScrolled&&(this.adapter.removeClass(S.UX.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(S.UX.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},d}(l.b),p=null},2156:(L,R,v)=>{v.d(R,{r:()=>c});var f=v(5500),S=v(3264),l=v(5719);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c=function(e){(0,f.ZT)(d,e);function d(a){return e.call(this,(0,f.pi)((0,f.pi)({},d.defaultAdapter),a))||this}return Object.defineProperty(d,"strings",{get:function(){return l.j2},enumerable:!1,configurable:!0}),Object.defineProperty(d,"cssClasses",{get:function(){return l.UX},enumerable:!1,configurable:!0}),Object.defineProperty(d,"numbers",{get:function(){return l.KT},enumerable:!1,configurable:!0}),Object.defineProperty(d,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),d.prototype.handleTargetScroll=function(){},d.prototype.handleWindowResize=function(){},d.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},d}(S.K),p=null},6600:(L,R,v)=>{v.d(R,{O:()=>c});var f=v(5500),S=v(5719),l=v(2156);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c=function(e){(0,f.ZT)(d,e);function d(a){var u=e.call(this,a)||this;return u.collapsed=!1,u.isAlwaysCollapsed=!1,u}return Object.defineProperty(d.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),d.prototype.init=function(){e.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(S.UX.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(S.UX.SHORT_COLLAPSED_CLASS))},d.prototype.setAlwaysCollapsed=function(a){this.isAlwaysCollapsed=!!a,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},d.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},d.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},d.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var a=this.adapter.getViewportScrollY();a<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},d.prototype.uncollapse=function(){this.adapter.removeClass(S.UX.SHORT_COLLAPSED_CLASS),this.collapsed=!1},d.prototype.collapse=function(){this.adapter.addClass(S.UX.SHORT_COLLAPSED_CLASS),this.collapsed=!0},d}(l.r),p=null},3214:(L,R,v)=>{v.d(R,{b:()=>p});var f=v(5500),S=v(5719),l=v(2156);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c=0,p=function(d){(0,f.ZT)(a,d);function a(u){var T=d.call(this,u)||this;return T.wasDocked=!0,T.isDockedShowing=!0,T.currentAppBarOffsetTop=0,T.isCurrentlyBeingResized=!1,T.resizeThrottleId=c,T.resizeDebounceId=c,T.lastScrollPosition=T.adapter.getViewportScrollY(),T.topAppBarHeight=T.adapter.getTopAppBarHeight(),T}return a.prototype.destroy=function(){d.prototype.destroy.call(this),this.adapter.setStyle("top","")},a.prototype.handleTargetScroll=function(){var u=Math.max(this.adapter.getViewportScrollY(),0),T=u-this.lastScrollPosition;this.lastScrollPosition=u,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=T,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},a.prototype.handleWindowResize=function(){var u=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){u.resizeThrottleId=c,u.throttledResizeHandler()},S.KT.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){u.handleTargetScroll(),u.isCurrentlyBeingResized=!1,u.resizeDebounceId=c},S.KT.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},a.prototype.checkForUpdate=function(){var u=-this.topAppBarHeight,T=this.currentAppBarOffsetTop<0,E=this.currentAppBarOffsetTop>u,n=T&&E;if(n)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==E)return this.isDockedShowing=E,!0}else return this.wasDocked=!0,!0;return n},a.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var u=this.currentAppBarOffsetTop;Math.abs(u)>=this.topAppBarHeight&&(u=-S.KT.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",u+"px")}},a.prototype.throttledResizeHandler=function(){var u=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==u&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-u,this.topAppBarHeight=u),this.handleTargetScroll()},a}(l.r),e=null}}]);

//# sourceMappingURL=npm.material.b9de7a0d2aefc32b11a2.js.map