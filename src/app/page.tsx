import { unstable_setRequestLocale } from "next-intl/server";

import { CardDemo } from "@/components/CardDemo";

function RootPage({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  // const t = useTranslations();
  return (
    <div style={{overflowX: 'hidden'}} >
      {/* Hello */}
      {/* <h1>{t("welcome")}</h1>
      <p>{t("description")}</p> */}

    </div>
  );
}

export default RootPage;
