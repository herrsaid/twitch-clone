import { getRecommended } from "@/lib/recommended-service";
import Recommended from "./recommended";
import Toggle from "./toggle";
import Wrapper from "./wrapper";
import Following from "./following";
import { getFollowing } from "@/lib/follow-service";

export default async function Sidebar ()
{
    const recommended = await getRecommended();
    const following = await getFollowing()

    return(
        <Wrapper>
            <Toggle/>
            <Recommended data={recommended} />
            <Following data={following}/>
        </Wrapper>
    )
}