/**
 * SW2.5 YtSheet 収支履歴メーカー - JavaScript
 */

// SW2.5 Categorized Items Preset
const swItems = [
    // --- 冒険者ツール類 ---
    { category: '一般装備品', name: '冒険者セット', price: 100 },
    { category: '一般装備品', name: '袋', price: 8 },
    { category: '一般装備品', name: 'ベルトポーチ', price: 15 },
    { category: '一般装備品', name: '水袋', price: 20 },
    { category: '一般装備品', name: '背負い袋', price: 50 },

    { category: '一般装備品', name: '食器セット', price: 12 },
    { category: '一般装備品', name: '毛布', price: 40 },
    { category: '一般装備品', name: '調理道具', price: 50 },
    { category: '一般装備品', name: 'テント', price: 250 },

    { category: '一般装備品', name: 'たいまつ(6本)', price: 5 },
    { category: '一般装備品', name: '火口箱', price: 20 },
    { category: '一般装備品', name: '油(1ビン)', price: 20 },
    { category: '一般装備品', name: '火縄壺', price: 40 },
    { category: '一般装備品', name: 'ランタン', price: 40 },

    { category: '一般装備品', name: 'ロープ(10m)', price: 10 },
    { category: '一般装備品', name: '小型ハンマー', price: 10 },
    { category: '一般装備品', name: 'フック', price: 10 },
    { category: '一般装備品', name: 'くさび(10本)', price: 20 },
    { category: '一般装備品', name: '小型ナイフ', price: 20 },
    { category: '一般装備品', name: '手鏡', price: 50 },

    { category: '一般装備品', name: '着替えセット', price: 10 },
    { category: '一般装備品', name: '水着', price: 20 },
    { category: '一般装備品', name: '千変万化の衣', price: 18000 },

    { category: '一般装備品', name: 'ロバ', price: 800 },
    { category: '一般装備品', name: 'ラバ', price: 1000 },
    { category: '一般装備品', name: '荷馬', price: 1500 },
    { category: '一般装備品', name: 'ラクダ', price: 2000 },

    { category: '一般装備品', name: '自宅住まいで自炊', price: 10 },
    { category: '一般装備品', name: '素泊まり(1日)', price: 15 },
    { category: '一般装備品', name: '素泊まり(1週間)', price: 150 },
    { category: '一般装備品', name: 'エール', price: 50 },
    { category: '一般装備品', name: 'ワイン', price: 50 },
    { category: '一般装備品', name: '蒸留酒', price: 50 },
    { category: '一般装備品', name: '食事(1食分)', price: 3 },
    { category: '一般装備品', name: '保存食(1日分)', price: 10 },
    { category: '一般装備品', name: '保存食(1週間分)', price: 50 },
    { category: '一般装備品', name: '栄養カプセル', price: 100 },

    { category: '一般装備品', name: '羽根ペン', price: 2 },
    { category: '一般装備品', name: 'インク', price: 40 },
    { category: '一般装備品', name: '絵筆', price: 5 },
    { category: '一般装備品', name: '油絵の具', price: 10 },
    { category: '一般装備品', name: '羊皮紙(5枚)', price: 5 },
    { category: '一般装備品', name: '白紙の本(20頁)', price: 30 },
    { category: '一般装備品', name: '砂時計(3分)', price: 120 },
    { category: '一般装備品', name: '虫眼鏡', price: 100 },
    { category: '一般装備品', name: 'ティーセット', price: 100 },
    { category: '一般装備品', name: '化粧品セット', price: 100 },

    // --- 冒険道具類(消耗品) ---
    { category: '冒険道具', name: '信号手旗セット', price: 50 },
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
    { category: '冒険道具', name: '望遠鏡', price: 1000 },
    { category: '冒険道具', name: 'マギトーチ', price: 1000 },
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
    { category: '冒険道具', name: 'マジックコスメ', price: 4000 },
    { category: '冒険道具', name: '魔力感知の角', price: 4000 },
    { category: '冒険道具', name: '悩ましサイン', price: 4880 },
    { category: '冒険道具', name: 'マナカートリッジ', price: 5200 },
    { category: '冒険道具', name: 'マナカートリッジ名誉', price: 17200 },
    { category: '冒険道具', name: '大悪魔の血晶盤', price: 6400 },
    { category: '冒険道具', name: 'ケアフルオートルーター', price: 9600 },
    { category: '冒険道具', name: '解毒スプーン', price: 10000 },
    { category: '冒険道具', name: '妖精のランタン', price: 10000 },
    { category: '冒険道具', name: '空間固定の棒', price: 19000 },

    { category: '冒険道具', name: 'ポーションボール', price: 20 },
    { category: '冒険道具', name: '酒の種(10粒)', price: 100 },
    { category: '冒険道具', name: 'ジャックの豆', price: 100 },
    { category: '冒険道具', name: '消魔の守護石(1点)', price: 100 },
    { category: '冒険道具', name: 'ネズミ玉', price: 100 },
    { category: '冒険道具', name: '接合潤滑剤', price: 160 },
    { category: '冒険道具', name: '白炎玉', price: 200 },
    { category: '冒険道具', name: '秘密の封蝋', price: 280 },
    { category: '冒険道具', name: '月光の魔符', price: 500 },
    { category: '冒険道具', name: '月光の魔符+', price: 1500 },
    { category: '冒険道具', name: '月光の魔符++', price: 5000 },
    { category: '冒険道具', name: '陽光の魔符', price: 500 },
    { category: '冒険道具', name: '陽光の魔符+', price: 1500 },
    { category: '冒険道具', name: '陽光の魔符++', price: 5000 },
    { category: '冒険道具', name: '守りの聖水', price: 700 },
    { category: '冒険道具', name: '守りの聖水+', price: 2000 },
    { category: '冒険道具', name: '守りの聖水++', price: 5700 },
    { category: '冒険道具', name: '絆の月光の魔符', price: 1000 },
    { category: '冒険道具', name: '絆の月光の魔符+', price: 2000 },
    { category: '冒険道具', name: '絆の月光の魔符++', price: 6000 },
    { category: '冒険道具', name: '絆の陽光の魔符', price: 1000 },
    { category: '冒険道具', name: '絆の陽光の魔符+', price: 2000 },
    { category: '冒険道具', name: '絆の陽光の魔符++', price: 6000 },
    { category: '冒険道具', name: 'メッセージルージュ', price: 1000 },
    { category: '冒険道具', name: '密告者のシール', price: 2000 },
    { category: '冒険道具', name: '弾き玉', price: 2840 },
    { category: '冒険道具', name: '一角獣の角(一回)', price: 6000 },

    // --- 薬品類 ---
    { category: '薬品', name: 'ヒーリングポーション(威力20)', price: 100 },
    { category: '薬品', name: 'ヒーリングポーション+1(威力20+1)', price: 200 },
    { category: '薬品', name: 'トリートポーション(威力30)', price: 500 },
    { category: '薬品', name: '魔香水', price: 600 },
    { category: '薬品', name: 'アウェイクポーション', price: 100 },
    { category: '薬品', name: 'アンチドーテポーション(達成値15)', price: 500 },
    { category: '薬品', name: 'アンチドーテポーションII(達成値20)', price: 2000 },
    { category: '薬品', name: 'アンチドーテポーションIII(達成値25)', price: 10000 },
    { category: '薬品', name: 'キュアストーンポーション(達成値15)', price: 500 },
    { category: '薬品', name: 'キュアストーンポーションII(達成値20)', price: 2000 },
    { category: '薬品', name: 'キュアストーンポーションIII(達成値25)', price: 10000 },
    { category: '薬品', name: 'スカーレットポーション', price: 1400 },
    { category: '薬品', name: 'デクスタリティポーション', price: 2000 },
    { category: '薬品', name: 'スピードポーション', price: 2000 },
    { category: '薬品', name: 'アンチマジックポーション', price: 3000 },
    { category: '薬品', name: '熱狂の酒', price: 980 },
    { category: '薬品', name: '夢幻の薬', price: 3000 },
    { category: '薬品', name: '救命草(威力10)', price: 30 },
    { category: '薬品', name: '救難草(威力50)', price: 100 },
    { category: '薬品', name: '魔香草(威力0)', price: 100 },
    { category: '薬品', name: '魔海草(威力10)', price: 250 },
    { category: '薬品', name: '気付け薬', price: 20 },
    { category: '薬品', name: '毒消し草', price: 50 },

    // --- 武器・防具(基本) ---
    { category: '武具', name: 'ナイフ', price: 30 },
    { category: '武具', name: 'スティレット', price: 40 },
    { category: '武具', name: 'ダガー', price: 50 },
    { category: '武具', name: 'ククリ', price: 60 },
    { category: '武具', name: 'ショートソード', price: 80 },
    { category: '武具', name: 'エペ', price: 90 },
    { category: '武具', name: 'カッツバルゲル', price: 100 },
    { category: '武具', name: 'レイピア', price: 110 },
    { category: '武具', name: 'サーベル', price: 190 },
    { category: '武具', name: 'エストック', price: 370 },
    { category: '武具', name: 'ロングソード', price: 440 },
    { category: '武具', name: 'ブロードソード', price: 340 },
    { category: '武具', name: 'バスタードソード', price: 560 },
    { category: '武具', name: 'ファルシオン', price: 790 },
    { category: '武具', name: 'ツーハンドソード', price: 860 },
    { category: '武具', name: 'シャムシール', price: 950 },
    { category: '武具', name: 'グレートソード', price: 1020 },
    { category: '武具', name: 'ウィークネスピラー', price: 7660 },
    { category: '武具', name: '狂戦士の剣', price: 13000 },

    { category: '武具', name: 'ファストスパイク', price: 820 },
    { category: '武具', name: 'マンゴーシュ', price: 620 },
    { category: '武具', name: 'フリッサ', price: 880 },
    { category: '武具', name: 'スキアヴォーナ', price: 990 },
    { category: '武具', name: 'ディフェンダー', price: 1770 },
    { category: '武具', name: 'タルワール', price: 1210 },
    { category: '武具', name: 'スティールブレイド', price: 1450 },
    { category: '武具', name: 'フランベルジュ', price: 1580 },
    { category: '武具', name: 'ドラゴンスレイヤー', price: 2760 },
    { category: '武具', name: 'バルザーの魔封剣', price: 16000 },
    { category: '武具', name: 'デストロイヤー', price: 15000 },

    { category: '武具', name: 'ピアシング', price: 2150 },
    { category: '武具', name: 'エクセレントレイピア', price: 4580 },
    { category: '武具', name: 'ミスリルソード', price: 7500 },
    { category: '武具', name: 'スラッシャー', price: 5750 },
    { category: '武具', name: 'クレイモア', price: 8000 },
    { category: '武具', name: 'センチネル', price: 14000 },
    { category: '武具', name: '首切り刀', price: 30000 },
    { category: '武具', name: 'エンジェルフェザー', price: 40000 },
    { category: '武具', name: 'ムーンピラー', price: 48000 },
    { category: '武具', name: 'ハイペリオン', price: 57000 },
    { category: '武具', name: 'ガイスター', price: 83000 },


    { category: '武具', name: 'ブロードソード', price: 200 },
    { category: '武具', name: 'メイス', price: 130 },
    { category: '武具', name: 'スピア', price: 150 },
    { category: '武具', name: 'ハンドアックス', price: 140 },
    { category: '武具', name: '弓', price: 200 },
    { category: '武具', name: '矢(12本)', price: 20 },
    { category: '武具', name: 'クロースアーマー', price: 20 },
    { category: '武具', name: 'ソフトレザー', price: 150 },
    { category: '武具', name: 'ハードレザー', price: 340 },
    { category: '武具', name: 'チェインメイル', price: 600 },
    { category: '武具', name: 'スプリントアーマー', price: 1000 },
    { category: '武具', name: 'バックラー', price: 60 },
    { category: '武具', name: 'カイトシールド', price: 300 },

    // --- 魔法発動体・マナ・石 ---
    { category: '冒険者技能用アイテム', name: '魔法の発動体', price: 100 },
    { category: '冒険者技能用アイテム', name: '聖印', price: 100 },
    { category: '冒険者技能用アイテム', name: '我慢比べのワンド', price: 700 },
    { category: '冒険者技能用アイテム', name: '測量のワンド', price: 4200 },
    { category: '冒険者技能用アイテム', name: 'ミニマムアーマー(防護点3)', price: 2120 },
    { category: '冒険者技能用アイテム', name: 'ミニマムアーマー(防護点6)', price: 6120 },
    { category: '冒険者技能用アイテム', name: '魔力を帯びた骨', price: 500 },
    { category: '冒険者技能用アイテム', name: '呼応石', price: 100 },
    { category: '冒険者技能用アイテム', name: '携帯神殿', price: 9120 },
    { category: '冒険者技能用アイテム', name: '浄化の聖印', price: 13800 },
    { category: '冒険者技能用アイテム', name: '妖精使いの宝石', price: 50 },
    { category: '冒険者技能用アイテム', name: '宝石ケース', price: 100 },
    { category: '冒険者技能用アイテム', name: '華美なる宝石飾り(名誉20)', price: 200 },
    { category: '冒険者技能用アイテム', name: 'フェアリードロップ', price: 1000 },
    { category: '冒険者技能用アイテム', name: 'マギスフィア(小)', price: 200 },
    { category: '冒険者技能用アイテム', name: 'マギスフィア(中)', price: 500 },
    { category: '冒険者技能用アイテム', name: 'マギスフィア(大)', price: 1000 },
    { category: '冒険者技能用アイテム', name: '魔晶石(2点)', price: 200 },
    { category: '冒険者技能用アイテム', name: '魔晶石(3点)', price: 300 },
    { category: '冒険者技能用アイテム', name: '魔晶石(5点)', price: 500 },
    { category: '冒険者技能用アイテム', name: '魔晶石(10点)', price: 2000 },
    { category: '冒険者技能用アイテム', name: 'マナチャージクリスタル(1点)', price: 500 },
    { category: '冒険者技能用アイテム', name: 'マナチャージクリスタル(2点)', price: 1000 },
    { category: '冒険者技能用アイテム', name: 'マナチャージクリスタル(3点)', price: 1500 },
    { category: '冒険者技能用アイテム', name: 'マナチャージクリスタル(4点)', price: 2000 },
    { category: '冒険者技能用アイテム', name: 'マナチャージクリスタル(5点)', price: 2500 },
    { category: '冒険者技能用アイテム', name: '矢筒', price: 20 },
    { category: '冒険者技能用アイテム', name: '補充の矢筒', price: 600 },
    { category: '冒険者技能用アイテム', name: 'えびら', price: 100 },
    { category: '冒険者技能用アイテム', name: 'ガンベルト', price: 100 },
    { category: '冒険者技能用アイテム', name: 'バレットスリンガー', price: 40 },
    { category: '冒険者技能用アイテム', name: 'バレットポーチ', price: 100 },
    { category: '冒険者技能用アイテム', name: 'スカウト用ツール', price: 100 },
    { category: '冒険者技能用アイテム', name: '精密ツールセット', price: 2500 },
    { category: '冒険者技能用アイテム', name: '機械仕掛けの指', price: 7080 },
    { category: '冒険者技能用アイテム', name: 'アンロックキー', price: 100 },
    { category: '冒険者技能用アイテム', name: '薬師道具セット', price: 200 },
    { category: '冒険者技能用アイテム', name: '魔香のパイプ', price: 1360 },
    { category: '冒険者技能用アイテム', name: '楽器', price: 100 },
    { category: '冒険者技能用アイテム', name: '明音のフルート', price: 200 },
    { category: '冒険者技能用アイテム', name: 'ペット', price: 100 },
    { category: '冒険者技能用アイテム', name: '尊い騎手の像(名誉50)', price: 1000 },
    { category: '冒険者技能用アイテム', name: 'アルケミーキット', price: 200 },
    { category: '冒険者技能用アイテム', name: 'カードシューター', price: 1500 },
    { category: '冒険者技能用アイテム', name: 'マテリアルカード(B)', price: 20 },
    { category: '冒険者技能用アイテム', name: 'マテリアルカード(A)', price: 200 },
    { category: '冒険者技能用アイテム', name: 'マテリアルカード(S)', price: 2000 },
    { category: '冒険者技能用アイテム', name: 'マテリアルカード(SS)', price: 20000 },

    // --- 装飾品 (基本/ET準拠) ---
    { category: '装飾品', name: 'スマルティエの装飾品', price: 250 },
    { category: '装飾品', name: 'ラル＝ヴェイネの宝飾品', price: 500 },

    { category: '装飾品', name: '集中の鉢巻き(名誉10)', price: 200 },
    { category: '装飾品', name: 'とんがり帽子', price: 3000 },
    { category: '装飾品', name: 'ひらめき眼鏡', price: 4000 },
    { category: '装飾品', name: '決死の鉢巻き', price: 2000 },
    { category: '装飾品', name: 'セーフティメット', price: 2000 },
    { category: '装飾品', name: '悪寒のウィッグ', price: 2500 },
    { category: '装飾品', name: '迅雷の髪飾り', price: 1500 },
    { category: '装飾品', name: 'ホーリーパロット', price: 4106 },
    { category: '装飾品', name: 'スマルティエのヘッドバンド', price: 6000 },
    { category: '装飾品', name: 'クラウン/ティアラ', price: 10000 },
    { category: '装飾品', name: '聖王の冠', price: 10000 },
    { category: '装飾品', name: '叡智のとんがり帽子', price: 12000 },
    { category: '装飾品', name: 'スカベンジャーの帽子', price: 18000 },
    { category: '装飾品', name: 'カトレアの花冠', price: 20000 },
    { category: '装飾品', name: '女神のヴェール', price: 20000 },
    { category: '装飾品', name: '差配の宝冠', price: 25000 },
    { category: '装飾品', name: 'ラル＝ヴェイネの羽冠', price: 60000 },

    { category: '装飾品', name: 'アイソアーマスク', price: 2000 },
    { category: '装飾品', name: '赤の眼鏡', price: 2000 },
    { category: '装飾品', name: '味覚のピアス', price: 2000 },
    { category: '装飾品', name: 'ナイトゴークル', price: 3000 },
    { category: '装飾品', name: 'ひらめき眼鏡', price: 4000 },
    { category: '装飾品', name: '不敵の仮面', price: 4520 },
    { category: '装飾品', name: '水飲み鳥のマスク', price: 6000 },
    { category: '装飾品', name: '逃さずの眼鏡', price: 7200 },
    { category: '装飾品', name: '狩人の目', price: 9600 },
    { category: '装飾品', name: 'スマルティエのアイガード', price: 12000 },
    { category: '装飾品', name: 'ラル＝ヴェイネの観察鏡', price: 20000 },

    { category: '装飾品', name: '恋人の受音器', price: 100 },
    { category: '装飾品', name: 'レコーディングピアス', price: 1600 },
    { category: '装飾品', name: 'ゴールデン耳栓', price: 2000 },
    { category: '装飾品', name: 'スマルティエの聴音器', price: 2200 },
    { category: '装飾品', name: 'スポッタードール', price: 2800 },
    { category: '装飾品', name: '通話のピアスホルダー(一言語)', price: 3000 },
    { category: '装飾品', name: '蝙蝠の耳飾り', price: 3500 },
    { category: '装飾品', name: '通辞の耳飾り', price: 5000 },
    { category: '装飾品', name: '石人の耳飾り', price: 6640 },
    { category: '装飾品', name: 'ラル＝ヴェイネの金鎖', price: 7500 },
    { category: '装飾品', name: '死人の耳飾り', price: 10640 },
    { category: '装飾品', name: '相互フォローの耳飾り', price: 12000 },
    { category: '装飾品', name: '通話のピアス', price: 20000 },

    { category: '装飾品', name: '甘え鳴きのチョーカー', price: 1500 },
    { category: '装飾品', name: '素敵に変身リボン', price: 1700 },
    { category: '装飾品', name: '幸運のお守り', price: 2000 },
    { category: '装飾品', name: '水晶の耳飾り', price: 3000 },
    { category: '装飾品', name: '光のアミュレット', price: 3000 },
    { category: '装飾品', name: 'マイナーカースレベリオン', price: 4500 },
    { category: '装飾品', name: '熊の爪', price: 6000 },
    { category: '装飾品', name: 'スマルティエの銀鈴', price: 7500 },
    { category: '装飾品', name: '奇跡の首飾り', price: 10000 },
    { category: '装飾品', name: 'ラル＝ヴェイネの魔宝帯', price: 25000 },
    { category: '装飾品', name: 'カースレベリオン', price: 40000 },

    { category: '装飾品', name: 'サバイバルコート', price: 180 },
    { category: '装飾品', name: 'ウェポンホルダー', price: 1000 },
    { category: '装飾品', name: '野伏のマント化(名誉20)', price: 1000 },
    { category: '装飾品', name: '綺羅星のインバネス', price: 3000 },
    { category: '装飾品', name: 'リトルウィング', price: 3000 },
    { category: '装飾品', name: 'サーマルマント', price: 3000 },
    { category: '装飾品', name: 'ウェポンホルダー改', price: 5000 },
    { category: '装飾品', name: 'ペンギンマント', price: 6000 },
    { category: '装飾品', name: 'セービングマント', price: 8000 },
    { category: '装飾品', name: 'インテリアニマルサック', price: 9000 },
    { category: '装飾品', name: '英雄のマント', price: 10000 },
    { category: '装飾品', name: 'ラル＝ヴェイネの肩掛け', price: 15000 },
    { category: '装飾品', name: 'スマルティエの風切り布', price: 25000 },

    { category: '装飾品', name: 'スマルティエの増強の指輪', price: 400 },
    { category: '装飾品', name: '能力増強の指輪', price: 500 },
    { category: '装飾品', name: '平準の指輪', price: 500 },
    { category: '装飾品', name: 'スマルティエの増強の腕輪', price: 900 },
    { category: '装飾品', name: '能力増強の腕輪', price: 1000 },
    { category: '装飾品', name: '雫のブレスレット', price: 5000 },
    { category: '装飾品', name: '信念のリング', price: 5000 },
    { category: '装飾品', name: 'レインボーリング', price: 5000 },
    { category: '装飾品', name: '大きな手袋', price: 8000 },
    { category: '装飾品', name: 'マナリング', price: 10000 },
    { category: '装飾品', name: '操りの腕輪', price: 24800 },
    { category: '装飾品', name: '正しき信念のリング', price: 30000 },
    { category: '装飾品', name: 'ラル＝ヴェイネのマナリング', price: 40000 },


    { category: '装飾品', name: '多機能化(名誉20)', price: 1000 },
    { category: '装飾品', name: 'チキンベルト', price: 1500 },
    { category: '装飾品', name: '日輪のバックル', price: 1500 },
    { category: '装飾品', name: '無敵に変身ベルト', price: 1500 },
    { category: '装飾品', name: 'ミサイルトラッパー', price: 500 },
    { category: '装飾品', name: 'ブラックベルト', price: 3000 },
    { category: '装飾品', name: 'ブレードスカート', price: 4580 },
    { category: '装飾品', name: '覇者のバックル', price: 5000 },
    { category: '装飾品', name: 'スマルティエの武道帯', price: 6000 },
    { category: '装飾品', name: '不撓のバックル', price: 12300 },
    { category: '装飾品', name: '真・ブラックベルト(名誉80)', price: 20000 },
    { category: '装飾品', name: 'ラル＝ヴェイネの練魔帯', price: 26000 },
    { category: '装飾品', name: 'グリーンベルト', price: 35000 },

    { category: '装飾品', name: '立ち寝のレギンス', price: 500 },
    { category: '装飾品', name: '韋駄天ブーツ', price: 2000 },
    { category: '装飾品', name: '水蜘蛛のサンダル', price: 2000 },
    { category: '装飾品', name: '見守りのサンダル', price: 2000 },
    { category: '装飾品', name: '土踏まず', price: 2800 },
    { category: '装飾品', name: '黄金の拍車', price: 3000 },
    { category: '装飾品', name: 'スマルティエのアンクルスリーブ', price: 4500 },
    { category: '装飾品', name: 'サイレントシューズ', price: 5000 },
    { category: '装飾品', name: '幸運の羽根', price: 10080 },
    { category: '装飾品', name: '軽業のブーツ', price: 11600 },
    { category: '装飾品', name: '怪盗の足', price: 20000 },
    { category: '装飾品', name: 'ラル＝ヴェイネのダウンルッカー', price: 28000 },

    { category: '装飾品', name: 'ディスプレイサー・ガジェット', price: 5000 },
    { category: '装飾品', name: '勇者の証', price: 10000 },

    // --- 乗り物・その他・名誉 ---
    { category: 'その他', name: 'アビスシャード', price: 200 }, // よく価値換算で使われるため
    { category: 'その他', name: 'オーダーメイド(B)', price: 300 },
    { category: 'その他', name: 'オーダーメイド(A)', price: 1000 },
    { category: 'その他', name: 'オーダーメイド(S)', price: 3000 },
    { category: 'その他', name: 'オーダーメイド(SS)', price: 6000 },
    { category: 'その他', name: '銀製武器(B)', price: 1000 },
    { category: 'その他', name: '銀製武器(A)', price: 2000 },
    { category: 'その他', name: '銀製武器(S)', price: 4000 },
    { category: 'その他', name: '銀製武器(SS)', price: 6000 },
    { category: 'その他', name: '魔法の武器＋１(B)', price: 5000 },
    { category: 'その他', name: '魔法の武器＋１(A)', price: 10000 },
    { category: 'その他', name: '魔法の武器＋１(S)', price: 20000 },
    { category: 'その他', name: '妖精の武器(B)', price: 1500 },
    { category: 'その他', name: '妖精の武器(A)', price: 3000 },
    { category: 'その他', name: '妖精の武器(S)', price: 6000 },
    { category: 'その他', name: '妖精の武器(SS)', price: 9000 },
    { category: 'その他', name: 'イグニタイト加工(B)', price: 5000 },
    { category: 'その他', name: 'イグニタイト加工(A)', price: 10000 },
    { category: 'その他', name: 'イグニタイト加工(S)', price: 20000 },
    { category: 'その他', name: 'イグニタイト加工(SS)', price: 40000 },
    { category: 'その他', name: 'アビス強化(B)', price: 2000 },
    { category: 'その他', name: 'アビス強化(A)', price: 4000 },
    { category: 'その他', name: 'アビス強化(S)', price: 8000 },
    { category: 'その他', name: 'アビス強化(SS)', price: 12000 },

    { category: 'その他', name: '魔法の鎧＋１(B)', price: 5000 },
    { category: 'その他', name: '魔法の鎧＋１(A)', price: 10000 },
    { category: 'その他', name: '魔法の鎧＋１(S)', price: 20000 },
    { category: 'その他', name: '防弾加工の鎧(B)', price: 1500 },
    { category: 'その他', name: '防弾加工の鎧(A)', price: 3000 },
    { category: 'その他', name: '防弾加工の鎧(S)', price: 6000 },
    { category: 'その他', name: '防弾加工の鎧(SS)', price: 9000 },
    { category: 'その他', name: 'マナタイトの追加装甲(B)', price: 5000 },
    { category: 'その他', name: 'マナタイトの追加装甲(A)', price: 10000 },
    { category: 'その他', name: 'マナタイトの追加装甲(S)', price: 20000 },
    { category: 'その他', name: 'マナタイトの追加装甲(SS)', price: 30000 },

];

