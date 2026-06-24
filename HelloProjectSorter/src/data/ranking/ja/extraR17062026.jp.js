export const dataSetVersion = "extraR17062026"; // Cambia esto al crear una nueva versión del conjunto de datos en formato YYYY-MM-DD.
export const dataSet = {};
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by Group",
        checked: true,  // La opción principal no está marcada por defecto
        key: "group",
        img: "",
        sub: [
            { name: "モーニング娘。'26", key: "momusu", img: "MNMSM2600.jpg", checked: false },
            { name: "アンジュルム", key: "angerme", img: "ANGM00.jpg", checked: false },
            { name: "Juice=Juice", key: "juice", img: "JCJC00.jpg", checked: false },
            { name: "つばきファクトリー", key: "tsubaki", img: "TBKFTR00.jpg", checked: false },
            { name: "BEYOOOOONDS", key: "beyond", img: "BYNDS00.jpg", checked: false },
            { name: "OCHA NORMA", key: "ocha", img: "OCNM00.jpg", checked: false },
            { name: "ロージークロニクル", key: "rosy", img: "RSCNC00.jpg", checked: false },
            { name: "ハロプロ研修生", key: "kss", img: "KSS00.jpg", checked: false },
            { name: "°C-ute", key: "cute", img: "CUTE00.jpg", checked: false },
            { name: "Berryz工房", key: "berryz", img: "BRKB00.jpg", checked: false },
            { name: "こぶしファクトリー", key: "kobushi", img: "KBSFTR000.jpg", checked: false },
            { name: "カントリー・ガールズ", key: "country", img: "CTGRLS000.jpg", checked: false },
            { name: "モーニング娘。OG", key: "momusuog", img: "MNMSMLOGO.jpg", checked: false },
            { name: "アンジュルム OG", key: "angermeog", img: "ANGMLOGO.jpg", checked: false },
            { name: "Juice=Juice OG", key: "juiceog", img: "JCJCLOGO.jpg", checked: false },
            { name: "つばきファクトリー OG", key: "tsubakiog", img: "TBKFTRLOGO.jpg", checked: false },
            { name: "BEYOOOOONDS OG", key: "beyondog", img: "BYNDSLOGO.jpg", checked: false },
            { name: "OCHA NORMA OG", key: "ochaog", img: "OCNMLOGO.jpg", checked: false },
            { name: "Current Acts", key: "current", img: "", checked: false },
            { name: "Former Acts", key: "former", img: "", checked: false },
        ]
    }
];


