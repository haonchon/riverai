/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../ga";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://www.youtube.com/player_api"></script>
        {GA_TRACKING_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}');
                  `,
              }}
            />
          </>
        )}
      </Head>
      <body className="font-yourfont">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
