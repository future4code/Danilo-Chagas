import React from 'react'
import { useHistory, useParams } from "react-router-dom"
import useTripList from '../../hooks/useTripList'
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import { postApplyToTrip } from '../../Endpoint/Endpoint'
import { countries } from '../../constants/Countries'
import { Container } from './style'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

export default function ApplicationFormPage() {
    const history = useHistory()
    const list = useTripList()
    const { tripId } = useParams()

    const { input, onChangeInput, cleanFields } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
    })

    const submitLogin = (e) => {
        e.preventDefault()
        const response = postApplyToTrip(input, tripId)
        response && alert("Candidatura enviada com sucesso!\nEntremos em contato em caso de aprovação.")
        cleanFields()
        history.push("/trips")
    }

    return <Container>
        <button onClick={() => history.push("/trips")}>voltar</button>
        <h3>Viagem: {list ?
            list.trips.filter((item) => {
                return item.id === tripId
            }).map((item) => {
                return `${item.name} | Destino: ${item.planet}`
            })
            :
            <p>Aguarde um momento</p>}
        </h3>
             
        <form onSubmit={submitLogin}>
            <TextField
                name={"name"}
                type={"text"}
                value={input.name}
                onChange={onChangeInput}
                title={"Insira o seu nome. Mín. 03 caracteres.."}
                pattern={"^.{3,}$"}
                required
                id="outlined-required"
                label="nome"
                variant="outlined"
            />

            <TextField
                name={"age"}
                type={"number"}
                value={input.age}
                onChange={onChangeInput}
                title={"Insira sua idade. Você deve ser maior de 18 para se candidatar."}
                InputProps={{ inputProps: { min: 18 } }}
                required
                id="outlined-required"
                label="idade"
                variant="outlined"
            />

            <TextField
                name={"applicationText"}
                type={"text"}
                value={input.applicationText}
                onChange={onChangeInput}
                title={"O texto deve ter no mín. 30 caracteres."}
                pattern={"^.{30,}$"}
                required
                id="outlined-required"
                label="texto de candidatura"
                variant="outlined"
            />

            <TextField
                name={"profession"}
                type={"text"}
                value={input.profession}
                onChange={onChangeInput}
                title={"Insira sua profissão. Mín. 10 caracteres."}
                pattern={"^.{10,}$"}
                required
                id="outlined-required"
                label="profissão"
                variant="outlined"
            />
            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-age-native-simple">país</InputLabel>
                <Select
                    native
                    value={input.country}
                    onChange={onChangeInput}
                    label="País"
                    inputProps={{
                        name: 'country',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    {countries.map((item) => {
                        return <option key={item.ordem} value={item.nome} >{item.nome}</option>

                    })}

                </Select>
            </FormControl>
            <Button
                type="submit"
                variant="contained"
                color="primary"
            >Enviar</Button>

        </form>


    </Container>
}