dataSet[dataSetVersion].characterData = [
    { name: "橋田歩果", img: "RSCNC01.jpg", color: "#FFFFFF", opts: { group: ["rosy"] } }, // white
    { name: "吉田姫杷", img: "RSCNC02.jpg", color: "#DC0026", opts: { group: ["rosy"] } }, // pure red
    { name: "小野田華凜", img: "RSCNC03.jpg", color: "#FF90CF", opts: { group: ["rosy"] } }, // pink
    { name: "村越彩菜", img: "RSCNC04.jpg", color: "#9674EF", opts: { group: ["rosy"] } }, // light purple
    { name: "植村葉純", img: "RSCNC05.jpg", color: "#FF8C00", opts: { group: ["rosy"] } }, // orange
    { name: "松原ユリヤ", img: "RSCNC06.jpg", color: "#66CCFF", opts: { group: ["rosy"] } }, // light blue
    { name: "島川波菜", img: "RSCNC07.jpg", color: "#3EB235", opts: { group: ["rosy"] } }, // bright green
    { name: "上村麗菜", img: "RSCNC08.jpg", color: "#FFFF00", opts: { group: ["rosy"] } }, // yellow
    { name: "相馬優芽", img: "RSCNC09.jpg", color: "#3366FF", opts: { group: ["rosy"] } },  // blue

    { name: "斉藤円香", img: "OCNM01.jpg", color: "#00BBFF", opts: { group: ["ocha"] } }, // sea blue
    { name: "広本瑠璃", img: "OCNM02.jpg", color: "#FFFF00", opts: { group: ["ocha"] } }, // yellow
    { name: "米村姫良々", img: "OCNM03.jpg", color: "#FF0000", opts: { group: ["ocha"] } }, // italian red
    { name: "窪田七海", img: "OCNM04.jpg", color: "#FF90CF", opts: { group: ["ocha"] } }, // pink
    { name: "中山夏月姫", img: "OCNM05.jpg", color: "#FFFFFF", opts: { group: ["ocha"] } }, // white
    { name: "西﨑美空", img: "OCNM06.jpg", color: "#572A7B", opts: { group: ["ocha"] } }, // purple
    { name: "北原もも", img: "OCNM07.jpg", color: "#9ACD32", opts: { group: ["ocha"] } }, // light green
    { name: "筒井澪心", img: "OCNM08.jpg", color: "#0000FF", opts: { group: ["ocha"] } },  // royal blue

    { name: "西田汐里", img: "BYNDS01.jpg", color: "#FF33A3", opts: { group: ["beyond"] } }, // hot pink
    { name: "江口紗耶", img: "BYNDS02.jpg", color: "#FFE433", opts: { group: ["beyond"] } }, // daisy
    { name: "高瀬くるみ", img: "BYNDS03.jpg", color: "#02CCBD", opts: { group: ["beyondog"] } }, // mint green
    { name: "前田こころ", img: "BYNDS04.jpg", color: "#00BBFF", opts: { group: ["beyond"] } }, // sea blue
    { name: "岡村美波", img: "BYNDS05.jpg", color: "#FF90CF", opts: { group: ["beyond"] } }, // pink
    { name: "清野桃々姫", img: "BYNDS06.jpg", color: "#FF8C00", opts: { group: ["beyond"] } }, // orange
    { name: "平井美葉", img: "BYNDS07.jpg", color: "#572A7B", opts: { group: ["beyond"] } }, // purple
    { name: "小林萌花", img: "BYNDS08.jpg", color: "#009900", opts: { group: ["beyond"] } }, // green
    { name: "里吉うたの", img: "BYNDS09.jpg", color: "#007FFF", opts: { group: ["beyond"] } },  // medium blue
    { name: "小島はな", img: "BYNDS10.jpg", color: "#FFFFFF", opts: { group: ["beyond"] } }, // white
    { name: "大坪茉乃", img: "KSS02.jpg", color: "#9ACD32", opts: { group: ["beyond"] } }, // light green
    { name: "杉山結菜", img: "BYNDS12.jpg", color: "#FF2200", opts: { group: ["beyond"] } }, // red

    { name: "谷本安美", img: "TBKFTR01.jpg", color: "#9674EF", opts: { group: ["tsubaki"] } }, // light purple
    { name: "小野瑞歩", img: "TBKFTR02.jpg", color: "#00A59E", opts: { group: ["tsubaki"] } }, // emerald green
    { name: "小野田紗栞", img: "TBKFTR03.jpg", color: "#FF90CF", opts: { group: ["tsubaki"] } }, // peach (pink)
    { name: "秋山眞緒", img: "TBKFTR04.jpg", color: "#FF4D4D", opts: { group: ["tsubaki"] } }, // light red
    { name: "河西結心", img: "TBKFTR05.jpg", color: "#572A7B", opts: { group: ["tsubaki"] } }, // purple
    { name: "福田真琳", img: "TBKFTR06.jpg", color: "#0000FF", opts: { group: ["tsubaki"] } }, // royal blue
    { name: "豫風瑠乃", img: "TBKFTR07.jpg", color: "#F9C926", opts: { group: ["tsubaki"] } }, // mustard
    { name: "石井泉羽", img: "TBKFTR08.jpg", color: "#FFFFFF", opts: { group: ["tsubaki"] } }, // white
    { name: "村田結生", img: "TBKFTR09.jpg", color: "#FAAFBE", opts: { group: ["tsubaki"] } }, // light pink
    { name: "土居楓奏", img: "TBKFTR10.jpg", color: "#3EB235", opts: { group: ["tsubaki"] } },  // bright green
    { name: "西村乙輝", img: "TBKFTR11.jpg", color: "#FFFF00", opts: { group: ["tsubaki"] } }, //yellow

    { name: "段原瑠々", img: "JCJC01.jpg", color: "#FF8C00", opts: { group: ["juice"] } }, // orange
    { name: "井上玲音", img: "JCJC02.jpg", color: "#FFFFFF", opts: { group: ["juice", "kobushi"] } }, // white
    { name: "工藤由愛", img: "JCJC03.jpg", color: "#FF90CF", opts: { group: ["juice"] } }, // pink
    { name: "松永里愛", img: "JCJC04.jpg", color: "#0000FF", opts: { group: ["juice"] } }, // royal blue
    { name: "有澤一華", img: "JCJC05.jpg", color: "#66CCFF", opts: { group: ["juice"] } }, // light blue
    { name: "入江里咲", img: "JCJC06.jpg", color: "#9674EF", opts: { group: ["juice"] } }, // light purple
    { name: "江端妃咲", img: "JCJC07.jpg", color: "#FFE433", opts: { group: ["juice"] } }, // daisy
    { name: "石山咲良", img: "JCJC08.jpg", color: "#572A7B", opts: { group: ["juice"] } }, // purple
    { name: "遠藤彩加里", img: "JCJC09.jpg", color: "#02CCBD", opts: { group: ["juice"] } }, // mint green
    { name: "川嶋美楓", img: "JCJC10.jpg", color: "#DC0026", opts: { group: ["juice"] } },  // pure red
    { name: "林仁愛", img: "JCJC11.jpg", color: "#3EB235", opts: { group: ["juice"] } },  // bright green

    { name: "伊勢鈴蘭", img: "ANGM01.jpg", color: "#FF8C00", opts: { group: ["angerme"] } }, // orange
    { name: "為永幸音", img: "ANGM02.jpg", color: "#FF90CF", opts: { group: ["angerme"] } }, // pink
    { name: "橋迫鈴", img: "ANGM03.jpg", color: "#DC0026", opts: { group: ["angerme"] } }, // pure red
    { name: "川名凜", img: "ANGM04.jpg", color: "#009900", opts: { group: ["angerme"] } }, // green
    { name: "松本わかな", img: "ANGM05.jpg", color: "#FFFFFF", opts: { group: ["angerme"] } }, // white
    { name: "平山遊季", img: "ANGM06.jpg", color: "#9ACD32", opts: { group: ["angerme"] } }, // light green
    { name: "下井谷幸穂", img: "ANGM07.jpg", color: "#FF33A3", opts: { group: ["angerme"] } }, // hot pink
    { name: "後藤花", img: "ANGM08.jpg", color: "#00BBFF", opts: { group: ["angerme"] } },  // sea blue
    { name: "長野桃羽", img: "ANGM09.jpg", color: "#FFFF00", opts: { group: ["angerme"] } }, //yellow

    { name: "野中美希", img: "MNMSM2601.jpg", color: "#572A7B", opts: { group: ["momusu"] } }, // purple
    { name: "小田さくら", img: "MNMSM2602.jpg", color: "#B57EDC", opts: { group: ["momusu"] } }, // lavender
    { name: "牧野真莉愛", img: "MNMSM2603.jpg", color: "#FF90CF", opts: { group: ["momusuog"] } }, // pink
    { name: "岡村ほまれ", img: "MNMSM2604.jpg", color: "#FFE433", opts: { group: ["momusu"] } }, // daisy
    { name: "山﨑愛生", img: "MNMSM2605.jpg", color: "#3EB235", opts: { group: ["momusu"] } }, // bright green
    { name: "櫻井梨央", img: "MNMSM2606.jpg", color: "#EECBAD", opts: { group: ["momusu"] } }, // milk tea
    { name: "井上春華", img: "MNMSM2607.jpg", color: "#02CCBD", opts: { group: ["momusu"] } }, // mint green
    { name: "弓桁朱琴", img: "MNMSM2608.jpg", color: "#DC0026", opts: { group: ["momusu"] } },  // pure red
    { name: "杉原明紗", img: "MNMSM2609.jpg", color: "", opts: { group: ["momusu"] } },
    { name: "安田美結", img: "MNMSM2610.jpg", color: "", opts: { group: ["momusu"] } },
    { name: "鈴木もあ", img: "KSS06.jpg", color: "", opts: { group: ["momusu"] } },
    { name: "石川華望", img: "KSS07.jpg", color: "", opts: { group: ["momusu"] } },

    //{ name: "宮越千尋", img: "KSS01.jpg", color: "", opts: { group: ["kss"] } },
    { name: "吉田光里", img: "KSS03.jpg", color: "", opts: { group: ["kss"] } },
    { name: "服部琉愛", img: "KSS04.jpg", color: "", opts: { group: ["kss"] } },
    { name: "坂本葵花", img: "KSS05.jpg", color: "", opts: { group: ["kss"] } },
    { name: "青木優奈", img: "KSS08.jpg", color: "", opts: { group: ["kss"] } },
    { name: "根本花凛", img: "KSS09.jpg", color: "", opts: { group: ["kss"] } },
    { name: "宮﨑理帆", img: "KSS10.jpg", color: "", opts: { group: ["kss"] } },
    { name: "大野愛莉", img: "KSS11.jpg", color: "", opts: { group: ["kss"] } },
    { name: "樋口愛海", img: "KSS12.jpg", color: "", opts: { group: ["kss"] } },
    { name: "染谷彩良", img: "KSS13.jpg", color: "", opts: { group: ["kss"] } },
    { name: "鈴木琴美", img: "KSS14.jpg", color: "", opts: { group: ["kss"] } },
    { name: "斎藤ゆり夏", img: "KSS15.jpg", color: "", opts: { group: ["kss"] } },
    { name: "岸田桃果", img: "KSS16.jpg", color: "", opts: { group: ["kss"] } },
    { name: "田村那々", img: "KSS17.jpg", color: "", opts: { group: ["kss"] } },
    { name: "長井莉依奈", img: "KSS18.jpg", color: "", opts: { group: ["kss"] } },
    { name: "坂田しおり", img: "KSS19.jpg", color: "", opts: { group: ["kss"] } },
    { name: "佐藤絢音", img: "KSS20.jpg", color: "", opts: { group: ["kss"] } },
    { name: "対部咲良", img: "KSS21.jpg", color: "", opts: { group: ["kss"] } },
    { name: "佐伯詩春", img: "KSS22.jpg", color: "", opts: { group: ["kss"] } },

    { name: "矢島舞美", img: "CUTE01.jpg", color: "#FF2200", opts: { group: ["cute"] } }, // red
    { name: "中島早貴", img: "CUTE02.jpg", color: "#0033FF", opts: { group: ["cute"] } }, // blue
    { name: "鈴木愛理", img: "CUTE03.jpg", color: "#FF90CF", opts: { group: ["cute"] } }, // pink
    { name: "岡井千聖", img: "CUTE04.jpg", color: "#009900", opts: { group: ["cute"] } }, // green
    { name: "萩原舞", img: "CUTE05.jpg", color: "#FFFF00", opts: { group: ["cute"] } }, // yellow
    { name: "梅田えりか", img: "CUTE006.jpg", color: "#FFE433", opts: { group: ["cute"] } }, // daisy
    { name: "村上愛", img: "CUTE007.jpg", color: "#66CCFF", opts: { group: ["cute"] } }, // light blue
    { name: "有原栞菜", img: "CUTE008.jpg", color: "#FF4D4D", opts: { group: ["cute"] } },  // light red

    { name: "清水佐紀", img: "BRKB01.jpg", color: "#FFFF00", opts: { group: ["berryz"] } }, // yellow
    { name: "嗣永桃子", img: "BRKB02.jpg", color: "#FF90CF", opts: { group: ["berryz", "country"] } }, // pink
    { name: "徳永千奈美", img: "BRKB03.jpg", color: "#FF8C00", opts: { group: ["berryz"] } }, // orange
    { name: "須藤茉麻", img: "BRKB04.jpg", color: "#3366FF", opts: { group: ["berryz"] } }, // blue
    { name: "夏焼雅", img: "BRKB05.jpg", color: "#572A7B", opts: { group: ["berryz"] } }, // purple
    { name: "熊井友理奈", img: "BRKB06.jpg", color: "#009900", opts: { group: ["berryz"] } }, // green
    { name: "菅谷梨沙子", img: "BRKB07.jpg", color: "#FF3300", opts: { group: ["berryz"] } }, // red
    { name: "石村舞波", img: "BRKB08.jpg", color: "#66CCFF", opts: { group: ["berryz"] } },  // light blue

    { name: "広瀬彩海", img: "KBSFTR01.jpg", color: "#34B1CF", opts: { group: ["kobushi"] } }, // turquoise
    { name: "野村みな美", img: "KBSFTR02.jpg", color: "#0000FF", opts: { group: ["kobushi"] } }, // royal blue
    { name: "浜浦彩乃", img: "KBSFTR03.jpg", color: "#FF90CF", opts: { group: ["kobushi"] } }, // pink
    { name: "和田桜子", img: "KBSFTR04.jpg", color: "#009900", opts: { group: ["kobushi"] } }, // green
    { name: "藤井梨央", img: "KBSFTR05.jpg", color: "#F9C926", opts: { group: ["kobushi"] } }, // mustard
    { name: "小川麗奈", img: "KBSFTR06.jpg", color: "#DC0026", opts: { group: ["kobushi"] } }, // red
    { name: "田口夏実", img: "KBSFTR07.jpg", color: "#FF8C00", opts: { group: ["kobushi"] } },  // orange

    { name: "山木梨沙", img: "CTGRLS01.jpg", color: "#9ACD32", opts: { group: ["country"] } }, // lime
    { name: "稲場愛香", img: "CTGRLS002.jpg", color: "#FF33A3", opts: { group: ["country", "juiceog"] } }, // hot pink
    { name: "森戸知沙希", img: "CTGRLS003.jpg", color: "#FFFFFF", opts: { group: ["country", "momusuog"] } }, // white
    { name: "島村嬉唄", img: "CTGRLS004.jpg", color: "#572A7B", opts: { group: ["country"] } }, // purple
    { name: "小関舞", img: "CTGRLS005.jpg", color: "#007FFF", opts: { group: ["country"] } }, // medium blue
    { name: "梁川奈々美", img: "CTGRLS06.jpg", color: "#007FFF", opts: { group: ["country", "juiceog"] } }, // medium blue
    { name: "船木結", img: "CTGRLS07.jpg", color: "#9ACD32", opts: { group: ["country", "angermeog"] } }, // light green

    { name: "中澤裕子", img: "MNMSMOG01.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "石黒彩", img: "MNMSMOG02.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "飯田圭織", img: "MNMSMOG03.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "安倍なつみ", img: "MNMSMOG04.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "福田明日香", img: "MNMSMOG05.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "保田圭", img: "MNMSMOG06.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "矢口真里", img: "MNMSMOG07.jpg", color: "#9674EF", opts: { group: ["momusuog"] } }, // light purple
    { name: "市井紗耶香", img: "MNMSMOG08.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "後藤真希", img: "MNMSMOG09.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "石川梨華", img: "MNMSMOG10.jpg", color: "#FF33A3", opts: { group: ["momusuog"] } }, // hot pink
    { name: "吉澤ひとみ", img: "MNMSMOG11.jpg", color: "#572A7B", opts: { group: ["momusuog"] } }, // purple
    { name: "辻希美", img: "MNMSMOG12.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "加護亜依", img: "MNMSMOG13.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "高橋愛", img: "MNMSMOG14.jpg", color: "#FFFF00", opts: { group: ["momusuog"] } }, // yellow
    { name: "紺野あさ美", img: "MNMSMOG15.jpg", color: "#FF90CF", opts: { group: ["momusuog"] } }, // pink
    { name: "小川麻琴", img: "MNMSMOG16.jpg", color: "#3366FF", opts: { group: ["momusuog"] } }, // blue
    { name: "新垣里沙", img: "MNMSMOG17.jpg", color: "#9ACD32", opts: { group: ["momusuog"] } }, // yellow-green
    { name: "藤本美貴", img: "MNMSMOG18.jpg", color: "#FF3300", opts: { group: ["momusuog"] } }, // red
    { name: "亀井絵里", img: "MNMSMOG19.jpg", color: "#FF8C00", opts: { group: ["momusuog"] } }, // orange
    { name: "道重さゆみ", img: "MNMSMOG20.jpg", color: "#FF90CF", opts: { group: ["momusuog"] } }, // pink
    { name: "田中れいな", img: "MNMSMOG21.jpg", color: "#66CCFF", opts: { group: ["momusuog"] } }, // light blue
    { name: "久住小春", img: "MNMSMOG22.jpg", color: "#FF3300", opts: { group: ["momusuog"] } }, // red
    { name: "光井愛佳", img: "MNMSMOG23.jpg", color: "#9674EF", opts: { group: ["momusuog"] } }, // light purple
    { name: "ジュンジュン", img: "MNMSMOG24.jpg", color: "#3366FF", opts: { group: ["momusuog"] } }, // blue
    { name: "リンリン", img: "MNMSMOG25.jpg", color: "#00A59E", opts: { group: ["momusuog"] } }, // emerald green
    { name: "譜久村聖", img: "MNMSMOG26.jpg", color: "#FF33A3", opts: { group: ["momusuog"] } }, // hot pink
    { name: "鞘師里保", img: "MNMSMOG27.jpg", color: "#FF3300", opts: { group: ["momusuog"] } }, // red
    { name: "鈴木香音", img: "MNMSMOG28.jpg", color: "#009900", opts: { group: ["momusuog"] } }, // green
    { name: "飯窪春菜", img: "MNMSMOG29.jpg", color: "#FFE433", opts: { group: ["momusuog"] } }, // honey
    { name: "佐藤優樹", img: "MNMSMOG30.jpg", color: "#00A59E", opts: { group: ["momusuog"] } }, // emerald green
    { name: "工藤遥", img: "MNMSMOG31.jpg", color: "#FF8C00", opts: { group: ["momusuog"] } }, // orange
    { name: "尾形春水", img: "MNMSMOG32.jpg", color: "#00BBFF", opts: { group: ["momusuog"] } }, // sea blue
    { name: "加賀楓", img: "MNMSMOG33.jpg", color: "#FF0000", opts: { group: ["momusuog"] } },  // italian red
    { name: "石田亜佑美", img: "MNMSMOG34.jpg", color: "#0000FF", opts: { group: ["momusuog"] } }, // royal blue
    { name: "生田衣梨奈", img: "MNMSMOG35.jpg", color: "#9ACD32", opts: { group: ["momusuog"] } }, // yellow-green

    { name: "和田彩花", img: "ANGMOG01.jpg", color: "#FF3300", opts: { group: ["angermeog"] } }, // red
    { name: "前田憂佳", img: "ANGMOG02.jpg", color: "#FF90CF", opts: { group: ["angermeog"] } }, // pink
    { name: "福田花音", img: "ANGMOG03.jpg", color: "#FF33A3", opts: { group: ["angermeog"] } }, // hot pink
    { name: "小川紗季", img: "ANGMOG04.jpg", color: "#9ACD32", opts: { group: ["angermeog"] } }, // light green
    { name: "中西香菜", img: "ANGMOG05.jpg", color: "#FAAFBE", opts: { group: ["angermeog"] } }, // light pink
    { name: "竹内朱莉", img: "ANGMOG06.jpg", color: "#FF8C00", opts: { group: ["angermeog"] } }, // orange
    { name: "勝田里奈", img: "ANGMOG07.jpg", color: "#3366FF", opts: { group: ["angermeog"] } }, // blue
    { name: "田村芽実", img: "ANGMOG08.jpg", color: "#572A7B", opts: { group: ["angermeog"] } }, // purple
    { name: "小数賀芙由香", img: "ANGMOG09.jpg", color: "#FF8C00", opts: { group: ["angermeog"] } }, // orange
    { name: "室田瑞希", img: "ANGMOG10.jpg", color: "#66CCFF", opts: { group: ["angermeog"] } }, // light blue
    { name: "相川茉穂", img: "ANGMOG11.jpg", color: "#009900", opts: { group: ["angermeog"] } }, // green
    { name: "佐々木莉佳子", img: "ANGMOG12.jpg", color: "#FFFF00", opts: { group: ["angermeog"] } }, // yellow
    { name: "笠原桃奈", img: "ANGMOG13.jpg", color: "#FF33A3", opts: { group: ["angermeog"] } }, // hot pink
    { name: "太田遥香", img: "ANGMOG14.jpg", color: "#3EB235", opts: { group: ["angermeog"] } },  // bright green
    { name: "川村文乃", img: "ANGMOG15.jpg", color: "#9674EF", opts: { group: ["angermeog"] } }, // light purple
    { name: "上國料萌衣", img: "ANGMOG16.jpg", color: "#6BCCDC", opts: { group: ["angermeog"] } }, // aqua blue
    { name: "羽賀朱音", img: "MNMSM2504.jpg", color: "#FF8C00", opts: { group: ["momusuog"] } }, // orange
    { name: "横山玲奈", img: "MNMSM2505.jpg", color: "#F9C926", opts: { group: ["momusuog"] } }, // golden yellow
    { name: "北川莉央", img: "MNMSM2506.jpg", color: "#00BBFF", opts: { group: ["momusuog"] } }, // sea blue

    { name: "宮崎由加", img: "JCJCOG01.jpg", color: "#FAAFBE", opts: { group: ["juiceog"] } }, // peach
    { name: "金澤朋子", img: "JCJCOG02.jpg", color: "#FF3300", opts: { group: ["juiceog"] } }, // apple
    { name: "高木紗友希", img: "JCJCOG03.jpg", color: "#F7F06C", opts: { group: ["juiceog"] } }, // lemon
    { name: "大塚愛菜", img: "JCJCOG04.jpg", color: "#FF8C00", opts: { group: ["juiceog"] } }, // orange
    { name: "宮本佳林", img: "JCJCOG05.jpg", color: "#572A7B", opts: { group: ["juiceog"] } }, // grape
    { name: "植村あかり", img: "JCJCOG06.jpg", color: "#9ACD32", opts: { group: ["juiceog"] } },  // melon

    { name: "山岸理子", img: "TBKFTROG01.jpg", color: "#9ACD32", opts: { group: ["tsubakiog"] } }, // light green
    { name: "小片リサ", img: "TBKFTROG02.jpg", color: "#FEC369", opts: { group: ["tsubakiog"] } }, // light orange
    { name: "新沼希空", img: "TBKFTROG03.jpg", color: "#66CCFF", opts: { group: ["tsubakiog"] } }, // light blue
    { name: "岸本ゆめの", img: "TBKFTROG04.jpg", color: "#FFFF00", opts: { group: ["tsubakiog"] } }, // yellow
    { name: "浅倉樹々", img: "TBKFTROG05.jpg", color: "#FAAFBE", opts: { group: ["tsubakiog"] } },  // light pink
    { name: "八木栞", img: "TBKFTROG06.jpg", color: "#FF8C00", opts: { group: ["tsubakiog"] } }, // orange

    { name: "一岡怜奈", img: "BYNDSOG01.jpg", color: "#66CCFF", opts: { group: ["beyondog"] } }, // light blue
    { name: "山﨑夢羽", img: "BYNDSOG02.jpg", color: "#FF0000", opts: { group: ["beyondog"] } },  // italian red
    { name: "島倉りか", img: "BYNDSOG03.jpg", color: "#B57EDC", opts: { group: ["beyondog"] } }, // lavender

    { name: "石栗奏美", img: "OCNMOG01.jpg", color: "#FF8C00", opts: { group: ["ochaog"] } }, // orange
    { name: "田代すみれ", img: "OCNMOG02.jpg", color: "#9674EF", opts: { group: ["ochaog"] } }, // light purple

    { name: "モーニング娘。'26", img: "MNMSM2500.jpg", opts: { group: ["current"] } },
    { name: "アンジュルム", img: "ANGM00.jpg", opts: { group: ["current"] } },
    { name: "Juice=Juice", img: "JCJC00.jpg", opts: { group: ["current"] } },
    { name: "つばきファクトリー", img: "TBKFTR00.jpg", opts: { group: ["current"] } },
    { name: "BEYOOOOONDS", img: "BYNDS00.jpg", opts: { group: ["current"] } },
    { name: "OCHA NORMA", img: "OCNM00.jpg", opts: { group: ["current"] } },
    { name: "ロージークロニクル", img: "RSCNC00.jpg", opts: { group: ["current"] } },
    //{ name: "ハロプロ研修生", img: "KSS00.jpg", opts: { group: ["current"] } },
    { name: "°C-ute", img: "CUTE00.jpg", opts: { group: ["former"] } },
    { name: "Berryz工房", img: "BRKB00.jpg", opts: { group: ["former"] } },
    { name: "こぶしファクトリー", img: "KBSFTR000.jpg", opts: { group: ["former"] } },
    { name: "カントリー・ガールズ", img: "CTGRLS000.jpg", opts: { group: ["former"] } },
];

export const imageRoot = '/assets/idols/';
export default { dataSetVersion, dataSet, imageRoot };