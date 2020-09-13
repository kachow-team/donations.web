import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

const CreateHelpHome = ({ id, go }) => (
    <Panel id={id}>
        <PanelHeader>Example</PanelHeader>
        <Group title="Navigation Example">
            <Div>
                <span>У вас пока нет добрых дел</span>
            </Div>
            <Div>
                <Button size="xl" level="2" onClick={go} data-to="persik">
                   Сделать доброе дело
                </Button>
            </Div>
        </Group>
    </Panel>
);

export default CreateHelpHome;
