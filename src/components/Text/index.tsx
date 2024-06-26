interface HeadingProps {
    textColor: string;
    fontSize: string;
    mt?: string;
    mb?: string;
    lineHeight: string;
    fontWeight: number;
    children: React.ReactNode;
  }
  const index: React.FC<HeadingProps> = ({
    textColor,
    fontWeight,
    children,
    fontSize,
    lineHeight,
    mt,
    mb
  }) => {
    return (
      <p
        className={`font-montserrat`}
        style={{
          color: textColor,
          fontWeight,
          fontSize,
          lineHeight,
          marginTop: mt,
          marginBottom: mb
        }}
      >
        {children}
      </p>
    );
  };
  
  export default index;
  