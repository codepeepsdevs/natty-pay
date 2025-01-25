import images from "../../../../public/images";

export const addBeneficiaryLabel = (dark: boolean) => ({
  inputProps: { "aria-label": "Switch demo" },
  sx: {
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "#D4B139", // Custom active color for the thumb
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#4caf50", // Custom active color for the track
    },
    ...(dark && {
      "& .MuiSwitch-track": {
        backgroundColor: "#ffffff", // Inactive background color for the track
      },
    }),
  },
});

export const NetworkProvider = [
  {
    id: 1,
    name: "MTN",
    logo: images.airtime.mtnLogo,
  },
  {
    id: 2,
    name: "GLO",
    logo: images.airtime.gloLogo,
  },
  {
    id: 3,
    name: "AIRTEL",
    logo: images.airtime.airtelLogo,
  },
  {
    id: 4,
    name: "ETISALAT",
    logo: images.airtime.etisalatLogo,
  },
];

export const dataPlanNetwork = [
  {
    id: 1,
    network: "mtn",
    name: "MTN Data",
    logo: images.airtime.mtnLogo,
  },
  {
    id: 2,
    network: "glo",
    name: "GLO Data",
    logo: images.airtime.gloLogo,
  },
  {
    id: 3,
    network: "airtel",
    name: "AIRTEL Data",
    logo: images.airtime.airtelLogo,
  },
  {
    id: 4,
    network: "etisalat",
    name: "ETISALAT Data",
    logo: images.airtime.etisalatLogo,
  },
];
