export type CharaFacialType =
  | "futsu"
  | "egao"
  | "kanashi"
  | "ase"
  | "kirakira"
  | "fuman"
  | "odoroki"
  | "daten";

import yoshiko_daten_png from "@/assets/images/yoshiko_daten.png";
import yoshiko_futsu_png from "@/assets/images/yoshiko_futsu.png";
import yoshiko_egao_png from "@/assets/images/yoshiko_egao.png";
import yoshiko_kanashi_png from "@/assets/images/yoshiko_kanashi.png";

import hanamaru_futsu_png from "@/assets/images/hanamaru_futsu.png";
import hanamaru_egao_png from "@/assets/images/hanamaru_egao.png";
import hanamaru_kanashi_png from "@/assets/images/hanamaru_kanashi.png";
import hanamaru_fuman_png from "@/assets/images/hanamaru_fuman.png";
import hanamaru_odoroki_png from "@/assets/images/hanamaru_odoroki.png";

import ruby_futsu_png from "@/assets/images/ruby_futsu.png";
import ruby_egao_png from "@/assets/images/ruby_egao.png";
import ruby_ase_png from "@/assets/images/ruby_ase.png";
import ruby_kirakira_png from "@/assets/images/ruby_kirakira.png";
import ruby_odoroki_png from "@/assets/images/ruby_odoroki.png";

const images = {
  yoshiko_daten_png,
  yoshiko_futsu_png,
  yoshiko_egao_png,
  yoshiko_kanashi_png,

  //
  hanamaru_futsu_png,
  hanamaru_egao_png,
  hanamaru_kanashi_png,
  hanamaru_fuman_png,
  hanamaru_odoroki_png,
  //
  ruby_futsu_png,
  ruby_egao_png,
  ruby_ase_png,
  ruby_kirakira_png,
  ruby_odoroki_png,
} as const;

export default images;
