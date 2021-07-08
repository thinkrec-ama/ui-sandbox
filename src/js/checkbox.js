var UI_SANDBOX = UI_SANDBOX || {};

UI_SANDBOX.FORM_EDIT = UI_SANDBOX.FORM_EDIT || {};

UI_SANDBOX.FORM_EDIT.selectAll = {
    init: function () {
        this.setParameter();
        this.bindEvent();
    },
    setParameter: function () {
        this.$selectAllTrigger = $('.jscSelectAllEdit');
    },
    bindEvent: function () {
        this.$selectAllTrigger.on('change', $.proxy(this.selectAllChecked, this));
    },
    selectAllChecked: function() {
        var isCheckedAll = this.$selectAllTrigger.is(':checked');

        if(isCheckedAll){
            this.setInactive();
        }else {
            this.setActive();
        }
    },
    setInactive: function() {
        $('.jscChecked').prop('checked', true);
    },
    setActive: function() {
        $('.jscChecked').prop('checked', false);
    }
};

UI_SANDBOX.FORM_EDIT.contentModeSwitching = {
    init: function () {
        this.setParameter();
        this.bindEvent();
        this.setFormStatus();
    },
    setParameter: function () {
        this.$contentButton = $('.jscContentButton');
        this.$buttonToDisableControl = $('.jscContentMode');
        this.$contentMode = $('.jscContentMode');
        this.$gyoza = $('.jscGyoza');
        this.$grilledOffal = $('.jscGrilledOffal');
        this.$chuhai = $('.jscChuhai');
        this.$beer = $('.jscBeer');
    },
    bindEvent: function () {
        this.$buttonToDisableControl.on('change', $.proxy(this.buttonToDisable, this));
        this.$contentMode.on('change', $.proxy(this.contentsSwitch, this));
    },
    buttonToDisable: function () {
        var contentModeSelect = $('.jscContentMode');
        if (contentModeSelect.children('.jscNoSelect').is(':selected')) {
            this.$contentButton.prop("disabled", true).addClass('disableBtn');
        }else {
            this.$contentButton.prop("disabled", false).removeClass('disableBtn');
        }
    },
    setFormStatus: function() {
        this.$gyoza.hide();
        this.$grilledOffal.hide();
        this.$chuhai.hide();
        this.$beer.hide();
    },
    contentsSwitch: function (e) {
        var $target = $(e.target);
        if ($target.children('.jscGyozaSelect').is(':selected')) {
            this.$gyoza.show();
        } else {
            this.$gyoza.hide();
        }
        if ($target.children('.jscGrilledOffalSelect').is(':selected')) {
            this.$grilledOffal.show();
        } else {
            this.$grilledOffal.hide();
        }
        if ($target.children('.jscChuhaiSelect').is(':selected')) {
            this.$chuhai.show();
        } else {
            this.$chuhai.hide();
        }
        if ($target.children('.jscBeerSelect').is(':selected')) {
            this.$beer.show();
        } else {
            this.$beer.hide();
        }
    }
};

$(function () {
    UI_SANDBOX.FORM_EDIT.selectAll.init();
    UI_SANDBOX.FORM_EDIT.contentModeSwitching.init();
});