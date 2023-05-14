import React, { useState } from "react";
import styled from "styled-components";
import { Icono, Box, Btn, Saldo, Detalle, IconoTema } from "../UI";
import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";

const IconoMargin = styled(Icono)`
    margin-top: 2px;
`;

const Div = styled.div`
    font-size: 26px;
    padding: 20px 0;
`;

const Account = () => {
    const [toggleState, untoggle] = useState(true);

    const toggleHandler = () => {
        untoggle((toggleState) => !toggleState);
    };

    // style={{ fontSize: "26px", padding: "20px 0" }}

    return (
        <Box>
            <h2>Cuenta</h2>
            <Div>
                Saldo disponible
                <span>
                    <IconoTema src={dinero} alt="Icono de saldo" />
                </span>
                {toggleState ? (
                    <Saldo>
                        <Detalle>$</Detalle> 8,621.50
                    </Saldo>
                ) : null}
            </Div>

            <Btn onClick={toggleHandler}>
                <IconoMargin
                    src={toggleState ? privado : ojo}
                    alt="Privacidad de saldo"
                />
            </Btn>
        </Box>
    );
};

export default Account;