// ==========================================
// 1. データと状態の初期化 (App State)
// ==========================================

// swItemsから「カテゴリ名」だけを抽出し、重複のないカテゴリ一覧(配列)を作成します。
// 例: ['すべて', '一般装備品', '薬品', '武具', ...]
// [学習用メモ]
// - map(): 配列の中身を1つずつ加工して新しい配列を作るメソッドです。ここでは `{ category: '一般装備品', name... }` から `'一般装備品'` だけを取り出しています。
// - new Set(): 配列の中の「重複」を取り除いてくれる便利なオブジェクトです。(同じカテゴリ名が1つにまとまります)
// - [...Set]: スプレッド構文といって、Setの中身を展開し、先頭に 'すべて' を付け足した新しい配列を作っています。
const categories = ['すべて', ...new Set(swItems.map(item => item.category))];

// 現在選択されているカテゴリを記憶するための変数です。初期状態は「すべて」です。
// [学習用メモ] let は後から中身を書き換えられる変数を作るキーワードです。
let currentCategory = 'すべて';

// ユーザーがクリックして追加した「購入予定のアイテム」を格納しておく配列です。
let addedItems = [];

// ==========================================
// 2. DOM要素の取得 (DOM Elements)
// HTML側で定義したidやclassを持つ要素を変数に格納し、JSから操作しやすくします。
// [学習用メモ] 
// - document.getElementById('id名'): HTMLの特定の id を持つ要素を1つだけ探し出してきます。
// - document.querySelectorAll('.class名'): 特定の class を持つ要素を「全て」探し出してリスト(NodeList)にします。
// - ここで取得したものは let ではなく const (上書き不可の定数) に入れています。要素そのものを別の要素に入れ替えることはないためです。
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
// [学習用メモ] 処理をこのように関数(function)にまとめておくと、何をしているかが一目で分かりやすくなります。
// ==========================================
function init() {
    populateCategoryTabs(); // カテゴリタブ(ボタン)をHTMLに生成します
    filterAndRenderGrid();  // 初期状態(全件表示)でアイテムグリッドを生成します
    setupEventListeners();  // クリックや入力などのイベントリスナー(監視役)を登録します
    updateUI();             // カートの中身や合計金額を計算し、画面に反映させます
}

