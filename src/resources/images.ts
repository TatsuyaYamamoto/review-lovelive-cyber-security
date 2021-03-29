export type CharaFacialType = "futsu" | "egao" | "kanashi" | "ase" | "kirakira";

import yoshiko_futsu_png from "@/assets/images/yoshiko_futsu.png";
import yoshiko_egaopng from "@/assets/images/yoshiko_egao.png";
import yoshiko_kanashi_png from "@/assets/images/yoshiko_kanashi.png";

import hanamaru_futsu_png from "@/assets/images/hanamaru_futsu.png";

import ruby_futsu_png from "@/assets/images/ruby_futsu.png";
import ruby_egao_png from "@/assets/images/ruby_egao.png";
import ruby_ase_png from "@/assets/images/ruby_ase.png";
import ruby_kirakira_png from "@/assets/images/ruby_kirakira.png";

const images = {
  yoshiko_futsu_png,
  yoshiko_egaopng,
  yoshiko_kanashi_png,
  //
  hanamaru_futsu_png,
  //
  ruby_futsu_png,
  ruby_egao_png,
  ruby_ase_png,
  ruby_kirakira_png,
} as const;

export default images;
