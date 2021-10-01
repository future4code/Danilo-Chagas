import { Container, FilterType } from "./style";

export default function Filter() {
    return (
        <Container>
            <FilterType>
                <details>

                    <summary className={"name"}>Ordenar por</summary>

                    <ul>

                        <li>mais populares</li>
                        <li>menos populares</li>
                        <li>mais recentes</li>
                        <li>menos recentes</li>
                    </ul>
                </details>
            </FilterType>

            <FilterType>
                <details>

                    <summary className={"name"}>Gênero</summary>

                    <ul>

                        <li>Ação</li>
                        <li>Aventura</li>
                        <li>Suspense</li>
                        <li>Terror</li>
                        <li>nhjka</li>
                        <li>gsd</li>
                        <li>sd</li>
                        <li>gyhdqqw</li>
                        <li>dwer</li>
                        <li>gsd</li>
                        <li>gsd</li>
                        <li>astr</li>
                        <li>idffe</li>
                    </ul>
                </details>
            </FilterType>

        </Container>
    )
}