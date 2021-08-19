import { useState } from "react";


const useRandomAnimation = (animationList: string[]):string => {
    const animationSelected = animationList[Math.floor(Math.random() * animationList.length)];

    const [animation] = useState<string>(animationSelected);

    return animation;
}

export default useRandomAnimation;
