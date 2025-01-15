import icons from "../../public/icons";

const currencyIcons = {
  ngnIcon: icons.currenciesIcons.ngnIcon,
  usdIcon: icons.currenciesIcons.usdIcon,
  eurIcon: icons.currenciesIcons.eurIcon,
  gbpIcon: icons.currenciesIcons.gbpIcon,
};

// For email masking and initials
export function getInitials(firstName: string, lastName: string): string {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const lastInitial = lastName.charAt(0).toUpperCase();

  return `${firstInitial}${lastInitial}`;
}

export function maskEmail(email: string): string {
  const [localPart, domain] = email.split("@");
  const maskedLocalPart = `${localPart[0]}${"*".repeat(
    localPart.length - 2
  )}${localPart.slice(-1)}`;
  return `${maskedLocalPart}@${domain}`;
}

// For clipboard operations
export const handleCopy = (value: string, callback: () => void): void => {
  navigator.clipboard.writeText(value).then(() => {
    callback();
  });
};

// For numeric input handling
export const handleNumericKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>
): void => {
  if (
    e.key === "Backspace" ||
    e.key === "Tab" ||
    e.key === "Enter" ||
    e.ctrlKey ||
    e.metaKey
  ) {
    return;
  }

  if (!/[0-9]/.test(e.key)) {
    e.preventDefault();
  }
};

export const handleNumericPaste = (
  e: React.ClipboardEvent<HTMLInputElement>
): void => {
  const pastedData = e.clipboardData.getData("text");

  if (!/^\d+$/.test(pastedData)) {
    e.preventDefault();
  }
};

// For file downloads
export const handleDownload = (url: string, fileName: string): void => {
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  link.setAttribute("target", "_blank");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// For transforming arrays
interface LabelValue {
  value: string | number;
  label: string;
}

export const transformToLabelValue = <T extends Record<string, unknown>>(
  array: T[],
  valueKey: keyof T,
  labelKey: keyof T
): LabelValue[] => {
  return array?.map((item) => ({
    value: item[valueKey] as string | number,
    label: item[labelKey] as string,
  }));
};

// For number formatting
export function formatNumberWithoutExponential(
  number: number,
  decimalPlaces: number
): string {
  if (typeof number !== "number" || isNaN(number)) {
    return "Invalid number";
  }

  let formattedNumber: string = number.toString();

  if (Math.abs(number) < 1 && formattedNumber.length > decimalPlaces + 2) {
    formattedNumber = number.toFixed(decimalPlaces + 5).replace(/\.?0*$/, "");
  } else {
    formattedNumber = number.toFixed(decimalPlaces);
  }

  return formattedNumber;
}

type CurrencyIconKey = "ngn" | "usd" | "eur" | "gbp";

export const getCurrencyIconByString = (currency: string): string | null => {
  const iconMap: Record<CurrencyIconKey, string> = {
    ngn: currencyIcons.ngnIcon,
    usd: currencyIcons.usdIcon,
    eur: currencyIcons.eurIcon,
    gbp: currencyIcons.gbpIcon,
  };

  return iconMap[currency as CurrencyIconKey] || null;
};
