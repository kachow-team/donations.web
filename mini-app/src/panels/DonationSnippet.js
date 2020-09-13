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
import './RegularDonation.css'

import uploadPlaceHolder from '../img/uploadPlaceholder.svg';

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
                <Div>
                    <div style={{
                        backgroundImage: `url(${this.props.donation.imagePreviewUrl === '' ? uploadPlaceHolder : this.props.donation.imagePreviewUrl})`,
                        //width:"375px",
                        height:"153px",
                        borderRadius:"10px",
                        backgroundSize: "cover",
                        backgroundPosition: "center top"
                    }} />
                </Div>
            </Panel>
        );
    }
}

export default DonationSnippet;
