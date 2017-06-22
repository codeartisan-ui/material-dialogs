!function(i){function t(n){if(o[n])return o[n].exports;var s=o[n]={i:n,l:!1,exports:{}};return i[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var o={};t.m=i,t.c=o,t.i=function(i){return i},t.d=function(i,o,n){t.o(i,o)||Object.defineProperty(i,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(o,"a",o),o},t.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},t.p="",t(t.s=4)}([function(i,t,o){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i};!function(i){"use strict";var t={HIDE:"ca.dialog.hide",HIDDEN:"ca.dialog.hidden",SHOW:"ca.dialog.show",SHOWN:"ca.dialog.shown",RESIZE:"ca.dialog.resize",CLICK_DISMISS:"ca.dialog.click.dismiss",KEY_DOWN_DISMISS:"ca.dialog.keydown.dismiss",NEGATIVE_ACTION:"ca.dialog.dismissive.action",POSITIVE_ACTION:"ca.dialog.affirmative.action"},o={DIALOG:".md-dialog",DATA_TOGGLE:'[data-toggle="dialog"]',DATA_DISMISS:'[data-dismiss="dialog"]'},s=function(){var s=function(t,o){this.$dialog=i(t),this.isShown_=!1,this.isBodyOverflowing_=!1,this.scrollBarWidth_=0,this.isAnimating_=!1,this.init(o)};return s.prototype.VERSION="1.0",s.prototype.Default={backdrop:!0,keyboard:!0,show:!0},s.prototype.Classes_={DIALOG_SURFACE:"md-dialog__surface",SHADOW:"md-dialog__shadow",IS_OPEN:"md-dialog--open",IS_ANIMATING:"md-dialog--animating",ACTION_BUTTON:"md-dialog__action",BODY_CLASS:"is-dialog-open",VIRTUAL_SCROLL:"dialog-virtual-scroll"},s.prototype.init=function(t){this.$dialog.length&&(this.config=i.extend({},this.Default,t),this.$dialogSurface=this.$dialog.find("."+this.Classes_.DIALOG_SURFACE),this.$dialogShadow=this.$dialog.find("."+this.Classes_.SHADOW),this.boundShowDialog_=this.show.bind(this),this.boundHideDialog_=this.hide.bind(this),this.boundNegativeAction_=this.handleNegativeAction_.bind(this),this.boundPositiveAction_=this.handlePositiveAction_.bind(this),this.boundDialogOnResize_=this.handleDialogOnResize.bind(this),this.boundEscapeEvent_=this.handleEscapeEvent_.bind(this),this.boundDismiss_=this.dismiss.bind(this),this.boundOnTransitionEnd_=this.onTransitionEnd_.bind(this),this.$dialogShadow.on("click",this.boundDismiss_),this.setActionBtn_(),this.setEscapeEvent_(),this.checkScrollBar_(),this.setScrollBarWidth_(),this.config.show&&"string"!==t&&this.show())},s.prototype.setActionBtn_=function(){var i=this.$dialog.find('[data-action="dismissive"]'),t=this.$dialog.find('[data-action="affirmative"]');"undefined"!==(void 0===i?"undefined":n(i))&&(this.negativeActionBtn_=i,this.negativeActionBtn_.on("click",this.boundNegativeAction_)),"undefined"!==(void 0===t?"undefined":n(t))&&(this.positiveActionBtn_=t,this.positiveActionBtn_.on("click",this.boundPositiveAction_))},s.prototype.handleNegativeAction_=function(){this.$dialog.trigger(t.NEGATIVE_ACTION),this.hide()},s.prototype.handlePositiveAction_=function(){this.$dialog.trigger(t.POSITIVE_ACTION),this.hide()},s.prototype.setDialogOnResize_=function(){i(window).on(t.RESIZE,this.boundDialogOnResize_)},s.prototype.unSetDialogOnResize_=function(){i(window).unbind(t.RESIZE,this.boundDialogOnResize_)},s.prototype.handleDialogOnResize=function(){this.adjustDialog_()},s.prototype.dismiss=function(i){this.isShown_&&(this.$dialog.trigger(t.CLICK_DISMISS),this.hide())},s.prototype.show=function(){this.isShown_||(this.setScrollBarWidth_(),i("body").addClass(this.Classes_.BODY_CLASS),this.$dialog.trigger(t.SHOW),this.$dialog.addClass(this.Classes_.IS_ANIMATING).addClass(this.Classes_.IS_OPEN),this.isAnimating_=!0,this.$dialogShadow.on("transitionend",this.boundOnTransitionEnd_),this.$dialog.focus(),this.setEscapeEvent_(),this.setDialogOnResize_(),this.isShown_=!0)},s.prototype.show=s.prototype.show,s.prototype.hide=function(){this.isShown_&&!this.isAnimating_&&(this.$dialog.addClass(this.Classes_.IS_ANIMATING).removeClass(this.Classes_.IS_OPEN),this.isAnimating_=!0,this.$dialogShadow.on("transitionend",this.boundOnTransitionEnd_),this.isShown_=!1,this.$dialog.trigger(t.HIDE),this.unSetEscapeEvent_(),this.unSetDialogOnResize_(),i("body").removeClass(this.Classes_.BODY_CLASS),this.resetScrollBar_())},s.prototype.hide=s.prototype.hide,s.prototype.toggle=function(){this.isShown_?this.hide():this.show()},s.prototype.toggle=s.prototype.toggle,s.prototype.onTransitionEnd_=function(){this.$dialog.removeClass(this.Classes_.IS_ANIMATING),this.isAnimating_=!1,this.$dialogShadow.unbind("transitionend",this.boundOnTransitionEnd_),this.isShown_?(this.$dialog.trigger(t.SHOWN),this.$dialog.attr("aria-hidden",!1)):(this.$dialog.trigger(t.HIDDEN),this.$dialog.attr("aria-hidden",!0))},s.prototype.getScrollBarWidth_=function(){var i=document.createElement("div");i.className=this.Classes_.VIRTUAL_SCROLL,document.body.appendChild(i);var t=i.getBoundingClientRect().width-i.clientWidth;return document.body.removeChild(i),t},s.prototype.checkScrollBar_=function(){this.isBodyOverflowing_=document.body.clientWidth<window.innerWidth,this.scrollBarWidth_=this.getScrollBarWidth_()},s.prototype.setScrollBarWidth_=function(){if(this.isBodyOverflowing_){var t=document.body.style.paddingRight;if(t){var o=i("body").css("padding-right");i("body").data("padding-right",t).css("padding-right",parseFloat(o)+this.scrollBarWidth_+"px")}else i("body").css("padding-right",this.scrollBarWidth_+"px")}},s.prototype.resetScrollBar_=function(){var t=i("body").data("padding-right");void 0!==t&&i("body").css("padding-right",t).removeData("padding-right"),i("body").css("padding-right","")},s.prototype.handleEscapeEvent_=function(i){27==i.keyCode&&this.isShown_&&(i.preventDefault(),this.$dialog.trigger(t.KEY_DOWN_DISMISS),this.hide())},s.prototype.setEscapeEvent_=function(){this.config.keyboard&&i(document).on("keyup",this.boundEscapeEvent_)},s.prototype.unSetEscapeEvent_=function(){this.config.keyboard&&i(document).unbind("keyup",this.boundEscapeEvent_)},s.prototype.adjustDialog_=function(){var i=this.$dialog.get(0).scrollHeight>document.documentElement.clientHeight;!this.isBodyOverflowing_&&i&&this.$dialog.css("padding-left",this.scrollBarWidth_+"px"),this.isBodyOverflowing_&&!i&&this.$dialog.css("padding-left",this.scrollBarWidth_+"px")},s.prototype.setDismissBtn_=function(){var i=this.$dialog.find(o.DATA_DISMISS);i.length&&i.on("click",this.boundDismiss_)},s.Plugin_=function(t){return this.each(function(){var o=i(this),n=o.data("ca.dialog");if(n||o.data("ca.dialog",n=new s(this,t)),"string"==typeof t){if(void 0===n[t])throw new Error('No method named "'+t+'"');n[t]()}})},s}();i(document).on("click",o.DATA_TOGGLE,function(t){var o=i(this);"A"===this.tagName&&t.preventDefault();var e=o.attr("data-target");if("undefined"===(void 0===e?"undefined":n(e)))throw new Error("Target Dialog not specified.");var a=i(e).data("ca.dialog")?"toggle":i.extend({},i(e).data(),i(this).data());s.Plugin_.call(i(e),a)}),i(document).on("click",o.DATA_DISMISS,function(t){var s=i(this);"A"===this.tagName&&t.preventDefault();var e=s.closest(o.DIALOG);"undefined"===(void 0===e?"undefined":n(e))&&0!=e.length||e.data("ca.dialog")&&e.data("ca.dialog").dismiss()}),i.fn.MaterialDialog=s.Plugin_,i.fn.MaterialDialog.Constructor=s,i.fn.MaterialDialog.noConflict=function(){return i.fn.MaterialDialog=s,s.Plugin_}}(jQuery)},,,,function(i,t,o){i.exports=o(0)}]);