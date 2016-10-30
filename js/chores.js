'use strict';

$(function () {
    function columnBreak(items) {
        var itemCount = items.length;
        var mediaWidth = window.innerWidth;
        var column = "<div class='chores-column'></div>";

        function addColumns(columnNumber) {
            var columnItems = Math.ceil(itemCount / columnNumber);

            for (var i = 0; i < itemCount; i += columnItems) {
                items.slice(i, i + columnItems).wrapAll(column);
            }
        }

        if (mediaWidth >= 768 && mediaWidth < 1024) {
            addColumns(2);
        }

        if (mediaWidth >= 1025) {
            addColumns(3);

            if (itemCount % 3 === 1) {
                $('.chores-column:nth-last-child(2) .chore:last-child').prependTo($('.chores-column:last-child'));
            }
        }
    }

    columnBreak($('.chore'));

    $('.chore-extend').click(function () {
        $(this).parent('.chore').toggleClass('_extended');
    });
});