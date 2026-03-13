"use strict";

// カヤツリグサ属 種の検索表
// 出典：日本カヤツリグサ科植物図譜（星野卓二・正木智美）準拠
// ※ ページ番号・分類体系・種数をすべてPDF検索表に合わせて修正

var CYPERUS_SPECIES_NODES = {

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  最初の分岐：痩果の形状
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  start: {
    question: "痩果の形状と柱頭の岐数",
    options: [
      {
        label: "A",
        text: "痩果は3稜形；柱頭は3岐",
        next: "cy_3rib",
        candidates: [
          { name: "シチトウイ",             latin: "C. malaccensis" },
          { name: "フトイガヤツリ",         latin: "C. sp." },
          { name: "シュロガヤツリ",         latin: "C. involucratus" },
          { name: "スナハマスゲ",           latin: "C. sp." },
          { name: "ハマスゲ",               latin: "C. rotundus" },
          { name: "オニガヤツリ",           latin: "C. sp." },
          { name: "ヌマガヤツリ",           latin: "C. serotinus" },
          { name: "ウシクグ",               latin: "C. orthostachyus" },
          { name: "コゴメガヤツリ",         latin: "C. sp." },
          { name: "カヤツリグサ",           latin: "C. microiria" },
          { name: "チャガヤツリ",           latin: "C. iria" },
          { name: "コチャガヤツリ",         latin: "C. sp." },
          { name: "イヌクグ",               latin: "C. sp." },
          { name: "ムツオレガヤツリ",       latin: "C. articulatus" },
          { name: "ヒナガヤツリ",           latin: "C. flaccidus" },
          { name: "クグガヤツリ",           latin: "C. haspan" },
          { name: "アゼガヤツリ",           latin: "C. sp." },
          { name: "ヒメガヤツリ",           latin: "C. tenuispica" },
          { name: "ツルナジコアゼガヤツリ", latin: "C. sp." },
          { name: "タマガヤツリ",           latin: "C. glomeratus" },
          { name: "メリケンガヤツリ",       latin: "C. eragrostis" },
        ],
      },
      {
        label: "A",
        text: "痩果はレンズ形（2稜形）；柱頭は通常2岐",
        next: "cy_2rib",
        candidates: [
          { name: "アオガヤツリ",         latin: "C. nipponicus" },
          { name: "オオシロガヤツリ",     latin: "C. difformis" },
          { name: "ヒメアオガヤツリ",     latin: "C. sp." },
          { name: "シロガヤツリ",         latin: "C. sp." },
          { name: "ミズガヤツリ",         latin: "C. sp." },
          { name: "オキナワオオガヤツリ", latin: "C. sp." },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  3稜形グループ：花序の形
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  cy_3rib: {
    question: "花序の形",
    options: [
      {
        label: "B",
        text: "小穂は花序枝に穂状、または花序枝先端に掌状につく",
        next: "cy_inflo",
        candidates: [
          { name: "シチトウイ",             latin: "C. malaccensis" },
          { name: "フトイガヤツリ",         latin: "C. sp." },
          { name: "シュロガヤツリ",         latin: "C. involucratus" },
          { name: "スナハマスゲ",           latin: "C. sp." },
          { name: "ハマスゲ",               latin: "C. rotundus" },
          { name: "オニガヤツリ",           latin: "C. sp." },
          { name: "ヌマガヤツリ",           latin: "C. serotinus" },
          { name: "ウシクグ",               latin: "C. orthostachyus" },
          { name: "コゴメガヤツリ",         latin: "C. sp." },
          { name: "カヤツリグサ",           latin: "C. microiria" },
          { name: "チャガヤツリ",           latin: "C. iria" },
          { name: "コチャガヤツリ",         latin: "C. sp." },
          { name: "イヌクグ",               latin: "C. sp." },
          { name: "ムツオレガヤツリ",       latin: "C. articulatus" },
          { name: "ヒナガヤツリ",           latin: "C. flaccidus" },
          { name: "クグガヤツリ",           latin: "C. haspan" },
          { name: "アゼガヤツリ",           latin: "C. sp." },
          { name: "ヒメガヤツリ",           latin: "C. tenuispica" },
          { name: "ツルナジコアゼガヤツリ", latin: "C. sp." },
        ],
      },
      {
        label: "B",
        text: "小穂は頭状に密集してつく",
        next: "cy_capitate",
        candidates: [
          { name: "タマガヤツリ",     latin: "C. glomeratus" },
          { name: "メリケンガヤツリ", latin: "C. eragrostis" },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  小穂配列様式：穂状 vs 掌状
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  cy_inflo: {
    question: "小穂の配列様式",
    options: [
      {
        label: "C",
        text: "小穂は花序枝に穂状につく",
        next: "cy_spicate",
        candidates: [
          { name: "シチトウイ",       latin: "C. malaccensis" },
          { name: "フトイガヤツリ",   latin: "C. sp." },
          { name: "シュロガヤツリ",   latin: "C. involucratus" },
          { name: "スナハマスゲ",     latin: "C. sp." },
          { name: "ハマスゲ",         latin: "C. rotundus" },
          { name: "オニガヤツリ",     latin: "C. sp." },
          { name: "ヌマガヤツリ",     latin: "C. serotinus" },
          { name: "ウシクグ",         latin: "C. orthostachyus" },
          { name: "コゴメガヤツリ",   latin: "C. sp." },
          { name: "カヤツリグサ",     latin: "C. microiria" },
          { name: "チャガヤツリ",     latin: "C. iria" },
          { name: "コチャガヤツリ",   latin: "C. sp." },
          { name: "イヌクグ",         latin: "C. sp." },
          { name: "ムツオレガヤツリ", latin: "C. articulatus" },
        ],
      },
      {
        label: "C",
        text: "小穂は花序枝の先端に掌状につく",
        next: "cy_digitate",
        candidates: [
          { name: "ヒナガヤツリ",           latin: "C. flaccidus" },
          { name: "クグガヤツリ",           latin: "C. haspan" },
          { name: "アゼガヤツリ",           latin: "C. sp." },
          { name: "ヒメガヤツリ",           latin: "C. tenuispica" },
          { name: "ツルナジコアゼガヤツリ", latin: "C. sp." },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  穂状グループ：葉の形態
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  cy_spicate: {
    question: "有花茎の葉の形態",
    options: [
      {
        label: "D",
        text: "有花茎の下部の葉は退化し針状",
        next: "cy_needle",
        candidates: [
          { name: "シチトウイ",     latin: "C. malaccensis" },
          { name: "フトイガヤツリ", latin: "C. sp." },
          { name: "シュロガヤツリ", latin: "C. involucratus" },
        ],
      },
      {
        label: "D",
        text: "有花茎の葉は長く発達する",
        next: "cy_leaf",
        candidates: [
          { name: "スナハマスゲ",     latin: "C. sp." },
          { name: "ハマスゲ",         latin: "C. rotundus" },
          { name: "オニガヤツリ",     latin: "C. sp." },
          { name: "ヌマガヤツリ",     latin: "C. serotinus" },
          { name: "ウシクグ",         latin: "C. orthostachyus" },
          { name: "コゴメガヤツリ",   latin: "C. sp." },
          { name: "カヤツリグサ",     latin: "C. microiria" },
          { name: "チャガヤツリ",     latin: "C. iria" },
          { name: "コチャガヤツリ",   latin: "C. sp." },
          { name: "イヌクグ",         latin: "C. sp." },
          { name: "ムツオレガヤツリ", latin: "C. articulatus" },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  退化針状グループ：根茎の有無
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  cy_needle: {
    question: "根茎の有無",
    options: [
      {
        label: "E",
        text: "根茎は太く横走する",
        next: "cy_thick_rhiz",
        candidates: [
          { name: "シチトウイ",     latin: "C. malaccensis" },
          { name: "フトイガヤツリ", latin: "C. sp." },
        ],
      },
      {
        label: "E",
        text: "横走する根茎はない",
        result: { name: "シュロガヤツリ", latin: "Cyperus involucratus", page: 706 },
        candidates: [{ name: "シュロガヤツリ", latin: "C. involucratus" }],
      },
    ],
  },

  cy_thick_rhiz: {
    question: "有花茎の形状",
    options: [
      {
        label: "F",
        text: "有花茎の上部は3稜形となり、節はない",
        result: { name: "シチトウイ", latin: "Cyperus malaccensis", page: 702 },
        candidates: [{ name: "シチトウイ", latin: "C. malaccensis" }],
      },
      {
        label: "F",
        text: "有花茎は円柱形で、節がある",
        result: { name: "フトイガヤツリ", latin: "Cyperus sp.", page: 704 },
        candidates: [{ name: "フトイガヤツリ", latin: "C. sp." }],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  葉発達グループ：根茎の横走度
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  cy_leaf: {
    question: "根茎の発達と横走",
    options: [
      {
        label: "E",
        text: "根茎は発達し横走する",
        next: "cy_creep",
        candidates: [
          { name: "スナハマスゲ", latin: "C. sp." },
          { name: "ハマスゲ",     latin: "C. rotundus" },
          { name: "オニガヤツリ", latin: "C. sp." },
        ],
      },
      {
        label: "E",
        text: "根茎は短い",
        next: "cy_short",
        candidates: [
          { name: "ヌマガヤツリ",   latin: "C. serotinus" },
          { name: "ウシクグ",       latin: "C. orthostachyus" },
          { name: "コゴメガヤツリ", latin: "C. sp." },
          { name: "カヤツリグサ",   latin: "C. microiria" },
          { name: "チャガヤツリ",   latin: "C. iria" },
          { name: "コチャガヤツリ", latin: "C. sp." },
          { name: "イヌクグ",       latin: "C. sp." },
          { name: "ムツオレガヤツリ", latin: "C. articulatus" },
        ],
      },
    ],
  },

  cy_creep: {
    question: "分花序の中軸の毛の有無",
    options: [
      {
        label: "F",
        text: "分花序の中軸は平滑",
        next: "cy_axis",
        candidates: [
          { name: "スナハマスゲ", latin: "C. sp." },
          { name: "ハマスゲ",     latin: "C. rotundus" },
        ],
      },
      {
        label: "F",
        text: "分花序の中軸には剛毛がある",
        result: { name: "オニガヤツリ", latin: "Cyperus sp.", page: 710 },
        candidates: [{ name: "オニガヤツリ", latin: "C. sp." }],
      },
    ],
  },

  cy_axis: {
    question: "小穂の長さと鱗片の長さ",
    options: [
      {
        label: "G",
        text: "小穂の長さ0.7〜1.5cm；鱗片は長さ約2.5mm",
        result: { name: "スナハマスゲ", latin: "Cyperus sp.", page: 708 },
        candidates: [{ name: "スナハマスゲ", latin: "C. sp." }],
      },
      {
        label: "G",
        text: "小穂の長さ1.5〜2cm；鱗片は長さ3〜3.5mm",
        result: { name: "ハマスゲ", latin: "Cyperus rotundus", page: 708 },
        candidates: [{ name: "ハマスゲ", latin: "C. rotundus" }],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  短根茎グループ：小穂基部の節の有無
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  cy_short: {
    question: "小穂基部の節の有無（熟した後の脱落様式）",
    options: [
      {
        label: "F",
        text: "小穂の基部に節がなく、熟すと鱗片や痩果が落ちても軸は残る",
        next: "cy_nodeless",
        candidates: [
          { name: "ヌマガヤツリ",   latin: "C. serotinus" },
          { name: "ウシクグ",       latin: "C. orthostachyus" },
          { name: "コゴメガヤツリ", latin: "C. sp." },
          { name: "カヤツリグサ",   latin: "C. microiria" },
          { name: "チャガヤツリ",   latin: "C. iria" },
          { name: "コチャガヤツリ", latin: "C. sp." },
        ],
      },
      {
        label: "F",
        text: "小穂の基部に節があり、熟すと小穂の基部から脱落する",
        next: "cy_noded",
        candidates: [
          { name: "イヌクグ",         latin: "C. sp." },
          { name: "ムツオレガヤツリ", latin: "C. articulatus" },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  節なしグループ：小穂の密生度
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  cy_nodeless: {
    question: "小穂の密生度と鱗片・痩果の長さ比",
    options: [
      {
        label: "G",
        text: "多数の小穂が密生してつく；鱗片は長さ約2mm；痩果の長さは鱗片の1/2",
        result: { name: "ヌマガヤツリ", latin: "Cyperus serotinus", page: 712 },
        candidates: [{ name: "ヌマガヤツリ", latin: "C. serotinus" }],
      },
      {
        label: "G",
        text: "小穂は密生してつかない；鱗片は長さ1.2〜1.5mm；痩果の長さは鱗片の2/3",
        next: "cy_loose",
        candidates: [
          { name: "ウシクグ",       latin: "C. orthostachyus" },
          { name: "コゴメガヤツリ", latin: "C. sp." },
          { name: "カヤツリグサ",   latin: "C. microiria" },
          { name: "チャガヤツリ",   latin: "C. iria" },
          { name: "コチャガヤツリ", latin: "C. sp." },
        ],
      },
    ],
  },

  cy_loose: {
    question: "小穂のつく軸の稜の刺毛の有無",
    options: [
      {
        label: "H",
        text: "小穂のつく軸の稜に刺毛がある",
        result: { name: "ウシクグ", latin: "Cyperus orthostachyus", page: 714 },
        candidates: [{ name: "ウシクグ", latin: "C. orthostachyus" }],
      },
      {
        label: "H",
        text: "小穂のつく軸の稜は平滑",
        next: "cy_rachilla",
        candidates: [
          { name: "コゴメガヤツリ", latin: "C. sp." },
          { name: "カヤツリグサ",   latin: "C. microiria" },
          { name: "チャガヤツリ",   latin: "C. iria" },
          { name: "コチャガヤツリ", latin: "C. sp." },
        ],
      },
    ],
  },

  cy_rachilla: {
    question: "鱗片先端の形状",
    options: [
      {
        label: "I",
        text: "鱗片の先端はわずかに凸形となる",
        next: "cy_convex",
        candidates: [
          { name: "コゴメガヤツリ", latin: "C. sp." },
          { name: "カヤツリグサ",   latin: "C. microiria" },
        ],
      },
      {
        label: "I",
        text: "鱗片の先端は外曲する芭がある",
        next: "cy_awn",
        candidates: [
          { name: "チャガヤツリ",   latin: "C. iria" },
          { name: "コチャガヤツリ", latin: "C. sp." },
        ],
      },
    ],
  },

  cy_convex: {
    question: "鱗片の色と中肋の形状",
    options: [
      {
        label: "J",
        text: "鱗片は黄色で上部は円形に近い；中肋は上部のへこみからわずかに突出する",
        result: { name: "コゴメガヤツリ", latin: "Cyperus sp.", page: 716 },
        candidates: [{ name: "コゴメガヤツリ", latin: "C. sp." }],
      },
      {
        label: "J",
        text: "鱗片は黄褐色で上部はやや尖る；中肋の先端は短い凸端となる",
        result: { name: "カヤツリグサ", latin: "Cyperus microiria", page: 718 },
        candidates: [{ name: "カヤツリグサ", latin: "C. microiria" }],
      },
    ],
  },

  cy_awn: {
    question: "小穂への花のつき方",
    options: [
      {
        label: "J",
        text: "小穂に花がやや密につく",
        result: { name: "チャガヤツリ", latin: "Cyperus iria", page: 720 },
        candidates: [{ name: "チャガヤツリ", latin: "C. iria" }],
      },
      {
        label: "J",
        text: "小穂に花はまばらにつき軸が見える",
        result: { name: "コチャガヤツリ", latin: "Cyperus sp.", page: 720 },
        candidates: [{ name: "コチャガヤツリ", latin: "C. sp." }],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  節ありグループ：分花序の形
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  cy_noded: {
    question: "分花序の形状と小穂の長さ",
    options: [
      {
        label: "G",
        text: "分花序は円柱形となり、小穂の長さは4〜5mm",
        result: { name: "イヌクグ", latin: "Cyperus sp.", page: 722 },
        candidates: [{ name: "イヌクグ", latin: "C. sp." }],
      },
      {
        label: "G",
        text: "分花序は小穂が離れてつき、小穂の長さは1〜1.5cm",
        result: { name: "ムツオレガヤツリ", latin: "Cyperus articulatus", page: 724 },
        candidates: [{ name: "ムツオレガヤツリ", latin: "C. articulatus" }],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  掌状グループ：小穂の色
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  cy_digitate: {
    question: "小穂の色",
    options: [
      {
        label: "D",
        text: "小穂は緑色〜淡緑色",
        next: "cy_green",
        candidates: [
          { name: "ヒナガヤツリ", latin: "C. flaccidus" },
          { name: "クグガヤツリ", latin: "C. haspan" },
        ],
      },
      {
        label: "D",
        text: "小穂は赤褐色を帯びる",
        next: "cy_red",
        candidates: [
          { name: "アゼガヤツリ",           latin: "C. sp." },
          { name: "ヒメガヤツリ",           latin: "C. tenuispica" },
          { name: "ツルナジコアゼガヤツリ", latin: "C. sp." },
        ],
      },
    ],
  },

  cy_green: {
    question: "小穂の長さと鱗片・痩果のサイズ",
    options: [
      {
        label: "E",
        text: "小穂の長さ5〜10mm；鱗片の長さ約1mm；痩果の長さ約0.5mm",
        result: { name: "ヒナガヤツリ", latin: "Cyperus flaccidus", page: 726 },
        candidates: [{ name: "ヒナガヤツリ", latin: "C. flaccidus" }],
      },
      {
        label: "E",
        text: "小穂の長さ10〜25mm；鱗片の長さ約3.5mm；痩果の長さ約1.2mm",
        result: { name: "クグガヤツリ", latin: "Cyperus haspan", page: 728 },
        candidates: [{ name: "クグガヤツリ", latin: "C. haspan" }],
      },
    ],
  },

  cy_red: {
    question: "根茎の有無",
    options: [
      {
        label: "E",
        text: "横に延びる根茎をもつ",
        result: { name: "アゼガヤツリ", latin: "Cyperus sp.", page: 730 },
        candidates: [{ name: "アゼガヤツリ", latin: "C. sp." }],
      },
      {
        label: "E",
        text: "根茎は延びず叢生する",
        next: "cy_tufted",
        candidates: [
          { name: "ヒメガヤツリ",           latin: "C. tenuispica" },
          { name: "ツルナジコアゼガヤツリ", latin: "C. sp." },
        ],
      },
    ],
  },

  cy_tufted: {
    question: "花のつき方と鱗片先端",
    options: [
      {
        label: "F",
        text: "小穂は花をまばらにつけ、鱗片は外反しない",
        result: { name: "ヒメガヤツリ", latin: "Cyperus tenuispica", page: 732 },
        candidates: [{ name: "ヒメガヤツリ", latin: "C. tenuispica" }],
      },
      {
        label: "F",
        text: "小穂は花をやや密につけ、鱗片の先端は突出して外反する",
        result: { name: "ツルナジコアゼガヤツリ", latin: "Cyperus sp.", page: 726 },
        candidates: [{ name: "ツルナジコアゼガヤツリ", latin: "C. sp." }],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  頭状グループ：鱗片のサイズと上端
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  cy_capitate: {
    question: "鱗片の長さと上端の形",
    options: [
      {
        label: "C",
        text: "鱗片は長さ約0.7mm；上端は少しへこむ",
        result: { name: "タマガヤツリ", latin: "Cyperus glomeratus", page: 732 },
        candidates: [{ name: "タマガヤツリ", latin: "C. glomeratus" }],
      },
      {
        label: "C",
        text: "鱗片は長さ約2mm；上端は鈍頭",
        result: { name: "メリケンガヤツリ", latin: "Cyperus eragrostis", page: 734 },
        candidates: [{ name: "メリケンガヤツリ", latin: "C. eragrostis" }],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  レンズ形（2稜形）グループ：植物体サイズ
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  cy_2rib: {
    question: "植物体の大きさ（有花茎の高さ）",
    options: [
      {
        label: "B",
        text: "小型の植物；有花茎は高さ30cm以下",
        next: "cy_small",
        candidates: [
          { name: "アオガヤツリ",     latin: "C. nipponicus" },
          { name: "オオシロガヤツリ", latin: "C. difformis" },
          { name: "ヒメアオガヤツリ", latin: "C. sp." },
          { name: "シロガヤツリ",     latin: "C. sp." },
        ],
      },
      {
        label: "B",
        text: "大型の植物；茎は高さ50cm以上",
        next: "cy_large",
        candidates: [
          { name: "ミズガヤツリ",         latin: "C. sp." },
          { name: "オキナワオオガヤツリ", latin: "C. sp." },
        ],
      },
    ],
  },

  cy_small: {
    question: "痩果の形",
    options: [
      {
        label: "C",
        text: "痩果は卵形",
        next: "cy_ovate",
        candidates: [
          { name: "アオガヤツリ",     latin: "C. nipponicus" },
          { name: "オオシロガヤツリ", latin: "C. difformis" },
        ],
      },
      {
        label: "C",
        text: "痩果は長楕円形",
        next: "cy_oblong",
        candidates: [
          { name: "ヒメアオガヤツリ", latin: "C. sp." },
          { name: "シロガヤツリ",     latin: "C. sp." },
        ],
      },
    ],
  },

  cy_ovate: {
    question: "鱗片の並び方",
    options: [
      {
        label: "D",
        text: "鱗片は2列性",
        result: { name: "アオガヤツリ", latin: "Cyperus nipponicus", page: 736 },
        candidates: [{ name: "アオガヤツリ", latin: "C. nipponicus" }],
      },
      {
        label: "D",
        text: "鱗片は2列性とならず螺旋状につく",
        result: { name: "オオシロガヤツリ", latin: "Cyperus difformis", page: 736 },
        candidates: [{ name: "オオシロガヤツリ", latin: "C. difformis" }],
      },
    ],
  },

  cy_oblong: {
    question: "痩果の稜の翼の有無",
    options: [
      {
        label: "D",
        text: "痩果の稜に翼はない",
        result: { name: "ヒメアオガヤツリ", latin: "Cyperus sp.", page: 738 },
        candidates: [{ name: "ヒメアオガヤツリ", latin: "C. sp." }],
      },
      {
        label: "D",
        text: "痩果の稜に翼がある",
        result: { name: "シロガヤツリ", latin: "Cyperus sp.", page: 740 },
        candidates: [{ name: "シロガヤツリ", latin: "C. sp." }],
      },
    ],
  },

  cy_large: {
    question: "小穂の長さと鱗片・痩果のサイズ",
    options: [
      {
        label: "C",
        text: "小穂の長さ1〜2cm；鱗片は長さ約2.5mm；痩果は長さ約1.5mm",
        result: { name: "ミズガヤツリ", latin: "Cyperus sp.", page: 742 },
        candidates: [{ name: "ミズガヤツリ", latin: "C. sp." }],
      },
      {
        label: "C",
        text: "小穂の長さ0.4〜0.6cm；鱗片は長さ1.5〜2mm；痩果は長さ0.8mm",
        result: { name: "オキナワオオガヤツリ", latin: "Cyperus sp.", page: 744 },
        candidates: [{ name: "オキナワオオガヤツリ", latin: "C. sp." }],
      },
    ],
  },
};