import cyber_security_hashtag from "./cyber-security-hashtag.mdx";

const footnotes = {
  cyber_security_hashtag,
} as const;

export type FootnoteId = keyof typeof footnotes;

export default footnotes;
