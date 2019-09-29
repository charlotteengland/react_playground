import React from 'react';
import Split from './compositions/Splits'
import './App.css'
import Tooltip from './compositions/Tooltip'
import Messages from './Messages';

const firstTooltip = (
  <Tooltip 
    color='hotpink'
    message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip 
    message='another tooltip message'
    color='#126BCC'>
    officiis
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      <Split className='left' flexBasis='2'>
        This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        {/* make another tooltip directly inside the App */}
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
        This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
      <Messages name="Messages" unread={0}/>
  <Messages name="Notifications" unread={10}/>
    </main>
  )
}

export default App;
