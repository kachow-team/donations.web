import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";

import uploadPlaceHolder from '../img/uploadPlaceholder.svg';
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import './DonationSnippet.css'
import Separator from "@vkontakte/vkui/dist/components/Separator/Separator";
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";
import Progress from "@vkontakte/vkui/dist/components/Progress/Progress";

const osName = platform();

class DonationSnippet extends React.Component {
    render() {
        return (
            <Panel id="donationsnippet">
                <PanelHeader
                    left={<PanelHeaderButton onClick={this.props.go} data-to="regulardonation">
                        {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                    </PanelHeaderButton>}
                >
                    Новости
                </PanelHeader>
                <Div style={{marginTop:'8px'}}>
                <div className={'Snippet'}>
                    <div style={{
                        backgroundImage: `url(${this.props.donation.imagePreviewUrl === '' ? uploadPlaceHolder : this.props.donation.imagePreviewUrl})`,
                        //width:"375px",
                        height: "153px",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        backgroundSize: "cover",
                        backgroundPosition: "center top"
                    }}/>

                    <Group header={
                        <Header subtitle="Максим Баркалов">
                            Другие сервисы VK
                        </Header>
                    }>
                        <Separator/>
                        <Div className={'Sum'}>
                            <InfoRow header="Собрано в сентябре 8500₽">
                                <Progress value={40}/>
                            </InfoRow>
                                <Button mode="outline">Помочь</Button>
                        </Div>
                    </Group>

                </div>
                </Div>
            </Panel>
        );
    }
}

export default DonationSnippet;
