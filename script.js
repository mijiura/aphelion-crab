/**
 * SW2.5 YtSheet 収支履歴メーカー - JavaScript
 */

// SW2.5 Categorized Items Preset
const swItems = [
    // --- 冒険者ツール類 ---
    { category: '冒険用具', name: '冒険者セット', price: 100 },
    { category: '冒険用具', name: '保存食（1週間分）', price: 50 },
    { category: '冒険用具', name: '水袋', price: 20 },
    { category: '冒険用具', name: '毛布', price: 50 },
    { category: '冒険用具', name: 'たいまつ（6本）', price: 5 },
    { category: '冒険用具', name: 'ロープ（10m）', price: 10 },
    { category: '冒険用具', name: '小型ナイフ', price: 20 },
    { category: '冒険用具', name: '着替えセット', price: 10 },
    { category: '冒険用具', name: '火口箱', price: 20 },
    { category: '冒険用具', name: 'テント（4人用）', price: 250 },
    { category: '冒険用具', name: 'テント（6人用）', price: 350 },
    { category: '冒険用具', name: 'ランタン', price: 40 },
    { category: '冒険用具', name: '油（1ビン）', price: 20 },
    { category: '冒険用具', name: 'フック', price: 10 },
    { category: '冒険用具', name: 'くさび（10本）', price: 20 },
    { category: '冒険用具', name: '小型ハンマー', price: 10 },
    { category: '冒険用具', name: '手鏡', price: 50 },
    { category: '冒険用具', name: '白紙の丸めた本（20頁）', price: 60 },
    { category: '冒険用具', name: '羽根ペン＆インク', price: 5 },
    { category: '冒険用具', name: '羊皮紙（5枚）', price: 5 },

    // --- 冒険道具類（消耗品） ---
    { category: '冒険道具', name: '信号手旗', price: 50 },
    { category: '冒険道具', name: '太陽のランタン', price: 120 },
    { category: '冒険道具', name: '罠探知の棒', price: 150 },
    { category: '冒険道具', name: '聴音の筒', price: 300 },
    { category: '冒険道具', name: '悪魔の血盤', price: 400 },
    { category: '冒険道具', name: '恋人の呼び笛', price: 400 },
    { category: '冒険道具', name: '気になる案山子I', price: 777 },
    { category: '冒険道具', name: '気になる案山子II', price: 2220 },
    { category: '冒険道具', name: '気になる案山子III', price: 7770 },
    { category: '冒険道具', name: 'ミスティックインク', price: 800 },
    { category: '冒険道具', name: 'ウォールベース', price: 900 },
    { category: '冒険道具', name: 'オートルーター', price: 1000 },
    { category: '冒険道具', name: '北向きの針', price: 1000 },
    { category: '冒険道具', name: '望遠鏡', price: 2000 },
    { category: '冒険道具', name: 'マギトーチ', price: 2000 },
    { category: '冒険道具', name: '迷わずのチョーク', price: 1200 },
    { category: '冒険道具', name: '太陽神のハンガー', price: 1300 },
    { category: '冒険道具', name: 'スモークグラファー', price: 1700 },
    { category: '冒険道具', name: 'バヨネット', price: 1960 },
    { category: '冒険道具', name: 'エフェクトカートリッジ', price: 2000 },
    { category: '冒険道具', name: '獣除けの蝋燭', price: 2130 },
    { category: '冒険道具', name: '警戒の石', price: 2480 },
    { category: '冒険道具', name: 'ステーブルサイト', price: 2500 },
    { category: '冒険道具', name: 'うっかり者のタグ', price: 2800 },
    { category: '冒険道具', name: '目覚ましのドラ', price: 2840 },
    { category: '冒険道具', name: '永久氷片', price: 3000 },
    { category: '冒険道具', name: '悪魔の血晶盤', price: 3200 },
    { category: '冒険道具', name: '大悪魔の血晶盤', price: 6400 },
    { category: '冒険道具', name: 'マジックコスメ', price: 4000 },
    { category: '冒険道具', name: '魔力感知の角', price: 4000 },
    { category: '冒険道具', name: '悩ましサイン', price: 4880 },
    { category: '冒険道具', name: 'マナカートリッジ', price: 5200 },
    { category: '冒険道具', name: 'マナカートリッジ名誉', price: 17200 },
    { category: '冒険道具', name: 'ケアフルオートルーター', price: 9600 },
    { category: '冒険道具', name: 'マナチャージクリスタル', price: 1000 },
    { category: '冒険道具', name: 'マナチャージクリスタル名誉', price: 17200 },
    { category: '冒険道具', name: 'マナチャージクリスタル名誉', price: 17200 },


    // --- 薬品類 ---
    { category: '薬品', name: 'ヒーリングポーション', price: 100 },
    { category: '薬品', name: 'ヒーリングポーション+1', price: 200 },
    { category: '薬品', name: 'トリートポーション', price: 500 },
    { category: '薬品', name: '魔香水', price: 600 },
    { category: '薬品', name: 'アウェイクポーション', price: 100 },
    { category: '薬品', name: 'アンチドートポーション', price: 500 },
    { category: '薬品', name: '救命草', price: 30 },
    { category: '薬品', name: '救難草', price: 100 },
    { category: '薬品', name: '魔香草', price: 100 },
    { category: '薬品', name: '魔海草', price: 250 },
    { category: '薬品', name: '気付け薬', price: 20 },
    { category: '薬品', name: '毒消し草', price: 50 },

    // --- 武器・防具（基本） ---
    { category: '武具', name: 'ダガー', price: 50 },
    { category: '武具', name: 'ショートソード', price: 100 },
    { category: '武具', name: 'ブロードソード', price: 200 },
    { category: '武具', name: 'メイス', price: 130 },
    { category: '武具', name: 'スピア', price: 150 },
    { category: '武具', name: 'ハンドアックス', price: 140 },
    { category: '武具', name: '弓', price: 200 },
    { category: '武具', name: '矢（12本）', price: 20 },
    { category: '武具', name: 'クロースアーマー', price: 20 },
    { category: '武具', name: 'ソフトレザー', price: 150 },
    { category: '武具', name: 'ハードレザー', price: 340 },
    { category: '武具', name: 'チェインメイル', price: 600 },
    { category: '武具', name: 'スプリントアーマー', price: 1000 },
    { category: '武具', name: 'バックラー', price: 60 },
    { category: '武具', name: 'カイトシールド', price: 300 },

    // --- 魔法発動体・マナ・石 ---
    { category: '魔法・魔晶石', name: '魔晶石（1点）', price: 100 },
    { category: '魔法・魔晶石', name: '魔晶石（2点）', price: 200 },
    { category: '魔法・魔晶石', name: '魔晶石（3点）', price: 300 },
    { category: '魔法・魔晶石', name: '魔晶石（4点）', price: 400 },
    { category: '魔法・魔晶石', name: '魔晶石（5点）', price: 500 },
    { category: '魔法・魔晶石', name: '魔晶石（10点）', price: 1000 },
    { category: '魔法・魔晶石', name: 'マナチャージクリスタル（1点）', price: 250 },
    { category: '魔法・魔晶石', name: 'マナチャージクリスタル（2点）', price: 500 },
    { category: '魔法・魔晶石', name: 'マナチャージクリスタル（3点）', price: 750 },
    { category: '魔法・魔晶石', name: 'マナチャージクリスタル（4点）', price: 1000 },
    { category: '魔法・魔晶石', name: 'マナチャージクリスタル（5点）', price: 1250 },
    { category: '魔法・魔晶石', name: '魔法の発動体', price: 100 },
    { category: '魔法・魔晶石', name: '聖印', price: 100 },
    { category: '魔法・魔晶石', name: 'マギスフィア（小）', price: 200 },
    { category: '魔法・魔晶石', name: 'マギスフィア（中）', price: 500 },
    { category: '魔法・魔晶石', name: 'マギスフィア（大）', price: 1000 },
    { category: '魔法・魔晶石', name: 'アルケミーキット', price: 200 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（赤/B）', price: 20 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（赤/A）', price: 200 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（赤/S）', price: 2000 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（赤/SS）', price: 20000 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（緑/B）', price: 20 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（緑/A）', price: 200 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（緑/S）', price: 2000 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（緑/SS）', price: 20000 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（黒/B）', price: 20 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（黒/A）', price: 200 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（黒/S）', price: 2000 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（黒/SS）', price: 20000 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（白/B）', price: 20 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（白/A）', price: 200 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（白/S）', price: 2000 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（白/SS）', price: 20000 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（金/B）', price: 20 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（金/A）', price: 200 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（金/S）', price: 2000 },
    { category: '魔法・魔晶石', name: 'マテリアルカード（金/SS）', price: 20000 },
    { category: '魔法・魔晶石', name: 'デーモンブラッド（1点）', price: 100 },

    // --- 装飾品 (基本/ET準拠) ---
    { category: '装飾品', name: 'とんがり帽子', price: 3000 },
    { category: '装飾品', name: 'ひらめき眼鏡', price: 4000 },
    { category: '装飾品', name: '決死の鉢巻き', price: 2000 },
    { category: '装飾品', name: 'セーフティメット', price: 2000 },
    { category: '装飾品', name: '悪寒のウィッグ', price: 2500 },
    { category: '装飾品', name: '決死の鉢巻き', price: 2000 },

    { category: '装飾品', name: '聖印', price: 100 },
    { category: '装飾品', name: '蝙蝠の耳飾り', price: 3000 },
    { category: '装飾品', name: 'ウサギの耳当て', price: 2000 },
    { category: '装飾品', name: '幸運のお守り', price: 2000 },
    { category: '装飾品', name: 'ポーションインジェクター', price: 2300 },
    { category: '装飾品', name: '熊の爪', price: 500 },
    { category: '装飾品', name: 'マギスフィア（小）', price: 200 },
    { category: '装飾品', name: 'マギスフィア（中）', price: 500 },
    { category: '装飾品', name: 'マギスフィア（大）', price: 1000 },
    { category: '装飾品', name: 'ウェポンホルダー', price: 1000 },
    { category: '装飾品', name: 'ウェポンホルダー改', price: 5000 },
    { category: '装飾品', name: '矢筒', price: 20 },
    { category: '装飾品', name: '野伏のセーヴマント', price: 4000 },
    { category: '装飾品', name: 'フード付きマント', price: 50 },
    { category: '装飾品', name: 'アルケミーキット', price: 200 },
    { category: '装飾品', name: 'ブラックベルト', price: 3000 },
    { category: '装飾品', name: '多機能ブラックベルト', price: 4000 },
    { category: '装飾品', name: '剛力の指輪', price: 500 },
    { category: '装飾品', name: '俊足の指輪', price: 500 },
    { category: '装飾品', name: '叡智の腕輪', price: 500 },
    { category: '装飾品', name: '魂の腕輪', price: 500 },
    { category: '装飾品', name: '巧みの指輪', price: 500 },
    { category: '装飾品', name: '宗匠の腕輪', price: 1000 },
    { category: '装飾品', name: '疾風の腕輪', price: 1000 },
    { category: '装飾品', name: '大いなる手袋', price: 3000 },
    { category: '装飾品', name: '跳躍の羽根', price: 500 },
    { category: '装飾品', name: '軽業のブーツ', price: 2000 },
    { category: '装飾品', name: '空間のポシェット', price: 8000 },
    { category: '装飾品', name: '熱狂の酒', price: 900 },
    { category: '装飾品', name: 'スマルティエのヘッドバンド', price: 3000 },
    { category: '装飾品', name: 'スマルティエの銀鈴', price: 2000 },
    { category: '装飾品', name: 'スマルティエの武道着', price: 3000 },

    // --- 乗り物・その他・名誉 ---
    { category: 'その他', name: 'アビスシャード', price: 200 }, // よく価値換算で使われるため
    { category: 'その他', name: 'スカウト用ツール', price: 100 },
    { category: 'その他', name: '乗馬用馬', price: 1000 },
    { category: 'その他', name: '軍馬', price: 3000 },
    { category: 'その他', name: '馬の防具（安価装甲）', price: 600 },
    { category: 'その他', name: '各種知力・判定強化アクセ', price: 1000 }, // 簡易的な代表枠として
];

// ==========================================
// 1. データと状態の初期化 (App State)
// ==========================================

// swItemsから「カテゴリ名」だけを抽出し、重複のないカテゴリ一覧（配列）を作成します。
// 例: ['すべて', '冒険用具', '薬品', '武具', ...]
const categories = ['すべて', ...new Set(swItems.map(item => item.category))];

// 現在選択されているカテゴリを記憶するための変数です。初期状態は「すべて」です。
let currentCategory = 'すべて';

// ユーザーがクリックして追加した「購入予定のアイテム」を格納しておく配列です。
let addedItems = [];

// ==========================================
// 2. DOM要素の取得 (DOM Elements)
// html側で定義したidやclassを持つ要素を変数に格納し、後で操作しやすくします。
// ==========================================
const presetGrid = document.getElementById('preset-grid');
const presetSearch = document.getElementById('preset-search');
const presetForm = document.getElementById('preset-form');
const customForm = document.getElementById('custom-form');
const itemsList = document.getElementById('items-list');
const totalCostDisplay = document.getElementById('total-cost-display');
const outputTextarea = document.getElementById('output-textarea');
const copyBtn = document.getElementById('copy-btn');
const clearListBtn = document.getElementById('clear-list-btn');
const categoryTabsContainer = document.getElementById('category-tabs');
const tabBtns = document.querySelectorAll('.tab-btn');

// ==========================================
// 3. アプリケーションの初期起動処理 (Initialization)
// ページが読み込まれた時に1度だけ実行されます。
// ==========================================
function init() {
    populateCategoryTabs(); // カテゴリタブ（ボタン）をHTMLに生成します
    filterAndRenderGrid();  // 初期状態（全件表示）でアイテムグリッドを生成します
    setupEventListeners();  // クリックや入力などのイベントリスナー（監視役）を登録します
    updateUI();             // カートの中身や合計金額を計算し、画面に反映させます
}

// ==========================================
// 4. 表示処理 (Rendering Functions)
// ==========================================

// カテゴリのタブボタンを動的に生成する関数
function populateCategoryTabs() {
    categoryTabsContainer.innerHTML = ''; // まず中身を空にします

    // カテゴリ配列を１つずつ取り出し、ボタン化していきます
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.type = 'button';
        // 選択中のカテゴリには 'active' というクラスを付けて色を変えます
        btn.className = `category-tab-btn ${cat === currentCategory ? 'active' : ''}`;
        btn.textContent = cat;

        // タブがクリックされた時の処理
        btn.onclick = () => {
            // 全部のタブから 'active' を外し、クリックされたタブだけに 'active' を付け直す
            document.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 現在のカテゴリを更新して、グリッドを再描画します
            currentCategory = cat;
            filterAndRenderGrid();
        };
        categoryTabsContainer.appendChild(btn);
    });
}

