import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import './CreateHelpHome.css';
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import Checkbox from "@vkontakte/vkui/dist/components/Checkbox/Checkbox";
import Link from "@vkontakte/vkui/dist/components/Link/Link";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import Select from "@vkontakte/vkui/dist/components/Select/Select";
import Radio from "@vkontakte/vkui/dist/components/Radio/Radio";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
const osName = platform();

class RegularDonation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            purpose: ''
        };

        this.addressItems = [
            { label: 'Почтовый индекс', name: 'zip' },
            { label: 'Страна', name: 'country' },
            { label: 'Город', name: 'city' }
        ];

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }

    render() {
        const { email, purpose } = this.state;

        return (
                <Panel id="regulardonation">
                    <PanelHeader
                        left={<PanelHeaderButton onClick={this.props.go} data-to="donationtype">
                            {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                        </PanelHeaderButton>}
                    >
                        Регулярный сбор
                    </PanelHeader>
                    <FormLayout>

                        <Input top="Название сбора" placeholder={"Название сбора"} />
                        <Input top="Сумма в месяц, ₽" placeholder={"Сколько нужно в месяц?"} type={'number'} />
                        <Input top="Цель" placeholder={"Например, поддержка приюта"} />
                        <Textarea top="Описание" placeholder={"На что пойдут деньги и как они кому-то помогут?"} />

                        <Select top="Куда получать деньги" placeholder="Куда получать деньги" disabled={'disabled'} value={'vk'}>
                            <option value="vk">VK Pay 1234</option>
                            <option value="card">MasterCard *0239</option>
                        </Select>

                        <Select top="Автор" placeholder="Автор" >
                            <option value="maksimbark">Максим Баркалов</option>
                            <option value="molina">Фонд ремонта Молнии МакКвина</option>
                        </Select>

                        <Button size="xl" onClick={this.props.go} data-to="home">Далее</Button>
                    </FormLayout>
                </Panel>
        );
    }
}

export default RegularDonation;
