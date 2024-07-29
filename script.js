// scripts.js

// プレイヤーの初期ライフ
const initialLife = 40;

// プレイヤーのライフカウンター要素を取得
const counters = document.querySelectorAll('.life-total');

// 各プレイヤーのライフを初期化する関数
function resetCounters() {
    counters.forEach(counter => {
        counter.textContent = initialLife;
        // 点滅エフェクトのリセット
        const flashes = counter.parentElement.querySelectorAll('.flash');
        flashes.forEach(flash => flash.classList.remove('visible'));
    });
}

// リセットボタンのクリックイベントを設定
document.getElementById('resetButton').addEventListener('click', () => {
    resetCounters();
});

// プレイヤーのカウンターのクリックイベント
document.querySelectorAll('.counter').forEach(counter => {
    counter.addEventListener('click', (e) => {
        const playerId = e.currentTarget.id;
        const isLeft = e.clientX < counter.getBoundingClientRect().left + counter.offsetWidth / 2;
        const lifeElement = counter.querySelector('.life-total');

        // 点滅エフェクトの設定
        const flashClass = isLeft ? 'left' : 'right';
        const flash = counter.querySelector(`.flash.${flashClass}`);
        flash.classList.add('visible');
        setTimeout(() => flash.classList.remove('visible'), 300); // 点滅の時間設定

        // ライフの増減処理
        if ((playerId === 'player1' || playerId === 'player2') && isLeft) {
            lifeElement.textContent = parseInt(lifeElement.textContent) + 1;
        } else if ((playerId === 'player1' || playerId === 'player2') && !isLeft) {
            lifeElement.textContent = parseInt(lifeElement.textContent) - 1;
        } else if ((playerId === 'player3' || playerId === 'player4') && isLeft) {
            lifeElement.textContent = parseInt(lifeElement.textContent) - 1;
        } else if ((playerId === 'player3' || playerId === 'player4') && !isLeft) {
            lifeElement.textContent = parseInt(lifeElement.textContent) + 1;
        }
    });
});