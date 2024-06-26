interface HeadingProps {
  textColor: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  children: React.ReactNode;
}

const index: React.FC<HeadingProps> = ({
  textColor,
  fontWeight,
  lineHeight,
  children,
  fontSize,
}) => {
  return (
    <h1
      className={`font-montserrat`}
      style={{
        color: textColor,
        fontWeight: fontWeight,
        fontSize: fontSize,
        lineHeight: lineHeight
      }}
    >
      {children}
    </h1>
  );
};

export default index;
