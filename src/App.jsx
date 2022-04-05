import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import Modal from './components/LoginForm';
import './App.css';



const projectID = "cd6e74c8-dff2-4c03-8072-fc63e55343cc";

const App = () => {
    if (!localStorage.getItem('username')) return <Modal />;

    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};
export default App;



