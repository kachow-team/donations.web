import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';

import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import Select from "@vkontakte/vkui/dist/components/Select/Select";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import './TargetDonation.css'

import uploadPlaceHolder from '../img/uploadPlaceholder.svg';
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import Radio from "@vkontakte/vkui/dist/components/Radio/Radio";

const osName = platform();

class TargetDonation extends React.Component {

    render() {
        return (
            <Panel id="targetdonation">
                <PanelHeader
                    left={<PanelHeaderButton onClick={this.props.go} data-to="regulardonation">
                        {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                    </PanelHeaderButton>}
                >
                    Дополнительно
                </PanelHeader>
                <div>
                <FormLayout className={'addDonation'}>

                    <Select top="Автор" placeholder="Автор" value={this.props.donationAuthor} onChange={e => this.props.setdonationAuthor(e.currentTarget.value)} >
                        <option value="user">{!!this.props.user ? `${this.props.user.first_name} ${this.props.user.last_name}`: 'Андрей Иванов'}</option>
                        <option value="molina">Фонд ремонта Молнии МакКвина</option>
                    </Select>
                    <FormLayoutGroup top="Сбор завершается">
                        {/**/}
                        <Radio name="type" checked={this.props.endType === 'sum'} onChange={()=>{this.props.setendType('sum')}} >Когда соберем сумму</Radio>
                        <Radio name="type" checked={this.props.endType === 'date'} onChange={()=>{this.props.setendType('date')}}>В определенную дату</Radio>
                    </FormLayoutGroup>

                    {this.props.endType === 'date' ? <Input top="Дата" placeholder={"3 сентября"} type={'date'} value={this.props.donationEndDate} onChange={e => this.props.setdonationEndDate(e.currentTarget.value)}/> : ''}

                    <Button size="xl" onClick={this.props.go} data-to="donationsnippet" style={{marginBottom:'34px'}}>Далее</Button>
                </FormLayout>
                </div>
            </Panel>
        );
    }
}

export default TargetDonation;