// ==========================================
// 4. 表示処理 (Rendering Functions)
// ==========================================

// カテゴリのタブボタンを動的に生成する関数
function populateCategoryTabs() {
    // [学習用メモ] innerHTML = '' は、その要素の中にあるHTMLをすべて消去する一番簡単な方法です。
    categoryTabsContainer.innerHTML = '';

    // カテゴリ配列を１つずつ取り出し、ボタン化していきます
    // [学習用メモ] forEach は配列の要素数だけループを回すメソッドです。「cat」には各カテゴリ名が順番に入ってきます。
    categories.forEach(cat => {
        const btn = document.createElement('button'); // <button>タグを新しく作ります
        btn.type = 'button';

        // 選択中のカテゴリには 'active' というクラスを付けて色を変えます
        // [学習用メモ] 三項演算子 (`条件 ? 真の時 : 偽の時`) を使って、現在のカテゴリと一致したら active を足しています。
        btn.className = `category-tab-btn ${cat === currentCategory ? 'active' : ''}`;
        btn.textContent = cat; // ボタンに表示する文字を設定します

        // タブがクリックされた時の処理 (イベントハンドラ)
        btn.onclick = () => {
            // 全部のタブから 'active' を外し、クリックされたタブだけに 'active' を付け直す
            document.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 現在のカテゴリを更新して、グリッドを再描画します
            currentCategory = cat;
            filterAndRenderGrid();
        };
        // 作ったボタンを、画面上(categoryTabsContainerの中)に追加します
        categoryTabsContainer.appendChild(btn);
    });
}

