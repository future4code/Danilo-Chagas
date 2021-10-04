import { ActorCard } from "./style"

export default function CastCard(props: any) {
    const { order, name, character, profile_path } = props.info
    return (
        <ActorCard>
            {!profile_path ?
                <img alt={"unavailable image"}/> :
                <img loading={"lazy"} alt={`${name}'s photo'`} src={`https://image.tmdb.org/t/p/w${200}${profile_path}`} />}
            <h6 className={"name"}>{name}</h6>
            <p className={"character"}>{character}</p>
        </ActorCard>
    )
}