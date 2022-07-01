import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.css';

function App() {

  const [items] = useState(['item0', 'item1','item2']);

  const onDragEnd = (result) => {
    // console.log(result);
    // console.log(result.source.index);
    // console.log(result.destination.index);
    
    // const remove = items.splice(result.source.index, 1);
    // console.log(remove);
  
    const remove = items.splice(result.source.index, 1);
    console.log(remove); 
    items.splice(result.destination.index, 0, remove[0]);
  };

  return (
    <div className='dragDropArea'>
      {/*onDragEndはdrag-and-dropが終了した時に発火するイベント*/}
      <DragDropContext onDragEnd={onDragEnd}> 
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable draggableId='item0' index={0}>
                {(provided) => (
                  <div
                    className='item'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    {items[0]}
                  </div>
                )}
              </Draggable>
               <Draggable draggableId='item1' index={1}>
                {(provided) => (
                  <div
                    className='item'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    {items[1]}
                  </div>
                )}
              </Draggable>
               <Draggable draggableId='item2' index={2}>
                {(provided) => (
                  <div
                    className='item'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    {items[2]}
                  </div>
                )}
              </Draggable>
              {provided.placeholder} {/*作法として記述しておかないとコンソールにエラーが出る*/}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
