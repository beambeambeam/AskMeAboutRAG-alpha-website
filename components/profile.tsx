import { ComponentProps, FC } from "react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type ProfileProps = {
  type: "BOT" | "USER"
}

const Profile: FC<ComponentProps<"div"> & ProfileProps> = ({
  type,
  className,
  ...rest
}) => {
  const avatarSrc: {
    src: string
    alt: string
    fallback: string
  } =
    type === "BOT"
      ? {
          src: "/bot.png",
          alt: "Bot",
          fallback: "B",
        }
      : {
          src: "/user.png",
          alt: "User",
          fallback: "U",
        }

  return (
    <div {...rest} className={`${cn("h-fit w-fit", className)}`}>
      <Avatar>
        <AvatarImage src={avatarSrc.src} alt={avatarSrc.alt} />
        <AvatarFallback>{avatarSrc.fallback}</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default Profile
