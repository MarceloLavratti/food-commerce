import { Skeleton } from "../../Skeleton/skeleton";

import { Container } from "./skeletonSnacksStyle";

export function SkeletonSnack() {
  return (
    <div className="skeleton-wrapper">
      <Container>
        <Skeleton type="title" />
        <Skeleton type="thumbnail" />
        <Skeleton type="text" />
        <Skeleton type="text" />

        <div>
          <Skeleton type="title" />
          <Skeleton type="image" />
        </div>
      </Container>
    </div>
  );
}
