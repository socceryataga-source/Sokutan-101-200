const QUIZ_META = {
  "min": 101,
  "max": 200,
  "title": "超頻出語句クイズ（No.101-200）",
  "label": "adult 〜 device"
};

const WORD_DATA = [
  {
    "serial": 101,
    "wordNo": "226",
    "word": "adult",
    "answer": "大人",
    "options": [
      "大人",
      "住民",
      "若者",
      "子ども"
    ],
    "example": "People become legal adults in Japan when they turn 18.",
    "translation": "日本では18歳になると法律上の成人になる。"
  },
  {
    "serial": 102,
    "wordNo": "230",
    "word": "clear",
    "answer": "明確な",
    "options": [
      "明確な",
      "公式の",
      "必要な",
      "正しい"
    ],
    "example": "He made it clear that he did not agree with the decision.",
    "translation": "彼はその決定に賛成していないことを明確にした。"
  },
  {
    "serial": 103,
    "wordNo": "232",
    "word": "believe",
    "answer": "信じる",
    "options": [
      "行う",
      "信じる",
      "守る",
      "比較する"
    ],
    "example": "I believed everything the salesperson said.",
    "translation": "私はその販売員が言うことすべてを信じた。"
  },
  {
    "serial": 104,
    "wordNo": "234",
    "word": "credit",
    "answer": "クレジット",
    "options": [
      "価格",
      "料金",
      "割合",
      "クレジット"
    ],
    "example": "You are too young to have a credit card.",
    "translation": "君はクレジットカードを持つには若すぎる。"
  },
  {
    "serial": 105,
    "wordNo": "236",
    "word": "common",
    "answer": "共通の",
    "options": [
      "普通の",
      "共通の",
      "公式の",
      "典型的な"
    ],
    "example": "We have a lot in common.",
    "translation": "私たちには共通点がたくさんある。"
  },
  {
    "serial": 106,
    "wordNo": "240",
    "word": "once",
    "answer": "一度",
    "options": [
      "特に",
      "以前",
      "一度",
      "おそらく"
    ],
    "example": "I have been to Osaka once or twice.",
    "translation": "大阪には1度か2度行ったことがある。"
  },
  {
    "serial": 107,
    "wordNo": "242",
    "word": "rest",
    "answer": "残り",
    "options": [
      "残り",
      "期間",
      "部分",
      "平均"
    ],
    "example": "I finished my work and took the rest of the week off.",
    "translation": "私は仕事を終え，その週の残りを休暇とした。"
  },
  {
    "serial": 108,
    "wordNo": "245",
    "word": "population",
    "answer": "人口",
    "options": [
      "平均",
      "人口",
      "住民",
      "割合"
    ],
    "example": "The population of Japan is falling.",
    "translation": "日本の人口は減少している。"
  },
  {
    "serial": 109,
    "wordNo": "247",
    "word": "organize",
    "answer": "準備する",
    "options": [
      "行う",
      "比較する",
      "準備する",
      "実施する"
    ],
    "example": "Our group is in charge of organizing the school festival.",
    "translation": "私たちのグループは学園祭の準備を担当している。"
  },
  {
    "serial": 110,
    "wordNo": "249",
    "word": "vegetable",
    "answer": "野菜",
    "options": [
      "作物",
      "野菜",
      "果物",
      "植物"
    ],
    "example": "Vegetables are good for us as they contain vitamins and fiber.",
    "translation": "野菜はビタミンや食物繊維を含むので，私たちにとってよいものだ。"
  },
  {
    "serial": 111,
    "wordNo": "250",
    "word": "increase",
    "answer": "増加",
    "options": [
      "増加",
      "割合",
      "平均",
      "低下"
    ],
    "example": "The figure shows a large increase in the number of traffic accidents.",
    "translation": "その図は交通事故の大幅な増加を示している。"
  },
  {
    "serial": 112,
    "wordNo": "251",
    "word": "probably",
    "answer": "おそらく",
    "options": [
      "おそらく",
      "一般的に",
      "特に",
      "非常に"
    ],
    "example": "He will probably study science at university.",
    "translation": "彼はおそらく大学で科学を学ぶだろう。"
  },
  {
    "serial": 113,
    "wordNo": "255",
    "word": "method",
    "answer": "方法",
    "options": [
      "手法",
      "手段",
      "制度",
      "方法"
    ],
    "example": "The best method of losing weight is to eat less and exercise more.",
    "translation": "体重を減らす最善の方法は，食べる量を減らし，もっと運動をすることである。"
  },
  {
    "serial": 114,
    "wordNo": "256",
    "word": "protect",
    "answer": "守る",
    "options": [
      "支える",
      "守る",
      "防ぐ",
      "助ける"
    ],
    "example": "We used a special cream to protect our skin from the sun.",
    "translation": "私たちは日光から肌を守るために特別なクリームを使った。"
  },
  {
    "serial": 115,
    "wordNo": "259",
    "word": "generally",
    "answer": "一般的に",
    "options": [
      "特に",
      "非常に",
      "一般的に",
      "おそらく"
    ],
    "example": "Generally, Japanese people are polite and friendly to others.",
    "translation": "一般的に，日本人は礼儀正しく他人に親切だ。"
  },
  {
    "serial": 116,
    "wordNo": "260",
    "word": "safe",
    "answer": "安全な",
    "options": [
      "危険な",
      "正しい",
      "安全な",
      "確実な"
    ],
    "example": "Most people feel safe when they walk around Tokyo.",
    "translation": "東京を歩き回っていると，ほとんどの人が安全だと感じる。"
  },
  {
    "serial": 117,
    "wordNo": "261",
    "word": "percent",
    "answer": "パーセント",
    "options": [
      "価格",
      "平均",
      "パーセント",
      "割合"
    ],
    "example": "The store is offering a 10 percent discount on all items.",
    "translation": "この店では全品10パーセントの割引を提供している。"
  },
  {
    "serial": 118,
    "wordNo": "262",
    "word": "government",
    "answer": "政府",
    "options": [
      "政権",
      "政府",
      "制度",
      "国家"
    ],
    "example": "The government has decided to raise the sales tax again.",
    "translation": "政府は再び消費税の引き上げを決定した。"
  },
  {
    "serial": 119,
    "wordNo": "266",
    "word": "official",
    "answer": "公式の",
    "options": [
      "一般の",
      "正式の",
      "公式の",
      "共通の"
    ],
    "example": "The official language in this country is English.",
    "translation": "この国の公用語は英語だ。"
  },
  {
    "serial": 120,
    "wordNo": "269",
    "word": "farm",
    "answer": "農場",
    "options": [
      "森林",
      "農園",
      "農場",
      "牧場"
    ],
    "example": "We visited a stock farm in Chiba and ate some delicious ice cream.",
    "translation": "私たちは千葉の牧場を訪れ，おいしいアイスクリームを食べた。"
  },
  {
    "serial": 121,
    "wordNo": "274",
    "word": "addition",
    "answer": "その上",
    "options": [
      "その上",
      "したがって",
      "〜かどうか",
      "しかし"
    ],
    "example": "In addition, I want to travel abroad in the future.",
    "translation": "それに，将来は海外旅行もしたい。"
  },
  {
    "serial": 122,
    "wordNo": "275",
    "word": "lot",
    "answer": "たくさん",
    "options": [
      "たくさん",
      "多数",
      "平均",
      "少し"
    ],
    "example": "I spent a lot of money last weekend.",
    "translation": "私は先週末にたくさんの金を使った。"
  },
  {
    "serial": 123,
    "wordNo": "279",
    "word": "compare",
    "answer": "比較する",
    "options": [
      "従う",
      "見積もる",
      "対比する",
      "比較する"
    ],
    "example": "Compared with Tokyo, Kyoto is much quieter.",
    "translation": "東京に比べて，京都はとても静かです。"
  },
  {
    "serial": 124,
    "wordNo": "282",
    "word": "average",
    "answer": "平均",
    "options": [
      "合計",
      "平均",
      "水準",
      "割合"
    ],
    "example": "The average height of Japanese men has increased in recent years.",
    "translation": "日本人男性の平均身長は近年伸びている。"
  },
  {
    "serial": 125,
    "wordNo": "283",
    "word": "environmental",
    "answer": "環境の",
    "options": [
      "環境の",
      "明確な",
      "身体の",
      "精神の"
    ],
    "example": "The accident caused a large amount of environmental damage.",
    "translation": "事故は大量の環境被害を引き起こした。"
  },
  {
    "serial": 126,
    "wordNo": "285",
    "word": "cost",
    "answer": "かかる",
    "options": [
      "信じる",
      "要する",
      "かかる",
      "支払う"
    ],
    "example": "That computer costs over 200,000 yen.",
    "translation": "そのコンピューターは20万円を超える金額がかかる。"
  },
  {
    "serial": 127,
    "wordNo": "287",
    "word": "consider",
    "answer": "よく考える",
    "options": [
      "検討する",
      "想像する",
      "判断する",
      "よく考える"
    ],
    "example": "You need to consider carefully what you want to do in the future.",
    "translation": "将来何をしたいのか慎重によく考える必要がある。"
  },
  {
    "serial": 128,
    "wordNo": "288",
    "word": "suppose",
    "answer": "ことになっている",
    "options": [
      "ことになっている",
      "禁止だ",
      "自由だ",
      "予定だ"
    ],
    "example": "We are supposed to hold a meeting at ten.",
    "translation": "私たちは10時に会議を開くことになっている。"
  },
  {
    "serial": 129,
    "wordNo": "289",
    "word": "pollution",
    "answer": "汚染",
    "options": [
      "ごみ",
      "公害",
      "汚染",
      "排気"
    ],
    "example": "It is clear that air pollution is harmful to our health.",
    "translation": "大気汚染が我々の健康に有害であることは明白だ。"
  },
  {
    "serial": 130,
    "wordNo": "290",
    "word": "agree",
    "answer": "賛成する",
    "options": [
      "反対する",
      "賛成する",
      "同意する",
      "信じる"
    ],
    "example": "I agree with you that we should buy a new car.",
    "translation": "新しい車を買うべきだという君の意見には賛成だ。"
  },
  {
    "serial": 131,
    "wordNo": "292",
    "word": "price",
    "answer": "価格",
    "options": [
      "価値",
      "価格",
      "費用",
      "料金"
    ],
    "example": "Oil prices have dropped dramatically this year.",
    "translation": "石油価格は今年，急激に下落した。"
  },
  {
    "serial": 132,
    "wordNo": "293",
    "word": "pay",
    "answer": "支払う",
    "options": [
      "稼ぐ",
      "払う",
      "支払う",
      "借りる"
    ],
    "example": "I will pay for dinner as it is your birthday.",
    "translation": "君の誕生日だから僕が夕食のお金を払うよ。"
  },
  {
    "serial": 133,
    "wordNo": "298",
    "word": "realize",
    "answer": "気づく",
    "options": [
      "理解する",
      "想像する",
      "気づく",
      "信じる"
    ],
    "example": "I realized that I had made a mistake and felt very embarrassed.",
    "translation": "私は間違えたことに気づき，とても恥ずかしくなった。"
  },
  {
    "serial": 134,
    "wordNo": "299",
    "word": "physical",
    "answer": "身体の",
    "options": [
      "身体の",
      "精神の",
      "自然の",
      "明確な"
    ],
    "example": "I enjoy physical activity rather than sitting and reading.",
    "translation": "座って本を読むよりも，身体活動〔体を動かすこと〕が好きだ。"
  },
  {
    "serial": 135,
    "wordNo": "304",
    "word": "hurt",
    "answer": "傷つける",
    "options": [
      "傷つける",
      "打つ",
      "害する",
      "痛める"
    ],
    "example": "I hurt her feelings when I said I wouldn't go for coffee with her.",
    "translation": "彼女とコーヒーを飲みに行かないと言った時，彼女の気分を害してしまった。"
  },
  {
    "serial": 136,
    "wordNo": "307",
    "word": "bite",
    "answer": "かむ",
    "options": [
      "かむ",
      "食べる",
      "なめる",
      "信じる"
    ],
    "example": "The dog has bitten two children.",
    "translation": "その犬は２人の子供にかみついた。"
  },
  {
    "serial": 137,
    "wordNo": "310",
    "word": "order",
    "answer": "注文する",
    "options": [
      "注文する",
      "予約する",
      "信じる",
      "命令する"
    ],
    "example": "We ordered our school books online.",
    "translation": "私たちは学校で使う本をオンラインで注文した。"
  },
  {
    "serial": 138,
    "wordNo": "312",
    "word": "especially",
    "answer": "特に",
    "options": [
      "特に",
      "完全に",
      "一度",
      "かなり"
    ],
    "example": "Reading is especially important if you want to improve your vocabulary.",
    "translation": "語彙を増やしたいなら，読書は特に重要だ。"
  },
  {
    "serial": 139,
    "wordNo": "314",
    "word": "space",
    "answer": "空間",
    "options": [
      "地域",
      "場所",
      "余地",
      "空間"
    ],
    "example": "I wanted a bigger house with a lot more space.",
    "translation": "私はもっと多くのスペースがある，もっと大きな家が欲しかった。"
  },
  {
    "serial": 140,
    "wordNo": "316",
    "word": "release",
    "answer": "放す",
    "options": [
      "保護する",
      "隠す",
      "信じる",
      "放す"
    ],
    "example": "After the bird got better, we released it in the park.",
    "translation": "鳥が元気になったあと，私たちはそれを公園に放した。"
  },
  {
    "serial": 141,
    "wordNo": "318",
    "word": "quit",
    "answer": "やめる",
    "options": [
      "信じる",
      "やめる",
      "続ける",
      "始める"
    ],
    "example": "After 20 years my father finally quit smoking.",
    "translation": "20年後，父はついにタバコをやめた。"
  },
  {
    "serial": 142,
    "wordNo": "322",
    "word": "energy",
    "answer": "エネルギー",
    "options": [
      "資源",
      "電力",
      "エネルギー",
      "燃料"
    ],
    "example": "Most of our energy comes from burning fossil fuels.",
    "translation": "ほとんどのエネルギーは化石燃料を燃やすことで生まれる。"
  },
  {
    "serial": 143,
    "wordNo": "323",
    "word": "electricity",
    "answer": "電気",
    "options": [
      "燃料",
      "熱",
      "電気",
      "電力"
    ],
    "example": "My car runs on electricity.",
    "translation": "私の車は電気で動いている。"
  },
  {
    "serial": 144,
    "wordNo": "324",
    "word": "mental",
    "answer": "精神の",
    "options": [
      "感情の",
      "身体の",
      "精神の",
      "明確な"
    ],
    "example": "He quit his job as the stress was affecting his mental health.",
    "translation": "彼はストレスが精神の健康に影響を与えていたので仕事を辞めた。"
  },
  {
    "serial": 145,
    "wordNo": "326",
    "word": "necessary",
    "answer": "必要な",
    "options": [
      "大切な",
      "必要な",
      "適切な",
      "明確な"
    ],
    "example": "It is necessary for you to complete this form.",
    "translation": "この用紙に記入していただく必要があります。"
  },
  {
    "serial": 146,
    "wordNo": "328",
    "word": "doubt",
    "answer": "疑う",
    "options": [
      "確認する",
      "準備する",
      "信じる",
      "疑う"
    ],
    "example": "I doubt I will have enough money to go to the concert.",
    "translation": "コンサートに行くのに十分なお金はないと思う。"
  },
  {
    "serial": 147,
    "wordNo": "329",
    "word": "whether",
    "answer": "〜かどうか",
    "options": [
      "いつか",
      "その間",
      "その上",
      "〜かどうか"
    ],
    "example": "I don’t know whether he will come today.",
    "translation": "彼が今日来るかどうかわからない。"
  },
  {
    "serial": 148,
    "wordNo": "330",
    "word": "concern",
    "answer": "心配する",
    "options": [
      "心配する",
      "関心",
      "保護する",
      "信じる"
    ],
    "example": "I am concerned about my father as he is sick.",
    "translation": "父が病気なので心配している。"
  },
  {
    "serial": 149,
    "wordNo": "332",
    "word": "increasingly",
    "answer": "ますます",
    "options": [
      "一般的に",
      "ますます",
      "一度",
      "次第に"
    ],
    "example": "Tablet computers are becoming increasingly common in classrooms.",
    "translation": "タブレットコンピューターは教室でますます一般的になってきている。"
  },
  {
    "serial": 150,
    "wordNo": "333",
    "word": "spend",
    "answer": "費やす",
    "options": [
      "信じる",
      "費やす",
      "節約する",
      "集める"
    ],
    "example": "I spent over 10,000 yen today.",
    "translation": "私は今日10,000円を超える金額を費やした。"
  },
  {
    "serial": 151,
    "wordNo": "337",
    "word": "correct",
    "answer": "正しい",
    "options": [
      "適切な",
      "正しい",
      "明確な",
      "有効な"
    ],
    "example": "The teacher gave us the correct answers after we completed the test.",
    "translation": "私たちがテストを終えた後，先生は正解を教えてくれた。"
  },
  {
    "serial": 152,
    "wordNo": "340",
    "word": "earth",
    "answer": "地球",
    "options": [
      "地面",
      "地球",
      "土",
      "惑星"
    ],
    "example": "The earth goes around the sun.",
    "translation": "地球は太陽の周りを回っている。"
  },
  {
    "serial": 153,
    "wordNo": "344",
    "word": "single",
    "answer": "ただ一つの",
    "options": [
      "共通の",
      "ただ一つの",
      "単独の",
      "明確な"
    ],
    "example": "There was not a single mistake in your answer.",
    "translation": "君の答案には1つの誤りもなかったよ。"
  },
  {
    "serial": 154,
    "wordNo": "345",
    "word": "certain",
    "answer": "確信している",
    "options": [
      "確信している",
      "意識している",
      "明確な",
      "疑っている"
    ],
    "example": "I’m certain that our team will win the next game.",
    "translation": "私たちのチームが次の試合で勝つと確信している。"
  },
  {
    "serial": 155,
    "wordNo": "351",
    "word": "species",
    "answer": "種",
    "options": [
      "種",
      "種類",
      "分類",
      "部類"
    ],
    "example": "The WWF produces a list of endangered species.",
    "translation": "WWFは絶滅危惧種のリストを作成している。"
  },
  {
    "serial": 156,
    "wordNo": "353",
    "word": "period",
    "answer": "期間",
    "options": [
      "段階",
      "期間",
      "時期",
      "年月"
    ],
    "example": "I only lived in the apartment for a short period of time.",
    "translation": "私はそのアパートに短期間しか住まなかった。"
  },
  {
    "serial": 157,
    "wordNo": "355",
    "word": "reach",
    "answer": "達する",
    "options": [
      "到達する",
      "含む",
      "達する",
      "保つ"
    ],
    "example": "We finally reached an agreement on how to divide the money.",
    "translation": "私たちはついにそのお金をどう分配するかについて合意に至った。"
  },
  {
    "serial": 158,
    "wordNo": "362",
    "word": "strike",
    "answer": "ひらめく",
    "options": [
      "気づかせる",
      "生じる",
      "ひらめく",
      "打つ"
    ],
    "example": "A good idea suddenly struck me.",
    "translation": "突然あるよい考えが浮かんだ。"
  },
  {
    "serial": 159,
    "wordNo": "365",
    "word": "remain",
    "answer": "残る",
    "options": [
      "続く",
      "終わる",
      "残る",
      "信じる"
    ],
    "example": "My hometown has remained the same since I was a child.",
    "translation": "私の故郷は子供の頃から同じままだ。"
  },
  {
    "serial": 160,
    "wordNo": "371",
    "word": "climate",
    "answer": "気候",
    "options": [
      "風土",
      "天候",
      "環境",
      "気候"
    ],
    "example": "England has a very mild climate.",
    "translation": "イングランドはとても穏やかな気候だ。"
  },
  {
    "serial": 161,
    "wordNo": "373",
    "word": "carry",
    "answer": "運ぶ",
    "options": [
      "信じる",
      "運ぶ",
      "動かす",
      "支える"
    ],
    "example": "I had to carry a heavy bag to school today.",
    "translation": "今日は重いカバンを持って学校に行かなければならなかった。"
  },
  {
    "serial": 162,
    "wordNo": "379",
    "word": "attract",
    "answer": "引きつける",
    "options": [
      "集める",
      "信じる",
      "押し出す",
      "引きつける"
    ],
    "example": "Magnets attract things that are made of iron.",
    "translation": "磁石は鉄でできているものを引き寄せる。"
  },
  {
    "serial": 163,
    "wordNo": "383",
    "word": "available",
    "answer": "利用できる",
    "options": [
      "公開の",
      "利用できる",
      "安全な",
      "明確な"
    ],
    "example": "Tickets for the concert will be available on our website from Monday.",
    "translation": "コンサートのチケットは月曜日から我々のウェブサイトで購入できる。"
  },
  {
    "serial": 164,
    "wordNo": "384",
    "word": "huge",
    "answer": "巨大な",
    "options": [
      "明確な",
      "重要な",
      "珍しい",
      "巨大な"
    ],
    "example": "He invested a huge amount of money in this project.",
    "translation": "彼はこの計画に膨大な額のお金を投資した。"
  },
  {
    "serial": 165,
    "wordNo": "385",
    "word": "forest",
    "answer": "森林",
    "options": [
      "農場",
      "林",
      "山地",
      "森林"
    ],
    "example": "The side of the mountain is covered in thick forest.",
    "translation": "山の側面は深い森に覆われている。"
  },
  {
    "serial": 166,
    "wordNo": "389",
    "word": "feed",
    "answer": "餌をやる",
    "options": [
      "養う",
      "信じる",
      "育てる",
      "餌をやる"
    ],
    "example": "I promised to feed my friend's cat while he is away on holiday.",
    "translation": "友人が休暇でいない間，彼の猫に餌をやる約束をした。"
  },
  {
    "serial": 167,
    "wordNo": "391",
    "word": "rate",
    "answer": "割合",
    "options": [
      "料金",
      "比率",
      "割合",
      "速度"
    ],
    "example": "The marriage rate among young Japanese people is still falling.",
    "translation": "日本の若者を婚姻率は今なお低下している。"
  },
  {
    "serial": 168,
    "wordNo": "392",
    "word": "estimate",
    "answer": "見積もる",
    "options": [
      "信じる",
      "測定する",
      "報告する",
      "見積もる"
    ],
    "example": "The total cost of the project is estimated to be over 5,000 dollars.",
    "translation": "そのプロジェクトの費用の総額は5,000ドル以上と見積もられている。"
  },
  {
    "serial": 169,
    "wordNo": "394",
    "word": "consume",
    "answer": "消費する",
    "options": [
      "生産する",
      "消費する",
      "信じる",
      "保存する"
    ],
    "example": "The average Japanese consumes 34 kilograms of meat in a year.",
    "translation": "日本人は平均して1年間に34kgの肉を消費する。"
  },
  {
    "serial": 170,
    "wordNo": "395",
    "word": "crop",
    "answer": "作物",
    "options": [
      "作物",
      "収穫",
      "穀物",
      "野菜"
    ],
    "example": "The main crop in many parts of Japan is rice.",
    "translation": "日本の多くの地域の主要作物は米である。"
  },
  {
    "serial": 171,
    "wordNo": "397",
    "word": "store",
    "answer": "保管する",
    "options": [
      "集める",
      "保管する",
      "販売する",
      "信じる"
    ],
    "example": "I use this room to store all my winter clothes.",
    "translation": "私は冬物の服をすべて保管するためにこの部屋を使っている。"
  },
  {
    "serial": 172,
    "wordNo": "398",
    "word": "follow",
    "answer": "従う",
    "options": [
      "追う",
      "信じる",
      "従う",
      "支える"
    ],
    "example": "I decided to follow my teacher's advice and study business at university.",
    "translation": "私は先生の助言に従い，大学で経営を学ぶことに決めた。"
  },
  {
    "serial": 173,
    "wordNo": "402",
    "word": "disease",
    "answer": "病気",
    "options": [
      "病気",
      "症状",
      "疾患",
      "けが"
    ],
    "example": "Millions of people suffer from heart disease in the UK.",
    "translation": "イギリスでは何百万人もの人々が心臓病を患っている。"
  },
  {
    "serial": 174,
    "wordNo": "404",
    "word": "nearby",
    "answer": "近くの",
    "options": [
      "遠くの",
      "明確な",
      "周辺の",
      "近くの"
    ],
    "example": "We visited a nearby restaurant for lunch.",
    "translation": "私たちは昼食に近くのレストランを訪れた。"
  },
  {
    "serial": 175,
    "wordNo": "405",
    "word": "state",
    "answer": "状態",
    "options": [
      "様子",
      "条件",
      "状態",
      "状況"
    ],
    "example": "The house is in a terrible state and needs repairing.",
    "translation": "その家はひどい状態で，修理する必要がある。"
  },
  {
    "serial": 176,
    "wordNo": "409",
    "word": "death",
    "answer": "死",
    "options": [
      "病",
      "事故",
      "終わり",
      "死"
    ],
    "example": "There is no death penalty in the UK.",
    "translation": "イギリスには死刑がない。"
  },
  {
    "serial": 177,
    "wordNo": "410",
    "word": "occur",
    "answer": "起こる",
    "options": [
      "起こる",
      "続く",
      "信じる",
      "現れる"
    ],
    "example": "Mistakes often occur when you are tired.",
    "translation": "間違いは疲れているときによく起こる。"
  },
  {
    "serial": 178,
    "wordNo": "413",
    "word": "problem",
    "answer": "問題",
    "options": [
      "欠点",
      "課題",
      "質問",
      "問題"
    ],
    "example": "I have a problem with my computer.",
    "translation": "私のパソコンには問題がある。"
  },
  {
    "serial": 179,
    "wordNo": "414",
    "word": "affect",
    "answer": "影響する",
    "options": [
      "信じる",
      "助ける",
      "影響する",
      "妨げる"
    ],
    "example": "Bad weather really affects the way I feel.",
    "translation": "天気が悪いと本当に私の体調に影響がある。"
  },
  {
    "serial": 180,
    "wordNo": "415",
    "word": "several",
    "answer": "いくつかの",
    "options": [
      "明確な",
      "少数の",
      "いくつかの",
      "多くの"
    ],
    "example": "We spent several days in Kyoto.",
    "translation": "私たちは京都で数日過ごした。"
  },
  {
    "serial": 181,
    "wordNo": "423",
    "word": "burn",
    "answer": "燃やす",
    "options": [
      "切る",
      "溶かす",
      "信じる",
      "燃やす"
    ],
    "example": "Greenhouse gases are released when we burn fossil fuels.",
    "translation": "化石燃料を燃やすと温室効果ガスが放出される。"
  },
  {
    "serial": 182,
    "wordNo": "429",
    "word": "extremely",
    "answer": "非常に",
    "options": [
      "ほとんど",
      "非常に",
      "かなり",
      "一度"
    ],
    "example": "It is extremely hot this summer.",
    "translation": "今年の夏は非常に暑い。"
  },
  {
    "serial": 183,
    "wordNo": "434",
    "word": "sleep",
    "answer": "睡眠",
    "options": [
      "休養",
      "昼寝",
      "夢",
      "睡眠"
    ],
    "example": "I try to get seven hours sleep every night.",
    "translation": "毎晩7時間の睡眠をとるようにしている。"
  },
  {
    "serial": 184,
    "wordNo": "447",
    "word": "reduce",
    "answer": "減らす",
    "options": [
      "抑える",
      "弱める",
      "減らす",
      "止める"
    ],
    "example": "Doctors suggest we should reduce the amount of meat that we eat.",
    "translation": "医師は肉を食べる量を減らすべきだと提案している。"
  },
  {
    "serial": 185,
    "wordNo": "448",
    "word": "decline",
    "answer": "低下",
    "options": [
      "減少",
      "後退",
      "増加",
      "低下"
    ],
    "example": "The government is worried about the declining birth rate.",
    "translation": "政府は出生率の低下を心配している。"
  },
  {
    "serial": 186,
    "wordNo": "452",
    "word": "contain",
    "answer": "含む",
    "options": [
      "含む",
      "作る",
      "信じる",
      "加える"
    ],
    "example": "Many soft drinks contain high levels of sugar.",
    "translation": "多くの清涼飲料水は大量の砂糖を含む。"
  },
  {
    "serial": 187,
    "wordNo": "455",
    "word": "despite",
    "answer": "〜にもかかわらず",
    "options": [
      "その上",
      "〜にもかかわらず",
      "〜のために",
      "〜に加えて"
    ],
    "example": "Despite the cold weather, he was walking around in a T-shirt.",
    "translation": "寒い天候にもかかわらず，彼はTシャツで歩き回っていた。"
  },
  {
    "serial": 188,
    "wordNo": "461",
    "word": "system",
    "answer": "制度",
    "options": [
      "方式",
      "制度",
      "体系",
      "仕組み"
    ],
    "example": "Many people complain about the education system in our country.",
    "translation": "多くの人々が私たちの国の教育制度について不満を述べている。"
  },
  {
    "serial": 189,
    "wordNo": "462",
    "word": "add",
    "answer": "加える",
    "options": [
      "加える",
      "混ぜる",
      "足す",
      "増やす"
    ],
    "example": "To make it taste nice, add some sugar.",
    "translation": "美味しくするために砂糖を加えて。"
  },
  {
    "serial": 190,
    "wordNo": "466",
    "word": "planet",
    "answer": "惑星",
    "options": [
      "衛星",
      "地球",
      "恒星",
      "惑星"
    ],
    "example": "There are eight planets in our solar system.",
    "translation": "太陽系には8つの惑星がある。"
  },
  {
    "serial": 191,
    "wordNo": "468",
    "word": "turn",
    "answer": "変わる",
    "options": [
      "変わる",
      "向く",
      "信じる",
      "回る"
    ],
    "example": "In general, plant leaves turn yellow in autumn.",
    "translation": "一般的に植物の葉は秋に黄色になる。"
  },
  {
    "serial": 192,
    "wordNo": "473",
    "word": "perform",
    "answer": "行う",
    "options": [
      "処理する",
      "行う",
      "演じる",
      "実施する"
    ],
    "example": "Many robots perform simple tasks that people find boring.",
    "translation": "多くのロボットは，人々が退屈に感じる単純作業を行う。"
  },
  {
    "serial": 193,
    "wordNo": "474",
    "word": "conduct",
    "answer": "実施する",
    "options": [
      "運営する",
      "調査する",
      "実施する",
      "信じる"
    ],
    "example": "For my project, I conducted a survey of students in our college.",
    "translation": "プロジェクトのために，私は大学の学生を対象に調査を行った。"
  },
  {
    "serial": 194,
    "wordNo": "475",
    "word": "flight",
    "answer": "航空便",
    "options": [
      "便",
      "出発",
      "旅客機",
      "航空便"
    ],
    "example": "My flight departs at 10 o'clock in the morning.",
    "translation": "私の飛行機は朝の10時に出発する。"
  },
  {
    "serial": 195,
    "wordNo": "480",
    "word": "technology",
    "answer": "科学技術",
    "options": [
      "技術",
      "機械",
      "科学技術",
      "発明"
    ],
    "example": "Modern technology has made our lives much more convenient.",
    "translation": "現代の科学技術によって私たちの生活ははるかに便利になった。"
  },
  {
    "serial": 196,
    "wordNo": "483",
    "word": "race",
    "answer": "人種",
    "options": [
      "競争",
      "民族",
      "血統",
      "人種"
    ],
    "example": "There are people of many races living in London.",
    "translation": "ロンドンには多くの人種の人々が住んでいる。"
  },
  {
    "serial": 197,
    "wordNo": "485",
    "word": "native",
    "answer": "母語の",
    "options": [
      "地元の",
      "生まれつきの",
      "明確な",
      "母語の"
    ],
    "example": "He speaks English and Chinese in addition to his native language.",
    "translation": "彼は母語に加えて英語と中国語を話す。"
  },
  {
    "serial": 198,
    "wordNo": "491",
    "word": "army",
    "answer": "軍隊",
    "options": [
      "兵士",
      "陸軍",
      "警察",
      "軍隊"
    ],
    "example": "I have wanted to join the army ever since I was a child.",
    "translation": "私は子供の頃からずっと陸軍に入りたいと思っていた。"
  },
  {
    "serial": 199,
    "wordNo": "493",
    "word": "creature",
    "answer": "生き物",
    "options": [
      "生き物",
      "動物",
      "怪物",
      "生命体"
    ],
    "example": "There are many deep-sea creatures that we have never seen.",
    "translation": "私たちが見たことのない深海生物がたくさんいる。"
  },
  {
    "serial": 200,
    "wordNo": "495",
    "word": "device",
    "answer": "装置",
    "options": [
      "器具",
      "機械",
      "道具",
      "装置"
    ],
    "example": "He has a small device that tells him where his smartphone is.",
    "translation": "彼はスマートフォンの位置を教えてくれる小さな装置を持っている。"
  }
];
