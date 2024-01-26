import {BsSun} from 'react-icons/bs'
import { Flex } from '../../style'
import * as C from './style'


export function NavBar(){
    return <C.Container>
        <Flex>
            <C.BtnTheme>
                <BsSun/>
            </C.BtnTheme>
        </Flex>
    </C.Container>
}

