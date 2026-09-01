export const ogStyles = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    backgroundImage: "linear-gradient(to bottom right, #E0E7FF 25%, #ffffff 50%, #CFFAFE 75%)",
  } as const,
  title: {
    fontSize: "100px",
    fontFamily: "SF Pro",
    background: "linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)",
    backgroundClip: "text",
    color: "transparent",
    lineHeight: "5rem",
    letterSpacing: "-0.02em",
  } as const,
};
