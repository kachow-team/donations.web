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
import './RegularDonation.css'

import uploadPlaceHolder from '../img/uploadPlaceholder.svg';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const osName = platform();

class RegularDonation extends React.Component {

    state = {
        file: '',
        imagePreviewUrl: ''
    };

    fileRef = React.createRef();

    triggerClick() {
        this.fileRef.current.click()
    }

    onChangeImage (e){
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
            this.props.setDonation({imagePreviewUrl: reader.result})
        };

        reader.readAsDataURL(file)
    }

    render() {
        return (
                <Panel id="regulardonation">
                    <PanelHeader
                        left={<PanelHeaderButton onClick={this.props.go} data-to="donationtype">
                            {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                        </PanelHeaderButton>}
                    >
                        {this.props.donationType === 'regular' ? 'Регулярный сбор' : 'Целевой сбор'}
                    </PanelHeader>
                    <FormLayout className={'FormMain'}>
                        <Div>
                        <div onClick={() => this.triggerClick()} style={{
                            backgroundImage: `url(${this.state.imagePreviewUrl === '' ? uploadPlaceHolder : this.state.imagePreviewUrl})`,
                            //width:"375px",
                            height:"153px",
                            borderRadius:"10px",
                            backgroundSize: "cover",
                            backgroundPosition: "center top"
                        }} />
                        </Div>

                        <input id='selectImage' hidden type="file" ref={this.fileRef} style={{padding:0}} onChange={(e) => this.onChangeImage(e)} />

                        <Input top="Название сбора" placeholder={"Название сбора"} />
                        <Input top={this.props.donationType === 'regular' ? "Сумма в месяц, ₽" : "Сумма, ₽"} placeholder={"Сколько нужно в месяц?"} type={'number'} />
                        <Input top="Цель" placeholder={"Например, поддержка приюта"} />
                        <Textarea top="Описание" placeholder={"На что пойдут деньги и как они кому-то помогут?"} />

                        <Select top="Куда получать деньги" placeholder="Куда получать деньги" disabled={'disabled'} value={'vk'}>
                            <option value="vk">VK Pay 1234</option>
                            <option value="card">MasterCard *0239</option>
                        </Select>

                        {this.props.donationType === 'regular' ? (
                        <Select top="Автор" placeholder="Автор" >
                            <option value="user">{!!this.props.user ? `${this.props.user.first_name} ${this.props.user.last_name}`: 'Андрей Иванов'}</option>
                            <option value="molina">Фонд ремонта Молнии МакКвина</option>
                        </Select>
                            ) : ''}
                        {this.props.donationType === 'regular' ? (
                                <Button size="xl" onClick={this.props.go} data-to="donationsnippet">Создать сбор</Button>
                            ) :
                            (
                                <Button size="xl" onClick={this.props.go} data-to="targetdonation">Далее</Button>
                            )
                        }

                    </FormLayout>
                </Panel>
        );
    }
}

export default RegularDonation;
