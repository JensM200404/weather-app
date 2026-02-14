"use client";

import dynamic from "next/dynamic";

const FavoritesMapClient = dynamic(() => import("./FavoritesMapClient"), {
  ssr: false, //ensure map component only loads on client (needs window/document -> doesnt exist on next.js server-side rendering)
});

export default function FavoritesMap(props) {
  return <FavoritesMapClient {...props} />;
}
