// version : 1.0.0

function showBubble(page, view, content, options) { // options传进来的尺寸单位一律为rpx
    page['bubbleMaskTap'] = function (e) {
        hideBubble(page)
    }
    wx.createSelectorQuery().select(view).boundingClientRect(function (rect) {
        var scale = page.data.sysInfo.windowWidth / 750 // px/rpx

        var direction = options && options.direction ? options.direction : "up" // 箭头方向：up/down
        var backgroudColor = options && options.backgroudColor ? options.backgroudColor : "#1aad19" // 背景色
        var fontColor = options && options.fontColor ? options.fontColor : "#fff" // 字体颜色
        var fontSize = options && options.fontSize ? options.fontSize : 30 // 字体大小
        var paddingColumn = options && options.paddingColumn ? options.paddingColumn : 10 // 竖向内边距
        var paddingRow = options && options.paddingRow ? options.paddingRow : 20 // 横向内边距
        var contentRadius = options && options.contentRadius ? options.contentRadius : 10 // 圆角
        var arrowHeight = options && options.arrowHeight ? options.arrowHeight : 20 // 箭头高度（宽度是高度的2倍）

        // 计算气泡与屏幕顶部的距离
        var margin_top = 0;
        if (direction == "up") {
            margin_top = rect.bottom
        } else if (direction == "down") {
            margin_top = rect.top - ((paddingColumn * 2 + fontSize + arrowHeight * 2) * scale)
        }

        // 计算气泡箭头与屏幕左边的距离
        var margin_left = ((rect.left + rect.right) / 2 - page.data.sysInfo.windowWidth / 2) * 2

        // 计算气泡与屏幕左边的距离，不能超出屏幕35rpx的内边距
        var content_margin_left = margin_left
        var maxMargin = ((750 / 2) - 200 - paddingRow - 35) * scale * 2
        if (content_margin_left < 0 && (content_margin_left < -maxMargin)) {
            content_margin_left = -maxMargin
        } else if (content_margin_left > 0 && (content_margin_left > maxMargin)) {
            content_margin_left = maxMargin
        }

        page.setData({
            custom_bubble: {
                content: content,

                direction: direction,
                backgroudColor: backgroudColor,
                fontColor: fontColor,
                fontSize: fontSize,
                paddingColumn: paddingColumn,
                paddingRow: paddingRow,
                contentRadius: contentRadius,
                arrowHeight: arrowHeight,

                margin_top: margin_top,
                margin_left: margin_left,
                content_margin_left: content_margin_left,
            },
        })
    }).exec();
}

function hideBubble(page) {
    page.setData({
        custom_bubble: null
    })
}

module.exports = {
    showBubble,
    hideBubble,
}