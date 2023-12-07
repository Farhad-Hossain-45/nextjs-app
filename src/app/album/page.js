import Image from "next/image";
import nextImage from  "@/assets/next_js image.webp"


const AlbumPage = () => {
    return (
        <div>
            <h2>this is album page</h2>
            <Image src="https://i.ibb.co/GV43WVC/next-js-image.webp" alt="next image" width={500} height={500}></Image>
            <h2>assets folder image</h2>
            <Image src={nextImage} alt="next image" width={500} height={500}></Image>
        </div>
    );
};

export default AlbumPage;