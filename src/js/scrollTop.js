// var UI_SANDBOX = UI_SANDBOX || {};
//
// UI_SANDBOX.FORM_EDIT = UI_SANDBOX.FORM_EDIT || {};
//
// UI_SANDBOX.FORM_EDIT.selectAll = {
//     init: function () {
//         this.setParameter();
//         this.bindEvent();
//     },
//     setParameter: function () {
//         this.$selectAllTrigger = $('.jscSelectAllEdit');
//     },
//     bindEvent: function () {
//         this.$selectAllTrigger.on('change', $.proxy(this.selectAllChecked, this));
//     },
//     selectAllChecked: function() {
//         var isCheckedAll = this.$selectAllTrigger.is(':checked');
//
//         if(isCheckedAll){
//             this.setInactive();
//         }else {
//             this.setActive();
//         }
//     },
//     setInactive: function() {
//         $('.jscChecked').prop('checked', true);
//     },
//     setActive: function() {
//         $('.jscChecked').prop('checked', false);
//     }
// };
//
//
// HPG.GRM.SCROLLTOP = function() {
//     this.setParameter();
//     this.bindEvent();
// };
// HPG.GRM.SCROLLTOP.prototype = {
//     SCROLL_SPEED: 1500,
//     setParameter: function() {
//         this.$body = $('html,body');
//         this.$scrollTopBtn = $('.jscPageTop');
//         jQuery.easing.easeOutCirc = function (e,a,c,b,d) {
//             return b*Math.sqrt(1-(a=a/d-1)*a)+c;
//         }
//     },
//     bindEvent:function () {
//         this.$scrollTopBtn.on('click',$.proxy(this.scrollTop,this));
//     },
//     scrollTop: function () {
//         this.$body.animate({scrollTop: 0},this.SCROLL_SPEED,'easeOutCirc');
//     }
// };
// $(function() {
//     UI_SANDBOX.FORM_EDIT.scrollTop.init();
// });