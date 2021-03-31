import { FC } from "react";
import Head from "next/head";

import { APP_URL } from "@/helpers/constants";

export interface SeoProps {
  title?: string;
  description?: string;
  url?: string;
  ogpImageUrl?: string;
}

const Seo: FC<SeoProps> = (props) => {
  const {
    title = `復習！サイバーセキュリティ月間`,
    url = APP_URL,
    ogpImageUrl = `${APP_URL}/images/ogp.png`,
    description = `2021年のサイバーセキュリティ月間に学習したことを復習する四月馬鹿アプリ`,
  } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      {/* OGP */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="ページの種類" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogpImageUrl} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;
