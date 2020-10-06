var UI_SANDBOX = UI_SANDBOX || {};

UI_SANDBOX.FORM_EDIT = UI_SANDBOX.FORM_EDIT || {};

UI_SANDBOX.FORM_EDIT.SCROLLTOP = function() {
    this.setParameter();
    this.bindEvent();
};
UI_SANDBOX.FORM_EDIT.SCROLLTOP.prototype = {
    SCROLL_SPEED: 1500,
    setParameter: function() {
        this.$body = $('html,body');
        this.$scrollTopBtn = $('.jscPageTop');
        jQuery.easing.easeOutCirc = function (e,a,c,b,d) {
            return b*Math.sqrt(1-(a=a/d-1)*a)+c;
        }
    },
    bindEvent:function () {
        this.$scrollTopBtn.on('click',$.proxy(this.scrollTop,this));
    },
    scrollTop: function () {
        this.$body.animate({scrollTop: 0},this.SCROLL_SPEED,'easeOutCirc');
    }
};
$(function() {
    new UI_SANDBOX.FORM_EDIT.SCROLLTOP();
});