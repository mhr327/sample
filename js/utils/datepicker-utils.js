// 【共通】日付/日時ピッカー関連のユーティリティ
// example*.html / schedule_save.html で共有して使用する。

// tempusdominus-bootstrap-4 用のアイコン設定(FontAwesome)
const DATETIMEPICKER_ICONS = {
    time: 'fa fa-clock',
    date: 'fa fa-calendar-alt',
    up: 'fa fa-arrow-up',
    down: 'fa fa-arrow-down',
    previous: 'fa fa-chevron-left',
    next: 'fa fa-chevron-right',
    today: 'fa fa-calendar-check-o',
    clear: 'fa fa-trash',
    close: 'fa fa-times'
};

// 入力値を許可文字(validCharacters)のみに制限する。
// jQuery の input イベントハンドラ内で、対象要素(this)と許可文字列を渡して使用する。
function restrictInputToChars(inputEl, validCharacters) {
    var $input = $(inputEl);
    var value = $input.val();
    for (var i = 0; i < value.length; i++) {
        if (validCharacters.indexOf(value.charAt(i)) === -1) {
            $input.val(value.slice(0, i) + value.slice(i + 1));
        }
    }
}
