import { linearGradient } from "polished";
import { violet, neutral, magenta } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryButton: violet[100],
  textColor: neutral[100],
  textColorOnPlaceholder: neutral[100],
  backgroundColor: neutral[300],
  backgroundGradient: linearGradient({
    colorStops: [`${violet[400]}`, `${magenta[100]}`],
    toDirection: "to top right",
    fallback: "#FFF",
  }),
  primaryFont: primaryFont,
};
