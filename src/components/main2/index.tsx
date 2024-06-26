import image from "assets/3.png";

const index = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <img src={image} />
      <h2>This is the header here</h2>
    </div>
  );
};

export default index;
