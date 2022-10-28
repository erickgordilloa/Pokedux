import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = () => {
  return (
    <>
      <Card
        title="Dito"
        extra={<StarOutlined />}
        cover={<img src="" alt="dito" />}
      >
        <Meta description="example" />
      </Card>
    </>
  );
};

export default PokemonCard;
