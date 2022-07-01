import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.css';

function App() {

  const [items] = useState([
    { id: 0, text: 'item0' },
    { id: 1, text: 'item1' },
    { id: 2, text: 'item2' },
  ]);

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
              {items.map((item, index) => (
              <Draggable draggableId={item.text} index={index} key={item.id}>
                {(provided) => (
                  <div
                    className='item'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    {item.text}
                  </div>
                )}
              </Draggable>
              ))}
              {provided.placeholder} {/*作法として記述しておかないとコンソールにエラーが出る*/}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