// 検索窓の文字と選択中のカテゴリから、表示するアイテムを絞り込む関数
// [学習用メモ] query = '' は「引数として何も渡されなかったらデフォルトで空文字を使う」という記法です。
function filterAndRenderGrid(query = '') {
    let filtered = swItems; // まず全アイテムをベースにします

    // 「すべて」以外のカテゴリが選ばれている場合、そのカテゴリのアイテムだけを残します
    if (currentCategory !== 'すべて') {
        // [学習用メモ] filter() は「条件が true になったものだけを残す」配列メソッドです。
        filtered = filtered.filter(item => item.category === currentCategory);
    }

    // 検索窓に文字が入っている場合、その文字が含まれるアイテムだけを残します(小文字・大文字区別なし)
    if (query) {
        // [学習用メモ]
        // .toLowerCase() : 英字の大文字と小文字を区別せず検索できるよう、全て小文字に変換して比較します。
        // .includes() : 指定した文字が含まれていれば true を返します。
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
        // [学習用メモ] バッククォート(`)で囲むと、${変数名} で変数の値を直接文字列の中に埋め込めます(テンプレートリテラル)。
        btn.innerHTML = `<span class="name">${item.name}</span><span class="price">${item.price}G</span>`;

        // クリックしたらカート(リスト)に数量1でアイテムを追加します
        btn.onclick = () => addItemToList(item.name, item.price, 1);
        presetGrid.appendChild(btn); // つくったボタンを画面に表示
    });
}

