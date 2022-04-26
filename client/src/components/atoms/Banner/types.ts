import type { Maybe, Media } from "@tribeplatform/gql-client/types";

export type BannerProps = {
  banner?: Maybe<Media>;
  status: 'idle' | 'error' | 'loading' | 'success';
};
