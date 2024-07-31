import videoData from "../data/vids.json"
import yutubeData from "../data/yutubevid.json"


export const getVideos = async () => {
  return videoData.items.map((item) => ({
    title: item.snippet.title,
    imgUrl: item.snippet.thumbnails.high.url,
    id: item?.id?.videoId,
  }))
}

export const getYuTube = () => {
  return yutubeData.items.map((item) => ({
    title: item.snippet.title,
    imgUrl: item.snippet.thumbnails.high.url,
    id: item?.id?.videoId,
  }))
}