// 検索窓の文字と選択中のカテゴリから、表示するアイテムを絞り込む関数
function filterAndRenderGrid(query = '') {
    let filtered = swItems; // まず全アイテムをベースにします

    // 「すべて」以外のカテゴリが選ばれている場合、そのカテゴリのアイテムだけを残します
    if (currentCategory !== 'すべて') {
        filtered = filtered.filter(item => item.category === currentCategory);
    }

    // 検索窓に文字が入っている場合、その文字が含まれるアイテムだけを残します(小文字・大文字区別なし)
    if (query) {
        filtered = filtered.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    }

    // 絞り込んだ結果を使ってグリッドを描画します
    populatePresetGrid(filtered);
}

// 絞り込まれたアイテムデータを受け取り、実際にボタンとしてHTMLに追加する関数
function populatePresetGrid(items) {
    presetGrid.innerHTML = ''; // まずグリッドの中身を空にします

    items.forEach((item) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'preset-item-btn';
        // アイテム名と価格をボタン内に配置
        btn.innerHTML = `<span class="name">${item.name}</span><span class="price">${item.price}G</span>`;

        // クリックしたらカート（リスト）に数量1でアイテムを追加します
        btn.onclick = () => addItemToList(item.name, item.price, 1);
        presetGrid.appendChild(btn);
    });
}

