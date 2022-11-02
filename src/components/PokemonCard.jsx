import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({ title, description, url }) => {
  return (
    <>
      <Card
        title={title}
        extra={<StarOutlined />}
        cover={<img src={url} alt={title} />}
      >
        <Meta description={description} />
      </Card>
    </>
  );
};

export default PokemonCard;
