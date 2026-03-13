"use strict";

// カヤツリグサ属 種の検索表
var CYPERUS_SPECIES_NODES = {
  start: {
    question: "生活形",
    options: [{
      label: "A", text: "多年草；地下に根茎または塊茎をもつ", next: "cy_per",
      candidates: [{ name: "ハマスゲ", latin: "C. rotundus" }, { name: "ウシクグ", latin: "C. orthostachyus" }, { name: "キンガヤツリ", latin: "C. flavidus" }, { name: "ゴウソ", latin: "C. exaltatus" }, { name: "シュロガヤツリ", latin: "C. involucratus" }]
    }, {
      label: "A", text: "一年草（まれに短命の多年草）；根茎・塊茎はない", next: "cy_ann",
      candidates: [{ name: "コカヤツリ", latin: "C. difformis" }, { name: "ヒメガヤツリ", latin: "C. tenuispica" }, { name: "アオガヤツリ", latin: "C. nipponicus" }, { name: "カヤツリグサ", latin: "C. microiria" }, { name: "カヤツリグサモドキ", latin: "C. iria" }, { name: "タマガヤツリ", latin: "C. glomeratus" }, { name: "クグガヤツリ", latin: "C. haspan" }, { name: "ヒナガヤツリ", latin: "C. flaccidus" }, { name: "ヤワラカヤツリ", latin: "C. odoratus" }, { name: "ヒロハカヤツリ", latin: "C. compressus" }]
    }]
  },
  cy_per: {
    question: "地下部の形態",
    options: [{
      label: "B", text: "根茎の先端に球形〜卵形の塊茎（芋）をもつ",
      result: { name: "ハマスゲ", latin: "Cyperus rotundus", page: 726 },
      candidates: [{ name: "ハマスゲ", latin: "C. rotundus" }]
    }, {
      label: "B", text: "塊茎はなく、根茎は細長い", next: "cy_per2",
      candidates: [{ name: "ウシクグ", latin: "C. orthostachyus" }, { name: "キンガヤツリ", latin: "C. flavidus" }, { name: "ゴウソ", latin: "C. exaltatus" }, { name: "シュロガヤツリ", latin: "C. involucratus" }]
    }]
  },
  cy_per2: {
    question: "茎の高さと苞葉の数",
    options: [{
      label: "C", text: "茎は高さ60cm以上になり、苞葉は多数（5〜10枚）で開出；花序は大型の複合散形", next: "cy_tall",
      candidates: [{ name: "ゴウソ", latin: "C. exaltatus" }, { name: "シュロガヤツリ", latin: "C. involucratus" }]
    }, {
      label: "C", text: "茎は高さ60cm以下；苞葉は3〜5枚", next: "cy_short_per",
      candidates: [{ name: "ウシクグ", latin: "C. orthostachyus" }, { name: "キンガヤツリ", latin: "C. flavidus" }]
    }]
  },
  cy_tall: {
    question: "苞葉の放射状配列と由来",
    options: [{
      label: "D", text: "苞葉は茎頂から傘（シュロ）状に多数放射する；栽培種",
      result: { name: "シュロガヤツリ", latin: "Cyperus involucratus", page: 724 },
      candidates: [{ name: "シュロガヤツリ", latin: "C. involucratus" }]
    }, {
      label: "D", text: "苞葉は葉状で長く、茎の上部から開出；野生種",
      result: { name: "ゴウソ", latin: "Cyperus exaltatus", page: 722 },
      candidates: [{ name: "ゴウソ", latin: "C. exaltatus" }]
    }]
  },
  cy_short_per: {
    question: "小穂の配置と鱗片の色",
    options: [{
      label: "D", text: "小穂は円柱状の穂に密集；鱗片は緑黄色〜わら色で3脈あり",
      result: { name: "ウシクグ", latin: "Cyperus orthostachyus", page: 716 },
      candidates: [{ name: "ウシクグ", latin: "C. orthostachyus" }]
    }, {
      label: "D", text: "小穂は散形花序に開出；鱗片は黄褐色〜褐色",
      result: { name: "キンガヤツリ", latin: "Cyperus flavidus", page: 730 },
      candidates: [{ name: "キンガヤツリ", latin: "C. flavidus" }]
    }]
  },
  cy_ann: {
    question: "痩果の稜と鱗片の配列",
    options: [{
      label: "B", text: "痩果は扁平な2稜形（レンズ形）；鱗片は螺旋状に多数つく；小穂は極めて細い（幅0.5〜1mm）",
      result: { name: "コカヤツリ", latin: "Cyperus difformis", page: 702 },
      candidates: [{ name: "コカヤツリ", latin: "C. difformis" }]
    }, {
      label: "B", text: "痩果は3稜形；鱗片は2列性", next: "cy_tri",
      candidates: [{ name: "ヒメガヤツリ", latin: "C. tenuispica" }, { name: "アオガヤツリ", latin: "C. nipponicus" }, { name: "カヤツリグサ", latin: "C. microiria" }, { name: "カヤツリグサモドキ", latin: "C. iria" }, { name: "タマガヤツリ", latin: "C. glomeratus" }, { name: "クグガヤツリ", latin: "C. haspan" }, { name: "ヒナガヤツリ", latin: "C. flaccidus" }, { name: "ヤワラカヤツリ", latin: "C. odoratus" }, { name: "ヒロハカヤツリ", latin: "C. compressus" }]
    }]
  },
  cy_tri: {
    question: "花序の形",
    options: [{
      label: "C", text: "小穂は密な球形〜楕円形の頭状花序に集まる", next: "cy_capitate",
      candidates: [{ name: "タマガヤツリ", latin: "C. glomeratus" }, { name: "クグガヤツリ", latin: "C. haspan" }]
    }, {
      label: "C", text: "小穂は散形〜複散形花序か穂状；頭状にはならない", next: "cy_umbel",
      candidates: [{ name: "ヒロハカヤツリ", latin: "C. compressus" }, { name: "カヤツリグサモドキ", latin: "C. iria" }, { name: "ヒメガヤツリ", latin: "C. tenuispica" }, { name: "アオガヤツリ", latin: "C. nipponicus" }, { name: "カヤツリグサ", latin: "C. microiria" }, { name: "ヒナガヤツリ", latin: "C. flaccidus" }, { name: "ヤワラカヤツリ", latin: "C. odoratus" }]
    }]
  },
  cy_capitate: {
    question: "鱗片の色と植物体の大きさ",
    options: [{
      label: "D", text: "鱗片は赤褐色；茎はやや太く高さ20〜60cm；水田雑草",
      result: { name: "タマガヤツリ", latin: "Cyperus glomeratus", page: 714 },
      candidates: [{ name: "タマガヤツリ", latin: "C. glomeratus" }]
    }, {
      label: "D", text: "鱗片は緑色〜わら色；茎は細く高さ10〜30cm",
      result: { name: "クグガヤツリ", latin: "Cyperus haspan", page: 720 },
      candidates: [{ name: "クグガヤツリ", latin: "C. haspan" }]
    }]
  },
  cy_umbel: {
    question: "小軸（rachilla）の翼の有無",
    options: [{
      label: "C", text: "小軸（rachilla）に白色〜淡褐色の翼（縁）がある；翼は鱗片が脱落後も残る", next: "cy_winged",
      candidates: [{ name: "ヒロハカヤツリ", latin: "C. compressus" }, { name: "カヤツリグサモドキ", latin: "C. iria" }]
    }, {
      label: "C", text: "小軸に翼はない；鱗片は宿存するか軸ごと落ちる", next: "cy_unwinged",
      candidates: [{ name: "ヒメガヤツリ", latin: "C. tenuispica" }, { name: "アオガヤツリ", latin: "C. nipponicus" }, { name: "カヤツリグサ", latin: "C. microiria" }, { name: "ヒナガヤツリ", latin: "C. flaccidus" }, { name: "ヤワラカヤツリ", latin: "C. odoratus" }]
    }]
  },
  cy_winged: {
    question: "翼の色と小穂の幅・生育地",
    options: [{
      label: "D", text: "翼は幅広く白色透明；小穂は幅2〜3mm；鱗片は暗緑色〜緑黄色；砂地",
      result: { name: "ヒロハカヤツリ", latin: "Cyperus compressus", page: 732 },
      candidates: [{ name: "ヒロハカヤツリ", latin: "C. compressus" }]
    }, {
      label: "D", text: "翼は薄く黄褐色；小穂は幅1〜2mm；鱗片は赤褐色〜褐色；水田・湿地",
      result: { name: "カヤツリグサモドキ", latin: "Cyperus iria", page: 712 },
      candidates: [{ name: "カヤツリグサモドキ", latin: "C. iria" }]
    }]
  },
  cy_unwinged: {
    question: "鱗片の色",
    options: [{
      label: "D", text: "鱗片は淡緑色〜淡黄緑色（成熟しても著しく褐変しない）", next: "cy_green",
      candidates: [{ name: "ヒメガヤツリ", latin: "C. tenuispica" }, { name: "アオガヤツリ", latin: "C. nipponicus" }]
    }, {
      label: "D", text: "鱗片は赤褐色〜暗褐色（成熟すると明瞭に褐色〜赤褐色になる）", next: "cy_brown",
      candidates: [{ name: "カヤツリグサ", latin: "C. microiria" }, { name: "ヒナガヤツリ", latin: "C. flaccidus" }, { name: "ヤワラカヤツリ", latin: "C. odoratus" }]
    }]
  },
  cy_green: {
    question: "植物体の大きさと苞葉の数",
    options: [{
      label: "E", text: "植物は極めて小型（高さ3〜15cm）；小穂は幅0.8〜1mm；苞葉は1〜3枚",
      result: { name: "ヒメガヤツリ", latin: "Cyperus tenuispica", page: 704 },
      candidates: [{ name: "ヒメガヤツリ", latin: "C. tenuispica" }]
    }, {
      label: "E", text: "植物は中型（高さ15〜50cm）；小穂は幅1〜2mm；苞葉は3〜5枚",
      result: { name: "アオガヤツリ", latin: "Cyperus nipponicus", page: 706 },
      candidates: [{ name: "アオガヤツリ", latin: "C. nipponicus" }]
    }]
  },
  cy_brown: {
    question: "小穂の幅と鱗片の光沢・脈",
    options: [{
      label: "E", text: "小穂は幅3〜5mm；鱗片は暗赤褐色で光沢があり、3脈が明瞭；痩果は長さ約1mm",
      result: { name: "カヤツリグサ", latin: "Cyperus microiria", page: 708 },
      candidates: [{ name: "カヤツリグサ", latin: "C. microiria" }]
    }, {
      label: "E", text: "小穂は幅1〜2mm；鱗片は赤褐色で光沢は弱く、脈は不明瞭；茎はしばしば細く軟弱", next: "cy_small_brown",
      candidates: [{ name: "ヒナガヤツリ", latin: "C. flaccidus" }, { name: "ヤワラカヤツリ", latin: "C. odoratus" }]
    }]
  },
  cy_small_brown: {
    question: "苞葉の数と花序の枝の長さ・由来",
    options: [{
      label: "F", text: "苞葉は2〜4枚；花序の枝は長く、小穂は疎らにつく；茎は高さ10〜40cm",
      result: { name: "ヒナガヤツリ", latin: "Cyperus flaccidus", page: 718 },
      candidates: [{ name: "ヒナガヤツリ", latin: "C. flaccidus" }]
    }, {
      label: "F", text: "苞葉は3〜6枚；花序の枝は短く、小穂は密につく；茎は高さ20〜60cm；外来種",
      result: { name: "ヤワラカヤツリ", latin: "Cyperus odoratus", page: 734 },
      candidates: [{ name: "ヤワラカヤツリ", latin: "C. odoratus" }]
    }]
  }
};