// ==========================================
// 5. イベントの監視・登録 (Event Listeners)
// ユーザーが何らかの操作（文字入力、クリックなど）をした時の動きを定義します
// ==========================================
function setupEventListeners() {
    // 【プリセット / 手動入力】タブの切り替え機能
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // タブ自体の見た目（active）を切り替え
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.item-form').forEach(f => f.classList.remove('active-form'));

            btn.classList.add('active');

            // data-target属性に指定された対象のフォーム(id)を表示する
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active-form');
        });
    });

    // 検索窓に文字が入力された瞬間(input)に発火し、グリッドの絞り込みを実行する
    presetSearch.addEventListener('input', (e) => {
        filterAndRenderGrid(e.target.value);
    });

    // 「手動入力」フォームで追加ボタン（Submit）が押された時の処理
    customForm.addEventListener('submit', (e) => {
        // デフォルトの画面遷移（リロード）動作をキャンセルします
        e.preventDefault();

        const name = document.getElementById('custom-name').value.trim();
        const price = parseInt(document.getElementById('custom-price').value) || 0;
        const qty = parseInt(document.getElementById('custom-qty').value) || 1;

        if (name === '') return; // 名前が空っぽなら何もしない

        // アイテムをリストに登録
        addItemToList(name, price, qty);

        // 次の入力のために、インプットボックスを空に戻しておく
        document.getElementById('custom-name').value = '';
        document.getElementById('custom-price').value = '';
        document.getElementById('custom-qty').value = 1;
    });

    // カートの全クリアボタンが押された時
    clearListBtn.addEventListener('click', () => {
        addedItems = [];
        updateUI();
    });

    // Copy output
    copyBtn.addEventListener('click', async () => {
        try {
            if (outputTextarea.value.trim() === '') return;
            await navigator.clipboard.writeText(outputTextarea.value);
            showToast();
        } catch (err) {
            console.error('Failed to copy text: ', err);
            // Fallback
            outputTextarea.select();
            document.execCommand('copy');
            showToast();
        }
    });
}

