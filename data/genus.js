"use strict";

// 属の検索表 — カヤツリグサ科
var GENUS_NODES = {
  start: {
    options: [{
      label: "A",
      text: "痩果の鱗片は2枚以下",
      next: "g2"
    }, {
      label: "A",
      text: "鱗片は12枚",
      result: {
        name: "アンペラ属",
        latin: "Lepironia",
        page: 746
      }
    }]
  },
  g2: {
    options: [{
      label: "B",
      text: "花序は単性花",
      next: "g3"
    }, {
      label: "B",
      text: "少なくともいくつかの花は両性花",
      next: "g8"
    }]
  },
  g3: {
    options: [{
      label: "C",
      text: "痩果は果胞で包まれ、基部にコップ状の脚部はない",
      next: "g4"
    }, {
      label: "C",
      text: "痩果は果胞に包まれず、基部にコップ状の脚部がある",
      next: "g5"
    }]
  },
  g4: {
    options: [{
      label: "D",
      text: "果胞は完全に閉じて、小穂はすべて単性花",
      result: {
        name: "スゲ属",
        latin: "Carex",
        page: 54,
        subKey: "carex_section",
        subKeyLabel: "スゲ属の節を調べる"
      }
    }, {
      label: "D",
      text: "果胞は一部開いて、頂生花は雄性、側生花は両性",
      result: {
        name: "ヒゲハリスゲ属",
        latin: "Kobresia",
        page: 526
      }
    }]
  },
  g5: {
    options: [{
      label: "D",
      text: "花序は頭状で腋生し短い柄をもち、痩果は2枚の鱗片に強く包まれる",
      result: {
        name: "カガシラ属",
        latin: "Diplacrum",
        page: 528
      }
    }, {
      label: "D",
      text: "花序は穂状で茎の上部につき、痩果は2枚の鱗片にゆるく包まれる",
      result: {
        name: "シンジュガヤ属",
        latin: "Scleria",
        page: 528
      }
    }]
  },
  g8: {
    options: [{
      label: "C",
      text: "小穂の花はまばらで、ほとんどが両性花",
      next: "g9"
    }, {
      label: "C",
      text: "小穂は多花で常に両性花",
      next: "g13"
    }]
  },
  g9: {
    options: [{
      label: "D",
      text: "小穂の花は2列性",
      next: "g10"
    }, {
      label: "D",
      text: "小穂の花は螺旋状",
      next: "g12"
    }]
  },
  g10: {
    options: [{
      label: "E",
      text: "柱頭の基部は肥厚する",
      result: {
        name: "ミカヅキグサ属",
        latin: "Rhynchospora",
        page: 540
      }
    }, {
      label: "E",
      text: "柱頭の基部は肥厚せず明瞭でない",
      next: "g11"
    }]
  },
  g11: {
    options: [{
      label: "F",
      text: "柱頭は早落性",
      result: {
        name: "ノグサ属",
        latin: "Schoenus",
        page: 556
      }
    }, {
      label: "F",
      text: "柱頭は宿存性",
      result: {
        name: "ネビキグサ属",
        latin: "Machaerina",
        page: 562
      }
    }]
  },
  g12: {
    options: [{
      label: "E",
      text: "茎は中空",
      result: {
        name: "ヒトモトススキ属",
        latin: "Cladium",
        page: 566
      }
    }, {
      label: "E",
      text: "茎は中実",
      result: {
        name: "クロガヤ属",
        latin: "Gahnia",
        page: 568
      }
    }]
  },
  g13: {
    options: [{
      label: "D",
      text: "小穂は螺旋状につく（テンツキ属の数種を除く）",
      next: "g14"
    }, {
      label: "D",
      text: "小穂は2列性",
      next: "g24"
    }]
  },
  g14: {
    options: [{
      label: "E",
      text: "花被片はない",
      next: "g15"
    }, {
      label: "E",
      text: "花被片がある",
      next: "g19"
    }]
  },
  g15: {
    options: [{
      label: "F",
      text: "小穂は単生し、柱頭の基部は明瞭でない",
      result: {
        name: "ビャッコイ属",
        latin: "Isolepis",
        page: 570
      }
    }, {
      label: "F",
      text: "小穂は複生し、柱頭の基部は円盤状かしきりがある",
      next: "g16"
    }]
  },
  g16: {
    options: [{
      label: "G",
      text: "柱頭の基部は早落性",
      result: {
        name: "テンツキ属",
        latin: "Fimbristylis",
        page: 572
      }
    }, {
      label: "G",
      text: "柱頭の基部は宿存性",
      result: {
        name: "ハタガヤ属",
        latin: "Bulbostylis",
        page: 602
      }
    }]
  },
  g19: {
    options: [{
      label: "F",
      text: "花被片は鱗片状",
      result: {
        name: "クロタマガヤツリ属",
        latin: "Fuirena",
        page: 606
      }
    }, {
      label: "F",
      text: "花被片は刺状か糸状",
      next: "g20"
    }]
  },
  g20: {
    options: [{
      label: "G",
      text: "小穂は1個で頂生する",
      next: "g21"
    }, {
      label: "G",
      text: "小穂は通常多数",
      next: "g22"
    }]
  },
  g21: {
    options: [{
      label: "H",
      text: "柱頭の基部は肥厚する",
      result: {
        name: "ハリイ属",
        latin: "Eleocharis",
        page: 610
      }
    }, {
      label: "H",
      text: "柱頭の基部はやや肥厚するが明瞭でない",
      result: {
        name: "ミネハリイ属",
        latin: "Trichophorum",
        page: 638
      }
    }]
  },
  g22: {
    options: [{
      label: "H",
      text: "花被片は10個以上で糸状で平滑",
      result: {
        name: "ワタスゲ属",
        latin: "Eriophorum",
        page: 640
      }
    }, {
      label: "H",
      text: "花被片は4〜6個以下で刺状",
      next: "g23"
    }]
  },
  g23: {
    options: [{
      label: "I",
      text: "鱗片の表面に毛がある",
      next: "g23a"
    }, {
      label: "I",
      text: "鱗片は無毛または縁に繊毛がある",
      next: "g23b"
    }]
  },
  g23a: {
    options: [{
      label: "J",
      text: "葉は根生するものと茎から出るものの両方があり、茎には節がある",
      result: {
        name: "ウキヤガラ属",
        latin: "Bolboschoenus",
        page: 644
      }
    }, {
      label: "J",
      text: "葉はすべて根生し、茎には節はない",
      result: {
        name: "オオサンカクイ属",
        latin: "Actinoscirpus",
        page: 650
      }
    }]
  },
  g23b: {
    options: [{
      label: "J",
      text: "茎は中空で数個から多数の節がある",
      result: {
        name: "クロアブラガヤ属",
        latin: "Scirpus",
        page: 652
      }
    }, {
      label: "J",
      text: "茎は中実で、まれに節がある",
      result: {
        name: "ホタルイ属",
        latin: "Schoenoplectus",
        page: 670
      }
    }]
  },
  g24: {
    options: [{
      label: "E",
      text: "茎には多くの節があり葉鞘で覆われ、非常に長い根茎をもち、海岸に生育する",
      result: {
        name: "コウシュンスゲ属",
        latin: "Remirea",
        page: 688
      }
    }, {
      label: "E",
      text: "茎はほとんどが中実で葉鞘にすべてが覆われない",
      next: "g25"
    }]
  },
  g25: {
    options: [{
      label: "F",
      text: "花穂は1花のみ結実",
      next: "g26"
    }, {
      label: "F",
      text: "花穂は2〜多数が結実",
      next: "g27"
    }]
  },
  g26: {
    options: [{
      label: "G",
      text: "小穂の苞は鱗片状、花は2個の被膜（鱗片と前葉）に包まれる",
      result: {
        name: "ヒンジガヤツリ属",
        latin: "Lipocarpha",
        page: 690
      }
    }, {
      label: "G",
      text: "小穂には2個の大型の鱗片があり、そのうちの1個が結実",
      result: {
        name: "ヒメクグ属",
        latin: "Kyllinga",
        page: 692
      }
    }]
  },
  g27: {
    options: [{
      label: "G",
      text: "痩果の稜の1個が小軸に向く",
      result: {
        name: "カワラスガナ属",
        latin: "Pycreus",
        page: 698
      }
    }, {
      label: "G",
      text: "痩果の1面が小軸に向く",
      result: {
        name: "カヤツリグサ属",
        latin: "Cyperus",
        page: 702,
        subKey: "cyperus_species",
        subKeyLabel: "カヤツリグサ属の種を調べる"
      }
    }]
  }
};

// ============================================================
// CAREX SECTION KEY — スゲ属の節の検索表 (pp.25-28)
// ============================================================
