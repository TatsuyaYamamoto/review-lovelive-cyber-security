import cyber_security_awareness_month from "./cyber_security_awareness_month.mdx";
import cyber_security_hashtag from "./cyber_security_hashtag.mdx";
import dia_love_password from "./dia_love_password.mdx";
import end_3_18 from "./end_3_18.mdx";
import motto from "./motto.mdx";
import two_factor_auth from "./two_factor_auth.mdx";
import update_to_latest from "./update_to_latest.mdx";

const footnotes = {
  cyber_security_awareness_month,
  cyber_security_hashtag,
  dia_love_password,
  end_3_18,
  motto,
  two_factor_auth,
  update_to_latest,
} as const;

export type FootnoteId = keyof typeof footnotes;

export default footnotes;
