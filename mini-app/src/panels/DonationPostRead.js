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

import comment from '../img/comment.svg';

const osName = platform();

class DonationPostRead extends React.Component {
    render() {

        let authname = !!this.props.user && this.props.donationAuthor === 'user' ? `${this.props.user.first_name} ${this.props.user.last_name}` : 'Андрей Иванов';
        authname = this.props.donationAuthor === 'user' ? authname : 'Фонд ремонта Молнии МакКвина';


        const arr = this.props.donationDescription.split(/\n/);
        const resultArr = [];
        arr.forEach((item, i) => {
            if(i%2===0) resultArr.push(<br />);
            resultArr.push(item);
        });

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
                    <Header subtitle={`Автор ${authname}`}>
                        {this.props.donationName}
                    </Header>
                    <Div>
                    <p className={'Timeleft'}>{this.props.donationType !== 'regular' && !!this.props.donationEndDate && this.props.endType ==='date' ? 'Помощь нужна каждый месяц' : `Сбор закончится ${this.props.donationEndDate}`}</p>
                    </Div>
                </div>
                <Div>
                    <Separator/>
                    <InfoRow className={'PostRead'} header="Нужно собрать в сентябре">
                       <div className={'Container'} style={{position: 'relative'}}>
                        <Progress value={70}/>
                        <span className={'numberOnProgress'} style={{
                            position: 'absolute',
                            bottom: '11%',
                            right: '30%',
                            paddingRight: '8px'
                        }}>
                            8 500₽
                        </span>
                        <span className={'numberOnProgress'} style={{
                            position: 'absolute',
                            bottom: '11%',
                            right:8,
                            color: '#818C99'
                        }}>
                            10 000₽
                        </span>
                       </div>
                    </InfoRow>
                    <Separator/>
                    <div className={'textContent'}>
                        <p>
                            {resultArr}
                  </p>  </div>
                </Div>
                <img src={comment} />
                <Separator/>
                    <Div className={'Sum lastProgressInPost'}>
                        <InfoRow className={'snippetInfoRow'} header="Собрано в сентябре 8500₽">
                            <Progress value={40}/>
                        </InfoRow>
                        <Button onClick={this.props.go} data-to={'donationpostread'} mode="commerce">Помочь</Button>
                    </Div>

            </Panel>
        );
    }
}

export default DonationPostRead;
