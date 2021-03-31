import abuse_personal_infomation from "./abuse_personal_infomation.mdx";
import cyber_security_awareness_month from "./cyber_security_awareness_month.mdx";
import cyber_security_hashtag from "./cyber_security_hashtag.mdx";
import dia_love_password from "./dia_love_password.mdx";
import end_3_18 from "./end_3_18.mdx";
import human_security_hall from "./human_security_hall.mdx";
import kokoro_no_suki from "./kokoro_no_suki.mdx";
import link_and_attachement from "./link_and_attachement.mdx";
import motto from "./motto.mdx";
import nisc from "./nisc.mdx";
import phishing_site from "./phishing_site.mdx";
import two_factor_auth from "./two_factor_auth.mdx";
import update_to_latest from "./update_to_latest.mdx";

const footnotes = {
  abuse_personal_infomation,
  cyber_security_awareness_month,
  cyber_security_hashtag,
  dia_love_password,
  end_3_18,
  human_security_hall,
  kokoro_no_suki,
  link_and_attachement,
  motto,
  nisc,
  phishing_site,
  two_factor_auth,
  update_to_latest,
} as const;

export type FootnoteId = keyof typeof footnotes;

export default footnotes;
