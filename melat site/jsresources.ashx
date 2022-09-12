function ShowDatePicker(ctrl) {
if ($('#CalendarWindowMask').length == 0) {
$('<div id="CalendarWindowMask" onclick="HideDatePicker();" style="top:0px; left:0px; width:100%; background-color:gray; position:absolute; z-index:999; filter:alpha(opacity=0); opacity: 0.00;"></div>').appendTo(document.body);
if ($.browser.msie && $.browser.version == "6.0")
$('#CalendarWindowMask').css({ 'position': 'absolute', 'height': $(document).height() });
else
$('#CalendarWindowMask').css({ 'position': 'fixed', 'height': '100%' });}
$('#CalendarWindowMask').show();
var divCalendarContainer = $('<div id="divCalendarContainer" style="display:none;position:absolute;z-index:1000;"></div>');
var iframeCalendar = $('<iframe id="iframeCalendar" frameborder="0" style="" width="320" height="317"></iframe>');
iframeCalendar.attr("src", "/Images/DatePickerEx/CalendarEx.aspx?ctrl="+ctrl[0].id+"&sd="+ctrl.val());
var left;
if (ctrl.offset().left+255 > $(window).width())
left = $(window).width()-255;
else
left = ctrl.offset().left;
divCalendarContainer.css("left", left).css("top", ctrl.offset().top+ctrl.outerHeight());
divCalendarContainer.append(iframeCalendar);
$(document.body).append(divCalendarContainer);
divCalendarContainer.show("slow");};
function HideDatePicker() {
$("#divCalendarContainer").hide("slow", function() { $(this).remove(); });
$('#CalendarWindowMask').hide();};
function SetDatePicker(ctrl, value) {
$("#"+ctrl).val(value);
HideDatePicker();};
