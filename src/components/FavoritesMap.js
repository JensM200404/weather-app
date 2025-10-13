"use client";

import dynamic from "next/dynamic";

const FavoritesMapClient = dynamic(() => import("./FavoritesMapClient"), {
  ssr: false,
});

export default function FavoritesMap(props) {
  return <FavoritesMapClient {...props} />;
}
