export const dataSetVersion = "idolsR17062026"; // Cambia esto al crear una nueva versión del conjunto de datos en formato YYYY-MM-DD.
export const dataSet = {};
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by Group",
        checked: true,  // La opción principal no está marcada por defecto
        key: "group",
        img: "",
        sub: [
            { name: "Morning Musume '26", key: "momusu", img: "MNMSM2600.jpg", checked: false },
            { name: "ANGERME", key: "angerme", img: "ANGM00.jpg", checked: false },
            { name: "Juice=Juice", key: "juice", img: "JCJC00.jpg", checked: false },
            { name: "Tsubaki Factory", key: "tsubaki", img: "TBKFTR00.jpg", checked: false },
            { name: "BEYOOOOONDS", key: "beyond", img: "BYNDS00.jpg", checked: false },
            { name: "OCHA NORMA", key: "ocha", img: "OCNM00.jpg", checked: false },
            { name: "Rosy Chronicle", key: "rosy", img: "RSCNC00.jpg", checked: false },
            { name: "Hello Pro Kenshuusei", key: "kss", img: "KSS00.jpg", checked: false },
            { name: "°C-ute", key: "cute", img: "CUTE00.jpg", checked: false },
            { name: "Berryz Koubou", key: "berryz", img: "BRKB000.jpg", checked: false },
            { name: "Kobushi Factory", key: "kobushi", img: "KBSFTR000.jpg", checked: false },
            { name: "Country Girls", key: "country", img: "CTGRLS000.jpg", checked: false },
            { name: "Morning Musume OG", key: "momusuog", img: "MNMSMLOGO.jpg", checked: false },
            { name: "ANGERME OG", key: "angermeog", img: "ANGMLOGO.jpg", checked: false },
            { name: "Juice=Juice OG", key: "juiceog", img: "JCJCLOGO.jpg", checked: false },
            { name: "Tsubaki Factory OG", key: "tsubakiog", img: "TBKFTRLOGO.jpg", checked: false },
            { name: "BEYOOOOONDS OG", key: "beyondog", img: "BYNDSLOGO.jpg", checked: false },
            { name: "OCHA NORMA OG", key: "ochaog", img: "OCNMLOGO.jpg", checked: false }
        ]
    }
];


