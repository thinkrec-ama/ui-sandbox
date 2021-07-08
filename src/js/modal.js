var UI_SANDBOX = UI_SANDBOX || {};

UI_SANDBOX.FORM_EDIT = UI_SANDBOX.FORM_EDIT || {};

UI_SANDBOX.FORM_EDIT.modalControl = {
    HIDE_CLASS: 'dn',
    init: function () {
        this.setParameter();
        this.bindEvent();
    },
    setParameter: function () {
        this.$modal = $('.jscModalContainer');
        this.$modalTrigger = $('.jscModalTrigger');
        this.$closeBtn = $('.jscModalCloseBtn');
    },
    bindEvent: function () {
        this.$modalTrigger.on('click', $.proxy(this.showModal,this));
        this.$closeBtn.on('click', $.proxy(this.hideModal, this));
    },
    showModal: function () {
        this.$modal.removeClass(this.HIDE_CLASS);
    },
    hideModal: function () {
        this.$modal.addClass(this.HIDE_CLASS);
    }
};

$(function () {
    UI_SANDBOX.FORM_EDIT.modalControl.init();
});