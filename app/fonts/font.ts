import localFont from "next/font/local";

const Milik = localFont({
  src: [
    {
      path: "../fonts/millikdemoversion.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-milik",
});

const Proxima = localFont({
  src: [
    {
      path: "../fonts/ProximaNovafont.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-proxima",
});

export { Milik, Proxima };
