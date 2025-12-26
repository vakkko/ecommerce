import { DetailsContainer } from "./details.styled";
import type { DetailsProps } from "./details.types";

export default function Details({ data }: DetailsProps) {
  return (
    <DetailsContainer>
      <div>
        <h4>Details</h4>
        <img src={data?.brand?.image} alt="logo" />
      </div>
      <span>Brand: {data?.brand?.name}</span>
      <p>{data?.description}</p>
    </DetailsContainer>
  );
}
