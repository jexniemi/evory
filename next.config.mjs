/** @type {import('next').NextConfig} */

import createMDX from "@next/mdx";

const withMDX = createMDX({});

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      // Old category paths → new category paths
      {
        source: "/talous",
        destination: "/palkka-ja-verot",
        permanent: true,
      },
      {
        source: "/terveys",
        destination: "/terveys-ja-liikunta",
        permanent: true,
      },
      {
        source: "/hyoty",
        destination: "/tyokalut",
        permanent: true,
      },
      // App redirects
      {
        source: "/alennuslaskuri",
        destination: "/sovellus/alennuslaskuri",
        permanent: true,
      },
      {
        source: "/bensakululaskuri",
        destination: "/sovellus/bensakululaskuri",
        permanent: true,
      },
      {
        source: "/joululaskuri",
        destination: "/sovellus/joululaskuri",
        permanent: true,
      },
      {
        source: "/juoksuvauhtilaskuri",
        destination: "/sovellus/juoksuvauhtilaskuri",
        permanent: true,
      },
      {
        source: "/kalorintarvelaskuri",
        destination: "/sovellus/kalorintarvelaskuri",
        permanent: true,
      },
      {
        source: "/kesalomalaskuri",
        destination: "/sovellus/kesalomalaskuri",
        permanent: true,
      },
      {
        source: "/korkoa-korolle-laskuri",
        destination: "/sovellus/korkoa-korolle-laskuri",
        permanent: true,
      },
      {
        source: "/kuukausikone",
        destination: "/sovellus/kuukausikone",
        permanent: true,
      },
      {
        source: "/kuukausipalkkalaskuri",
        destination: "/sovellus/kuukausipalkkalaskuri",
        permanent: true,
      },
      {
        source: "/lentojen-hiilijalanjalkilaskuri",
        destination: "/sovellus/lentojen-hiilijalanjalkilaskuri",
        permanent: true,
      },
      {
        source: "/lippupeli",
        destination: "/sovellus/lippupeli",
        permanent: true,
      },
      {
        source: "/nimikone/kissat",
        destination: "/sovellus/nimikone/kissat",
        permanent: true,
      },
      {
        source: "/nimikone/koirat",
        destination: "/sovellus/nimikone/koirat",
        permanent: true,
      },
      {
        source: "/nimipaivahakukone",
        destination: "/sovellus/nimipaivahakukone",
        permanent: true,
      },
      {
        source: "/opintojen-keskiarvolaskuri",
        destination: "/sovellus/opintojen-keskiarvolaskuri",
        permanent: true,
      },
      {
        source: "/opintolainahyvityslaskuri",
        destination: "/sovellus/opintolainahyvityslaskuri",
        permanent: true,
      },
      {
        source: "/osamaksulaskuri",
        destination: "/sovellus/osamaksulaskuri",
        permanent: true,
      },
      {
        source: "/perusaineenvaihduntalaskuri",
        destination: "/sovellus/perusaineenvaihduntalaskuri",
        permanent: true,
      },
      {
        source: "/qr-generaattori",
        destination: "/sovellus/qr-generaattori",
        permanent: true,
      },
      {
        source: "/sanalaskuri",
        destination: "/sovellus/sanalaskuri",
        permanent: true,
      },
      {
        source: "/sotilasmerkit",
        destination: "/sovellus/sotilasmerkit",
        permanent: true,
      },
      {
        source: "/tippilaskuri",
        destination: "/sovellus/tippilaskuri",
        permanent: true,
      },
      {
        source: "/alv-laskuri",
        destination: "/sovellus/alv-laskuri",
        permanent: true,
      },
      {
        source: "/tuntipalkkalaskuri",
        destination: "/sovellus/tuntipalkkalaskuri",
        permanent: true,
      },
      {
        source: "/vuosipalkkalaskuri",
        destination: "/sovellus/vuosipalkkalaskuri",
        permanent: true,
      },
      {
        source: "/nettopalkkalaskuri",
        destination: "/sovellus/nettopalkkalaskuri",
        permanent: true,
      },
      {
        source: "/saastotavoite-laskuri",
        destination: "/sovellus/saastotavoite-laskuri",
        permanent: true,
      },
      {
        source: "/neliohinta-laskuri",
        destination: "/sovellus/neliohinta-laskuri",
        permanent: true,
      },
      {
        source: "/vesitarve-laskuri",
        destination: "/sovellus/vesitarve-laskuri",
        permanent: true,
      },
      {
        source: "/ika-laskuri",
        destination: "/sovellus/ika-laskuri",
        permanent: true,
      },
      {
        source: "/noppageneraattori",
        destination: "/sovellus/noppageneraattori",
        permanent: true,
      },
    ];
  },
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
