import Image from "next/image";

export const ArticleImage = ({ urlToImage }: { urlToImage: string | null }) => {
  return (
    <div className="flex justify-center p-2">
      <Image
        alt={`photo from ${urlToImage}`}
        width={300}
        height={350}
        src={
          urlToImage !== null
            ? urlToImage
            : `https://epss.ucla.edu/static/images/default-news.png`
        }
      />
    </div>
  );
};
