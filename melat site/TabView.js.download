










jQuery.browser = {};
(function () {
jQuery.browser.msie = false;
jQuery.browser.version = 0;
if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
jQuery.browser.msie = true;
jQuery.browser.version = RegExp.$1;
}
})();










//Constants which have been related to codebehind
var MODULE_CONTAINER_CLASS_NAME = "prjModuleContainer";
var MODULE_CONTENT_CLASS_NAME = "prjModuleContent";
var MODULE_CONTAINER_DRAG_HANDLE_CLASS_NAME = "prjModuleContainerHandle";
var MODULE_ID_ATTRIBUTE_NAME = "mid";
var MODULE_MINIMIZE_CLASS_NAME = "prjMinimized";
var MODULE_MAXIMIZE_CLASS_NAME = "prjMaximized";
var MODULE_DELETE_CLASS_NAME = "prjModuleDelete";
var TAB_DELETE_CLASS_NAME = "prjTabDelete";
var PANE_CONTAINER_CLASS_NAME = "prjPaneContainer";
var PANE_CONTAINER_DROPPING_CLASS_NAME = "prjPaneContainerDropping";
var PANE_CONTAINER_ACTIVATING_CLASS_NAME = "prjPaneContainerActivating";

$(document).ready(function () {
	
    InitializeModuleMinMax();
    InitializePopupClick();
    InitializePopupWindowResize();
    InitializeActionHyperLinks();
    InitializeContentMenu();
    InitializePreloader();
	
	

});

function InitializeActionHyperLinks() {
    $('.prjAction').click(
    function (event) {
        event.preventDefault();
        var actionUrl = $(this).attr('href');
        var returnUrl = $(this).attr('returnUrl');
        var returnId = $(this).attr('returnId');
        var onClientClick = $(this).attr('onClientClick');
        var confirmMessage = $(this).attr('confirmMessage');
        if ((confirmMessage && confirmMessage != '' && confirm(confirmMessage)) || (!confirmMessage)) {
            if (actionUrl && actionUrl != '#') {
                $.ajax({
                    type: 'POST',
                    url: actionUrl,
                    success: function (data) {
                        $('.result').html(data);
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert(xhr.responseText);
                    }
                });
            }
            if (returnUrl) {
                window.location = returnUrl;
            }
            if (returnId) {
                $('#' + returnId).fadeOut(500, function () { $(this).remove(); });
            }
            if (onClientClick) {
                eval(onClientClick);
            }
        }
    });
};

//Minimize Maximize section
function InitializeModuleMinMax() {

    $('.' + MODULE_MINIMIZE_CLASS_NAME + ',.' + MODULE_MAXIMIZE_CLASS_NAME).click(function () {
        var modueContent = $("#" + MODULE_CONTENT_CLASS_NAME + $(this).attr(MODULE_ID_ATTRIBUTE_NAME));
        if ($(this).hasClass(MODULE_MINIMIZE_CLASS_NAME)) {
            $(this).removeClass(MODULE_MINIMIZE_CLASS_NAME).addClass(MODULE_MAXIMIZE_CLASS_NAME);
            modueContent.slideUp(500);
        }
        else {
            $(this).removeClass(MODULE_MAXIMIZE_CLASS_NAME).addClass(MODULE_MINIMIZE_CLASS_NAME);
            modueContent.slideDown(500);
        }
    }).each(function () {
        var modueContent = $("#" + MODULE_CONTENT_CLASS_NAME + $(this).attr(MODULE_ID_ATTRIBUTE_NAME));
        if ($(this).hasClass(MODULE_MINIMIZE_CLASS_NAME)) {
            modueContent.show();
        }
        else {
            modueContent.hide();
        }
    });
};