// ==========================================
// 5. イベントの監視・登録 (Event Listeners)
// ユーザーが何らかの操作(文字入力、クリックなど)をした時の動きを定義します
// ==========================================
function setupEventListeners() {
    // 【プリセット / 手動入力】タブの切り替え機能
    tabBtns.forEach(btn => {
        // [学習用メモ] addEventListener('イベント名', 実行する関数) は、対象の要素が〇〇された時に発火する処理を登録します。
        btn.addEventListener('click', () => {
            // タブ自体の見た目(active)を全タブから外し、クリックされたものだけにつける
            tabBtns.forEach(b => b.classList.remove('active'));
            // [学習用メモ] classList.remove / add は、HTML要素のクラスを付け外しする便利な機能です。
            document.querySelectorAll('.item-form').forEach(f => f.classList.remove('active-form'));

            btn.classList.add('active');

            // data-target属性に指定された対象のフォーム(プリセットか、手動入力か)のidを取得し、画面に表示する
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active-form');
        });
    });

    // 検索窓に文字が入力された瞬間(inputイベント)に発火し、グリッドの絞り込みを実行する
    presetSearch.addEventListener('input', (e) => {
        // [学習用メモ] 引数の e にはイベントの情報が入っています。`e.target.value` で、今入力された文字を取得できます。
        filterAndRenderGrid(e.target.value);
    });

    // 「手動入力」のフォームが送信(submit)された時の処理
    customForm.addEventListener('submit', (e) => {
        // [学習用メモ] preventDefault() は、ブラウザが元々持っている「フォームを送信するとページを更新する」という動作をキャンセルします。これをしないとページがリロードされてしまいます。
        e.preventDefault();

        // フォームに入力された値を取得。数字を入れる部分は parseInt() で数値型に変換します。
        const name = document.getElementById('custom-name').value.trim(); // trim() は前後の空白を削除
        const price = parseInt(document.getElementById('custom-price').value) || 0; // || 0 は「もし空なら0にする」という意味
        const qty = parseInt(document.getElementById('custom-qty').value) || 1;

        if (name === '') return; // 名前が空っぽなら、ここで処理を終了して抜ける(return)

        // アイテムを自作リストに追加
        addItemToList(name, price, qty);

        // 次の入力のために、インプットボックスの中身を空に戻しておく
        document.getElementById('custom-name').value = '';
        document.getElementById('custom-price').value = '';
        document.getElementById('custom-qty').value = 1;
    });

    // カートの全クリアボタンが押された時
    clearListBtn.addEventListener('click', () => {
        addedItems = []; // 配列を空にして...
        updateUI(); // 画面を更新する
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

// アイテムをリストの配列に追加(または加算)する関数
function addItemToList(name, price, qtyAdd) {
    // 既にリストの中に、全く同じ名前かつ同じ値段のアイテムが存在するかチェック
    // [学習用メモ] find() は条件に一致するデータを配列から一つだけ見つけて取り出します。見つからなければ undefined になります。
    const existing = addedItems.find(item => item.name === name && item.price === price);

    if (existing) {
        // すでに全く同じアイテムがリストに存在する場合：もう1個追加されたとみなし、個数をプラスする
        // += は `existing.qty = existing.qty + qtyAdd` と同じ意味の短縮形です。
        existing.qty += qtyAdd;
    } else {
        // 存在しない場合：新しくユニークなIDを作って、リスト(配列)の末尾に追加する
        // [学習用メモ] Date.now() と ランダム文字列を繋げて、他のアイテムと被らない一意のIDを作っています。
        const newId = Date.now().toString() + Math.random().toString(36).substr(2, 5);
        // push() は配列の最後に新しいデータを追加します。
        addedItems.push({ id: newId, name, price, qty: qtyAdd });
    }
    updateUI(); // 画面を最新状態に更新
}

// リスト内で直接個数を変更したときに呼ばれる関数(HTML上のonchangeで呼び出されるため window に登録します)
window.updateItemQty = function (id, newQty) {
    const qty = parseInt(newQty, 10); // 入力されたのは文字形式なので、10進数の数値に変換
    const item = addedItems.find(i => i.id === id); // 対象のアイテムを探す

    if (item && qty > 0) {
        // 対象が見つかり、なおかつ0より大きければ、個数を上書きする
        item.qty = qty;
        updateUI();
    } else if (item && qty <= 0) {
        // 0以下になった場合は、リストから削除してしまう
        removeItem(id);
    }
};

// アイテムをリストから削除する関数
function removeItem(id) {
    // 引数で受け取ったID「以外」のアイテムだけを残した新しいリストを作る(＝対象のIDを削除するのと同じ)
    addedItems = addedItems.filter(item => item.id !== id);
    updateUI();
}

// 最終的な「ゆとしーと形式のテキスト出力」を生成する関数
function generateOutputText() {
    if (addedItems.length === 0) return '';

    // items配列のすべてについて加工し、最後に join('\n') で改行をつなげて1つの長い文字列にします
    // [学習用メモ] `map()` と `join()` の組み合わせは、配列データから画面表示用のテキストを作るときによく使われます。
    return addedItems.map(item => {
        // フォーマット: 【対象アイテムの名前】::-単価*個数

        // 品物が2個以上の場合は分かりやすく【保存食(2個)】のような表記で生成します
        // (1個の時はそのままの名前を使う)
        const nameFormatted = item.qty > 1 ? `${item.name}(${item.qty}個)` : item.name;

        return `【${nameFormatted}】::-${item.price}*${item.qty}`;
    }).join('\n');
}

// データ(addedItems)の状態をもとに、HTML画面(カートやテキストエリア)を描画しなおす関数
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

    // 2. addedItems配列を一つずつ回し、HTMLのリスト要素(<li>)を作って追加していく
    addedItems.forEach(item => {
        const cost = item.price * item.qty; // (単価 × 個数)
        totalCost += cost;

        const li = document.createElement('li');
        // バッククォート(`)を使って、HTMLを直感的に当てはめる(テンプレートリテラル)
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

    // 4. テキストエリア(最終出力)を文字列に変換して反映する
    outputTextarea.value = generateOutputText();
}

// removeItem関数内でHTML側(`onclick="removeItem(...)"`)から直接呼べるように
// windowオブジェクト(グローバル領域)に登録してあげます。
window.removeItem = removeItem;

// ==========================================
// 7. ユーティリティ (Utilities)
// ==========================================

// コピー完了を知らせる小さな通知(トースト)を表示するアニメーション関数
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
