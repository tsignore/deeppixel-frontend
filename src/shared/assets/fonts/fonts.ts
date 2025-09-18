import localFont from "next/font/local";

export const switzer = localFont({
  src: [
    {
      path: "./switzer/OTF/Switzer-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./switzer/OTF/Switzer-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./switzer/OTF/Switzer-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./switzer/OTF/Switzer-Bold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
});

export const basier = localFont({
  src: [
    {
      path: "./basier/BasierCircle-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./basier/BasierCircle-Medium.ttf",
      weight: "500",
      style: "normal",
    },
        {
      path: "./basier/BasierCircle-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./basier/BasierCircle-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-basier",
});

export const junicode = localFont({
  src: [
     {
      path: "./junicode/Junicode-Italic.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./junicode/Junicode-BoldItalic.ttf",
      weight: "800",
      style: "normal",
    }
  ],
  variable: "--font-junicode",
});

export const roboto = localFont({
  src: [
    {
      path: "./roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});

export const inter = localFont({
  src: [
    {
      path: "./inter/Inter_18pt-SemiBold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});