//Popup Element
function InitializePopupClick() {
    $(".PopupWindow").click(function (event) {

        event.preventDefault();
        var divwindow = $('<div id="PopupWindowDiv" class="popup" style="display:none; z-index: 10002;"><table class="pwtable" cellpadding="0" cellspacing="0"><tr><td class="pwt-tl"><img alt="" src="/Images/spacer.gif"></td><td class="pwt-t"><div class="pwt-dvtitle">' + $(this).attr("title") + '</div><div class="pwt-dvclose"><img src="/Images/Close.png" onclick="$(\'#PopupWindowDiv\').PopUpWindowhide();" style="cursor:pointer;" alt=""/></div></td><td class="pwt-tr"><img src="/Images/spacer.gif"></td></tr><tr><td class="pwt-l"></td><td class="pwt-container"><iframe id="popupwindowsrc" frameborder="0" marginheight="0" marginwidth="0"></iframe></td><td class="pwt-r"></td></tr><tr><td class="pwt-bl"><img src="/Images/spacer.gif"></td><td class="pwt-b"></td><td class="pwt-br"><img src="/Images/spacer.gif"></td></tr></table></div>');
        $(document.body).append(divwindow);
        var iframe = $("#popupwindowsrc")
       $(this).addClass("responsive-popup");
        if ($('#PopupWindowMask').length == 0) {
            $('<div id="PopupWindowMask" style="top:0px; left:0px; position:fixed; z-index:10000; width:100%"></div>').appendTo(document.body);

            //if ($.browser.msie && $.browser.version == "6.0")
            //    $('#PopupWindowMask').css({ 'position': 'absolute', 'height': $(document).height() });
           // else
                $('#PopupWindowMask').css({ 'position': 'fixed', 'height': '100%' });
        }

        $('#PopupWindowMask').show();

        var loading = $('#popupWindowLoading');
        loading.css('top', ($(window).height() / 2 - loading.outerHeight() / 2));
        loading.css('left', $(document).width() / 2 - loading.outerWidth() / 2);
		
		
		
        loading.show();

        var href = $(this).attr("href");
        if (href.indexOf("?") > -1) {
            href = href + "&rnd=" + Math.random();
        }
        else {
            href = href + "?rnd=" + Math.random();
        }

        iframe.attr("src", href);

        iframe.on('load',function () {
		
            var ppdiv = $('#PopupWindowDiv');
            var windowtop = ($(window).height() / 2 - ppdiv.outerHeight() / 2);
            var windowleft = ($(document).width() / 2 - ppdiv.outerWidth() / 2);
            if (windowtop > 0) ppdiv.css('top', windowtop); else ppdiv.css('top', 0);
            if (windowleft > 0) ppdiv.css('left', windowleft); else ppdiv.css('left', 0);

            ppdiv.css("position", "absolute").css('z-index', '10001').slideDown("fast", function () {
                loading.hide();

                $('#PopupWindowMask').click(function () {
                    $('#PopupWindowDiv').PopUpWindowhide();
                });

                var firstElement = iframe.contents().find("table:first");
                if (firstElement.height() > 550) {
                    iframe.width(firstElement.width() + 20);
                    iframe.height(550);
                }
                else {
                    iframe.width(firstElement.width() + 1);
                    iframe.height(firstElement.height() + 1);
                }

                PopUpWindowResize(true);

            }).focus();

        });

    });

    $(document.body).keydown(function (e) {
        if ($('#PopupWindowDiv').length > 0 && e.which == 27) $('#PopupWindowDiv').PopUpWindowhide();
    });
};

function InitializePopupWindowResize() {
    $(window).resize(function () {

        PopUpWindowResize(false);

    });
}

var popupwindowwidth = 0;
var popupwindowheight = 0;
function PopUpWindowResize(afterload) {
    if ($('#PopupWindowDiv').length > 0) {
        var win = $('#PopupWindowDiv');
		
        var winwidth = $(document).width();
        var winheight = $(window).height();

        if (afterload == false)
            if (winwidth == popupwindowwidth || $(window).height() == popupwindowheight) return;

        popupwindowwidth = winwidth;
        popupwindowheight = winheight;

        //if (winwidth > $('#PopupWindowDiv').outerWidth()) 
		//aler(winwidth);
			win.css('margin-left', (win.width()/2)* -1); //(winwidth / 2 - $('#PopupWindowDiv').outerWidth() / 2));
        //else 
			//win.css('left', 0);

        //if (winheight > $('#PopupWindowDiv').outerHeight()) 
			win.css('margin-top', (win.height()/2) * -1); //(winheight / 2 - $('#PopupWindowDiv').outerHeight() / 2));
        //else 
			//win.css('top', 0);
    };
};

$.fn.PopUpWindowhide = function () {
    $(this).slideUp(300, function () { $(this).remove() });
    $('#PopupWindowMask').hide();
    $('#PopupWindowMask').unbind("click");
};

function PopUpWindowClose() {
    $('#PopupWindowDiv').PopUpWindowhide();

    if (arguments[0] && arguments[0] == true)
        location.reload();

    return false;
};
//Content Menu
function InitializeContentMenu() {
    $(".prjContentMenu img").click(function () {
        $(this).parent().find("div").slideDown();
    });

    $(document).click(function (e) {
        if (!$(e.target).parent().hasClass("prjContentMenu"))
            $(".prjContentMenu div").slideUp();
    });
};
//Preloader
function InitializePreloader() {
    var loading = $('<div id="popupWindowLoading" style="position:fixed; z-index:10001;display:none;"><img src="/Images/ajax-loader.gif"/></div>');
    $(document.body).append(loading);
};
//Page Options
function bookmark() {
    bookmarkurl = document.URL;
    bookmarktitle = document.title;
    if (document.all)
        window.external.AddFavorite(bookmarkurl, bookmarktitle)
    else if (window.sidebar) // firefox
        window.sidebar.addPanel(bookmarktitle, bookmarkurl, "");
}
function setHomepage() {
    if (document.all) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage(document.URL);
    }
    else if
           (window.sidebar) {
        if (window.netscape) {
            try { netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); }
            catch (e) {
                alert("this action was aviod by your browser，if you want to enable，please enter about:config in your address line,and change the value of signed.applets.codebase_principal_support to true");
            }
        }
        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch); prefs.setCharPref('browser.startup.homepage', document.body.setHomePage(document.URL));
    }
}
//End Page Options