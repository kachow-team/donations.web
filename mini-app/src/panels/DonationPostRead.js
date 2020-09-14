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
                    <Header subtitle="Автор Андрей Иванов">
                       Добряши помогают котикам
                    </Header>
                    <Div>
                    <p className={'Timeleft'}>Помощь нужна каждый месяц</p>
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
Привет-привет, добряш!<br />
Я создал это событие, чтобы показать какие у меня прекрасные добряши и буду счастлив, если получится вдохновить кого-нибудь хотя бы на маленький перевод в пользу фонда Юна.
<br />
◾ Если получится собрать 1 000 рублей, то это будет 5 обработанных животных от блох и клещей.
<br />
◾ Собранные 5 000 рублей превратятся в 25 кг корма для подопечных фонда.
<br />
◾ А 10 000 рублей позволят провести курс занятий с кинологом по социализации сложной собаки. Чтобы она легче нашла свой дом.
<br />
В благотворительности не бывает маленьких сумм, поэтому если вы хотите помочь, то переведите любую сумму, будь-то 10 рублей или 1000 💚
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