dataSet[dataSetVersion].characterData = [
    { name: "Hashida Honoka", img: "RSCNC01.jpg", color: "#FFFFFF", opts: { group: ["rosy"] } }, // white
    { name: "Yoshida Hinoha", img: "RSCNC02.jpg", color: "#DC0026", opts: { group: ["rosy"] } }, // pure red
    { name: "Onoda Karin", img: "RSCNC03.jpg", color: "#FF90CF", opts: { group: ["rosy"] } }, // pink
    { name: "Murakoshi Ayana", img: "RSCNC04.jpg", color: "#9674EF", opts: { group: ["rosy"] } }, // light purple
    { name: "Uemura Hasumi", img: "RSCNC05.jpg", color: "#FF8C00", opts: { group: ["rosy"] } }, // orange
    { name: "Matsubara Yulia", img: "RSCNC06.jpg", color: "#66CCFF", opts: { group: ["rosy"] } }, // light blue
    { name: "Shimakawa Hana", img: "RSCNC07.jpg", color: "#3EB235", opts: { group: ["rosy"] } }, // bright green
    { name: "Kamimura Rena", img: "RSCNC08.jpg", color: "#FFFF00", opts: { group: ["rosy"] } }, // yellow
    { name: "Soma Yume", img: "RSCNC09.jpg", color: "#3366FF", opts: { group: ["rosy"] } },  // blue

    { name: "Saito Madoka", img: "OCNM01.jpg", color: "#00BBFF", opts: { group: ["ocha"] } }, // sea blue
    { name: "Hiromoto Ruri", img: "OCNM02.jpg", color: "#FFFF00", opts: { group: ["ocha"] } }, // yellow
    { name: "Yonemura Kirara", img: "OCNM03.jpg", color: "#FF0000", opts: { group: ["ocha"] } }, // italian red
    { name: "Kubota Nanami", img: "OCNM04.jpg", color: "#FF90CF", opts: { group: ["ocha"] } }, // pink
    { name: "Nakayama Natsume", img: "OCNM05.jpg", color: "#FFFFFF", opts: { group: ["ocha"] } }, // white
    { name: "Nishizaki Miku", img: "OCNM06.jpg", color: "#572A7B", opts: { group: ["ocha"] } }, // purple
    { name: "Kitahara Momo", img: "OCNM07.jpg", color: "#9ACD32", opts: { group: ["ocha"] } }, // light green
    { name: "Tsutsui Roko", img: "OCNM08.jpg", color: "#0000FF", opts: { group: ["ocha"] } },  // royal blue

    { name: "Nishida Shiori", img: "BYNDS01.jpg", color: "#FF33A3", opts: { group: ["beyond"] } }, // hot pink
    { name: "Eguchi Saya", img: "BYNDS02.jpg", color: "#FFE433", opts: { group: ["beyond"] } }, // daisy
    { name: "Takase Kurumi", img: "BYNDS03.jpg", color: "#02CCBD", opts: { group: ["beyondog"] } }, // mint green
    { name: "Maeda Kokoro", img: "BYNDS04.jpg", color: "#00BBFF", opts: { group: ["beyond"] } }, // sea blue
    { name: "Okamura Minami", img: "BYNDS05.jpg", color: "#FF90CF", opts: { group: ["beyond"] } }, // pink
    { name: "Kiyono Momohime", img: "BYNDS06.jpg", color: "#FF8C00", opts: { group: ["beyond"] } }, // orange
    { name: "Hirai Miyo", img: "BYNDS07.jpg", color: "#572A7B", opts: { group: ["beyond"] } }, // purple
    { name: "Kobayashi Honoka", img: "BYNDS08.jpg", color: "#009900", opts: { group: ["beyond"] } }, // green
    { name: "Satoyoshi Utano", img: "BYNDS09.jpg", color: "#007FFF", opts: { group: ["beyond"] } },  // medium blue
    { name: "Kojima Hana", img: "BYNDS10.jpg", color: "#FFFFFF", opts: { group: ["beyond"] } }, // white
    { name: "Otsubo Mano", img: "KSS02.jpg", color: "#9ACD32", opts: { group: ["beyond"] } }, // light green
    { name: "Sugiyama Yuna", img: "BYNDS12.jpg", color: "#FF2200", opts: { group: ["beyond"] } }, // red

    { name: "Tanimoto Ami", img: "TBKFTR01.jpg", color: "#9674EF", opts: { group: ["tsubaki"] } }, // light purple
    { name: "Ono Mizuho", img: "TBKFTR02.jpg", color: "#00A59E", opts: { group: ["tsubaki"] } }, // emerald green
    { name: "Onoda Saori", img: "TBKFTR03.jpg", color: "#FF90CF", opts: { group: ["tsubaki"] } }, // peach (pink)
    { name: "Akiyama Mao", img: "TBKFTR04.jpg", color: "#FF4D4D", opts: { group: ["tsubaki"] } }, // light red
    { name: "Kasai Yuumi", img: "TBKFTR05.jpg", color: "#572A7B", opts: { group: ["tsubaki"] } }, // purple
    { name: "Fukuda Marine", img: "TBKFTR06.jpg", color: "#0000FF", opts: { group: ["tsubaki"] } }, // royal blue
    { name: "Yofu Runo", img: "TBKFTR07.jpg", color: "#F9C926", opts: { group: ["tsubaki"] } }, // mustard
    { name: "Ishii Mihane", img: "TBKFTR08.jpg", color: "#FFFFFF", opts: { group: ["tsubaki"] } }, // white
    { name: "Murata Yuu", img: "TBKFTR09.jpg", color: "#FAAFBE", opts: { group: ["tsubaki"] } }, // light pink
    { name: "Doi Fuka", img: "TBKFTR10.jpg", color: "#3EB235", opts: { group: ["tsubaki"] } },  // bright green
    { name: "Nishimura Itsuki", img: "TBKFTR11.jpg", color: "#FFFF00", opts: { group: ["tsubaki"] } }, //yellow

    { name: "Dambara Ruru", img: "JCJC01.jpg", color: "#FF8C00", opts: { group: ["juice"] } }, // orange
    { name: "Inoue Rei", img: "JCJC02.jpg", color: "#FFFFFF", opts: { group: ["juice", "kobushi"] } }, // white
    { name: "Kudo Yume", img: "JCJC03.jpg", color: "#FF90CF", opts: { group: ["juice"] } }, // pink
    { name: "Matsunaga Riai", img: "JCJC04.jpg", color: "#0000FF", opts: { group: ["juice"] } }, // royal blue
    { name: "Arisawa Ichika", img: "JCJC05.jpg", color: "#66CCFF", opts: { group: ["juice"] } }, // light blue
    { name: "Irie Risa", img: "JCJC06.jpg", color: "#9674EF", opts: { group: ["juice"] } }, // light purple
    { name: "Ebata Kisaki", img: "JCJC07.jpg", color: "#FFE433", opts: { group: ["juice"] } }, // daisy
    { name: "Ishiyama Sakura", img: "JCJC08.jpg", color: "#572A7B", opts: { group: ["juice"] } }, // purple
    { name: "Endo Akari", img: "JCJC09.jpg", color: "#02CCBD", opts: { group: ["juice"] } }, // mint green
    { name: "Kawashima Mifu", img: "JCJC10.jpg", color: "#DC0026", opts: { group: ["juice"] } },  // pure red
    { name: "Hayashi Niina", img: "JCJC11.jpg", color: "#3EB235", opts: { group: ["juice"] } },  // bright green

    { name: "Ise Layla", img: "ANGM01.jpg", color: "#FF8C00", opts: { group: ["angerme"] } }, // orange
    { name: "Tamenaga Shion", img: "ANGM02.jpg", color: "#FF90CF", opts: { group: ["angerme"] } }, // pink
    { name: "Hashisako Rin", img: "ANGM03.jpg", color: "#DC0026", opts: { group: ["angerme"] } }, // pure red
    { name: "Kawana Rin", img: "ANGM04.jpg", color: "#009900", opts: { group: ["angerme"] } }, // green
    { name: "Matsumoto Wakana", img: "ANGM05.jpg", color: "#FFFFFF", opts: { group: ["angerme"] } }, // white
    { name: "Hirayama Yuki", img: "ANGM06.jpg", color: "#9ACD32", opts: { group: ["angerme"] } }, // light green
    { name: "Shimoitani Yukiho", img: "ANGM07.jpg", color: "#FF33A3", opts: { group: ["angerme"] } }, // hot pink
    { name: "Goto Hana", img: "ANGM08.jpg", color: "#00BBFF", opts: { group: ["angerme"] } },  // sea blue
    { name: "Nagano Momoha", img: "ANGM09.jpg", color: "#FFFF00", opts: { group: ["angerme"] } }, //yellow

    { name: "Nonaka Miki", img: "MNMSM2601.jpg", color: "#572A7B", opts: { group: ["momusu"] } }, // purple
    { name: "Oda Sakura", img: "MNMSM2602.jpg", color: "#B57EDC", opts: { group: ["momusu"] } }, // lavender
    { name: "Makino Maria", img: "MNMSM2603.jpg", color: "#FF90CF", opts: { group: ["momusu"] } }, // pink
    { name: "Okamura Homare", img: "MNMSM2604.jpg", color: "#FFE433", opts: { group: ["momusu"] } }, // daisy
    { name: "Yamazaki Mei", img: "MNMSM2605.jpg", color: "#3EB235", opts: { group: ["momusu"] } }, // bright green
    { name: "Sakurai Rio", img: "MNMSM2606.jpg", color: "#EECBAD", opts: { group: ["momusu"] } }, // milk tea
    { name: "Inoue Haruka", img: "MNMSM2607.jpg", color: "#02CCBD", opts: { group: ["momusu"] } }, // mint green
    { name: "Yumigeta Ako", img: "MNMSM2608.jpg", color: "#DC0026", opts: { group: ["momusu"] } },  // pure red
    { name: "Sugihara Meisa", img: "MNMSM2609.jpg", color: "", opts: { group: ["momusu"] } },
    { name: "Yasuda Miyu", img: "MNMSM2610.jpg", color: "", opts: { group: ["momusu"] } },
    { name: "Suzuki Moa", img: "KSS06.jpg", color: "", opts: { group: ["momusu"] } },
    { name: "Ishikawa Hanano", img: "KSS07.jpg", color: "", opts: { group: ["momusu"] } },

    //{ name: "Miyakoshi Chihiro", img: "KSS01.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Yoshida Hikari", img: "KSS03.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Hattori Rua", img: "KSS04.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Sakamoto Aoi", img: "KSS05.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Aoki Yuna", img: "KSS08.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Nemoto Karin", img: "KSS09.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Miyazaki Riho", img: "KSS10.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Ohno Airi", img: "KSS11.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Higuchi Aika", img: "KSS12.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Someya Sara", img: "KSS13.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Suzuki Kotomi", img: "KSS14.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Saito Yurika", img: "KSS15.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Kishida Momoka", img: "KSS16.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Tamura Nana", img: "KSS17.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Nagai Riina", img: "KSS18.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Sakata Shiori", img: "KSS19.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Sato Ayane", img: "KSS20.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Karibe Sara", img: "KSS21.jpg", color: "", opts: { group: ["kss"] } },
    { name: "Saeki Shiharu", img: "KSS22.jpg", color: "", opts: { group: ["kss"] } },

    { name: "Yajima Maimi", img: "CUTE01.jpg", color: "#FF2200", opts: { group: ["cute"] } }, // red
    { name: "Nakajima Saki", img: "CUTE02.jpg", color: "#0033FF", opts: { group: ["cute"] } }, // blue
    { name: "Suzuki Airi", img: "CUTE03.jpg", color: "#FF90CF", opts: { group: ["cute"] } }, // pink
    { name: "Okai Chisato", img: "CUTE04.jpg", color: "#009900", opts: { group: ["cute"] } }, // green
    { name: "Hagiwara Mai", img: "CUTE05.jpg", color: "#FFFF00", opts: { group: ["cute"] } }, // yellow
    { name: "Umeda Erika", img: "CUTE006.jpg", color: "#FFE433", opts: { group: ["cute"] } }, // daisy
    { name: "Murakami Megumi", img: "CUTE007.jpg", color: "#66CCFF", opts: { group: ["cute"] } }, // light blue
    { name: "Arihara Kanna", img: "CUTE008.jpg", color: "#FF4D4D", opts: { group: ["cute"] } },  // light red

    { name: "Shimizu Saki", img: "BRKB01.jpg", color: "#FFFF00", opts: { group: ["berryz"] } }, // yellow
    { name: "Tsugunaga Momoko", img: "BRKB02.jpg", color: "#FF90CF", opts: { group: ["berryz", "country"] } }, // pink
    { name: "Tokunaga Chinami", img: "BRKB03.jpg", color: "#FF8C00", opts: { group: ["berryz"] } }, // orange
    { name: "Sudo Maasa", img: "BRKB04.jpg", color: "#3366FF", opts: { group: ["berryz"] } }, // blue
    { name: "Natsuyaki Miyabi", img: "BRKB05.jpg", color: "#572A7B", opts: { group: ["berryz"] } }, // purple
    { name: "Kumai Yurina", img: "BRKB06.jpg", color: "#009900", opts: { group: ["berryz"] } }, // green
    { name: "Sugaya Risako", img: "BRKB07.jpg", color: "#FF3300", opts: { group: ["berryz"] } }, // red
    { name: "Ishimura Maiha", img: "BRKB08.jpg", color: "#66CCFF", opts: { group: ["berryz"] } },  // light blue

    { name: "Hirose Ayaka", img: "KBSFTR01.jpg", color: "#34B1CF", opts: { group: ["kobushi"] } }, // turquoise
    { name: "Nomura Minami", img: "KBSFTR02.jpg", color: "#0000FF", opts: { group: ["kobushi"] } }, // royal blue
    { name: "Hamaura Ayano", img: "KBSFTR03.jpg", color: "#FF90CF", opts: { group: ["kobushi"] } }, // pink
    { name: "Wada Sakurako", img: "KBSFTR04.jpg", color: "#009900", opts: { group: ["kobushi"] } }, // green
    { name: "Fujii Rio", img: "KBSFTR05.jpg", color: "#F9C926", opts: { group: ["kobushi"] } }, // mustard
    { name: "Ogawa Rena", img: "KBSFTR06.jpg", color: "#DC0026", opts: { group: ["kobushi"] } }, // red
    { name: "Taguchi Natsumi", img: "KBSFTR07.jpg", color: "#FF8C00", opts: { group: ["kobushi"] } },  // orange

    { name: "Yamaki Risa", img: "CTGRLS01.jpg", color: "#9ACD32", opts: { group: ["country"] } }, // lime
    { name: "Inaba Manaka", img: "CTGRLS002.jpg", color: "#FF33A3", opts: { group: ["country", "juiceog"] } }, // hot pink
    { name: "Morito Chisaki", img: "CTGRLS003.jpg", color: "#FFFFFF", opts: { group: ["country", "momusuog"] } }, // white
    { name: "Shimamura Uta", img: "CTGRLS004.jpg", color: "#572A7B", opts: { group: ["country"] } }, // purple
    { name: "Ozeki Mai", img: "CTGRLS005.jpg", color: "#007FFF", opts: { group: ["country"] } }, // medium blue
    { name: "Yanagawa Nanami", img: "CTGRLS06.jpg", color: "#007FFF", opts: { group: ["country", "juiceog"] } }, // medium blue
    { name: "Funaki Musubu", img: "CTGRLS07.jpg", color: "#9ACD32", opts: { group: ["country", "angermeog"] } }, // light green

    { name: "Nakazawa Yuko", img: "MNMSMOG01.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "Ishiguro Aya", img: "MNMSMOG02.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "Iida Kaori", img: "MNMSMOG03.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "Abe Natsumi", img: "MNMSMOG04.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "Fukuda Asuka", img: "MNMSMOG05.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "Yasuda Kei", img: "MNMSMOG06.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "Yaguchi Mari", img: "MNMSMOG07.jpg", color: "#9674EF", opts: { group: ["momusuog"] } }, // light purple
    { name: "Ichii Sayaka", img: "MNMSMOG08.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "Goto Maki", img: "MNMSMOG09.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "Ishikawa Rika", img: "MNMSMOG10.jpg", color: "#FF33A3", opts: { group: ["momusuog"] } }, // hot pink
    { name: "Yoshizawa Hitomi", img: "MNMSMOG11.jpg", color: "#572A7B", opts: { group: ["momusuog"] } }, // purple
    { name: "Tsuji Nozomi", img: "MNMSMOG12.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "Kago Ai", img: "MNMSMOG13.jpg", color: "", opts: { group: ["momusuog"] } },
    { name: "Takahashi Ai", img: "MNMSMOG14.jpg", color: "#FFFF00", opts: { group: ["momusuog"] } }, // yellow
    { name: "Konno Asami", img: "MNMSMOG15.jpg", color: "#FF90CF", opts: { group: ["momusuog"] } }, // pink
    { name: "Ogawa Makoto", img: "MNMSMOG16.jpg", color: "#3366FF", opts: { group: ["momusuog"] } }, // blue
    { name: "Niigaki Risa", img: "MNMSMOG17.jpg", color: "#9ACD32", opts: { group: ["momusuog"] } }, // yellow-green
    { name: "Fujimoto Miki", img: "MNMSMOG18.jpg", color: "#FF3300", opts: { group: ["momusuog"] } }, // red
    { name: "Kamei Eri", img: "MNMSMOG19.jpg", color: "#FF8C00", opts: { group: ["momusuog"] } }, // orange
    { name: "Michishige Sayumi", img: "MNMSMOG20.jpg", color: "#FF90CF", opts: { group: ["momusuog"] } }, // pink
    { name: "Tanaka Reina", img: "MNMSMOG21.jpg", color: "#66CCFF", opts: { group: ["momusuog"] } }, // light blue
    { name: "Kusumi Koharu", img: "MNMSMOG22.jpg", color: "#FF3300", opts: { group: ["momusuog"] } }, // red
    { name: "Mitsui Aika", img: "MNMSMOG23.jpg", color: "#9674EF", opts: { group: ["momusuog"] } }, // light purple
    { name: "Junjun", img: "MNMSMOG24.jpg", color: "#3366FF", opts: { group: ["momusuog"] } }, // blue
    { name: "Linlin", img: "MNMSMOG25.jpg", color: "#00A59E", opts: { group: ["momusuog"] } }, // emerald green
    { name: "Fukumura Mizuki", img: "MNMSMOG26.jpg", color: "#FF33A3", opts: { group: ["momusuog"] } }, // hot pink
    { name: "Sayashi Riho", img: "MNMSMOG27.jpg", color: "#FF3300", opts: { group: ["momusuog"] } }, // red
    { name: "Suzuki Kanon", img: "MNMSMOG28.jpg", color: "#009900", opts: { group: ["momusuog"] } }, // green
    { name: "Iikubo Haruna", img: "MNMSMOG29.jpg", color: "#FFE433", opts: { group: ["momusuog"] } }, // honey
    { name: "Sato Masaki", img: "MNMSMOG30.jpg", color: "#00A59E", opts: { group: ["momusuog"] } }, // emerald green
    { name: "Kudo Haruka", img: "MNMSMOG31.jpg", color: "#FF8C00", opts: { group: ["momusuog"] } }, // orange
    { name: "Ogata Haruna", img: "MNMSMOG32.jpg", color: "#00BBFF", opts: { group: ["momusuog"] } }, // sea blue
    { name: "Kaga Kaede", img: "MNMSMOG33.jpg", color: "#FF0000", opts: { group: ["momusuog"] } }, // italian red
    { name: "Ishida Ayumi", img: "MNMSMOG34.jpg", color: "#0000FF", opts: { group: ["momusuog"] } }, // royal blue
    { name: "Ikuta Erina", img: "MNMSMOG35.jpg", color: "#9ACD32", opts: { group: ["momusuog"] } }, // yellow-green
    { name: "Haga Akane", img: "MNMSM2504.jpg", color: "#FF8C00", opts: { group: ["momusuog"] } }, // orange
    { name: "Yokoyama Reina", img: "MNMSM2505.jpg", color: "#F9C926", opts: { group: ["momusuog"] } }, // golden yellow
    { name: "Kitagawa Rio", img: "MNMSM2506.jpg", color: "#00BBFF", opts: { group: ["momusuog"] } }, // sea blue

    { name: "Wada Ayaka", img: "ANGMOG01.jpg", color: "#FF3300", opts: { group: ["angermeog"] } }, // red
    { name: "Maeda Yuuka", img: "ANGMOG02.jpg", color: "#FF90CF", opts: { group: ["angermeog"] } }, // pink
    { name: "Fukuda Kanon", img: "ANGMOG03.jpg", color: "#FF33A3", opts: { group: ["angermeog"] } }, // hot pink
    { name: "Ogawa Saki", img: "ANGMOG04.jpg", color: "#9ACD32", opts: { group: ["angermeog"] } }, // light green
    { name: "Nakanishi Kana", img: "ANGMOG05.jpg", color: "#FAAFBE", opts: { group: ["angermeog"] } }, // light pink
    { name: "Takeuchi Akari", img: "ANGMOG06.jpg", color: "#FF8C00", opts: { group: ["angermeog"] } }, // orange
    { name: "Katsuta Rina", img: "ANGMOG07.jpg", color: "#3366FF", opts: { group: ["angermeog"] } }, // blue
    { name: "Tamura Meimi", img: "ANGMOG08.jpg", color: "#572A7B", opts: { group: ["angermeog"] } }, // purple
    { name: "Kosuga Fuyuka", img: "ANGMOG09.jpg", color: "#FF8C00", opts: { group: ["angermeog"] } }, // orange
    { name: "Murota Mizuki", img: "ANGMOG10.jpg", color: "#66CCFF", opts: { group: ["angermeog"] } }, // light blue
    { name: "Aikawa Maho", img: "ANGMOG11.jpg", color: "#009900", opts: { group: ["angermeog"] } }, // green
    { name: "Sasaki Rikako", img: "ANGMOG12.jpg", color: "#FFFF00", opts: { group: ["angermeog"] } }, // yellow
    { name: "Kasahara Momona", img: "ANGMOG13.jpg", color: "#FF33A3", opts: { group: ["angermeog"] } }, // hot pink
    { name: "Oota Haruka", img: "ANGMOG14.jpg", color: "#3EB235", opts: { group: ["angermeog"] } },  // bright green
    { name: "Kawamura Ayano", img: "ANGMOG15.jpg", color: "#9674EF", opts: { group: ["angermeog"] } }, // light purple
    { name: "Kamikokuryo Moe", img: "ANGMOG16.jpg", color: "#6BCCDC", opts: { group: ["angermeog"] } }, // aqua blue

    { name: "Miyazaki Yuka", img: "JCJCOG01.jpg", color: "#FAAFBE", opts: { group: ["juiceog"] } }, // peach
    { name: "Kanazawa Tomoko", img: "JCJCOG02.jpg", color: "#FF3300", opts: { group: ["juiceog"] } }, // apple
    { name: "Takagi Sayuki", img: "JCJCOG03.jpg", color: "#F7F06C", opts: { group: ["juiceog"] } }, // lemon
    { name: "Otsuka Aina", img: "JCJCOG04.jpg", color: "#FF8C00", opts: { group: ["juiceog"] } }, // orange
    { name: "Miyamoto Karin", img: "JCJCOG05.jpg", color: "#572A7B", opts: { group: ["juiceog"] } }, // grape
    { name: "Uemura Akari", img: "JCJCOG06.jpg", color: "#9ACD32", opts: { group: ["juiceog"] } },  // melon

    { name: "Yamagishi Riko", img: "TBKFTROG01.jpg", color: "#9ACD32", opts: { group: ["tsubakiog"] } }, // light green
    { name: "Ogata Risa", img: "TBKFTROG02.jpg", color: "#FEC369", opts: { group: ["tsubakiog"] } }, // light orange
    { name: "Niinuma Kisora", img: "TBKFTROG03.jpg", color: "#66CCFF", opts: { group: ["tsubakiog"] } }, // light blue
    { name: "Kishimoto Yumeno", img: "TBKFTROG04.jpg", color: "#FFFF00", opts: { group: ["tsubakiog"] } }, // yellow
    { name: "Asakura Kiki", img: "TBKFTROG05.jpg", color: "#FAAFBE", opts: { group: ["tsubakiog"] } },  // light pink
    { name: "Yagi Shiori", img: "TBKFTROG06.jpg", color: "#FF8C00", opts: { group: ["tsubakiog"] } }, // orange

    { name: "Ichioka Reina", img: "BYNDSOG01.jpg", color: "#66CCFF", opts: { group: ["beyondog"] } }, // light blue
    { name: "Yamazaki Yuhane", img: "BYNDSOG02.jpg", color: "#FF0000", opts: { group: ["beyondog"] } },  // italian red
    { name: "Shimakura Rika", img: "BYNDSOG03.jpg", color: "#B57EDC", opts: { group: ["beyondog"] } }, // lavender

    { name: "Ishiguri Kanami", img: "OCNMOG01.jpg", color: "#FF8C00", opts: { group: ["ochaog"] } }, // orange
    { name: "Tashiro Sumire", img: "OCNMOG02.jpg", color: "#9674EF", opts: { group: ["ochaog"] } } // light purple
];

export const imageRoot = '/assets/idols/';
export default { dataSetVersion, dataSet, imageRoot };