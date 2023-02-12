import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKMARKS } from "../utils/Queries";

export default function Bookmarks() {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || sessionStorage.getItem("currentUser")
  );

  const {
    data: bookmarksData,
    loading: bookmarksLoading,
    error: bookmarksError,
    refetch,
  } = useQuery(GET_BOOKMARKS, {
    variables: { id: currentUser.id },
  });

  if (bookmarksLoading) return <h1>Loading...</h1>;
  if (bookmarksError) return <h1>{bookmarksError.message}</h1>;

  const bookmarks = bookmarksData.getBookmarksByUserId.bookmarks;

  refetch();

  return (
    <div className="bg-white w-1/2 float-left shadow-lg mt-8 rounded-lg ml-[350px]">
      <div>
        <div className="flex w-full p-8 flex-row">
          {bookmarks.map((bookmark) => (
            <div key={bookmark.id} className="m-6 p-4 rounded-xl bg-black/30">
              <br />
              <h2 className="text-black font-bold text-xl">
                {bookmark.title}
              </h2>
              <p className="p-2">{bookmark.content}</p>
              <img src={bookmark.postImage} className="rounded-xl object-contain" /> <br />
              Author: <span className="font-bold">{bookmark.postedBy.handle}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