// ==========================================
// 6. メインロジック (App Logic)
// リストへの追加・削除・結果生成などを行います
// ==========================================

// アイテムをリストの配列に追加（または加算）する関数
function addItemToList(name, price, qtyAdd) {
    // 既にリストの中に、全く同じ名前かつ同じ値段のアイテムが存在するかチェック
    const existing = addedItems.find(item => item.name === name && item.price === price);

    if (existing) {
        // すでに存在する場合：もう1個追加されたとみなし、個数をプラスする
        existing.qty += qtyAdd;
    } else {
        // 存在しない場合：新しくユニークなIDを作って、リスト(配列)の末尾に追加する
        const newId = Date.now().toString() + Math.random().toString(36).substr(2, 5);
        addedItems.push({ id: newId, name, price, qty: qtyAdd });
    }
    updateUI(); // 画面を最新状態に更新
}

// リスト内で直接個数を変更したときに呼ばれる関数（HTML上のonchangeで呼び出されるため window に登録）
window.updateItemQty = function (id, newQty) {
    const qty = parseInt(newQty, 10);
    const item = addedItems.find(i => i.id === id); // 対象のアイテムを探す

    if (item && qty > 0) {
        // 0より大きければ個数を上書きする
        item.qty = qty;
        updateUI();
    } else if (item && qty <= 0) {
        // 0以下になった場合は、リストから削除してしまう
        removeItem(id);
    }
};

