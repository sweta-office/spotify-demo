import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/Sidebar/Sidebar';
import ViewDrawer from '../components/Sidebar/ViewDrawer';
import Main from '../components/Sidebar/Main';
import React, { useState } from 'react';
import Draggable from 'react-draggable';

export default function Home() {
  const [positionFirst, setPositionFirst] = useState({ positionFirstX: 0 });
  const [positionSecond, setPositionSecond] = useState({ positionSecondX: 0 });

  const onDragFirst = (e, data) => {
    setPositionFirst({ positionFirstX: data.x });
  };
  const onDragSecond = (e, data) => {
    setPositionSecond({ positionSecondX: data.x });
  };

  const styleSidebar = {
  
    width: positionFirst.positionFirstX + 500,
  };
  const styleMain = {
  };


  return (
      <><div className="app">
      <Sidebar cssSidebar="sidebar" styleSidebar={styleSidebar} />
      <Draggable
        defaultPosition={{ x: 0, y: 0 }}
        position={{ x: positionFirst.positionFirstX }}
        onDrag={onDragFirst}
      >
        <div>
          <ViewDrawer cssDrawer="drawerFirst" cssHandle="handleFirst" />
        </div>
      </Draggable>

      <Main cssMain="main" styleMain={styleMain} />

      <Draggable
        defaultPosition={{ x: 0, y: 0 }}
        position={{ x: positionSecond.positionSecondX }}
        onDrag={onDragSecond}
      >
        <div>
          <ViewDrawer cssDrawer="drawerSecond" cssHandle="handleSecond" />
        </div>
      </Draggable>
    </div>
    </>
  
  )
}
