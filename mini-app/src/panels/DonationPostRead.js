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
import './DonationPostRead.css'
import Separator from "@vkontakte/vkui/dist/components/Separator/Separator";
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";
import Progress from "@vkontakte/vkui/dist/components/Progress/Progress";

const osName = platform();

class DonationPostRead extends React.Component {
    render() {
        return (
            <Panel id="donationpostread">
                <div style={{
                    backgroundImage: `url(${this.props.donation.imagePreviewUrl === '' ? uploadPlaceHolder : this.props.donation.imagePreviewUrl})`,
                    //width:"375px",
                    height: "153px",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    backgroundSize: "cover",
                    backgroundPosition: "center top"
                }}/>
                <div>
                    <Header subtitle="Максик Зайка">
                       Добряши помогают котикам
                    </Header>
                    <Div>
                    <p className={'Timeleft'}>Осталось 30 дней</p>
                    </Div>
                </div>
            </Panel>
        );
    }
}

export default DonationPostRead;
