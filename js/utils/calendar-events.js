// 【共通】FullCalendar用のイベント(予定)データ生成
// home.html / schedule.html で共有して使用する。
// 祝日API(holidays-jp)のレスポンスを受け取り、サンプル予定に祝日イベントを追加した配列を返す。
const getEventDatas = (holidaysData) => {
    let eventDatas = [
        {
            id: '1', // ユニークID
            start: '2024-10-01', // イベント開始日
            end: '', // イベント終了日
            title: 'イベント1', // イベントタイトル
            description: 'イベント1の詳細です', // イベント詳細
            backgroundColor: "#3498DB",// 背景色
            borderColor: "#3498DB",// 枠線色
            // url: '#',
            // editable: true, // イベント操作の可否
        },
        {
            id: '2',
            title: 'イベント2',
            start: '2024-10-05',
            backgroundColor: "#18BC9C",// 背景色
            borderColor: "#18BC9C",// 枠線色
            // url: '#'
        },
        {
            id: '3',
            title: 'イベント3',
            start: '2024-10-07',
            end: '2024-10-11', // 2021-01-10 23:59:59で終了
            color: '#F39C12',
            // url: '#'
        },
        {
            id: '4',
            title: 'イベント4',
            start: '2024-10-15',
            end: '2024-10-15', // 2021-01-10 23:59:59で終了
            color: '#F39C12',
            // url: '#'
        },
        {
            id: '5',
            title: 'イベント5',
            start: '2024-10-15 09:00:00',
            end: '2024-10-15 18:00:00', // 2021-01-10 23:59:59で終了
            color: '#F39C12',
            // url: '#'
        },
        {
            id: '6',
            title: 'イベント6',
            start: '2024-10-15 09:00:00',
            end: '2024-10-15 18:00:00', // 2021-01-10 23:59:59で終了
            color: '#F39C12',
            // url: '#'
        },
    ];
    // 祝日
    let holidays = Object.keys(holidaysData);
    for (let i = 0; i < holidays.length; i++) {
        let holiday = {
            // 指定日付セル内の表示内容
            title: holidaysData[holidays[i]],
            // 指定日付
            start: holidays[i],
            // クラス名
            className: 'holiday',
            holiday: holidays[i],
            color: '#E74C3C',
        };
        eventDatas.push(holiday);
    }
    // 【DEBUG】確認用
    // console.log(eventDatas);
    return eventDatas;
}
