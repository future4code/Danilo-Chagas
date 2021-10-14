import { ActorCard } from "./style"

export default function CastCard(props: any) {
    const { name, character, profile_path } = props.info
    return (
        <ActorCard>
            {!profile_path ?
                <img loading={"lazy"} alt={"unavailable"} src={"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"} /> :
                <img loading={"lazy"} alt={`${name}`} src={`https://image.tmdb.org/t/p/w${200}${profile_path}`} />}
            <h6 className={"name"}>{name}</h6>
            <p className={"character"}>{character}</p>
        </ActorCard>
    )
}