// アイテムをリストから削除する関数
function removeItem(id) {
    // 引数で受け取ったID「以外」のアイテムだけを残す（＝削除と同じ）
    addedItems = addedItems.filter(item => item.id !== id);
    updateUI();
}

// 最終的な「ゆとしーと形式のテキスト出力」を生成する関数
function generateOutputText() {
    if (addedItems.length === 0) return '';

    // items配列のすべてについて、文字列へ変換してから改行(\n)で繋げる
    return addedItems.map(item => {
        // フォーマット: 【対象アイテムの名前】::-単価*個数

        // 品物が2個以上の場合はわかりやすく【保存食(2個)】のような表記で生成します
        const nameFormatted = item.qty > 1 ? `${item.name}(${item.qty}個)` : item.name;

        return `【${nameFormatted}】::-${item.price}*${item.qty}`;
    }).join('\n');
}

// データ（addedItems）の状態をもとに、HTML画面（カートやテキストエリア）を描画しなおす関数
function updateUI() {
    // 1. まずカート内のリスト表示を空にリセットする
    itemsList.innerHTML = '';

    // カラッポの時はプレースホルダーを表示して処理中断
    if (addedItems.length === 0) {
        itemsList.innerHTML = '<li class="empty-state">まだアイテムがありません</li>';
        totalCostDisplay.textContent = '合計: 0 G';
        outputTextarea.value = '';
        return;
    }

    let totalCost = 0; // 全体の合計金額計算用

    // 2. addedItems配列を一つずつ回し、HTMLのリスト要素（<li>）を作って追加していく
    addedItems.forEach(item => {
        const cost = item.price * item.qty; // (単価 × 個数)
        totalCost += cost;

        const li = document.createElement('li');
        // バッククォート(`)を使って、HTMLを直感的に当てはめる（テンプレートリテラル）
        li.innerHTML = `
      <div class="item-info">
        <span class="item-name">${item.name}</span>
        <span class="item-price">
          ${item.price}G x 
          <input type="number" class="inline-qty" min="1" value="${item.qty}" onchange="updateItemQty('${item.id}', this.value)">
           = ${cost}G
        </span>
      </div>
      <!-- ✖ボタンを押すと removeItem() が呼ばれる -->
      <button class="icon-btn" onclick="removeItem('${item.id}')" title="削除">✖</button>
    `;
        itemsList.appendChild(li);
    });

    // 3. UIの合計金額を更新
    totalCostDisplay.textContent = `合計: ${totalCost} G`;

    // 4. テキストエリア（最終出力）を文字列に変換して反映する
    outputTextarea.value = generateOutputText();
}

// removeItem関数内でHTML側(`onclick="removeItem(...)"`)から直接呼べるように
// windowオブジェクト（グローバル領域）に登録してあげます。
window.removeItem = removeItem;

// ==========================================
// 7. ユーティリティ (Utilities)
// ==========================================

// コピー完了を知らせる小さな通知（トースト）を表示するアニメーション関数
function showToast() {
    copyToast.classList.add('show');
    // 2秒(2000ミリ秒)経過したら'show'クラスを外して非表示にする
    setTimeout(() => {
        copyToast.classList.remove('show');
    }, 2000);
}

// ==========================================
// 起動トリガー
// HTMLの読み込みが完了した段階で、一番最初に init() を実行させます。
// ==========================================
document.addEventListener('DOMContentLoaded', init);
