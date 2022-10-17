import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="flex justify-center">
      <img
        className="flex h-[70vh]"
        src="https://cdn.shopify.com/s/files/1/0532/9397/3658/files/Banner_2100x.png"
      />
      {/* <Image
        src="https://cdn.shopify.com/s/files/1/0532/9397/3658/files/Banner_2100x.png"
        layout="responsive"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        className="inset-0"
        draggable="false"
      /> */}
    </div>
  )
}

export default Hero
