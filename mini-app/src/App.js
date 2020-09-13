import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import CreateHelpHome from "./panels/CreateHelpHome";
import DonationTypePage from "./panels/DonationTypePage";
import RegularDonation from "./panels/RegularDonation";
import DonationSnippet from "./panels/DonationSnippet";
import DonationPostRead from "./panels/DonationPostRead";

const App = () => {
	const [activePanel, setActivePanel] = useState('createhelphome');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [donation, setDonation] = useState({});

	useEffect(() => {
		setPopout(null);
		// bridge.subscribe(({ detail: { type, data }}) => {
		// 	if (type === 'VKWebAppUpdateConfig') {
		// 		const schemeAttribute = document.createAttribute('scheme');
		// 		schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
		// 		document.body.attributes.setNamedItem(schemeAttribute);
		// 	}
		// });
		// async function fetchData() {
		// 	const user = await bridge.send('VKWebAppGetUserInfo');
		// 	setUser(user);
		// 	setPopout(null);
		// }
		//fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<CreateHelpHome id='createhelphome' go={go} />
			<DonationTypePage id='donationtype' go={go} />
			<RegularDonation id='regulardonation' go={go} setDonation={setDonation}/>
            <DonationSnippet id='donationsnippet' go={go} donation={donation} setDonation={setDonation}/>
            <DonationPostRead id='donationpostread' go={go} donation={donation} setDonation={setDonation} />
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Persik id='persik' go={go} />
		</View>
	);
};

export default App;

