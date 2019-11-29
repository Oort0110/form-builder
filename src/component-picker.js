import React, { useContext } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import clsx from 'clsx';
import ComponentsContext from './components-context';
import PickerField from './picker-field';

const ComponentPicker = ({
  dropTarget,
  fields,
}) => {
  const { componentMapper: { BuilderColumn } } = useContext(ComponentsContext);
  return (
    <Droppable
      droppableId={dropTarget.id}
      isDropDisabled
    >
      {(provided, snapshot) => (
        <BuilderColumn className="container">
          <h3 className="title">
            {dropTarget.title}
          </h3>
          <div
            ref={provided.innerRef}
            className={clsx('task-list', {
              dragging: snapshot.isDraggingOver,
            })}
          >
            {fields.map((field, index) => (
              <PickerField
                key={field.id}
                field={field}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        </BuilderColumn>
      )}
    </Droppable>
  );
};

export default ComponentPicker;
