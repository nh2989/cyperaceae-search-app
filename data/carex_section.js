"use strict";

// スゲ属 節の検索表
var CAREX_SECTION_NODES = {
  start: {
    options: [{
      label: "A",
      text: "小穂は1個で頂生する",
      next: "cs2"
    }, {
      label: "A",
      text: "小穂は2個以上の複数",
      next: "cs10"
    }]
  },
  cs2: {
    options: [{
      label: "B",
      text: "柱頭2岐、痩果は2稜形",
      result: {
        name: "カンチスゲ節",
        latin: "Sect. Physoglochin",
        page: 54
      }
    }, {
      label: "B",
      text: "柱頭は3岐、痩果は3稜形",
      next: "cs3"
    }]
  },
  cs3: {
    options: [{
      label: "C",
      text: "果胞は有毛",
      result: {
        name: "ヒナスゲ節",
        latin: "Sect. Grallatoriae",
        page: 56
      }
    }, {
      label: "C",
      text: "果胞は無毛",
      next: "cs4"
    }]
  },
  cs4: {
    options: [{
      label: "D",
      text: "痩果の基部に柄がある",
      next: "cs5"
    }, {
      label: "D",
      text: "痩果の基部には柄はない",
      next: "cs6"
    }]
  },
  cs5: {
    options: [{
      label: "E",
      text: "果胞は完熟すると開出する",
      result: {
        name: "キンスゲ節",
        latin: "Sect. Dornera",
        page: 60
      }
    }, {
      label: "E",
      text: "果胞は完熟しても直立する",
      result: {
        name: "イトキンスゲ節",
        latin: "Sect. Circinatae",
        page: 60
      }
    }]
  },
  cs6: {
    options: [{
      label: "E",
      text: "果胞は完熟しても直立",
      next: "cs7"
    }, {
      label: "E",
      text: "果胞は完熟すると斜上か反転する",
      next: "cs8"
    }]
  },
  cs7: {
    options: [{
      label: "F",
      text: "根茎は長く、果胞は長さ3-4mm、嘴はほとんどない",
      result: {
        name: "カラフトイワスゲ節",
        latin: "Sect. Rupestres",
        page: 62
      }
    }, {
      label: "F",
      text: "叢生し、果胞は長さ5-6mm、嘴は長い",
      result: {
        name: "シラコスゲ節",
        latin: "Sect. Rhizopodae",
        page: 64
      }
    }]
  },
  cs8: {
    options: [{
      label: "F",
      text: "果胞は1小穂あたり2-4個で線状披針形、長さ約6mm",
      result: {
        name: "タカネハリスゲ節",
        latin: "Sect. Leucoglochin",
        page: 66
      }
    }, {
      label: "F",
      text: "果胞は1小穂あたり5個以上で広卵形から長卵形、長さは4mm以下",
      result: {
        name: "ハリスゲ節",
        latin: "Sect. Rarae",
        page: 68
      }
    }]
  },
  cs10: {
    options: [{
      label: "B",
      text: "花序は穂状でときに頭状となり、小穂は無柄で基部に前葉がない（マスクサ節には鱗片状の前葉がある）",
      next: "cs11"
    }, {
      label: "B",
      text: "花序は総状か穂状または円錐状、小穂には柄がありその基部に前葉をもつ",
      next: "cs30"
    }]
  },
  cs11: {
    options: [{
      label: "C",
      text: "果胞の縁は翼状か尖る、縁が尖らない場合は嘴が長い",
      next: "cs12"
    }, {
      label: "C",
      text: "果胞の縁は尖らず、嘴は短い",
      next: "cs20"
    }]
  },
  cs12: {
    options: [{
      label: "D",
      text: "花序は単性",
      result: {
        name: "コウボウムギ節",
        latin: "Sect. Macrocephalae",
        page: 80
      }
    }, {
      label: "D",
      text: "花序は両性",
      next: "cs13"
    }]
  },
  cs13: {
    options: [{
      label: "E",
      text: "小穂は雄雌性、ときに頂部の小穂は雄花のみ",
      next: "cs14"
    }, {
      label: "E",
      text: "小穂は雌雄性",
      next: "cs17"
    }]
  },
  cs14: {
    options: [{
      label: "F",
      text: "根茎は長く這う",
      next: "cs15"
    }, {
      label: "F",
      text: "根茎は短く叢生する",
      next: "cs16"
    }]
  },
  cs15: {
    options: [{
      label: "G",
      text: "果胞の縁は尖り、基部は肥厚してスポンジ状となる",
      result: {
        name: "クロカワズスゲ節",
        latin: "Sect. Foetidae",
        page: 84
      }
    }, {
      label: "G",
      text: "果胞の縁は翼状となり、基部は肥厚しない",
      result: {
        name: "ウスイロスゲ節",
        latin: "Sect. Holarrhenae",
        page: 86
      }
    }]
  },
  cs16: {
    options: [{
      label: "G",
      text: "果胞の脈は不明瞭かない、縁は尖らない、長さ2.5-3mm",
      result: {
        name: "クリイロスゲ節",
        latin: "Sect. Heleoglochin",
        page: 92
      }
    }, {
      label: "G",
      text: "果胞の脈は明瞭、縁は尖るか翼をもつ、長さ3-5mm",
      next: "cs16b"
    }]
  },
  cs16b: {
    options: [{
      label: "H",
      text: "葉は革質で硬く幅1-4mm",
      result: {
        name: "ミノボロスゲ節",
        latin: "Sect. Phleoideae",
        page: 94
      }
    }, {
      label: "H",
      text: "葉は草質で軟らかく、幅4-8mm",
      result: {
        name: "オオカワズスゲ節",
        latin: "Sect. Vulpinae",
        page: 100
      }
    }]
  },
  cs17: {
    options: [{
      label: "F",
      text: "小穂は頭状、果胞は披針形で基部に長い柄をもつ",
      result: {
        name: "カヤツリスゲ節",
        latin: "Sect. Cyperoideae",
        page: 102
      }
    }, {
      label: "F",
      text: "小穂は穂状、果胞は卵形か長卵形で基部の柄はたいへん短い",
      next: "cs18"
    }]
  },
  cs18: {
    options: [{
      label: "G",
      text: "小穂の雄部は雌部よりも長く、果胞の基部は肥厚しスポンジ状",
      result: {
        name: "カワズスゲ節",
        latin: "Sect. Stellulatae",
        page: 102
      }
    }, {
      label: "G",
      text: "小穂の雄部は雌部より短く、果胞の基部は肥厚せずスポンジ状とならない",
      next: "cs19"
    }]
  },
  cs19: {
    options: [{
      label: "H",
      text: "花序はまばらに花をつけ、小穂は離れて、最下の苞葉は小穂より長い",
      next: "cs19a"
    }, {
      label: "H",
      text: "花序と小穂はやや密集し、最下の包葉は小穂より短いか同長",
      result: {
        name: "ヤガミスゲ節",
        latin: "Sect. Ovales",
        page: 116
      }
    }]
  },
  cs19a: {
    options: [{
      label: "I",
      text: "柱頭は3岐、痩果は扁3稜形",
      result: {
        name: "マスクサ節",
        latin: "Sect. Gibbae",
        page: 106
      }
    }, {
      label: "I",
      text: "柱頭は2岐、痩果は2稜形",
      result: {
        name: "ヤブスゲ節",
        latin: "Sect. Remotae",
        page: 108
      }
    }]
  },
  cs20: {
    options: [{
      label: "D",
      text: "小穂は雄雌性小穂",
      result: {
        name: "ホソスゲ節",
        latin: "Sect. Dispermae",
        page: 118
      }
    }, {
      label: "D",
      text: "小穂は雌雄性小穂",
      result: {
        name: "ハクサンスゲ節",
        latin: "Sect. Glareosae",
        page: 118
      }
    }]
  },
  cs30: {
    options: [{
      label: "C",
      text: "花序は穂状、小穂は雄雌性、前葉は果胞状",
      next: "cs31"
    }, {
      label: "C",
      text: "花序は総状、小穂は単性か両性、前葉は円筒状",
      next: "cs33"
    }]
  },
  cs31: {
    options: [{
      label: "D",
      text: "花序は穂状で、茎の先端に密集した1つの花序を形成する",
      result: {
        name: "アブランバ節",
        latin: "Sect. Japonicae",
        page: 132
      }
    }, {
      label: "D",
      text: "花序は穂状で、いくつかの分花序に分かれる",
      result: {
        name: "ハナビスゲ節",
        latin: "Sect. Indicae",
        page: 134
      }
    }]
  },
  cs33: {
    options: [{
      label: "D",
      text: "柱頭は2岐、痩果は2稜形",
      next: "cs34"
    }, {
      label: "D",
      text: "柱頭は3岐、痩果は3稜形",
      next: "cs40"
    }]
  },
  cs34: {
    options: [{
      label: "E",
      text: "苞葉に鞘がある",
      next: "cs35"
    }, {
      label: "E",
      text: "苞葉に鞘はない",
      next: "cs37"
    }]
  },
  cs35: {
    options: [{
      label: "F",
      text: "側生の小穂は雄雌性小穂、秋に花をつける",
      result: {
        name: "ナキリスゲ節",
        latin: "Sect. Graciles",
        page: 136
      }
    }, {
      label: "F",
      text: "側生の小穂は雌性小穂、春から初夏に花をつける",
      result: {
        name: "ヒエスゲ節の一部（キノクニスゲなど）",
        latin: "Sect. Rhomboidales",
        page: 248
      }
    }]
  },
  cs37: {
    options: [{
      label: "F",
      text: "果胞の縁は嘴部を除き無毛",
      result: {
        name: "アゼスゲ節",
        latin: "Sect. Phacocystis",
        page: 152
      }
    }, {
      label: "F",
      text: "果胞は有毛または縁に短毛がある",
      result: {
        name: "タヌキラン節",
        latin: "Sect. Podogynae",
        page: 202
      }
    }]
  },
  cs40: {
    options: [{
      label: "E",
      text: "頂小穂は雌雄性小穂",
      next: "cs41"
    }, {
      label: "E",
      text: "頂小穂は雄性か雄雌性小穂",
      next: "cs50"
    }]
  },
  cs41: {
    options: [{
      label: "F",
      text: "苞に鞘はない",
      result: {
        name: "クロボスゲ節の一部",
        latin: "Sect. Racemosae",
        page: 210
      }
    }, {
      label: "F",
      text: "苞に鞘がある",
      next: "cs42"
    }]
  },
  cs42: {
    options: [{
      label: "G",
      text: "果胞は扁平、まばらに毛がある",
      result: {
        name: "タカネナルコ節",
        latin: "Sect. Fuliginosae",
        page: 232
      }
    }, {
      label: "G",
      text: "果胞は扁平でなく、光沢があり無毛",
      result: {
        name: "フサスゲ節の一部（フサスゲ）",
        latin: "Sect. Hymenochlaenae",
        page: 486
      }
    }]
  },
  cs50: {
    options: [{
      label: "F",
      text: "小穂はすべて雄雌性または側小穂のみ雄雌性。頂小穂が雄性の場合は側小穂の雄花部は雌部と同長か長い",
      next: "cs51"
    }, {
      label: "F",
      text: "頂小穂は雄性か上部の2-3個は雄性、他の側小穂は雌性か先端に短い雄部をつける雄雌性",
      next: "cs60"
    }]
  },
  cs51: {
    options: [{
      label: "G",
      text: "葉は軟らかく冬に枯れる（ササノハスゲを除く）",
      next: "cs52"
    }, {
      label: "G",
      text: "葉は光沢があり硬く常緑",
      next: "cs55"
    }]
  },
  cs52: {
    options: [{
      label: "H",
      text: "果胞の嘴は長い",
      result: {
        name: "ミヤマジュズスゲ節",
        latin: "Sect. Mundae",
        page: 234
      }
    }, {
      label: "H",
      text: "果胞の嘴は短い",
      result: {
        name: "タガネソウ節",
        latin: "Sect. Siderostictae",
        page: 236
      }
    }]
  },
  cs55: {
    options: [{
      label: "H",
      text: "側小穂は長い柄をもち垂れ下がり、痩果の頂部に円盤状の付属体がある",
      result: {
        name: "コカンスゲ節",
        latin: "Sect. Decorae",
        page: 244
      }
    }, {
      label: "H",
      text: "小穂の柄は短く斜上し、痩果の頂部は肥厚し長い嘴状となる",
      result: {
        name: "ヒエスゲ節の一部（サコスゲ）",
        latin: "Sect. Rhomboidales",
        page: 256
      }
    }]
  },
  cs60: {
    options: [{
      label: "G",
      text: "頂小穂は雄性、側小穂は雌性か雄雌性",
      next: "cs61"
    }, {
      label: "G",
      text: "上方2-3個の小穂は雄性、他は雌性",
      next: "cs70"
    }]
  },
  cs61: {
    options: [{
      label: "H",
      text: "痩果の頂部に円盤状か嘴状の付属体をつける",
      next: "cs62"
    }, {
      label: "H",
      text: "痩果には付属体はない",
      next: "cs63"
    }]
  },
  cs62: {
    options: [{
      label: "I",
      text: "果胞は革質で硬く、長さ5-8mm",
      result: {
        name: "ヒエスゲ節",
        latin: "Sect. Rhomboidales",
        page: 248
      }
    }, {
      label: "I",
      text: "果胞は薄膜状、長さ5mm以下",
      result: {
        name: "ヌカスゲ節",
        latin: "Sect. Mitratae",
        page: 270
      }
    }]
  },
  cs63: {
    options: [{
      label: "I",
      text: "葉や鞘は有毛",
      result: {
        name: "タマツリスゲの一部（サッポロスゲ）",
        latin: "Sect. Paniceae",
        page: 442
      }
    }, {
      label: "I",
      text: "葉や鞘は無毛",
      next: "cs64"
    }]
  },
  cs64: {
    options: [{
      label: "J",
      text: "果胞は有毛",
      next: "cs65"
    }, {
      label: "J",
      text: "果胞は縁以外は無毛",
      next: "cs67"
    }]
  },
  cs65: {
    options: [{
      label: "K",
      text: "葉はほとんどが根生する",
      next: "cs65a"
    }, {
      label: "K",
      text: "葉は茎の中部につく",
      result: {
        name: "サツマスゲ節",
        latin: "Sect. Occlusae",
        page: 414
      }
    }]
  },
  cs65a: {
    options: [{
      label: "L",
      text: "苞の鞘はない",
      next: "cs65b"
    }, {
      label: "L",
      text: "苞の鞘は長い",
      next: "cs65c"
    }]
  },
  cs65b: {
    options: [{
      label: "M",
      text: "小穂は2cm以下",
      result: {
        name: "ヒメスゲ節",
        latin: "Sect. Acrocystis",
        page: 380
      }
    }, {
      label: "M",
      text: "小穂は4cm以上",
      result: {
        name: "ミヤマシラスゲ節の一部（アキカサスゲ）",
        latin: "Sect. Confertiflorae",
        page: 472
      }
    }]
  },
  cs65c: {
    options: [{
      label: "M",
      text: "果胞は3稜形で扁平でない",
      result: {
        name: "ヒカゲスゲ節",
        latin: "Sect. Digitatae",
        page: 388
      }
    }, {
      label: "M",
      text: "果胞は3稜形で扁平",
      result: {
        name: "イワカンスゲ節",
        latin: "Sect. Ferrugineae",
        page: 400
      }
    }]
  },
  cs67: {
    options: [{
      label: "K",
      text: "果胞は乳頭状突起を密布する",
      next: "cs68"
    }, {
      label: "K",
      text: "果胞に乳頭状突起はない",
      next: "cs69"
    }]
  },
  cs68: {
    options: [{
      label: "L",
      text: "叢生し匍匐根茎はない",
      next: "cs68a"
    }, {
      label: "L",
      text: "匍匐根茎を伸ばし疎生する",
      result: {
        name: "ヤチスゲ節",
        latin: "Sect. Limosae",
        page: 420
      }
    }]
  },
  cs68a: {
    options: [{
      label: "M",
      text: "苞の鞘はない",
      result: {
        name: "クロボスゲ節の一部（ヌマクロボスゲ、ラウススゲ）",
        latin: "Sect. Racemosae",
        page: "220, 222"
      }
    }, {
      label: "M",
      text: "苞は有鞘",
      result: {
        name: "タチスゲ節の一部（タチスゲ）",
        latin: "Sect. Anomalae",
        page: 416
      }
    }]
  },
  cs69: {
    options: [{
      label: "L",
      text: "苞は無鞘（最下のものはときに短い鞘がある）",
      next: "cs69a"
    }, {
      label: "L",
      text: "苞の鞘は長い",
      next: "cs69b"
    }]
  },
  cs69a: {
    options: [{
      label: "M",
      text: "果胞は扁平",
      result: {
        name: "クロボスゲの一部（ミヤマクロスゲなど）",
        latin: "Sect. Racemosae",
        page: 222
      }
    }, {
      label: "M",
      text: "果胞は扁平ではない",
      next: "cs69aa"
    }]
  },
  cs69aa: {
    options: [{
      label: "N",
      text: "長い匍匐根茎がある",
      next: "cs69ab"
    }, {
      label: "N",
      text: "叢生し匍匐根茎はない",
      next: "cs69ac"
    }]
  },
  cs69ab: {
    options: [{
      label: "O",
      text: "果胞は乾燥しても緑色かオリーブ色",
      next: "cs69aba"
    }, {
      label: "O",
      text: "果胞は乾燥すると褐色になる",
      result: {
        name: "ミヤマシラスゲ節",
        latin: "Sect. Confertiflorae",
        page: 466
      }
    }]
  },
  cs69aba: {
    options: [{
      label: "P",
      text: "葉は平坦で幅は3mm以上",
      next: "cs69abaa"
    }, {
      label: "P",
      text: "葉は3稜形か内巻き、幅1-1.5mm",
      result: {
        name: "オニナルコ節の一部（ホロムイクグ、コヌマスゲ）",
        latin: "Sect. Vesicariae",
        page: "490, 492"
      }
    }]
  },
  cs69abaa: {
    options: [{
      label: "Q",
      text: "果胞は長さ3-4mm",
      result: {
        name: "ヒメシラスゲ節",
        latin: "Sect. Molliculae",
        page: 424
      }
    }, {
      label: "Q",
      text: "果胞は長さ約10mm",
      result: {
        name: "オニナルコ節の一部（オニスゲ）",
        latin: "Sect. Vesicariae",
        page: 494
      }
    }]
  },
  cs69ac: {
    options: [{
      label: "O",
      text: "基部の鞘は有毛",
      result: {
        name: "ビロードスゲ節の一部（ハタベスゲ）",
        latin: "Sect. Carex",
        page: 518
      }
    }, {
      label: "O",
      text: "基部の鞘は無毛",
      next: "cs69aca"
    }]
  },
  cs69aca: {
    options: [{
      label: "P",
      text: "果胞は広卵形で長さ2.5-3mm、口部は2歯",
      result: {
        name: "エゾサワスゲ節",
        latin: "Sect. Ceratocystis",
        page: 434
      }
    }, {
      label: "P",
      text: "果胞は披針形で長さ4-9mm、口部は深い2歯となる",
      result: {
        name: "クグスゲ節",
        latin: "Sect. Pseudocypereae",
        page: 436
      }
    }]
  },
  cs69b: {
    options: [{
      label: "M",
      text: "小穂には長柄があり、点頭する",
      next: "cs69ba"
    }, {
      label: "M",
      text: "小穂は短い柄をもち斜上する",
      next: "cs69bb"
    }]
  },
  cs69ba: {
    options: [{
      label: "N",
      text: "葉は有花茎よりも短く、苞の葉身は小穂よりも短い",
      next: "cs69baa"
    }, {
      label: "N",
      text: "葉は有花茎よりも長く、苞の葉身は小穂と同長または長い",
      result: {
        name: "タマツリスゲ節",
        latin: "Sect. Paniceae",
        page: 442
      }
    }]
  },
  cs69baa: {
    options: [{
      label: "O",
      text: "果胞は扁平で細脈があり、長さ5-8mm",
      result: {
        name: "イワカンスゲ節の一部（イワスゲ）",
        latin: "Sect. Ferrugineae",
        page: 400
      }
    }, {
      label: "O",
      text: "果胞は扁平とならず、無脈、長さ3-4.5mm",
      result: {
        name: "タカネシバスゲ節",
        latin: "Sect. Chlorostachyae",
        page: 440
      }
    }]
  },
  cs69bb: {
    options: [{
      label: "N",
      text: "果胞は扁平で、太い脈をもつ",
      result: {
        name: "タチスゲ節の一部（リュウキュウタチスゲ）",
        latin: "Sect. Anomalae",
        page: 418
      }
    }, {
      label: "N",
      text: "果胞は扁平でなく、細い脈をもつ",
      next: "cs69bba"
    }]
  },
  cs69bba: {
    options: [{
      label: "O",
      text: "果胞は乾燥すると黒色となる",
      next: "cs69bbaa"
    }, {
      label: "O",
      text: "果胞は乾燥しても緑色",
      next: "cs69bbab"
    }]
  },
  cs69bbaa: {
    options: [{
      label: "P",
      text: "果胞は直立し、雌鱗片の長さは果胞の1/2以下",
      result: {
        name: "ジュズスゲ節",
        latin: "Sect. Ischnostachyae",
        page: 460
      }
    }, {
      label: "P",
      text: "果胞は斜上し、雌鱗片の長さは果胞とほぼ同長",
      result: {
        name: "ミヤマシラスゲ節の一部（ヤワラスゲ、アワボスゲ）",
        latin: "Sect. Confertiflorae",
        page: "476, 480"
      }
    }]
  },
  cs69bbab: {
    options: [{
      label: "P",
      text: "果胞は長さ6-8mm、直立、長い花柱が宿存する",
      result: {
        name: "ヤマジスゲ節",
        latin: "Sect. Debiles",
        page: 482
      }
    }, {
      label: "P",
      text: "果胞は長さ10mm以上、完熟すると開出し、花柱は宿存しない",
      result: {
        name: "ミタケスゲ節",
        latin: "Sect. Rostrales",
        page: 484
      }
    }]
  },
  cs70: {
    options: [{
      label: "H",
      text: "果胞は無毛",
      next: "cs71"
    }, {
      label: "H",
      text: "果胞は有毛",
      result: {
        name: "ビロードスゲ節の一部（ビロードスゲなど）",
        latin: "Sect. Carex",
        page: 512
      }
    }]
  },
  cs71: {
    options: [{
      label: "I",
      text: "小穂の柄は長く、点頭し、果胞は無脈",
      result: {
        name: "フサスゲ節の一部（アイズスゲ）",
        latin: "Sect. Hymenochlaenae",
        page: 488
      }
    }, {
      label: "I",
      text: "小穂は直立し、果胞は多数脈がある",
      next: "cs72"
    }]
  },
  cs72: {
    options: [{
      label: "J",
      text: "果胞は膜質",
      next: "cs73"
    }, {
      label: "J",
      text: "果胞はコルク質",
      result: {
        name: "シオクグ節",
        latin: "Sect. Paludosae",
        page: 502
      }
    }]
  },
  cs73: {
    options: [{
      label: "K",
      text: "苞は鞘がある",
      result: {
        name: "リュウキュウスゲ節",
        latin: "Sect. Alliiformes",
        page: 490
      }
    }, {
      label: "K",
      text: "苞は無鞘",
      result: {
        name: "オニナルコ節の一部（オニナルコスゲ、オオカサスゲ、カラフトカサスゲ）",
        latin: "Sect. Vesicariae",
        page: 490
      }
    }]
  }
};

// ============================================================
// CYPERUS SPECIES KEY — カヤツリグサ属の種の検索表 (pp.702-745)
// ============================================================
