import localFont from "next/font/local";

const Cabinet_grotesk = localFont({
  src: [
    {
      path: "../fonts/cabinet-grostesk/CabinetGrotesk-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/cabinet-grostesk/CabinetGrotesk-Extralight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/cabinet-grostesk/CabinetGrotesk-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/cabinet-grostesk/CabinetGrotesk-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/cabinet-grostesk/CabinetGrotesk-Bold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/cabinet-grostesk/CabinetGrotesk-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-cabinet-grostesk",
});

const maison_Neue = localFont({
  src: [
    {
      path: "../fonts/maison-Neue/fonnts.com-Maison_Neue_Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/maison-Neue/fonnts.com-Maison_Neue_Light.ttf",
      weight: "200",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-maison-Neue",
});

export { Cabinet_grotesk, maison_Neue };
