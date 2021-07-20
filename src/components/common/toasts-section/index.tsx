import React, { useContext } from 'react';

import ToastDispatchContext from '../../../contexts/ToastDispatchContext';
import ToastStateContext from '../../../contexts/ToastStateContext';
import Toast from '../toast';
import Action from '../../../reducers/toast/actions';
import Section from './styles';

const ToastsSection: React.FC = () => {
  const { toasts } = useContext(ToastStateContext);
  const dispatch = useContext(ToastDispatchContext);

  const deleteToast = (id: number) => {
    dispatch({
      type: Action.DELETE_TOAST,
      payload: id,
    });
  };

  return (
    <Section>
      {toasts.map(({ id, content, type }) => (
        <Toast deleteToast={deleteToast} key={id} type={type} id={id}>
          {content}
        </Toast>
      ))}
    </Section>
  );
};
export default ToastsSection;
