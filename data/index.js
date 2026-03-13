"use strict";

var ALL_KEYS = {
  genus: {
    id: "genus",
    icon: "🔬",
    title: "カヤツリグサ科 属の検索",
    titleEn: "Genus Identification",
    desc: "標本を観察して形質を選択し、属を同定します",
    nodes: GENUS_NODES,
    color: "#2d5a3d"
  },
  carex_section: {
    id: "carex_section",
    icon: "📐",
    title: "スゲ属（Carex）節の検索",
    titleEn: "Section Identification",
    desc: "スゲ属の節を同定します（勝山 2005, 2009 参照）",
    nodes: CAREX_SECTION_NODES,
    color: "#3a4f2d"
  },
  cyperus_species: {
    id: "cyperus_species",
    icon: "🌾",
    title: "カヤツリグサ属（Cyperus）種の検索",
    titleEn: "Species Identification",
    desc: "カヤツリグサ属の種を同定します（pp.702–745）",
    nodes: CYPERUS_SPECIES_NODES,
    color: "#4a5f2d"
  }
};